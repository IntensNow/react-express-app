webpackHotUpdate(0,{

/***/ 956:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(2), RootInstanceProvider = __webpack_require__(10), ReactMount = __webpack_require__(12), React = __webpack_require__(98); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(98);\n\nvar _react2 = _interopRequireDefault(_react);\n\n__webpack_require__(957);\n\nvar _formsyReact = __webpack_require__(959);\n\nvar _formsyReact2 = _interopRequireDefault(_formsyReact);\n\nvar _validations = __webpack_require__(984);\n\nvar _validations2 = _interopRequireDefault(_validations);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar CreateChannel = function (_React$Component) {\n    _inherits(CreateChannel, _React$Component);\n\n    function CreateChannel(props) {\n        _classCallCheck(this, CreateChannel);\n\n        var _this = _possibleConstructorReturn(this, (CreateChannel.__proto__ || Object.getPrototypeOf(CreateChannel)).call(this, props));\n\n        _this.state = {\n            canSubmit: false,\n            showPwInput: false\n        };\n        _this.pwToggle = _this.pwToggle.bind(_this);\n        return _this;\n    }\n\n    _createClass(CreateChannel, [{\n        key: 'enableButton',\n        value: function enableButton() {\n            this.setState({\n                canSubmit: true\n            });\n        }\n    }, {\n        key: 'disableButton',\n        value: function disableButton() {\n            this.setState({\n                canSubmit: false\n            });\n        }\n    }, {\n        key: 'submit',\n        value: function submit(e) {\n            console.log(e);\n        }\n    }, {\n        key: 'pwToggle',\n        value: function pwToggle(e) {\n            this.state = {\n                showPwInput: !e.target.value\n            };\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                _formsyReact2.default.Form,\n                { onValidSubmit: this.submit,\n                    onValid: this.enableButton,\n                    onInvalid: this.disableButton },\n                _react2.default.createElement(\n                    'label',\n                    null,\n                    ' Title',\n                    _react2.default.createElement('input', { type: 'text', maxLength: '20',\n                        validations: _validations2.default.isGoodTitle,\n                        validationError: 'This is not a valid title' })\n                ),\n                _react2.default.createElement('br', null),\n                _react2.default.createElement(\n                    'label',\n                    null,\n                    ' Make it private',\n                    _react2.default.createElement('input', { type: 'radio', checked: this.state.showPwInput,\n                        onClick: this.pwToggle })\n                ),\n                _react2.default.createElement('br', null),\n                _react2.default.createElement(\n                    'label',\n                    null,\n                    ' Title',\n                    _react2.default.createElement('input', { type: 'password', maxLength: '20',\n                        validations: _validations2.default.strongPassword,\n                        validationError: 'This is not a valid password' })\n                ),\n                _react2.default.createElement('br', null),\n                _react2.default.createElement(\n                    'label',\n                    null,\n                    ' Password',\n                    _react2.default.createElement('input', { type: 'submit', disabled: !this.state.canSubmit,\n                        value: 'Create channel' })\n                ),\n                _react2.default.createElement('br', null)\n            );\n        }\n    }]);\n\n    return CreateChannel;\n}(_react2.default.Component);\n\nexports.default = CreateChannel;\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(884); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot apply hot update to \" + \"CreateChannel.js\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9DcmVhdGVDaGFubmVsL0NyZWF0ZUNoYW5uZWwuanM/Y2IyNyJdLCJuYW1lcyI6WyJDcmVhdGVDaGFubmVsIiwicHJvcHMiLCJzdGF0ZSIsImNhblN1Ym1pdCIsInNob3dQd0lucHV0IiwicHdUb2dnbGUiLCJiaW5kIiwic2V0U3RhdGUiLCJlIiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsInZhbHVlIiwic3VibWl0IiwiZW5hYmxlQnV0dG9uIiwiZGlzYWJsZUJ1dHRvbiIsImlzR29vZFRpdGxlIiwic3Ryb25nUGFzc3dvcmQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsYTs7O0FBQ2pCLDJCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsa0lBQ2JBLEtBRGE7O0FBRW5CLGNBQUtDLEtBQUwsR0FBYTtBQUNUQyx1QkFBVyxLQURGO0FBRVRDLHlCQUFZO0FBRkgsU0FBYjtBQUlBLGNBQUtDLFFBQUwsR0FBZ0IsTUFBS0EsUUFBTCxDQUFjQyxJQUFkLE9BQWhCO0FBTm1CO0FBT2xCOzs7O3VDQUNjO0FBQ1gsaUJBQUtDLFFBQUwsQ0FBYztBQUNWSiwyQkFBVTtBQURBLGFBQWQ7QUFHSDs7O3dDQUNlO0FBQ1osaUJBQUtJLFFBQUwsQ0FBYztBQUNWSiwyQkFBVTtBQURBLGFBQWQ7QUFHSDs7OytCQUNNSyxDLEVBQUc7QUFDTkMsb0JBQVFDLEdBQVIsQ0FBWUYsQ0FBWjtBQUNIOzs7aUNBQ1FBLEMsRUFBRztBQUNSLGlCQUFLTixLQUFMLEdBQWE7QUFDVEUsNkJBQWEsQ0FBQ0ksRUFBRUcsTUFBRixDQUFTQztBQURkLGFBQWI7QUFHSDs7O2lDQUNRO0FBQ0wsbUJBQ0k7QUFBQSxzQ0FBUSxJQUFSO0FBQUEsa0JBQWEsZUFBZSxLQUFLQyxNQUFqQztBQUNhLDZCQUFTLEtBQUtDLFlBRDNCO0FBRWEsK0JBQVcsS0FBS0MsYUFGN0I7QUFHSTtBQUFBO0FBQUE7QUFBQTtBQUNJLDZEQUFPLE1BQUssTUFBWixFQUFtQixXQUFVLElBQTdCO0FBQ08scUNBQWEsc0JBQVlDLFdBRGhDO0FBRU8seUNBQWdCLDJCQUZ2QjtBQURKLGlCQUhKO0FBT1kseURBUFo7QUFRSTtBQUFBO0FBQUE7QUFBQTtBQUNJLDZEQUFPLE1BQUssT0FBWixFQUFvQixTQUFTLEtBQUtkLEtBQUwsQ0FBV0UsV0FBeEM7QUFDTyxpQ0FBUyxLQUFLQyxRQURyQjtBQURKLGlCQVJKO0FBV1kseURBWFo7QUFZSTtBQUFBO0FBQUE7QUFBQTtBQUNJLDZEQUFPLE1BQUssVUFBWixFQUF1QixXQUFVLElBQWpDO0FBQ08scUNBQWEsc0JBQVlZLGNBRGhDO0FBRU8seUNBQWdCLDhCQUZ2QjtBQURKLGlCQVpKO0FBZ0JZLHlEQWhCWjtBQWlCSTtBQUFBO0FBQUE7QUFBQTtBQUNJLDZEQUFPLE1BQUssUUFBWixFQUFxQixVQUFVLENBQUMsS0FBS2YsS0FBTCxDQUFXQyxTQUEzQztBQUNPLCtCQUFNLGdCQURiO0FBREosaUJBakJKO0FBb0JZO0FBcEJaLGFBREo7QUF3Qkg7Ozs7RUFwRHNDLGdCQUFNZSxTOztrQkFBNUJsQixhIiwiZmlsZSI6Ijk1Ni5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAnLi9tYWluLmxlc3MnO1xyXG5pbXBvcnQgRm9ybXN5IGZyb20gJ2Zvcm1zeS1yZWFjdCc7XHJcbmltcG9ydCB2YWxpZGF0aW9ucyBmcm9tICcuLi8uLi91dGlscy92YWxpZGF0aW9ucyc7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENyZWF0ZUNoYW5uZWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgY2FuU3VibWl0OiBmYWxzZSxcclxuICAgICAgICBzaG93UHdJbnB1dDpmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIHRoaXMucHdUb2dnbGUgPSB0aGlzLnB3VG9nZ2xlLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcbiAgICBlbmFibGVCdXR0b24oKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGNhblN1Ym1pdDp0cnVlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGRpc2FibGVCdXR0b24oKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGNhblN1Ym1pdDpmYWxzZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBzdWJtaXQoZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgfVxyXG4gICAgcHdUb2dnbGUoZSkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHNob3dQd0lucHV0OiAhZS50YXJnZXQudmFsdWVcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEZvcm1zeS5Gb3JtIG9uVmFsaWRTdWJtaXQ9e3RoaXMuc3VibWl0fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgIG9uVmFsaWQ9e3RoaXMuZW5hYmxlQnV0dG9ufSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgIG9uSW52YWxpZD17dGhpcy5kaXNhYmxlQnV0dG9ufSA+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+IFRpdGxlIFxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBtYXhMZW5ndGg9JzIwJyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbnM9e3ZhbGlkYXRpb25zLmlzR29vZFRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3I9J1RoaXMgaXMgbm90IGEgdmFsaWQgdGl0bGUnIC8+IFxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD48YnIvPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPiBNYWtlIGl0IHByaXZhdGUgXHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3JhZGlvJyBjaGVja2VkPXt0aGlzLnN0YXRlLnNob3dQd0lucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnB3VG9nZ2xlfS8+IFxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD48YnIvPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPiBUaXRsZSBcclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ncGFzc3dvcmQnIG1heExlbmd0aD0nMjAnIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9ucz17dmFsaWRhdGlvbnMuc3Ryb25nUGFzc3dvcmR9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3I9J1RoaXMgaXMgbm90IGEgdmFsaWQgcGFzc3dvcmQnIC8+IFxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD48YnIvPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPiBQYXNzd29yZCBcclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0nc3VibWl0JyBkaXNhYmxlZD17IXRoaXMuc3RhdGUuY2FuU3VibWl0fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9J0NyZWF0ZSBjaGFubmVsJy8+IFxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD48YnIvPlxyXG4gICAgICAgICAgICA8L0Zvcm1zeS5Gb3JtPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29udGFpbmVycy9DcmVhdGVDaGFubmVsL0NyZWF0ZUNoYW5uZWwuanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }

})