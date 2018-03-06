(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/kyler.4d763e12.jpg";

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/imageTest.93d68bd4.jpeg";

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/jen.a585ef7f.jpg";

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EmailForm = function (_Component) {
  _inherits(EmailForm, _Component);

  function EmailForm() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, EmailForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = EmailForm.__proto__ || Object.getPrototypeOf(EmailForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      emailValue: '',
      fNameValue: '',
      lNameValue: ''
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(EmailForm, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'email-form-flex' },
        _react2.default.createElement(
          'form',
          { action: 'https://neureal.us17.list-manage.com/subscribe/post', method: 'POST', noValidate: true },
          _react2.default.createElement(
            'div',
            { className: 'join' },
            'Join our community'
          ),
          _react2.default.createElement('input', { type: 'hidden', name: 'u', value: 'f8e938b21af569b682acfb96a' }),
          _react2.default.createElement('input', { type: 'hidden', name: 'id', value: 'f47cd5d841' }),
          _react2.default.createElement(
            'label',
            { htmlFor: 'MERGE0' },
            _react2.default.createElement('input', { className: 'subscribe-input', placeholder: 'Email', type: 'email', name: 'EMAIL', id: 'MERGE0', value: this.state.emailValue,
              onChange: function onChange(e) {
                _this2.setState({ emailValue: e.target.value });console.log(e.target.value);
              }, autoCapitalize: 'off', autoCorrect: 'off' })
          ),
          _react2.default.createElement(
            'label',
            { htmlFor: 'MERGE1' },
            _react2.default.createElement('input', { className: 'subscribe-input', placeholder: 'First Name', type: 'text', name: 'FNAME', id: 'MERGE1', value: this.state.fNameValue,
              onChange: function onChange(e) {
                _this2.setState({ fNameValue: e.target.value });
              } })
          ),
          _react2.default.createElement(
            'label',
            { htmlFor: 'MERGE2' },
            _react2.default.createElement('input', { className: 'subscribe-input', placeholder: 'Last Name', type: 'text', name: 'LNAME', id: 'MERGE2', value: this.state.lNameValue,
              onChange: function onChange(e) {
                _this2.setState({ lNameValue: e.target.value });
              } })
          ),
          _react2.default.createElement(
            'div',
            { className: 'subscribe-button' },
            _react2.default.createElement('input', _defineProperty({ className: 'subscribe-text', type: 'submit', value: 'Subscribe Now', name: 'subscribe', id: 'mc-embedded-subscribe' }, 'className', 'button'))
          )
        )
      );
    }
  }]);

  return EmailForm;
}(_react.Component);

exports.default = EmailForm;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(7);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(3);

var _App = __webpack_require__(8);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;

// Your top level component


// Export your top level component as JSX (for static rendering)
exports.default = _App2.default;

// Render your app

if (typeof document !== 'undefined') {
  var renderMethod =  false ? _reactDom2.default.render : _reactDom2.default.hydrate || _reactDom2.default.render;
  var render = function render(Comp) {
    renderMethod(_react2.default.createElement(
      _reactRouterDom.HashRouter,
      null,
      _react2.default.createElement(Comp, null)
    ), document.getElementById('root'));
  };

  // Render!
  render(_App2.default);
}

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHotLoader = __webpack_require__(10);

__webpack_require__(11);

var _reactStatic = __webpack_require__(12);

var _SocialBar = __webpack_require__(13);

var _SocialBar2 = _interopRequireDefault(_SocialBar);

var _NavigationBar = __webpack_require__(14);

var _NavigationBar2 = _interopRequireDefault(_NavigationBar);

var _MobileNav = __webpack_require__(15);

var _MobileNav2 = _interopRequireDefault(_MobileNav);

var _HomePage = __webpack_require__(16);

var _HomePage2 = _interopRequireDefault(_HomePage);

var _LearnMore = __webpack_require__(18);

var _LearnMore2 = _interopRequireDefault(_LearnMore);

var _Footer = __webpack_require__(22);

var _Footer2 = _interopRequireDefault(_Footer);

var _RoadMap = __webpack_require__(24);

var _RoadMap2 = _interopRequireDefault(_RoadMap);

var _Team = __webpack_require__(26);

var _Team2 = _interopRequireDefault(_Team);

var _Blog = __webpack_require__(38);

var _Blog2 = _interopRequireDefault(_Blog);

var _BlogPosts = __webpack_require__(39);

var _BlogPosts2 = _interopRequireDefault(_BlogPosts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactStatic.Router,
        null,
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_SocialBar2.default, null),
          _react2.default.createElement(
            'div',
            { className: 'main' },
            _react2.default.createElement(
              'div',
              { className: 'squeeze' },
              _react2.default.createElement(_NavigationBar2.default, null),
              _react2.default.createElement(_MobileNav2.default, null),
              _react2.default.createElement(
                _reactStatic.Switch,
                null,
                _react2.default.createElement(_reactStatic.Route, { component: _HomePage2.default, exact: true, path: '/' }),
                _react2.default.createElement(_reactStatic.Route, { component: _LearnMore2.default, path: '/learn' }),
                _react2.default.createElement(_reactStatic.Route, { component: _RoadMap2.default, path: '/roadmap' }),
                _react2.default.createElement(_reactStatic.Route, { component: _Blog2.default, path: '/blog' }),
                _react2.default.createElement(_reactStatic.Route, { component: _Team2.default, path: '/team' }),
                _react2.default.createElement(_reactStatic.Route, { component: _BlogPosts2.default, path: '/blog-1' })
              )
            )
          ),
          _react2.default.createElement(_Footer2.default, null)
        )
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = (0, _reactHotLoader.hot)(module)(App);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SocialBar = function SocialBar() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'nav',
      null,
      _react2.default.createElement(
        'div',
        { className: 'main-nav' },
        _react2.default.createElement(
          'div',
          { className: 'social-background-nav' },
          _react2.default.createElement(
            'div',
            { className: 'squeeze' },
            _react2.default.createElement(
              'span',
              { className: 'social-icons-container' },
              _react2.default.createElement('a', { className: 'email-nav ion-email', href: 'mailto:info@neureal.net' }),
              _react2.default.createElement(
                'p',
                null,
                'info@neureal.net'
              ),
              _react2.default.createElement('a', { className: 'git-nav ion-social-github', href: 'https://github.com/neureal' }),
              _react2.default.createElement('a', { className: 'fb-nav ion-social-facebook', href: 'https://github.com/neureal' }),
              _react2.default.createElement('a', { className: 'rdt-nav ion-social-reddit', href: 'https://www.reddit.com/r/NeuralNetwork/' }),
              _react2.default.createElement('a', { className: 'twi-nav ion-social-twitter', href: 'https://twitter.com/neurealai' }),
              _react2.default.createElement('a', { className: 'lnk-nav ion-social-linkedin', href: 'https://www.linkedin.com/company/neureal/' }),
              _react2.default.createElement('a', { className: 'you-nav ion-social-youtube', href: 'https://www.youtube.com/channel/UCkebLOaWk9vplZ6ZWLcbvtA' })
            )
          )
        )
      )
    )
  );
};

