import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ChannelsSchema = new Schema({
    creator    : { type: String, required: true },
    id         : { type: String, required: true, unique:true },
    members    : { type: Array },
    messages   : [{ author: String, text: String, date: String }],
    title      : { type: String, required: true, unique:true }
});

export default mongoose.model('Channels', ChannelsSchema);