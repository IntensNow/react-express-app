webpackHotUpdate(0,{

/***/ 944:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(2), RootInstanceProvider = __webpack_require__(10), ReactMount = __webpack_require__(12), React = __webpack_require__(98); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(98);\n\nvar _react2 = _interopRequireDefault(_react);\n\n__webpack_require__(945);\n\nvar _reactRedux = __webpack_require__(189);\n\nvar _UserBox = __webpack_require__(947);\n\nvar _UserBox2 = _interopRequireDefault(_UserBox);\n\nvar _SearchBar = __webpack_require__(951);\n\nvar _SearchBar2 = _interopRequireDefault(_SearchBar);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n//import * as actions from '../../actions';\n\nvar ChannelRow = function ChannelRow(props) {\n    var classTitle = props.channel.isPrivate ? 'private_channel_row' : 'channel_row',\n        _props$channel = props.channel,\n        title = _props$channel.title,\n        creator = _props$channel.creator,\n        members = _props$channel.members;\n\n    return _react2.default.createElement(\n        'li',\n        { className: classTitle },\n        _react2.default.createElement(\n            'div',\n            null,\n            ' Title: ',\n            title,\n            ' '\n        ),\n        ' ',\n        _react2.default.createElement(\n            'div',\n            null,\n            ' Members: ',\n            members,\n            ' '\n        ),\n        _react2.default.createElement(\n            'div',\n            null,\n            ' Creator: ',\n            creator,\n            ' '\n        ),\n        ' ',\n        _react2.default.createElement(\n            'div',\n            null,\n            ' ',\n            _react2.default.createElement('input', { type: 'button', value: 'Join the chat', className: 'join_chat_button' }),\n            ' '\n        )\n    );\n};\n\nvar SideBar = function (_React$Component) {\n    _inherits(SideBar, _React$Component);\n\n    function SideBar(props) {\n        _classCallCheck(this, SideBar);\n\n        var _this = _possibleConstructorReturn(this, (SideBar.__proto__ || Object.getPrototypeOf(SideBar)).call(this, props));\n\n        _this.state = {\n            isPublicOnly: false,\n            searchText: ''\n        };\n        _this.onSearchTextChange = _this.onSearchTextChange.bind(_this);\n        _this.onPublicChange = _this.onPublicChange.bind(_this);\n        _this.createChannel = _this.createChannel.bind(_this);\n        return _this;\n    }\n\n    _createClass(SideBar, [{\n        key: 'componentDidMount',\n        value: function componentDidMount() {\n            var _props = this.props,\n                socket = _props.socket,\n                dispatch = _props.dispatch;\n\n            socket.on('primary list of channels', function (data) {\n                console.log('диспатчим список каналов' + data[0].members);\n\n                dispatch({ type: 'ADD_CHANNELS', list: data });\n            });\n            socket.emit('get primary list of channels');\n        }\n    }, {\n        key: 'onPublicChange',\n        value: function onPublicChange() {\n            this.setState(function (prevState) {\n                return {\n                    isPublicOnly: !prevState.isPublicOnly\n                };\n            });\n        }\n    }, {\n        key: 'onSearchTextChange',\n        value: function onSearchTextChange(e) {\n            this.setState({\n                searchText: e.target.value\n            });\n        }\n    }, {\n        key: 'createChannel',\n        value: function createChannel(channelData) {\n            var socket = this.props.socket;\n            channelData = {\n                creator: 'John',\n                isPrivate: 'false',\n                members: ['Daniil', 'BoraBora'],\n                title: 'best chat ever'\n            };\n            socket.emit('create channel', channelData);\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _this2 = this;\n\n            var toLowTrim = function toLowTrim(string) {\n                return string.trim().toLowerCase();\n            };\n            var channels = [];\n            if (this.props.channels) this.props.channels.forEach(function (c, idx) {\n                if (c.title.toLowerCase().indexOf(toLowTrim(_this2.state.searchText)) === -1 && c.creator.toLowerCase().indexOf(toLowTrim(_this2.state.searchText)) === -1) {\n                    return;\n                }\n                if (_this2.state.isPublicOnly && c.isPrivate) {\n                    return;\n                }\n                channels.push(_react2.default.createElement(ChannelRow, { channel: c, key: idx }));\n            });\n            return _react2.default.createElement(\n                'div',\n                { className: 'col-xs-12 col-sm-3' },\n                _react2.default.createElement(\n                    'aside',\n                    { className: 'side_bar' },\n                    _react2.default.createElement(_UserBox2.default, { user: { name: 'Daniil', family: 'korobskoy' } }),\n                    _react2.default.createElement(_SearchBar2.default, { isPublicOnly: this.state.isPublicOnly,\n                        searchText: this.state.searchText,\n                        onPublicChange: this.onPublicChange,\n                        onSearchTextChange: this.onSearchTextChange\n                    }),\n                    _react2.default.createElement(\n                        'button',\n                        { onClick: this.createChannel },\n                        ' Create chat '\n                    ),\n                    _react2.default.createElement(\n                        'ul',\n                        { className: 'channels' },\n                        ' ',\n                        channels,\n                        ' '\n                    )\n                )\n            );\n        }\n    }]);\n\n    return SideBar;\n}(_react2.default.Component);\n\nSideBar.propTypes = {\n    channels: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.shape({\n        title: _react2.default.PropTypes.string,\n        creator: _react2.default.PropTypes.string,\n        members: _react2.default.PropTypes.number,\n        isPrivate: _react2.default.PropTypes.bool,\n        socket: _react2.default.PropTypes.object\n    }))\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n    return {\n        channels: state.channels.list\n    };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(_dispatch) {\n    return {\n        dispatch: function dispatch(data) {\n            _dispatch(data);\n        }\n    };\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SideBar);\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(884); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot apply hot update to \" + \"SideBar.js\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TaWRlQmFyL1NpZGVCYXIuanM/ZWZjYiJdLCJuYW1lcyI6WyJDaGFubmVsUm93IiwicHJvcHMiLCJjaGFubmVsIiwiaXNQcml2YXRlIiwidGl0bGUiLCJjcmVhdG9yIiwibWVtYmVycyIsImNsYXNzVGl0bGUiLCJTaWRlQmFyIiwic3RhdGUiLCJpc1B1YmxpY09ubHkiLCJzZWFyY2hUZXh0Iiwib25TZWFyY2hUZXh0Q2hhbmdlIiwiYmluZCIsIm9uUHVibGljQ2hhbmdlIiwiY3JlYXRlQ2hhbm5lbCIsInNvY2tldCIsImRpc3BhdGNoIiwib24iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInR5cGUiLCJsaXN0IiwiZW1pdCIsInNldFN0YXRlIiwicHJldlN0YXRlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiY2hhbm5lbERhdGEiLCJ0b0xvd1RyaW0iLCJzdHJpbmciLCJ0cmltIiwidG9Mb3dlckNhc2UiLCJjaGFubmVscyIsImZvckVhY2giLCJjIiwiaWR4IiwiaW5kZXhPZiIsInB1c2giLCJuYW1lIiwiZmFtaWx5IiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYXJyYXlPZiIsInNoYXBlIiwibnVtYmVyIiwiYm9vbCIsIm9iamVjdCIsIm1hcFN0YXRlVG9Qcm9wcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBSUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBSEE7O0FBS0EsSUFBTUEsYUFBYSxTQUFiQSxVQUFhLFFBQVM7QUFDcEIscUJBQWFDLE1BQU1DLE9BQU4sQ0FBY0MsU0FBZCxHQUEwQixxQkFBMUIsR0FBa0QsYUFBL0Q7QUFBQSx5QkFDd0JGLE1BQU1DLE9BRDlCO0FBQUEsUUFDSkUsS0FESSxrQkFDSkEsS0FESTtBQUFBLFFBQ0dDLE9BREgsa0JBQ0dBLE9BREg7QUFBQSxRQUNZQyxPQURaLGtCQUNZQSxPQURaOztBQUVOLFdBQ0U7QUFBQTtBQUFBLFVBQUksV0FBV0MsVUFBZjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQWNILGlCQUFkO0FBQUE7QUFBQSxTQURGO0FBQUE7QUFDOEI7QUFBQTtBQUFBO0FBQUE7QUFBZ0JFLG1CQUFoQjtBQUFBO0FBQUEsU0FEOUI7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFnQkQsbUJBQWhCO0FBQUE7QUFBQSxTQUZGO0FBQUE7QUFFa0M7QUFBQTtBQUFBO0FBQUE7QUFBTSxxREFBTyxNQUFLLFFBQVosRUFBcUIsT0FBTSxlQUEzQixFQUEyQyxXQUFVLGtCQUFyRCxHQUFOO0FBQUE7QUFBQTtBQUZsQyxLQURGO0FBTUQsQ0FURDs7SUFVTUcsTzs7O0FBQ0YscUJBQVlQLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxzSEFDVEEsS0FEUzs7QUFFZixjQUFLUSxLQUFMLEdBQWE7QUFDVEMsMEJBQWEsS0FESjtBQUVUQyx3QkFBVztBQUZGLFNBQWI7QUFJQSxjQUFLQyxrQkFBTCxHQUEwQixNQUFLQSxrQkFBTCxDQUF3QkMsSUFBeEIsT0FBMUI7QUFDQSxjQUFLQyxjQUFMLEdBQXNCLE1BQUtBLGNBQUwsQ0FBb0JELElBQXBCLE9BQXRCO0FBQ0EsY0FBS0UsYUFBTCxHQUFxQixNQUFLQSxhQUFMLENBQW1CRixJQUFuQixPQUFyQjtBQVJlO0FBU2xCOzs7OzRDQUNtQjtBQUFBLHlCQUNhLEtBQUtaLEtBRGxCO0FBQUEsZ0JBQ1JlLE1BRFEsVUFDUkEsTUFEUTtBQUFBLGdCQUNBQyxRQURBLFVBQ0FBLFFBREE7O0FBRWhCRCxtQkFBT0UsRUFBUCxDQUFVLDBCQUFWLEVBQXNDLFVBQUNDLElBQUQsRUFBVTtBQUM1Q0Msd0JBQVFDLEdBQVIsQ0FBWSw2QkFBNkJGLEtBQUssQ0FBTCxFQUFRYixPQUFqRDs7QUFFQVcseUJBQVMsRUFBQ0ssTUFBTSxjQUFQLEVBQXVCQyxNQUFNSixJQUE3QixFQUFUO0FBQ0gsYUFKRDtBQUtBSCxtQkFBT1EsSUFBUCxDQUFZLDhCQUFaO0FBQ0g7Ozt5Q0FDZ0I7QUFDYixpQkFBS0MsUUFBTCxDQUFjLHFCQUFhO0FBQ3ZCLHVCQUFPO0FBQ0hmLGtDQUFhLENBQUNnQixVQUFVaEI7QUFEckIsaUJBQVA7QUFHSCxhQUpEO0FBS0g7OzsyQ0FDa0JpQixDLEVBQUc7QUFDbEIsaUJBQUtGLFFBQUwsQ0FBYztBQUNOZCw0QkFBV2dCLEVBQUVDLE1BQUYsQ0FBU0M7QUFEZCxhQUFkO0FBR0g7OztzQ0FDYUMsVyxFQUFhO0FBQ3ZCLGdCQUFNZCxTQUFTLEtBQUtmLEtBQUwsQ0FBV2UsTUFBMUI7QUFDQWMsMEJBQWM7QUFDVnpCLHlCQUFTLE1BREM7QUFFVkYsMkJBQVcsT0FGRDtBQUdWRyx5QkFBUyxDQUFDLFFBQUQsRUFBVyxVQUFYLENBSEM7QUFJVkYsdUJBQU87QUFKRyxhQUFkO0FBTUFZLG1CQUFPUSxJQUFQLENBQVksZ0JBQVosRUFBOEJNLFdBQTlCO0FBQ0g7OztpQ0FDTTtBQUFBOztBQUNMLGdCQUFNQyxZQUFZLFNBQVpBLFNBQVksQ0FBQ0MsTUFBRDtBQUFBLHVCQUFZQSxPQUFPQyxJQUFQLEdBQWNDLFdBQWQsRUFBWjtBQUFBLGFBQWxCO0FBQ0EsZ0JBQU1DLFdBQVcsRUFBakI7QUFDQSxnQkFBRyxLQUFLbEMsS0FBTCxDQUFXa0MsUUFBZCxFQUNBLEtBQUtsQyxLQUFMLENBQVdrQyxRQUFYLENBQW9CQyxPQUFwQixDQUE0QixVQUFDQyxDQUFELEVBQUlDLEdBQUosRUFBWTtBQUNwQyxvQkFBSUQsRUFBRWpDLEtBQUYsQ0FBUThCLFdBQVIsR0FBc0JLLE9BQXRCLENBQThCUixVQUFVLE9BQUt0QixLQUFMLENBQVdFLFVBQXJCLENBQTlCLE1BQW9FLENBQUMsQ0FBckUsSUFDQTBCLEVBQUVoQyxPQUFGLENBQVU2QixXQUFWLEdBQXdCSyxPQUF4QixDQUFnQ1IsVUFBVSxPQUFLdEIsS0FBTCxDQUFXRSxVQUFyQixDQUFoQyxNQUFzRSxDQUFDLENBRDNFLEVBQzhFO0FBQzFFO0FBQ0g7QUFDRCxvQkFBSSxPQUFLRixLQUFMLENBQVdDLFlBQVgsSUFBMkIyQixFQUFFbEMsU0FBakMsRUFBMkM7QUFDdkM7QUFDSDtBQUNEZ0MseUJBQVNLLElBQVQsQ0FBZSw4QkFBQyxVQUFELElBQVksU0FBU0gsQ0FBckIsRUFBd0IsS0FBS0MsR0FBN0IsR0FBZjtBQUNMLGFBVEM7QUFVRixtQkFDSTtBQUFBO0FBQUEsa0JBQUssV0FBVSxvQkFBZjtBQUNFO0FBQUE7QUFBQSxzQkFBTyxXQUFVLFVBQWpCO0FBQ0UsdUVBQVMsTUFBTSxFQUFDRyxNQUFLLFFBQU4sRUFBZ0JDLFFBQU8sV0FBdkIsRUFBZixHQURGO0FBRUUseUVBQVcsY0FBYyxLQUFLakMsS0FBTCxDQUFXQyxZQUFwQztBQUNXLG9DQUFZLEtBQUtELEtBQUwsQ0FBV0UsVUFEbEM7QUFFVyx3Q0FBZ0IsS0FBS0csY0FGaEM7QUFHVyw0Q0FBb0IsS0FBS0Y7QUFIcEMsc0JBRkY7QUFPRTtBQUFBO0FBQUEsMEJBQVEsU0FBUyxLQUFLRyxhQUF0QjtBQUFBO0FBQUEscUJBUEY7QUFRRTtBQUFBO0FBQUEsMEJBQUksV0FBVSxVQUFkO0FBQUE7QUFBNEJvQixnQ0FBNUI7QUFBQTtBQUFBO0FBUkY7QUFERixhQURKO0FBY0Q7Ozs7RUF0RW1CLGdCQUFNUSxTOztBQXlFNUJuQyxRQUFRb0MsU0FBUixHQUFvQjtBQUNsQlQsY0FBVSxnQkFBTVUsU0FBTixDQUFnQkMsT0FBaEIsQ0FBd0IsZ0JBQU1ELFNBQU4sQ0FBZ0JFLEtBQWhCLENBQXNCO0FBQ3REM0MsZUFBTSxnQkFBTXlDLFNBQU4sQ0FBZ0JiLE1BRGdDO0FBRXREM0IsaUJBQVEsZ0JBQU13QyxTQUFOLENBQWdCYixNQUY4QjtBQUd0RDFCLGlCQUFRLGdCQUFNdUMsU0FBTixDQUFnQkcsTUFIOEI7QUFJdEQ3QyxtQkFBVSxnQkFBTTBDLFNBQU4sQ0FBZ0JJLElBSjRCO0FBS3REakMsZ0JBQU8sZ0JBQU02QixTQUFOLENBQWdCSztBQUwrQixLQUF0QixDQUF4QjtBQURRLENBQXBCOztBQVVBLElBQU1DLGtCQUFrQixTQUFsQkEsZUFBa0IsQ0FBQzFDLEtBQUQ7QUFBQSxXQUFZO0FBQ2hDMEIsa0JBQVMxQixNQUFNMEIsUUFBTixDQUFlWjtBQURRLEtBQVo7QUFBQSxDQUF4Qjs7QUFJQSxJQUFNNkIscUJBQXFCLFNBQXJCQSxrQkFBcUIsQ0FBQ25DLFNBQUQ7QUFBQSxXQUFlO0FBQ3ZDQSxnQkFEdUMsb0JBQzlCRSxJQUQ4QixFQUN6QjtBQUNWRixzQkFBU0UsSUFBVDtBQUNIO0FBSHNDLEtBQWY7QUFBQSxDQUEzQjs7a0JBTWUseUJBQVFnQyxlQUFSLEVBQXlCQyxrQkFBekIsRUFBNkM1QyxPQUE3QyxDIiwiZmlsZSI6Ijk0NC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAnLi9tYWluLmxlc3MnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuLy9pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4uLy4uL2FjdGlvbnMnO1xyXG5cclxuaW1wb3J0IFVzZXJCb3ggZnJvbSAnLi4vVXNlckJveCc7XHJcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSAnLi4vU2VhcmNoQmFyJztcclxuXHJcbmNvbnN0IENoYW5uZWxSb3cgPSBwcm9wcyA9PiB7XHJcbiAgY29uc3QgY2xhc3NUaXRsZSA9IHByb3BzLmNoYW5uZWwuaXNQcml2YXRlID8gJ3ByaXZhdGVfY2hhbm5lbF9yb3cnIDogJ2NoYW5uZWxfcm93JyxcclxuICB7IHRpdGxlLCBjcmVhdG9yLCBtZW1iZXJzIH0gPSBwcm9wcy5jaGFubmVsO1xyXG4gIHJldHVybiAoXHJcbiAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc1RpdGxlfT5cclxuICAgICAgPGRpdj4gVGl0bGU6IHt0aXRsZX0gPC9kaXY+IDxkaXY+IE1lbWJlcnM6IHttZW1iZXJzfSA8L2Rpdj5cclxuICAgICAgPGRpdj4gQ3JlYXRvcjoge2NyZWF0b3J9IDwvZGl2PiA8ZGl2PiA8aW5wdXQgdHlwZT0nYnV0dG9uJyB2YWx1ZT0nSm9pbiB0aGUgY2hhdCcgY2xhc3NOYW1lPSdqb2luX2NoYXRfYnV0dG9uJy8+IDwvZGl2PlxyXG4gICAgPC9saT5cclxuICApO1xyXG59O1xyXG5jbGFzcyBTaWRlQmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGlzUHVibGljT25seTpmYWxzZSxcclxuICAgICAgICAgICAgc2VhcmNoVGV4dDonJ1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm9uU2VhcmNoVGV4dENoYW5nZSA9IHRoaXMub25TZWFyY2hUZXh0Q2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5vblB1YmxpY0NoYW5nZSA9IHRoaXMub25QdWJsaWNDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZUNoYW5uZWwgPSB0aGlzLmNyZWF0ZUNoYW5uZWwuYmluZCh0aGlzKTtcclxuICAgIH1cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIGNvbnN0IHsgc29ja2V0LCBkaXNwYXRjaCB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBzb2NrZXQub24oJ3ByaW1hcnkgbGlzdCBvZiBjaGFubmVscycsIChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfQtNC40YHQv9Cw0YLRh9C40Lwg0YHQv9C40YHQvtC6INC60LDQvdCw0LvQvtCyJyArIGRhdGFbMF0ubWVtYmVycyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ0FERF9DSEFOTkVMUycsIGxpc3Q6IGRhdGF9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzb2NrZXQuZW1pdCgnZ2V0IHByaW1hcnkgbGlzdCBvZiBjaGFubmVscycpO1xyXG4gICAgfVxyXG4gICAgb25QdWJsaWNDaGFuZ2UoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgaXNQdWJsaWNPbmx5OiFwcmV2U3RhdGUuaXNQdWJsaWNPbmx5XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIG9uU2VhcmNoVGV4dENoYW5nZShlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBzZWFyY2hUZXh0OmUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVDaGFubmVsKGNoYW5uZWxEYXRhKSB7XHJcbiAgICAgICAgY29uc3Qgc29ja2V0ID0gdGhpcy5wcm9wcy5zb2NrZXQ7XHJcbiAgICAgICAgY2hhbm5lbERhdGEgPSB7XHJcbiAgICAgICAgICAgIGNyZWF0b3I6ICdKb2huJyxcclxuICAgICAgICAgICAgaXNQcml2YXRlOiAnZmFsc2UnLFxyXG4gICAgICAgICAgICBtZW1iZXJzOiBbJ0RhbmlpbCcsICdCb3JhQm9yYSddLFxyXG4gICAgICAgICAgICB0aXRsZTogJ2Jlc3QgY2hhdCBldmVyJyxcclxuICAgICAgICB9XHJcbiAgICAgICAgc29ja2V0LmVtaXQoJ2NyZWF0ZSBjaGFubmVsJywgY2hhbm5lbERhdGEpO1xyXG4gICAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgICAgY29uc3QgdG9Mb3dUcmltID0gKHN0cmluZykgPT4gc3RyaW5nLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICBjb25zdCBjaGFubmVscyA9IFtdO1xyXG4gICAgICBpZih0aGlzLnByb3BzLmNoYW5uZWxzKVxyXG4gICAgICB0aGlzLnByb3BzLmNoYW5uZWxzLmZvckVhY2goKGMsIGlkeCkgPT4ge1xyXG4gICAgICAgICAgaWYgKGMudGl0bGUudG9Mb3dlckNhc2UoKS5pbmRleE9mKHRvTG93VHJpbSh0aGlzLnN0YXRlLnNlYXJjaFRleHQpKSA9PT0gLTEgJiYgXHJcbiAgICAgICAgICAgICAgYy5jcmVhdG9yLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0b0xvd1RyaW0odGhpcy5zdGF0ZS5zZWFyY2hUZXh0KSkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKHRoaXMuc3RhdGUuaXNQdWJsaWNPbmx5ICYmIGMuaXNQcml2YXRlKXtcclxuICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNoYW5uZWxzLnB1c2goIDxDaGFubmVsUm93IGNoYW5uZWw9e2N9IGtleT17aWR4fS8+ICk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC14cy0xMiBjb2wtc20tMyc+XHJcbiAgICAgICAgICA8YXNpZGUgY2xhc3NOYW1lPSdzaWRlX2Jhcic+XHJcbiAgICAgICAgICAgIDxVc2VyQm94IHVzZXI9e3tuYW1lOidEYW5paWwnLCBmYW1pbHk6J2tvcm9ic2tveSd9fS8+XHJcbiAgICAgICAgICAgIDxTZWFyY2hCYXIgaXNQdWJsaWNPbmx5PXt0aGlzLnN0YXRlLmlzUHVibGljT25seX1cclxuICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hUZXh0PXt0aGlzLnN0YXRlLnNlYXJjaFRleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgb25QdWJsaWNDaGFuZ2U9e3RoaXMub25QdWJsaWNDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgb25TZWFyY2hUZXh0Q2hhbmdlPXt0aGlzLm9uU2VhcmNoVGV4dENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuY3JlYXRlQ2hhbm5lbH0+IENyZWF0ZSBjaGF0IDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdjaGFubmVscycgPiB7Y2hhbm5lbHN9IDwvdWw+XHJcbiAgICAgICAgICA8L2FzaWRlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcblNpZGVCYXIucHJvcFR5cGVzID0ge1xyXG4gIGNoYW5uZWxzOiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXlPZihSZWFjdC5Qcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgdGl0bGU6UmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGNyZWF0b3I6UmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIG1lbWJlcnM6UmVhY3QuUHJvcFR5cGVzLm51bWJlcixcclxuICAgIGlzUHJpdmF0ZTpSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcclxuICAgIHNvY2tldDpSZWFjdC5Qcm9wVHlwZXMub2JqZWN0XHJcbiAgfSkpXHJcbn1cclxuICAgIFxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XHJcbiAgICBjaGFubmVsczpzdGF0ZS5jaGFubmVscy5saXN0XHJcbn0pO1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xyXG4gICBkaXNwYXRjaChkYXRhKXtcclxuICAgICAgIGRpc3BhdGNoKGRhdGEpO1xyXG4gICB9XHJcbn0pO1xyXG4gICAgXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFNpZGVCYXIpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1NpZGVCYXIvU2lkZUJhci5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})