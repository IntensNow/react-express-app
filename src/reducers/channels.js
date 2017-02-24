export default function(store = {}, action) {
    
    if(action.type === 'ADD_CHANNELS') {
        return Object.assign({}, store, { list: action.list });
    }
    return store;
    
}