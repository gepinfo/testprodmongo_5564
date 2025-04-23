import * as express from 'express';
import * as dotenv from "dotenv";
dotenv.config();
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';
import * as cors from 'cors';
import { Constants } from './config/constants';
import { Routes } from './routes/routes';
import { WinstonLogger } from './config/winston-logger';
import { SCMService } from './apiservices/system-credentials-manger';

const PORT = Constants.port;

class App {

    public app: express.Application = express();
    public routePrv: Routes = new Routes();
    public logger: WinstonLogger = new WinstonLogger();
    public mongoUrl: string;

    constructor() {
        this.DatabaseCredentials();
        this.logger.setupLogger();
        this.logger.configureWinston(this.app);
        this.initializeMiddlewares();
        this.routePrv.routes(this.app);
        dotenv.config();
    }

    private initializeMiddlewares() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use('/static', express.static('public'))
        this.app.use(cors({ credentials: true, origin: true }))
        this.app.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "Origin");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });
    }
    private async DatabaseCredentials() {
        SCMService.scmData(async (result) => {
            this.mongoUrl = result.data.MONGO_URL;
            this.connectToDatabase();
        });
    }

    private connectToDatabase(): void {

        mongoose
            .connect(this.mongoUrl)
            .then(() => {
                console.log(`MongoDB connected successfully to: ${this.mongoUrl}`);
            })
            .catch((error) => {
                console.error(`Error connecting to MongoDB:`, error.message);
            });
    }

}



new App().app.listen(PORT, () => {
    console.log('Express server listening on port  ' + PORT);
})