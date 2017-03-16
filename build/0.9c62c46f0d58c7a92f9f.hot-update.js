webpackHotUpdate(0,{

/***/ 983:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(2), RootInstanceProvider = __webpack_require__(10), ReactMount = __webpack_require__(12), React = __webpack_require__(98); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(98);\n\nvar _react2 = _interopRequireDefault(_react);\n\n__webpack_require__(984);\n\nvar _reactRedux = __webpack_require__(189);\n\nvar _Actions = __webpack_require__(974);\n\nvar _UserBox = __webpack_require__(986);\n\nvar _UserBox2 = _interopRequireDefault(_UserBox);\n\nvar _SearchBar = __webpack_require__(990);\n\nvar _SearchBar2 = _interopRequireDefault(_SearchBar);\n\nvar _CreateChannel = __webpack_require__(994);\n\nvar _CreateChannel2 = _interopRequireDefault(_CreateChannel);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n//import * as actions from '../../actions';\n\nvar ChannelRow = function ChannelRow(props) {\n    var classTitle = props.channel.isPrivate ? 'private_channel_row' : 'channel_row',\n        _props$channel = props.channel,\n        title = _props$channel.title,\n        creator = _props$channel.creator,\n        members = _props$channel.members;\n\n    return _react2.default.createElement(\n        'li',\n        { className: classTitle },\n        _react2.default.createElement(\n            'div',\n            null,\n            ' Title: ',\n            title,\n            ' '\n        ),\n        ' ',\n        _react2.default.createElement(\n            'div',\n            null,\n            ' Members: ',\n            members,\n            ' '\n        ),\n        _react2.default.createElement(\n            'div',\n            null,\n            ' Creator: ',\n            creator,\n            ' '\n        ),\n        _react2.default.createElement(\n            'div',\n            null,\n            //show button if channel is not active;\n            title !== props.activeChannel && _react2.default.createElement('input', { type: 'button',\n                value: 'Join the chat',\n                name: title,\n                onClick: props.onJoinChannel,\n                className: 'join_chat_button' })\n        )\n    );\n};\n\nvar SideBar = function (_React$Component) {\n    _inherits(SideBar, _React$Component);\n\n    function SideBar(props) {\n        _classCallCheck(this, SideBar);\n\n        var _this = _possibleConstructorReturn(this, (SideBar.__proto__ || Object.getPrototypeOf(SideBar)).call(this, props));\n\n        _this.state = {\n            isPublicOnly: false,\n            searchText: ''\n        };\n        _this.onJoinChannel = _this.onJoinChannel.bind(_this);\n        _this.onPublicChange = _this.onPublicChange.bind(_this);\n        _this.onSearchTextChange = _this.onSearchTextChange.bind(_this);\n        _this.reloadChannels = _this.reloadChannels.bind(_this);\n        return _this;\n    }\n\n    _createClass(SideBar, [{\n        key: 'componentDidMount',\n        value: function componentDidMount() {\n            var _props = this.props,\n                socket = _props.socket,\n                dispatch = _props.dispatch;\n\n            socket.on('primary list of channels', function (list) {\n                console.log('диспатчим список каналов' + list[0].members);\n\n                dispatch((0, _Actions.receiveChannels)(list));\n            });\n            socket.emit('get primary list of channels');\n        }\n    }, {\n        key: 'onPublicChange',\n        value: function onPublicChange() {\n            this.setState(function (prevState) {\n                return {\n                    isPublicOnly: !prevState.isPublicOnly\n                };\n            });\n        }\n    }, {\n        key: 'onSearchTextChange',\n        value: function onSearchTextChange(e) {\n            this.setState({\n                searchText: e.target.value\n            });\n        }\n    }, {\n        key: 'reloadChannels',\n        value: function reloadChannels() {\n            var socket = this.props.socket;\n            socket.emit('get primary list of channels');\n        }\n    }, {\n        key: 'onJoinChannel',\n        value: function onJoinChannel(e) {\n            var nextChannel = e.target.name,\n                _props2 = this.props,\n                activeChannel = _props2.activeChannel,\n                dispatch = _props2.dispatch,\n                username = _props2.username,\n                socket = _props2.socket,\n                data = {\n                prevChannel: activeChannel,\n                nextChannel: nextChannel,\n                username: username\n            };\n\n            socket.emit('join channel', data);\n            dispatch((0, _Actions.joinChannel)(nextChannel));\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _this2 = this;\n\n            var toLowTrim = function toLowTrim(string) {\n                return string.trim().toLowerCase();\n            };\n            var channels = [];\n            if (this.props.channels) this.props.channels.forEach(function (c, idx) {\n                if (c.title.toLowerCase().indexOf(toLowTrim(_this2.state.searchText)) === -1 && c.creator.toLowerCase().indexOf(toLowTrim(_this2.state.searchText)) === -1) {\n                    return;\n                }\n                if (_this2.state.isPublicOnly && c.isPrivate) {\n                    return;\n                }\n                channels.push(_react2.default.createElement(ChannelRow, { channel: c,\n                    onJoinChannel: _this2.onJoinChannel,\n                    activeChannel: _this2.props.activeChannel,\n                    key: idx }));\n            });\n            return _react2.default.createElement(\n                'div',\n                { className: 'col-xs-12 col-sm-3' },\n                _react2.default.createElement(\n                    'aside',\n                    { className: 'side_bar' },\n                    _react2.default.createElement(_UserBox2.default, { user: { name: 'Daniil', family: 'korobskoy' } }),\n                    _react2.default.createElement(_SearchBar2.default, { isPublicOnly: this.state.isPublicOnly,\n                        searchText: this.state.searchText,\n                        onPublicChange: this.onPublicChange,\n                        onSearchTextChange: this.onSearchTextChange\n                    }),\n                    _react2.default.createElement(_CreateChannel2.default, { socket: this.props.socket }),\n                    _react2.default.createElement(\n                        'div',\n                        null,\n                        _react2.default.createElement('input', { className: 'reload_channels_button',\n                            type: 'button',\n                            onClick: this.reloadChannels,\n                            value: 'Refresh channels'\n                        }),\n                        _react2.default.createElement(\n                            'ul',\n                            { className: 'channels' },\n                            ' ',\n                            channels,\n                            ' '\n                        )\n                    )\n                )\n            );\n        }\n    }]);\n\n    return SideBar;\n}(_react2.default.Component);\n\nSideBar.propTypes = {\n    active: _react2.default.PropTypes.string,\n    username: _react2.default.PropTypes.string,\n    socket: _react2.default.PropTypes.object,\n    channels: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.shape({\n        title: _react2.default.PropTypes.string,\n        creator: _react2.default.PropTypes.string,\n        members: _react2.default.PropTypes.number,\n        isPrivate: _react2.default.PropTypes.bool,\n        socket: _react2.default.PropTypes.object\n    }))\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n    return {\n        activeChannel: state.channels.active,\n        channels: state.channels.list,\n        username: state.user.name\n    };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(_dispatch) {\n    return {\n        dispatch: function dispatch(data) {\n            _dispatch(data);\n        }\n    };\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SideBar);\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(909); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot apply hot update to \" + \"SideBar.jsx\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TaWRlQmFyL1NpZGVCYXIuanN4Pzk3NmMiXSwibmFtZXMiOlsiQ2hhbm5lbFJvdyIsInByb3BzIiwiY2hhbm5lbCIsImlzUHJpdmF0ZSIsInRpdGxlIiwiY3JlYXRvciIsIm1lbWJlcnMiLCJjbGFzc1RpdGxlIiwiYWN0aXZlQ2hhbm5lbCIsIm9uSm9pbkNoYW5uZWwiLCJTaWRlQmFyIiwic3RhdGUiLCJpc1B1YmxpY09ubHkiLCJzZWFyY2hUZXh0IiwiYmluZCIsIm9uUHVibGljQ2hhbmdlIiwib25TZWFyY2hUZXh0Q2hhbmdlIiwicmVsb2FkQ2hhbm5lbHMiLCJzb2NrZXQiLCJkaXNwYXRjaCIsIm9uIiwibGlzdCIsImNvbnNvbGUiLCJsb2ciLCJlbWl0Iiwic2V0U3RhdGUiLCJwcmV2U3RhdGUiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJuYW1lIiwidXNlcm5hbWUiLCJkYXRhIiwicHJldkNoYW5uZWwiLCJuZXh0Q2hhbm5lbCIsInRvTG93VHJpbSIsInN0cmluZyIsInRyaW0iLCJ0b0xvd2VyQ2FzZSIsImNoYW5uZWxzIiwiZm9yRWFjaCIsImMiLCJpZHgiLCJpbmRleE9mIiwicHVzaCIsImZhbWlseSIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsImFjdGl2ZSIsIlByb3BUeXBlcyIsIm9iamVjdCIsImFycmF5T2YiLCJzaGFwZSIsIm51bWJlciIsImJvb2wiLCJtYXBTdGF0ZVRvUHJvcHMiLCJ1c2VyIiwibWFwRGlzcGF0Y2hUb1Byb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFJQTs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQU5BOztBQVFBLElBQU1BLGFBQWEsU0FBYkEsVUFBYSxRQUFTO0FBQ3BCLHFCQUFhQyxNQUFNQyxPQUFOLENBQWNDLFNBQWQsR0FBMEIscUJBQTFCLEdBQWtELGFBQS9EO0FBQUEseUJBQ3dCRixNQUFNQyxPQUQ5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QUFmO0FBQUEsQ0FBM0I7O2tCQU1lLHlCQUFRdUIsZUFBUixFQUF5QkUsa0JBQXpCLEVBQTZDL0MsT0FBN0MsQyIsImZpbGUiOiI5ODMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgJy4vbWFpbi5sZXNzJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbi8vaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi8uLi9hY3Rpb25zJztcclxuXHJcbmltcG9ydCB7IHJlY2VpdmVDaGFubmVscywgam9pbkNoYW5uZWwgfSBmcm9tICcuLi8uLi9BY3Rpb25zJztcclxuXHJcbmltcG9ydCBVc2VyQm94IGZyb20gJy4uL1VzZXJCb3gnO1xyXG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gJy4uL1NlYXJjaEJhcic7XHJcbmltcG9ydCBDcmVhdGVDaGFubmVsIGZyb20gJy4uLy4uL2NvbnRhaW5lcnMvQ3JlYXRlQ2hhbm5lbCc7XHJcblxyXG5jb25zdCBDaGFubmVsUm93ID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IGNsYXNzVGl0bGUgPSBwcm9wcy5jaGFubmVsLmlzUHJpdmF0ZSA/ICdwcml2YXRlX2NoYW5uZWxfcm93JyA6ICdjaGFubmVsX3JvdycsXHJcbiAgeyB0aXRsZSwgY3JlYXRvciwgbWVtYmVycyB9ID0gcHJvcHMuY2hhbm5lbDtcclxuICByZXR1cm4gKFxyXG4gICAgPGxpIGNsYXNzTmFtZT17Y2xhc3NUaXRsZX0+XHJcbiAgICAgIDxkaXY+IFRpdGxlOiB7dGl0bGV9IDwvZGl2PiA8ZGl2PiBNZW1iZXJzOiB7bWVtYmVyc30gPC9kaXY+XHJcbiAgICAgIDxkaXY+IENyZWF0b3I6IHtjcmVhdG9yfSA8L2Rpdj4gXHJcbiAgICAgIDxkaXY+IFxyXG4gICAgICB7IC8vc2hvdyBidXR0b24gaWYgY2hhbm5lbCBpcyBub3QgYWN0aXZlO1xyXG4gICAgICAgICAgICB0aXRsZSAhPT0gcHJvcHMuYWN0aXZlQ2hhbm5lbCAmJiBcclxuICAgICAgICA8aW5wdXQgdHlwZT0nYnV0dG9uJyBcclxuICAgICAgICAgICAgICAgdmFsdWU9J0pvaW4gdGhlIGNoYXQnIFxyXG4gICAgICAgICAgICAgICBuYW1lPXt0aXRsZX1cclxuICAgICAgICAgICAgICAgb25DbGljaz17cHJvcHMub25Kb2luQ2hhbm5lbH1cclxuICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdqb2luX2NoYXRfYnV0dG9uJy8+XHJcbiAgICAgIH1cclxuICAgICAgIDwvZGl2PlxyXG4gICAgPC9saT5cclxuICApO1xyXG59O1xyXG5jbGFzcyBTaWRlQmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGlzUHVibGljT25seTpmYWxzZSxcclxuICAgICAgICAgICAgc2VhcmNoVGV4dDonJ1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm9uSm9pbkNoYW5uZWwgID0gdGhpcy5vbkpvaW5DaGFubmVsLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vblB1YmxpY0NoYW5nZSA9IHRoaXMub25QdWJsaWNDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uU2VhcmNoVGV4dENoYW5nZSA9IHRoaXMub25TZWFyY2hUZXh0Q2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5yZWxvYWRDaGFubmVscyA9IHRoaXMucmVsb2FkQ2hhbm5lbHMuYmluZCh0aGlzKTtcclxuICAgIH1cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIGNvbnN0IHsgc29ja2V0LCBkaXNwYXRjaCB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBzb2NrZXQub24oJ3ByaW1hcnkgbGlzdCBvZiBjaGFubmVscycsIChsaXN0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfQtNC40YHQv9Cw0YLRh9C40Lwg0YHQv9C40YHQvtC6INC60LDQvdCw0LvQvtCyJyArIGxpc3RbMF0ubWVtYmVycyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBkaXNwYXRjaChyZWNlaXZlQ2hhbm5lbHMobGlzdCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNvY2tldC5lbWl0KCdnZXQgcHJpbWFyeSBsaXN0IG9mIGNoYW5uZWxzJyk7XHJcbiAgICB9XHJcbiAgICBvblB1YmxpY0NoYW5nZSgpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBpc1B1YmxpY09ubHk6IXByZXZTdGF0ZS5pc1B1YmxpY09ubHlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgb25TZWFyY2hUZXh0Q2hhbmdlKGUpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHNlYXJjaFRleHQ6ZS50YXJnZXQudmFsdWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJlbG9hZENoYW5uZWxzKCkge1xyXG4gICAgICAgIGNvbnN0IHNvY2tldCA9IHRoaXMucHJvcHMuc29ja2V0O1xyXG4gICAgICAgIHNvY2tldC5lbWl0KCdnZXQgcHJpbWFyeSBsaXN0IG9mIGNoYW5uZWxzJyk7XHJcbiAgICB9XHJcbiAgICBvbkpvaW5DaGFubmVsKGUpIHtcclxuICAgICAgICBjb25zdCBuZXh0Q2hhbm5lbCA9IGUudGFyZ2V0Lm5hbWUsXHJcbiAgICAgICAgICAgICAgeyBhY3RpdmVDaGFubmVsLCBkaXNwYXRjaCwgdXNlcm5hbWUsIHNvY2tldCB9ID0gdGhpcy5wcm9wcyxcclxuICAgICAgICAgICAgICBkYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgICBwcmV2Q2hhbm5lbDogYWN0aXZlQ2hhbm5lbCxcclxuICAgICAgICAgICAgICAgICAgbmV4dENoYW5uZWwsXHJcbiAgICAgICAgICAgICAgICAgIHVzZXJuYW1lXHJcbiAgICAgICAgICAgICAgfTtcclxuICAgICAgICBzb2NrZXQuZW1pdCgnam9pbiBjaGFubmVsJywgZGF0YSk7XHJcbiAgICAgICAgZGlzcGF0Y2goam9pbkNoYW5uZWwobmV4dENoYW5uZWwpKTtcclxuICAgIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICAgIGNvbnN0IHRvTG93VHJpbSA9IChzdHJpbmcpID0+IHN0cmluZy50cmltKCkudG9Mb3dlckNhc2UoKTtcclxuICAgICAgY29uc3QgY2hhbm5lbHMgPSBbXTtcclxuICAgICAgaWYodGhpcy5wcm9wcy5jaGFubmVscylcclxuICAgICAgdGhpcy5wcm9wcy5jaGFubmVscy5mb3JFYWNoKChjLCBpZHgpID0+IHtcclxuICAgICAgICAgIGlmIChjLnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0b0xvd1RyaW0odGhpcy5zdGF0ZS5zZWFyY2hUZXh0KSkgPT09IC0xICYmIFxyXG4gICAgICAgICAgICAgIGMuY3JlYXRvci50b0xvd2VyQ2FzZSgpLmluZGV4T2YodG9Mb3dUcmltKHRoaXMuc3RhdGUuc2VhcmNoVGV4dCkpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmlzUHVibGljT25seSAmJiBjLmlzUHJpdmF0ZSl7XHJcbiAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjaGFubmVscy5wdXNoKCA8Q2hhbm5lbFJvdyBjaGFubmVsPXtjfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSm9pbkNoYW5uZWw9e3RoaXMub25Kb2luQ2hhbm5lbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUNoYW5uZWw9e3RoaXMucHJvcHMuYWN0aXZlQ2hhbm5lbH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2lkeH0vPiApO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wteHMtMTIgY29sLXNtLTMnPlxyXG4gICAgICAgICAgPGFzaWRlIGNsYXNzTmFtZT0nc2lkZV9iYXInPlxyXG4gICAgICAgICAgICA8VXNlckJveCB1c2VyPXt7bmFtZTonRGFuaWlsJywgZmFtaWx5Oidrb3JvYnNrb3knfX0vPlxyXG4gICAgICAgICAgICA8U2VhcmNoQmFyIGlzUHVibGljT25seT17dGhpcy5zdGF0ZS5pc1B1YmxpY09ubHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoVGV4dD17dGhpcy5zdGF0ZS5zZWFyY2hUZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgIG9uUHVibGljQ2hhbmdlPXt0aGlzLm9uUHVibGljQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgIG9uU2VhcmNoVGV4dENoYW5nZT17dGhpcy5vblNlYXJjaFRleHRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPENyZWF0ZUNoYW5uZWwgc29ja2V0PXt0aGlzLnByb3BzLnNvY2tldH0vPlxyXG4gICAgICAgICAgICA8ZGl2ID5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9J3JlbG9hZF9jaGFubmVsc19idXR0b24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0nYnV0dG9uJyBcclxuICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnJlbG9hZENoYW5uZWxzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPSdSZWZyZXNoIGNoYW5uZWxzJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT0nY2hhbm5lbHMnID4ge2NoYW5uZWxzfSA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvYXNpZGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuU2lkZUJhci5wcm9wVHlwZXMgPSB7XHJcbiAgICBhY3RpdmU6UmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHVzZXJuYW1lOlJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBzb2NrZXQ6UmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIGNoYW5uZWxzOiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXlPZihSZWFjdC5Qcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICAgIHRpdGxlOlJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgY3JlYXRvcjpSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIG1lbWJlcnM6UmVhY3QuUHJvcFR5cGVzLm51bWJlcixcclxuICAgICAgICBpc1ByaXZhdGU6UmVhY3QuUHJvcFR5cGVzLmJvb2wsXHJcbiAgICAgICAgc29ja2V0OlJlYWN0LlByb3BUeXBlcy5vYmplY3RcclxuICB9KSlcclxufVxyXG4gICAgXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcclxuICAgIGFjdGl2ZUNoYW5uZWw6IHN0YXRlLmNoYW5uZWxzLmFjdGl2ZSxcclxuICAgIGNoYW5uZWxzOnN0YXRlLmNoYW5uZWxzLmxpc3QsXHJcbiAgICB1c2VybmFtZTpzdGF0ZS51c2VyLm5hbWVcclxufSk7XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgIGRpc3BhdGNoKGRhdGEpe1xyXG4gICAgICAgZGlzcGF0Y2goZGF0YSk7XHJcbiAgIH1cclxufSk7XHJcbiAgICBcclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoU2lkZUJhcik7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvU2lkZUJhci9TaWRlQmFyLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})