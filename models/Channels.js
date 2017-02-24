import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ChannelsSchema = new Schema({
    creator    : { type: String, required: true },
    id         : { type: String, required: true, unique:true },
    isPrivate  : { type: Boolean, default: false },
    members    : { type: Array,  required: true },
    title      : { type: String, required: true }
});

export default mongoose.model('Channels', ChannelsSchema);