exports.default = SocialBar;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NavigationBar = function (_Component) {
  _inherits(NavigationBar, _Component);

  function NavigationBar() {
    _classCallCheck(this, NavigationBar);

    return _possibleConstructorReturn(this, (NavigationBar.__proto__ || Object.getPrototypeOf(NavigationBar)).apply(this, arguments));
  }

  _createClass(NavigationBar, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "div",
          { className: "navigation" },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: "/" },
            _react2.default.createElement("img", { src: "https://s18.postimg.org/dvjeyieex/blue_Asset_1.png", alt: "logo", className: "logo" })
          ),
          _react2.default.createElement(
            "nav",
            { className: "nav-menu" },
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: "/blog" },
              _react2.default.createElement(
                "span",
                { className: "nav-menu__item" },
                "Blog"
              )
            ),
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: "/team" },
              _react2.default.createElement(
                "span",
                { className: "nav-menu__item" },
                _react2.default.createElement(
                  "a",
                  { href: "./team.html" },
                  "Team"
                )
              )
            ),
            _react2.default.createElement(
              "span",
              { className: "nav-menu__button" },
              _react2.default.createElement(
                "span",
                { className: "nav-menu__item-white" },
                _react2.default.createElement(
                  "div",
                  null,
                  "Telegram"
                )
              ),
              " "
            )
          )
        ),
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: "/" },
          _react2.default.createElement(
            "div",
            { className: "mobile-logo-container" },
            _react2.default.createElement("img", { src: "https://s18.postimg.org/dvjeyieex/blue_Asset_1.png", alt: "logo", className: "mobile-logo" })
          )
        )
      );
    }
  }]);

  return NavigationBar;
}(_react.Component);

exports.default = NavigationBar;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MobileNav = function (_Component) {
  _inherits(MobileNav, _Component);

  function MobileNav() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MobileNav);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MobileNav.__proto__ || Object.getPrototypeOf(MobileNav)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      sideMenuOpen: false,
      hamburgerAnimate: false
    }, _this.slideOpenSideMenu = function () {

      _this.setState({
        sideMenuOpen: !_this.state.sideMenuOpen
      });
    }, _this.animateHamburger = function () {
      _this.setState({
        hamburgerAnimate: !_this.state.hamburgerAnimate
      });
    }, _this.closeMenu = function () {
      _this.setState({
        sideMenuOpen: false
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MobileNav, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'menu-icon', onClick: this.slideOpenSideMenu.bind(this) },
          _react2.default.createElement('span', null),
          _react2.default.createElement('span', null),
          _react2.default.createElement('span', null)
        ),
        _react2.default.createElement(
          'div',
          { className: this.state.sideMenuOpen ? 'sidebar-active' : 'sidebar' },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/', onClick: this.closeMenu.bind(this) },
            _react2.default.createElement(
              'a',
              { href: './index.html' },
              _react2.default.createElement('img', { src: 'https://s18.postimg.org/ui0z7yhqx/logo_Asset2.png', alt: 'logo', className: 'logo' })
            )
          ),
          _react2.default.createElement(
            'ul',
            { className: 'menu' },
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/blog', onClick: this.closeMenu.bind(this) },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'a',
                  null,
                  'Blog'
                )
              )
            ),
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/team', onClick: this.closeMenu.bind(this) },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'a',
                  { href: './team.html' },
                  'Team'
                )
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement('img', { className: 'sidebar-image', src: 'https://s18.postimg.org/5js9ba92h/prediction-side-bar-asset.png', alt: 'logo' })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'social-icon' },
            _react2.default.createElement('a', { className: 'git-mob ion-social-github', href: 'https://github.com/neureal' }),
            _react2.default.createElement('a', { className: 'fb-mob ion-social-facebook', href: 'https://github.com/neureal' }),
            _react2.default.createElement('a', { className: 'rdt-mob ion-social-reddit', href: 'https://www.reddit.com/r/NeuralNetwork/' }),
            _react2.default.createElement('a', { className: 'twi-mob ion-social-twitter', href: 'https://twitter.com/neurealai' }),
            _react2.default.createElement('a', { className: 'lnk-mob ion-social-linkedin', href: 'https://www.linkedin.com/company/neureal/' }),
            _react2.default.createElement('a', { className: 'you-mob ion-social-youtube', href: 'https://www.youtube.com/channel/UCkebLOaWk9vplZ6ZWLcbvtA' })
          )
        ),
        _react2.default.createElement('div', { className: this.state.sideMenuOpen ? 'background-mobile' : 'none', onClick: this.closeMenu.bind(this) })
      );
    }
  }]);

  return MobileNav;
}(_react.Component);

exports.default = MobileNav;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(3);

var _EmailForm = __webpack_require__(5);

var _EmailForm2 = _interopRequireDefault(_EmailForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomePage = function (_Component) {
    _inherits(HomePage, _Component);

    function HomePage() {
        _classCallCheck(this, HomePage);

        return _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).apply(this, arguments));
    }

    _createClass(HomePage, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'content' },
                    _react2.default.createElement(
                        'div',
                        { className: 'flex' },
                        _react2.default.createElement(
                            'div',
                            { className: 'column column__one-third' },
                            _react2.default.createElement(
                                'h1',
                                { className: 'content__title' },
                                'What is Neureal?'
                            ),
                            _react2.default.createElement(
                                'p',
                                { className: 'content__paragraph' },
                                'That may seem a wild boast, but the nascent technologies of blockchain and end-to-end learning truly gives rise to endless possibilities that can be applied across nearly every industry, from NOAA to Lyft. Our architecture is capable of predicting a heart attack accurately enough to save a life; predict a hurricane accurately enough to move vulnerable people out of harm\u2019s way, predict traffic and human patterns accurately enough for companies like Lyft to adjust actions and add to their bottom line. From complicated to simple, Neureal\u2019s impact is far-reaching.'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'home-button-flex' },
                                _react2.default.createElement(
                                    _reactRouterDom.Link,
                                    { to: '/learn' },
                                    _react2.default.createElement(
                                        'a',
                                        { href: './learnMore.html' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'learn-more-button' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'learn-more' },
                                                'LEARN MORE'
                                            )
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    _reactRouterDom.Link,
                                    { to: '/roadmap' },
                                    _react2.default.createElement(
                                        'a',
                                        { href: './roadmap.html' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'roadmap-button' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'road-map' },
                                                'ROADMAP'
                                            )
                                        )
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'column column__two-thirds' },
                            _react2.default.createElement('img', { src: __webpack_require__(17), alt: '', className: 'content__image' })
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'grid' },
                        _react2.default.createElement(
                            'p',
                            null,
                            ' Need a more detailed explanation?'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'video-container' },
                            _react2.default.createElement(
                                'video',
                                { className: 'video-neureal', controls: true },
                                _react2.default.createElement('source', { src: 'http://jennygreyson.com/wp-content/uploads/2017/12/limitless-copy.mp4', type: 'video/mp4' }),
                                ' Your browser does not support the video tag.'
                            )
                        )
                    )
                )
            );
        }
    }]);

    return HomePage;
}(_react.Component);

