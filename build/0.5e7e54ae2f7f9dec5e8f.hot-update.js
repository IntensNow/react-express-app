webpackHotUpdate(0,{

/***/ 288:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(2), RootInstanceProvider = __webpack_require__(10), ReactMount = __webpack_require__(12), React = __webpack_require__(98); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.routes = undefined;\n\nvar _react = __webpack_require__(98);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouter = __webpack_require__(226);\n\nvar _socket = __webpack_require__(668);\n\nvar _socket2 = _interopRequireDefault(_socket);\n\nvar _reactCookie = __webpack_require__(720);\n\nvar _reactCookie2 = _interopRequireDefault(_reactCookie);\n\nvar _Actions = __webpack_require__(722);\n\nvar _App = __webpack_require__(725);\n\nvar _App2 = _interopRequireDefault(_App);\n\nvar _ChatContainer2 = __webpack_require__(988);\n\nvar _ChatContainer3 = _interopRequireDefault(_ChatContainer2);\n\nvar _SignIn2 = __webpack_require__(1025);\n\nvar _SignIn3 = _interopRequireDefault(_SignIn2);\n\nvar _SignUp2 = __webpack_require__(1137);\n\nvar _SignUp3 = _interopRequireDefault(_SignUp2);\n\nvar _CheckAccess = __webpack_require__(1139);\n\nvar _CheckAccess2 = _interopRequireDefault(_CheckAccess);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar socket = (0, _socket2.default)('/api/chat');\n\nvar _SignIn = function _SignIn() {\n  return _react2.default.createElement(_SignIn3.default, { socket: socket });\n};\nvar _SignUp = function _SignUp() {\n  return _react2.default.createElement(_SignUp3.default, { socket: socket });\n};\nvar _ChatContainer = function _ChatContainer() {\n  return _react2.default.createElement(_ChatContainer3.default, { socket: socket });\n};\n\nvar routes = exports.routes = _react2.default.createElement(\n  'div',\n  null,\n  _react2.default.createElement(\n    _reactRouter.Route,\n    { path: '/', component: _App2.default, onEnter: _App2.default.onEnter },\n    _react2.default.createElement(_reactRouter.Route, { path: '/chat', component: (0, _CheckAccess2.default)(_ChatContainer) }),\n    _react2.default.createElement(_reactRouter.Route, { path: '/signin', component: _SignIn }),\n    _react2.default.createElement(_reactRouter.Route, { path: '/signup', component: _SignUp })\n  )\n);\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(294); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot apply hot update to \" + \"routes.jsx\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzLmpzeD8yNGMyIl0sIm5hbWVzIjpbInNvY2tldCIsIl9TaWduSW4iLCJfU2lnblVwIiwiX0NoYXRDb250YWluZXIiLCJyb3V0ZXMiLCJvbkVudGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxTQUFTLHNCQUFHLFdBQUgsQ0FBZjs7QUFFQSxJQUFNQyxVQUFpQixTQUFqQkEsT0FBaUI7QUFBQSxTQUFNLGtEQUFRLFFBQVFELE1BQWhCLEdBQU47QUFBQSxDQUF2QjtBQUNBLElBQU1FLFVBQWlCLFNBQWpCQSxPQUFpQjtBQUFBLFNBQU0sa0RBQVEsUUFBUUYsTUFBaEIsR0FBTjtBQUFBLENBQXZCO0FBQ0EsSUFBTUcsaUJBQWlCLFNBQWpCQSxjQUFpQjtBQUFBLFNBQU0seURBQWUsUUFBUUgsTUFBdkIsR0FBTjtBQUFBLENBQXZCOztBQUVPLElBQU1JLDBCQUNYO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxNQUFPLE1BQUssR0FBWixFQUFnQix3QkFBaEIsRUFBZ0MsU0FBUyxjQUFJQyxPQUE3QztBQUNFLHdEQUFPLE1BQUssT0FBWixFQUFvQixXQUFXLDJCQUFZRixjQUFaLENBQS9CLEdBREY7QUFFRSx3REFBTyxNQUFLLFNBQVosRUFBc0IsV0FBV0YsT0FBakMsR0FGRjtBQUdFLHdEQUFPLE1BQUssU0FBWixFQUFzQixXQUFXQyxPQUFqQztBQUhGO0FBREYsQ0FESyxDIiwiZmlsZSI6IjI4OC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSb3V0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgaW8gZnJvbSAnc29ja2V0LmlvLWNsaWVudCc7XG5pbXBvcnQgY29va2llIGZyb20gJ3JlYWN0LWNvb2tpZSc7XG5pbXBvcnQgeyByZWNlaXZlVXNlciB9IGZyb20gJy4vQWN0aW9ucyc7XG5cbmltcG9ydCBBcHAgZnJvbSAnLi9jb250YWluZXJzL0FwcC8nO1xuaW1wb3J0IENoYXRDb250YWluZXIgZnJvbSAnLi9jb250YWluZXJzL0NoYXRDb250YWluZXInO1xuaW1wb3J0IFNpZ25JbiBmcm9tICcuL2NvbnRhaW5lcnMvU2lnbkluJztcbmltcG9ydCBTaWduVXAgZnJvbSAnLi9jb250YWluZXJzL1NpZ25VcCc7XG5pbXBvcnQgQ2hlY2tBY2Nlc3MgZnJvbSAnLi9jb250YWluZXJzL0NoZWNrQWNjZXNzJztcblxuY29uc3Qgc29ja2V0ID0gaW8oJy9hcGkvY2hhdCcpO1xuXG5jb25zdCBfU2lnbkluICAgICAgICA9ICgpID0+IDxTaWduSW4gc29ja2V0PXtzb2NrZXR9Lz47XG5jb25zdCBfU2lnblVwICAgICAgICA9ICgpID0+IDxTaWduVXAgc29ja2V0PXtzb2NrZXR9Lz47XG5jb25zdCBfQ2hhdENvbnRhaW5lciA9ICgpID0+IDxDaGF0Q29udGFpbmVyIHNvY2tldD17c29ja2V0fS8+O1xuXG5leHBvcnQgY29uc3Qgcm91dGVzID0gKFxuICA8ZGl2PlxuICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGNvbXBvbmVudD17QXBwfSBvbkVudGVyPXtBcHAub25FbnRlcn0+XG4gICAgICA8Um91dGUgcGF0aD1cIi9jaGF0XCIgY29tcG9uZW50PXtDaGVja0FjY2VzcyhfQ2hhdENvbnRhaW5lcil9Lz5cbiAgICAgIDxSb3V0ZSBwYXRoPVwiL3NpZ25pblwiIGNvbXBvbmVudD17X1NpZ25Jbn0vPlxuICAgICAgPFJvdXRlIHBhdGg9XCIvc2lnbnVwXCIgY29tcG9uZW50PXtfU2lnblVwfS8+XG4gICAgPC9Sb3V0ZT5cbiAgPC9kaXY+XG4pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yb3V0ZXMuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

})