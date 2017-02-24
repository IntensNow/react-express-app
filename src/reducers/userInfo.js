export default function(store = {}, action) {
    
    if(action.type === 'CHANGE_TEXT') {
        return Object.assign({}, store, { text: action.text });
    }
    return store;
    
}