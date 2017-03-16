webpackHotUpdate(0,{

/***/ 983:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(2), RootInstanceProvider = __webpack_require__(10), ReactMount = __webpack_require__(12), React = __webpack_require__(98); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(98);\n\nvar _react2 = _interopRequireDefault(_react);\n\n__webpack_require__(984);\n\nvar _reactRedux = __webpack_require__(189);\n\nvar _Actions = __webpack_require__(974);\n\nvar _UserBox = __webpack_require__(986);\n\nvar _UserBox2 = _interopRequireDefault(_UserBox);\n\nvar _SearchBar = __webpack_require__(990);\n\nvar _SearchBar2 = _interopRequireDefault(_SearchBar);\n\nvar _CreateChannel = __webpack_require__(994);\n\nvar _CreateChannel2 = _interopRequireDefault(_CreateChannel);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n//import * as actions from '../../actions';\n\nvar ChannelRow = function ChannelRow(props) {\n    var classTitle = props.channel.isPrivate ? 'private_channel_row' : 'channel_row',\n        _props$channel = props.channel,\n        title = _props$channel.title,\n        creator = _props$channel.creator,\n        members = _props$channel.members;\n\n    return _react2.default.createElement(\n        'li',\n        { className: classTitle },\n        _react2.default.createElement(\n            'div',\n            null,\n            ' Title: ',\n            title,\n            ' '\n        ),\n        ' ',\n        _react2.default.createElement(\n            'div',\n            null,\n            ' Members: ',\n            members,\n            ' '\n        ),\n        _react2.default.createElement(\n            'div',\n            null,\n            ' Creator: ',\n            creator,\n            ' '\n        ),\n        _react2.default.createElement(\n            'div',\n            null,\n            //show button if channel is not active;\n            title !== props.activeChannel && _react2.default.createElement('input', { type: 'button',\n                value: 'Join the chat',\n                name: title,\n                onClick: props.onJoinChannel,\n                className: 'join_chat_button' })\n        )\n    );\n};\n\nvar SideBar = function (_React$Component) {\n    _inherits(SideBar, _React$Component);\n\n    function SideBar(props) {\n        _classCallCheck(this, SideBar);\n\n        var _this = _possibleConstructorReturn(this, (SideBar.__proto__ || Object.getPrototypeOf(SideBar)).call(this, props));\n\n        _this.state = {\n            isPublicOnly: false,\n            searchText: ''\n        };\n        _this.onJoinChannel = _this.onJoinChannel.bind(_this);\n        _this.onPublicChange = _this.onPublicChange.bind(_this);\n        _this.onSearchTextChange = _this.onSearchTextChange.bind(_this);\n        _this.reloadChannels = _this.reloadChannels.bind(_this);\n        return _this;\n    }\n\n    _createClass(SideBar, [{\n        key: 'componentDidMount',\n        value: function componentDidMount() {\n            var _props = this.props,\n                socket = _props.socket,\n                dispatch = _props.dispatch;\n\n            socket.on('primary list of channels', function (list) {\n                console.log('диспатчим список каналов' + list[0].members);\n\n                dispatch((0, _Actions.receiveChannels)(list));\n            });\n            socket.on('messages from server', function (messages) {\n                dispatch(addMessagesFromDB(messages));\n            });\n            socket.emit('get primary list of channels');\n        }\n    }, {\n        key: 'onPublicChange',\n        value: function onPublicChange() {\n            this.setState(function (prevState) {\n                return {\n                    isPublicOnly: !prevState.isPublicOnly\n                };\n            });\n        }\n    }, {\n        key: 'onSearchTextChange',\n        value: function onSearchTextChange(e) {\n            this.setState({\n                searchText: e.target.value\n            });\n        }\n    }, {\n        key: 'reloadChannels',\n        value: function reloadChannels() {\n            var socket = this.props.socket;\n            socket.emit('get primary list of channels');\n        }\n    }, {\n        key: 'onJoinChannel',\n        value: function onJoinChannel(e) {\n            var nextChannel = e.target.name,\n                _props2 = this.props,\n                activeChannel = _props2.activeChannel,\n                dispatch = _props2.dispatch,\n                username = _props2.username,\n                socket = _props2.socket,\n                data = {\n                prevChannel: activeChannel,\n                nextChannel: nextChannel,\n                username: username\n            };\n\n            socket.emit('join channel', data);\n            dispatch((0, _Actions.joinChannel)(nextChannel));\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _this2 = this;\n\n            var toLowTrim = function toLowTrim(string) {\n                return string.trim().toLowerCase();\n            };\n            var channels = [];\n            if (this.props.channels) this.props.channels.forEach(function (c, idx) {\n                if (c.title.toLowerCase().indexOf(toLowTrim(_this2.state.searchText)) === -1 && c.creator.toLowerCase().indexOf(toLowTrim(_this2.state.searchText)) === -1) {\n                    return;\n                }\n                if (_this2.state.isPublicOnly && c.isPrivate) {\n                    return;\n                }\n                channels.push(_react2.default.createElement(ChannelRow, { channel: c,\n                    onJoinChannel: _this2.onJoinChannel,\n                    activeChannel: _this2.props.activeChannel,\n                    key: idx }));\n            });\n            return _react2.default.createElement(\n                'div',\n                { className: 'col-xs-12 col-sm-3' },\n                _react2.default.createElement(\n                    'aside',\n                    { className: 'side_bar' },\n                    _react2.default.createElement(_UserBox2.default, { user: { name: 'Daniil', family: 'korobskoy' } }),\n                    _react2.default.createElement(_SearchBar2.default, { isPublicOnly: this.state.isPublicOnly,\n                        searchText: this.state.searchText,\n                        onPublicChange: this.onPublicChange,\n                        onSearchTextChange: this.onSearchTextChange\n                    }),\n                    _react2.default.createElement(_CreateChannel2.default, { socket: this.props.socket }),\n                    _react2.default.createElement(\n                        'div',\n                        null,\n                        _react2.default.createElement('input', { className: 'reload_channels_button',\n                            type: 'button',\n                            onClick: this.reloadChannels,\n                            value: 'Refresh channels'\n                        }),\n                        _react2.default.createElement(\n                            'ul',\n                            { className: 'channels' },\n                            ' ',\n                            channels,\n                            ' '\n                        )\n                    )\n                )\n            );\n        }\n    }]);\n\n    return SideBar;\n}(_react2.default.Component);\n\nSideBar.propTypes = {\n    activeChannel: _react2.default.PropTypes.string,\n    username: _react2.default.PropTypes.string,\n    socket: _react2.default.PropTypes.object,\n    channels: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.shape({\n        title: _react2.default.PropTypes.string,\n        creator: _react2.default.PropTypes.string,\n        members: _react2.default.PropTypes.number,\n        isPrivate: _react2.default.PropTypes.bool,\n        socket: _react2.default.PropTypes.object\n    }))\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n    return {\n        activeChannel: state.channels.active.title,\n        channels: state.channels.list,\n        username: state.user.name\n    };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(_dispatch) {\n    return {\n        dispatch: function dispatch(data) {\n            _dispatch(data);\n        }\n    };\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SideBar);\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(909); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot apply hot update to \" + \"SideBar.jsx\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TaWRlQmFyL1NpZGVCYXIuanN4Pzk3NmMiXSwibmFtZXMiOlsiQ2hhbm5lbFJvdyIsInByb3BzIiwiY2hhbm5lbCIsImlzUHJpdmF0ZSIsInRpdGxlIiwiY3JlYXRvciIsIm1lbWJlcnMiLCJjbGFzc1RpdGxlIiwiYWN0aXZlQ2hhbm5lbCIsIm9uSm9pbkNoYW5uZWwiLCJTaWRlQmFyIiwic3RhdGUiLCJpc1B1YmxpY09ubHkiLCJzZWFyY2hUZXh0IiwiYmluZCIsIm9uUHVibGljQ2hhbmdlIiwib25TZWFyY2hUZXh0Q2hhbmdlIiwicmVsb2FkQ2hhbm5lbHMiLCJzb2NrZXQiLCJkaXNwYXRjaCIsIm9uIiwibGlzdCIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlcyIsImFkZE1lc3NhZ2VzRnJvbURCIiwiZW1pdCIsInNldFN0YXRlIiwicHJldlN0YXRlIiwiZSIsInRhcmdldCIsInZhbHVlIiwibmFtZSIsInVzZXJuYW1lIiwiZGF0YSIsInByZXZDaGFubmVsIiwibmV4dENoYW5uZWwiLCJ0b0xvd1RyaW0iLCJzdHJpbmciLCJ0cmltIiwidG9Mb3dlckNhc2UiLCJjaGFubmVscyIsImZvckVhY2giLCJjIiwiaWR4IiwiaW5kZXhPZiIsInB1c2giLCJmYW1pbHkiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJhcnJheU9mIiwic2hhcGUiLCJudW1iZXIiLCJib29sIiwibWFwU3RhdGVUb1Byb3BzIiwiYWN0aXZlIiwidXNlciIsIm1hcERpc3BhdGNoVG9Qcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBSUE7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFOQTs7QUFRQSxJQUFNQSxhQUFhLFNBQWJBLFVBQWEsUUFBUztBQUNwQixxQkFBYUMsTUFBTUMsT0FBTixDQUFjQyxTQUFkLEdBQTBCLHFCQUExQixHQUFr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LENBQVcxQjtBQUhZLEtBQVo7QUFBQSxDQUF4Qjs7QUFNQSxJQUFNMkIscUJBQXFCLFNBQXJCQSxrQkFBcUIsQ0FBQ3hDLFNBQUQ7QUFBQSxXQUFlO0FBQ3ZDQSxnQkFEdUMsb0JBQzlCZSxJQUQ4QixFQUN6QjtBQUNWZixzQkFBU2UsSUFBVDtBQUNIO0FBSHNDLEtBQWY7QUFBQSxDQUEzQjs7a0JBTWUseUJBQVFzQixlQUFSLEVBQXlCRyxrQkFBekIsRUFBNkNqRCxPQUE3QyxDIiwiZmlsZSI6Ijk4My5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAnLi9tYWluLmxlc3MnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuLy9pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4uLy4uL2FjdGlvbnMnO1xyXG5cclxuaW1wb3J0IHsgcmVjZWl2ZUNoYW5uZWxzLCBqb2luQ2hhbm5lbCB9IGZyb20gJy4uLy4uL0FjdGlvbnMnO1xyXG5cclxuaW1wb3J0IFVzZXJCb3ggZnJvbSAnLi4vVXNlckJveCc7XHJcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSAnLi4vU2VhcmNoQmFyJztcclxuaW1wb3J0IENyZWF0ZUNoYW5uZWwgZnJvbSAnLi4vLi4vY29udGFpbmVycy9DcmVhdGVDaGFubmVsJztcclxuXHJcbmNvbnN0IENoYW5uZWxSb3cgPSBwcm9wcyA9PiB7XHJcbiAgY29uc3QgY2xhc3NUaXRsZSA9IHByb3BzLmNoYW5uZWwuaXNQcml2YXRlID8gJ3ByaXZhdGVfY2hhbm5lbF9yb3cnIDogJ2NoYW5uZWxfcm93JyxcclxuICB7IHRpdGxlLCBjcmVhdG9yLCBtZW1iZXJzIH0gPSBwcm9wcy5jaGFubmVsO1xyXG4gIHJldHVybiAoXHJcbiAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc1RpdGxlfT5cclxuICAgICAgPGRpdj4gVGl0bGU6IHt0aXRsZX0gPC9kaXY+IDxkaXY+IE1lbWJlcnM6IHttZW1iZXJzfSA8L2Rpdj5cclxuICAgICAgPGRpdj4gQ3JlYXRvcjoge2NyZWF0b3J9IDwvZGl2PiBcclxuICAgICAgPGRpdj4gXHJcbiAgICAgIHsgLy9zaG93IGJ1dHRvbiBpZiBjaGFubmVsIGlzIG5vdCBhY3RpdmU7XHJcbiAgICAgICAgICAgIHRpdGxlICE9PSBwcm9wcy5hY3RpdmVDaGFubmVsICYmIFxyXG4gICAgICAgIDxpbnB1dCB0eXBlPSdidXR0b24nIFxyXG4gICAgICAgICAgICAgICB2YWx1ZT0nSm9pbiB0aGUgY2hhdCcgXHJcbiAgICAgICAgICAgICAgIG5hbWU9e3RpdGxlfVxyXG4gICAgICAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5vbkpvaW5DaGFubmVsfVxyXG4gICAgICAgICAgICAgICBjbGFzc05hbWU9J2pvaW5fY2hhdF9idXR0b24nLz5cclxuICAgICAgfVxyXG4gICAgICAgPC9kaXY+XHJcbiAgICA8L2xpPlxyXG4gICk7XHJcbn07XHJcbmNsYXNzIFNpZGVCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaXNQdWJsaWNPbmx5OmZhbHNlLFxyXG4gICAgICAgICAgICBzZWFyY2hUZXh0OicnXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMub25Kb2luQ2hhbm5lbCAgPSB0aGlzLm9uSm9pbkNoYW5uZWwuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uUHVibGljQ2hhbmdlID0gdGhpcy5vblB1YmxpY0NoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25TZWFyY2hUZXh0Q2hhbmdlID0gdGhpcy5vblNlYXJjaFRleHRDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnJlbG9hZENoYW5uZWxzID0gdGhpcy5yZWxvYWRDaGFubmVscy5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgY29uc3QgeyBzb2NrZXQsIGRpc3BhdGNoIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHNvY2tldC5vbigncHJpbWFyeSBsaXN0IG9mIGNoYW5uZWxzJywgKGxpc3QpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ9C00LjRgdC/0LDRgtGH0LjQvCDRgdC/0LjRgdC+0Log0LrQsNC90LDQu9C+0LInICsgbGlzdFswXS5tZW1iZXJzKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHJlY2VpdmVDaGFubmVscyhsaXN0KSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc29ja2V0Lm9uKCdtZXNzYWdlcyBmcm9tIHNlcnZlcicsIChtZXNzYWdlcykgPT4ge1xyXG4gICAgICAgICAgIGRpc3BhdGNoKGFkZE1lc3NhZ2VzRnJvbURCKG1lc3NhZ2VzKSk7IFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNvY2tldC5lbWl0KCdnZXQgcHJpbWFyeSBsaXN0IG9mIGNoYW5uZWxzJyk7XHJcbiAgICB9XHJcbiAgICBvblB1YmxpY0NoYW5nZSgpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBpc1B1YmxpY09ubHk6IXByZXZTdGF0ZS5pc1B1YmxpY09ubHlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgb25TZWFyY2hUZXh0Q2hhbmdlKGUpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHNlYXJjaFRleHQ6ZS50YXJnZXQudmFsdWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJlbG9hZENoYW5uZWxzKCkge1xyXG4gICAgICAgIGNvbnN0IHNvY2tldCA9IHRoaXMucHJvcHMuc29ja2V0O1xyXG4gICAgICAgIHNvY2tldC5lbWl0KCdnZXQgcHJpbWFyeSBsaXN0IG9mIGNoYW5uZWxzJyk7XHJcbiAgICB9XHJcbiAgICBvbkpvaW5DaGFubmVsKGUpIHtcclxuICAgICAgICBjb25zdCBuZXh0Q2hhbm5lbCA9IGUudGFyZ2V0Lm5hbWUsXHJcbiAgICAgICAgICAgICAgeyBhY3RpdmVDaGFubmVsLCBkaXNwYXRjaCwgdXNlcm5hbWUsIHNvY2tldCB9ID0gdGhpcy5wcm9wcyxcclxuICAgICAgICAgICAgICBkYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgICBwcmV2Q2hhbm5lbDogYWN0aXZlQ2hhbm5lbCxcclxuICAgICAgICAgICAgICAgICAgbmV4dENoYW5uZWwsXHJcbiAgICAgICAgICAgICAgICAgIHVzZXJuYW1lXHJcbiAgICAgICAgICAgICAgfTtcclxuICAgICAgICBzb2NrZXQuZW1pdCgnam9pbiBjaGFubmVsJywgZGF0YSk7XHJcbiAgICAgICAgZGlzcGF0Y2goam9pbkNoYW5uZWwobmV4dENoYW5uZWwpKTtcclxuICAgIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICAgIGNvbnN0IHRvTG93VHJpbSA9IChzdHJpbmcpID0+IHN0cmluZy50cmltKCkudG9Mb3dlckNhc2UoKTtcclxuICAgICAgY29uc3QgY2hhbm5lbHMgPSBbXTtcclxuICAgICAgaWYodGhpcy5wcm9wcy5jaGFubmVscylcclxuICAgICAgdGhpcy5wcm9wcy5jaGFubmVscy5mb3JFYWNoKChjLCBpZHgpID0+IHtcclxuICAgICAgICAgIGlmIChjLnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0b0xvd1RyaW0odGhpcy5zdGF0ZS5zZWFyY2hUZXh0KSkgPT09IC0xICYmIFxyXG4gICAgICAgICAgICAgIGMuY3JlYXRvci50b0xvd2VyQ2FzZSgpLmluZGV4T2YodG9Mb3dUcmltKHRoaXMuc3RhdGUuc2VhcmNoVGV4dCkpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmlzUHVibGljT25seSAmJiBjLmlzUHJpdmF0ZSl7XHJcbiAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjaGFubmVscy5wdXNoKCA8Q2hhbm5lbFJvdyBjaGFubmVsPXtjfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSm9pbkNoYW5uZWw9e3RoaXMub25Kb2luQ2hhbm5lbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUNoYW5uZWw9e3RoaXMucHJvcHMuYWN0aXZlQ2hhbm5lbH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2lkeH0vPiApO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wteHMtMTIgY29sLXNtLTMnPlxyXG4gICAgICAgICAgPGFzaWRlIGNsYXNzTmFtZT0nc2lkZV9iYXInPlxyXG4gICAgICAgICAgICA8VXNlckJveCB1c2VyPXt7bmFtZTonRGFuaWlsJywgZmFtaWx5Oidrb3JvYnNrb3knfX0vPlxyXG4gICAgICAgICAgICA8U2VhcmNoQmFyIGlzUHVibGljT25seT17dGhpcy5zdGF0ZS5pc1B1YmxpY09ubHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoVGV4dD17dGhpcy5zdGF0ZS5zZWFyY2hUZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgIG9uUHVibGljQ2hhbmdlPXt0aGlzLm9uUHVibGljQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgIG9uU2VhcmNoVGV4dENoYW5nZT17dGhpcy5vblNlYXJjaFRleHRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPENyZWF0ZUNoYW5uZWwgc29ja2V0PXt0aGlzLnByb3BzLnNvY2tldH0vPlxyXG4gICAgICAgICAgICA8ZGl2ID5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9J3JlbG9hZF9jaGFubmVsc19idXR0b24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0nYnV0dG9uJyBcclxuICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnJlbG9hZENoYW5uZWxzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPSdSZWZyZXNoIGNoYW5uZWxzJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT0nY2hhbm5lbHMnID4ge2NoYW5uZWxzfSA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvYXNpZGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuU2lkZUJhci5wcm9wVHlwZXMgPSB7XHJcbiAgICBhY3RpdmVDaGFubmVsOlJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICB1c2VybmFtZTpSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgc29ja2V0OlJlYWN0LlByb3BUeXBlcy5vYmplY3QsXHJcbiAgICBjaGFubmVsczogUmVhY3QuUHJvcFR5cGVzLmFycmF5T2YoUmVhY3QuUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgICB0aXRsZTpSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIGNyZWF0b3I6UmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICBtZW1iZXJzOlJlYWN0LlByb3BUeXBlcy5udW1iZXIsXHJcbiAgICAgICAgaXNQcml2YXRlOlJlYWN0LlByb3BUeXBlcy5ib29sLFxyXG4gICAgICAgIHNvY2tldDpSZWFjdC5Qcm9wVHlwZXMub2JqZWN0XHJcbiAgfSkpXHJcbn1cclxuICAgIFxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XHJcbiAgICBhY3RpdmVDaGFubmVsOiBzdGF0ZS5jaGFubmVscy5hY3RpdmUudGl0bGUsXHJcbiAgICBjaGFubmVsczpzdGF0ZS5jaGFubmVscy5saXN0LFxyXG4gICAgdXNlcm5hbWU6c3RhdGUudXNlci5uYW1lXHJcbn0pO1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xyXG4gICBkaXNwYXRjaChkYXRhKXtcclxuICAgICAgIGRpc3BhdGNoKGRhdGEpO1xyXG4gICB9XHJcbn0pO1xyXG4gICAgXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFNpZGVCYXIpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1NpZGVCYXIvU2lkZUJhci5qc3giXSwic291cmNlUm9vdCI6IiJ9");

/***/ }

})