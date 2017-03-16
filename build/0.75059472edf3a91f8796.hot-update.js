webpackHotUpdate(0,{

/***/ 983:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(2), RootInstanceProvider = __webpack_require__(10), ReactMount = __webpack_require__(12), React = __webpack_require__(98); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(98);\n\nvar _react2 = _interopRequireDefault(_react);\n\n__webpack_require__(984);\n\nvar _reactRedux = __webpack_require__(189);\n\nvar _Actions = __webpack_require__(974);\n\nvar _UserBox = __webpack_require__(986);\n\nvar _UserBox2 = _interopRequireDefault(_UserBox);\n\nvar _SearchBar = __webpack_require__(990);\n\nvar _SearchBar2 = _interopRequireDefault(_SearchBar);\n\nvar _CreateChannel = __webpack_require__(994);\n\nvar _CreateChannel2 = _interopRequireDefault(_CreateChannel);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n//import * as actions from '../../actions';\n\nvar ChannelRow = function ChannelRow(props) {\n    var classTitle = props.channel.isPrivate ? 'private_channel_row' : 'channel_row',\n        _props$channel = props.channel,\n        title = _props$channel.title,\n        creator = _props$channel.creator,\n        members = _props$channel.members;\n\n    return _react2.default.createElement(\n        'li',\n        { className: classTitle },\n        _react2.default.createElement(\n            'div',\n            null,\n            ' Title: ',\n            title,\n            ' '\n        ),\n        ' ',\n        _react2.default.createElement(\n            'div',\n            null,\n            ' Members: ',\n            members,\n            ' '\n        ),\n        _react2.default.createElement(\n            'div',\n            null,\n            ' Creator: ',\n            creator,\n            ' '\n        ),\n        _react2.default.createElement(\n            'div',\n            null,\n            //show button if channel is not active;\n            title !== props.activeChannel && _react2.default.createElement('input', { type: 'button',\n                value: 'Join the chat',\n                name: title,\n                onClick: props.onJoinChannel,\n                className: 'join_chat_button' })\n        )\n    );\n};\n\nvar SideBar = function (_React$Component) {\n    _inherits(SideBar, _React$Component);\n\n    function SideBar(props) {\n        _classCallCheck(this, SideBar);\n\n        var _this = _possibleConstructorReturn(this, (SideBar.__proto__ || Object.getPrototypeOf(SideBar)).call(this, props));\n\n        _this.state = {\n            isPublicOnly: false,\n            searchText: ''\n        };\n        _this.onJoinChannel = _this.onJoinChannel.bind(_this);\n        _this.onPublicChange = _this.onPublicChange.bind(_this);\n        _this.onSearchTextChange = _this.onSearchTextChange.bind(_this);\n        _this.reloadChannels = _this.reloadChannels.bind(_this);\n        return _this;\n    }\n\n    _createClass(SideBar, [{\n        key: 'componentDidMount',\n        value: function componentDidMount() {\n            var _props = this.props,\n                socket = _props.socket,\n                dispatch = _props.dispatch;\n\n            socket.on('primary list of channels', function (list) {\n                console.log('диспатчим список каналов' + list[0].members);\n\n                dispatch((0, _Actions.receiveChannels)(list));\n            });\n            socket.emit('get primary list of channels');\n        }\n    }, {\n        key: 'onPublicChange',\n        value: function onPublicChange() {\n            this.setState(function (prevState) {\n                return {\n                    isPublicOnly: !prevState.isPublicOnly\n                };\n            });\n        }\n    }, {\n        key: 'onSearchTextChange',\n        value: function onSearchTextChange(e) {\n            this.setState({\n                searchText: e.target.value\n            });\n        }\n    }, {\n        key: 'reloadChannels',\n        value: function reloadChannels() {\n            var socket = this.props.socket;\n            socket.emit('get primary list of channels');\n        }\n    }, {\n        key: 'onJoinChannel',\n        value: function onJoinChannel(e) {\n            var nextChannel = e.target.name,\n                _props2 = this.props,\n                activeChannel = _props2.activeChannel,\n                dispatch = _props2.dispatch,\n                username = _props2.username,\n                socket = _props2.socket,\n                data = {\n                prevChannel: activeChannel,\n                nextChannel: nextChannel,\n                username: username\n            };\n\n            socket.emit('join channel', data);\n            dispatch((0, _Actions.joinChannel)(nextChannel));\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _this2 = this;\n\n            var toLowTrim = function toLowTrim(string) {\n                return string.trim().toLowerCase();\n            };\n            var channels = [];\n            if (this.props.channels) this.props.channels.forEach(function (c, idx) {\n                if (c.title.toLowerCase().indexOf(toLowTrim(_this2.state.searchText)) === -1 && c.creator.toLowerCase().indexOf(toLowTrim(_this2.state.searchText)) === -1) {\n                    return;\n                }\n                if (_this2.state.isPublicOnly && c.isPrivate) {\n                    return;\n                }\n                channels.push(_react2.default.createElement(ChannelRow, { channel: c,\n                    onJoinChannel: _this2.onJoinChannel,\n                    activeChannel: _this2.props.activeChannel,\n                    key: idx }));\n            });\n            return _react2.default.createElement(\n                'div',\n                { className: 'col-xs-12 col-sm-3' },\n                _react2.default.createElement(\n                    'aside',\n                    { className: 'side_bar' },\n                    _react2.default.createElement(_UserBox2.default, { user: { name: 'Daniil', family: 'korobskoy' } }),\n                    _react2.default.createElement(_SearchBar2.default, { isPublicOnly: this.state.isPublicOnly,\n                        searchText: this.state.searchText,\n                        onPublicChange: this.onPublicChange,\n                        onSearchTextChange: this.onSearchTextChange\n                    }),\n                    _react2.default.createElement(_CreateChannel2.default, { socket: this.props.socket }),\n                    _react2.default.createElement(\n                        'div',\n                        null,\n                        _react2.default.createElement('input', { className: 'reload_channels_button',\n                            type: 'button',\n                            onClick: this.reloadChannels,\n                            value: 'Refresh channels'\n                        }),\n                        _react2.default.createElement(\n                            'ul',\n                            { className: 'channels' },\n                            ' ',\n                            channels,\n                            ' '\n                        )\n                    )\n                )\n            );\n        }\n    }]);\n\n    return SideBar;\n}(_react2.default.Component);\n\nSideBar.propTypes = {\n    active: _react2.default.PropTypes.string,\n    username: _react2.default.PropTypes.string,\n    socket: _react2.default.PropTypes.object,\n    channels: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.shape({\n        title: _react2.default.PropTypes.string,\n        creator: _react2.default.PropTypes.string,\n        members: _react2.default.PropTypes.number,\n        isPrivate: _react2.default.PropTypes.bool,\n        socket: _react2.default.PropTypes.object\n    }))\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n    return {\n        activeChannel: state.channels.active.title,\n        channels: state.channels.list,\n        username: state.user.name\n    };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(_dispatch) {\n    return {\n        dispatch: function dispatch(data) {\n            _dispatch(data);\n        }\n    };\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SideBar);\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(909); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot apply hot update to \" + \"SideBar.jsx\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TaWRlQmFyL1NpZGVCYXIuanN4Pzk3NmMiXSwibmFtZXMiOlsiQ2hhbm5lbFJvdyIsInByb3BzIiwiY2hhbm5lbCIsImlzUHJpdmF0ZSIsInRpdGxlIiwiY3JlYXRvciIsIm1lbWJlcnMiLCJjbGFzc1RpdGxlIiwiYWN0aXZlQ2hhbm5lbCIsIm9uSm9pbkNoYW5uZWwiLCJTaWRlQmFyIiwic3RhdGUiLCJpc1B1YmxpY09ubHkiLCJzZWFyY2hUZXh0IiwiYmluZCIsIm9uUHVibGljQ2hhbmdlIiwib25TZWFyY2hUZXh0Q2hhbmdlIiwicmVsb2FkQ2hhbm5lbHMiLCJzb2NrZXQiLCJkaXNwYXRjaCIsIm9uIiwibGlzdCIsImNvbnNvbGUiLCJsb2ciLCJlbWl0Iiwic2V0U3RhdGUiLCJwcmV2U3RhdGUiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJuYW1lIiwidXNlcm5hbWUiLCJkYXRhIiwicHJldkNoYW5uZWwiLCJuZXh0Q2hhbm5lbCIsInRvTG93VHJpbSIsInN0cmluZyIsInRyaW0iLCJ0b0xvd2VyQ2FzZSIsImNoYW5uZWxzIiwiZm9yRWFjaCIsImMiLCJpZHgiLCJpbmRleE9mIiwicHVzaCIsImZhbWlseSIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsImFjdGl2ZSIsIlByb3BUeXBlcyIsIm9iamVjdCIsImFycmF5T2YiLCJzaGFwZSIsIm51bWJlciIsImJvb2wiLCJtYXBTdGF0ZVRvUHJvcHMiLCJ1c2VyIiwibWFwRGlzcGF0Y2hUb1Byb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFJQTs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQU5BOztBQVFBLElBQU1BLGFBQWEsU0FBYkEsVUFBYSxRQUFTO0FBQ3BCLHFCQUFhQyxNQUFNQyxPQUFOLENBQWNDLFNBQWQsR0FBMEIscUJBQTFCLEdBQWtELGFBQS9EO0FBQUEseUJBQ3dCRixNQUFNQyxPQUQ5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VDtBQUNIO0FBSHNDLEtBQWY7QUFBQSxDQUEzQjs7a0JBTWUseUJBQVF1QixlQUFSLEVBQXlCRSxrQkFBekIsRUFBNkMvQyxPQUE3QyxDIiwiZmlsZSI6Ijk4My5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAnLi9tYWluLmxlc3MnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuLy9pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4uLy4uL2FjdGlvbnMnO1xyXG5cclxuaW1wb3J0IHsgcmVjZWl2ZUNoYW5uZWxzLCBqb2luQ2hhbm5lbCB9IGZyb20gJy4uLy4uL0FjdGlvbnMnO1xyXG5cclxuaW1wb3J0IFVzZXJCb3ggZnJvbSAnLi4vVXNlckJveCc7XHJcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSAnLi4vU2VhcmNoQmFyJztcclxuaW1wb3J0IENyZWF0ZUNoYW5uZWwgZnJvbSAnLi4vLi4vY29udGFpbmVycy9DcmVhdGVDaGFubmVsJztcclxuXHJcbmNvbnN0IENoYW5uZWxSb3cgPSBwcm9wcyA9PiB7XHJcbiAgY29uc3QgY2xhc3NUaXRsZSA9IHByb3BzLmNoYW5uZWwuaXNQcml2YXRlID8gJ3ByaXZhdGVfY2hhbm5lbF9yb3cnIDogJ2NoYW5uZWxfcm93JyxcclxuICB7IHRpdGxlLCBjcmVhdG9yLCBtZW1iZXJzIH0gPSBwcm9wcy5jaGFubmVsO1xyXG4gIHJldHVybiAoXHJcbiAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc1RpdGxlfT5cclxuICAgICAgPGRpdj4gVGl0bGU6IHt0aXRsZX0gPC9kaXY+IDxkaXY+IE1lbWJlcnM6IHttZW1iZXJzfSA8L2Rpdj5cclxuICAgICAgPGRpdj4gQ3JlYXRvcjoge2NyZWF0b3J9IDwvZGl2PiBcclxuICAgICAgPGRpdj4gXHJcbiAgICAgIHsgLy9zaG93IGJ1dHRvbiBpZiBjaGFubmVsIGlzIG5vdCBhY3RpdmU7XHJcbiAgICAgICAgICAgIHRpdGxlICE9PSBwcm9wcy5hY3RpdmVDaGFubmVsICYmIFxyXG4gICAgICAgIDxpbnB1dCB0eXBlPSdidXR0b24nIFxyXG4gICAgICAgICAgICAgICB2YWx1ZT0nSm9pbiB0aGUgY2hhdCcgXHJcbiAgICAgICAgICAgICAgIG5hbWU9e3RpdGxlfVxyXG4gICAgICAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5vbkpvaW5DaGFubmVsfVxyXG4gICAgICAgICAgICAgICBjbGFzc05hbWU9J2pvaW5fY2hhdF9idXR0b24nLz5cclxuICAgICAgfVxyXG4gICAgICAgPC9kaXY+XHJcbiAgICA8L2xpPlxyXG4gICk7XHJcbn07XHJcbmNsYXNzIFNpZGVCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaXNQdWJsaWNPbmx5OmZhbHNlLFxyXG4gICAgICAgICAgICBzZWFyY2hUZXh0OicnXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMub25Kb2luQ2hhbm5lbCAgPSB0aGlzLm9uSm9pbkNoYW5uZWwuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uUHVibGljQ2hhbmdlID0gdGhpcy5vblB1YmxpY0NoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25TZWFyY2hUZXh0Q2hhbmdlID0gdGhpcy5vblNlYXJjaFRleHRDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnJlbG9hZENoYW5uZWxzID0gdGhpcy5yZWxvYWRDaGFubmVscy5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgY29uc3QgeyBzb2NrZXQsIGRpc3BhdGNoIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHNvY2tldC5vbigncHJpbWFyeSBsaXN0IG9mIGNoYW5uZWxzJywgKGxpc3QpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ9C00LjRgdC/0LDRgtGH0LjQvCDRgdC/0LjRgdC+0Log0LrQsNC90LDQu9C+0LInICsgbGlzdFswXS5tZW1iZXJzKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHJlY2VpdmVDaGFubmVscyhsaXN0KSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc29ja2V0LmVtaXQoJ2dldCBwcmltYXJ5IGxpc3Qgb2YgY2hhbm5lbHMnKTtcclxuICAgIH1cclxuICAgIG9uUHVibGljQ2hhbmdlKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGlzUHVibGljT25seTohcHJldlN0YXRlLmlzUHVibGljT25seVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBvblNlYXJjaFRleHRDaGFuZ2UoZSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgc2VhcmNoVGV4dDplLnRhcmdldC52YWx1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmVsb2FkQ2hhbm5lbHMoKSB7XHJcbiAgICAgICAgY29uc3Qgc29ja2V0ID0gdGhpcy5wcm9wcy5zb2NrZXQ7XHJcbiAgICAgICAgc29ja2V0LmVtaXQoJ2dldCBwcmltYXJ5IGxpc3Qgb2YgY2hhbm5lbHMnKTtcclxuICAgIH1cclxuICAgIG9uSm9pbkNoYW5uZWwoZSkge1xyXG4gICAgICAgIGNvbnN0IG5leHRDaGFubmVsID0gZS50YXJnZXQubmFtZSxcclxuICAgICAgICAgICAgICB7IGFjdGl2ZUNoYW5uZWwsIGRpc3BhdGNoLCB1c2VybmFtZSwgc29ja2V0IH0gPSB0aGlzLnByb3BzLFxyXG4gICAgICAgICAgICAgIGRhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgIHByZXZDaGFubmVsOiBhY3RpdmVDaGFubmVsLFxyXG4gICAgICAgICAgICAgICAgICBuZXh0Q2hhbm5lbCxcclxuICAgICAgICAgICAgICAgICAgdXNlcm5hbWVcclxuICAgICAgICAgICAgICB9O1xyXG4gICAgICAgIHNvY2tldC5lbWl0KCdqb2luIGNoYW5uZWwnLCBkYXRhKTtcclxuICAgICAgICBkaXNwYXRjaChqb2luQ2hhbm5lbChuZXh0Q2hhbm5lbCkpO1xyXG4gICAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgICAgY29uc3QgdG9Mb3dUcmltID0gKHN0cmluZykgPT4gc3RyaW5nLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICBjb25zdCBjaGFubmVscyA9IFtdO1xyXG4gICAgICBpZih0aGlzLnByb3BzLmNoYW5uZWxzKVxyXG4gICAgICB0aGlzLnByb3BzLmNoYW5uZWxzLmZvckVhY2goKGMsIGlkeCkgPT4ge1xyXG4gICAgICAgICAgaWYgKGMudGl0bGUudG9Mb3dlckNhc2UoKS5pbmRleE9mKHRvTG93VHJpbSh0aGlzLnN0YXRlLnNlYXJjaFRleHQpKSA9PT0gLTEgJiYgXHJcbiAgICAgICAgICAgICAgYy5jcmVhdG9yLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0b0xvd1RyaW0odGhpcy5zdGF0ZS5zZWFyY2hUZXh0KSkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKHRoaXMuc3RhdGUuaXNQdWJsaWNPbmx5ICYmIGMuaXNQcml2YXRlKXtcclxuICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNoYW5uZWxzLnB1c2goIDxDaGFubmVsUm93IGNoYW5uZWw9e2N9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Kb2luQ2hhbm5lbD17dGhpcy5vbkpvaW5DaGFubmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlQ2hhbm5lbD17dGhpcy5wcm9wcy5hY3RpdmVDaGFubmVsfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aWR4fS8+ICk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC14cy0xMiBjb2wtc20tMyc+XHJcbiAgICAgICAgICA8YXNpZGUgY2xhc3NOYW1lPSdzaWRlX2Jhcic+XHJcbiAgICAgICAgICAgIDxVc2VyQm94IHVzZXI9e3tuYW1lOidEYW5paWwnLCBmYW1pbHk6J2tvcm9ic2tveSd9fS8+XHJcbiAgICAgICAgICAgIDxTZWFyY2hCYXIgaXNQdWJsaWNPbmx5PXt0aGlzLnN0YXRlLmlzUHVibGljT25seX1cclxuICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hUZXh0PXt0aGlzLnN0YXRlLnNlYXJjaFRleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgb25QdWJsaWNDaGFuZ2U9e3RoaXMub25QdWJsaWNDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgb25TZWFyY2hUZXh0Q2hhbmdlPXt0aGlzLm9uU2VhcmNoVGV4dENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Q3JlYXRlQ2hhbm5lbCBzb2NrZXQ9e3RoaXMucHJvcHMuc29ja2V0fS8+XHJcbiAgICAgICAgICAgIDxkaXYgPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0ncmVsb2FkX2NoYW5uZWxzX2J1dHRvbidcclxuICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdidXR0b24nIFxyXG4gICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucmVsb2FkQ2hhbm5lbHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9J1JlZnJlc2ggY2hhbm5lbHMnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdjaGFubmVscycgPiB7Y2hhbm5lbHN9IDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9hc2lkZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5TaWRlQmFyLnByb3BUeXBlcyA9IHtcclxuICAgIGFjdGl2ZTpSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgdXNlcm5hbWU6UmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHNvY2tldDpSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgY2hhbm5lbHM6IFJlYWN0LlByb3BUeXBlcy5hcnJheU9mKFJlYWN0LlByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgICAgdGl0bGU6UmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgICBjcmVhdG9yOlJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgbWVtYmVyczpSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgICAgIGlzUHJpdmF0ZTpSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcclxuICAgICAgICBzb2NrZXQ6UmVhY3QuUHJvcFR5cGVzLm9iamVjdFxyXG4gIH0pKVxyXG59XHJcbiAgICBcclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG4gICAgYWN0aXZlQ2hhbm5lbDogc3RhdGUuY2hhbm5lbHMuYWN0aXZlLnRpdGxlLFxyXG4gICAgY2hhbm5lbHM6c3RhdGUuY2hhbm5lbHMubGlzdCxcclxuICAgIHVzZXJuYW1lOnN0YXRlLnVzZXIubmFtZVxyXG59KTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcclxuICAgZGlzcGF0Y2goZGF0YSl7XHJcbiAgICAgICBkaXNwYXRjaChkYXRhKTtcclxuICAgfVxyXG59KTtcclxuICAgIFxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShTaWRlQmFyKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9TaWRlQmFyL1NpZGVCYXIuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

})