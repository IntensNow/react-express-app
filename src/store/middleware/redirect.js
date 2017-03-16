import REDIRECT from '../../constants/ActionTypes';
import { browserHistory } from 'react-router'

const redirect = () => next => action => {
    
    if(action.type === REDIRECT) {
        browserHistory.push(action.url);
    }
    
    return next(action);
}

export default redirect;