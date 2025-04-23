import * as mongoose from 'mongoose';
import PersonModel from '../models/daomodels/person';
import { CustomLogger } from '../config/Logger'

export class PersonDao { 
    private personModel = PersonModel;
    private logger: CustomLogger;

    constructor() { 
      this.logger = new CustomLogger();
    }

    public async deletePerson(personId, callback) {
        try {
            this.logger.showLogger('info', `Enter into personDao.ts: deletePerson`);

            const result = await this.personModel.findByIdAndRemove(personId);

            this.logger.showLogger('info', `Exit from personDao.ts: deletePerson`);            
            callback(result);
        } catch (error) {
            this.logger.showLogger('error', `Error in personDao.ts: deletePerson - ${error}`);
            callback(error);
        }
    }

    public async searchPerson(personData, callback) {
        try {
            this.logger.showLogger('info', `Enter into personDao.ts: searchPerson`);

            let and_obj = {};
            let or_obj = {};

            Object.entries(personData).forEach(([key,value]) => {
                if(value !== ''){
                    and_obj[key] = value;
                }
                else{
                    or_obj[key] = { $ne: '' };
                }
            });

            const result = await this.personModel.find(
                {$and: [{ $or: [ or_obj ] }, and_obj],
            });

            this.logger.showLogger('info', `Exit from personDao.ts: searchPerson`);            
            callback(result);
        } catch (error) {
            this.logger.showLogger('error', `Error in personDao.ts: searchPerson - ${error}`);
            callback(error);
        }
    }

    public async updatePerson(personData, callback) {
        try {
            this.logger.showLogger('info', `Enter into personDao.ts: updatePerson`);

            const updatedRecord = await this.personModel.findOneAndUpdate({ _id: personData._id }, personData, { new: true });

            this.logger.showLogger('info', `Exit from personDao.ts: updatePerson`);            
            callback(updatedRecord);
        } catch (error) {
            this.logger.showLogger('error', `Error in personDao.ts: updatePerson - ${error}`);
            callback(error);
        }
    }

    public async getPersonById(personId, callback) {
        try {
            this.logger.showLogger('info', `Enter into personDao.ts: getPersonById`);

            const result = await this.personModel.findById(personId);

            this.logger.showLogger('info', `Exit from personDao.ts: getPersonById`);            
            callback(result);
        } catch (error) {
            this.logger.showLogger('error', `Error in personDao.ts: getPersonById - ${error}`);
            callback(error);
        }
    }

    public async getAllPerson(callback) {
        try {
            this.logger.showLogger('info', `Enter into personDao.ts: getAllPerson`);

            const result = await this.personModel.find();

            this.logger.showLogger('info', `Exit from personDao.ts: getAllPerson`);            
            callback(result);
        } catch (error) {
            this.logger.showLogger('error', `Error in personDao.ts: getAllPerson - ${error}`);
            callback(error);
        }
    }

    public async createPerson(personData, callback) {
        try {
            this.logger.showLogger('info', `Enter into personDao.ts: createPerson`);

            let temp = new this.personModel(personData)
            const result = await temp.save();

            this.logger.showLogger('info', `Exit from personDao.ts: createPerson`);            
            callback(result);
        } catch (error) {
            this.logger.showLogger('error', `Error in personDao.ts: createPerson - ${error}`);
            callback(error);
        }
    }

    public async getNounCreatedBy(personData, callback) {
        try {
            this.logger.showLogger('info', `Enter into personDao.ts: getNounCreatedBy`);

            const result = await this.personModel.aggregate(([
                { $match: { created_by: personData.created_by } }
            ]));

            this.logger.showLogger('info', `Exit from personDao.ts: getNounCreatedBy`);            
            callback(result);
        } catch (error) {
            this.logger.showLogger('error', `Error in personDao.ts: getNounCreatedBy - ${error}`);
            callback(error);
        }
    }

}

