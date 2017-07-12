(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return webpackJsonp([0],{

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(5);
module.exports = __webpack_require__(4);


/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var _createClass = function () {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
		}
	}return function (Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	};
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(3);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _jquery = __webpack_require__(2);

var _jquery2 = _interopRequireDefault(_jquery);

var _musicApp = __webpack_require__(7);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

function _possibleConstructorReturn(self, call) {
	if (!self) {
		throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	}return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
	if (typeof superClass !== "function" && superClass !== null) {
		throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Signup = function (_React$Component) {
	_inherits(Signup, _React$Component);

	//var that=this;
	function Signup(props) {
		_classCallCheck(this, Signup);

		var _this = _possibleConstructorReturn(this, (Signup.__proto__ || Object.getPrototypeOf(Signup)).call(this, props));

		_this.state = {
			isLoggedin: false
		};

		_this.changePage = _this.changePage.bind(_this);
		_this.loginPage = _this.loginPage.bind(_this);
		return _this;
	}

	_createClass(Signup, [{
		key: 'changePage',
		value: function changePage() {
			//console.log('eefr');
			var username = document.getElementById('username').value;
			var password = document.getElementById('password').value;

			var that = this;

			_jquery2.default.ajax({
				type: 'POST',
				url: '/newuser',
				data: {
					username: username,
					password: password
				},
				success: function success(result) {
					console.log(result);
					if (result === 1) {

						that.setState({
							isLoggedin: true
						});
					} else {
						alert("We already have someone with the same username.");
					}
				}
			});
		}
	}, {
		key: 'loginPage',
		value: function loginPage() {
			var username = document.getElementById('username').value;
			var password = document.getElementById('password').value;
			var that = this;
			_jquery2.default.ajax({
				type: 'POST',
				url: '/checkuser',
				data: {
					username: username,
					password: password
				},
				success: function success(result) {
					if (result) {
						that.setState({
							isLoggedin: true
						});
					} else {
						alert("try again");
					}
				}
			});
		}
	}, {
		key: 'render',
		value: function render() {
			if (this.state.isLoggedin) {
				return _react2.default.createElement(_musicApp.MusicApp, null);
			} else {
				return _react2.default.createElement('div', null, _react2.default.createElement('input', { type: 'text', id: 'username', placeholder: 'username' }), _react2.default.createElement('input', { type: 'password', id: 'password', placeholder: 'password' }), _react2.default.createElement('input', { type: 'button', id: 'signup', value: 'Signup', onClick: this.changePage }), _react2.default.createElement('input', { type: 'button', id: 'login', value: 'login', onClick: this.loginPage }));
			}
		}
	}]);

	return Signup;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(Signup, null), document.getElementById('container'));

 ;(function register() { // eslint-disable-line no-extra-semi /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\aayushi.sinha\\Documents\\Git Repo\\musik\\public\\js\\signup.js"); return; } for (var key in module.exports) { // eslint-disable-line no-restricted-syntax if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\aayushi.sinha\\Documents\\Git Repo\\musik\\public\\js\\signup.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var _createClass = function () {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
		}
	}return function (Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	};
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(3);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _jquery = __webpack_require__(2);

var _jquery2 = _interopRequireDefault(_jquery);

var _playlist = __webpack_require__(8);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

function _possibleConstructorReturn(self, call) {
	if (!self) {
		throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	}return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
	if (typeof superClass !== "function" && superClass !== null) {
		throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
} //console.log("bite me");

var MusicApp = function (_React$Component) {
	_inherits(MusicApp, _React$Component);

	function MusicApp(props) {
		_classCallCheck(this, MusicApp);

		var _this = _possibleConstructorReturn(this, (MusicApp.__proto__ || Object.getPrototypeOf(MusicApp)).call(this, props));

		_this.state = {
			message: '',
			apikey: '',
			playlist: []
		};

		_this.fetchArtist = _this.fetchArtist.bind(_this);
		return _this;
	}

	_createClass(MusicApp, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.fetchArtist();
		}
	}, {
		key: 'fetchArtist',
		value: function fetchArtist() {
			var artistName = document.getElementById('artistName').value;
			console.log(artistName);
			var that = this;

			if (artistName) {
				_jquery2.default.ajax({
					type: 'GET',
					url: 'http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=' + artistName + '&api_key=eff1df4e758b0a2f134e0a4ee238d9ed&format=json',
					datatype: 'json',
					success: function success(data) {
						//console.log('bite me');
						console.log(data);

						that.setState({
							playlist: data.toptracks.track,
							message: ''
						});
					}
				});
			} else {
				this.setState({
					message: "Please enter artist's name"
				});
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var playlist = [];
			for (var i = 0; i < this.state.playlist.length; i++) {
				playlist.push(_react2.default.createElement(_playlist.Playlist, { name: this.state.playlist[i].name, image: this.state.playlist[i].image[1]['#text'], key: i }));
			}
			return _react2.default.createElement('div', null, 'Welcome to FCC!', _react2.default.createElement('input', { type: 'text', id: 'artistName' }), _react2.default.createElement('button', { onClick: this.fetchArtist }, 'Search'), playlist, this.state.message);
		}
	}]);

	return MusicApp;
}(_react2.default.Component);

module.exports = { MusicApp: MusicApp

	//ReactDOM.render(<MusicApp/>,document.getElementById('container'));

};

 ;(function register() { // eslint-disable-line no-extra-semi /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\aayushi.sinha\\Documents\\Git Repo\\musik\\public\\js\\music-app.js"); return; } for (var key in module.exports) { // eslint-disable-line no-restricted-syntax if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\aayushi.sinha\\Documents\\Git Repo\\musik\\public\\js\\music-app.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var _createClass = function () {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
		}
	}return function (Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	};
}();

var _jquery = __webpack_require__(2);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

function _possibleConstructorReturn(self, call) {
	if (!self) {
		throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	}return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
	if (typeof superClass !== "function" && superClass !== null) {
		throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(3);

var Playlist = function (_React$Component) {
	_inherits(Playlist, _React$Component);

	function Playlist(props) {
		_classCallCheck(this, Playlist);

		var _this = _possibleConstructorReturn(this, (Playlist.__proto__ || Object.getPrototypeOf(Playlist)).call(this, props));

		_this.state = {
			genres: []
		};
		return _this;
	}

	_createClass(Playlist, [{
		key: 'render',
		value: function render() {
			return React.createElement('div', null, React.createElement('div', null, this.props.name), React.createElement('img', { src: this.props.image }));
		}
	}]);

	return Playlist;
}(React.Component);

module.exports = {
	Playlist: Playlist
};

 ;(function register() { // eslint-disable-line no-extra-semi /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\Users\\aayushi.sinha\\Documents\\Git Repo\\musik\\public\\js\\playlist.js"); return; } for (var key in module.exports) { // eslint-disable-line no-restricted-syntax if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\aayushi.sinha\\Documents\\Git Repo\\musik\\public\\js\\playlist.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ })

},[12]);
});