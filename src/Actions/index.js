import * as types from '../constants/ActionTypes';
import { browserHistory } from 'react-router';
import fetch from 'isomorphic-fetch';
import cookie from 'react-cookie';


function receiveUser(username) {
  const newUser = {
    name: username
  }
  return {
    type: types.AUTH_SIGNUP_SUCCESS,
    newUser
  }
}

export function addChannels(list) {
    return function(dispatch) {
        dispatch({
        type: types.ADD_CHANNELS,
        list
        });
    }
}

export function requestSignUp() {
    return {
        type:types.AUTH_SIGNUP
    } 
}

export function signUp(user) {
    
  return dispatch => {
      
    dispatch(requestSignUp())
    return fetch('/api/sign_up', {
      method: 'post',
        //заголовки, чтобы возможно было отправить json через body/
      headers: { 
          'Accept': 'application/json', 
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
      })
      .then(response => {
        if(response.ok) {
            //сохраняем имя пользователя в cokie
          cookie.save('username', user.userLogin)
          dispatch(receiveUser(user.userLogin));
          browserHistory.push('/chat');
        }
      })
      .catch(error => {throw error});
  };
}