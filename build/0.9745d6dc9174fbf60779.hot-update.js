webpackHotUpdate(0,{

/***/ 343:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(2), RootInstanceProvider = __webpack_require__(10), ReactMount = __webpack_require__(12), React = __webpack_require__(98); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.redirectTo = redirectTo;\nexports.checkAuth = checkAuth;\nexports.addChannels = addChannels;\nexports.requestSignUp = requestSignUp;\nexports.signUp = signUp;\nexports.signIn = signIn;\nexports.showModal = showModal;\nexports.hideModal = hideModal;\nexports.receiveChannels = receiveChannels;\nexports.joinChannel = joinChannel;\nexports.addMessagesFromDB = addMessagesFromDB;\n\nvar _ActionTypes = __webpack_require__(344);\n\nvar types = _interopRequireWildcard(_ActionTypes);\n\nvar _reactRouter = __webpack_require__(226);\n\nvar _isomorphicFetch = __webpack_require__(348);\n\nvar _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);\n\nvar _reactCookie = __webpack_require__(341);\n\nvar _reactCookie2 = _interopRequireDefault(_reactCookie);\n\nvar _socket = __webpack_require__(1143);\n\nvar _socket2 = _interopRequireDefault(_socket);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction receiveUser(username) {\n    var user = {\n        name: username,\n        isAuthenticated: true\n    };\n    return {\n        type: types.AUTH_SUCCESS,\n        user: user\n    };\n}\n\nfunction redirectTo(url) {\n    return function (dispatch) {\n        dispatch({\n            type: types.REDIRECT,\n            url: url\n        });\n    };\n}\n\nfunction checkAuth() {\n    return function (dispatch) {\n        var username = _reactCookie2.default.load('username');\n        if (!username) {\n            _reactRouter.browserHistory.push('/signup');\n        } else {\n            dispatch(receiveUser(username));\n            _socket2.default.emit('set username', username);\n        }\n    };\n}\n\nfunction addChannels(list) {\n    return function (dispatch) {\n        dispatch({\n            type: types.ADD_CHANNELS,\n            list: list\n        });\n    };\n}\n\nfunction requestSignUp() {\n    return {\n        type: types.AUTH_SIGNUP\n    };\n}\n\nfunction signUp(user) {\n\n    return function (dispatch) {\n\n        dispatch(requestSignUp());\n        return (0, _isomorphicFetch2.default)('/api/sign_up', {\n            method: 'post',\n            //заголовки, чтобы возможно было отправить json через body/\n            headers: {\n                'Accept': 'application/json',\n                'Content-Type': 'application/json'\n            },\n            body: JSON.stringify(user)\n        }).then(function (response) {\n            if (response.ok) {\n                //сохраняем имя пользователя в cokie\n                _reactCookie2.default.save('username', user.userLogin);\n                dispatch(receiveUser(user.userLogin));\n                _reactRouter.browserHistory.push('/chat');\n            }\n        }).catch(function (error) {\n            throw error;\n        });\n    };\n}\n\nfunction signIn(user) {\n\n    return function (dispatch) {\n\n        return (0, _isomorphicFetch2.default)('/api/sign_in', {\n            method: 'post',\n            headers: {\n                'Accept': 'application/json',\n                'Content-type': 'application/json'\n            },\n            body: JSON.stringify(user)\n        }).then(function (response) {\n            if (response.ok) {\n                _reactCookie2.default.save('username', user.userLogin);\n                dispatch(receiveUser(user.userLogin));\n                _reactRouter.browserHistory.push('/chat');\n            }\n            if (response.statusText === 'Unauthorized') {\n                dispatch(showModal('Wrong login or password'));\n            }\n        }).catch(function (error) {\n            throw error;\n        });\n    };\n}\n\nfunction showModal(text) {\n\n    return function (dispatch) {\n        dispatch({\n            type: types.SHOW_MODAL,\n            text: text\n        });\n    };\n}\n\nfunction hideModal() {\n\n    return function (dispatch) {\n        dispatch({\n            type: types.HIDE_MODAL\n        });\n    };\n}\n\nfunction receiveChannels(list) {\n    return function (dispatch) {\n        dispatch({\n            type: types.ADD_CHANNELS,\n            list: list\n        });\n    };\n}\n\nfunction joinChannel(nextChannel) {\n    return function (dispatch) {\n        dispatch({\n            type: types.CHANGE_ACTIVE_CHANNEL,\n            nextChannel: nextChannel\n        });\n    };\n}\n\nfunction addMessagesFromDB(channel, messages) {\n    return function (dispatch) {\n        dispatch({\n            type: types.ADD_MSGS_FROM_DB,\n            channel: channel,\n            messages: messages\n        });\n    };\n}\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(345); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot apply hot update to \" + \"index.js\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQWN0aW9ucy9pbmRleC5qcz8wYjY2Il0sIm5hbWVzIjpbInJlZGlyZWN0VG8iLCJjaGVja0F1dGgiLCJhZGRDaGFubmVscyIsInJlcXVlc3RTaWduVXAiLCJzaWduVXAiLCJzaWduSW4iLCJzaG93TW9kYWwiLCJoaWRlTW9kYWwiLCJyZWNlaXZlQ2hhbm5lbHMiLCJqb2luQ2hhbm5lbCIsImFkZE1lc3NhZ2VzRnJvbURCIiwidHlwZXMiLCJyZWNlaXZlVXNlciIsInVzZXJuYW1lIiwidXNlciIsIm5hbWUiLCJpc0F1dGhlbnRpY2F0ZWQiLCJ0eXBlIiwiQVVUSF9TVUNDRVNTIiwidXJsIiwiZGlzcGF0Y2giLCJSRURJUkVDVCIsImxvYWQiLCJwdXNoIiwiZW1pdCIsImxpc3QiLCJBRERfQ0hBTk5FTFMiLCJBVVRIX1NJR05VUCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXNwb25zZSIsIm9rIiwic2F2ZSIsInVzZXJMb2dpbiIsImNhdGNoIiwiZXJyb3IiLCJzdGF0dXNUZXh0IiwidGV4dCIsIlNIT1dfTU9EQUwiLCJISURFX01PREFMIiwibmV4dENoYW5uZWwiLCJDSEFOR0VfQUNUSVZFX0NIQU5ORUwiLCJjaGFubmVsIiwibWVzc2FnZXMiLCJBRERfTVNHU19GUk9NX0RCIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O1FBaUJnQkEsVSxHQUFBQSxVO1FBU0FDLFMsR0FBQUEsUztRQVlBQyxXLEdBQUFBLFc7UUFTQUMsYSxHQUFBQSxhO1FBTUFDLE0sR0FBQUEsTTtRQTBCQUMsTSxHQUFBQSxNO1FBMEJBQyxTLEdBQUFBLFM7UUFXQUMsUyxHQUFBQSxTO1FBVUFDLGUsR0FBQUEsZTtRQVNBQyxXLEdBQUFBLFc7UUFTQUMsaUIsR0FBQUEsaUI7O0FBaEpoQjs7SUFBWUMsSzs7QUFDWjs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUEsU0FBU0MsV0FBVCxDQUFxQkMs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K0IsVUFETjtBQUVMRDtBQUZLLFNBQVQ7QUFJSCxLQUxEO0FBT0g7O0FBRU0sU0FBU2xDLFNBQVQsR0FBcUI7O0FBRXhCLFdBQU8sb0JBQVk7QUFDZmEsaUJBQVM7QUFDTEgsa0JBQUtOLE1BQU1nQztBQUROLFNBQVQ7QUFHSCxLQUpEO0FBTUg7O0FBRU0sU0FBU25DLGVBQVQsQ0FBeUJpQixJQUF6QixFQUErQjtBQUNsQyxXQUFPLG9CQUFZO0FBQ2ZMLGlCQUFTO0FBQ0xILGtCQUFLTixNQUFNZSxZQUROO0FBRUxEO0FBRkssU0FBVDtBQUlILEtBTEQ7QUFNSDs7QUFFTSxTQUFTaEIsV0FBVCxDQUFxQm1DLFdBQXJCLEVBQWtDO0FBQ3JDLFdBQU8sb0JBQVk7QUFDZnhCLGlCQUFTO0FBQ0xILGtCQUFLTixNQUFNa0MscUJBRE47QUFFTEQ7QUFGSyxTQUFUO0FBSUgsS0FMRDtBQU1IOztBQUVNLFNBQVNsQyxpQkFBVCxDQUEyQm9DLE9BQTNCLEVBQW9DQyxRQUFwQyxFQUE4QztBQUNqRCxXQUFPLG9CQUFZO0FBQ2YzQixpQkFBUztBQUNMSCxrQkFBS04sTUFBTXFDLGdCQUROO0FBRUxGLDRCQUZLO0FBR0xDO0FBSEssU0FBVDtBQUtILEtBTkQ7QUFPSCxDIiwiZmlsZSI6IjM0My5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL2NvbnN0YW50cy9BY3Rpb25UeXBlcyc7XHJcbmltcG9ydCB7IGJyb3dzZXJIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyJztcclxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtZmV0Y2gnO1xyXG5pbXBvcnQgY29va2llIGZyb20gJ3JlYWN0LWNvb2tpZSc7XHJcbmltcG9ydCBzb2NrZXQgZnJvbSAnLi4vc29ja2V0JztcclxuXHJcbmZ1bmN0aW9uIHJlY2VpdmVVc2VyKHVzZXJuYW1lKSB7XHJcbiAgY29uc3QgdXNlciA9IHtcclxuICAgIG5hbWU6IHVzZXJuYW1lLFxyXG4gICAgaXNBdXRoZW50aWNhdGVkOiB0cnVlXHJcbiAgfVxyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiB0eXBlcy5BVVRIX1NVQ0NFU1MsXHJcbiAgICB1c2VyXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVkaXJlY3RUbyh1cmwpIHtcclxuICAgIHJldHVybiBkaXNwYXRjaCA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOnR5cGVzLlJFRElSRUNULFxyXG4gICAgICAgICAgICB1cmxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tBdXRoKCkge1xyXG4gICAgcmV0dXJuIGRpc3BhdGNoID0+IHtcclxuICAgICAgICBjb25zdCB1c2VybmFtZSA9IGNvb2tpZS5sb2FkKCd1c2VybmFtZScpO1xyXG4gICAgICAgIGlmICghdXNlcm5hbWUpIHtcclxuICAgICAgICAgICAgYnJvd3Nlckhpc3RvcnkucHVzaCgnL3NpZ251cCcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHJlY2VpdmVVc2VyKHVzZXJuYW1lKSk7XHJcbiAgICAgICAgICAgIHNvY2tldC5lbWl0KCdzZXQgdXNlcm5hbWUnLCB1c2VybmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkQ2hhbm5lbHMobGlzdCkge1xyXG4gICAgcmV0dXJuIGRpc3BhdGNoID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogdHlwZXMuQUREX0NIQU5ORUxTLFxyXG4gICAgICAgIGxpc3RcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlcXVlc3RTaWduVXAoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6dHlwZXMuQVVUSF9TSUdOVVBcclxuICAgIH0gXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaWduVXAodXNlcikge1xyXG4gICAgXHJcbiAgcmV0dXJuIGRpc3BhdGNoID0+IHtcclxuICAgICAgXHJcbiAgICBkaXNwYXRjaChyZXF1ZXN0U2lnblVwKCkpXHJcbiAgICByZXR1cm4gZmV0Y2goJy9hcGkvc2lnbl91cCcsIHtcclxuICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgICAgICAvL9C30LDQs9C+0LvQvtCy0LrQuCwg0YfRgtC+0LHRiyDQstC+0LfQvNC+0LbQvdC+INCx0YvQu9C+INC+0YLQv9GA0LDQstC40YLRjCBqc29uINGH0LXRgNC10LcgYm9keS9cclxuICAgICAgICAgIGhlYWRlcnM6IHsgXHJcbiAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJywgXHJcbiAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHVzZXIpXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBpZihyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAvL9GB0L7RhdGA0LDQvdGP0LXQvCDQuNC80Y8g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPINCyIGNva2llXHJcbiAgICAgICAgICBjb29raWUuc2F2ZSgndXNlcm5hbWUnLCB1c2VyLnVzZXJMb2dpbik7XHJcbiAgICAgICAgICBkaXNwYXRjaChyZWNlaXZlVXNlcih1c2VyLnVzZXJMb2dpbikpO1xyXG4gICAgICAgICAgYnJvd3Nlckhpc3RvcnkucHVzaCgnL2NoYXQnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7dGhyb3cgZXJyb3J9KTtcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2lnbkluKHVzZXIpIHtcclxuICAgIFxyXG4gICAgcmV0dXJuIGRpc3BhdGNoID0+IHtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gZmV0Y2goJy9hcGkvc2lnbl9pbicsIHtcclxuICAgICAgICAgICAgbWV0aG9kOidwb3N0JyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodXNlcilcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgaWYocmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgIGNvb2tpZS5zYXZlKCd1c2VybmFtZScsIHVzZXIudXNlckxvZ2luKTtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHJlY2VpdmVVc2VyKHVzZXIudXNlckxvZ2luKSk7XHJcbiAgICAgICAgICAgICAgICBicm93c2VySGlzdG9yeS5wdXNoKCcvY2hhdCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLnN0YXR1c1RleHQgPT09ICdVbmF1dGhvcml6ZWQnKXtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHNob3dNb2RhbCgnV3JvbmcgbG9naW4gb3IgcGFzc3dvcmQnKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7IHRocm93IGVycm9yIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2hvd01vZGFsKHRleHQpIHtcclxuICAgIFxyXG4gICAgcmV0dXJuIGRpc3BhdGNoID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6dHlwZXMuU0hPV19NT0RBTCxcclxuICAgICAgICAgICAgdGV4dFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVNb2RhbCgpIHtcclxuICAgIFxyXG4gICAgcmV0dXJuIGRpc3BhdGNoID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6dHlwZXMuSElERV9NT0RBTFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlY2VpdmVDaGFubmVscyhsaXN0KSB7XHJcbiAgICByZXR1cm4gZGlzcGF0Y2ggPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTp0eXBlcy5BRERfQ0hBTk5FTFMsXHJcbiAgICAgICAgICAgIGxpc3RcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gam9pbkNoYW5uZWwobmV4dENoYW5uZWwpIHtcclxuICAgIHJldHVybiBkaXNwYXRjaCA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOnR5cGVzLkNIQU5HRV9BQ1RJVkVfQ0hBTk5FTCxcclxuICAgICAgICAgICAgbmV4dENoYW5uZWxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkTWVzc2FnZXNGcm9tREIoY2hhbm5lbCwgbWVzc2FnZXMpIHtcclxuICAgIHJldHVybiBkaXNwYXRjaCA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOnR5cGVzLkFERF9NU0dTX0ZST01fREIsXHJcbiAgICAgICAgICAgIGNoYW5uZWwsXHJcbiAgICAgICAgICAgIG1lc3NhZ2VzXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9BY3Rpb25zL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

})