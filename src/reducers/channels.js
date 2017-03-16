import { ADD_CHANNELS, 
         CHANGE_ACTIVE_CHANNEL, 
         ADD_MSGS_FROM_DB } from '../constants/ActionTypes';


const initialState = {
    list: [],
    active: {
        title: 'Lobby Channel',
        messages: []
    }
}

export default function(store = initialState, action) {
    
    if(action.type === ADD_CHANNELS) {
        return Object.assign({}, store, { list: action.list });
    }
    if(action.type === CHANGE_ACTIVE_CHANNEL) {
        return Object.assign({}, store, { active: { title:action.nextChannel, messages: [] } });
    }
    if(action.type === ADD_MSGS_FROM_DB) {
        return Object.assign({}, store, { active: { title:action.channel, messages: action.messages } });
    }
    return store;
    
}