webpackHotUpdate(0,{

/***/ 1142:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(2), RootInstanceProvider = __webpack_require__(10), ReactMount = __webpack_require__(12), React = __webpack_require__(98); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _AppModal = __webpack_require__(1143);\n\nvar _AppModal2 = _interopRequireDefault(_AppModal);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _AppModal2.default;\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(956); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot apply hot update to \" + \"index.js\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9BcHBNb2RhbC9pbmRleC5qcz9iODAzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEiLCJmaWxlIjoiMTE0Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcHBNb2RhbCBmcm9tICcuL0FwcE1vZGFsJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcE1vZGFsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb250YWluZXJzL0FwcE1vZGFsL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ },

/***/ 1143:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(2), RootInstanceProvider = __webpack_require__(10), ReactMount = __webpack_require__(12), React = __webpack_require__(98); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(98);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Dialog = __webpack_require__(1056);\n\nvar _Dialog2 = _interopRequireDefault(_Dialog);\n\nvar _FlatButton = __webpack_require__(1038);\n\nvar _FlatButton2 = _interopRequireDefault(_FlatButton);\n\nvar _RaisedButton = __webpack_require__(673);\n\nvar _RaisedButton2 = _interopRequireDefault(_RaisedButton);\n\nvar _reactRedux = __webpack_require__(189);\n\nvar _Actions = __webpack_require__(1122);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n/**\r\n * A modal dialog can only be closed by selecting one of the actions.\r\n */\nvar AppModal = function (_React$Component) {\n  _inherits(AppModal, _React$Component);\n\n  function AppModal() {\n    _classCallCheck(this, AppModal);\n\n    return _possibleConstructorReturn(this, (AppModal.__proto__ || Object.getPrototypeOf(AppModal)).apply(this, arguments));\n  }\n\n  _createClass(AppModal, [{\n    key: 'render',\n    value: function render() {\n      var actions = [_react2.default.createElement(_FlatButton2.default, {\n        label: 'Cancel',\n        primary: true,\n        onTouchTap: this.props.closeModal\n      })];\n\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          _Dialog2.default,\n          {\n            title: 'Dialog With Actions',\n            actions: actions,\n            modal: true,\n            open: this.props.active\n          },\n          this.props.text\n        )\n      );\n    }\n  }]);\n\n  return AppModal;\n}(_react2.default.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    active: state.modal.active,\n    text: state.modal.text\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    closeModal: function closeModal() {\n      dispatch((0, _Actions.hideModal)());\n    }\n  };\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(AppModal);\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(956); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot apply hot update to \" + \"AppModal.jsx\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9BcHBNb2RhbC9BcHBNb2RhbC5qc3g/N2UxZCJdLCJuYW1lcyI6WyJBcHBNb2RhbCIsImFjdGlvbnMiLCJwcm9wcyIsImNsb3NlTW9kYWwiLCJhY3RpdmUiLCJ0ZXh0IiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJtb2RhbCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQUVBOzs7SUFHTUEsUTs7Ozs7Ozs7Ozs7NkJBRUs7QUFDUCxVQUFNQyxVQUFVLENBQ2Q7QUFDRSxlQUFNLFFBRFI7QUFFRSxpQkFBUyxJQUZYO0FBR0Usb0JBQVksS0FBS0MsS0FBTCxDQUFXQztBQUh6QixRQURjLENBQWhCOztBQVFBLGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0UsbUJBQU0scUJBRFI7QUFFRSxxQkFBU0YsT0FGWDtBQUdFLG1CQUFPLElBSFQ7QUFJRSxrQkFBTSxLQUFLQyxLQUFMLENBQVdFO0FBSm5CO0FBTUksZUFBS0YsS0FBTCxDQUFXRztBQU5mO0FBREYsT0FERjtBQVlEOzs7O0VBdkJvQixnQkFBTUMsUzs7QUEwQjdCLElBQU1DLGtCQUFrQixTQUFsQkEsZUFBa0I7QUFBQSxTQUFVO0FBQy9CSCxZQUFRSSxNQUFNQyxLQUFOLENBQVlMLE1BRFc7QUFFL0JDLFVBQU1HLE1BQU1DLEtBQU4sQ0FBWUo7QUFGYSxHQUFWO0FBQUEsQ0FBeEI7O0FBS0EsSUFBTUsscUJBQXFCLFNBQXJCQSxrQkFBcUI7QUFBQSxTQUFhO0FBQ3BDUCxjQURvQyx3QkFDdkI7QUFDVFEsZUFBUyx5QkFBVDtBQUNIO0FBSG1DLEdBQWI7QUFBQSxDQUEzQjs7a0JBTWUseUJBQVFKLGVBQVIsRUFBeUJHLGtCQUF6QixFQUE2Q1YsUUFBN0MsQyIsImZpbGUiOiIxMTQzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IERpYWxvZyBmcm9tICdtYXRlcmlhbC11aS9EaWFsb2cnO1xyXG5pbXBvcnQgRmxhdEJ1dHRvbiBmcm9tICdtYXRlcmlhbC11aS9GbGF0QnV0dG9uJztcclxuaW1wb3J0IFJhaXNlZEJ1dHRvbiBmcm9tICdtYXRlcmlhbC11aS9SYWlzZWRCdXR0b24nO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuaW1wb3J0IHsgaGlkZU1vZGFsIH0gZnJvbSAnLi4vLi4vQWN0aW9ucyc7XHJcblxyXG4vKipcclxuICogQSBtb2RhbCBkaWFsb2cgY2FuIG9ubHkgYmUgY2xvc2VkIGJ5IHNlbGVjdGluZyBvbmUgb2YgdGhlIGFjdGlvbnMuXHJcbiAqL1xyXG5jbGFzcyBBcHBNb2RhbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IGFjdGlvbnMgPSBbXHJcbiAgICAgIDxGbGF0QnV0dG9uXHJcbiAgICAgICAgbGFiZWw9XCJDYW5jZWxcIlxyXG4gICAgICAgIHByaW1hcnk9e3RydWV9XHJcbiAgICAgICAgb25Ub3VjaFRhcD17dGhpcy5wcm9wcy5jbG9zZU1vZGFsfVxyXG4gICAgICAvPlxyXG4gICAgXTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxEaWFsb2dcclxuICAgICAgICAgIHRpdGxlPVwiRGlhbG9nIFdpdGggQWN0aW9uc1wiXHJcbiAgICAgICAgICBhY3Rpb25zPXthY3Rpb25zfVxyXG4gICAgICAgICAgbW9kYWw9e3RydWV9XHJcbiAgICAgICAgICBvcGVuPXt0aGlzLnByb3BzLmFjdGl2ZX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7IHRoaXMucHJvcHMudGV4dCB9XHJcbiAgICAgICAgPC9EaWFsb2c+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XHJcbiAgIGFjdGl2ZTogc3RhdGUubW9kYWwuYWN0aXZlLCBcclxuICAgdGV4dDogc3RhdGUubW9kYWwudGV4dCBcclxufSk7XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xyXG4gICAgY2xvc2VNb2RhbCgpIHtcclxuICAgICAgICBkaXNwYXRjaChoaWRlTW9kYWwoKSk7XHJcbiAgICB9XHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShBcHBNb2RhbClcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29udGFpbmVycy9BcHBNb2RhbC9BcHBNb2RhbC5qc3giXSwic291cmNlUm9vdCI6IiJ9");

/***/ }

})