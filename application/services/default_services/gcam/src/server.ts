import * as express from 'express';
import * as mongoose from 'mongoose';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import { SeedService } from './seed';
import { Routes } from './routes/routes';
import { Constants } from './config/constants';
import { WinstonLogger } from './config/winston-logger';
import { SCMService } from './apiservices/system-credentials-manger';

const PORT = Constants.port;

class App {
    public app = express();
    public routerPrv: Routes = new Routes();
    public logger: WinstonLogger = new WinstonLogger();
    public mongoUrl: string;


    constructor() {
        this.DatabaseCredentials();
        this.config();
        this.routerPrv.routes(this.app);
    }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(express.static("public"));
        this.app.use(cors({ credentials: true, origin: true }));

    }

    // private DatabaseCredentials() {
    //     SCMService.SCMData(async result => {
    //         this.mongoUrl = result.data.MONGO_DB_URL;

    //         this.mongoSetup();
    //         this.mongoSeedData();
    //     });
    // }

    private async DatabaseCredentials() {
        SCMService.scmData(async (result) => {
            this.mongoUrl = result.data.MONGO_URL;
            await this.connectToDatabase();
            await this.mongoSeedData();
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


    private mongoSeedData(): void {
        let seedData = new SeedService();
        seedData.create();
    }

}

new App().app.listen(PORT, () => {
    console.log('Express server listening on port ' + PORT);
})