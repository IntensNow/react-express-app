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
    
}