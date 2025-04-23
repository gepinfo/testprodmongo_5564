import { Request, Response } from 'express';
import {PersonDao } from '../dao/personDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';



export class PersonService {
    private personDao : PersonDao = new PersonDao();
    private logger: CustomLogger;

    constructor() {
        this.logger = new CustomLogger();
     }

    public deletePerson(req: Request, callback) {
        this.logger.showLogger('info', `Enter into PersonService.ts: deletePerson`);

        let  personId = req.params.id;

        this.personDao.deletePerson(personId, (response) => {
            this.logger.showLogger('info', `Exit from PersonService.ts: deletePerson`);
            callback(response);
        });
    }

    public searchPerson(req: Request, callback) {
        this.logger.showLogger('info', `Enter into PersonService.ts: searchPerson`);

        let  personData = req.query;

        this.personDao.searchPerson(personData, (response) => {
            this.logger.showLogger('info', `Exit from PersonService.ts: searchPerson`);
            callback(response);
        });
    }

    public updatePerson(req: Request, callback) {
        this.logger.showLogger('info', `Enter into PersonService.ts: updatePerson`);

        let  personData = req.body;

        this.personDao.updatePerson(personData, (response) => {
            this.logger.showLogger('info', `Exit from PersonService.ts: updatePerson`);
            callback(response);
        });
    }

    public getPersonById(req: Request, callback) {
        this.logger.showLogger('info', `Enter into PersonService.ts: getPersonById`);

        let  personId = req.params.id;

        this.personDao.getPersonById(personId, (response) => {
            this.logger.showLogger('info', `Exit from PersonService.ts: getPersonById`);
            callback(response);
        });
    }

    public getAllPerson(req: Request, callback) {
        this.logger.showLogger('info', `Enter into PersonService.ts: getAllPerson`);


        this.personDao.getAllPerson((response) => {
            this.logger.showLogger('info', `Exit from PersonService.ts: getAllPerson`);
            callback(response);
        });
    }

    public createPerson(req: Request, callback) {
        this.logger.showLogger('info', `Enter into PersonService.ts: createPerson`);

        let  personData = req.body;

        this.personDao.createPerson(personData, (response) => {
            this.logger.showLogger('info', `Exit from PersonService.ts: createPerson`);
            callback(response);
        });
    }

    public getNounCreatedBy(req: Request, callback) {
        this.logger.showLogger('info', `Enter into PersonService.ts: getNounCreatedBy`);

        let  personData = { created_by: req.query.createdby };

        this.personDao.getNounCreatedBy(personData, (response) => {
            this.logger.showLogger('info', `Exit from PersonService.ts: getNounCreatedBy`);
            callback(response);
        });
    }

    }

