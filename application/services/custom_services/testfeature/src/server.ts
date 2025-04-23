import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as mongoose from 'mongoose';
import { Routes } from './routes/routes';
import { WinstonLogger } from './config/WinstonLogger';

const PORT = 8017;

class App {
    public app: express.Application = express();
    public routePrv: Routes = new Routes();
    public logger: WinstonLogger = new WinstonLogger();

    public DB_Url: string = process.env.MONGO_DB_URL;
    public DB_Domain: any = process.env.MONGO_DOMAIN;

    constructor() {
        this.connectToDatabase();
        this.logger.setupLogger();
        this.logger.configureWinston(this.app);
        this.initializeMiddlewares();
        this.routePrv.routes(this.app);
    }

    private initializeMiddlewares() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(cors({ credentials: true, origin: true }));
    }
    
    private connectToDatabase(): void {
        mongoose.connect(this.DB_Url).then(res => {
            console.log(' MongoDB connected successfully.');
        })
        .catch((error) =>  console.log(' Mongo connection failed:', error));
    }

}

new App().app.listen(PORT, () => {
    console.log(`Express Server is running on port ${PORT}`);
});