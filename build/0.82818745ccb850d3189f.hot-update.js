webpackHotUpdate(0,{

/***/ 1004:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(2), RootInstanceProvider = __webpack_require__(10), ReactMount = __webpack_require__(12), React = __webpack_require__(98); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(98);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(189);\n\nvar _formsyReact = __webpack_require__(981);\n\nvar _formsyReact2 = _interopRequireDefault(_formsyReact);\n\nvar _getMuiTheme = __webpack_require__(620);\n\nvar _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);\n\nvar _MuiThemeProvider = __webpack_require__(611);\n\nvar _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);\n\nvar _Paper = __webpack_require__(693);\n\nvar _Paper2 = _interopRequireDefault(_Paper);\n\nvar _RaisedButton = __webpack_require__(671);\n\nvar _RaisedButton2 = _interopRequireDefault(_RaisedButton);\n\nvar _lib = __webpack_require__(1005);\n\nvar _validations = __webpack_require__(988);\n\nvar _validations2 = _interopRequireDefault(_validations);\n\nvar _Actions = __webpack_require__(1120);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar styles = {\n  paperStyle: {\n    width: 300,\n    margin: 'auto',\n    padding: 20\n  },\n  submitStyle: {\n    marginTop: 32\n  }\n};\n\nvar errorMessages = {\n  loginError: 'Please choose another login',\n  passwordError: 'The password is not valid',\n  passwordReError: 'Passwords do not match'\n};\n\nvar SignIn = function (_React$Component) {\n  _inherits(SignIn, _React$Component);\n\n  function SignIn(props) {\n    _classCallCheck(this, SignIn);\n\n    var _this = _possibleConstructorReturn(this, (SignIn.__proto__ || Object.getPrototypeOf(SignIn)).call(this, props));\n\n    _this.state = {\n      canSubmit: false,\n      fieldsWriteable: true\n    };\n    _this.disableButton = _this.disableButton.bind(_this);\n    _this.enableButton = _this.enableButton.bind(_this);\n    _this.submitForm = _this.submitForm.bind(_this);\n    return _this;\n  }\n\n  _createClass(SignIn, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      var socket = this.props.socket;\n\n      socket.on('user exist info', function (data) {\n        _this2.setState({\n          isUniqueLogin: data.isUniqueLogin\n        });\n      });\n    }\n  }, {\n    key: 'enableButton',\n    value: function enableButton() {\n      this.setState({\n        canSubmit: true\n      });\n    }\n  }, {\n    key: 'disableButton',\n    value: function disableButton() {\n      this.setState({\n        canSubmit: false\n      });\n    }\n  }, {\n    key: 'submitForm',\n    value: function submitForm(user) {\n      this.disableFields();\n      var dispatch = this.props.dispatch;\n\n      dispatch((0, _Actions.signIn)(user));\n    }\n  }, {\n    key: 'disableFields',\n    value: function disableFields() {\n      this.setState({\n        fieldsWriteable: false\n      });\n    }\n  }, {\n    key: 'notifyFormError',\n    value: function notifyFormError(data) {\n      console.error('Form error:', data);\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var paperStyle = styles.paperStyle,\n          submitStyle = styles.submitStyle;\n      var passwordError = errorMessages.passwordError,\n          passwordReError = errorMessages.passwordReError,\n          loginError = errorMessages.loginError;\n      var strongPassword = _validations2.default.strongPassword,\n          passwordsMatch = _validations2.default.passwordsMatch,\n          goodLogin = _validations2.default.goodLogin;\n\n\n      return _react2.default.createElement(\n        _MuiThemeProvider2.default,\n        { muiTheme: (0, _getMuiTheme2.default)() },\n        _react2.default.createElement(\n          _Paper2.default,\n          { style: paperStyle },\n          _react2.default.createElement(\n            _formsyReact2.default.Form,\n            {\n              onValid: this.enableButton,\n              onInvalid: this.disableButton,\n              onValidSubmit: this.submitForm,\n              onInvalidSubmit: this.notifyFormError\n            },\n            _react2.default.createElement(_lib.FormsyText, {\n              name: 'userLogin',\n              validations: { isUniqueLogin: this.isUniqueLogin, goodLogin: goodLogin },\n              validationErrors: { isUniqueLogin: uniqueError, goodLogin: loginError },\n              required: true,\n              floatingLabelText: 'Login',\n              maxLength: '20',\n              onChange: this.checkLogin,\n              disabled: !this.state.fieldsWriteable\n            }),\n            _react2.default.createElement(_lib.FormsyText, {\n              type: 'password',\n              name: 'userPassword',\n              validations: { strongPassword: strongPassword },\n              validationErrors: { strongPassword: passwordError },\n              required: true,\n              floatingLabelText: 'Password',\n              disabled: !this.state.fieldsWriteable\n\n            }),\n            _react2.default.createElement(_lib.FormsyText, {\n              type: 'password',\n              name: 'passwordRe',\n              validations: { passwordsMatch: passwordsMatch },\n              validationErrors: { passwordsMatch: passwordReError },\n              floatingLabelText: 'Password repeat',\n              disabled: !this.state.fieldsWriteable\n\n            }),\n            _react2.default.createElement(_RaisedButton2.default, {\n              style: submitStyle,\n              type: 'submit',\n              label: 'Sign Up',\n              disabled: !this.state.canSubmit || !this.state.fieldsWriteable\n            })\n          )\n        )\n      );\n    }\n  }]);\n\n  return SignIn;\n}(_react2.default.Component);\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    dispatch: dispatch\n  };\n};\n\nexports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(SignIn);\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(954); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot apply hot update to \" + \"SignIn.jsx\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9TaWduSW4vU2lnbkluLmpzeD8wZTNmIl0sIm5hbWVzIjpbInN0eWxlcyIsInBhcGVyU3R5bGUiLCJ3aWR0aCIsIm1hcmdpbiIsInBhZGRpbmciLCJzdWJtaXRTdHlsZSIsIm1hcmdpblRvcCIsImVycm9yTWVzc2FnZXMiLCJsb2dpbkVycm9yIiwicGFzc3dvcmRFcnJvciIsInBhc3N3b3JkUmVFcnJvciIsIlNpZ25JbiIsInByb3BzIiwic3RhdGUiLCJjYW5TdWJtaXQiLCJmaWVsZHNXcml0ZWFibGUiLCJkaXNhYmxlQnV0dG9uIiwiYmluZCIsImVuYWJsZUJ1dHRvbiIsInN1Ym1pdEZvcm0iLCJzb2NrZXQiLCJvbiIsInNldFN0YXRlIiwiaXNVbmlxdWVMb2dpbiIsImRhdGEiLCJ1c2VyIiwiZGlzYWJsZUZpZWxkcyIsImRpc3BhdGNoIiwiY29uc29sZSIsImVycm9yIiwic3Ryb25nUGFzc3dvcmQiLCJwYXNzd29yZHNNYXRjaCIsImdvb2RMb2dpbiIsIm5vdGlmeUZvcm1FcnJvciIsInVuaXF1ZUVycm9yIiwiY2hlY2tMb2dpbiIsIkNvbXBvbmVudCIsIm1hcERpc3BhdGNoVG9Qcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUVBOzs7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTO0FBQ1hDLGNBQVk7QUFDVkMsV0FBTyxHQURHO0FBRVZDLFlBQVEsTUFGRTtBQUdWQyxhQUFTO0FBSEMsR0FERDtBQU1YQyxlQUFhO0FBQ1hDLGVBQVc7QUFEQTtBQU5GLENBQWY7O0FBV0EsSUFBTUMsZ0JBQWdCO0FBQ2xCQyxjQUFZLDZCQURNO0FBRWxCQyxpQkFBZSwyQkFGRztBQUdsQkMsbUJBQWlCO0FBSEMsQ0FBdEI7O0lBT01DLE07OztBQUNGLGtCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FB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a0IsaUJBTHBCO0FBTUUsd0JBQVUsQ0FBQyxLQUFLRyxLQUFMLENBQVdFOztBQU54QixjQTFCRjtBQW9DRTtBQUNFLHFCQUFPVixXQURUO0FBRUUsb0JBQUssUUFGUDtBQUdFLHFCQUFNLFNBSFI7QUFJRSx3QkFBVSxDQUFDLEtBQUtRLEtBQUwsQ0FBV0MsU0FBWixJQUF5QixDQUFDLEtBQUtELEtBQUwsQ0FBV0U7QUFKakQ7QUFwQ0Y7QUFERjtBQURGLE9BREY7QUFpREQ7Ozs7RUF6R2tCLGdCQUFNcUIsUzs7QUE0RzNCLElBQU1DLHFCQUFxQixTQUFyQkEsa0JBQXFCLENBQUNWLFFBQUQ7QUFBQSxTQUFlO0FBQ3RDQTtBQURzQyxHQUFmO0FBQUEsQ0FBM0I7O2tCQU1lLHlCQUFRLElBQVIsRUFBY1Usa0JBQWQsRUFBa0MxQixNQUFsQyxDIiwiZmlsZSI6IjEwMDQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgRm9ybXN5IGZyb20gJ2Zvcm1zeS1yZWFjdCc7XHJcbmltcG9ydCBnZXRNdWlUaGVtZSBmcm9tICdtYXRlcmlhbC11aS9zdHlsZXMvZ2V0TXVpVGhlbWUnO1xyXG5pbXBvcnQgTXVpVGhlbWVQcm92aWRlciBmcm9tICdtYXRlcmlhbC11aS9zdHlsZXMvTXVpVGhlbWVQcm92aWRlcic7XHJcbmltcG9ydCBQYXBlciBmcm9tICdtYXRlcmlhbC11aS9QYXBlcic7XHJcbmltcG9ydCBSYWlzZWRCdXR0b24gZnJvbSAnbWF0ZXJpYWwtdWkvUmFpc2VkQnV0dG9uJztcclxuaW1wb3J0IHsgRm9ybXN5VGV4dCB9IGZyb20gJ2Zvcm1zeS1tYXRlcmlhbC11aS9saWInO1xyXG5cclxuaW1wb3J0IHZhbGlkYXRpb25zIGZyb20gJy4uLy4uL3V0aWxzL3ZhbGlkYXRpb25zJztcclxuaW1wb3J0IHsgc2lnbkluIH0gZnJvbSAnLi4vLi4vQWN0aW9ucyc7XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgICBwYXBlclN0eWxlOiB7XHJcbiAgICAgIHdpZHRoOiAzMDAsXHJcbiAgICAgIG1hcmdpbjogJ2F1dG8nLFxyXG4gICAgICBwYWRkaW5nOiAyMCxcclxuICAgIH0sXHJcbiAgICBzdWJtaXRTdHlsZToge1xyXG4gICAgICBtYXJnaW5Ub3A6IDMyLFxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBlcnJvck1lc3NhZ2VzID0ge1xyXG4gICAgbG9naW5FcnJvcjogJ1BsZWFzZSBjaG9vc2UgYW5vdGhlciBsb2dpbicsXHJcbiAgICBwYXNzd29yZEVycm9yOiAnVGhlIHBhc3N3b3JkIGlzIG5vdCB2YWxpZCcsXHJcbiAgICBwYXNzd29yZFJlRXJyb3I6ICdQYXNzd29yZHMgZG8gbm90IG1hdGNoJ1xyXG59XHJcblxyXG5cclxuY2xhc3MgU2lnbkluIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGNhblN1Ym1pdDpmYWxzZSxcclxuICAgICAgICAgICAgZmllbGRzV3JpdGVhYmxlOiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZGlzYWJsZUJ1dHRvbiA9IHRoaXMuZGlzYWJsZUJ1dHRvbi5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZW5hYmxlQnV0dG9uICA9IHRoaXMuZW5hYmxlQnV0dG9uLiBiaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc3VibWl0Rm9ybSAgICA9IHRoaXMuc3VibWl0Rm9ybS4gICBiaW5kKHRoaXMpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgIGNvbnN0IHNvY2tldCA9IHRoaXMucHJvcHMuc29ja2V0O1xyXG4gICAgICBcclxuICAgICAgc29ja2V0Lm9uKCd1c2VyIGV4aXN0IGluZm8nLCBkYXRhID0+IHtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgIGlzVW5pcXVlTG9naW46IGRhdGEuaXNVbmlxdWVMb2dpblxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBcclxuICB9XHJcblxyXG4gIGVuYWJsZUJ1dHRvbigpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBjYW5TdWJtaXQ6IHRydWUsXHJcbiAgICB9KTtcclxuICB9XHJcbiAgICBcclxuICBkaXNhYmxlQnV0dG9uKCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGNhblN1Ym1pdDogZmFsc2UsXHJcbiAgICB9KTtcclxuICB9XHJcbiAgICBcclxuICBzdWJtaXRGb3JtKHVzZXIpIHtcclxuICAgIHRoaXMuZGlzYWJsZUZpZWxkcygpO1xyXG4gICAgY29uc3QgeyBkaXNwYXRjaCB9ID0gdGhpcy5wcm9wcztcclxuICAgIGRpc3BhdGNoKHNpZ25Jbih1c2VyKSk7XHJcbiAgfVxyXG5cclxuICBkaXNhYmxlRmllbGRzKCkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgIGZpZWxkc1dyaXRlYWJsZTpmYWxzZVxyXG4gICAgICB9KVxyXG4gIH1cclxuICAgIFxyXG4gIG5vdGlmeUZvcm1FcnJvcihkYXRhKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdGb3JtIGVycm9yOicsIGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgbGV0IHsgcGFwZXJTdHlsZSwgc3VibWl0U3R5bGUgfSA9IHN0eWxlcztcclxuICAgIGxldCB7IHBhc3N3b3JkRXJyb3IsIHBhc3N3b3JkUmVFcnJvciwgbG9naW5FcnJvciB9ID0gZXJyb3JNZXNzYWdlcztcclxuICAgIGxldCB7IHN0cm9uZ1Bhc3N3b3JkLCBwYXNzd29yZHNNYXRjaCwgZ29vZExvZ2luIH0gPSB2YWxpZGF0aW9ucztcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TXVpVGhlbWVQcm92aWRlciBtdWlUaGVtZT17Z2V0TXVpVGhlbWUoKX0+XHJcbiAgICAgICAgPFBhcGVyIHN0eWxlPXtwYXBlclN0eWxlfT5cclxuICAgICAgICAgIDxGb3Jtc3kuRm9ybVxyXG4gICAgICAgICAgICBvblZhbGlkPXt0aGlzLmVuYWJsZUJ1dHRvbn1cclxuICAgICAgICAgICAgb25JbnZhbGlkPXt0aGlzLmRpc2FibGVCdXR0b259XHJcbiAgICAgICAgICAgIG9uVmFsaWRTdWJtaXQ9e3RoaXMuc3VibWl0Rm9ybX1cclxuICAgICAgICAgICAgb25JbnZhbGlkU3VibWl0PXt0aGlzLm5vdGlmeUZvcm1FcnJvcn1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEZvcm1zeVRleHRcclxuICAgICAgICAgICAgICBuYW1lPVwidXNlckxvZ2luXCJcclxuICAgICAgICAgICAgICB2YWxpZGF0aW9ucz17e2lzVW5pcXVlTG9naW46dGhpcy5pc1VuaXF1ZUxvZ2luLCBnb29kTG9naW46IGdvb2RMb2dpbn19XHJcbiAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9ycz17e2lzVW5pcXVlTG9naW46dW5pcXVlRXJyb3IsIGdvb2RMb2dpbjogbG9naW5FcnJvcn19XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICBmbG9hdGluZ0xhYmVsVGV4dD1cIkxvZ2luXCJcclxuICAgICAgICAgICAgICBtYXhMZW5ndGg9JzIwJ1xyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmNoZWNrTG9naW59XHJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9eyF0aGlzLnN0YXRlLmZpZWxkc1dyaXRlYWJsZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEZvcm1zeVRleHRcclxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJ1c2VyUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIHZhbGlkYXRpb25zPXt7c3Ryb25nUGFzc3dvcmQ6IHN0cm9uZ1Bhc3N3b3JkfX1cclxuICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JzPXt7c3Ryb25nUGFzc3dvcmQ6IHBhc3N3b3JkRXJyb3J9fVxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgZmxvYXRpbmdMYWJlbFRleHQ9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9eyF0aGlzLnN0YXRlLmZpZWxkc1dyaXRlYWJsZX1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEZvcm1zeVRleHRcclxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFJlXCJcclxuICAgICAgICAgICAgICB2YWxpZGF0aW9ucz17e3Bhc3N3b3Jkc01hdGNoOiBwYXNzd29yZHNNYXRjaH19XHJcbiAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9ycz17e3Bhc3N3b3Jkc01hdGNoOiBwYXNzd29yZFJlRXJyb3J9fVxyXG4gICAgICAgICAgICAgIGZsb2F0aW5nTGFiZWxUZXh0PVwiUGFzc3dvcmQgcmVwZWF0XCJcclxuICAgICAgICAgICAgICBkaXNhYmxlZD17IXRoaXMuc3RhdGUuZmllbGRzV3JpdGVhYmxlfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPFJhaXNlZEJ1dHRvblxyXG4gICAgICAgICAgICAgIHN0eWxlPXtzdWJtaXRTdHlsZX1cclxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIlNpZ24gVXBcIlxyXG4gICAgICAgICAgICAgIGRpc2FibGVkPXshdGhpcy5zdGF0ZS5jYW5TdWJtaXQgfHwgIXRoaXMuc3RhdGUuZmllbGRzV3JpdGVhYmxlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Gb3Jtc3kuRm9ybT5cclxuICAgICAgICA8L1BhcGVyPlxyXG4gICAgICA8L011aVRoZW1lUHJvdmlkZXI+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xyXG4gICAgZGlzcGF0Y2hcclxufSlcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChudWxsLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFNpZ25Jbik7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbnRhaW5lcnMvU2lnbkluL1NpZ25Jbi5qc3giXSwic291cmNlUm9vdCI6IiJ9");

/***/ }

})