exports.default = HomePage;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/Comp_1.74ffc125.gif";

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LearnMore = function (_Component) {
    _inherits(LearnMore, _Component);

    function LearnMore() {
        _classCallCheck(this, LearnMore);

        return _possibleConstructorReturn(this, (LearnMore.__proto__ || Object.getPrototypeOf(LearnMore)).apply(this, arguments));
    }

    _createClass(LearnMore, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    "div",
                    { className: "content" },
                    _react2.default.createElement(
                        "div",
                        { className: "flex-reverse" },
                        _react2.default.createElement(
                            "div",
                            { className: "column column__two-thirds" },
                            _react2.default.createElement(
                                "div",
                                { className: "padding-image" },
                                _react2.default.createElement("img", { src: __webpack_require__(19), alt: "", className: "content__image" })
                            )
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "column column__one-third" },
                            _react2.default.createElement(
                                "h1",
                                { className: "content__title" },
                                "Breakthrough."
                            ),
                            _react2.default.createElement(
                                "p",
                                { className: "content__paragraph" },
                                "Neureal\u2019s solution is a breakthrough because it is Limitless. The network\u2019s architecture allows users to ask Neureal about the future the same way we ask Google about the present and the past\u2013with the same confidence we have in the results of Google\u2019s algorithms and first page. This limitless ability creates not only the avoidance of bad things, but the ability to be a first-mover\u2013true time travelers who can see different possible futures, make informed decisions to affect the present through actions, and impact the future one decision at a time. Whether users are companies or governments or individuals, actions based on accurate predictions will have profound impacts across every industry, topic, and social good."
                            ),
                            _react2.default.createElement(
                                "h1",
                                { className: "content__title" },
                                "Impact."
                            ),
                            _react2.default.createElement(
                                "p",
                                { className: "content__paragraph" },
                                "We are giving everyone the ability to matter, to make a difference in the world on a grand scale. Users will be able to predict anything they\u2019re passionate about, from hurricane paths to the extinction of a species, to climate change, to medical advances. And, of course\u2026 Bitcoin prices."
                            )
                        )
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "flex" },
                        _react2.default.createElement(
                            "div",
                            { className: "column column__one-third" },
                            _react2.default.createElement(
                                "h1",
                                { className: "content__title" },
                                "Decentralized."
                            ),
                            _react2.default.createElement(
                                "p",
                                { className: "content__paragraph" },
                                "There is no centralized system that can be more accurate\u2013not Facebook, not Google\u2013they cannot harness the massive and raw amounts of data needed to surpass what Neureal\u2019s architecture allows. We will always be one step ahead in size and accuracy. Bitcoin itself proved the power of community, creating a distributed computing platform that is 100,000 times faster than the largest centralized supercomputer in the world."
                            ),
                            _react2.default.createElement(
                                "h1",
                                { className: "content__title" },
                                "Timeless."
                            ),
                            _react2.default.createElement(
                                "p",
                                { className: "content__paragraph" },
                                "Data science continues to hit limitations. Neureal\u2019s ability to be agnostic to the algorithms used allows the system to be forever adaptable."
                            )
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "column column__two-thirds" },
                            _react2.default.createElement("img", { src: __webpack_require__(20), alt: "", className: "content__image" })
                        )
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "flex-reverse" },
                        _react2.default.createElement(
                            "div",
                            { className: "column column__two-thirds" },
                            _react2.default.createElement("img", { src: __webpack_require__(21), alt: "", className: "content__image" })
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "column column__one-third" },
                            _react2.default.createElement(
                                "div",
                                { "learn-more-flex": true },
                                _react2.default.createElement(
                                    "h1",
                                    { className: "content__title" },
                                    "Beyond AlphaGO."
                                ),
                                _react2.default.createElement(
                                    "p",
                                    { className: "content__paragraph" },
                                    "Humans are the unknown. Their patterns constantly change. The only way to account for this \u201Chuman-factor\u201D is by forecasting black swans, allowing humans to foresee outcomes and shift their actions, preventing the bad and capitalizing on the good."
                                ),
                                _react2.default.createElement(
                                    "div",
                                    { className: "learn-more-padding" },
                                    _react2.default.createElement(
                                        "h1",
                                        { className: "content__title" },
                                        "Efficiency of Data."
                                    ),
                                    _react2.default.createElement(
                                        "p",
                                        { className: "content__paragraph" },
                                        "By giving Neureal raw data, the AI is allowed the freedom to do the right thing for itself beyond the constraints of human decision-making on the front end."
                                    ),
                                    _react2.default.createElement(
                                        "h1",
                                        { className: "content__title" },
                                        "Limitless. Without limits. Beyond today."
                                    ),
                                    _react2.default.createElement(
                                        "p",
                                        { className: "content__paragraph" },
                                        "Neureal gives humans the power to become limitless by predicting the future of anything."
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return LearnMore;
}(_react.Component);

exports.default = LearnMore;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/Comp_5.015f8bc8.gif";

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/Comp_2.8111c5ce.gif";

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/Comp_4.14236c39.gif";

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _EmailForm = __webpack_require__(5);

var _EmailForm2 = _interopRequireDefault(_EmailForm);

var _reactRouterDom = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_Component) {
  _inherits(Footer, _Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'main-nav' },
        _react2.default.createElement(
          'div',
          { className: 'footer-background' },
          _react2.default.createElement(
            'div',
            { className: 'squeeze' },
            _react2.default.createElement(
              'div',
              { className: 'footer-container' },
              _react2.default.createElement(
                'div',
                { className: 'logo-footer-container' },
                _react2.default.createElement(
                  _reactRouterDom.Link,
                  { to: '/' },
                  _react2.default.createElement('img', { src: __webpack_require__(23), alt: 'logo', className: 'logo-footer' })
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  '150 S State'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  '#150'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  'Salt Lake City, Ut 84111'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'community' },
                _react2.default.createElement(_EmailForm2.default, null)
              )
            )
          )
        )
      );
    }
  }]);

  return Footer;
}(_react.Component);

