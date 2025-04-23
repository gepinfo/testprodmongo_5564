
import * as mongoose from 'mongoose';


const Schema = mongoose.Schema;

export const personSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   name: { type: String },
   age: { type: Number }
})

const personModel = mongoose.model('person', personSchema, 'person');
export default personModel;
