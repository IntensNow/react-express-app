webpackHotUpdate(0,{

/***/ 987:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(2), RootInstanceProvider = __webpack_require__(10), ReactMount = __webpack_require__(12), React = __webpack_require__(98); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(98);\n\nvar _react2 = _interopRequireDefault(_react);\n\n__webpack_require__(988);\n\nvar _reactRedux = __webpack_require__(189);\n\nvar _Actions = __webpack_require__(662);\n\nvar _SideBar = __webpack_require__(990);\n\nvar _SideBar2 = _interopRequireDefault(_SideBar);\n\nvar _ChatBox = __webpack_require__(1010);\n\nvar _ChatBox2 = _interopRequireDefault(_ChatBox);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar ChatContainer = function (_React$Component) {\n    _inherits(ChatContainer, _React$Component);\n\n    function ChatContainer(props) {\n        _classCallCheck(this, ChatContainer);\n\n        var _this = _possibleConstructorReturn(this, (ChatContainer.__proto__ || Object.getPrototypeOf(ChatContainer)).call(this, props));\n\n        _this.state = {\n            messageText: ''\n        };\n        _this.onMessageSend = _this.onMessageSend.bind(_this);\n        _this.onWriteMessage = _this.onWriteMessage.bind(_this);\n        _this.createChannel = _this.createChannel.bind(_this);\n        return _this;\n    }\n\n    _createClass(ChatContainer, [{\n        key: 'componentDidMount',\n        value: function componentDidMount() {\n            var _props = this.props,\n                activeChannel = _props.activeChannel,\n                dispatchMessage = _props.dispatchMessage,\n                socket = _props.socket;\n\n            socket.on('message from server', function (message) {\n                console.log('message from server : ' + message.messageText);\n                dispatchMessage(message);\n            });\n            socket.emit('join channel', { nextChannel: activeChannel });\n        }\n    }, {\n        key: 'onMessageSend',\n        value: function onMessageSend(e) {\n            if (this.state.messageText.trim().length) {\n                var _props2 = this.props,\n                    activeChannel = _props2.activeChannel,\n                    _socket = _props2.socket;\n\n                var data = {\n                    activeChannel: activeChannel,\n                    messageText: this.state.messageText\n                };\n                _socket.emit('message from client', data);\n            }\n            e.preventDefault();\n        }\n    }, {\n        key: 'onWriteMessage',\n        value: function onWriteMessage(e) {\n            this.setState({ messageText: e.target.value });\n        }\n    }, {\n        key: 'createChannel',\n        value: function createChannel(channelTitle) {\n            socket.emit('create channel', {\n                title: channelTitle\n            });\n            socket.emit('get primary list of channels');\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _props3 = this.props,\n                messages = _props3.messages,\n                socket = _props3.socket;\n\n            return _react2.default.createElement(\n                'div',\n                { className: 'chat_container container' },\n                _react2.default.createElement(_SideBar2.default, { socket: socket, createChannel: this.createChannel }),\n                _react2.default.createElement(_ChatBox2.default, { messages: messages,\n                    onWriteMessage: this.onWriteMessage,\n                    onMessageSend: this.onMessageSend,\n                    messageText: this.state.messageText\n                })\n            );\n        }\n    }]);\n\n    return ChatContainer;\n}(_react2.default.Component);\n\nvar mapStateToProps = function mapStateToProps(store) {\n    return {\n\n        messages: store.channels.active.messages,\n        activeChannel: store.channels.active.title\n\n    };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n    return {\n        dispatchMessage: function dispatchMessage(message) {\n            dispatch((0, _Actions.addSingleMessage)(message));\n        } /*,\r\n          dispatchCreateChannel(channelTitle) {\r\n             createChannel(channelTitle);\r\n          }*/\n\n    };\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ChatContainer);\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(293); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot apply hot update to \" + \"ChatContainer.js\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9DaGF0Q29udGFpbmVyL0NoYXRDb250YWluZXIuanM/MzE5OCJdLCJuYW1lcyI6WyJDaGF0Q29udGFpbmVyIiwicHJvcHMiLCJzdGF0ZSIsIm1lc3NhZ2VUZXh0Iiwib25NZXNzYWdlU2VuZCIsImJpbmQiLCJvbldyaXRlTWVzc2FnZSIsImNyZWF0ZUNoYW5uZWwiLCJhY3RpdmVDaGFubmVsIiwiZGlzcGF0Y2hNZXNzYWdlIiwic29ja2V0Iiwib24iLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsImVtaXQiLCJuZXh0Q2hhbm5lbCIsImUiLCJ0cmltIiwibGVuZ3RoIiwiZGF0YSIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNoYW5uZWxUaXRsZSIsInRpdGxlIiwibWVzc2FnZXMiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdG9yZSIsImNoYW5uZWxzIiwiYWN0aXZlIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUVBOztBQUVBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQSxhOzs7QUFDRiwyQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGtJQUNUQSxLQURTOztBQUVmLGNBQUtDLEtBQUwsR0FBYTtBQUNUQyx5QkFBYTtBQURKLFNBQWI7QUFHQSxjQUFLQyxhQUFMLEdBQXNCLE1BQUtBLGFBQUwsQ0FBbUJDLElBQW5CLE9BQXRCO0FBQ0EsY0FBS0MsY0FBTCxHQUFzQixNQUFLQSxjQUFMLENBQW9CRCxJQUFwQixPQUF0QjtBQUNBLGNBQUtFLGFBQUwsR0FBc0IsTUFBS0EsYUFBTCxDQUFtQkYsSUFBbkIsT0FBdEI7QUFQZTtBQVFsQjs7Ozs0Q0FDbUI7QUFBQSx5QkFDbUMsS0FBS0osS0FEeEM7QUFBQSxnQkFDUk8sYUFEUSxVQUNSQSxhQURRO0FBQUEsZ0JBQ09DLGVBRFAsVUFDT0EsZUFEUDtBQUFBLGdCQUN3QkMsTUFEeEIsVUFDd0JBLE1BRHhCOztBQUVoQkEsbUJBQU9DLEVBQVAsQ0FBVSxxQkFBVixFQUFpQyxtQkFBVztBQUN4Q0Msd0JBQVFDLEdBQVIsQ0FBWSwyQkFBMkJDLFFBQVFYLFdBQS9DO0FBQ0FNLGdDQUFnQkssT0FBaEI7QUFDSCxhQUhEO0FBSUFKLG1CQUFPSyxJQUFQLENBQVksY0FBWixFQUE0QixFQUFFQyxhQUFZUixhQUFkLEVBQTVCO0FBQ0g7OztzQ0FDYVMsQyxFQUFHO0FBQ2IsZ0JBQUksS0FBS2YsS0FBTCxDQUFXQyxXQUFYLENBQXVCZSxJQUF2QixHQUE4QkMsTUFBbEMsRUFBMEM7QUFBQSw4QkFDSixLQUFLbEIsS0FERDtBQUFBLG9CQUM5Qk8sYUFEOEIsV0FDOUJBLGFBRDhCO0FBQUEsb0JBQ2ZFLE9BRGUsV0FDZkEsTUFEZTs7QUFFdEMsb0JBQU1VLE9BQU87QUFDVFosZ0RBRFM7QUFFVEwsaUNBQVksS0FBS0QsS0FBTCxDQUFXQztBQUZkLGlCQUFiO0FBSUFPLHdCQUFPSyxJQUFQLENBQVkscUJBQVosRUFBbUNLLElBQW5DO0FBQ0g7QUFDREgsY0FBRUksY0FBRjtBQUNIOzs7dUNBRWNKLEMsRUFBRztBQUNkLGlCQUFLSyxRQUFMLENBQWMsRUFBRW5CLGFBQVljLEVBQUVNLE1BQUYsQ0FBU0MsS0FBdkIsRUFBZDtBQUNIOzs7c0NBRWFDLFksRUFBYztBQUN4QmYsbUJBQU9LLElBQVAsQ0FBWSxnQkFBWixFQUE4QjtBQUMxQlcsdUJBQU1EO0FBRG9CLGFBQTlCO0FBR0FmLG1CQUFPSyxJQUFQLENBQVksOEJBQVo7QUFDSDs7O2lDQUVRO0FBQUEsMEJBQ3dCLEtBQUtkLEtBRDdCO0FBQUEsZ0JBQ0cwQixRQURILFdBQ0dBLFFBREg7QUFBQSxnQkFDYWpCLE1BRGIsV0FDYUEsTUFEYjs7QUFFTCxtQkFDSTtBQUFBO0FBQUEsa0JBQUssV0FBVSwwQkFBZjtBQUNJLG1FQUFTLFFBQVFBLE1BQWpCLEVBQXlCLGVBQWUsS0FBS0gsYUFBN0MsR0FESjtBQUVJLG1FQUFTLFVBQVVvQixRQUFuQjtBQUNTLG9DQUFnQixLQUFLckIsY0FEOUI7QUFFUyxtQ0FBZSxLQUFLRixhQUY3QjtBQUdTLGlDQUFhLEtBQUtGLEtBQUwsQ0FBV0M7QUFIakM7QUFGSixhQURKO0FBVUg7Ozs7RUFyRHVCLGdCQUFNeUIsUzs7QUF3RGxDLElBQU1DLGtCQUFrQixTQUFsQkEsZUFBa0I7QUFBQSxXQUFVOztBQUU5QkYsa0JBQVNHLE1BQU1DLFFBQU4sQ0FBZUMsTUFBZixDQUFzQkwsUUFGRDtBQUc5Qm5CLHVCQUFjc0IsTUFBTUMsUUFBTixDQUFlQyxNQUFmLENBQXNCTjs7QUFITixLQUFWO0FBQUEsQ0FBeEI7O0FBT0EsSUFBTU8scUJBQXFCLFNBQXJCQSxrQkFBcUI7QUFBQSxXQUFhO0FBRXBDeEIsdUJBRm9DLDJCQUVwQkssT0FGb0IsRUFFWDtBQUNyQm9CLHFCQUFTLCtCQUFpQnBCLE9BQWpCLENBQVQ7QUFDSCxTQUptQyxDQUluQzs7Ozs7QUFKbUMsS0FBYjtBQUFBLENBQTNCOztrQkFXZSx5QkFBUWUsZUFBUixFQUF5Qkksa0JBQXpCLEVBQTZDakMsYUFBN0MsQyIsImZpbGUiOiI5ODcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgJy4vbWFpbi5sZXNzJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmltcG9ydCB7IGFkZFNpbmdsZU1lc3NhZ2UsIC8qY3JlYXRlQ2hhbm5lbCovIH0gZnJvbSAnLi4vLi4vQWN0aW9ucyc7XHJcblxyXG5pbXBvcnQgU2lkZUJhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL1NpZGVCYXInO1xyXG5pbXBvcnQgQ2hhdEJveCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NoYXRCb3gnO1xyXG5cclxuY2xhc3MgQ2hhdENvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBtZXNzYWdlVGV4dDogJydcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5vbk1lc3NhZ2VTZW5kICA9IHRoaXMub25NZXNzYWdlU2VuZC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25Xcml0ZU1lc3NhZ2UgPSB0aGlzLm9uV3JpdGVNZXNzYWdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVDaGFubmVsICA9IHRoaXMuY3JlYXRlQ2hhbm5lbC5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgY29uc3QgeyBhY3RpdmVDaGFubmVsLCBkaXNwYXRjaE1lc3NhZ2UsIHNvY2tldCB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBzb2NrZXQub24oJ21lc3NhZ2UgZnJvbSBzZXJ2ZXInLCBtZXNzYWdlID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ21lc3NhZ2UgZnJvbSBzZXJ2ZXIgOiAnICsgbWVzc2FnZS5tZXNzYWdlVGV4dCk7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoTWVzc2FnZShtZXNzYWdlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzb2NrZXQuZW1pdCgnam9pbiBjaGFubmVsJywgeyBuZXh0Q2hhbm5lbDphY3RpdmVDaGFubmVsIH0pO1xyXG4gICAgfVxyXG4gICAgb25NZXNzYWdlU2VuZChlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUubWVzc2FnZVRleHQudHJpbSgpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBjb25zdCB7IGFjdGl2ZUNoYW5uZWwsIHNvY2tldCB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHsgXHJcbiAgICAgICAgICAgICAgICBhY3RpdmVDaGFubmVsLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZVRleHQ6dGhpcy5zdGF0ZS5tZXNzYWdlVGV4dFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNvY2tldC5lbWl0KCdtZXNzYWdlIGZyb20gY2xpZW50JywgZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgb25Xcml0ZU1lc3NhZ2UoZSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtZXNzYWdlVGV4dDplLnRhcmdldC52YWx1ZSB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY3JlYXRlQ2hhbm5lbChjaGFubmVsVGl0bGUpIHtcclxuICAgICAgICBzb2NrZXQuZW1pdCgnY3JlYXRlIGNoYW5uZWwnLCB7XHJcbiAgICAgICAgICAgIHRpdGxlOmNoYW5uZWxUaXRsZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNvY2tldC5lbWl0KCdnZXQgcHJpbWFyeSBsaXN0IG9mIGNoYW5uZWxzJyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IG1lc3NhZ2VzLCBzb2NrZXQgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NoYXRfY29udGFpbmVyIGNvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICA8U2lkZUJhciBzb2NrZXQ9e3NvY2tldH0gY3JlYXRlQ2hhbm5lbD17dGhpcy5jcmVhdGVDaGFubmVsfS8+XHJcbiAgICAgICAgICAgICAgICA8Q2hhdEJveCBtZXNzYWdlcz17bWVzc2FnZXN9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgb25Xcml0ZU1lc3NhZ2U9e3RoaXMub25Xcml0ZU1lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBvbk1lc3NhZ2VTZW5kPXt0aGlzLm9uTWVzc2FnZVNlbmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlVGV4dD17dGhpcy5zdGF0ZS5tZXNzYWdlVGV4dH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdG9yZSA9PiAoe1xyXG4gICAgXHJcbiAgICBtZXNzYWdlczpzdG9yZS5jaGFubmVscy5hY3RpdmUubWVzc2FnZXMsXHJcbiAgICBhY3RpdmVDaGFubmVsOnN0b3JlLmNoYW5uZWxzLmFjdGl2ZS50aXRsZVxyXG4gICAgXHJcbn0pO1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcclxuICAgIFxyXG4gICAgZGlzcGF0Y2hNZXNzYWdlKG1lc3NhZ2UpIHtcclxuICAgICAgICBkaXNwYXRjaChhZGRTaW5nbGVNZXNzYWdlKG1lc3NhZ2UpKTtcclxuICAgIH0vKixcclxuICAgIGRpc3BhdGNoQ3JlYXRlQ2hhbm5lbChjaGFubmVsVGl0bGUpIHtcclxuICAgICAgICBjcmVhdGVDaGFubmVsKGNoYW5uZWxUaXRsZSk7XHJcbiAgICB9Ki9cclxuICAgIFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKENoYXRDb250YWluZXIpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb250YWluZXJzL0NoYXRDb250YWluZXIvQ2hhdENvbnRhaW5lci5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})