import mongoose from 'mongoose';
import crypto from 'crypto';
import Users from '../../models/Users';
import Channels from '../../models/Channels';

const newID = () => ( '_' + Math.random().toString(36).substr(2,9) );
//const Users = mongoose.model('Users');
//методы взаимодействия с БД.
export function setUpConnection() {  mongoose.connect(`mongodb://admin:q1w2e3r4@ds050539.mlab.com:50539/intensnowchat`);
}

export function createUser(data) {
    const user = new Users({
        userEmail:      data.userEmail,
        userLogin:      data.userLogin,
        userName:       data.userName,
        userPassword:   hash(data.userPassword),
        id:             newID()
    });
    return user.save();
}
export function complianceCheck(data){
    return Users
        .findOne({userLogin:data.userLogin})
        .then(function(doc){
            if ( doc && doc.userPassword === hash( data.userPassword ) ){
                console.log("User password is ok");
                return Promise.resolve(doc);
            } else {
                return Promise.reject("Wrong password or login");
            }
    });
}
export function isUserExist(data){
    return Users.findOne({userLogin:data.login});
}

function hash(text) {
    return crypto.createHash('sha1')
                 .update(text)
                 .digest('base64');
}

export function createChannel(data) {
    const channel = new Channels({
        creator:        data.creator,
        members:        [data.creator],
        id:             newID(),
        title:          data.title
    });
    return channel.save();
}
export function getLobbyChannelsList(){
    return Channels
        .find({creator: /\w/ })
        .then((result) => {
            return Promise.resolve(result);
        })
};
//нужно делать метод
export function userJoinToChannel(user, channelTitle){
    
    Channels.findOne({title: channelTitle}, 'members')
        .then((channel) => {
            channel.members.push(user);
            channel.save(err => console.log(err));
    })
};

export function userExitChannel(user, channelTitle) {
    console.log('предыдущий канал пришел в userExitChannel : ' + channelTitle);
    Channels.findOne({title: channelTitle}, 'members')
        .then(channel => {
            channel.members.some((member, i) => {
                if (member === user) {
                   channel.members.splice(i, 1);
                   return true;
                }
                return false;
        });
        channel.save(err => console.log(err));
    })
}

export function getMessages(channelTitle) {
    return Channels.findOne({ title: channelTitle }, 'messages')
        .then(channel => {
            if( channel ){
                return Promise.resolve(channel.messages);
            } else {
                return Promise.reject('Channel is not defined');
            }
    }, err => Promise.reject(err));
}