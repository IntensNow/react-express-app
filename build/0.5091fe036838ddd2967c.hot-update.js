webpackHotUpdate(0,{

/***/ 974:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(2), RootInstanceProvider = __webpack_require__(10), ReactMount = __webpack_require__(12), React = __webpack_require__(98); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.redirectTo = redirectTo;\nexports.checkAuth = checkAuth;\nexports.addChannels = addChannels;\nexports.requestSignUp = requestSignUp;\nexports.signUp = signUp;\nexports.signIn = signIn;\nexports.showModal = showModal;\nexports.hideModal = hideModal;\nexports.receiveChannels = receiveChannels;\nexports.joinChannel = joinChannel;\nexports.addMessagesFromDB = addMessagesFromDB;\n\nvar _ActionTypes = __webpack_require__(975);\n\nvar types = _interopRequireWildcard(_ActionTypes);\n\nvar _reactRouter = __webpack_require__(226);\n\nvar _isomorphicFetch = __webpack_require__(976);\n\nvar _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);\n\nvar _reactCookie = __webpack_require__(341);\n\nvar _reactCookie2 = _interopRequireDefault(_reactCookie);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction receiveUser(username) {\n    var user = {\n        name: username,\n        isAuthenticated: true\n    };\n    return {\n        type: types.AUTH_SUCCESS,\n        user: user\n    };\n}\n\nfunction redirectTo(url) {\n    return function (dispatch) {\n        dispatch({\n            type: types.REDIRECT,\n            url: url\n        });\n    };\n}\n\nfunction checkAuth() {\n    var username = _reactCookie2.default.load('username');\n    if (!username) {\n        _reactRouter.browserHistory.push('/signup');\n    }\n}\n\nfunction addChannels(list) {\n    return function (dispatch) {\n        dispatch({\n            type: types.ADD_CHANNELS,\n            list: list\n        });\n    };\n}\n\nfunction requestSignUp() {\n    return {\n        type: types.AUTH_SIGNUP\n    };\n}\n\nfunction signUp(user) {\n\n    return function (dispatch) {\n\n        dispatch(requestSignUp());\n        return (0, _isomorphicFetch2.default)('/api/sign_up', {\n            method: 'post',\n            //заголовки, чтобы возможно было отправить json через body/\n            headers: {\n                'Accept': 'application/json',\n                'Content-Type': 'application/json'\n            },\n            body: JSON.stringify(user)\n        }).then(function (response) {\n            if (response.ok) {\n                //сохраняем имя пользователя в cokie\n                _reactCookie2.default.save('username', user.userLogin);\n                dispatch(receiveUser(user.userLogin));\n                _reactRouter.browserHistory.push('/chat');\n            }\n        }).catch(function (error) {\n            throw error;\n        });\n    };\n}\n\nfunction signIn(user) {\n\n    return function (dispatch) {\n\n        return (0, _isomorphicFetch2.default)('/api/sign_in', {\n            method: 'post',\n            headers: {\n                'Accept': 'application/json',\n                'Content-type': 'application/json'\n            },\n            body: JSON.stringify(user)\n        }).then(function (response) {\n            if (response.ok) {\n                _reactCookie2.default.save('username', user.userLogin);\n                dispatch(receiveUser(user.userLogin));\n                _reactRouter.browserHistory.push('/chat');\n            }\n            if (response.statusText === 'Unauthorized') {\n                dispatch(showModal('Wrong login or password'));\n            }\n        }).catch(function (error) {\n            throw error;\n        });\n    };\n}\n\nfunction showModal(text) {\n\n    return function (dispatch) {\n        dispatch({\n            type: types.SHOW_MODAL,\n            text: text\n        });\n    };\n}\n\nfunction hideModal() {\n\n    return function (dispatch) {\n        dispatch({\n            type: types.HIDE_MODAL\n        });\n    };\n}\n\nfunction receiveChannels(list) {\n    return function (dispatch) {\n        dispatch({\n            type: types.ADD_CHANNELS,\n            list: list\n        });\n    };\n}\n\nfunction joinChannel(nextChannel) {\n    return function (dispatch) {\n        dispatch({\n            type: types.CHANGE_ACTIVE_CHANNEL,\n            nextChannel: nextChannel\n        });\n    };\n}\n\nfunction addMessagesFromDB(channel, messages) {\n    return function (dispatch) {\n        dispatch({\n            type: types.ADD_MSGS_FROM_DB,\n            channel: channel,\n            messages: messages\n        });\n    };\n}\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(909); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot apply hot update to \" + \"index.js\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQWN0aW9ucy9pbmRleC5qcz8wYjY2Il0sIm5hbWVzIjpbInJlZGlyZWN0VG8iLCJjaGVja0F1dGgiLCJhZGRDaGFubmVscyIsInJlcXVlc3RTaWduVXAiLCJzaWduVXAiLCJzaWduSW4iLCJzaG93TW9kYWwiLCJoaWRlTW9kYWwiLCJyZWNlaXZlQ2hhbm5lbHMiLCJqb2luQ2hhbm5lbCIsImFkZE1lc3NhZ2VzRnJvbURCIiwidHlwZXMiLCJyZWNlaXZlVXNlciIsInVzZXJuYW1lIiwidXNlciIsIm5hbWUiLCJpc0F1dGhlbnRpY2F0ZWQiLCJ0eXBlIiwiQVVUSF9TVUNDRVNTIiwidXJsIiwiZGlzcGF0Y2giLCJSRURJUkVDVCIsImxvYWQiLCJwdXNoIiwibGlzdCIsIkFERF9DSEFOTkVMUyIsIkFVVEhfU0lHTlVQIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJzYXZlIiwidXNlckxvZ2luIiwiY2F0Y2giLCJlcnJvciIsInN0YXR1c1RleHQiLCJ0ZXh0IiwiU0hPV19NT0RBTCIsIkhJREVfTU9EQUwiLCJuZXh0Q2hhbm5lbCIsIkNIQU5HRV9BQ1RJVkVfQ0hBTk5FTCIsImNoYW5uZWwiLCJtZXNzYWdlcyIsIkFERF9NU0dTX0ZST01fREIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7UUFpQmdCQSxVLEdBQUFBLFU7UUFTQUMsUyxHQUFBQSxTO1FBT0FDLFcsR0FBQUEsVztRQVNBQyxhLEdBQUFBLGE7UUFNQUMsTSxHQUFBQSxNO1FBMEJBQyxNLEdBQUFBLE07UUEwQkFDLFMsR0FBQUEsUztRQVdBQyxTLEdBQUFBLFM7UUFVQUMsZSxHQUFBQSxlO1FBU0FDLFcsR0FBQUEsVztRQVNBQyxpQixHQUFBQSxpQjs7QUEzSWhCOztJQUFZQyxLOztBQUNaOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBR0EsU0FBU0MsV0FBVCxDQUFxQkMsUUFBckIsRUFBK0I7QUFD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QUFETixTQUFUO0FBR0gsS0FKRDtBQU1IOztBQUVNLFNBQVNsQyxlQUFULENBQXlCZ0IsSUFBekIsRUFBK0I7QUFDbEMsV0FBTyxvQkFBWTtBQUNmSixpQkFBUztBQUNMSCxrQkFBS04sTUFBTWMsWUFETjtBQUVMRDtBQUZLLFNBQVQ7QUFJSCxLQUxEO0FBTUg7O0FBRU0sU0FBU2YsV0FBVCxDQUFxQmtDLFdBQXJCLEVBQWtDO0FBQ3JDLFdBQU8sb0JBQVk7QUFDZnZCLGlCQUFTO0FBQ0xILGtCQUFLTixNQUFNaUMscUJBRE47QUFFTEQ7QUFGSyxTQUFUO0FBSUgsS0FMRDtBQU1IOztBQUVNLFNBQVNqQyxpQkFBVCxDQUEyQm1DLE9BQTNCLEVBQW9DQyxRQUFwQyxFQUE4QztBQUNqRCxXQUFPLG9CQUFZO0FBQ2YxQixpQkFBUztBQUNMSCxrQkFBS04sTUFBTW9DLGdCQUROO0FBRUxGLDRCQUZLO0FBR0xDO0FBSEssU0FBVDtBQUtILEtBTkQ7QUFPSCxDIiwiZmlsZSI6Ijk3NC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL2NvbnN0YW50cy9BY3Rpb25UeXBlcyc7XHJcbmltcG9ydCB7IGJyb3dzZXJIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyJztcclxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtZmV0Y2gnO1xyXG5pbXBvcnQgY29va2llIGZyb20gJ3JlYWN0LWNvb2tpZSc7XHJcblxyXG5cclxuZnVuY3Rpb24gcmVjZWl2ZVVzZXIodXNlcm5hbWUpIHtcclxuICBjb25zdCB1c2VyID0ge1xyXG4gICAgbmFtZTogdXNlcm5hbWUsXHJcbiAgICBpc0F1dGhlbnRpY2F0ZWQ6IHRydWVcclxuICB9XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IHR5cGVzLkFVVEhfU1VDQ0VTUyxcclxuICAgIHVzZXJcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZWRpcmVjdFRvKHVybCkge1xyXG4gICAgcmV0dXJuIGRpc3BhdGNoID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6dHlwZXMuUkVESVJFQ1QsXHJcbiAgICAgICAgICAgIHVybFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja0F1dGgoKSB7XHJcbiAgICBjb25zdCB1c2VybmFtZSA9IGNvb2tpZS5sb2FkKCd1c2VybmFtZScpO1xyXG4gICAgaWYgKCF1c2VybmFtZSkge1xyXG4gICAgICAgIGJyb3dzZXJIaXN0b3J5LnB1c2goJy9zaWdudXAnKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZENoYW5uZWxzKGxpc3QpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbihkaXNwYXRjaCkge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiB0eXBlcy5BRERfQ0hBTk5FTFMsXHJcbiAgICAgICAgbGlzdFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVxdWVzdFNpZ25VcCgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTp0eXBlcy5BVVRIX1NJR05VUFxyXG4gICAgfSBcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNpZ25VcCh1c2VyKSB7XHJcbiAgICBcclxuICByZXR1cm4gZGlzcGF0Y2ggPT4ge1xyXG4gICAgICBcclxuICAgIGRpc3BhdGNoKHJlcXVlc3RTaWduVXAoKSlcclxuICAgIHJldHVybiBmZXRjaCgnL2FwaS9zaWduX3VwJywge1xyXG4gICAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgICAgIC8v0LfQsNCz0L7Qu9C+0LLQutC4LCDRh9GC0L7QsdGLINCy0L7Qt9C80L7QttC90L4g0LHRi9C70L4g0L7RgtC/0YDQsNCy0LjRgtGMIGpzb24g0YfQtdGA0LXQtyBib2R5L1xyXG4gICAgICAgICAgaGVhZGVyczogeyBcclxuICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLCBcclxuICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodXNlcilcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGlmKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgIC8v0YHQvtGF0YDQsNC90Y/QtdC8INC40LzRjyDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y8g0LIgY29raWVcclxuICAgICAgICAgIGNvb2tpZS5zYXZlKCd1c2VybmFtZScsIHVzZXIudXNlckxvZ2luKTtcclxuICAgICAgICAgIGRpc3BhdGNoKHJlY2VpdmVVc2VyKHVzZXIudXNlckxvZ2luKSk7XHJcbiAgICAgICAgICBicm93c2VySGlzdG9yeS5wdXNoKCcvY2hhdCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IHt0aHJvdyBlcnJvcn0pO1xyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaWduSW4odXNlcikge1xyXG4gICAgXHJcbiAgICByZXR1cm4gZGlzcGF0Y2ggPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBmZXRjaCgnL2FwaS9zaWduX2luJywge1xyXG4gICAgICAgICAgICBtZXRob2Q6J3Bvc3QnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh1c2VyKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBpZihyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgY29va2llLnNhdmUoJ3VzZXJuYW1lJywgdXNlci51c2VyTG9naW4pO1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2gocmVjZWl2ZVVzZXIodXNlci51c2VyTG9naW4pKTtcclxuICAgICAgICAgICAgICAgIGJyb3dzZXJIaXN0b3J5LnB1c2goJy9jaGF0Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYocmVzcG9uc2Uuc3RhdHVzVGV4dCA9PT0gJ1VuYXV0aG9yaXplZCcpe1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goc2hvd01vZGFsKCdXcm9uZyBsb2dpbiBvciBwYXNzd29yZCcpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHsgdGhyb3cgZXJyb3IgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaG93TW9kYWwodGV4dCkge1xyXG4gICAgXHJcbiAgICByZXR1cm4gZGlzcGF0Y2ggPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTp0eXBlcy5TSE9XX01PREFMLFxyXG4gICAgICAgICAgICB0ZXh0XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGlkZU1vZGFsKCkge1xyXG4gICAgXHJcbiAgICByZXR1cm4gZGlzcGF0Y2ggPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTp0eXBlcy5ISURFX01PREFMXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVjZWl2ZUNoYW5uZWxzKGxpc3QpIHtcclxuICAgIHJldHVybiBkaXNwYXRjaCA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOnR5cGVzLkFERF9DSEFOTkVMUyxcclxuICAgICAgICAgICAgbGlzdFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBqb2luQ2hhbm5lbChuZXh0Q2hhbm5lbCkge1xyXG4gICAgcmV0dXJuIGRpc3BhdGNoID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6dHlwZXMuQ0hBTkdFX0FDVElWRV9DSEFOTkVMLFxyXG4gICAgICAgICAgICBuZXh0Q2hhbm5lbFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRNZXNzYWdlc0Zyb21EQihjaGFubmVsLCBtZXNzYWdlcykge1xyXG4gICAgcmV0dXJuIGRpc3BhdGNoID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6dHlwZXMuQUREX01TR1NfRlJPTV9EQixcclxuICAgICAgICAgICAgY2hhbm5lbCxcclxuICAgICAgICAgICAgbWVzc2FnZXNcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0FjdGlvbnMvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }

})