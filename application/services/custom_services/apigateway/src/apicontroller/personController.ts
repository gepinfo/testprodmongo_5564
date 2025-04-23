import * as express from 'express';
import { Request, Response } from 'express';
import * as Constant from '../config/Constant';
import { ApiAdapter }  from '../config/apiAdapter';
import Controller from '../interface/controller.interface';
import { CustomLogger } from '../config/Logger'

export class personController implements Controller {
      public router = express.Router();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.delete('/person/:id', this.deletePerson);
this.router.get('/person/get/search', this.searchPerson);
this.router.put('/person', this.updatePerson);
this.router.get('/person/:id', this.getPersonById);
this.router.get('/person', this.getAllPerson);
this.router.post('/person', this.createPerson);
this.router.get('/person/userid/created_by', this.getNounCreatedBy);
        //#@gepdelimeterone@#
        //#@ssofacebookapiroute@#
        //#@ssogithubapiroute@#
        //#@gepbankingapiroute@#
    }

public deletePerson(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into personController.ts: deletePerson');
        new ApiAdapter().delete(Constant.TESTFEATUREURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
            switch(req.baseUrl) { case '/mobile': res.send(result); break; case '/web': res.send(result); break; default: res.send(null); }
            new CustomLogger().showLogger('info', 'Exit from personController.ts: deletePerson');
        }).catch(err => {
            res.send(err);
        });
    }
public searchPerson(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into personController.ts: searchPerson');
        new ApiAdapter().get(Constant.TESTFEATUREURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
            switch(req.baseUrl) { case '/mobile': res.send(result); break; case '/web': res.send(result); break; default: res.send(null); }
            new CustomLogger().showLogger('info', 'Exit from personController.ts: searchPerson');
        }).catch(err => {
            res.send(err);
        });
    }
public updatePerson(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into personController.ts: updatePerson');
        new ApiAdapter().put(Constant.TESTFEATUREURL + `${req.url}` , req.body)
        .then((res: any) => res.response.json()).then(result => {
            switch(req.baseUrl) { case '/mobile': res.send(result); break; case '/web': res.send(result); break; default: res.send(null); }
            new CustomLogger().showLogger('info', 'Exit from personController.ts: updatePerson');
        }).catch(err => {
            res.send(err);
        });
    }
public getPersonById(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into personController.ts: getPersonById');
        new ApiAdapter().get(Constant.TESTFEATUREURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
            switch(req.baseUrl) { case '/mobile': res.send(result); break; case '/web': res.send(result); break; default: res.send(null); }
            new CustomLogger().showLogger('info', 'Exit from personController.ts: getPersonById');
        }).catch(err => {
            res.send(err);
        });
    }
public getAllPerson(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into personController.ts: getAllPerson');
        new ApiAdapter().get(Constant.TESTFEATUREURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
            switch(req.baseUrl) { case '/mobile': res.send(result); break; case '/web': res.send(result); break; default: res.send(null); }
            new CustomLogger().showLogger('info', 'Exit from personController.ts: getAllPerson');
        }).catch(err => {
            res.send(err);
        });
    }
public createPerson(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into personController.ts: createPerson');
        new ApiAdapter().post(Constant.TESTFEATUREURL + `${req.url}` , req.body)
        .then((res: any) => res.response.json()).then(result => {
            switch(req.baseUrl) { case '/mobile': res.send(result); break; case '/web': res.send(result); break; default: res.send(null); }
            new CustomLogger().showLogger('info', 'Exit from personController.ts: createPerson');
        }).catch(err => {
            res.send(err);
        });
    }
public getNounCreatedBy(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into personController.ts: getNounCreatedBy');
        new ApiAdapter().get(Constant.TESTFEATUREURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
            switch(req.baseUrl) { case '/mobile': res.send(result); break; case '/web': res.send(result); break; default: res.send(null); }
            new CustomLogger().showLogger('info', 'Exit from personController.ts: getNounCreatedBy');
        }).catch(err => {
            res.send(err);
        });
    }

    //#@gepdelimeter@#

    //#@apifacebooklogin@#

    //#@apigithublogin@#

    //#@gepbankinglogin@#








}

