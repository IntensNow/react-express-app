import mongoose from 'mongoose';
import crypto from 'crypto';
import Users from '../../models/Users';

//const Users = mongoose.model('Users');
//методы взаимодействия с БД.
export function setUpConnection() {
    mongoose.connect(`mongodb://admin:q1w2e3r4@ds050539.mlab.com:50539/intensnowchat`);
}

export function createUser(data) {
    const user = new Users({
        userName:       data.userName,
        userEmail:      data.userEmail,
        userLogin:      data.userLogin,
        userPassword:   hash(data.userPassword)
    });
    return user.save();
}
export function getUser(id){
        return Users.findOne(id);
}
export function complianceCheck(data){
    return Users
        .findOne({userLogin:data.userLogin})
        .then(function(doc){
            if ( doc && doc.userPassword === hash(data.userPassword ) ){
                console.log("User password is ok");
                return Promise.resolve(doc);
            } else {
                return Promise.reject("Wrong password or login");
            }
    });
}
export function isUserExist(data){
    return Users
        .findOne({userLogin:data.login})
        .then(function(doc){
            if ( doc ) {
                return Promise.resolve(doc);
            } else {
                return Promise.reject("user doesn't exist");
            }
    })
}

function hash(text) {
    return crypto.createHash('sha1')
                 .update(text)
                 .digest('base64');
}
Users.findOne({userEmail:'d.korobskoy@mail.ru'}, 'userName', (err, result) => {
    if (err){
        console.log(err);
        return false;
    } else {
        console.log('%s %s %s %s', result.userName, result.userLogin, result.userEmail, result.userPassword);
        return true;
    }
});
var query = Users.findOne({userName:'Daniil'}).then((doc) => {
    if(doc){
        console.log(doc);
    }
});

console.log('присвоили переменной запрос: ' + query);