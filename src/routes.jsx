import React from 'react';
import { Route } from 'react-router';
import socket from './socket';

import App from './containers/App/';
import ChatContainer from './containers/ChatContainer';
import SignIn from './containers/SignIn';
import SignUp from './containers/SignUp';
import CheckAccess from './containers/CheckAccess';

//const store = configureStore(undefined, NODE_ENV);

const _SignIn        = () => <SignIn socket={socket}/>;
const _SignUp        = () => <SignUp socket={socket}/>;
const _ChatContainer = () => <ChatContainer socket={socket}/>;

export const routes = (
  <div>
    <Route path="/" component={App}>
      <Route path="/chat" component={CheckAccess(_ChatContainer)}/>
      <Route path="/signin" component={_SignIn}/>
      <Route path="/signup" component={_SignUp}/>
    </Route>
  </div>
);