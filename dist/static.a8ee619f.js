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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/jen.a585ef7f.jpg";

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/imageTest.93d68bd4.jpeg";

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/kyler.4d763e12.jpg";

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(6);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(4);

var _App = __webpack_require__(7);

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
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHotLoader = __webpack_require__(9);

__webpack_require__(10);

var _reactStatic = __webpack_require__(11);

var _NavigationBar = __webpack_require__(12);

var _NavigationBar2 = _interopRequireDefault(_NavigationBar);

var _MobileNav = __webpack_require__(13);

var _MobileNav2 = _interopRequireDefault(_MobileNav);

var _HomePage = __webpack_require__(14);

var _HomePage2 = _interopRequireDefault(_HomePage);

var _LearnMore = __webpack_require__(16);

var _LearnMore2 = _interopRequireDefault(_LearnMore);

var _Footer = __webpack_require__(20);

var _Footer2 = _interopRequireDefault(_Footer);

var _RoadMap = __webpack_require__(21);

var _RoadMap2 = _interopRequireDefault(_RoadMap);

var _Team = __webpack_require__(22);

var _Team2 = _interopRequireDefault(_Team);

var _Blog = __webpack_require__(26);

var _Blog2 = _interopRequireDefault(_Blog);

var _BlogPosts = __webpack_require__(27);

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
          )
        )
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = (0, _reactHotLoader.hot)(module)(App);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)(module)))

/***/ }),
/* 8 */
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
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(4);

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
              { className: "nav-menu__item" },
              "Telegram"
            ),
            _react2.default.createElement(
              "span",
              { className: "nav-menu__item-white" },
              _react2.default.createElement(
                "div",
                null,
                "Whitepaper"
              )
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(4);

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
            { to: '/' },
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
              { to: '/blog' },
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
              { to: '/team' },
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
              _react2.default.createElement(
                'a',
                null,
                'Telegram'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                null,
                'Whitepaper'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement('img', { className: 'sidebar-image', src: 'https://s18.postimg.org/5js9ba92h/prediction-side-bar-asset.png', alt: 'logo' })
            )
          ),
          _react2.default.createElement(
            'ul',
            { className: 'social-icon' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                null,
                _react2.default.createElement('i', { className: 'fab fa-facebook-f' })
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                null,
                _react2.default.createElement('i', { className: 'fab fa-twitter' })
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                null,
                _react2.default.createElement('i', { className: 'fab fa-google-plus-g' })
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                null,
                _react2.default.createElement('i', { className: 'fas fa-rss' })
              )
            )
          )
        )
      );
    }
  }]);

  return MobileNav;
}(_react.Component);

exports.default = MobileNav;

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