exports.default = Footer;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/logoAsset2.8961d36b.png";

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RoadMap = function (_Component) {
  _inherits(RoadMap, _Component);

  function RoadMap() {
    _classCallCheck(this, RoadMap);

    return _possibleConstructorReturn(this, (RoadMap.__proto__ || Object.getPrototypeOf(RoadMap)).apply(this, arguments));
  }

  _createClass(RoadMap, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "div",
          { "class": "content" },
          _react2.default.createElement(
            "div",
            { "class": "grid" },
            _react2.default.createElement("img", { src: __webpack_require__(25), alt: "roadmap", "class": "roadmap-img" })
          )
        )
      );
    }
  }]);

  return RoadMap;
}(_react.Component);

exports.default = RoadMap;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/roadmap-blue-asset.1c0f21da.png";

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _TeamProfile = __webpack_require__(27);

var _TeamProfile2 = _interopRequireDefault(_TeamProfile);

var _TeamModal = __webpack_require__(30);

var _TeamModal2 = _interopRequireDefault(_TeamModal);

var _reactModal = __webpack_require__(31);

var _reactModal2 = _interopRequireDefault(_reactModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Team = function (_Component) {
  _inherits(Team, _Component);

  function Team() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Team);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Team.__proto__ || Object.getPrototypeOf(Team)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      openJen: false,
      openWil: false,
      openKyler: false,
      openJames: false,
      openBrianNel: false,
      openNick: false,
      openBrianBag: false,
      openJordan: false
    }, _this.clickOpenJen = function () {
      _this.setState({
        openJen: !_this.state.openJen
      });
    }, _this.clickOpenWil = function () {
      _this.setState({
        openWil: !_this.state.openWil
      });
    }, _this.clickOpenKyler = function () {
      _this.setState({
        openKyler: !_this.state.openKyler
      });
    }, _this.clickOpenJames = function () {
      _this.setState({
        openJames: !_this.state.openJames
      });
    }, _this.clickOpenBrianNel = function () {
      _this.setState({
        openBrianNel: !_this.state.openBrianNel
      });
    }, _this.clickOpenNick = function () {
      _this.setState({
        openNick: !_this.state.openNick
      });
    }, _this.clickOpenBrianBag = function () {
      _this.setState({
        openBrianBag: !_this.state.openBrianBag
      });
    }, _this.clickOpenJordan = function () {
      _this.setState({
        openJordan: !_this.state.openJordan
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Team, [{
    key: 'render',
    value: function render() {
      var jenImage = __webpack_require__(4);
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'content-team' },
          _react2.default.createElement(
            'div',
            { className: 'column column__title' },
            _react2.default.createElement(
              'h2',
              { className: 'team-title' },
              'The Neureal Team'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'column column__full' },
            _react2.default.createElement(
              'div',
              { className: 'flex-team' },
              _react2.default.createElement(
                'div',
                { className: 'team-box' },
                _react2.default.createElement(
                  'div',
                  {
                    className: 'team-box-container',
                    type: 'button',
                    onClick: this.clickOpenJen,
                    value: 'Show Modal' },
                  _react2.default.createElement(
                    'div',
                    { className: 'team-image-container' },
                    _react2.default.createElement('img', { className: 'team-image', src: __webpack_require__(4), alt: 'team' })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'name-title-container' },
                    _react2.default.createElement(
                      'div',
                      { className: 'team-name' },
                      'Jenny Grayson'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'team-role' },
                      'CEO'
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'biography' },
                    '20+ years executive-level. Multi-million dollar leadership. IP Specialist.'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'team-icon-container' },
                  _react2.default.createElement('a', { className: 'lk ion-social-linkedin', href: 'https://www.linkedin.com/in/jengreyson/' })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'team-box' },
                _react2.default.createElement(
                  'div',
                  { className: 'team-box-container' },
                  _react2.default.createElement(
                    'div',
                    { className: 'team-image-container' },
                    _react2.default.createElement('img', { className: 'team-image', src: __webpack_require__(32), alt: 'team' })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'name-title-container' },
                    _react2.default.createElement(
                      'div',
                      { className: 'team-name' },
                      'Wil Bown'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'team-role' },
                      'Founder - Architect'
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'biography' },
                    '25+ years software engineer. Million Dollar Texas Bitcoin Conference hackathon winner. Coding contributor to main fork Bitcoin. Bitcoin miner since 2011. Experience developing multi-million dollar software.'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'team-icon-container' },
                  _react2.default.createElement('a', { className: 'lk ion-social-linkedin', href: 'https://www.linkedin.com/in/wil-bown-b68bb718/' })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'team-box' },
                _react2.default.createElement(
                  'div',
                  { className: 'team-box-container' },
                  _react2.default.createElement(
                    'div',
                    { className: 'team-image-container' },
                    _react2.default.createElement('img', { className: 'team-image', src: __webpack_require__(1), alt: 'team' })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'name-title-container' },
                    _react2.default.createElement(
                      'div',
                      { className: 'team-name' },
                      'Kyler Anderson'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'team-role' },
                      'Community Manager'
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'biography' },
                    'For Kyler, understanding human behavior and the dynamics of communities has been a lifelong fascination and obsession. He has studied and maintained a working knowledge of the field of applied behavior analysis psychology.'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'team-icon-container' },
                  _react2.default.createElement('a', { className: 'lk ion-social-linkedin', href: 'https://www.linkedin.com/in/kyleranderson/' })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'team-box' },
                _react2.default.createElement(
                  'div',
                  { className: 'team-box-container' },
                  _react2.default.createElement(
                    'div',
                    { className: 'team-image-container' },
                    _react2.default.createElement('img', { className: 'team-image', src: __webpack_require__(33), alt: 'team' })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'name-title-container' },
                    _react2.default.createElement(
                      'div',
                      { className: 'team-name' },
                      'James Alton'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'team-role' },
                      'Developer | Dev Ops, Ethereum'
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'biography' },
                    '17+ years software development. Wrote the first completed Etherem contract. Bitcoin miner since 2011. Federal Government and Banking software solutions.'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'team-icon-container' },
                  _react2.default.createElement('a', { className: 'lk ion-social-linkedin', href: 'https://www.linkedin.com/in/jamesalton' })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'team-box' },
                _react2.default.createElement(
                  'div',
                  { className: 'team-box-container' },
                  _react2.default.createElement(
                    'div',
                    { className: 'team-image-container' },
                    _react2.default.createElement('img', { className: 'team-image', src: __webpack_require__(34), alt: 'team' })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'name-title-container' },
                    _react2.default.createElement(
                      'div',
                      { className: 'team-name' },
                      'Brian Nelson'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'team-role' },
                      'Relationships, Regulation'
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'biography' },
                    'Token sale consultant. Bitcoin and Blockchain Expert. International speaker.'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'team-icon-container' },
                  _react2.default.createElement('a', { className: 'tw ion-social-twitter', href: 'https://twitter.com/oppcreator?lang=en' }),
                  _react2.default.createElement('a', { className: 'lk ion-social-linkedin', href: 'https://www.linkedin.com/in/briannelson36/' })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'team-box' },
                _react2.default.createElement(
                  'div',
                  { className: 'team-box-container' },
                  _react2.default.createElement(
                    'div',
                    { className: 'team-image-container' },
                    _react2.default.createElement('img', { className: 'team-image', src: __webpack_require__(35), alt: 'team' })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'name-title-container' },
                    _react2.default.createElement(
                      'div',
                      { className: 'team-name' },
                      'Nick Baguley'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'team-role' },
                      'Data Science, Contacts, Strategy'
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'biography' },
                    'Creator of a near-real time serverless architecture for the finance industry.'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'team-icon-container' },
                  _react2.default.createElement('a', { className: 'lk ion-social-linkedin', href: 'https://www.linkedin.com/in/nickbaguley/' })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'team-box' },
                _react2.default.createElement(
                  'div',
                  { className: 'team-box-container' },
                  _react2.default.createElement(
                    'div',
                    { className: 'team-image-container' },
                    _react2.default.createElement('img', { className: 'team-image', src: __webpack_require__(36), alt: 'team' })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'name-title-container' },
                    _react2.default.createElement(
                      'div',
                      { className: 'team-name' },
                      'Brian Sewell'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'team-role' },
                      'Education'
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'biography' },
                    'Brian Sewell is Founder and CEO of The American Bitcoin Academy, the thought leader in cryptocurrency education. Mr. Sewell is a serial entrepreneur who has owned several companies in the technology, energy and manufacturing industries.'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'team-icon-container' },
                  _react2.default.createElement('a', { className: 'tw ion-social-twitter', href: 'https://twitter.com/briansewellnow' }),
                  _react2.default.createElement('a', { className: 'lk ion-social-linkedin', href: 'https://www.linkedin.com/in/nickbaguley/' })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'team-box' },
                _react2.default.createElement(
                  'div',
                  { className: 'team-box-container' },
                  _react2.default.createElement(
                    'div',
                    { className: 'team-image-container' },
                    _react2.default.createElement('img', { className: 'team-image', src: __webpack_require__(37), alt: 'team' })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'name-title-container' },
                    _react2.default.createElement(
                      'div',
                      { className: 'team-name' },
                      'Jordan Miller'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'team-role' },
                      'CEO'
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'biography' },
                    'reator of the maestro ai project (maestroai.com), Jordan has a background in distributed systems, machine learning, economics, phi- losophy and information theory.'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'team-icon-container' },
                  _react2.default.createElement('a', { className: 'lk ion-social-linkedin', href: 'https://www.linkedin.com/in/jordan-miller-636724b/' })
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Team;
}(_react.Component);

