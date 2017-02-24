import express from 'express';
import bodyParser from 'body-parser';
import sharedsession from 'express-socket.io-session';
import path from 'path';
var mongoose = require('mongoose');
var expressSession = require('express-session');
var MongoStore = require('connect-mongo')(expressSession);

mongoose.Promise = global.Promise;

import * as db from './utils/DataBaseUtils';
import socketEvents from './utils/socketEvents';

const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

socketEvents(io, db);

const session = expressSession({
  secret: 'i need more beers',
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({ 
        url: 'mongodb://admin:q1w2e3r4@ds050539.mlab.com:50539/intensnowchat'
  })
});
db.setUpConnection();

//Using bodyParser middleware
app.use( bodyParser.json() );
app.use(express.static('build'));
app.use(session);
io.use(sharedsession(session, { autoSave:true }));
io.on('connection', function(socket){
    socket.on('complianceCheck', function(data){
        db.complianceCheck(data).then(userdata => {
            socket.handshake.session.userdata = userdata;
            userdata.userPassword = undefined;
            console.log('succes' + userdata);
            io.emit('logged', userdata);
        }, error => {
            io.emit('auth error');
        })
    });
});
app.get('/*', (req,res) => {
    res.sendFile(path.join(__dirname.slice(0, -6) , 'build/index.html'))
  })
server.listen(8080, () => {
    console.log(`Server is up and running on port 8080`);
});