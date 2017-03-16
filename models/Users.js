import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    userLogin         : { type:String, required: true, unique: true },
    userPassword      : { type:String, required: true }
});

export default mongoose.model('Users', UsersSchema);