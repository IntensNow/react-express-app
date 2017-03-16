import { combineReducers } from 'redux';

import channels            from './channels';
import user                from './user';
import userInfo            from './userInfo';
import modal               from './modal';


export default combineReducers({
    channels,
    user,
    userInfo,
    modal
});