import React from 'react';
import { Route } from 'react-router';
import io from 'socket.io-client';

import App from './containers/App/';
import ChatContainer from './containers/ChatContainer';
import SignIn from './containers/SignIn';
import SignUp from './containers/SignUp';

const socket = io('/api/chat');

const _SignIn        = () => <SignIn socket={socket}/>;
const _SignUp        = () => <SignUp socket={socket}/>;
const _ChatContainer = () => <ChatContainer socket={socket}/>;
      
export const routes = (
  <div>
    <Route path="/" component={App}>
      <Route path="/chat" component={_ChatContainer}/>
      <Route path="/signin" component={_SignIn}/>
      <Route path="/signup" component={_SignUp}/>
    </Route>
  </div>
);