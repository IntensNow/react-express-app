webpackHotUpdate(0,{

/***/ 944:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(2), RootInstanceProvider = __webpack_require__(10), ReactMount = __webpack_require__(12), React = __webpack_require__(98); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(98);\n\nvar _react2 = _interopRequireDefault(_react);\n\n__webpack_require__(945);\n\nvar _reactRedux = __webpack_require__(189);\n\nvar _UserBox = __webpack_require__(947);\n\nvar _UserBox2 = _interopRequireDefault(_UserBox);\n\nvar _SearchBar = __webpack_require__(951);\n\nvar _SearchBar2 = _interopRequireDefault(_SearchBar);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n//import * as actions from '../../actions';\n\nvar ChannelRow = function ChannelRow(props) {\n    var classTitle = props.channel.isPrivate ? 'private_channel_row' : 'channel_row',\n        _props$channel = props.channel,\n        title = _props$channel.title,\n        creator = _props$channel.creator,\n        members = _props$channel.members;\n\n    return _react2.default.createElement(\n        'li',\n        { className: classTitle },\n        _react2.default.createElement(\n            'div',\n            null,\n            ' Title: ',\n            title,\n            ' '\n        ),\n        ' ',\n        _react2.default.createElement(\n            'div',\n            null,\n            ' Members: ',\n            members,\n            ' '\n        ),\n        _react2.default.createElement(\n            'div',\n            null,\n            ' Creator: ',\n            creator,\n            ' '\n        ),\n        ' ',\n        _react2.default.createElement(\n            'div',\n            null,\n            ' ',\n            _react2.default.createElement('input', { type: 'button', value: 'Join the chat', className: 'join_chat_button' }),\n            ' '\n        )\n    );\n};\n\nvar SideBar = function (_React$Component) {\n    _inherits(SideBar, _React$Component);\n\n    function SideBar(props) {\n        _classCallCheck(this, SideBar);\n\n        var _this = _possibleConstructorReturn(this, (SideBar.__proto__ || Object.getPrototypeOf(SideBar)).call(this, props));\n\n        _this.state = {\n            isPublicOnly: false,\n            searchText: ''\n        };\n        _this.onSearchTextChange = _this.onSearchTextChange.bind(_this);\n        _this.onPublicChange = _this.onPublicChange.bind(_this);\n        _this.createChannel = _this.createChannel.bind(_this);\n        return _this;\n    }\n\n    _createClass(SideBar, [{\n        key: 'componentDidMount',\n        value: function componentDidMount() {\n            var _props = this.props,\n                socket = _props.socket,\n                dispatch = _props.dispatch;\n\n            socket.on('primary list of channels', function (data) {\n                console.log('диспатчим список каналов' + data.list instanceof Array);\n\n                dispatch({ type: 'ADD_CHANNELS', list: data.list });\n            });\n            socket.emit('get primary list of channels');\n        }\n    }, {\n        key: 'onPublicChange',\n        value: function onPublicChange() {\n            this.setState(function (prevState) {\n                return {\n                    isPublicOnly: !prevState.isPublicOnly\n                };\n            });\n        }\n    }, {\n        key: 'onSearchTextChange',\n        value: function onSearchTextChange(e) {\n            this.setState({\n                searchText: e.target.value\n            });\n        }\n    }, {\n        key: 'createChannel',\n        value: function createChannel(channelData) {\n            var socket = this.props.socket;\n            channelData = {\n                creator: 'John',\n                isPrivate: 'false',\n                members: ['Daniil', 'BoraBora'],\n                title: 'best chat ever'\n            };\n            socket.emit('create channel', channelData);\n            socket.emit('is user exist', { login: 'Balance' });\n            socket.emit('get primary list of channels');\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _this2 = this;\n\n            var toLowTrim = function toLowTrim(string) {\n                return string.trim().toLowerCase();\n            };\n            var channels = [];\n            if (this.props.channels) this.props.channels.forEach(function (c, idx) {\n                if (c.title.toLowerCase().indexOf(toLowTrim(_this2.state.searchText)) === -1 && c.creator.toLowerCase().indexOf(toLowTrim(_this2.state.searchText)) === -1) {\n                    return;\n                }\n                if (_this2.state.isPublicOnly && c.isPrivate) {\n                    return;\n                }\n                channels.push(_react2.default.createElement(ChannelRow, { channel: c, key: idx }));\n            });\n            return _react2.default.createElement(\n                'div',\n                { className: 'col-xs-12 col-sm-3' },\n                _react2.default.createElement(\n                    'aside',\n                    { className: 'side_bar' },\n                    _react2.default.createElement(_UserBox2.default, { user: { name: 'Daniil', family: 'korobskoy' } }),\n                    _react2.default.createElement(_SearchBar2.default, { isPublicOnly: this.state.isPublicOnly,\n                        searchText: this.state.searchText,\n                        onPublicChange: this.onPublicChange,\n                        onSearchTextChange: this.onSearchTextChange\n                    }),\n                    _react2.default.createElement(\n                        'button',\n                        { onClick: this.createChannel },\n                        ' Create chat '\n                    ),\n                    _react2.default.createElement(\n                        'ul',\n                        { className: 'channels' },\n                        ' ',\n                        channels,\n                        ' '\n                    )\n                )\n            );\n        }\n    }]);\n\n    return SideBar;\n}(_react2.default.Component);\n\nSideBar.propTypes = {\n    channels: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.shape({\n        title: _react2.default.PropTypes.string,\n        creator: _react2.default.PropTypes.string,\n        members: _react2.default.PropTypes.number,\n        isPrivate: _react2.default.PropTypes.bool,\n        socket: _react2.default.PropTypes.object\n    }))\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n    return {\n        channels: state.channels.list\n    };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(_dispatch) {\n    return {\n        dispatch: function dispatch(data) {\n            _dispatch(data);\n        }\n    };\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SideBar);\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(884); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot apply hot update to \" + \"SideBar.js\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TaWRlQmFyL1NpZGVCYXIuanM/ZWZjYiJdLCJuYW1lcyI6WyJDaGFubmVsUm93IiwicHJvcHMiLCJjaGFubmVsIiwiaXNQcml2YXRlIiwidGl0bGUiLCJjcmVhdG9yIiwibWVtYmVycyIsImNsYXNzVGl0bGUiLCJTaWRlQmFyIiwic3RhdGUiLCJpc1B1YmxpY09ubHkiLCJzZWFyY2hUZXh0Iiwib25TZWFyY2hUZXh0Q2hhbmdlIiwiYmluZCIsIm9uUHVibGljQ2hhbmdlIiwiY3JlYXRlQ2hhbm5lbCIsInNvY2tldCIsImRpc3BhdGNoIiwib24iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImxpc3QiLCJBcnJheSIsInR5cGUiLCJlbWl0Iiwic2V0U3RhdGUiLCJwcmV2U3RhdGUiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJjaGFubmVsRGF0YSIsImxvZ2luIiwidG9Mb3dUcmltIiwic3RyaW5nIiwidHJpbSIsInRvTG93ZXJDYXNlIiwiY2hhbm5lbHMiLCJmb3JFYWNoIiwiYyIsImlkeCIsImluZGV4T2YiLCJwdXNoIiwibmFtZSIsImZhbWlseSIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFycmF5T2YiLCJzaGFwZSIsIm51bWJlciIsImJvb2wiLCJvYmplY3QiLCJtYXBTdGF0ZVRvUHJvcHMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUlBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUhBOztBQUtBLElBQU1BLGFBQWEsU0FBYkEsVUFBYSxRQUFTO0FBQ3BCLHFCQUFhQyxNQUFNQyxPQUFOLENBQWNDLFNBQWQsR0FBMEIscUJBQTFCLEdBQWtELGFBQS9EO0FBQUEseUJBQ3dCRixNQUFNQyxPQUQ5QjtBQUFBLFFBQ0pFLEtBREksa0JBQ0pBLEtBREk7QUFBQSxRQUNHQyxPQURILGtCQUNHQSxPQURIO0FBQUEsUUFD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RG5DLGdCQUFPLGdCQUFNK0IsU0FBTixDQUFnQks7QUFMK0IsS0FBdEIsQ0FBeEI7QUFEUSxDQUFwQjs7QUFVQSxJQUFNQyxrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUM1QyxLQUFEO0FBQUEsV0FBWTtBQUNoQzRCLGtCQUFTNUIsTUFBTTRCLFFBQU4sQ0FBZWY7QUFEUSxLQUFaO0FBQUEsQ0FBeEI7O0FBSUEsSUFBTWdDLHFCQUFxQixTQUFyQkEsa0JBQXFCLENBQUNyQyxTQUFEO0FBQUEsV0FBZTtBQUN2Q0EsZ0JBRHVDLG9CQUM5QkUsSUFEOEIsRUFDekI7QUFDVkYsc0JBQVNFLElBQVQ7QUFDSDtBQUhzQyxLQUFmO0FBQUEsQ0FBM0I7O2tCQU1lLHlCQUFRa0MsZUFBUixFQUF5QkMsa0JBQXpCLEVBQTZDOUMsT0FBN0MsQyIsImZpbGUiOiI5NDQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgJy4vbWFpbi5sZXNzJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbi8vaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi8uLi9hY3Rpb25zJztcclxuXHJcbmltcG9ydCBVc2VyQm94IGZyb20gJy4uL1VzZXJCb3gnO1xyXG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gJy4uL1NlYXJjaEJhcic7XHJcblxyXG5jb25zdCBDaGFubmVsUm93ID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IGNsYXNzVGl0bGUgPSBwcm9wcy5jaGFubmVsLmlzUHJpdmF0ZSA/ICdwcml2YXRlX2NoYW5uZWxfcm93JyA6ICdjaGFubmVsX3JvdycsXHJcbiAgeyB0aXRsZSwgY3JlYXRvciwgbWVtYmVycyB9ID0gcHJvcHMuY2hhbm5lbDtcclxuICByZXR1cm4gKFxyXG4gICAgPGxpIGNsYXNzTmFtZT17Y2xhc3NUaXRsZX0+XHJcbiAgICAgIDxkaXY+IFRpdGxlOiB7dGl0bGV9IDwvZGl2PiA8ZGl2PiBNZW1iZXJzOiB7bWVtYmVyc30gPC9kaXY+XHJcbiAgICAgIDxkaXY+IENyZWF0b3I6IHtjcmVhdG9yfSA8L2Rpdj4gPGRpdj4gPGlucHV0IHR5cGU9J2J1dHRvbicgdmFsdWU9J0pvaW4gdGhlIGNoYXQnIGNsYXNzTmFtZT0nam9pbl9jaGF0X2J1dHRvbicvPiA8L2Rpdj5cclxuICAgIDwvbGk+XHJcbiAgKTtcclxufTtcclxuY2xhc3MgU2lkZUJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBpc1B1YmxpY09ubHk6ZmFsc2UsXHJcbiAgICAgICAgICAgIHNlYXJjaFRleHQ6JydcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5vblNlYXJjaFRleHRDaGFuZ2UgPSB0aGlzLm9uU2VhcmNoVGV4dENoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25QdWJsaWNDaGFuZ2UgPSB0aGlzLm9uUHVibGljQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVDaGFubmVsID0gdGhpcy5jcmVhdGVDaGFubmVsLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICBjb25zdCB7IHNvY2tldCwgZGlzcGF0Y2ggfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgc29ja2V0Lm9uKCdwcmltYXJ5IGxpc3Qgb2YgY2hhbm5lbHMnLCAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn0LTQuNGB0L/QsNGC0YfQuNC8INGB0L/QuNGB0L7QuiDQutCw0L3QsNC70L7QsicgKyBkYXRhLmxpc3QgaW5zdGFuY2VvZiBBcnJheSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ0FERF9DSEFOTkVMUycsIGxpc3Q6IGRhdGEubGlzdH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNvY2tldC5lbWl0KCdnZXQgcHJpbWFyeSBsaXN0IG9mIGNoYW5uZWxzJyk7XHJcbiAgICB9XHJcbiAgICBvblB1YmxpY0NoYW5nZSgpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBpc1B1YmxpY09ubHk6IXByZXZTdGF0ZS5pc1B1YmxpY09ubHlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgb25TZWFyY2hUZXh0Q2hhbmdlKGUpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHNlYXJjaFRleHQ6ZS50YXJnZXQudmFsdWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGNyZWF0ZUNoYW5uZWwoY2hhbm5lbERhdGEpIHtcclxuICAgICAgICBjb25zdCBzb2NrZXQgPSB0aGlzLnByb3BzLnNvY2tldDtcclxuICAgICAgICBjaGFubmVsRGF0YSA9IHtcclxuICAgICAgICAgICAgY3JlYXRvcjogJ0pvaG4nLFxyXG4gICAgICAgICAgICBpc1ByaXZhdGU6ICdmYWxzZScsXHJcbiAgICAgICAgICAgIG1lbWJlcnM6IFsnRGFuaWlsJywgJ0JvcmFCb3JhJ10sXHJcbiAgICAgICAgICAgIHRpdGxlOiAnYmVzdCBjaGF0IGV2ZXInLFxyXG4gICAgICAgIH1cclxuICAgICAgICBzb2NrZXQuZW1pdCgnY3JlYXRlIGNoYW5uZWwnLCBjaGFubmVsRGF0YSk7XHJcbiAgICAgICAgc29ja2V0LmVtaXQoJ2lzIHVzZXIgZXhpc3QnLCB7IGxvZ2luOidCYWxhbmNlJyB9KTtcclxuICAgICAgICBzb2NrZXQuZW1pdCgnZ2V0IHByaW1hcnkgbGlzdCBvZiBjaGFubmVscycpO1xyXG5cclxuICAgIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICAgIGNvbnN0IHRvTG93VHJpbSA9IChzdHJpbmcpID0+IHN0cmluZy50cmltKCkudG9Mb3dlckNhc2UoKTtcclxuICAgICAgY29uc3QgY2hhbm5lbHMgPSBbXTtcclxuICAgICAgaWYodGhpcy5wcm9wcy5jaGFubmVscylcclxuICAgICAgdGhpcy5wcm9wcy5jaGFubmVscy5mb3JFYWNoKChjLCBpZHgpID0+IHtcclxuICAgICAgICAgIGlmIChjLnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0b0xvd1RyaW0odGhpcy5zdGF0ZS5zZWFyY2hUZXh0KSkgPT09IC0xICYmIFxyXG4gICAgICAgICAgICAgIGMuY3JlYXRvci50b0xvd2VyQ2FzZSgpLmluZGV4T2YodG9Mb3dUcmltKHRoaXMuc3RhdGUuc2VhcmNoVGV4dCkpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmlzUHVibGljT25seSAmJiBjLmlzUHJpdmF0ZSl7XHJcbiAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjaGFubmVscy5wdXNoKCA8Q2hhbm5lbFJvdyBjaGFubmVsPXtjfSBrZXk9e2lkeH0vPiApO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wteHMtMTIgY29sLXNtLTMnPlxyXG4gICAgICAgICAgPGFzaWRlIGNsYXNzTmFtZT0nc2lkZV9iYXInPlxyXG4gICAgICAgICAgICA8VXNlckJveCB1c2VyPXt7bmFtZTonRGFuaWlsJywgZmFtaWx5Oidrb3JvYnNrb3knfX0vPlxyXG4gICAgICAgICAgICA8U2VhcmNoQmFyIGlzUHVibGljT25seT17dGhpcy5zdGF0ZS5pc1B1YmxpY09ubHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoVGV4dD17dGhpcy5zdGF0ZS5zZWFyY2hUZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgIG9uUHVibGljQ2hhbmdlPXt0aGlzLm9uUHVibGljQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgIG9uU2VhcmNoVGV4dENoYW5nZT17dGhpcy5vblNlYXJjaFRleHRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmNyZWF0ZUNoYW5uZWx9PiBDcmVhdGUgY2hhdCA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT0nY2hhbm5lbHMnID4ge2NoYW5uZWxzfSA8L3VsPlxyXG4gICAgICAgICAgPC9hc2lkZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5TaWRlQmFyLnByb3BUeXBlcyA9IHtcclxuICBjaGFubmVsczogUmVhY3QuUHJvcFR5cGVzLmFycmF5T2YoUmVhY3QuUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgIHRpdGxlOlJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBjcmVhdG9yOlJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBtZW1iZXJzOlJlYWN0LlByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBpc1ByaXZhdGU6UmVhY3QuUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBzb2NrZXQ6UmVhY3QuUHJvcFR5cGVzLm9iamVjdFxyXG4gIH0pKVxyXG59XHJcbiAgICBcclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG4gICAgY2hhbm5lbHM6c3RhdGUuY2hhbm5lbHMubGlzdFxyXG59KTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcclxuICAgZGlzcGF0Y2goZGF0YSl7XHJcbiAgICAgICBkaXNwYXRjaChkYXRhKTtcclxuICAgfVxyXG59KTtcclxuICAgIFxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShTaWRlQmFyKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9TaWRlQmFyL1NpZGVCYXIuanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }

})