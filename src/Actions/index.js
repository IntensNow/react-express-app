import * as types from '../constants/ActionTypes';
import { browserHistory } from 'react-router';
import fetch from 'isomorphic-fetch';
import cookie from 'react-cookie';
import socket from '../socket';

function receiveUser(username) {
  const user = {
    name: username,
    isAuthenticated: true
  }
  return {
    type: types.AUTH_SUCCESS,
    user
  }
}

export function redirectTo(url) {
    return dispatch => {
        dispatch({
            type:types.REDIRECT,
            url
        })
    }
}

export function checkAuth() {
    return dispatch => {
        const username = cookie.load('username');
        if (!username) {
            if(location.pathname === '/signin'){
                return
            }
            browserHistory.push('/signup');
        } else {
            dispatch(receiveUser(username));
            socket.emit('set username', username);
        }
    }
}

export function addChannels(list) {
    return dispatch => {
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
          cookie.save('username', user.userLogin);
          dispatch(receiveUser(user.userLogin));
          browserHistory.push('/chat');
        }
      })
      .catch(error => {throw error});
  };
}

export function signIn(user) {
    
    return dispatch => {
        
        return fetch('/api/sign_in', {
            method:'post',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(response => {
            if(response.ok) {
                cookie.save('username', user.userLogin);
                dispatch(receiveUser(user.userLogin));
                browserHistory.push('/chat');
            }
            if(response.statusText === 'Unauthorized'){
                dispatch(showModal('Wrong login or password'));
            }
        })
        .catch(error => { throw error });
    }
}

export function showModal(text) {
    
    return dispatch => {
        dispatch({
            type:types.SHOW_MODAL,
            text
        })
    }
    
}

export function hideModal() {
    
    return dispatch => {
        dispatch({
            type:types.HIDE_MODAL
        })
    }
    
}

export function receiveChannels(list) {
    return dispatch => {
        dispatch({
            type:types.ADD_CHANNELS,
            list
        })
    }
}

export function joinChannel(nextChannel) {
    return dispatch => {
        dispatch({
            type:types.CHANGE_ACTIVE_CHANNEL,
            nextChannel
        })
    }
}

export function addMessagesFromDB(channel, messages) {
    return dispatch => {
        dispatch({
            type:types.ADD_MSGS_FROM_DB,
            channel,
            messages
        })
    }
}

export function addSingleMessage(message) {
    return dispatch => {
          dispatch({
              type:types.ADD_SINGLE_MESSAGE,
              message
          })
    };
}

export function createChannel(channelTitle) {
    return () => {
        console.log('в диспатче :' + channelTitle);
        socket.emit('create channel', {
            title:channelTitle
        });
        socket.emit('get primary list of channels');
        return true;
    }
}