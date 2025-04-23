import { Request, Response } from 'express';
import { PersonService } from '../service/personService';
import { CustomLogger } from '../config/Logger';

let personService : PersonService = new PersonService();

export class PersonController {

    constructor() { }

    public deletePerson(req: Request, res: Response) {
        new CustomLogger().showLogger('info', 'Enter into PersonController.ts: deletePerson');
        new CustomLogger().guidLog(req);

        personService.deletePerson(req, (response) => {
            res.status(200);
            res.json(response);
            new CustomLogger().showLogger('info', 'Exit from PersonController.ts: deletePerson');
        });
    }
    
    public searchPerson(req: Request, res: Response) {
        new CustomLogger().showLogger('info', 'Enter into PersonController.ts: searchPerson');
        new CustomLogger().guidLog(req);

        personService.searchPerson(req, (response) => {
            res.status(200);
            res.json(response);
            new CustomLogger().showLogger('info', 'Exit from PersonController.ts: searchPerson');
        });
    }
    
    public updatePerson(req: Request, res: Response) {
        new CustomLogger().showLogger('info', 'Enter into PersonController.ts: updatePerson');
        new CustomLogger().guidLog(req);

        personService.updatePerson(req, (response) => {
            res.status(200);
            res.json(response);
            new CustomLogger().showLogger('info', 'Exit from PersonController.ts: updatePerson');
        });
    }
    
    public getPersonById(req: Request, res: Response) {
        new CustomLogger().showLogger('info', 'Enter into PersonController.ts: getPersonById');
        new CustomLogger().guidLog(req);

        personService.getPersonById(req, (response) => {
            res.status(200);
            res.json(response);
            new CustomLogger().showLogger('info', 'Exit from PersonController.ts: getPersonById');
        });
    }
    
    public getAllPerson(req: Request, res: Response) {
        new CustomLogger().showLogger('info', 'Enter into PersonController.ts: getAllPerson');
        new CustomLogger().guidLog(req);

        personService.getAllPerson(req, (response) => {
            res.status(200);
            res.json(response);
            new CustomLogger().showLogger('info', 'Exit from PersonController.ts: getAllPerson');
        });
    }
    
    public createPerson(req: Request, res: Response) {
        new CustomLogger().showLogger('info', 'Enter into PersonController.ts: createPerson');
        new CustomLogger().guidLog(req);

        personService.createPerson(req, (response) => {
            res.status(200);
            res.json(response);
            new CustomLogger().showLogger('info', 'Exit from PersonController.ts: createPerson');
        });
    }
    
    public getNounCreatedBy(req: Request, res: Response) {
        new CustomLogger().showLogger('info', 'Enter into PersonController.ts: getNounCreatedBy');
        new CustomLogger().guidLog(req);

        personService.getNounCreatedBy(req, (response) => {
            res.status(200);
            res.json(response);
            new CustomLogger().showLogger('info', 'Exit from PersonController.ts: getNounCreatedBy');
        });
    }
    
}