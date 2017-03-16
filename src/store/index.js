import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from '../reducers'
import DevTools from '../containers/DevTools'

export default function configureStore(initialState, NODE_ENV) {
    
    let store;
    if ( NODE_ENV !== 'production' ){
        store = createStore(
            rootReducer,
            initialState,
            compose(
                applyMiddleware(thunk),
                DevTools.instrument()
        ));
    } else {
        store = createStore(
            rootReducer,
            initialState,
            compose(
                applyMiddleware(thunk)
            )); 
    }

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    })
  }

  return store;
}
