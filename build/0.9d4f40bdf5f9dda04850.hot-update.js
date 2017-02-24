webpackHotUpdate(0,{

/***/ 1001:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(2), RootInstanceProvider = __webpack_require__(10), ReactMount = __webpack_require__(12), React = __webpack_require__(98); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(98);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _formsyReact = __webpack_require__(963);\n\nvar _formsyReact2 = _interopRequireDefault(_formsyReact);\n\nvar _getMuiTheme = __webpack_require__(602);\n\nvar _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);\n\nvar _MuiThemeProvider = __webpack_require__(593);\n\nvar _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);\n\nvar _Paper = __webpack_require__(675);\n\nvar _Paper2 = _interopRequireDefault(_Paper);\n\nvar _RaisedButton = __webpack_require__(653);\n\nvar _RaisedButton2 = _interopRequireDefault(_RaisedButton);\n\nvar _validations = __webpack_require__(970);\n\nvar _validations2 = _interopRequireDefault(_validations);\n\nvar _lib = __webpack_require__(1002);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar styles = {\n  paperStyle: {\n    width: 300,\n    margin: 'auto',\n    padding: 20\n  },\n  submitStyle: {\n    marginTop: 32\n  }\n};\n\nvar errorMessages = {\n  emailError: 'This is not a valid email',\n  loginError: 'Please choose another login',\n  passwordError: 'Please provide a strong password',\n  passwordReError: 'Passwords do not match',\n  uniqueError: 'This username is already taken'\n};\n\nvar SignUp = function (_React$Component) {\n  _inherits(SignUp, _React$Component);\n\n  function SignUp(props) {\n    _classCallCheck(this, SignUp);\n\n    var _this = _possibleConstructorReturn(this, (SignUp.__proto__ || Object.getPrototypeOf(SignUp)).call(this, props));\n\n    _this.state = {\n      canSubmit: false,\n      isUniqueLogin: false\n    };\n    _this.disableButton = _this.disableButton.bind(_this);\n    _this.enableButton = _this.enableButton.bind(_this);\n    _this.isUniqueLogin = _this.isUniqueLogin.bind(_this);\n    _this.checkLogin = _this.checkLogin.bind(_this);\n    return _this;\n  }\n\n  _createClass(SignUp, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      var socket = this.props.socket;\n\n      socket.on('user exist info', function (data) {\n        _this2.setState({\n          isUniqueLogin: data.isUniqueLogin\n        });\n      });\n    }\n  }, {\n    key: 'enableButton',\n    value: function enableButton() {\n      this.setState({\n        canSubmit: true\n      });\n    }\n  }, {\n    key: 'disableButton',\n    value: function disableButton() {\n      this.setState({\n        canSubmit: false\n      });\n    }\n  }, {\n    key: 'isUniqueLogin',\n    value: function isUniqueLogin(values, value) {\n      if (value !== 'undefined' && !this.state.isUniqueLogin) {\n        return false;\n      }\n      return true;\n    }\n  }, {\n    key: 'checkLogin',\n    value: function checkLogin(e) {\n      var socket = this.props.socket;\n      var data = {\n        login: e.target.value\n      };\n      socket.emit('is user exist', data);\n    }\n  }, {\n    key: 'submitForm',\n    value: function submitForm(data) {\n      alert(JSON.stringify(data, null, 4));\n    }\n  }, {\n    key: 'notifyFormError',\n    value: function notifyFormError(data) {\n      console.error('Form error:', data);\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var paperStyle = styles.paperStyle,\n          submitStyle = styles.submitStyle;\n      var emailError = errorMessages.emailError,\n          passwordError = errorMessages.passwordError,\n          passwordReError = errorMessages.passwordReError,\n          loginError = errorMessages.loginError,\n          uniqueError = errorMessages.uniqueError;\n      var goodLogin = _validations2.default.goodLogin,\n          strongPassword = _validations2.default.strongPassword,\n          passwordsMatch = _validations2.default.passwordsMatch;\n\n\n      return _react2.default.createElement(\n        _MuiThemeProvider2.default,\n        { muiTheme: (0, _getMuiTheme2.default)() },\n        _react2.default.createElement(\n          _Paper2.default,\n          { style: paperStyle },\n          _react2.default.createElement(\n            _formsyReact2.default.Form,\n            {\n              onValid: this.enableButton,\n              onInvalid: this.disableButton,\n              onValidSubmit: this.submitForm,\n              onInvalidSubmit: this.notifyFormError\n            },\n            _react2.default.createElement(_lib.FormsyText, {\n              name: 'login',\n              validations: { isUniqueLogin: this.isUniqueLogin, goodLogin: goodLogin },\n              validationErrors: { goodLogin: loginError, uniqueError: uniqueError },\n              required: true,\n              floatingLabelText: 'Login',\n              maxLength: '20',\n              onChange: this.checkLogin\n            }),\n            _react2.default.createElement(_lib.FormsyText, {\n              type: 'password',\n              name: 'password',\n              validations: { strongPassword: strongPassword },\n              validationErrors: { strongPassword: passwordError },\n              required: true,\n              floatingLabelText: 'Password'\n            }),\n            _react2.default.createElement(_lib.FormsyText, {\n              type: 'password',\n              name: 'passwordRe',\n              validations: { passwordsMatch: passwordsMatch },\n              validationErrors: { passwordsMatch: passwordReError },\n              floatingLabelText: 'Password repeat'\n            }),\n            _react2.default.createElement(_lib.FormsyText, {\n              name: 'email',\n              validations: 'isEmail',\n              validationError: emailError,\n              required: true,\n              floatingLabelText: 'Email',\n              updateImmediately: true\n            }),\n            _react2.default.createElement(_RaisedButton2.default, {\n              style: submitStyle,\n              type: 'submit',\n              label: 'Sign Up',\n              disabled: !this.state.canSubmit\n            })\n          )\n        )\n      );\n    }\n  }]);\n\n  return SignUp;\n}(_react2.default.Component);\n\nexports.default = SignUp;\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(936); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot apply hot update to \" + \"SignUp.jsx\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9TaWduVXAvU2lnblVwLmpzeD85MjMyIl0sIm5hbWVzIjpbInN0eWxlcyIsInBhcGVyU3R5bGUiLCJ3aWR0aCIsIm1hcmdpbiIsInBhZGRpbmciLCJzdWJtaXRTdHlsZSIsIm1hcmdpblRvcCIsImVycm9yTWVzc2FnZXMiLCJlbWFpbEVycm9yIiwibG9naW5FcnJvciIsInBhc3N3b3JkRXJyb3IiLCJwYXNzd29yZFJlRXJyb3IiLCJ1bmlxdWVFcnJvciIsIlNpZ25VcCIsInByb3BzIiwic3RhdGUiLCJjYW5TdWJtaXQiLCJpc1VuaXF1ZUxvZ2luIiwiZGlzYWJsZUJ1dHRvbiIsImJpbmQiLCJlbmFibGVCdXR0b24iLCJjaGVja0xvZ2luIiwic29ja2V0Iiwib24iLCJzZXRTdGF0ZSIsImRhdGEiLCJ2YWx1ZXMiLCJ2YWx1ZSIsImUiLCJsb2dpbiIsInRhcmdldCIsImVtaXQiLCJhbGVydCIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb25zb2xlIiwiZXJyb3IiLCJnb29kTG9naW4iLCJzdHJvbmdQYXNzd29yZCIsInBhc3N3b3Jkc01hdGNoIiwic3VibWl0Rm9ybSIsIm5vdGlmeUZvcm1FcnJvciIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTO0FBQ1hDLGNBQVk7QUFDVkMsV0FBTyxHQURHO0FBRVZDLFlBQVEsTUFGRTtBQUdWQyxhQUFTO0FBSEMsR0FERDtBQU1YQyxlQUFhO0FBQ1hDLGVBQVc7QUFEQTtBQU5GLENBQWY7O0FBV0EsSUFBTUMsZ0JBQWdCO0FBQ2xCQyxjQUFZLDJCQURNO0FBRWxCQyxjQUFZLDZCQUZNO0FBR2xCQyxpQkFBZSxrQ0FIRztBQUlsQkMsbUJBQWlCLHdCQUpDO0FBS2xCQyxlQUFhO0FBTEssQ0FBdEI7O0lBU01D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T0Usd0JBQVUsS0FBS1M7QUFQakIsY0FORjtBQWVFO0FBQ0Usb0JBQUssVUFEUDtBQUVFLG9CQUFLLFVBRlA7QUFHRSwyQkFBYSxFQUFDaUIsZ0JBQWdCQSxjQUFqQixFQUhmO0FBSUUsZ0NBQWtCLEVBQUNBLGdCQUFnQjVCLGFBQWpCLEVBSnBCO0FBS0UsNEJBTEY7QUFNRSxpQ0FBa0I7QUFOcEIsY0FmRjtBQXVCRTtBQUNFLG9CQUFLLFVBRFA7QUFFRSxvQkFBSyxZQUZQO0FBR0UsMkJBQWEsRUFBQzZCLGdCQUFnQkEsY0FBakIsRUFIZjtBQUlFLGdDQUFrQixFQUFDQSxnQkFBZ0I1QixlQUFqQixFQUpwQjtBQUtFLGlDQUFrQjtBQUxwQixjQXZCRjtBQThCRTtBQUNFLG9CQUFLLE9BRFA7QUFFRSwyQkFBWSxTQUZkO0FBR0UsK0JBQWlCSCxVQUhuQjtBQUlFLDRCQUpGO0FBS0UsaUNBQWtCLE9BTHBCO0FBTUU7QUFORixjQTlCRjtBQXNDRTtBQUNFLHFCQUFPSCxXQURUO0FBRUUsb0JBQUssUUFGUDtBQUdFLHFCQUFNLFNBSFI7QUFJRSx3QkFBVSxDQUFDLEtBQUtVLEtBQUwsQ0FBV0M7QUFKeEI7QUF0Q0Y7QUFERjtBQURGLE9BREY7QUFtREQ7Ozs7RUFuSGtCLGdCQUFNMEIsUzs7a0JBc0haN0IsTSIsImZpbGUiOiIxMDAxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEZvcm1zeSBmcm9tICdmb3Jtc3ktcmVhY3QnO1xyXG5pbXBvcnQgZ2V0TXVpVGhlbWUgZnJvbSAnbWF0ZXJpYWwtdWkvc3R5bGVzL2dldE11aVRoZW1lJztcclxuaW1wb3J0IE11aVRoZW1lUHJvdmlkZXIgZnJvbSAnbWF0ZXJpYWwtdWkvc3R5bGVzL011aVRoZW1lUHJvdmlkZXInO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSAnbWF0ZXJpYWwtdWkvUGFwZXInO1xyXG5pbXBvcnQgUmFpc2VkQnV0dG9uIGZyb20gJ21hdGVyaWFsLXVpL1JhaXNlZEJ1dHRvbic7XHJcbmltcG9ydCB2YWxpZGF0aW9ucyBmcm9tICcuLi8uLi91dGlscy92YWxpZGF0aW9ucyc7XHJcbmltcG9ydCB7IEZvcm1zeVRleHQgfSBmcm9tICdmb3Jtc3ktbWF0ZXJpYWwtdWkvbGliJztcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICAgIHBhcGVyU3R5bGU6IHtcclxuICAgICAgd2lkdGg6IDMwMCxcclxuICAgICAgbWFyZ2luOiAnYXV0bycsXHJcbiAgICAgIHBhZGRpbmc6IDIwLFxyXG4gICAgfSxcclxuICAgIHN1Ym1pdFN0eWxlOiB7XHJcbiAgICAgIG1hcmdpblRvcDogMzIsXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGVycm9yTWVzc2FnZXMgPSB7XHJcbiAgICBlbWFpbEVycm9yOiAnVGhpcyBpcyBub3QgYSB2YWxpZCBlbWFpbCcsXHJcbiAgICBsb2dpbkVycm9yOiAnUGxlYXNlIGNob29zZSBhbm90aGVyIGxvZ2luJyxcclxuICAgIHBhc3N3b3JkRXJyb3I6ICdQbGVhc2UgcHJvdmlkZSBhIHN0cm9uZyBwYXNzd29yZCcsXHJcbiAgICBwYXNzd29yZFJlRXJyb3I6ICdQYXNzd29yZHMgZG8gbm90IG1hdGNoJyxcclxuICAgIHVuaXF1ZUVycm9yOiAnVGhpcyB1c2VybmFtZSBpcyBhbHJlYWR5IHRha2VuJ1xyXG59XHJcblxyXG5cclxuY2xhc3MgU2lnblVwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGNhblN1Ym1pdDpmYWxzZSxcclxuICAgICAgICAgICAgaXNVbmlxdWVMb2dpbjogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kaXNhYmxlQnV0dG9uID0gdGhpcy5kaXNhYmxlQnV0dG9uLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5lbmFibGVCdXR0b24gPSB0aGlzLmVuYWJsZUJ1dHRvbi5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaXNVbmlxdWVMb2dpbiA9IHRoaXMuaXNVbmlxdWVMb2dpbi5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuY2hlY2tMb2dpbiA9IHRoaXMuY2hlY2tMb2dpbi5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgIGNvbnN0IHNvY2tldCA9IHRoaXMucHJvcHMuc29ja2V0O1xyXG4gICAgICBcclxuICAgICAgc29ja2V0Lm9uKCd1c2VyIGV4aXN0IGluZm8nLCBkYXRhID0+IHtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgIGlzVW5pcXVlTG9naW46IGRhdGEuaXNVbmlxdWVMb2dpblxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBcclxuICB9XHJcblxyXG4gIGVuYWJsZUJ1dHRvbigpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBjYW5TdWJtaXQ6IHRydWUsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGRpc2FibGVCdXR0b24oKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgY2FuU3VibWl0OiBmYWxzZSxcclxuICAgIH0pO1xyXG4gIH1cclxuICBcclxuICBpc1VuaXF1ZUxvZ2luKHZhbHVlcywgdmFsdWUpIHtcclxuICAgICAgaWYgKHZhbHVlICE9PSAndW5kZWZpbmVkJyAmJiAhdGhpcy5zdGF0ZS5pc1VuaXF1ZUxvZ2luKSB7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG4gICAgXHJcbiAgY2hlY2tMb2dpbihlKSB7XHJcbiAgICAgIGNvbnN0IHNvY2tldCA9IHRoaXMucHJvcHMuc29ja2V0O1xyXG4gICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgICAgbG9naW46IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgIH1cclxuICAgICAgc29ja2V0LmVtaXQoJ2lzIHVzZXIgZXhpc3QnLCBkYXRhKTtcclxuICB9XHJcbiAgICBcclxuICBzdWJtaXRGb3JtKGRhdGEpIHtcclxuICAgIGFsZXJ0KEpTT04uc3RyaW5naWZ5KGRhdGEsIG51bGwsIDQpKTtcclxuICB9XHJcblxyXG4gIG5vdGlmeUZvcm1FcnJvcihkYXRhKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdGb3JtIGVycm9yOicsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgbGV0IHsgcGFwZXJTdHlsZSwgc3VibWl0U3R5bGUgfSA9IHN0eWxlcztcclxuICAgIGxldCB7IGVtYWlsRXJyb3IsIHBhc3N3b3JkRXJyb3IsIHBhc3N3b3JkUmVFcnJvciwgbG9naW5FcnJvciwgdW5pcXVlRXJyb3IgfSA9IGVycm9yTWVzc2FnZXM7XHJcbiAgICBsZXQgeyBnb29kTG9naW4sIHN0cm9uZ1Bhc3N3b3JkLCBwYXNzd29yZHNNYXRjaCB9ID0gdmFsaWRhdGlvbnM7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPE11aVRoZW1lUHJvdmlkZXIgbXVpVGhlbWU9e2dldE11aVRoZW1lKCl9PlxyXG4gICAgICAgIDxQYXBlciBzdHlsZT17cGFwZXJTdHlsZX0+XHJcbiAgICAgICAgICA8Rm9ybXN5LkZvcm1cclxuICAgICAgICAgICAgb25WYWxpZD17dGhpcy5lbmFibGVCdXR0b259XHJcbiAgICAgICAgICAgIG9uSW52YWxpZD17dGhpcy5kaXNhYmxlQnV0dG9ufVxyXG4gICAgICAgICAgICBvblZhbGlkU3VibWl0PXt0aGlzLnN1Ym1pdEZvcm19XHJcbiAgICAgICAgICAgIG9uSW52YWxpZFN1Ym1pdD17dGhpcy5ub3RpZnlGb3JtRXJyb3J9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxGb3Jtc3lUZXh0XHJcbiAgICAgICAgICAgICAgbmFtZT1cImxvZ2luXCJcclxuICAgICAgICAgICAgICB2YWxpZGF0aW9ucz17e2lzVW5pcXVlTG9naW46dGhpcy5pc1VuaXF1ZUxvZ2luLCBnb29kTG9naW46IGdvb2RMb2dpbn19XHJcbiAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9ycz17e2dvb2RMb2dpbjpsb2dpbkVycm9yLCB1bmlxdWVFcnJvcjp1bmlxdWVFcnJvcn19XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICBmbG9hdGluZ0xhYmVsVGV4dD1cIkxvZ2luXCJcclxuICAgICAgICAgICAgICBtYXhMZW5ndGg9JzIwJ1xyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmNoZWNrTG9naW59XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxGb3Jtc3lUZXh0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIHZhbGlkYXRpb25zPXt7c3Ryb25nUGFzc3dvcmQ6IHN0cm9uZ1Bhc3N3b3JkfX1cclxuICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JzPXt7c3Ryb25nUGFzc3dvcmQ6IHBhc3N3b3JkRXJyb3J9fVxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgZmxvYXRpbmdMYWJlbFRleHQ9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxGb3Jtc3lUZXh0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRSZVwiXHJcbiAgICAgICAgICAgICAgdmFsaWRhdGlvbnM9e3twYXNzd29yZHNNYXRjaDogcGFzc3dvcmRzTWF0Y2h9fVxyXG4gICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvcnM9e3twYXNzd29yZHNNYXRjaDogcGFzc3dvcmRSZUVycm9yfX1cclxuICAgICAgICAgICAgICBmbG9hdGluZ0xhYmVsVGV4dD1cIlBhc3N3b3JkIHJlcGVhdFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxGb3Jtc3lUZXh0XHJcbiAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICB2YWxpZGF0aW9ucz1cImlzRW1haWxcIlxyXG4gICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvcj17ZW1haWxFcnJvcn1cclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIGZsb2F0aW5nTGFiZWxUZXh0PVwiRW1haWxcIlxyXG4gICAgICAgICAgICAgIHVwZGF0ZUltbWVkaWF0ZWx5XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxSYWlzZWRCdXR0b25cclxuICAgICAgICAgICAgICBzdHlsZT17c3VibWl0U3R5bGV9XHJcbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJTaWduIFVwXCJcclxuICAgICAgICAgICAgICBkaXNhYmxlZD17IXRoaXMuc3RhdGUuY2FuU3VibWl0fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Gb3Jtc3kuRm9ybT5cclxuICAgICAgICA8L1BhcGVyPlxyXG4gICAgICA8L011aVRoZW1lUHJvdmlkZXI+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnblVwO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb250YWluZXJzL1NpZ25VcC9TaWduVXAuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

})