import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import mongoose from 'mongoose';
import { WinstonLogger } from './config/winston-logger';
import { Routes } from './routes/routes'
import { Constants } from './config/constants';
import { VaultConfig } from './config/vault-config';
import { SeedService } from './seed';

const PORT = Constants.port;

class App {
    public app = express();
    public routerPrv: Routes = new Routes();
    public logger: WinstonLogger = new WinstonLogger();
    public DB_Url: string;
    public mongoUrl: string = Constants.mongoUrl;
    

    constructor() {
        this.SeedData();
        this.config();
        this.routerPrv.routes(this.app);
       }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(express.static("public"));
        this.app.use(cors({ credentials: true, origin: true }));  
    }

    private vaultUrl = process.env.VAULT_URL;
    private async SeedData(): Promise<void> {
        let seedservice = new SeedService();
        await seedservice.initKvData(this.vaultUrl, async (callback) => {
                console.log(callback);
               this.DatabaseCredits();
        });
    }

    private DatabaseCredits() {
        let vaultconfig = new VaultConfig();
        vaultconfig.vaultConfig( async res => {
            console.log(`res----->`, res);
                this.DB_Url = res.MONGO_URL;
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