exports.default = Team;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TeamProfile = function TeamProfile() {
  return _react2.default.createElement(
    'div',
    { className: 'profile' },
    _react2.default.createElement('img', { src: __webpack_require__(4), alt: 'jen' }),
    _react2.default.createElement(
      'a',
      { href: '#', className: 'view' },
      'Jen Greyson'
    ),
    _react2.default.createElement(
      'div',
      { 'class': 'details' },
      _react2.default.createElement(
        'h2',
        null,
        'Jen Greyson',
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'span',
          null,
          'CEO'
        )
      ),
      _react2.default.createElement(
        'p',
        null,
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam vitae commodi in.'
      ),
      _react2.default.createElement(
        'h3',
        null,
        'Follow'
      ),
      _react2.default.createElement(
        'ul',
        null,
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'a',
            { href: '#' },
            _react2.default.createElement('img', { src: __webpack_require__(28), alt: 'jen', className: 'team-social-icon' })
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { 'class': 'close' },
        _react2.default.createElement('img', { src: __webpack_require__(29), alt: 'close', className: 'close-button' })
      )
    )
  );
};

exports.default = TeamProfile;

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIsAAACACAYAAAA73po8AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxNTFCNjNERjFDN0QxMUUyQjkxNEY3RUNEMkY1ODRBRCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxNTFCNjNFMDFDN0QxMUUyQjkxNEY3RUNEMkY1ODRBRCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjE1MUI2M0REMUM3RDExRTJCOTE0RjdFQ0QyRjU4NEFEIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjE1MUI2M0RFMUM3RDExRTJCOTE0RjdFQ0QyRjU4NEFEIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+oJuRQQAABQBJREFUeNrsnT1MFEEUgG+MVpAgjSY2HI2xBCnUjgCFJhYkdFYY0cTOAhupsbGXRDChsyKBhAQKIXRggdBigdAYtRGS28bmfANzyYKXY3dvhp2d/b7kubBxf27fx8ybvdk7Va/XK+dRSo3LYlRiUKKrAkXmWGJDYlFyPd/WnrQsjRD6JHb1aiLI0Lnti+c8TcRF0a3JERc0+NA5Hs8iizr5RyndouzQYpeqaxqU3O+m2aghy4H83MM1LBWHkvtqmg2umGIWUcpHj8l9cllMrQLlZDRVN2SKHigp0hWpNC0LALIAsgCyALIAsgCyACALIAuEJEtHR8eWxHOJXn23sBHy+12zfos0FAcn8yZEgk2J/iTzJOT/DUnsVZhrcumRavKTI1Gms0yu0duRwBLJIgmfyDptzwgzQRJLIEvWFqWJMO9JpH+yWJuioAvVWq32wFYh1dnZuRdF0W1KSscFa05TFKYsv46XpNIvrLQstlsVWpewW5YFR69llnSGd1NuzdH5rZGiwLqhNE1Z6hNUijnCARa4QDcEYFEWGbVUXZycq/1Cvi3LiKPzGyFF4cky5uj8xkhRYKMhjZ6vUqvVDmx2QVEUfSdFYY6GZiy/jhlS6aFcFU+mJzBNgfksiIIs9oWR7SZJYMlkMcKsSFQTSlLVc3ZJXkkmP7UYJa1WTt+V/hwfLclop18WA3p4LKOeh5SO/o+G+DAfZOGNRPD3Di4gCwCyALKAS65yCazcHtAP969LfJX4I7Hf5DZBt/l1WKJX3zYo2pMLDJ3bE2ROYkHEOMqyD5HoeuV0GsaEiHPf96GzVVlsTtxOO1Hb1rEvOq6RZEoEWbeZNDMrcOayb1Aii4PjiiS/ZPHEtiRNpBmSxapIc803WShwk3U5n2Rxx7UoGnOMG3LMb0HXLCG2LPoddEngx8tOjKlnvrgugmlZ7LUouYhiWhhdNN8z3Z8XIIuHopwT5hGy+C3K67xFiQmzI+fzlprFw5pFaoUVSdAjn+Q19ctvFyMkapb28O5DhEx3lHtLR8tSEFw9R0XLEiD6vaa8770gS7GYRRZISq6fhEXNUjBsfxIWNUvA5PnFGMiSflQyJjEjsan/yuOh10lMmvsirtjN8/Xn8nRbgkclczt2i28u+VlJ9jTmX4lnjs5juhLC46uhypI1QS6E0dLmlTO6oYu7nckoit5k2Va2mzPzb4MAWVqLMiQJf9fmbmy/CbjP0NnDobOt7w6QrqM766Ru18Nnhs6WRj0WZ6kN0w2FzYTFffUjS8BYfiSDliXkwpargCxJGeASIEtSej3fH7J4hNWCVOqfm8gCdEMAyAJtwe1+C8cu8vlxux/ohgBZAFkAWQBZAJAFkAWQBZAFkAWQBQBZAFkAWQBZAFkAWQCQBZAFkAWQBYoE3+sMZ1BK3ZLF43Orl+v1+g9kgf9EETE+nFv/QmIZWSDOiShajti67cY6ahZoihbEtDAD1CxwUZfUaF22GQ1B6paFB+MtHLvI5xc/r1YFrh4RWZUFCtmCqKRDZ2RBFj5yA+yDLIAsgCyALIAsgCyALADIAsgCOciyxGUoLUtpZVnkmpWWVLlX+pvAlVIH8nMP165UHEruq1lqllGuXak4zpLzE1nEsF1ZPDU7gfBFeWVyng7dDTVC6JPQO6kTQYbObV8852lCGUnOFjJKjZtmalCiiz/GwrckG7qYlVzPt7OjfwIMAN9R2U1EzV3sAAAAAElFTkSuQmCC"

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAACE3AAAhNwEzWJ96AAADiklEQVR42u3aMXLaQBTG8Y/XuTJH8A2M6zTMQAEFDDlB5BvYuQBMTuCcAPkEZtSoUUFmcgByg+QGoUqpFMgeQjBIYnffe9LTDAVYGPj/vNKKdSfPcwzH0wWAPnbbGsBTlia/YZuzbTie3gB4AtAtHlpkabLuDEaTBYD5wf4/APQNwVn8XvGHfX3wozsCEB15zi2A9XA87Vo+b/EBYEZ7Q8IQwsYHABCA1YnfYQge4wPYEICH4phvCGHjP2dpsqLiRNs3hODxo9dDEAyBJ/4bgCHwxP8HwBDCx/8PwBDCxj8KYAjh4r8LYAhh4p8EMAT/8c8CGILf+KUADMFf/NIAhuAnfiWANiP4il8ZoI0IJeM/1okPAJ08z+u+sW7xxm5P7KZ6Za1k/PssTeK6r0F1n9j0kRAi/kUATUYIFf9igCYihIzvBKBJCKHjOwM4QHjWiMAR/6JZ0JkPEwP4pGV2xBXf6Qg4GA2RlpHAGd8bgBYE7vheAaQjSIjvHUAqgpT4QQCkIUiKHwxACoK0+EEBuBEkxg8OwIUgNT4LQGiE4Xg6kxqfDSAUwnA8jQC8SI3PCuAboYi/PLMba3x2AF8IWuKLAHCNoCm+GABXCNriiwKogLApppXq4wOe1gMcTB1jnF5P2GK3nrDRHF8sQBUEAD2t8UUDlET4A+BKa3zxACUR1MYXdxKueWJWG18FQE0EFfFVHIIODkffAXw4s9s8S5MvWj4TKYoflYgPAJ+PXScYwOXxlyV3vy6umHsGED6+OgRqYHxVCKQ8/v2Z2ZF4BNIcP0uTuMQUVTQCaY5f4TpBLAJpj68dgZoQXzMCNSW+VgRqUnyNCNS0+NoQqInxNSGQ0PhbAB9dfKUsHSH419El478tuDt83RgVFvobOQK44kseCdSG+JIRqC3xpSJQm+JLRKC2xT9AeORG8DYLkhxf0vukNscvRkKM3cIOy0igNseXgEBtj8+NQBafF4EsPi8CWXxeBLL4vAhk8XkRqGb8RdPjh0KofCUs9Xt1rVfMZPF5RwJZfF4Esvi8CGTxeRHI4ntHmNUCsPjOEF6KGVR5AIvvFAEAlu8hkMXnRSCLz4tAFp8XgSw+L0JnMJosAMwtvtut5H9/3xGAyOKzjYQZAehafD4EArCy+GwIPwnAA4Bvew/+svjeELZ7D3/N0iRGnufI8xyD0eRmMJrcvN63m5/bYDTp7d//CxOB1elMtAiLAAAAAElFTkSuQmCC"

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TeamModal = function (_Component) {
  _inherits(TeamModal, _Component);

  function TeamModal() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TeamModal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TeamModal.__proto__ || Object.getPrototypeOf(TeamModal)).call.apply(_ref, [this].concat(args))), _this), _this.onClose = function (e) {
      _this.props.onClose && _this.props.onClose(e);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TeamModal, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (!this.props.clickOpen) {
        return null;
      }
      return _react2.default.createElement(
        'div',
        { style: backDropStyle },
        _react2.default.createElement(
          'div',
          { style: modalStyle },
          _react2.default.createElement(
            'div',
            { style: footerStyle },
            _react2.default.createElement('img', { src: this.props.imageModal, alt: 'modal image' }),
            ' ',
            this.props.nameModal,
            ' ',
            this.props.roleModal,
            ' ',
            this.props.biographyModal,
            _react2.default.createElement(
              'div',
              { onClick: function onClick(e) {
                  _this2.onClose(e);
                } },
              'Close'
            )
          )
        )
      );
    }
  }]);

  return TeamModal;
}(_react.Component);

