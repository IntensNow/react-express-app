webpackHotUpdate(0,{

/***/ 987:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(2), RootInstanceProvider = __webpack_require__(10), ReactMount = __webpack_require__(12), React = __webpack_require__(98); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(98);\n\nvar _react2 = _interopRequireDefault(_react);\n\n__webpack_require__(988);\n\nvar _reactRedux = __webpack_require__(189);\n\nvar _Actions = __webpack_require__(662);\n\nvar _SideBar = __webpack_require__(990);\n\nvar _SideBar2 = _interopRequireDefault(_SideBar);\n\nvar _ChatBox = __webpack_require__(1010);\n\nvar _ChatBox2 = _interopRequireDefault(_ChatBox);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar ChatContainer = function (_React$Component) {\n    _inherits(ChatContainer, _React$Component);\n\n    function ChatContainer(props) {\n        _classCallCheck(this, ChatContainer);\n\n        var _this = _possibleConstructorReturn(this, (ChatContainer.__proto__ || Object.getPrototypeOf(ChatContainer)).call(this, props));\n\n        _this.state = {\n            messageText: ''\n        };\n        _this.onMessageSend = _this.onMessageSend.bind(_this);\n        _this.onWriteMessage = _this.onWriteMessage.bind(_this);\n        _this.createChannel = _this.createChannel.bind(_this);\n        return _this;\n    }\n\n    _createClass(ChatContainer, [{\n        key: 'componentDidMount',\n        value: function componentDidMount() {\n            var _props = this.props,\n                activeChannel = _props.activeChannel,\n                dispatchMessage = _props.dispatchMessage,\n                socket = _props.socket;\n\n            socket.on('message from server', function (message) {\n                console.log('message from server : ' + message.messageText);\n                dispatchMessage(message);\n            });\n            socket.emit('join channel', { nextChannel: activeChannel });\n        }\n    }, {\n        key: 'onMessageSend',\n        value: function onMessageSend(e) {\n            if (this.state.messageText.trim().length) {\n                var _props2 = this.props,\n                    activeChannel = _props2.activeChannel,\n                    socket = _props2.socket;\n\n                var data = {\n                    activeChannel: activeChannel,\n                    messageText: this.state.messageText\n                };\n                socket.emit('message from client', data);\n            }\n            e.preventDefault();\n        }\n    }, {\n        key: 'onWriteMessage',\n        value: function onWriteMessage(e) {\n            this.setState({ messageText: e.target.value });\n        }\n    }, {\n        key: 'createChannel',\n        value: function createChannel(channelTitle) {\n            console.log('create channel');\n            console.log(channelTitle);\n            var dispatchCreateChannel = this.props.dispatchCreateChannel;\n\n\n            dispatchCreateChannel(channelTitle);\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _props3 = this.props,\n                messages = _props3.messages,\n                socket = _props3.socket;\n\n            return _react2.default.createElement(\n                'div',\n                { className: 'chat_container container' },\n                _react2.default.createElement(_SideBar2.default, { socket: socket, createChannel: this.createChannel }),\n                _react2.default.createElement(_ChatBox2.default, { messages: messages,\n                    onWriteMessage: this.onWriteMessage,\n                    onMessageSend: this.onMessageSend,\n                    messageText: this.state.messageText\n                })\n            );\n        }\n    }]);\n\n    return ChatContainer;\n}(_react2.default.Component);\n\nvar mapStateToProps = function mapStateToProps(store) {\n    return {\n\n        messages: store.channels.active.messages,\n        activeChannel: store.channels.active.title\n\n    };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n    return {\n        dispatchMessage: function dispatchMessage(message) {\n            dispatch((0, _Actions.addSingleMessage)(message));\n        },\n        dispatchCreateChannel: function dispatchCreateChannel(channelTitle) {\n            (0, _Actions.createChannel)(channelTitle);\n        }\n    };\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ChatContainer);\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(293); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot apply hot update to \" + \"ChatContainer.js\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9DaGF0Q29udGFpbmVyL0NoYXRDb250YWluZXIuanM/MzE5OCJdLCJuYW1lcyI6WyJDaGF0Q29udGFpbmVyIiwicHJvcHMiLCJzdGF0ZSIsIm1lc3NhZ2VUZXh0Iiwib25NZXNzYWdlU2VuZCIsImJpbmQiLCJvbldyaXRlTWVzc2FnZSIsImNyZWF0ZUNoYW5uZWwiLCJhY3RpdmVDaGFubmVsIiwiZGlzcGF0Y2hNZXNzYWdlIiwic29ja2V0Iiwib24iLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsImVtaXQiLCJuZXh0Q2hhbm5lbCIsImUiLCJ0cmltIiwibGVuZ3RoIiwiZGF0YSIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNoYW5uZWxUaXRsZSIsImRpc3BhdGNoQ3JlYXRlQ2hhbm5lbCIsIm1lc3NhZ2VzIiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwic3RvcmUiLCJjaGFubmVscyIsImFjdGl2ZSIsInRpdGxlIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUVBOztBQUVBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQSxhOzs7QUFDRiwyQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGtJQUNUQSxLQURTOztBQUVmLGNBQUtDLEtBQUwsR0FBYTtBQUNUQyx5QkFBYTtBQURKLFNBQWI7QUFHQSxjQUFLQyxhQUFMLEdBQXNCLE1BQUtBLGFBQUwsQ0FBbUJDLElBQW5CLE9BQXRCO0FBQ0EsY0FBS0MsY0FBTCxHQUFzQixNQUFLQSxjQUFMLENBQW9CRCxJQUFwQixPQUF0QjtBQUNBLGNBQUtFLGFBQUwsR0FBc0IsTUFBS0EsYUFBTCxDQUFtQkYsSUFBbkIsT0FBdEI7QUFQZTtBQVFsQjs7Ozs0Q0FDbUI7QUFBQSx5QkFDbUMsS0FBS0osS0FEeEM7QUFBQSxnQkFDUk8sYUFEUSxVQUNSQSxhQURRO0FBQUEsZ0JBQ09DLGVBRFAsVUFDT0EsZUFEUDtBQUFBLGdCQUN3QkMsTUFEeEIsVUFDd0JBLE1BRHhCOztBQUVoQkEsbUJBQU9DLEVBQVAsQ0FBVSxxQkFBVixFQUFpQyxtQkFBVztBQUN4Q0Msd0JBQVFDLEdBQVIsQ0FBWSwyQkFBMkJDLFFBQVFYLFdBQS9DO0FBQ0FNLGdDQUFnQkssT0FBaEI7QUFDSCxhQUhEO0FBSUFKLG1CQUFPSyxJQUFQLENBQVksY0FBWixFQUE0QixFQUFFQyxhQUFZUixhQUFkLEVBQTVCO0FBQ0g7OztzQ0FDYVMsQyxFQUFHO0FBQ2IsZ0JBQUksS0FBS2YsS0FBTCxDQUFXQyxXQUFYLENBQXVCZSxJQUF2QixHQUE4QkMsTUFBbEMsRUFBMEM7QUFBQSw4QkFDSixLQUFLbEIsS0FERDtBQUFBLG9CQUM5Qk8sYUFEOEIsV0FDOUJBLGFBRDhCO0FBQUEsb0JBQ2ZFLE1BRGUsV0FDZkEsTUFEZTs7QUFFdEMsb0JBQU1VLE9BQU87QUFDVFosZ0RBRFM7QUFFVEwsaUNBQVksS0FBS0QsS0FBTCxDQUFXQztBQUZkLGlCQUFiO0FBSUFPLHVCQUFPSyxJQUFQLENBQVkscUJBQVosRUFBbUNLLElBQW5DO0FBQ0g7QUFDREgsY0FBRUksY0FBRjtBQUNIOzs7dUNBRWNKLEMsRUFBRztBQUNkLGlCQUFLSyxRQUFMLENBQWMsRUFBRW5CLGFBQVljLEVBQUVNLE1BQUYsQ0FBU0MsS0FBdkIsRUFBZDtBQUNIOzs7c0NBRWFDLFksRUFBYztBQUN4QmIsb0JBQVFDLEdBQVIsQ0FBWSxnQkFBWjtBQUNBRCxvQkFBUUMsR0FBUixDQUFZWSxZQUFaO0FBRndCLGdCQUdoQkMscUJBSGdCLEdBR1UsS0FBS3pCLEtBSGYsQ0FHaEJ5QixxQkFIZ0I7OztBQUt4QkEsa0NBQXNCRCxZQUF0QjtBQUNIOzs7aUNBRVE7QUFBQSwwQkFDd0IsS0FBS3hCLEtBRDdCO0FBQUEsZ0JBQ0cwQixRQURILFdBQ0dBLFFBREg7QUFBQSxnQkFDYWpCLE1BRGIsV0FDYUEsTUFEYjs7QUFFTCxtQkFDSTtBQUFBO0FBQUEsa0JBQUssV0FBVSwwQkFBZjtBQUNJLG1FQUFTLFFBQVFBLE1BQWpCLEVBQXlCLGVBQWUsS0FBS0gsYUFBN0MsR0FESjtBQUVJLG1FQUFTLFVBQVVvQixRQUFuQjtBQUNTLG9DQUFnQixLQUFLckIsY0FEOUI7QUFFUyxtQ0FBZSxLQUFLRixhQUY3QjtBQUdTLGlDQUFhLEtBQUtGLEtBQUwsQ0FBV0M7QUFIakM7QUFGSixhQURKO0FBVUg7Ozs7RUF0RHVCLGdCQUFNeUIsUzs7QUF5RGxDLElBQU1DLGtCQUFrQixTQUFsQkEsZUFBa0I7QUFBQSxXQUFVOztBQUU5QkYsa0JBQVNHLE1BQU1DLFFBQU4sQ0FBZUMsTUFBZixDQUFzQkwsUUFGRDtBQUc5Qm5CLHVCQUFjc0IsTUFBTUMsUUFBTixDQUFlQyxNQUFmLENBQXNCQzs7QUFITixLQUFWO0FBQUEsQ0FBeEI7O0FBT0EsSUFBTUMscUJBQXFCLFNBQXJCQSxrQkFBcUI7QUFBQSxXQUFhO0FBRXBDekIsdUJBRm9DLDJCQUVwQkssT0FGb0IsRUFFWDtBQUNyQnFCLHFCQUFTLCtCQUFpQnJCLE9BQWpCLENBQVQ7QUFDSCxTQUptQztBQUtwQ1ksNkJBTG9DLGlDQUtkRCxZQUxjLEVBS0E7QUFDaEMsd0NBQWNBLFlBQWQ7QUFDSDtBQVBtQyxLQUFiO0FBQUEsQ0FBM0I7O2tCQVdlLHlCQUFRSSxlQUFSLEVBQXlCSyxrQkFBekIsRUFBNkNsQyxhQUE3QyxDIiwiZmlsZSI6Ijk4Ny5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAnLi9tYWluLmxlc3MnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuaW1wb3J0IHsgYWRkU2luZ2xlTWVzc2FnZSwgY3JlYXRlQ2hhbm5lbCB9IGZyb20gJy4uLy4uL0FjdGlvbnMnO1xyXG5cclxuaW1wb3J0IFNpZGVCYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9TaWRlQmFyJztcclxuaW1wb3J0IENoYXRCb3ggZnJvbSAnLi4vLi4vY29tcG9uZW50cy9DaGF0Qm94JztcclxuXHJcbmNsYXNzIENoYXRDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgbWVzc2FnZVRleHQ6ICcnXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMub25NZXNzYWdlU2VuZCAgPSB0aGlzLm9uTWVzc2FnZVNlbmQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uV3JpdGVNZXNzYWdlID0gdGhpcy5vbldyaXRlTWVzc2FnZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlQ2hhbm5lbCAgPSB0aGlzLmNyZWF0ZUNoYW5uZWwuYmluZCh0aGlzKTtcclxuICAgIH1cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIGNvbnN0IHsgYWN0aXZlQ2hhbm5lbCwgZGlzcGF0Y2hNZXNzYWdlLCBzb2NrZXQgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgc29ja2V0Lm9uKCdtZXNzYWdlIGZyb20gc2VydmVyJywgbWVzc2FnZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdtZXNzYWdlIGZyb20gc2VydmVyIDogJyArIG1lc3NhZ2UubWVzc2FnZVRleHQpO1xyXG4gICAgICAgICAgICBkaXNwYXRjaE1lc3NhZ2UobWVzc2FnZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc29ja2V0LmVtaXQoJ2pvaW4gY2hhbm5lbCcsIHsgbmV4dENoYW5uZWw6YWN0aXZlQ2hhbm5lbCB9KTtcclxuICAgIH1cclxuICAgIG9uTWVzc2FnZVNlbmQoZSkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLm1lc3NhZ2VUZXh0LnRyaW0oKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgY29uc3QgeyBhY3RpdmVDaGFubmVsLCBzb2NrZXQgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB7IFxyXG4gICAgICAgICAgICAgICAgYWN0aXZlQ2hhbm5lbCxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VUZXh0OnRoaXMuc3RhdGUubWVzc2FnZVRleHRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzb2NrZXQuZW1pdCgnbWVzc2FnZSBmcm9tIGNsaWVudCcsIGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIG9uV3JpdGVNZXNzYWdlKGUpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbWVzc2FnZVRleHQ6ZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNyZWF0ZUNoYW5uZWwoY2hhbm5lbFRpdGxlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NyZWF0ZSBjaGFubmVsJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coY2hhbm5lbFRpdGxlKTtcclxuICAgICAgICBjb25zdCB7IGRpc3BhdGNoQ3JlYXRlQ2hhbm5lbCB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBcclxuICAgICAgICBkaXNwYXRjaENyZWF0ZUNoYW5uZWwoY2hhbm5lbFRpdGxlKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgbWVzc2FnZXMsIHNvY2tldCB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2hhdF9jb250YWluZXIgY29udGFpbmVyJz5cclxuICAgICAgICAgICAgICAgIDxTaWRlQmFyIHNvY2tldD17c29ja2V0fSBjcmVhdGVDaGFubmVsPXt0aGlzLmNyZWF0ZUNoYW5uZWx9Lz5cclxuICAgICAgICAgICAgICAgIDxDaGF0Qm94IG1lc3NhZ2VzPXttZXNzYWdlc30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBvbldyaXRlTWVzc2FnZT17dGhpcy5vbldyaXRlTWVzc2FnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgIG9uTWVzc2FnZVNlbmQ9e3RoaXMub25NZXNzYWdlU2VuZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VUZXh0PXt0aGlzLnN0YXRlLm1lc3NhZ2VUZXh0fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0b3JlID0+ICh7XHJcbiAgICBcclxuICAgIG1lc3NhZ2VzOnN0b3JlLmNoYW5uZWxzLmFjdGl2ZS5tZXNzYWdlcyxcclxuICAgIGFjdGl2ZUNoYW5uZWw6c3RvcmUuY2hhbm5lbHMuYWN0aXZlLnRpdGxlXHJcbiAgICBcclxufSk7XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xyXG4gICAgXHJcbiAgICBkaXNwYXRjaE1lc3NhZ2UobWVzc2FnZSkge1xyXG4gICAgICAgIGRpc3BhdGNoKGFkZFNpbmdsZU1lc3NhZ2UobWVzc2FnZSkpO1xyXG4gICAgfSxcclxuICAgIGRpc3BhdGNoQ3JlYXRlQ2hhbm5lbChjaGFubmVsVGl0bGUpIHtcclxuICAgICAgICBjcmVhdGVDaGFubmVsKGNoYW5uZWxUaXRsZSk7XHJcbiAgICB9XHJcbiAgICBcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShDaGF0Q29udGFpbmVyKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29udGFpbmVycy9DaGF0Q29udGFpbmVyL0NoYXRDb250YWluZXIuanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }

})