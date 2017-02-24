import * as types from '../constants/ActionTypes';

export function addChannels(list){
    return function(dispatch) {
        dispatch({
        type: types.ADD_CHANNELS,
        list
        });
    }
}