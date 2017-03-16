import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Promise from 'promise-polyfill'; 

import configureStore from './store';
import { checkAuth } from './Actions';
import { routes } from './routes';

import './main.css';

const store = configureStore(undefined, NODE_ENV);
store.dispatch(checkAuth());

// add promise polyfill for old browsers;
if (!window.Promise) {
  window.Promise = Promise;
}

injectTapEventPlugin();
const mountingPoint = document.createElement('div');
mountingPoint.className = 'app';
document.body.insertBefore(mountingPoint, document.body.firstChild);

render(
    (
        <Provider store={ store }>
            <Router history={ browserHistory } routes={ routes }/>
        </Provider>
    ),
    mountingPoint  
);

console.log('node env = ' + NODE_ENV);