var _reactRouterDom = __webpack_require__(4);

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
                        { className: "flex" },
                        _react2.default.createElement(
                            "div",
                            { className: "column column__one-third" },
                            _react2.default.createElement(
                                "h1",
                                { className: "content__title" },
                                "World's first AI prediction blockchain"
                            ),
                            _react2.default.createElement(
                                "p",
                                { className: "content__paragraph" },
                                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, nemo. Dolores magnam animi facere error, eos corporis eum incidunt magni vero commodi, laborum non! Inventore eum omnis veniam consectetur accusamus!"
                            ),
                            _react2.default.createElement(
                                "div",
                                { className: "home-button-flex" },
                                _react2.default.createElement(
                                    _reactRouterDom.Link,
                                    { to: "/learn" },
                                    _react2.default.createElement(
                                        "a",
                                        { href: "./learnMore.html" },
                                        _react2.default.createElement(
                                            "div",
                                            { className: "learn-more-button" },
                                            _react2.default.createElement(
                                                "div",
                                                { className: "learn-more" },
                                                "LEARN MORE"
                                            )
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    _reactRouterDom.Link,
                                    { to: "/roadmap" },
                                    _react2.default.createElement(
                                        "a",
                                        { href: "./roadmap.html" },
                                        _react2.default.createElement(
                                            "div",
                                            { className: "roadmap-button" },
                                            _react2.default.createElement(
                                                "div",
                                                { className: "road-map" },
                                                "ROADMAP"
                                            )
                                        )
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "column column__two-thirds" },
                            _react2.default.createElement("img", { src: __webpack_require__(15), alt: "", className: "content__image" })
                        )
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "grid" },
                        _react2.default.createElement(
                            "p",
                            null,
                            " Need a more detailed explanation?"
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "video-container" },
                            _react2.default.createElement(
                                "video",
                                { className: "video-neureal", controls: true },
                                _react2.default.createElement("source", { src: "http://jennygreyson.com/wp-content/uploads/2017/12/limitless-copy.mp4", type: "video/mp4" }),
                                "Your browser does not support the video tag."
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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/Comp_1.74ffc125.gif";

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
                                _react2.default.createElement("img", { src: __webpack_require__(17), alt: "", className: "content__image" })
                            )
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "column column__one-third" },
                            _react2.default.createElement(
                                "h1",
                                { className: "content__title" },
                                "What is Neureal?"
                            ),
                            _react2.default.createElement(
                                "h3",
                                { className: "sub-title" },
                                " A limitless and infinitely scalable ability to forecast the future."
                            ),
                            _react2.default.createElement(
                                "p",
                                { className: "content__paragraph" },
                                "That may seem a wild boast, but the nascent technologies of blockchain and end-to-end learning truly gives rise to endless possibilities that can be applied across nearly every industry, from NOAA to Lyft. Our architecture is capable of predicting a heart attack accurately enough to save a life; predict a hurricane accurately enough to move vulnerable people out of harm\u2019s way, predict traffic and human pattterns accurately enough for companies like Lyft to adjust actions and add to their bottom line. From complicated to simple, Neureal\u2019s impact is far-reaching."
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
                                "How does it work?"
                            ),
                            _react2.default.createElement(
                                "h3",
                                { className: "sub-title" },
                                " Miners set up prediction nodes."
                            ),
                            _react2.default.createElement(
                                "p",
                                { className: "content__paragraph" },
                                "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                            ),
                            _react2.default.createElement(
                                "h3",
                                { className: "sub-title" },
                                " Nodes collect massive ammounts of data."
                            ),
                            _react2.default.createElement(
                                "p",
                                { className: "content__paragraph" },
                                "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                            )
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "column column__two-thirds" },
                            _react2.default.createElement("img", { src: __webpack_require__(18), alt: "", className: "content__image" })
                        )
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "flex-reverse" },
                        _react2.default.createElement(
                            "div",
                            { className: "column column__two-thirds" },
                            _react2.default.createElement("img", { src: __webpack_require__(19), alt: "", className: "content__image" })
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "column column__one-third" },
                            _react2.default.createElement(
                                "div",
                                { "learn-more-flex": true },
                                _react2.default.createElement(
                                    "h3",
                                    { className: "sub-title" },
                                    " Neureal protocal constructs the data in a hierarchical fashion allowing for accurate predictions using live data streams collected by the mining nodes."
                                ),
                                _react2.default.createElement(
                                    "p",
                                    { className: "content__paragraph" },
                                    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                                ),
                                _react2.default.createElement(
                                    "div",
                                    { className: "learn-more-padding" },
                                    _react2.default.createElement(
                                        "h3",
                                        { className: "sub-title" },
                                        " Selling the data. Neureal marketplace will allow miners to sell the data they've gathered to the public or to private entities allowing for a better user experience."
                                    ),
                                    _react2.default.createElement(
                                        "p",
                                        { className: "content__paragraph" },
                                        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/Comp_5.015f8bc8.gif";

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/Comp_2.8111c5ce.gif";

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/Comp_4.14236c39.gif";

/***/ }),
/* 20 */
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
        null,
        _react2.default.createElement(
          'div',
          { className: 'footer-container' },
          _react2.default.createElement(
            'div',
            { className: 'flex-social' },
            _react2.default.createElement(
              'div',
              { className: 'community' },
              'Join Our Community'
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
/* 21 */
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
            _react2.default.createElement("img", { src: "https://image.ibb.co/nBpm5n/roadmap.png", alt: "roadmap", "class": "roadmap-img" })
          )
        )
      );
    }
  }]);

  return RoadMap;
}(_react.Component);

