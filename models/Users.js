import mongoose from 'mongoose';
import auth from 'express-mongoose-auth';
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    userEmail        : { type:String, required: true },
    userLogin        : { type:String, required: true, unique: true },
    userPassword      : { type:String, required: true }
});

export default mongoose.model('Users', UsersSchema);