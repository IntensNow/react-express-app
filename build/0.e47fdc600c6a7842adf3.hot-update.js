webpackHotUpdate(0,{

/***/ 1122:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(2), RootInstanceProvider = __webpack_require__(10), ReactMount = __webpack_require__(12), React = __webpack_require__(98); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.redirectTo = redirectTo;\nexports.checkAuth = checkAuth;\nexports.addChannels = addChannels;\nexports.requestSignUp = requestSignUp;\nexports.signUp = signUp;\nexports.signIn = signIn;\n\nvar _ActionTypes = __webpack_require__(1123);\n\nvar types = _interopRequireWildcard(_ActionTypes);\n\nvar _reactRouter = __webpack_require__(226);\n\nvar _isomorphicFetch = __webpack_require__(1124);\n\nvar _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);\n\nvar _reactCookie = __webpack_require__(341);\n\nvar _reactCookie2 = _interopRequireDefault(_reactCookie);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction receiveUser(username) {\n    var user = {\n        name: username,\n        isAuthenticated: true\n    };\n    return {\n        type: types.AUTH_SUCCESS,\n        user: user\n    };\n}\n\nfunction redirectTo(url) {\n    return function (dispatch) {\n        dispatch({\n            type: types.REDIRECT,\n            url: url\n        });\n    };\n}\n\nfunction checkAuth() {\n    var username = _reactCookie2.default.load('username');\n    if (!username) {\n        _reactRouter.browserHistory.push('/signup');\n    }\n}\n\nfunction addChannels(list) {\n    return function (dispatch) {\n        dispatch({\n            type: types.ADD_CHANNELS,\n            list: list\n        });\n    };\n}\n\nfunction requestSignUp() {\n    return {\n        type: types.AUTH_SIGNUP\n    };\n}\n\nfunction signUp(user) {\n\n    return function (dispatch) {\n\n        dispatch(requestSignUp());\n        return (0, _isomorphicFetch2.default)('/api/sign_up', {\n            method: 'post',\n            //заголовки, чтобы возможно было отправить json через body/\n            headers: {\n                'Accept': 'application/json',\n                'Content-Type': 'application/json'\n            },\n            body: JSON.stringify(user)\n        }).then(function (response) {\n            if (response.ok) {\n                //сохраняем имя пользователя в cokie\n                _reactCookie2.default.save('username', user.userLogin);\n                dispatch(receiveUser(user.userLogin));\n                _reactRouter.browserHistory.push('/chat');\n            }\n        }).catch(function (error) {\n            throw error;\n        });\n    };\n}\n\nfunction signIn(user) {\n\n    return function (dispatch) {\n\n        return (0, _isomorphicFetch2.default)('/api/sign_in', {\n            method: 'post',\n            headers: {\n                'Accept': 'application/json',\n                'Content-type': 'application/json'\n            },\n            body: JSON.stringify(user)\n        }).then(function (response) {\n            if (response.ok) {\n                _reactCookie2.default.save('username', user.userLogin);\n                dispatch(receiveUser(user.userLogin));\n                _reactRouter.browserHistory.push('/chat');\n            }\n        }).catch(function (error) {\n            throw error;\n        });\n    };\n}\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(956); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot apply hot update to \" + \"index.js\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQWN0aW9ucy9pbmRleC5qcz8wYjY2Il0sIm5hbWVzIjpbInJlZGlyZWN0VG8iLCJjaGVja0F1dGgiLCJhZGRDaGFubmVscyIsInJlcXVlc3RTaWduVXAiLCJzaWduVXAiLCJzaWduSW4iLCJ0eXBlcyIsInJlY2VpdmVVc2VyIiwidXNlcm5hbWUiLCJ1c2VyIiwibmFtZSIsImlzQXV0aGVudGljYXRlZCIsInR5cGUiLCJBVVRIX1NVQ0NFU1MiLCJ1cmwiLCJkaXNwYXRjaCIsIlJFRElSRUNUIiwibG9hZCIsInB1c2giLCJsaXN0IiwiQUREX0NIQU5ORUxTIiwiQVVUSF9TSUdOVVAiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzcG9uc2UiLCJvayIsInNhdmUiLCJ1c2VyTG9naW4iLCJjYXRjaCIsImVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O1FBaUJnQkEsVSxHQUFBQSxVO1FBU0FDLFMsR0FBQUEsUztRQU9BQyxXLEdBQUFBLFc7UUFTQUMsYSxHQUFBQSxhO1FBTUFDLE0sR0FBQUEsTTtRQTBCQUMsTSxHQUFBQSxNOztBQTFFaEI7O0lBQVlDLEs7O0FBQ1o7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFHQSxTQUFTQyxXQUFULENBQXFCQyxRQUFyQixFQUErQjtBQUM3QixRQUFNQyxPQUFPO0FBQ1hDLGNBQU1GLFFBREs7QUFFWEcseUJBQWlCO0FBRk4sS0FBYjtBQUlBLFdBQU87QUFDTEMsY0FBTU4sTUFBTU8sWUFEUDtBQUVMSjtBQUZLLEtBQVA7QUFJRDs7QUFFTSxTQUFTVCxVQUFULENBQW9CYyxHQUFwQixFQUF5QjtBQUM1QixXQUFPLG9CQUFZO0FBQ2ZDLGlCQUFTO0FBQ0xILGtCQUFLTixNQUFNVSxRQUROO0FBRUxGO0FBRkssU0FBVDtBQUlILEtBTEQ7QUFNSDs7QUFFTSxTQUFTYixTQUFULEdBQXFCO0FBQ3hCLFFBQU1PLFdBQVcsc0JBQU9TLElBQVAsQ0FBWSxVQUFaLENBQWpCO0FBQ0EsUUFBSSxDQUFDVCxRQUFMLEVBQWU7QUFDWCxvQ0FBZVUsSUFBZixDQUFvQixTQUFwQjtBQUNIO0FBQ0o7O0FBRU0sU0FBU2hCLFdBQVQsQ0FBcUJpQixJQUFyQixFQUEyQjtBQUM5QixXQUFPLFVBQVNKLFFBQVQsRUFBbUI7QUFDdEJBLGlCQUFTO0FBQ1RILGtCQUFNTixNQUFNYyxZQURIO0FBRVREO0FBRlMsU0FBVDtBQUlILEtBTEQ7QUFNSDs7QUFFTSxTQUFTaEIsYUFBVCxHQUF5QjtBQUM1QixXQUFPO0FBQ0hTLGNBQUtOLE1BQU1lO0FBRFIsS0FBUDtBQUdIOztBQUVNLFNBQVNqQixNQUFULENBQWdCSyxJQUFoQixFQUFzQjs7QUFFM0IsV0FBTyxvQkFBWTs7QUFFakJNLGlCQUFTWixlQUFUO0FBQ0EsZUFBTywrQkFBTSxjQUFOLEVBQXNCO0FBQ3ZCbUIsb0JBQVEsTUFEZTtBQUVyQjtBQUNGQyxxQkFBUztBQUNMLDBCQUFVLGtCQURMO0FBRUwsZ0NBQWdCO0FBRlgsYUFIYztBQU92QkMsa0JBQU1DLEtBQUtDLFNBQUwsQ0FBZWpCLElBQWY7QUFQaUIsU0FBdEIsRUFTSmtCLElBVEksQ0FTQyxvQkFBWTtBQUNoQixnQkFBR0MsU0FBU0MsRUFBWixFQUFnQjtBQUNaO0FBQ0Ysc0NBQU9DLElBQVAsQ0FBWSxVQUFaLEVBQXdCckIsS0FBS3NCLFNBQTdCO0FBQ0FoQix5QkFBU1IsWUFBWUUsS0FBS3NCLFNBQWpCLENBQVQ7QUFDQSw0Q0FBZWIsSUFBZixDQUFvQixPQUFwQjtBQUNEO0FBQ0YsU0FoQkksRUFpQkpjLEtBakJJLENBaUJFLGlCQUFTO0FBQUMsa0JBQU1DLEtBQU47QUFBWSxTQWpCeEIsQ0FBUDtBQWtCRCxLQXJCRDtBQXNCRDs7QUFFTSxTQUFTNUIsTUFBVCxDQUFnQkksSUFBaEIsRUFBc0I7O0FBRXpCLFdBQU8sb0JBQVk7O0FBRWYsZUFBTywrQkFBTSxjQUFOLEVBQXNCO0FBQ3pCYSxvQkFBTyxNQURrQjtBQUV6QkMscUJBQVM7QUFDTCwwQkFBVSxrQkFETDtBQUVMLGdDQUFnQjtBQUZYLGFBRmdCO0FBTXpCQyxrQkFBTUMsS0FBS0MsU0FBTCxDQUFlakIsSUFBZjtBQU5tQixTQUF0QixFQVFOa0IsSUFSTSxDQVFELG9CQUFZO0FBQ2QsZ0JBQUdDLFNBQVNDLEVBQVosRUFBZ0I7QUFDWixzQ0FBT0MsSUFBUCxDQUFZLFVBQVosRUFBd0JyQixLQUFLc0IsU0FBN0I7QUFDQWhCLHlCQUFTUixZQUFZRSxLQUFLc0IsU0FBakIsQ0FBVDtBQUNBLDRDQUFlYixJQUFmLENBQW9CLE9BQXBCO0FBQ0g7QUFDSixTQWRNLEVBZU5jLEtBZk0sQ0FlQSxpQkFBUztBQUFDLGtCQUFNQyxLQUFOO0FBQVksU0FmdEIsQ0FBUDtBQWdCSCxLQWxCRDtBQW1CSCxDIiwiZmlsZSI6IjExMjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi9jb25zdGFudHMvQWN0aW9uVHlwZXMnO1xyXG5pbXBvcnQgeyBicm93c2VySGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XHJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLWZldGNoJztcclxuaW1wb3J0IGNvb2tpZSBmcm9tICdyZWFjdC1jb29raWUnO1xyXG5cclxuXHJcbmZ1bmN0aW9uIHJlY2VpdmVVc2VyKHVzZXJuYW1lKSB7XHJcbiAgY29uc3QgdXNlciA9IHtcclxuICAgIG5hbWU6IHVzZXJuYW1lLFxyXG4gICAgaXNBdXRoZW50aWNhdGVkOiB0cnVlXHJcbiAgfVxyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiB0eXBlcy5BVVRIX1NVQ0NFU1MsXHJcbiAgICB1c2VyXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVkaXJlY3RUbyh1cmwpIHtcclxuICAgIHJldHVybiBkaXNwYXRjaCA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOnR5cGVzLlJFRElSRUNULFxyXG4gICAgICAgICAgICB1cmxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tBdXRoKCkge1xyXG4gICAgY29uc3QgdXNlcm5hbWUgPSBjb29raWUubG9hZCgndXNlcm5hbWUnKTtcclxuICAgIGlmICghdXNlcm5hbWUpIHtcclxuICAgICAgICBicm93c2VySGlzdG9yeS5wdXNoKCcvc2lnbnVwJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRDaGFubmVscyhsaXN0KSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24oZGlzcGF0Y2gpIHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogdHlwZXMuQUREX0NIQU5ORUxTLFxyXG4gICAgICAgIGxpc3RcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlcXVlc3RTaWduVXAoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6dHlwZXMuQVVUSF9TSUdOVVBcclxuICAgIH0gXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaWduVXAodXNlcikge1xyXG4gICAgXHJcbiAgcmV0dXJuIGRpc3BhdGNoID0+IHtcclxuICAgICAgXHJcbiAgICBkaXNwYXRjaChyZXF1ZXN0U2lnblVwKCkpXHJcbiAgICByZXR1cm4gZmV0Y2goJy9hcGkvc2lnbl91cCcsIHtcclxuICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgICAgICAvL9C30LDQs9C+0LvQvtCy0LrQuCwg0YfRgtC+0LHRiyDQstC+0LfQvNC+0LbQvdC+INCx0YvQu9C+INC+0YLQv9GA0LDQstC40YLRjCBqc29uINGH0LXRgNC10LcgYm9keS9cclxuICAgICAgICAgIGhlYWRlcnM6IHsgXHJcbiAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJywgXHJcbiAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHVzZXIpXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBpZihyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAvL9GB0L7RhdGA0LDQvdGP0LXQvCDQuNC80Y8g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPINCyIGNva2llXHJcbiAgICAgICAgICBjb29raWUuc2F2ZSgndXNlcm5hbWUnLCB1c2VyLnVzZXJMb2dpbik7XHJcbiAgICAgICAgICBkaXNwYXRjaChyZWNlaXZlVXNlcih1c2VyLnVzZXJMb2dpbikpO1xyXG4gICAgICAgICAgYnJvd3Nlckhpc3RvcnkucHVzaCgnL2NoYXQnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7dGhyb3cgZXJyb3J9KTtcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2lnbkluKHVzZXIpIHtcclxuICAgIFxyXG4gICAgcmV0dXJuIGRpc3BhdGNoID0+IHtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gZmV0Y2goJy9hcGkvc2lnbl9pbicsIHtcclxuICAgICAgICAgICAgbWV0aG9kOidwb3N0JyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodXNlcilcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgaWYocmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgIGNvb2tpZS5zYXZlKCd1c2VybmFtZScsIHVzZXIudXNlckxvZ2luKTtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHJlY2VpdmVVc2VyKHVzZXIudXNlckxvZ2luKSk7XHJcbiAgICAgICAgICAgICAgICBicm93c2VySGlzdG9yeS5wdXNoKCcvY2hhdCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge3Rocm93IGVycm9yfSk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQWN0aW9ucy9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})