exports.default = RoadMap;

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

var _TeamProfile = __webpack_require__(23);

var _TeamProfile2 = _interopRequireDefault(_TeamProfile);

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
                    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate maiores sed numquam labore quia ratione fugiat debitis, nulla reprehenderit pariatur!'
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'team-icon-container' },
                    _react2.default.createElement('img', { className: 'team-icon', src: '', alt: 'social' })
                  )
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
                    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate maiores sed numquam labore quia ratione fugiat debitis, nulla reprehenderit pariatur!'
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'team-icon-container' },
                    _react2.default.createElement('img', { className: 'team-icon', src: '', alt: 'social' })
                  )
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
                    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate maiores sed numquam labore quia ratione fugiat debitis, nulla reprehenderit pariatur!'
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'team-icon-container' },
                    _react2.default.createElement('img', { className: 'team-icon', src: '', alt: 'social' })
                  )
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
                    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate maiores sed numquam labore quia ratione fugiat debitis, nulla reprehenderit pariatur!'
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'team-icon-container' },
                    _react2.default.createElement('img', { className: 'team-icon', src: '', alt: 'social' })
                  )
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
                    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate maiores sed numquam labore quia ratione fugiat debitis, nulla reprehenderit pariatur!'
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'team-icon-container' },
                    _react2.default.createElement('img', { className: 'team-icon', src: '', alt: 'social' })
                  )
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
                    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate maiores sed numquam labore quia ratione fugiat debitis, nulla reprehenderit pariatur!'
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'team-icon-container' },
                    _react2.default.createElement('img', { className: 'team-icon', src: '', alt: 'social' })
                  )
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
                    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate maiores sed numquam labore quia ratione fugiat debitis, nulla reprehenderit pariatur!'
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'team-icon-container' },
                    _react2.default.createElement('img', { className: 'team-icon', src: '', alt: 'social' })
                  )
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
                    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate maiores sed numquam labore quia ratione fugiat debitis, nulla reprehenderit pariatur!'
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'team-icon-container' },
                    _react2.default.createElement('img', { className: 'team-icon', src: '', alt: 'social' })
                  )
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
/* 23 */
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

var TeamProfile = function (_Component) {
  _inherits(TeamProfile, _Component);

  function TeamProfile() {
    _classCallCheck(this, TeamProfile);

    return _possibleConstructorReturn(this, (TeamProfile.__proto__ || Object.getPrototypeOf(TeamProfile)).apply(this, arguments));
  }

  _createClass(TeamProfile, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'profile' },
        _react2.default.createElement('img', { src: __webpack_require__(1), alt: 'jen' }),
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
                _react2.default.createElement('img', { src: __webpack_require__(24), alt: 'jen', className: 'team-social-icon' })
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { 'class': 'close' },
            _react2.default.createElement('img', { src: __webpack_require__(25), alt: 'close', className: 'close-button' })
          )
        )
      );
    }
  }]);

  return TeamProfile;
}(_react.Component);

