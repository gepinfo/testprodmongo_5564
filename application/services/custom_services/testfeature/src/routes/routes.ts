import { Request, Response } from "express";
import { PersonController } from '../controller/personController';


export class Routes {
    private personController : PersonController = new PersonController();

    public routes(app): void {
        app.route("/health/entity-service").get((req: Request, res: Response) => {
            res.status(200).send({status: "up"});
        });

        app.route("/person/:id").delete(this.personController.deletePerson);
        app.route("/person/get/search").get(this.personController.searchPerson);
        app.route("/person").put(this.personController.updatePerson);
        app.route("/person/:id").get(this.personController.getPersonById);
        app.route("/person").get(this.personController.getAllPerson);
        app.route("/person").post(this.personController.createPerson);
        app.route("/person/userid/created_by").get(this.personController.getNounCreatedBy);
    }
}