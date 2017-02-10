import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    userName     : { type:String, required: true },
    userEmail    : { type:String, required: true },
    userLogin    : { type:String, required: true, unique: true,},
    userPassword : { type:String, required: true }
});

export default mongoose.model('Users', UsersSchema);