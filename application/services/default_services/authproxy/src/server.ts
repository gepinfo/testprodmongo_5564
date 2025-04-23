import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';
import { Routes } from './routes/routes'
import { Constants } from './config/constants';
import { WinstonLogger } from './config/winston-logger';
import { SCMService } from './apiservices/system-credentials-manger';


const PORT = Constants.port;

class App {
    public app = express();
    public routerPrv: Routes = new Routes();
    public logger: WinstonLogger = new WinstonLogger();
    private dbUrl: string ;
    private mongoUrl: string = Constants.mongoUrl;

    constructor() {
        this.config();
        this.routerPrv.routes(this.app);
        this.DatabaseCredentials();
        
    }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(express.static("public"));
        this.app.use(cors({ credentials: true, origin: true }));

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
    console.log('Express server listening on port ' + PORT);
})