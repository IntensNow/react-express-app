webpackHotUpdate(0,[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(2), RootInstanceProvider = __webpack_require__(10), ReactMount = __webpack_require__(12), React = __webpack_require__(98); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n'use strict';\n\nvar _react = __webpack_require__(98);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(99);\n\nvar _reactRedux = __webpack_require__(189);\n\nvar _reactRouter = __webpack_require__(226);\n\nvar _reactTapEventPlugin = __webpack_require__(279);\n\nvar _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);\n\nvar _promisePolyfill = __webpack_require__(285);\n\nvar _promisePolyfill2 = _interopRequireDefault(_promisePolyfill);\n\nvar _store = __webpack_require__(1133);\n\nvar _store2 = _interopRequireDefault(_store);\n\nvar _routes = __webpack_require__(288);\n\n__webpack_require__(1140);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar store = (0, _store2.default)(undefined, (\"development\"));\n// add promise polyfill for old browsers;\nif (!window.Promise) {\n    window.Promise = _promisePolyfill2.default;\n}\n\n(0, _reactTapEventPlugin2.default)();\nvar mountingPoint = document.createElement('div');\nmountingPoint.className = 'app';\ndocument.body.insertBefore(mountingPoint, document.body.firstChild);\n\n(0, _reactDom.render)(_react2.default.createElement(\n    _reactRedux.Provider,\n    { store: store },\n    _react2.default.createElement(_reactRouter.Router, { history: _reactRouter.browserHistory, routes: _routes.routes })\n), mountingPoint);\n\nconsole.log('node env = ' + (\"development\"));\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(345); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot apply hot update to \" + \"index.jsx\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanN4P2E5ODAiXSwibmFtZXMiOlsic3RvcmUiLCJ1bmRlZmluZWQiLCJ3aW5kb3ciLCJQcm9taXNlIiwibW91bnRpbmdQb2ludCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImJvZHkiLCJpbnNlcnRCZWZvcmUiLCJmaXJzdENoaWxkIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7O0FBRUE7Ozs7QUFFQSxJQUFNQSxRQUFRLHFCQUFlQyxTQUFmLEVBQTBCLGVBQTFCLENBQWQ7QUFDQTtBQUNBLElBQUksQ0FBQ0MsT0FBT0MsT0FBWixFQUFxQjtBQUNuQkQsV0FBT0MsT0FBUDtBQUNEOztBQUVEO0FBQ0EsSUFBTUMsZ0JBQWdCQyxTQUFTQyxhQUFULENBQXVCLEtBQXZCLENBQXRCO0FBQ0FGLGNBQWNHLFNBQWQsR0FBMEIsS0FBMUI7QUFDQUYsU0FBU0csSUFBVCxDQUFjQyxZQUFkLENBQTJCTCxhQUEzQixFQUEwQ0MsU0FBU0csSUFBVCxDQUFjRSxVQUF4RDs7QUFFQSxzQkFFUTtBQUFBO0FBQUEsTUFBVSxPQUFRVixLQUFsQjtBQUNJLHlEQUFRLG9DQUFSLEVBQW1DLHNCQUFuQztBQURKLENBRlIsRUFNSUksYUFOSjs7QUFTQU8sUUFBUUMsR0FBUixDQUFZLGdCQUFnQixlQUE1QixFIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgUm91dGVyLCBicm93c2VySGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XHJcbmltcG9ydCBpbmplY3RUYXBFdmVudFBsdWdpbiBmcm9tICdyZWFjdC10YXAtZXZlbnQtcGx1Z2luJztcclxuaW1wb3J0IFByb21pc2UgZnJvbSAncHJvbWlzZS1wb2x5ZmlsbCc7IFxyXG5pbXBvcnQgY29uZmlndXJlU3RvcmUgZnJvbSAnLi9zdG9yZSc7XHJcblxyXG5pbXBvcnQgeyByb3V0ZXMgfSBmcm9tICcuL3JvdXRlcyc7XHJcblxyXG5pbXBvcnQgJy4vbWFpbi5jc3MnO1xyXG5cclxuY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSh1bmRlZmluZWQsIE5PREVfRU5WKTtcclxuLy8gYWRkIHByb21pc2UgcG9seWZpbGwgZm9yIG9sZCBicm93c2VycztcclxuaWYgKCF3aW5kb3cuUHJvbWlzZSkge1xyXG4gIHdpbmRvdy5Qcm9taXNlID0gUHJvbWlzZTtcclxufVxyXG5cclxuaW5qZWN0VGFwRXZlbnRQbHVnaW4oKTtcclxuY29uc3QgbW91bnRpbmdQb2ludCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5tb3VudGluZ1BvaW50LmNsYXNzTmFtZSA9ICdhcHAnO1xyXG5kb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZShtb3VudGluZ1BvaW50LCBkb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpO1xyXG5cclxucmVuZGVyKFxyXG4gICAgKFxyXG4gICAgICAgIDxQcm92aWRlciBzdG9yZT17IHN0b3JlIH0+XHJcbiAgICAgICAgICAgIDxSb3V0ZXIgaGlzdG9yeT17IGJyb3dzZXJIaXN0b3J5IH0gcm91dGVzPXsgcm91dGVzIH0vPlxyXG4gICAgICAgIDwvUHJvdmlkZXI+XHJcbiAgICApLFxyXG4gICAgbW91bnRpbmdQb2ludCAgXHJcbik7XHJcblxyXG5jb25zb2xlLmxvZygnbm9kZSBlbnYgPSAnICsgTk9ERV9FTlYpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qc3giXSwic291cmNlUm9vdCI6IiJ9");

/***/ }
])