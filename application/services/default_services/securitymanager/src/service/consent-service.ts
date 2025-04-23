import { Request } from 'express';
import { ConsentDao } from '../daos/consent-dao';
import { CustomLogger } from '../config/logger'

let consentdao = new ConsentDao();

export class Consentservice {
    private callConstructor:string;
    constructor() { 
        this.callConstructor = "callConstructor";
    }
    
    public consentservice(req: Request, callback) {
        new CustomLogger().showLogger('info', 'Enter into consentservice.ts: consentservice');
        const consentbody = req.body;
        consentdao.consentdao(consentbody, (response) => {
            new CustomLogger().showLogger('info', 'Exit from consentservice.ts: Consentcontroller');
            callback(response);
        });

    }

}
