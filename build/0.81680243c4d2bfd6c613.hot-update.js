webpackHotUpdate(0,{

/***/ 1134:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(2), RootInstanceProvider = __webpack_require__(10), ReactMount = __webpack_require__(12), React = __webpack_require__(98); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _ActionTypes = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module \\\"../../constatns/ActionTypes\\\"\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n\nvar _ActionTypes2 = _interopRequireDefault(_ActionTypes);\n\nvar _reactRouter = __webpack_require__(226);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar redirect = function redirect() {\n    return function (next) {\n        return function (action) {\n\n            if (action.type === _ActionTypes2.default) {\n                _reactRouter.browserHistory.push(action.url);\n            }\n\n            return next(action);\n        };\n    };\n};\n\nexports.default = redirect;\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(956); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot apply hot update to \" + \"redirect.js\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvbWlkZGxld2FyZS9yZWRpcmVjdC5qcz8zODczIl0sIm5hbWVzIjpbInJlZGlyZWN0IiwiYWN0aW9uIiwidHlwZSIsInB1c2giLCJ1cmwiLCJuZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxXQUFXLFNBQVhBLFFBQVc7QUFBQSxXQUFNO0FBQUEsZUFBUSxrQkFBVTs7QUFFckMsZ0JBQUdDLE9BQU9DLElBQVAsMEJBQUgsRUFBNkI7QUFDekIsNENBQWVDLElBQWYsQ0FBb0JGLE9BQU9HLEdBQTNCO0FBQ0g7O0FBRUQsbUJBQU9DLEtBQUtKLE1BQUwsQ0FBUDtBQUNILFNBUHNCO0FBQUEsS0FBTjtBQUFBLENBQWpCOztrQkFTZUQsUSIsImZpbGUiOiIxMTM0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJFRElSRUNUIGZyb20gJy4uLy4uL2NvbnN0YXRucy9BY3Rpb25UeXBlcyc7XHJcbmltcG9ydCB7IGJyb3dzZXJIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xyXG5cclxuY29uc3QgcmVkaXJlY3QgPSAoKSA9PiBuZXh0ID0+IGFjdGlvbiA9PiB7XHJcbiAgICBcclxuICAgIGlmKGFjdGlvbi50eXBlID09PSBSRURJUkVDVCkge1xyXG4gICAgICAgIGJyb3dzZXJIaXN0b3J5LnB1c2goYWN0aW9uLnVybCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiBuZXh0KGFjdGlvbik7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZGlyZWN0O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdG9yZS9taWRkbGV3YXJlL3JlZGlyZWN0LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

})