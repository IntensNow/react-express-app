import { combineReducers } from 'redux';
import channels from './channels';
import userInfo from './userInfo';
export default combineReducers({
    channels,
    userInfo
});