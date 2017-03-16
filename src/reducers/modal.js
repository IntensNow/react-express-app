import { SHOW_MODAL, HIDE_MODAL } from '../constants/ActionTypes';

const initialState = {
    active:false,
    text:''
}

export default function(store = initialState, action) {
    
    if(action.type === SHOW_MODAL) {
        return Object.assign({}, store, { 
                    text: action.text, 
                    active: true
                });
    }
    
    if(action.type === HIDE_MODAL) {
        return Object.assign({}, store, { 
                    text: '', 
                    active: false
                });
    }
    
    return store;
    
}