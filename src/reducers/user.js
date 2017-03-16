import * as types from '../constants/ActionTypes';

/*const initialState = {
    isAuthenticated: true,
    name: 'initial'
}*/

const user = ( store={}, action={} ) => {
    if( action.type === types.AUTH_SUCCESS ) {
        return Object.assign({name:action.user.name, 
            isAuthenticated:action.user.isAuthenticated}, store);
    }
    return store;
}

export default user;