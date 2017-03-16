webpackHotUpdate(0,{

/***/ 979:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(2), RootInstanceProvider = __webpack_require__(10), ReactMount = __webpack_require__(12), React = __webpack_require__(98); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(98);\n\nvar _react2 = _interopRequireDefault(_react);\n\n__webpack_require__(980);\n\nvar _reactRedux = __webpack_require__(189);\n\nvar _SideBar = __webpack_require__(982);\n\nvar _SideBar2 = _interopRequireDefault(_SideBar);\n\nvar _ChatBox = __webpack_require__(1002);\n\nvar _ChatBox2 = _interopRequireDefault(_ChatBox);\n\nvar _CHANNELS_LIST = __webpack_require__(1014);\n\nvar _CHANNELS_LIST2 = _interopRequireDefault(_CHANNELS_LIST);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar ChatContainer = function (_React$Component) {\n    _inherits(ChatContainer, _React$Component);\n\n    function ChatContainer(props) {\n        _classCallCheck(this, ChatContainer);\n\n        return _possibleConstructorReturn(this, (ChatContainer.__proto__ || Object.getPrototypeOf(ChatContainer)).call(this, props));\n    }\n\n    _createClass(ChatContainer, [{\n        key: 'render',\n        value: function render() {\n            var _props = this.props,\n                messages = _props.messages,\n                socket = _props.socket;\n\n            return _react2.default.createElement(\n                'div',\n                { className: 'chat_container container' },\n                _react2.default.createElement(_SideBar2.default, { channels: _CHANNELS_LIST2.default, socket: socket }),\n                _react2.default.createElement(_ChatBox2.default, { messages: messages })\n            );\n        }\n    }]);\n\n    return ChatContainer;\n}(_react2.default.Component);\n\nvar mapStateToProps = function mapStateToProps(store) {\n    return {\n        messages: store.channel.active.messages\n    };\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps)(ChatContainer);\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(909); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot apply hot update to \" + \"ChatContainer.js\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9DaGF0Q29udGFpbmVyL0NoYXRDb250YWluZXIuanM/MzE5OCJdLCJuYW1lcyI6WyJDaGF0Q29udGFpbmVyIiwicHJvcHMiLCJtZXNzYWdlcyIsInNvY2tldCIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0b3JlIiwiY2hhbm5lbCIsImFjdGl2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFHTUEsYTs7O0FBQ0YsMkJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw2SEFDVEEsS0FEUztBQUVsQjs7OztpQ0FFUTtBQUFBLHlCQUN3QixLQUFLQSxLQUQ3QjtBQUFBLGdCQUNHQyxRQURILFVBQ0dBLFFBREg7QUFBQSxnQkFDYUMsTUFEYixVQUNhQSxNQURiOztBQUVMLG1CQUNJO0FBQUE7QUFBQSxrQkFBSyxXQUFVLDBCQUFmO0FBQ0ksbUVBQVMsaUNBQVQsRUFBNkIsUUFBUUEsTUFBckMsR0FESjtBQUVJLG1FQUFTLFVBQVVELFFBQW5CO0FBRkosYUFESjtBQU1IOzs7O0VBYnVCLGdCQUFNRSxTOztBQWdCbEMsSUFBTUMsa0JBQWtCLFNBQWxCQSxlQUFrQjtBQUFBLFdBQVU7QUFDOUJILGtCQUFTSSxNQUFNQyxPQUFOLENBQWNDLE1BQWQsQ0FBcUJOO0FBREEsS0FBVjtBQUFBLENBQXhCOztrQkFJZSx5QkFBUUcsZUFBUixFQUF5QkwsYUFBekIsQyIsImZpbGUiOiI5NzkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgJy4vbWFpbi5sZXNzJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmltcG9ydCBTaWRlQmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU2lkZUJhcic7XHJcbmltcG9ydCBDaGF0Qm94IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ2hhdEJveCc7XHJcbmltcG9ydCBDSEFOTkVMUyBmcm9tICcuLi8uLi9DSEFOTkVMU19MSVNUJztcclxuXHJcblxyXG5jbGFzcyBDaGF0Q29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBtZXNzYWdlcywgc29ja2V0IH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjaGF0X2NvbnRhaW5lciBjb250YWluZXInPlxyXG4gICAgICAgICAgICAgICAgPFNpZGVCYXIgY2hhbm5lbHM9e0NIQU5ORUxTfSBzb2NrZXQ9e3NvY2tldH0vPlxyXG4gICAgICAgICAgICAgICAgPENoYXRCb3ggbWVzc2FnZXM9e21lc3NhZ2VzfS8+XHJcbiAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdG9yZSA9PiAoe1xyXG4gICAgbWVzc2FnZXM6c3RvcmUuY2hhbm5lbC5hY3RpdmUubWVzc2FnZXNcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShDaGF0Q29udGFpbmVyKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29udGFpbmVycy9DaGF0Q29udGFpbmVyL0NoYXRDb250YWluZXIuanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }

})