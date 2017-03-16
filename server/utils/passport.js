import passport from 'passport';
var LocalStrategy  = require('passport-local').Strategy;

import Users from '../../models/Users';

export default function( passport ) {
    
    passport.use('local-signup', new LocalStrategy({
        usernameField: 'userLogin',
        passwordField: 'userPassword'
    }, (userLogin, userPassword, done) => {
        const user = new Users({
            userLogin, 
            userPassword
        });
        user.save((err) => {
            if (err) {
                throw err;
            }
            return done(null, user);
        });
    }));
    
    passport.use('local-signin', new LocalStrategy({
        usernameField: 'userLogin',
        passwordField: 'userPassword'
    }, (userLogin, userPassword, done) => {
        console.log('до сервера дошло')
        Users.findOne({ userLogin }).then((user) => {
            console.log('поиск завершен');
            /*if (!user) {
                return done(null,false);
            }
            return user.userPassword === userPassword
                 ? done(null, user)
                 : done(null, false);*/
            return user ? 
                    user.userPassword === userPassword 
                        ? done(null, user)
                        : done(null, false)
                 : done(null, false);
        }, (err) => {
            return done(err);
        }); 
    }));
    
    passport.serializeUser(function(user, done) {
      done(null, user);
    });

    passport.deserializeUser(function(user, done) {
      done(null, user);
    });
}