exports.default = TeamModal;


var backDropStyle = {
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: 'rgba(0,0,0,0.3)',
  padding: 50
};
var modalStyle = {
  backgroundColor: '#fff',
  borderRadius: 5,
  maxWidth: 500,
  minHeight: 300,
  margin: '0 auto',
  padding: 30,
  position: 'relative'
};
var footerStyle = {
  position: 'absolute',
  bottom: 20
};

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("react-modal");

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/wil.81fce17e.jpg";

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/brian.b24dadcc.jpg";

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/nick.cce55bf5.jpg";

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/brian_sewell.c28806bf.jpg";

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Blog = function (_Component) {
  _inherits(Blog, _Component);

  function Blog() {
    _classCallCheck(this, Blog);

    return _possibleConstructorReturn(this, (Blog.__proto__ || Object.getPrototypeOf(Blog)).apply(this, arguments));
  }

  _createClass(Blog, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "div",
          { className: "content" },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: "/blog-1" },
            _react2.default.createElement(
              "div",
              { className: "blog-header-container" },
              _react2.default.createElement(
                "div",
                { className: "blog-column__two-thirds" },
                _react2.default.createElement(
                  "div",
                  { className: "image-blog-container" },
                  _react2.default.createElement("img", { className: "img-main-blog", src: __webpack_require__(2), alt: "blog post" })
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "blog-column__one-thirds" },
                _react2.default.createElement(
                  "div",
                  { className: "blog-detail-container" },
                  _react2.default.createElement(
                    "div",
                    { className: "title-blog" },
                    "Sit amet consectetur adipisicing elit?"
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "caption-blog" },
                    " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos quas dolore saepe inventore "
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "creator-blog" },
                    _react2.default.createElement(
                      "div",
                      { className: "flex-author" },
                      _react2.default.createElement("img", { className: "author-of-blog", src: __webpack_require__(1), alt: "author" }),
                      _react2.default.createElement(
                        "div",
                        { className: "flex-date" },
                        _react2.default.createElement(
                          "div",
                          { className: "author-name" },
                          "Kyler Anderson"
                        ),
                        _react2.default.createElement(
                          "div",
                          { className: "author-date-posted" },
                          "March 1"
                        )
                      )
                    )
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "blog-secondary-grid-container" },
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: "/blog-1" },
              _react2.default.createElement(
                "div",
                { className: "blog-secondary-container" },
                _react2.default.createElement(
                  "div",
                  { className: "image-blog-container-secondary" },
                  _react2.default.createElement("img", { className: "img-secondary-blog", src: __webpack_require__(2), alt: "blog post" })
                ),
                _react2.default.createElement(
                  "div",
                  { className: "blog-column-secondary" },
                  _react2.default.createElement(
                    "div",
                    { className: "blog-detail-container-secondary" },
                    _react2.default.createElement(
                      "div",
                      { className: "title-blog-secondary" },
                      "Sit amet consectetur adipisicing elit?"
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "caption-blog" },
                      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos quas dolore saepe inventore "
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "creator-blog" },
                      _react2.default.createElement(
                        "div",
                        { className: "flex-author" },
                        _react2.default.createElement("img", { className: "author-of-blog", src: __webpack_require__(1), alt: "author" }),
                        _react2.default.createElement(
                          "div",
                          { className: "flex-date" },
                          _react2.default.createElement(
                            "div",
                            { className: "author-name" },
                            "Kyler Anderson"
                          ),
                          _react2.default.createElement(
                            "div",
                            { className: "author-date-posted" },
                            "March 1"
                          )
                        )
                      )
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: "/blog-1" },
              _react2.default.createElement(
                "div",
                { className: "blog-secondary-container" },
                _react2.default.createElement(
                  "div",
                  { className: "image-blog-container-secondary" },
                  _react2.default.createElement("img", { className: "img-secondary-blog", src: __webpack_require__(2), alt: "blog post" })
                ),
                _react2.default.createElement(
                  "div",
                  { className: "blog-column-secondary" },
                  _react2.default.createElement(
                    "div",
                    { className: "blog-detail-container-secondary" },
                    _react2.default.createElement(
                      "div",
                      { className: "title-blog-secondary" },
                      "Sit amet consectetur adipisicing elit?"
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "caption-blog" },
                      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos quas dolore saepe inventore "
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "creator-blog" },
                      _react2.default.createElement(
                        "div",
                        { className: "flex-author" },
                        _react2.default.createElement("img", { className: "author-of-blog", src: __webpack_require__(1), alt: "author" }),
                        _react2.default.createElement(
                          "div",
                          { className: "flex-date" },
                          _react2.default.createElement(
                            "div",
                            { className: "author-name" },
                            "Kyler Anderson"
                          ),
                          _react2.default.createElement(
                            "div",
                            { className: "author-date-posted" },
                            "March 1"
                          )
                        )
                      )
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: "/blog-1" },
              _react2.default.createElement(
                "div",
                { className: "blog-secondary-container" },
                _react2.default.createElement(
                  "div",
                  { className: "image-blog-container-secondary" },
                  _react2.default.createElement("img", { className: "img-secondary-blog", src: __webpack_require__(2), alt: "blog post" })
                ),
                _react2.default.createElement(
                  "div",
                  { className: "blog-column-secondary" },
                  _react2.default.createElement(
                    "div",
                    { className: "blog-detail-container-secondary" },
                    _react2.default.createElement(
                      "div",
                      { className: "title-blog-secondary" },
                      "Sit amet consectetur adipisicing elit?"
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "caption-blog" },
                      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos quas dolore saepe inventore "
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "creator-blog" },
                      _react2.default.createElement(
                        "div",
                        { className: "flex-author" },
                        _react2.default.createElement("img", { className: "author-of-blog", src: __webpack_require__(1), alt: "author" }),
                        _react2.default.createElement(
                          "div",
                          { className: "flex-date" },
                          _react2.default.createElement(
                            "div",
                            { className: "author-name" },
                            "Kyler Anderson"
                          ),
                          _react2.default.createElement(
                            "div",
                            { className: "author-date-posted" },
                            "March 1"
                          )
                        )
                      )
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: "/blog-1" },
              _react2.default.createElement(
                "div",
                { className: "blog-secondary-container" },
                _react2.default.createElement(
                  "div",
                  { className: "image-blog-container-secondary" },
                  _react2.default.createElement("img", { className: "img-secondary-blog", src: __webpack_require__(2), alt: "blog post" })
                ),
                _react2.default.createElement(
                  "div",
                  { className: "blog-column-secondary" },
                  _react2.default.createElement(
                    "div",
                    { className: "blog-detail-container-secondary" },
                    _react2.default.createElement(
                      "div",
                      { className: "title-blog-secondary" },
                      "Sit amet consectetur adipisicing elit?"
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "caption-blog" },
                      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos quas dolore saepe inventore "
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "creator-blog" },
                      _react2.default.createElement(
                        "div",
                        { className: "flex-author" },
                        _react2.default.createElement("img", { className: "author-of-blog", src: __webpack_require__(1), alt: "author" }),
                        _react2.default.createElement(
                          "div",
                          { className: "flex-date" },
                          _react2.default.createElement(
                            "div",
                            { className: "author-name" },
                            "Kyler Anderson"
                          ),
                          _react2.default.createElement(
                            "div",
                            { className: "author-date-posted" },
                            "March 1"
                          )
                        )
                      )
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: "/blog-1" },
              _react2.default.createElement(
                "div",
                { className: "blog-secondary-container" },
                _react2.default.createElement(
                  "div",
                  { className: "image-blog-container-secondary" },
                  _react2.default.createElement("img", { className: "img-secondary-blog", src: __webpack_require__(2), alt: "blog post" })
                ),
                _react2.default.createElement(
                  "div",
                  { className: "blog-column-secondary" },
                  _react2.default.createElement(
                    "div",
                    { className: "blog-detail-container-secondary" },
                    _react2.default.createElement(
                      "div",
                      { className: "title-blog-secondary" },
                      "Sit amet consectetur adipisicing elit?"
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "caption-blog" },
                      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos quas dolore saepe inventore "
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "creator-blog" },
                      _react2.default.createElement(
                        "div",
                        { className: "flex-author" },
                        _react2.default.createElement("img", { className: "author-of-blog", src: __webpack_require__(1), alt: "author" }),
                        _react2.default.createElement(
                          "div",
                          { className: "flex-date" },
                          _react2.default.createElement(
                            "div",
                            { className: "author-name" },
                            "Kyler Anderson"
                          ),
                          _react2.default.createElement(
                            "div",
                            { className: "author-date-posted" },
                            "March 1"
                          )
                        )
                      )
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: "/blog-1" },
              _react2.default.createElement(
                "div",
                { className: "blog-secondary-container" },
                _react2.default.createElement(
                  "div",
                  { className: "image-blog-container-secondary" },
                  _react2.default.createElement("img", { className: "img-secondary-blog", src: __webpack_require__(2), alt: "blog post" })
                ),
                _react2.default.createElement(
                  "div",
                  { className: "blog-column-secondary" },
                  _react2.default.createElement(
                    "div",
                    { className: "blog-detail-container-secondary" },
                    _react2.default.createElement(
                      "div",
                      { className: "title-blog-secondary" },
                      "Sit amet consectetur adipisicing elit?"
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "caption-blog" },
                      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos quas dolore saepe inventore "
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "creator-blog" },
                      _react2.default.createElement(
                        "div",
                        { className: "flex-author" },
                        _react2.default.createElement("img", { className: "author-of-blog", src: __webpack_require__(1), alt: "author" }),
                        _react2.default.createElement(
                          "div",
                          { className: "flex-date" },
                          _react2.default.createElement(
                            "div",
                            { className: "author-name" },
                            "Kyler Anderson"
                          ),
                          _react2.default.createElement(
                            "div",
                            { className: "author-date-posted" },
                            "March 1"
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Blog;
}(_react.Component);

exports.default = Blog;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BlogPosts = function (_Component) {
  _inherits(BlogPosts, _Component);

  function BlogPosts() {
    _classCallCheck(this, BlogPosts);

    return _possibleConstructorReturn(this, (BlogPosts.__proto__ || Object.getPrototypeOf(BlogPosts)).apply(this, arguments));
  }

  _createClass(BlogPosts, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'content' },
          _react2.default.createElement(
            'div',
            { className: 'blog-post-container' },
            _react2.default.createElement(
              'div',
              { className: 'column__post' },
              _react2.default.createElement(
                'div',
                { className: 'image-blog-container' },
                _react2.default.createElement('img', { className: 'img-main-blog', src: __webpack_require__(2), alt: 'blog post' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'column__post' },
              _react2.default.createElement(
                'div',
                { className: 'blog-detail-container-secondary' },
                _react2.default.createElement(
                  'div',
                  { className: 'title-blog' },
                  'Sit amet consectetur adipisicing elit?'
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'caption-blog' },
                  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam eligendi aperiam, autem, sunt dolore sequi qui veniam et non molestiae illo maiores facere minus velit beatae porro corporis doloribus obcaecati voluptatum? Provident sequi nemo at ratione voluptatum veritatis ipsum eaque molestiae animi odit iusto aut labore nulla distinctio rerum nostrum recusandae eum laboriosam quo amet suscipit, odio error? Porro voluptatibus commodi architecto aliquid cumque reprehenderit alias assumenda',
                  _react2.default.createElement('br', null),
                  _react2.default.createElement(
                    'div',
                    { className: 'paragraph-title' },
                    'Sit amet consectetur adipisicing elit?'
                  ),
                  'vel accusantium minus numquam molestiae ab, veritatis in sit libero. Voluptas accusamus saepe, quis molestiae optio reiciendis sed at exercitationem repellat fugit ab incidunt libero assumenda cumque quae animi veritatis similique voluptate repellendus temporibus distinctio omnis sint dolorem. Iusto hic vel minus maiores reiciendis totam a incidunt dolorum ipsam? Blanditiis consequatur ex dolor rem eveniet aperiam magnam nostrum, voluptas rerum. Impedit inventore aliquam numquam culpa ad maxime quam quae cum eleniti magnam, quaerat nisi. Sunt inventore reprehenderit, repellendus error aut assumenda tempora similique facere ipsam adipisci sed cumque, cupiditate provident nulla. Sapiente asperiores eveniet, deserunt eaque voluptates incidunt ullam eius magnam laudantium laboriosam dolores, quos commodi ipsam doloremque? Repellendus mollitia voluptatem similique maxime, inventore distinctio. Eaque odio rem consequuntur pariatur repellendus magnam illo esse dolores, laboriosam, non dicta. Dolore reprehenderit suscipit repellat doloribus delectus, laboriosam dolorem sapiente quod molestiae aut quo nulla possimus atque. Omnis, ex eius. Dolor officiis minima sed, quaerat mollitia veritatis ducimus fugiat est a placeat nobis cum! Minus suscipit, recusandae, consectetur quo architecto laborum tenetur minima excepturi commodi quis sint impedit at esse autem eligendi sunt nulla id saepe quidem repellat quia! Quaerat, maxime illo! Laudantium ex earum voluptas. Et minima officia neque, esse facere quisquam obcaecati accusamus inventore a tque saepe enim, porro aspernatur laudantium tempore rem quia recusandae alias qui quo tenetur, dolor sed ipsum! Obcaecati numquam reiciendis cum doloribus placeat fugit expedita maxime quia, impedit corporis repellat.'
                ),
                _react2.default.createElement('div', { className: 'creator-blog' })
              )
            )
          )
        )
      );
    }
  }]);

  return BlogPosts;
}(_react.Component);

exports.default = BlogPosts;

/***/ })
/******/ ]);
});
//# sourceMappingURL=static.91a8bfc5.js.map