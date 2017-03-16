webpackHotUpdate(0,{

/***/ 1122:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(2), RootInstanceProvider = __webpack_require__(10), ReactMount = __webpack_require__(12), React = __webpack_require__(98); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.redirectTo = redirectTo;\nexports.checkAuth = checkAuth;\nexports.addChannels = addChannels;\nexports.requestSignUp = requestSignUp;\nexports.signUp = signUp;\nexports.signIn = signIn;\n\nvar _ActionTypes = __webpack_require__(1123);\n\nvar types = _interopRequireWildcard(_ActionTypes);\n\nvar _reactRouter = __webpack_require__(226);\n\nvar _isomorphicFetch = __webpack_require__(1124);\n\nvar _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);\n\nvar _reactCookie = __webpack_require__(341);\n\nvar _reactCookie2 = _interopRequireDefault(_reactCookie);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction receiveUser(username) {\n    var user = {\n        name: username,\n        isAuthenticated: true\n    };\n    return {\n        type: types.AUTH_SUCCESS,\n        user: user\n    };\n}\n\nfunction redirectTo(url) {\n    return function (dispatch) {\n        dispatch({\n            type: types.REDIRECT,\n            url: url\n        });\n    };\n}\n\nfunction checkAuth() {\n    var username = _reactCookie2.default.load('username');\n    if (!username) {\n        _reactRouter.browserHistory.push('/signup');\n    }\n}\n\nfunction addChannels(list) {\n    return function (dispatch) {\n        dispatch({\n            type: types.ADD_CHANNELS,\n            list: list\n        });\n    };\n}\n\nfunction requestSignUp() {\n    return {\n        type: types.AUTH_SIGNUP\n    };\n}\n\nfunction signUp(user) {\n\n    return function (dispatch) {\n\n        dispatch(requestSignUp());\n        return (0, _isomorphicFetch2.default)('/api/sign_up', {\n            method: 'post',\n            //заголовки, чтобы возможно было отправить json через body/\n            headers: {\n                'Accept': 'application/json',\n                'Content-Type': 'application/json'\n            },\n            body: JSON.stringify(user)\n        }).then(function (response) {\n            if (response.ok) {\n                //сохраняем имя пользователя в cokie\n                _reactCookie2.default.save('username', user.userLogin);\n                dispatch(receiveUser(user.userLogin));\n                _reactRouter.browserHistory.push('/chat');\n            }\n        }).catch(function (error) {\n            throw error;\n        });\n    };\n}\n\nfunction signIn(user) {\n\n    return function (dispatch) {\n\n        return (0, _isomorphicFetch2.default)('/api/sign_in', {\n            method: 'post',\n            headers: {\n                'Accept': 'application/json',\n                'Content-type': 'application/json'\n            },\n            body: JSON.stringify(user)\n        }).then(function (response) {\n            /*if(response.ok) {\r\n                cookie.save('username', user.userLogin);\r\n                dispatch(receiveUser(user.userLogin));\r\n                browserHistory.push('/chat');\r\n            }\r\n            if(response.statusText === 'Unauthorized')*/\n            console.log(JSON.parse(response.body));\n        }).catch(function (error) {\n            throw error;\n        });\n    };\n}\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(956); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot apply hot update to \" + \"index.js\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQWN0aW9ucy9pbmRleC5qcz8wYjY2Il0sIm5hbWVzIjpbInJlZGlyZWN0VG8iLCJjaGVja0F1dGgiLCJhZGRDaGFubmVscyIsInJlcXVlc3RTaWduVXAiLCJzaWduVXAiLCJzaWduSW4iLCJ0eXBlcyIsInJlY2VpdmVVc2VyIiwidXNlcm5hbWUiLCJ1c2VyIiwibmFtZSIsImlzQXV0aGVudGljYXRlZCIsInR5cGUiLCJBVVRIX1NVQ0NFU1MiLCJ1cmwiLCJkaXNwYXRjaCIsIlJFRElSRUNUIiwibG9hZCIsInB1c2giLCJsaXN0IiwiQUREX0NIQU5ORUxTIiwiQVVUSF9TSUdOVVAiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzcG9uc2UiLCJvayIsInNhdmUiLCJ1c2VyTG9naW4iLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInBhcnNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O1FBaUJnQkEsVSxHQUFBQSxVO1FBU0FDLFMsR0FBQUEsUztRQU9BQyxXLEdBQUFBLFc7UUFTQUMsYSxHQUFBQSxhO1FBTUFDLE0sR0FBQUEsTTtRQTBCQUMsTSxHQUFBQSxNOztBQTFFaEI7O0lBQVlDLEs7O0FBQ1o7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFHQSxTQUFTQyxXQUFULENBQXFCQyxRQUFyQixFQUErQjtBQUM3QixRQUFNQyxPQUFPO0FBQ1hDLGNBQU1GLFFBREs7QUFFWEcseUJBQWlCO0FBRk4sS0FBYjtBQUlBLFdBQU87QUFDTEMsY0FBTU4sTUFBTU8sWUFEUDtBQUVMSjtBQUZLLEtBQVA7QUFJRDs7QUFFTSxTQUFTVCxVQUFULENBQW9CYyxHQUFwQixFQUF5QjtBQUM1QixXQUFPLG9CQUFZO0FBQ2ZDLGlCQUFTO0FBQ0xILGtCQUFLTixNQUFNVSxRQUROO0FBRUxGO0FBRkssU0FBVDtBQUlILEtBTEQ7QUFNSDs7QUFFTSxTQUFTYixTQUFULEdBQXFCO0FBQ3hCLFFBQU1PLFdBQVcsc0JBQU9TLElBQVAsQ0FBWSxVQUFaLENBQWpCO0FBQ0EsUUFBSSxDQUFDVCxRQUFMLEVBQWU7QUFDWCxvQ0FBZVUsSUFBZixDQUFvQixTQUFwQjtBQUNIO0FBQ0o7O0FBRU0sU0FBU2hCLFdBQVQsQ0FBcUJpQixJQUFyQixFQUEyQjtBQUM5QixXQUFPLFVBQVNKLFFBQVQsRUFBbUI7QUFDdEJBLGlCQUFTO0FBQ1RILGtCQUFNTixNQUFNYyxZQURIO0FBRVREO0FBRlMsU0FBVDtBQUlILEtBTEQ7QUFNSDs7QUFFTSxTQUFTaEIsYUFBVCxHQUF5QjtBQUM1QixXQUFPO0FBQ0hTLGNBQUtOLE1BQU1lO0FBRFIsS0FBUDtBQUdIOztBQUVNLFNBQVNqQixNQUFULENBQWdCSyxJQUFoQixFQUFzQjs7QUFFM0IsV0FBTyxvQkFBWTs7QUFFakJNLGlCQUFTWixlQUFUO0FBQ0EsZUFBTywrQkFBTSxjQUFOLEVBQXNCO0FBQ3ZCbUIsb0JBQVEsTUFEZTtBQUVyQjtBQUNGQyxxQkFBUztBQUNMLDBCQUFVLGtCQURMO0FBRUwsZ0NBQWdCO0FBRlgsYUFIYztBQU92QkMsa0JBQU1DLEtBQUtDLFNBQUwsQ0FBZWpCLElBQWY7QUFQaUIsU0FBdEIsRUFTSmtCLElBVEksQ0FTQyxvQkFBWTtBQUNoQixnQkFBR0MsU0FBU0MsRUFBWixFQUFnQjtBQUNaO0FBQ0Ysc0NBQU9DLElBQVAsQ0FBWSxVQUFaLEVBQXdCckIsS0FBS3NCLFNBQTdCO0FBQ0FoQix5QkFBU1IsWUFBWUUsS0FBS3NCLFNBQWpCLENBQVQ7QUFDQSw0Q0FBZWIsSUFBZixDQUFvQixPQUFwQjtBQUNEO0FBQ0YsU0FoQkksRUFpQkpjLEtBakJJLENBaUJFLGlCQUFTO0FBQUMsa0JBQU1DLEtBQU47QUFBWSxTQWpCeEIsQ0FBUDtBQWtCRCxLQXJCRDtBQXNCRDs7QUFFTSxTQUFTNUIsTUFBVCxDQUFnQkksSUFBaEIsRUFBc0I7O0FBRXpCLFdBQU8sb0JBQVk7O0FBRWYsZUFBTywrQkFBTSxjQUFOLEVBQXNCO0FBQ3pCYSxvQkFBTyxNQURrQjtBQUV6QkMscUJBQVM7QUFDTCwwQkFBVSxrQkFETDtBQUVMLGdDQUFnQjtBQUZYLGFBRmdCO0FBTXpCQyxrQkFBTUMsS0FBS0MsU0FBTCxDQUFlakIsSUFBZjtBQU5tQixTQUF0QixFQVFOa0IsSUFSTSxDQVFELG9CQUFZO0FBQ2Q7Ozs7OztBQU1BTyxvQkFBUUMsR0FBUixDQUFZVixLQUFLVyxLQUFMLENBQVdSLFNBQVNKLElBQXBCLENBQVo7QUFDSCxTQWhCTSxFQWlCTlEsS0FqQk0sQ0FpQkEsaUJBQVM7QUFBQyxrQkFBTUMsS0FBTjtBQUFZLFNBakJ0QixDQUFQO0FBa0JILEtBcEJEO0FBcUJILEMiLCJmaWxlIjoiMTEyMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL2NvbnN0YW50cy9BY3Rpb25UeXBlcyc7XHJcbmltcG9ydCB7IGJyb3dzZXJIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyJztcclxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtZmV0Y2gnO1xyXG5pbXBvcnQgY29va2llIGZyb20gJ3JlYWN0LWNvb2tpZSc7XHJcblxyXG5cclxuZnVuY3Rpb24gcmVjZWl2ZVVzZXIodXNlcm5hbWUpIHtcclxuICBjb25zdCB1c2VyID0ge1xyXG4gICAgbmFtZTogdXNlcm5hbWUsXHJcbiAgICBpc0F1dGhlbnRpY2F0ZWQ6IHRydWVcclxuICB9XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IHR5cGVzLkFVVEhfU1VDQ0VTUyxcclxuICAgIHVzZXJcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZWRpcmVjdFRvKHVybCkge1xyXG4gICAgcmV0dXJuIGRpc3BhdGNoID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6dHlwZXMuUkVESVJFQ1QsXHJcbiAgICAgICAgICAgIHVybFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja0F1dGgoKSB7XHJcbiAgICBjb25zdCB1c2VybmFtZSA9IGNvb2tpZS5sb2FkKCd1c2VybmFtZScpO1xyXG4gICAgaWYgKCF1c2VybmFtZSkge1xyXG4gICAgICAgIGJyb3dzZXJIaXN0b3J5LnB1c2goJy9zaWdudXAnKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZENoYW5uZWxzKGxpc3QpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbihkaXNwYXRjaCkge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiB0eXBlcy5BRERfQ0hBTk5FTFMsXHJcbiAgICAgICAgbGlzdFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVxdWVzdFNpZ25VcCgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTp0eXBlcy5BVVRIX1NJR05VUFxyXG4gICAgfSBcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNpZ25VcCh1c2VyKSB7XHJcbiAgICBcclxuICByZXR1cm4gZGlzcGF0Y2ggPT4ge1xyXG4gICAgICBcclxuICAgIGRpc3BhdGNoKHJlcXVlc3RTaWduVXAoKSlcclxuICAgIHJldHVybiBmZXRjaCgnL2FwaS9zaWduX3VwJywge1xyXG4gICAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgICAgIC8v0LfQsNCz0L7Qu9C+0LLQutC4LCDRh9GC0L7QsdGLINCy0L7Qt9C80L7QttC90L4g0LHRi9C70L4g0L7RgtC/0YDQsNCy0LjRgtGMIGpzb24g0YfQtdGA0LXQtyBib2R5L1xyXG4gICAgICAgICAgaGVhZGVyczogeyBcclxuICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLCBcclxuICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodXNlcilcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGlmKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgIC8v0YHQvtGF0YDQsNC90Y/QtdC8INC40LzRjyDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y8g0LIgY29raWVcclxuICAgICAgICAgIGNvb2tpZS5zYXZlKCd1c2VybmFtZScsIHVzZXIudXNlckxvZ2luKTtcclxuICAgICAgICAgIGRpc3BhdGNoKHJlY2VpdmVVc2VyKHVzZXIudXNlckxvZ2luKSk7XHJcbiAgICAgICAgICBicm93c2VySGlzdG9yeS5wdXNoKCcvY2hhdCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IHt0aHJvdyBlcnJvcn0pO1xyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaWduSW4odXNlcikge1xyXG4gICAgXHJcbiAgICByZXR1cm4gZGlzcGF0Y2ggPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBmZXRjaCgnL2FwaS9zaWduX2luJywge1xyXG4gICAgICAgICAgICBtZXRob2Q6J3Bvc3QnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh1c2VyKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAvKmlmKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICBjb29raWUuc2F2ZSgndXNlcm5hbWUnLCB1c2VyLnVzZXJMb2dpbik7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaChyZWNlaXZlVXNlcih1c2VyLnVzZXJMb2dpbikpO1xyXG4gICAgICAgICAgICAgICAgYnJvd3Nlckhpc3RvcnkucHVzaCgnL2NoYXQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihyZXNwb25zZS5zdGF0dXNUZXh0ID09PSAnVW5hdXRob3JpemVkJykqL1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnBhcnNlKHJlc3BvbnNlLmJvZHkpKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7dGhyb3cgZXJyb3J9KTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9BY3Rpb25zL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

})