exports.default = TeamProfile;

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIsAAACACAYAAAA73po8AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxNTFCNjNERjFDN0QxMUUyQjkxNEY3RUNEMkY1ODRBRCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxNTFCNjNFMDFDN0QxMUUyQjkxNEY3RUNEMkY1ODRBRCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjE1MUI2M0REMUM3RDExRTJCOTE0RjdFQ0QyRjU4NEFEIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjE1MUI2M0RFMUM3RDExRTJCOTE0RjdFQ0QyRjU4NEFEIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+oJuRQQAABQBJREFUeNrsnT1MFEEUgG+MVpAgjSY2HI2xBCnUjgCFJhYkdFYY0cTOAhupsbGXRDChsyKBhAQKIXRggdBigdAYtRGS28bmfANzyYKXY3dvhp2d/b7kubBxf27fx8ybvdk7Va/XK+dRSo3LYlRiUKKrAkXmWGJDYlFyPd/WnrQsjRD6JHb1aiLI0Lnti+c8TcRF0a3JERc0+NA5Hs8iizr5RyndouzQYpeqaxqU3O+m2aghy4H83MM1LBWHkvtqmg2umGIWUcpHj8l9cllMrQLlZDRVN2SKHigp0hWpNC0LALIAsgCyALIAsgCyACALIAuEJEtHR8eWxHOJXn23sBHy+12zfos0FAcn8yZEgk2J/iTzJOT/DUnsVZhrcumRavKTI1Gms0yu0duRwBLJIgmfyDptzwgzQRJLIEvWFqWJMO9JpH+yWJuioAvVWq32wFYh1dnZuRdF0W1KSscFa05TFKYsv46XpNIvrLQstlsVWpewW5YFR69llnSGd1NuzdH5rZGiwLqhNE1Z6hNUijnCARa4QDcEYFEWGbVUXZycq/1Cvi3LiKPzGyFF4cky5uj8xkhRYKMhjZ6vUqvVDmx2QVEUfSdFYY6GZiy/jhlS6aFcFU+mJzBNgfksiIIs9oWR7SZJYMlkMcKsSFQTSlLVc3ZJXkkmP7UYJa1WTt+V/hwfLclop18WA3p4LKOeh5SO/o+G+DAfZOGNRPD3Di4gCwCyALKAS65yCazcHtAP969LfJX4I7Hf5DZBt/l1WKJX3zYo2pMLDJ3bE2ROYkHEOMqyD5HoeuV0GsaEiHPf96GzVVlsTtxOO1Hb1rEvOq6RZEoEWbeZNDMrcOayb1Aii4PjiiS/ZPHEtiRNpBmSxapIc803WShwk3U5n2Rxx7UoGnOMG3LMb0HXLCG2LPoddEngx8tOjKlnvrgugmlZ7LUouYhiWhhdNN8z3Z8XIIuHopwT5hGy+C3K67xFiQmzI+fzlprFw5pFaoUVSdAjn+Q19ctvFyMkapb28O5DhEx3lHtLR8tSEFw9R0XLEiD6vaa8770gS7GYRRZISq6fhEXNUjBsfxIWNUvA5PnFGMiSflQyJjEjsan/yuOh10lMmvsirtjN8/Xn8nRbgkclczt2i28u+VlJ9jTmX4lnjs5juhLC46uhypI1QS6E0dLmlTO6oYu7nckoit5k2Va2mzPzb4MAWVqLMiQJf9fmbmy/CbjP0NnDobOt7w6QrqM766Ru18Nnhs6WRj0WZ6kN0w2FzYTFffUjS8BYfiSDliXkwpargCxJGeASIEtSej3fH7J4hNWCVOqfm8gCdEMAyAJtwe1+C8cu8vlxux/ohgBZAFkAWQBZAJAFkAWQBZAFkAWQBQBZAFkAWQBZAFkAWQCQBZAFkAWQBYoE3+sMZ1BK3ZLF43Orl+v1+g9kgf9EETE+nFv/QmIZWSDOiShajti67cY6ahZoihbEtDAD1CxwUZfUaF22GQ1B6paFB+MtHLvI5xc/r1YFrh4RWZUFCtmCqKRDZ2RBFj5yA+yDLIAsgCyALIAsgCyALADIAsgCOciyxGUoLUtpZVnkmpWWVLlX+pvAlVIH8nMP165UHEruq1lqllGuXak4zpLzE1nEsF1ZPDU7gfBFeWVyng7dDTVC6JPQO6kTQYbObV8852lCGUnOFjJKjZtmalCiiz/GwrckG7qYlVzPt7OjfwIMAN9R2U1EzV3sAAAAAElFTkSuQmCC"

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAACE3AAAhNwEzWJ96AAADiklEQVR42u3aMXLaQBTG8Y/XuTJH8A2M6zTMQAEFDDlB5BvYuQBMTuCcAPkEZtSoUUFmcgByg+QGoUqpFMgeQjBIYnffe9LTDAVYGPj/vNKKdSfPcwzH0wWAPnbbGsBTlia/YZuzbTie3gB4AtAtHlpkabLuDEaTBYD5wf4/APQNwVn8XvGHfX3wozsCEB15zi2A9XA87Vo+b/EBYEZ7Q8IQwsYHABCA1YnfYQge4wPYEICH4phvCGHjP2dpsqLiRNs3hODxo9dDEAyBJ/4bgCHwxP8HwBDCx/8PwBDCxj8KYAjh4r8LYAhh4p8EMAT/8c8CGILf+KUADMFf/NIAhuAnfiWANiP4il8ZoI0IJeM/1okPAJ08z+u+sW7xxm5P7KZ6Za1k/PssTeK6r0F1n9j0kRAi/kUATUYIFf9igCYihIzvBKBJCKHjOwM4QHjWiMAR/6JZ0JkPEwP4pGV2xBXf6Qg4GA2RlpHAGd8bgBYE7vheAaQjSIjvHUAqgpT4QQCkIUiKHwxACoK0+EEBuBEkxg8OwIUgNT4LQGiE4Xg6kxqfDSAUwnA8jQC8SI3PCuAboYi/PLMba3x2AF8IWuKLAHCNoCm+GABXCNriiwKogLApppXq4wOe1gMcTB1jnF5P2GK3nrDRHF8sQBUEAD2t8UUDlET4A+BKa3zxACUR1MYXdxKueWJWG18FQE0EFfFVHIIODkffAXw4s9s8S5MvWj4TKYoflYgPAJ+PXScYwOXxlyV3vy6umHsGED6+OgRqYHxVCKQ8/v2Z2ZF4BNIcP0uTuMQUVTQCaY5f4TpBLAJpj68dgZoQXzMCNSW+VgRqUnyNCNS0+NoQqInxNSGQ0PhbAB9dfKUsHSH419El478tuDt83RgVFvobOQK44kseCdSG+JIRqC3xpSJQm+JLRKC2xT9AeORG8DYLkhxf0vukNscvRkKM3cIOy0igNseXgEBtj8+NQBafF4EsPi8CWXxeBLL4vAhk8XkRqGb8RdPjh0KofCUs9Xt1rVfMZPF5RwJZfF4Esvi8CGTxeRHI4ntHmNUCsPjOEF6KGVR5AIvvFAEAlu8hkMXnRSCLz4tAFp8XgSw+L0JnMJosAMwtvtut5H9/3xGAyOKzjYQZAehafD4EArCy+GwIPwnAA4Bvew/+svjeELZ7D3/N0iRGnufI8xyD0eRmMJrcvN63m5/bYDTp7d//CxOB1elMtAiLAAAAAElFTkSuQmCC"

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

var _reactRouterDom = __webpack_require__(4);

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
                      _react2.default.createElement("img", { className: "author-of-blog", src: __webpack_require__(3), alt: "author" }),
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
                        _react2.default.createElement("img", { className: "author-of-blog", src: __webpack_require__(3), alt: "author" }),
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
                        _react2.default.createElement("img", { className: "author-of-blog", src: __webpack_require__(3), alt: "author" }),
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
                        _react2.default.createElement("img", { className: "author-of-blog", src: __webpack_require__(3), alt: "author" }),
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
                        _react2.default.createElement("img", { className: "author-of-blog", src: __webpack_require__(3), alt: "author" }),
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
                        _react2.default.createElement("img", { className: "author-of-blog", src: __webpack_require__(3), alt: "author" }),
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
                        _react2.default.createElement("img", { className: "author-of-blog", src: __webpack_require__(3), alt: "author" }),
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
/* 27 */
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
//# sourceMappingURL=static.a8ee619f.js.map