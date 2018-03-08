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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAN11AADddQGsh8ODAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAACPFJREFUeNrsnX2w1kUVxz8gviQygRqiVwwxNQZfIkVMw4uQShJoioOoOBZYapoZozM5GWilNvkSyvhSVuJ1BGmCCJXRgstLMoPCRYFAL6hQQCikCElcXu7pjz2Nj9dnfy/7++3veS53vzPPwOz+dvfc/T6/PXvOnj1POxEhoHrQPkxBICQgEBIICQiEBEICAiGBkIBASCAkIBASYEOHMAWZ8EVgKNAL2APMBp7N0mG74Fx0wkXACOBC4LMt6uqBscDSQIhfHAzcCFwMfCXm2b1AXxdSAiHxOBm4HrgU6Jqi3VqgN7AjKPXsaAdcDjwHLFNCuqbsowdwTVDq2XAk8APgCuDoHPo7NRDihjOA24EhjnPyH+CQMuUHBDskOQ7SN6EBWKQ7p7RkTAf6Aast9TvCGxKPnrpbugr4nEP794HHgF8D67Sst+XZ9wIhdiX9DeC7uiy54K/Ak8CfgI9Kyk+KWJreDIR8EseoJT0WONah/WZgJvAw8JrlmdMi3qR5gRCDfsCVujS1c2j/OjAV+FUCPTDAUv4q8K+2TEgHfRuuBb7u2MdMXZampWhzvKV8g+sf0dpxLDAMuAX4vEP7jUrEQ8BKh/Y2e+WttkbIULWmr3BsPw+YDPwe2OXYR4+IL0F9WyBkPz528A1w7ONxXZJeykGeWkv5VuCVfZmQXsAYYLjunNJindoO04DGHOU6x1K+GOPx3ecIuRAYpUuTC2YDdfppTtm2BtgGbHdQ6Ouz7EyqDZ2BbwGXAF91aL9Ld0pTlRCXTcLPgZHA0/qFSKvQ1zj/9SJSLZ+TRKRORD4UN6wRketEpFsGGe4WkeaSPgdGPNs9QpazXWWoBiK+KSLzxR2zROS8jDLUisjyFv2eEdNmlEWerSKyv6sslVqyDgVuVgdfT4f2HwGPAE9kVNKHaD+ly9JO4Ey11l0U+hJgd2vRIV8GblNHX0eH9o3AvcAM9RVlwdXA/cDhJWX/xpyNvJ2g/RfytNCLJKQLxsN6k/6xabEdmAU8CszNQZ6+wC+Ac8so4rPUoZjUcVkOqzNJ51E39FYluc1RNzSKyL0i0iUneQ4QkfGWsZaKyMEp+jo6Qu7+WeT0QcQgEZmWQUnPF5GrcpZpiIiss4w3z6G/Ky197UxJrDdCuonIaBFZ4UjCVhF5WkROy5mIGt1K2/CCY7+PWfp7J6vMWXXIl/Tc4SbgQIf2q9SdcT/wQc66a4x6cD9jqZ+ixp8LbBb6O5mldmTyGhF5LsOy9KyIXOJJd9UmsGseyDhGo6XfcVnlT/NwdxG5Q0RWOZKwSZX8qZ6I6CgiExLIcUfGcY5qYc2XorYoQsaJSJMjEQtF5GadMF87uhERSrsUt+Yw1khL300i0qkIHTIbGOiwGtYBf1Qjzudp4T2YSPQ4XKdnIVlxgqV8U4xnOBfD8PmUZGxUd8ZU4O+eDc7bgLsSbiZGqhLPAzXeFHoMIefoeUQSLAAmYIKTmzwTcS7wIMnjZs8H/pLj+P0s5fN9E/L9iLo9wBZ9E+r0hMw3DgQm6nY2CZqB/sDCHGXoBpxiqZvrm5CoCI5XdWJWUgyuVqfikQmf/6/6rPJeNmsjvqBL8hggKth6eUTd6ZiQylnquj7GExGnYIIRJqUgY70uZz50WJRC/zCXEWJO8NKgXref3XPYWnYQkbscttgrRaSzx+3145Zx5+Y1RtwDf3C0PV4QkeGOx6lDRGStw5gvZzmpS/hpsIz9s6IIQUQWZHCR7BaR6eom6ZrAQTnJcZw5BRw1HxEx/teKJAQRmSjZ0SQik0VkqIgcVsY3ttOx3xkFnf0Pt4y/N8czm1S3cE/QndXZerKWBTvUUFukVvZAx34mqqe5CPwY+KnFGK7JaxDXa9H99Vx8gOOxbB64B3MvsCg8qu6XlvibzkcucD0PWaAfgPOAC4BBej5SBO4Exhf8BehrKZ+X5yB5Jw64ABis//byNDE/VNdJkeiqtka5yz/DMNcZKvqG2PCifv4v6CBd2nrm1P8NunQUjROx38TakOdAPq9F/xkTDHecKu2svp5LK0RGlId3N1nieAt4Q2yox8Q7LXdoux1zh7yeyuF0S/liTIR8q3hDWmIFbmGft1eYDPh0UF2uHt5KEQJu1wPWVJiMw4E+lrpXWjshLgdFH1SYkCiFvr61EzJdt49J0URxZy5pFfpeHG/aVhMhkO6y5TJyCBzICFumhiU+3t5KEPJyimeT5Ar5tm4W+niSd2BRCr1ShEzBXIpJgi0x9WOA32JCOxuA0TnLeijmTks5LNpXCNlWYs3HYWNE3Z3Ab1qUPQE8hcmFlZdCb1+EhV5JQsB4SJPAZkg+APzEUjcKk7mndw5yHmUpbybrxZwqI2QykMSr2VCmrA6T1yTum70CE63iw0JfSvYrdVVFyIYEBl8jn87INgNzUTQpJgH3ebDQvXkOKplzMc5IXFHy/066OxvmMM5YYA7ps4x2idjyLtoXCZmQcIfVQ3XJWRm/6W8Al6VU6B2KstCrgZDGmD9sOiZ8tIH4PFgjdPsbhY6Y0NfxCeWzBeYJHv1rlU4Tazv+3InJr96gS4cNOzBHq1PVJklyxj4OExTeKea5vhEW+hZvM1LhtBr9LaE1uxKE/2wQkeMtt4A3J2i/XkQGRMi20NJuos85qfQbsoDyMbH7x7R7QxVuOVtgNiZ1a5xro0Z3Szda6m2ZGv7pc0KqIbP1HAej8mSivcbvqiK/O0F/D6u+KrXuO/PJlBulWO11NqogG1CfFFGKMx36v0hE9iToe62I9NI2gyOeO8LnfFRLrqzFCSbsyQz9H1cm/VJUuqd3LXWv+Z6LaknGPyqm/pc4/BZHCd7SZe53CZ4djP23Qpb5nohqIWQV5i7g62XW62sxFzzzwGjgOzgmqMSkDvSKavzJozMxgXUb8XQIhLlhNQXzK2tJ8QjwvbZISFFoDzxDsjvuL+pSVohQbRXNmPSzP4qwLTZjkp0NLkqo8CttH9sdF6sx2BFzi/cfmIutm4oUJBBShetoQCAkIBASCAkIhARCAgIhgZCAQEggJCAQEhAICYQEpMb/BgBF27IRYOy+4AAAAABJRU5ErkJggg=="

/***/ }),
/* 3 */
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
/* 4 */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/kyler.32044d4b.jpg";

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/brian.b24dadcc.jpg";

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/nick.cce55bf5.jpg";

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/brian_sewell.c28806bf.jpg";

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/ethan.db579abb.jpg";

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(12);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(1);

var _App = __webpack_require__(13);

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
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHotLoader = __webpack_require__(15);

__webpack_require__(16);

var _reactStatic = __webpack_require__(17);

var _SocialBar = __webpack_require__(18);

var _SocialBar2 = _interopRequireDefault(_SocialBar);

var _NavigationBar = __webpack_require__(19);

var _NavigationBar2 = _interopRequireDefault(_NavigationBar);

var _MobileNav = __webpack_require__(20);

var _MobileNav2 = _interopRequireDefault(_MobileNav);

var _HomePage = __webpack_require__(21);

var _HomePage2 = _interopRequireDefault(_HomePage);

var _Footer = __webpack_require__(23);

var _Footer2 = _interopRequireDefault(_Footer);

var _RoadMap = __webpack_require__(24);

var _RoadMap2 = _interopRequireDefault(_RoadMap);

var _Team = __webpack_require__(26);

var _Team2 = _interopRequireDefault(_Team);

var _Blog = __webpack_require__(28);

var _Blog2 = _interopRequireDefault(_Blog);

var _BlogPosts = __webpack_require__(29);

var _BlogPosts2 = _interopRequireDefault(_BlogPosts);

var _News = __webpack_require__(30);

var _News2 = _interopRequireDefault(_News);

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
          { className: 'overlay-body' },
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
                _react2.default.createElement(_reactStatic.Route, { component: _RoadMap2.default, path: '/roadmap' }),
                _react2.default.createElement(_reactStatic.Route, { component: _Blog2.default, path: '/blog' }),
                _react2.default.createElement(_reactStatic.Route, { component: _Team2.default, path: '/team' }),
                _react2.default.createElement(_reactStatic.Route, { component: _News2.default, path: '/news' }),
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
// ion-social-usd

// ion-android-locate 

// ion-android-checkbox-outline
// ion-android-checkmark-circle


exports.default = (0, _reactHotLoader.hot)(module)(App);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)(module)))

/***/ }),
/* 14 */
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
/* 15 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 18 */
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
              _react2.default.createElement('a', { className: 'git-nav ion-social-github', href: 'https://github.com/neureal', target: '_blank' }),
              _react2.default.createElement('a', { className: 'fb-nav ion-social-facebook', href: 'https://github.com/neureal', target: '_blank' }),
              _react2.default.createElement('a', { className: 'rdt-nav ion-social-reddit', href: 'https://www.reddit.com/r/NeuralNetwork/', target: '_blank' }),
              _react2.default.createElement('a', { className: 'twi-nav ion-social-twitter', href: 'https://twitter.com/neurealai', target: '_blank' }),
              _react2.default.createElement('a', { className: 'lnk-nav ion-social-linkedin', href: 'https://www.linkedin.com/company/neureal/', target: '_blank' }),
              _react2.default.createElement('a', { className: 'you-nav ion-social-youtube', href: 'https://www.youtube.com/channel/UCkebLOaWk9vplZ6ZWLcbvtA', target: '_blank' }),
              _react2.default.createElement(
                'a',
                { href: 'https://t.co/UiTeDbNd2i', target: '_blank' },
                _react2.default.createElement('img', { className: 'telegram-logo', src: __webpack_require__(2), alt: '' })
              )
            )
          )
        )
      )
    )
  );
};

exports.default = SocialBar;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

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
            _react2.default.createElement("img", { src: "https://image.ibb.co/dho4cn/logo_Asset_Blue.png", alt: "logo", className: "logo" })
          ),
          _react2.default.createElement(
            "nav",
            { className: "nav-menu" },
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: "/blog-1" },
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
              _reactRouterDom.Link,
              { to: "/news" },
              _react2.default.createElement(
                "span",
                { className: "nav-menu__item" },
                "News"
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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

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
              null,
              _react2.default.createElement('img', { src: 'https://image.ibb.co/mh7VHn/logo_Asset_White.png', alt: 'logo', className: 'logo' })
            )
          ),
          _react2.default.createElement(
            'ul',
            { className: 'menu' },
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/blog-1', onClick: this.closeMenu.bind(this) },
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
                  null,
                  'Team'
                )
              )
            ),
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/News', onClick: this.closeMenu.bind(this) },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'a',
                  null,
                  'News'
                )
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement('img', { className: 'sidebar-image', src: 'https://image.ibb.co/bZ8LHn/prediction_side_bar_asset_copy.png', alt: 'logo' })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'social-icon' },
            _react2.default.createElement('a', { className: 'git-mob ion-social-github', href: 'https://github.com/neureal', target: '_blank' }),
            _react2.default.createElement('a', { className: 'fb-mob ion-social-facebook', href: 'https://github.com/neureal', target: '_blank' }),
            _react2.default.createElement('a', { className: 'rdt-mob ion-social-reddit', href: 'https://www.reddit.com/r/NeuralNetwork/', target: '_blank' }),
            _react2.default.createElement('a', { className: 'twi-mob ion-social-twitter', href: 'https://twitter.com/neurealai', target: '_blank' }),
            _react2.default.createElement('a', { className: 'lnk-mob ion-social-linkedin', href: 'https://www.linkedin.com/company/neureal/', target: '_blank' }),
            _react2.default.createElement('a', { className: 'you-mob ion-social-youtube', href: 'https://www.youtube.com/channel/UCkebLOaWk9vplZ6ZWLcbvtA', target: '_blank' }),
            _react2.default.createElement(
              'a',
              { href: 'https://t.co/UiTeDbNd2i', target: '_blank' },
              _react2.default.createElement('img', { className: 'telegram-logo', src: __webpack_require__(2), alt: '' })
            )
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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _EmailForm = __webpack_require__(3);

var _EmailForm2 = _interopRequireDefault(_EmailForm);

var _LearnMore = __webpack_require__(22);

var _LearnMore2 = _interopRequireDefault(_LearnMore);

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
                                'A limitless and infinitely scalable ability to forecast the future.',
                                _react2.default.createElement('br', null),
                                _react2.default.createElement('br', null),
                                'That may seem a wild boast, but the nascent technologies of blockchain and end-to-end learning truly gives rise to endless possibilities that can be applied across nearly every industry, from NOAA to Lyft. Our architecture is capable of predicting a heart attack accurately enough to save a life; predict a hurricane accurately enough to move vulnerable people out of harm\u2019s way, predict traffic and human patterns accurately enough for companies like Lyft to adjust actions and add to their bottom line. From complicated to simple, Neureal\u2019s impact is far-reaching.'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'home-button-flex' },
                                _react2.default.createElement(
                                    'a',
                                    { href: 'https://docs.google.com/document/d/1kOJx7clG2V4TevhgwndRDievXpVaAciPzjmqGxI0CtA/edit#', target: '_blank' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'learn-more-button' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'learn-more' },
                                            'WHITEPAPER'
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
                            _react2.default.createElement('img', { src: 'https://image.ibb.co/eTnEcn/Comp_1.gif', alt: '', className: 'content__image' })
                        )
                    ),
                    _react2.default.createElement(
                        'h1',
                        { className: 'content__quote' },
                        '"Top 20 Most Promising Artificial Intelligence Solution Providers',
                        _react2.default.createElement('br', null),
                        ' 2017\u2013CIOReview"'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'flex-columns' },
                        _react2.default.createElement(
                            'div',
                            { className: 'info-box' },
                            _react2.default.createElement(
                                'div',
                                { className: 'info-box-container' },
                                _react2.default.createElement(
                                    'div',
                                    { className: '.column-half' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'info-subtitle-flex' },
                                        _react2.default.createElement('a', { className: 'info-icon  ion-android-locate ' }),
                                        _react2.default.createElement(
                                            'h1',
                                            { className: 'content__title' },
                                            'Accuracy'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'content__paragraph' },
                                        'Prediction is worthless without accuracy. Our ability to harness compute via blockchain technology, coupled with the ability to create predictors out of novice users creates unsurpassed accuracy.'
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'info-box' },
                            _react2.default.createElement(
                                'div',
                                { className: 'info-box-container' },
                                _react2.default.createElement(
                                    'div',
                                    { className: '.column-half' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'info-subtitle-flex' },
                                        _react2.default.createElement('a', { className: 'info-icon  ion-android-checkbox-outline ' }),
                                        _react2.default.createElement(
                                            'h1',
                                            { className: 'content__title' },
                                            'Proven'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'content__paragraph' },
                                        'Folding@home + Bitcoin. Community is far more powerful than individual effort, whether measured inside company structures or global neighborhoods.'
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'padding-header-section' },
                            _react2.default.createElement(
                                'div',
                                { className: 'info-box' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'info-box-container' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: '.column-half' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'info-subtitle-flex' },
                                            _react2.default.createElement('a', { className: 'info-icon  ion-card' }),
                                            _react2.default.createElement(
                                                'h1',
                                                { className: 'content__title' },
                                                'Incentivized'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'p',
                                            { className: 'content__paragraph' },
                                            'Adding the ability to pay and get paid within an open-source governance incentivizes and rewards all participants, no matter what role they play inside the organism.'
                                        )
                                    )
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'column' },
                        _react2.default.createElement(
                            'h1',
                            { className: 'as-seen-caption' },
                            'As seen in'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'as-seen-container' },
                            _react2.default.createElement('img', { className: 'as-seen-image', src: 'https://image.ibb.co/n2m6Q7/medium.png', alt: 'team' }),
                            _react2.default.createElement('img', { className: 'as-seen-image', src: 'https://image.ibb.co/eFFNyS/bitcoin.png', alt: 'team' }),
                            _react2.default.createElement('img', { className: 'as-seen-image', src: 'https://image.ibb.co/eFZMsn/usa_weekly.jpg', alt: 'team' }),
                            _react2.default.createElement('img', { className: 'as-seen-image', src: 'https://image.ibb.co/eaNKdS/steemit.png', alt: 'team' }),
                            _react2.default.createElement('img', { className: 'as-seen-image', src: 'https://image.ibb.co/hBtsyS/chippin.png', alt: 'team' }),
                            _react2.default.createElement('img', { className: 'as-seen-image', src: 'https://image.ibb.co/jTEbQ7/cointele.png', alt: 'team' }),
                            _react2.default.createElement('img', { className: 'as-seen-image', src: 'https://image.ibb.co/eWKnXn/value.png', alt: 'team' }),
                            _react2.default.createElement('img', { className: 'as-seen-image', src: 'https://image.ibb.co/nHRO57/future.jpg', alt: 'team' }),
                            _react2.default.createElement('img', { className: 'as-seen-image', src: 'https://image.ibb.co/cwgqk7/decentral_market.png', alt: 'team' }),
                            _react2.default.createElement('img', { className: 'as-seen-image', src: 'https://image.ibb.co/d5HD57/cryptoknight.jpg', alt: 'team' })
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'grid' },
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
                    ),
                    _react2.default.createElement(_LearnMore2.default, null)
                )
            );
        }
    }]);

    return HomePage;
}(_react.Component);

//Team Section Quote

//Roadmap button
//Paper Texture
//Whitepaper button
//Extra content from jen grayson site that is missing
//As seen on below this icons (icons)
//Learn more below this page
//Modal

//First Sentence
//White paper Button Silver
//Blog Post ReRoute
//"As seen" Section
//Call Uncle Andy
//Whitepaper link
//Learn more in blog


//Seperate accountability advisors from main
//Whitepaper pdf to HTML
//More Team & Advisors members
//Sale Section


exports.default = HomePage;

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
                                _react2.default.createElement("img", { src: "https://image.ibb.co/n6tLHn/Comp_5.gif", alt: "", className: "content__image" })
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
                            _react2.default.createElement("img", { src: "https://image.ibb.co/kdHKA7/Comp_2.gif", alt: "", className: "content__image" })
                        )
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "flex-reverse" },
                        _react2.default.createElement(
                            "div",
                            { className: "column column__two-thirds" },
                            _react2.default.createElement("img", { src: "https://image.ibb.co/bG34cn/Comp_4.gif", alt: "", className: "content__image" })
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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _EmailForm = __webpack_require__(3);

var _EmailForm2 = _interopRequireDefault(_EmailForm);

var _reactRouterDom = __webpack_require__(1);

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
              _react2.default.createElement('img', { className: 'footer-asset', src: 'https://image.ibb.co/iZJbq7/footer_asset.png', alt: '' }),
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

module.exports = __webpack_require__.p + "static/roadmap-blue-asset.c21ce8f4.png";

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

var _TeamModal = __webpack_require__(27);

var _TeamModal2 = _interopRequireDefault(_TeamModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var jenImage = 'https://image.ibb.co/iWPucn/jen.jpg';
var wilImage = 'https://image.ibb.co/k0iy3S/wil.jpg';
var jordanImage = __webpack_require__(4);
var kylerImage = __webpack_require__(5);
var jamesImage = __webpack_require__(6);
var brianImage = __webpack_require__(7);
var nickImage = __webpack_require__(8);
var brianSewImage = __webpack_require__(9);
var ethanImage = __webpack_require__(10);

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
      openJordan: false,
      openEthan: false
    }, _this.clickOpenJen = function () {
      _this.setState({
        openJen: !_this.state.openJen
      });
      console.log('hi hey');
    }, _this.clickOpenWil = function () {
      _this.setState({
        openWil: !_this.state.openWil
      });
      console.log('hi');
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
    }, _this.clickOpenEthan = function () {
      _this.setState({
        openEthan: !_this.state.openEthan
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Team, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_TeamModal2.default, {
          onClose: this.clickOpenJen,
          clickOpen: this.state.openJen,
          nameModal: 'Jen Greyson',
          roleModal: 'CEO',
          biographyModal: 'Prior to being named one of the Top 8 Women in Crypto, Jen managed a multi-million dollar life insurance company during a highly lucrative and chaotic run-up of the industry, as well as managing morale, forecasting, and finances during the impacts of AIG’s multi-billion dollar crash, giving her a unique comfort level of leading from within the volatility of cryptocurrency. With over two decades of experience building and maintaining entrepreneurial organisms, from startups to established partnerships in numerous industries, her involvement at the onset of new development has repeatedly generated millions to bottom line. For the last decade, she specialized in intellectual property, working intimately with both NYT bestselling clients as well as smaller first-time movers into the publishing space to create, systematize, and deploy new income streams. Clients include New York Times and USA Today bestselling thriller, mystery, and fantasy writers, as well as international speakers, business coaches, and serial entre- preneurs. Her chaos management strategies identify and implement systems to enable the structures to exist beyond her involvement, ensuring their continued success is not based on singular individuals, but as a whole. Systems are everything. Strategic decisions are everything else. Nothing works without community', imageModal: jenImage
        }),
        _react2.default.createElement(_TeamModal2.default, {
          onClose: this.clickOpenWil,
          clickOpen: this.state.openWil,
          nameModal: 'Wil Bown',
          roleModal: 'Founder | Chief Architect',
          biographyModal: 'Wil has been working as a contract so ware engineer for over 23 years. He almost single-handedly developed the Mozaex Media Server which did over $30 million in sales. A local Bitcoin activist, he has been mining cryptocurrencies since 2011, is the organizer of the 500+ member Utah Bitcoin Community meetup, won top prize at the Million Dollar Texas Bitcoin Conference hackathon in 2015, contributed code to main fork Bitcoin, and has been involved in several bitcoin startup projects. Wil considers himself an old school Cyberpunk and hopes to gradually merge his mind directly with machines and to help build strong artificial intelligence. As founder of Neureal, Wil is the keeper of the vision and passion of where Neureal is headed. He is the torchbearer for open source and ongoing educator, committed to enrolling people in both his vision and his uniquely expansive view of the future for artificial intelli- gence and the way humans and technology will interact and integrate in a future that is no longer very far away. The architecture for Neureal exists as a whole inside his head and it is through the coming phases of Neureal’s road map-- with the help, guidance, and stewardship of other members of the core team--that we, as a community, will be able to begin using what he’s already envisioned.', imageModal: wilImage
        }),
        _react2.default.createElement(_TeamModal2.default, {
          onClose: this.clickOpenJordan,
          clickOpen: this.state.openJordan,
          nameModal: 'Jordan Miller',
          roleModal: 'Founder | Architect',
          biographyModal: 'Creator of the maestro ai project (maestroai.com), Jordan has a background in distributed systems, machine learning, economics, phi- losophy and information theory. Jordan’s ability to maintain a 30,000-foot view allows him to quickly locate pertinent and relevant details, disseminate the information, and move projects and people forward. An autodidact, Jordan wants to know everything and thinks the easiest way to do this is to build a learning machine.', imageModal: jordanImage
        }),
        _react2.default.createElement(_TeamModal2.default, {
          onClose: this.clickOpenKyler,
          clickOpen: this.state.openKyler,
          nameModal: 'Kyler Anderson',
          roleModal: 'Community Manager',
          biographyModal: 'For Kyler, understanding human behavior and the dynamics of communities has been a lifelong fascination and obsession. He has studied and maintained a working knowledge of the field of applied behavior analysis psychology. Kyler was recruited by the USMC and trained in advanced electrical engineering. He later became a chief marksmanship instructor, distinguishing himself as an exem- plary leader, presenter, and educator. For three years he presented on a daily basis to hundreds of individuals from wildly di ering edu- cational, intellectual, and socioeconomic backgrounds, including Generals and foreign dignitaries. His intuitive communication style ensures each connection receives the same understanding, committed to following up until the participant has a full grasp of the mate- rial. Kyler was the lead producer for the worlds first terrestrial radio program about cryptocurrency, has been active in the cryptocurrency community since 2012, and has an extensive and successful history in deal flow, team building and sales. Kyler is passionate about free- ing all humanity, and he firmly believes Blockchain technology, decentralization, and servant leadership are all necessary components of that future.', imageModal: kylerImage
        }),
        _react2.default.createElement(_TeamModal2.default, {
          onClose: this.clickOpenJames,
          clickOpen: this.state.openJames,
          nameModal: 'James Alton',
          roleModal: 'Developer | Dev Ops, Ethereum',
          biographyModal: 'With over 17 years as a so ware developer heavily involved with information technology, his diversified experience includes applica- tions in hardware and so ware solutions for the U.S. Federal Government and banking industries. Programming language expert in Solidity, Javascript and Python. His intense research in blockchain technology started in 2011 and he was an early bitcoin miner. James has also contributed to many other projects including ones involving artificial intelligence. James and Wil collaborate and develop smart contracts and code deployed within the Neureal so ware. Additionally, James is pas- sionate about weather prediction, having invested heavily in sensors being deployed across remote locations to further increase the accuracy of the ability for the Neureal sotware’s predictive ensembles. His work on Neureal’s MVP for hurricane modeling helped guide the decision to add Barbuda as a corporate location and setting for Neureal’s first digital/physical humanitarian e ort.', imageModal: jamesImage
        }),
        _react2.default.createElement(_TeamModal2.default, {
          onClose: this.clickOpenBrianNel,
          clickOpen: this.state.openBrianNel,
          nameModal: 'Brian Nelson',
          roleModal: 'Relationships | Regulation',
          biographyModal: 'Brian Nelson is the founder of ExTech Ventures, an organization focused on helping exponential technology entrepreneurs launch world changing products and services. Before launching ExTech Ventures, Brian co-founded Sig3, an automated co-signer security product for multi-sig bitcoin wallets. As a recognized figure in the Bitcoin and blockchain technology ecosystem, he has consulted many of the top digital currency companies, spoken at numerous industry events and was one of 40 industry insiders to attend the Blockchain Summit with Richard Branson on Necker Island. Brian has recently traveled to London and Kiev to represent Neureal at cryptocurrency events, building relationships and expanding the community for Neureal. He has made numerous connections and is working closely with the sales and relationship team to hando  these connections in a way to best expand Neureal’s community.', imageModal: brianImage
        }),
        _react2.default.createElement(_TeamModal2.default, {
          onClose: this.clickOpenNick,
          clickOpen: this.state.openNick,
          nameModal: 'Nick Baguley',
          roleModal: 'Data Science | Contacts, Strategy',
          biographyModal: 'Nick Baguley is a well-known Community Leader in the technology space in the West. His connections in Data Science and Big Data spread around the world. As one of the earliest co-founders of a HUG (Hadoop User’s Group) in the United States and as an entrepre- neur, Nick has been able to influence and help create the rising wave of Big Data and Analytics in Utah. He has been heavily involved in the Big Data Hubs and the National Data Science Organizers (NDSO) group from the White House. Through Big Data Utah and Utah Geek Events, he has created and co-organized many large conferences and competitions. Nick founded Evolve STEAM, a training entity focused on Data Science, AI and Data Engineering. Nick co-founded Data Scrubs, a Data Science company that is creating a Data pipeline product with a near-real time serverless architec- ture for the finance industry and other decisioning functions. Nick co-founded Crossfold.tech, a recruiting company focused on the Data Science, Data Engineering and roles in the algorithmic economy. Nick has acted as an advisor to Universities, Non-Profits, Corpo- rations, Startups, and Individuals for years. This has allowed Nick to impact curriculum, strategic directions for companies, hiring deci- sions, career advancements and to build communities.', imageModal: nickImage
        }),
        _react2.default.createElement(_TeamModal2.default, {
          onClose: this.clickOpenBrianBag,
          clickOpen: this.state.openBrianBag,
          nameModal: 'Brian Sewell',
          roleModal: 'Education',
          biographyModal: 'Brian Sewell is Founder and CEO of The American Bitcoin Academy, the thought leader in cryptocurrency education. Mr. Sewell is a serial entrepreneur who has owned several companies in the technology, energy and manufacturing industries. Mr. Sewell is also a former executive with World Savings & Loan, a Fortune 500 company that was purchased by Wells Fargo (NYSE: WFC). His passion for entrepreneurship and learning from the best leaders in the world also led him to host of the internationally acclaimed entrepreneurial radio broadcast, “The Brian Sewell Show.” He has previously managed more than $1.1 Billion in assets and is recognized for his fiscal, strategic, and operational vision and leadership. Mr. Sewell received his education from Dixie University, Johns Hopkins University and Stanford.', imageModal: brianSewImage
        }),
        _react2.default.createElement(_TeamModal2.default, {
          onClose: this.clickOpenEthan,
          clickOpen: this.state.openEthan,
          nameModal: 'Former radio talk show host, blockchain educator and advisor.',
          roleModal: 'Former radio talk show host | blockchain educator and advisor.',
          biographyModal: "Ethan started out in the crypto space in 2012 when Bitcoin luminaries and economists at the time began educating him in regard to the potential of blockchain technology. Primarily focussed on the currency and money value proposition in Bitcoin, Ethan drove discussion on Bitcoin and blockchain tech amongst economists, technologists, industry leaders and entrepreneurs both as a method of learning more about the technology, and as a way to drive blockchain tech adoption among members of his audience and beyond. Ethan has since become an investor in cryptocurrency projects and has performed freelance consulting to major and minor concerns alike in respect to high level blockchain concepts.", imageModal: ethanImage
        }),
        _react2.default.createElement(
          'div',
          { className: 'content-team' },
          _react2.default.createElement(
            'div',
            { className: 'column column__title' },
            _react2.default.createElement(
              'h2',
              { className: 'team-title' },
              'Meet the Core Team & Advisors'
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
                { className: 'team-box', onClick: this.clickOpenJen },
                _react2.default.createElement(
                  'div',
                  { className: 'team-box-container', type: 'button', value: 'Show Modal' },
                  _react2.default.createElement(
                    'div',
                    { className: 'team-image-container' },
                    _react2.default.createElement('img', { className: 'team-image', src: 'https://image.ibb.co/iWPucn/jen.jpg', alt: 'team' })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'name-title-container' },
                    _react2.default.createElement(
                      'div',
                      { className: 'team-name' },
                      'Jen Greyson'
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
                { className: 'team-box', onClick: this.clickOpenWil },
                _react2.default.createElement(
                  'div',
                  { className: 'team-box-container' },
                  _react2.default.createElement(
                    'div',
                    { className: 'team-image-container' },
                    _react2.default.createElement('img', { className: 'team-image', src: 'https://image.ibb.co/k0iy3S/wil.jpg', alt: 'team' })
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
                      'Founder | Chief Architect'
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
                { className: 'team-box', onClick: this.clickOpenJordan },
                _react2.default.createElement(
                  'div',
                  { className: 'team-box-container' },
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
                      'Jordan Miller'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'team-role' },
                      'Founder | Architect'
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'biography' },
                    'Creator of the maestro ai project (maestroai.com), Jordan has a background in distributed systems, machine learning, economics, phi- losophy and information theory.'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'team-icon-container' },
                  _react2.default.createElement('a', { className: 'lk ion-social-linkedin', href: 'https://www.linkedin.com/in/jordan-miller-636724b/' })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'team-box', onClick: this.clickOpenKyler },
                _react2.default.createElement(
                  'div',
                  { className: 'team-box-container' },
                  _react2.default.createElement(
                    'div',
                    { className: 'team-image-container' },
                    _react2.default.createElement('img', { className: 'team-image', src: __webpack_require__(5), alt: 'team' })
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
                    'Expert connector focused in applied behavior analysis psychology. Marine. Miner. Engineer. Educator. Deal flow. Producer of the first live crypto radio show.'
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
                { className: 'team-box', onClick: this.clickOpenJames },
                _react2.default.createElement(
                  'div',
                  { className: 'team-box-container' },
                  _react2.default.createElement(
                    'div',
                    { className: 'team-image-container' },
                    _react2.default.createElement('img', { className: 'team-image', src: __webpack_require__(6), alt: 'team' })
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
                { className: 'team-box', onClick: this.clickOpenBrianNel },
                _react2.default.createElement(
                  'div',
                  { className: 'team-box-container' },
                  _react2.default.createElement(
                    'div',
                    { className: 'team-image-container' },
                    _react2.default.createElement('img', { className: 'team-image', src: __webpack_require__(7), alt: 'team' })
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
                      'Relationships | Regulation'
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
                  _react2.default.createElement('a', { className: 'lk ion-social-linkedin', href: 'https://www.linkedin.com/in/briannelson36/' })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'team-box', onClick: this.clickOpenNick },
                _react2.default.createElement(
                  'div',
                  { className: 'team-box-container' },
                  _react2.default.createElement(
                    'div',
                    { className: 'team-image-container' },
                    _react2.default.createElement('img', { className: 'team-image', src: __webpack_require__(8), alt: 'team' })
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
                      'Data Science | Contacts, Strategy'
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
                { className: 'team-box', onClick: this.clickOpenBrianBag },
                _react2.default.createElement(
                  'div',
                  { className: 'team-box-container' },
                  _react2.default.createElement(
                    'div',
                    { className: 'team-image-container' },
                    _react2.default.createElement('img', { className: 'team-image', src: __webpack_require__(9), alt: 'team' })
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
                  _react2.default.createElement('a', { className: 'lk ion-social-linkedin', href: 'https://www.linkedin.com/in/nickbaguley/' })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'team-box', onClick: this.clickOpenEthan },
                _react2.default.createElement(
                  'div',
                  { className: 'team-box-container' },
                  _react2.default.createElement(
                    'div',
                    { className: 'team-image-container' },
                    _react2.default.createElement('img', { className: 'team-image', src: __webpack_require__(10), alt: 'team' })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'name-title-container' },
                    _react2.default.createElement(
                      'div',
                      { className: 'team-name' },
                      'Ethan Erkiletian'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'team-role' },
                      'Blockchain educator and advisor.'
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'biography' },
                    'Former radio talk show host, blockchain educator and advisor.'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'team-icon-container' },
                  _react2.default.createElement('a', { className: 'lk ion-social-linkedin', href: 'https://www.linkedin.com/in/nickbaguley/' })
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
        { className: 'modal-background', onClick: function onClick(e) {
            _this2.onClose(e);
          } },
        _react2.default.createElement(
          'div',
          { className: 'modal-style' },
          _react2.default.createElement('img', { className: 'modal-image', src: this.props.imageModal, alt: 'modal image' }),
          _react2.default.createElement(
            'div',
            { className: 'modal-detail-padding' },
            _react2.default.createElement(
              'div',
              { className: 'team-name-modal' },
              this.props.nameModal
            ),
            _react2.default.createElement(
              'div',
              { className: 'team-role-modal' },
              this.props.roleModal
            ),
            _react2.default.createElement(
              'div',
              { className: 'biography-modal' },
              this.props.biographyModal
            )
          ),
          _react2.default.createElement('div', { style: footerStyle })
        )
      );
    }
  }]);

  return TeamModal;
}(_react.Component);

exports.default = TeamModal;


var footerStyle = {
  bottom: 20
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

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
                  _react2.default.createElement("img", { className: "img-main-blog", src: "https://image.ibb.co/k2YHTS/neureal_background_final.jpg", alt: "blog post" })
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
                    "What is Neureal?"
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "caption-blog" },
                    " Neureal is a project combining Blockchain and predictive AI technology to do something truly beneficial for humanity, rather than just trying to crack a useless hash. "
                  ),
                  _react2.default.createElement("div", { className: "creator-blog" })
                )
              )
            )
          ),
          _react2.default.createElement("div", { className: "blog-secondary-grid-container" })
        )
      );
    }
  }]);

  return Blog;
}(_react.Component);

exports.default = Blog;

/***/ }),
/* 29 */
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
                _react2.default.createElement('img', { className: 'img-main-blog', src: 'https://image.ibb.co/k2YHTS/neureal_background_final.jpg', alt: 'blog post' })
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
                  'What is Neureal?'
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'caption-blog' },
                  'Neureal is a project combining Blockchain and predictive AI technology to do something truly beneficial for humanity, rather than just trying to crack a useless hash. Neureal seeks to give humanity the power to see the future and become limitless by putting tools currently used by the world\u2019s most powerful companies in the hands of EVERYONE. Neureal\u2019s design means it has great potential to become the world\u2019s most accurate predictor. Forget reliable accuracy, we are going black swan hunting! ',
                  _react2.default.createElement(
                    'a',
                    { className: 'link-underline', href: 'http://www.visualcapitalist.com/black-swans-9-recent-events-that-changed-finance-forever/', 'data-href': 'http://www.visualcapitalist.com/black-swans-9-recent-events-that-changed-finance-forever/' },
                    '(http://www.visualcapitalist.com/black-swans-9-recent-events-that-changed-finance-forever/)'
                  ),
                  _react2.default.createElement('br', null),
                  _react2.default.createElement('br', null),
                  ' Let me give you a brief overview of our team, the project, a few use cases and provide links so you can do your own research. If you have any questions, please feel free to reach out to me and I will get you answers or get you connected directly with the CEO or Chief Architect. Our policy is extreme transparency, so if you want access to any of our documentation, you only have to ask and I will show you where to find it.',
                  _react2.default.createElement('br', null),
                  ' Our CEO is Jen Greyson. This month she was voted among Chipin\u2019s \u201CTop 8 Women in Cryptocurrency.\u201D She brings over a decade of business experience running a multi-million dollar life insurance company and another decade running a publishing company, where she specialized in intellectual property, turning ideas into money.',
                  _react2.default.createElement('br', null),
                  _react2.default.createElement('br', null),
                  ' I have known our Chief Architect, Wil Bown, since he was organizing Bitcoin meetups in 2013, where we each easily spent over $50K (today\u2019s exchange) of BTC doing Bitmob events at restaurants in the Salt Lake valley. He has been programming for over 30 years, has been programming blockchain projects since 2011, and won first prize at the 2015 Texas Blockchain Hackathon with a prototype of Neureal. This prize entitled him to a $500,000 investment if he was able to launch an ICO within a year. Wil was, unfortunately, unable to capitalize on this opportunity at the time and has since built a team, made connections, and strategized to ensure the project\u2019s success long after its Token Generation Event.',
                  _react2.default.createElement('br', null),
                  _react2.default.createElement('br', null),
                  ' More information about our team can be found here:',
                  _react2.default.createElement(
                    'a',
                    { className: 'link-underline', href: 'https://docs.google.com/presentation/d/18aTxA6LZCq4ewikatIYKymD9ZRBjUtZMJueIEtWeQ-o/edit?usp=sharing',
                      'data-href': 'https://docs.google.com/presentation/d/18aTxA6LZCq4ewikatIYKymD9ZRBjUtZMJueIEtWeQ-o/edit?usp=sharing' },
                    _react2.default.createElement('br', null),
                    'Neureal Team and Advisors'
                  ),
                  _react2.default.createElement('br', null),
                  _react2.default.createElement('br', null),
                  ' Neureal is a platform, one which allows anyone to approach the platform with something they want to be predicted, data they believe is relevant to that prediction, and a reward for the most accurate predictors (in our currency of Neurons). From there, predictive algorithms, neural networks, human-powered/augmented prediction markets compete to give the most accurate prediction. This competition has an incredible number of advantages over existing models. For example, it ensures the most accurate predictor available is used to make the prediction every time, incentivizes the further development of new predictive algorithms/techniques, and the refinement of existing ones.',
                  _react2.default.createElement('br', null),
                  _react2.default.createElement('br', null),
                  ' It also creates a great market for the projects currently trying to make it possible for individuals to regain control of their data and monetize it for themselves, as our predictors would always be attempting to obtain more data they believe would allow them to predict more accurately. (As an aside, our CEO is working several valuable connections to bring several hospitals and cancer centers into the data stream discussion.)',
                  _react2.default.createElement('br', null),
                  _react2.default.createElement('br', null),
                  ' The project is also, in my opinion, a very eloquent solution to the question of, \u201CWhat is being done about all this power waste in crypto?\u201D With Neureal, the power is used to make useful predictions for individuals and businesses rather than trying to crack a useless hash. Most of the experts I have been listening to in the space have said for years that all this hash power is ultimately going to be used for AI.',
                  _react2.default.createElement('br', null),
                  _react2.default.createElement('br', null),
                  _react2.default.createElement('br', null),
                  ' Here is our current roadmap (please note this is subject to change): We just closed our Pre-Pre sale on the 14th, and are now moving forward into our pre-sale which begins April 5th. The presale is for accredited investors only and has a minimum purchase of $100,000. This will continue until April 15 when we will begin the Token Generation Event public sale. In this sale, tokens will be available in hourly buckets. The price will rise slightly after each bucket with a maximum of 6X the opening price. We have designed the sale this way in an attempt to distribute the tokens as widely as possible. Unfortunately, we will not be allowing US citizens to participate in the Token Generation Event public sale.',
                  _react2.default.createElement('br', null),
                  _react2.default.createElement('br', null),
                  ' All Neureal tokens received will be locked in their wallets. This lock will remain in place until the Neureal network is fully secure, has passed internal auditing and testing, publicly demonstrates its ability to scale, capability for accuracy (Via our 2 MVPs), and is ready to accept prediction contracts (Oracles) from the general public. We conservatively expect this process to take 2 years. During that period, we will be running our 2 MVP products. The first is a crypto trading bot which will predict not just what a pairing will be tomorrow, but a continuous prediction of the price going from the next second onward, being constantly updated by live data. We feel this is a good first project because it\u2019s not extremely complicated, there is a glut of freely available data, and it\u2019s appealing for our target audience. The second MVP uses the Neureal network to predict hurricane travel path and intensity using live streaming meteorological data, and do so more accurately than any prediction system currently available. The progress on and predictions made by these MVPs will be freely available to the public as a demonstration of the network\u2019s capabilities.',
                  _react2.default.createElement('br', null),
                  _react2.default.createElement('br', null),
                  ' We have been in talks with a number of companies who want to use Neureal as a service, but for a concrete example, let\u2019s use Lyft. When/if Neureal\u2019s services become available, they would like to have their driverless cars autonomously ask for predictions about where the most profitable place to wait for their next customer. In practice, a Lyft car could be available before you knew you needed it. As another example, airlines could use the Neureal network to improve their existing predictive algorithms, such as their \u201Cno show\u201D algorithm which caused so much trouble this past year. New practical examples are being offered up by our community as they continue to answer how they\u2019d use the power of Neureal.',
                  _react2.default.createElement('br', null),
                  _react2.default.createElement('br', null),
                  ' We are also in talks to partner with several projects in the blockchain space, for instance, SingularityNET. They are building a piece of our network described in our whitepaper which would allow AI agents to interact autonomously with each other, Neureal in this case. Harnessing their efforts frees up development time and resources. Having Neureal would mean they could add predictive algorithm services to every AI product on their marketplace, you could use agents on SingularityNET as predictors on the Neureal network, and the data generated by each project will be useful to the AI agents of the other. Neureal has this kind of synergistic potential with virtually every AI project currently active or proposed\u200A\u2014\u200Aevery AI project in the world, not just AI+blockchain.',
                  _react2.default.createElement('br', null),
                  _react2.default.createElement('br', null),
                  ' Additionally, we are pursuing partnerships with institutions like the University of Utah, participating in a program that allows students of the University to design predictors to compete on the Neureal network for credit. We will also be providing a Default Prediction Strategy (DPS) as outlined in our white paper. The DPS will run on NVIDIA GPUs and is plug-and-play, so non-technical individuals can run it just like they would run a cryptocurrency miner. That system itself has the potential to eclipse any kind of cloud offering like Google TPU cloud.',
                  _react2.default.createElement('br', null),
                  _react2.default.createElement('br', null),
                  ' Our legal team has been doing everything possible to comply with regulations on all fronts. They say the strategy we are currently pursuing is one that many cryptocurrency projects will want to look to going forward. I cannot say more about this at this time, as we are still finalizing everything. Please watch our official channels for announcements.',
                  _react2.default.createElement('br', null),
                  _react2.default.createElement('br', null),
                  ' I hope I still have your attention after that massive wall of text. Thank you so much for your time. Information about our project can be found at the links below. We would love to answer any questions here or in our official telegram, which you can find on our main website.',
                  _react2.default.createElement('br', null),
                  _react2.default.createElement('br', null),
                  ' (Note, website updated coming very soon as part of marketing push)',
                  _react2.default.createElement('br', null),
                  _react2.default.createElement('br', null),
                  'Link: ',
                  _react2.default.createElement(
                    'a',
                    { className: 'link-underline', href: 'http://neureal.net/', 'data-href': 'http://neureal.net/' },
                    'http://neureal.net/'
                  ),
                  _react2.default.createElement('br', null),
                  _react2.default.createElement('br', null)
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

var _reactRouterDom = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var News = function (_Component) {
  _inherits(News, _Component);

  function News() {
    _classCallCheck(this, News);

    return _possibleConstructorReturn(this, (News.__proto__ || Object.getPrototypeOf(News)).apply(this, arguments));
  }

  _createClass(News, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "content" },
        _react2.default.createElement(
          "div",
          { className: "podcast-news-flex" },
          _react2.default.createElement(
            "div",
            { className: "news-column" },
            _react2.default.createElement(
              "h2",
              { className: "news-header" },
              "News"
            ),
            _react2.default.createElement(
              "div",
              { className: "news-container" },
              _react2.default.createElement(
                "div",
                { className: "news-post" },
                _react2.default.createElement(
                  "a",
                  { href: "https://medium.com/@Francesco_AI/the-convergence-of-ai-and-blockchain-whats-the-deal-60c618e3accc", target: "_blank" },
                  _react2.default.createElement("img", { className: "news-img", src: "https://cdn-images-1.medium.com/max/2000/1*xJ9uihFO6wBW5RfyEVbuEQ.jpeg", alt: "news" })
                ),
                _react2.default.createElement(
                  "a",
                  { href: "https://medium.com/@Francesco_AI/the-convergence-of-ai-and-blockchain-whats-the-deal-60c618e3accc", target: "_blank" },
                  _react2.default.createElement(
                    "div",
                    { className: "news-detail-container" },
                    _react2.default.createElement(
                      "div",
                      { className: "news-container-padding" },
                      _react2.default.createElement(
                        "h2",
                        { className: "news-title" },
                        "The convergence of AI and Blockchain: what\u2019s the deal?"
                      ),
                      _react2.default.createElement(
                        "div",
                        { className: "news-caption" },
                        "Why a decentralized intelligence may affect our future"
                      ),
                      _react2.default.createElement(
                        "div",
                        { className: "news-caption" },
                        "It is undeniable that AI and blockchain are two of the major technologies that are catalyzing the pace of innovation and introducing radical shifts in every industry. Each technology has its..."
                      ),
                      _react2.default.createElement(
                        "div",
                        { className: "learn-more-container" },
                        _react2.default.createElement(
                          "div",
                          { className: "news-learn-more" },
                          "Learn More"
                        )
                      )
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "news-container" },
              _react2.default.createElement(
                "div",
                { className: "news-post" },
                _react2.default.createElement(
                  "a",
                  { href: "https://cointelegraph.com/news/neureal-bringing-artificial-intelligence-to-the-people?utm_content=bufferae0b9&utm_medium=social&utm_source=facebook.com&utm_campaign=buffer", target: "_blank" },
                  _react2.default.createElement("img", { className: "news-img", src: "https://cointelegraph.com/images/725_Ly9jb2ludGVsZWdyYXBoLmNvbS9zdG9yYWdlL3VwbG9hZHMvdmlldy9kM2Q3YzgzNzIxZjdmODNiMDMxOTNlZWI2Y2JjMWUzMS5wbmc=.jpg",
                    alt: "news" })
                ),
                _react2.default.createElement(
                  "a",
                  { href: "https://cointelegraph.com/news/neureal-bringing-artificial-intelligence-to-the-people?utm_content=bufferae0b9&utm_medium=social&utm_source=facebook.com&utm_campaign=buffer", target: "_blank" },
                  _react2.default.createElement(
                    "div",
                    { className: "news-detail-container" },
                    _react2.default.createElement(
                      "div",
                      { className: "news-container-padding" },
                      _react2.default.createElement(
                        "h2",
                        { className: "news-title" },
                        "\u0418eureal: Bringing Artificial Intelligence to the People"
                      ),
                      _react2.default.createElement("div", { className: "news-caption" }),
                      _react2.default.createElement(
                        "div",
                        { className: "news-caption" },
                        "\u0418eureal is the first decentralized open-source protocol designed to produce a distributed artificial intelligence (AI) architecture that is incentivized, maintained and housed..."
                      ),
                      _react2.default.createElement(
                        "div",
                        { className: "learn-more-container" },
                        _react2.default.createElement(
                          "div",
                          { className: "news-learn-more" },
                          "Learn More"
                        )
                      )
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "news-container" },
              _react2.default.createElement(
                "div",
                { className: "news-post" },
                _react2.default.createElement(
                  "a",
                  { href: "https://www.newgenapps.com/blog/future-of-ico-impact-of-initial-coin-offering", target: "_blank" },
                  _react2.default.createElement("img", { className: "news-img", src: "https://www.newgenapps.com/hs-fs/hubfs/bitcoin.jpg?width=1196&height=598&name=bitcoin.jpg",
                    alt: "news" })
                ),
                _react2.default.createElement(
                  "a",
                  { href: "https://www.newgenapps.com/blog/future-of-ico-impact-of-initial-coin-offering", target: "_blank" },
                  _react2.default.createElement(
                    "div",
                    { className: "news-detail-container" },
                    _react2.default.createElement(
                      "div",
                      { className: "news-container-padding" },
                      _react2.default.createElement(
                        "h2",
                        { className: "news-title" },
                        "11 Experts on the Future of ICO & its Impact on Financial Markets"
                      ),
                      _react2.default.createElement("div", { className: "news-caption" }),
                      _react2.default.createElement(
                        "div",
                        { className: "news-caption" },
                        "ICO i.e. Initial Coin Offering is the new wave of fundraising where ideators ditch the complete hassle of the lengthy funding process and raise capital via blockchain technology..."
                      ),
                      _react2.default.createElement(
                        "div",
                        { className: "learn-more-container" },
                        _react2.default.createElement(
                          "div",
                          { className: "news-learn-more" },
                          "Learn More"
                        )
                      )
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "news-container" },
              _react2.default.createElement(
                "div",
                { className: "news-post" },
                _react2.default.createElement(
                  "a",
                  { href: "https://medium.com/@chain_explainer/blockchain-insider-jen-greyson-2610af01c709", target: "_blank" },
                  _react2.default.createElement("img", { className: "news-img", src: "https://cdn-images-1.medium.com/max/1600/1*pYXvf8puA9rCQunqjBJlWw.jpeg", alt: "news" })
                ),
                _react2.default.createElement(
                  "a",
                  { href: "https://medium.com/@chain_explainer/blockchain-insider-jen-greyson-2610af01c709", target: "_blank" },
                  _react2.default.createElement(
                    "div",
                    { className: "news-detail-container" },
                    _react2.default.createElement(
                      "div",
                      { className: "news-container-padding" },
                      _react2.default.createElement(
                        "h2",
                        { className: "news-title" },
                        "Blockchain Insider: Jen Greyson"
                      ),
                      _react2.default.createElement("div", { className: "news-caption" }),
                      _react2.default.createElement(
                        "div",
                        { className: "news-caption" },
                        "Recently named one of the Top 8 Women in Crypto, Jen Greyson of the Neureal Network and CEO of Powered by Neureal brings decades of executive leadership to the blockchain/crypto..."
                      ),
                      _react2.default.createElement(
                        "div",
                        { className: "learn-more-container" },
                        _react2.default.createElement(
                          "div",
                          { className: "news-learn-more" },
                          "Learn More"
                        )
                      )
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "news-container" },
              _react2.default.createElement(
                "div",
                { className: "news-post" },
                _react2.default.createElement(
                  "a",
                  { href: "https://medium.com/@JenGreyson/blockchain-5-years-from-now-cda989c3048b", target: "_blank" },
                  _react2.default.createElement("img", { className: "news-img", src: "https://image.ibb.co/k2YHTS/neureal_background_final.jpg", alt: "news" })
                ),
                _react2.default.createElement(
                  "a",
                  { href: "https://medium.com/@JenGreyson/blockchain-5-years-from-now-cda989c3048b", target: "_blank" },
                  _react2.default.createElement(
                    "div",
                    { className: "news-detail-container" },
                    _react2.default.createElement(
                      "div",
                      { className: "news-container-padding" },
                      _react2.default.createElement(
                        "h2",
                        { className: "news-title" },
                        "Blockchain. 5 Years From Now."
                      ),
                      _react2.default.createElement("div", { className: "news-caption" }),
                      _react2.default.createElement(
                        "div",
                        { className: "news-caption" },
                        "I had an interviewer ask me where I thought Ethereum was going to be in 5 years. Five years. That\u2019s a lifetime in blockchain. Look what we\u2019ve seen in the last five MONTHS...."
                      ),
                      _react2.default.createElement(
                        "div",
                        { className: "learn-more-container" },
                        _react2.default.createElement(
                          "div",
                          { className: "news-learn-more" },
                          "Learn More"
                        )
                      )
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "news-container" },
              _react2.default.createElement(
                "div",
                { className: "news-post" },
                _react2.default.createElement(
                  "a",
                  { href: "hhttp://usaweekly.com/2018/01/interview-with-jen-greyson-ceo-at-neureal/", target: "_blank" },
                  _react2.default.createElement("img", { className: "news-img", src: "https://www.strongholdcybersecurity.com/wp-content/uploads/2018/01/usa-weekly.jpg", alt: "news"
                  })
                ),
                _react2.default.createElement(
                  "a",
                  { href: "hhttp://usaweekly.com/2018/01/interview-with-jen-greyson-ceo-at-neureal/", target: "_blank" },
                  _react2.default.createElement(
                    "div",
                    { className: "news-detail-container" },
                    _react2.default.createElement(
                      "div",
                      { className: "news-container-padding" },
                      _react2.default.createElement(
                        "h2",
                        { className: "news-title" },
                        "Interview with Jen Greyson, CEO at Neureal"
                      ),
                      _react2.default.createElement("div", { className: "news-caption" }),
                      _react2.default.createElement(
                        "div",
                        { className: "news-caption" },
                        "Starting a business is a big achievement for many entrepreneurs, but maintaining one is the larger challenge. There are many standard challenges that face every business whether they..."
                      ),
                      _react2.default.createElement(
                        "div",
                        { className: "learn-more-container" },
                        _react2.default.createElement(
                          "div",
                          { className: "news-learn-more" },
                          "Learn More"
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
            { className: "podcast-column" },
            _react2.default.createElement(
              "h2",
              { className: "podcast-header" },
              "Podcasts"
            ),
            _react2.default.createElement(
              "div",
              { className: "podcast-container" },
              _react2.default.createElement(
                "div",
                { className: "podcast-post" },
                _react2.default.createElement(
                  "a",
                  { href: "https://vimeo.com/227450398", target: "_blank" },
                  _react2.default.createElement(
                    "div",
                    { className: "news-detail-container" },
                    _react2.default.createElement(
                      "div",
                      { className: "news-container-padding" },
                      _react2.default.createElement(
                        "div",
                        { className: "podcast-author" },
                        "Ernest Hancock"
                      ),
                      _react2.default.createElement(
                        "div",
                        { className: "podcast-detail-flex" },
                        _react2.default.createElement("a", { className: "headphone ion-headphone" }),
                        _react2.default.createElement(
                          "div",
                          { className: "podcast-title" },
                          "Hour 3"
                        )
                      ),
                      _react2.default.createElement("div", { className: "learn-more-container" })
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "podcast-container" },
              _react2.default.createElement(
                "div",
                { className: "podcast-post" },
                _react2.default.createElement(
                  "a",
                  { href: "https://l.facebook.com/l.php?u=https%3A%2F%2Fbuff.ly%2F2DtDQym&h=ATPm5b78akZ7GXRdgF_PLrTXA6lbbW1wWlye2KSmX4OMv46h2jlSD9AuMAsn-Fd4WQGijhFFKjvwR-rWzkIsDM-vBluNkK-UGNnRnHwwQjjByLf4hmSJMS5MMEpgCBopvmWcWFecoLyhPpZyKM-_HWcAsN6f5c_0WTi0k9fy0-uEiTf5cIoo4aGWwyKbQtqsPVpBwvUUVA11JnR9olQ7l8cQ2sagq8dAUkSYVSsOQCyZHm0VBembhAKzZAReuBlIqqtfKYItIJ5ivNWlpUoouucPHGfeOcNMHSeLsgE", target: "_blank" },
                  _react2.default.createElement(
                    "div",
                    { className: "news-detail-container" },
                    _react2.default.createElement(
                      "div",
                      { className: "news-container-padding" },
                      _react2.default.createElement(
                        "div",
                        { className: "podcast-author" },
                        "Brandon Reese & Daniel Blum"
                      ),
                      _react2.default.createElement(
                        "div",
                        { className: "podcast-detail-flex" },
                        _react2.default.createElement("a", { className: "headphone ion-headphone" }),
                        _react2.default.createElement(
                          "div",
                          { className: "podcast-title" },
                          "On The Bus Podcast"
                        )
                      ),
                      _react2.default.createElement("div", { className: "learn-more-container" })
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "podcast-container" },
              _react2.default.createElement(
                "div",
                { className: "podcast-post" },
                _react2.default.createElement(
                  "a",
                  { href: "http://alwaysthejourney.com/2017/12/08/always-the-journey-podcast-episode-no-2/", target: "_blank" },
                  _react2.default.createElement(
                    "div",
                    { className: "news-detail-container" },
                    _react2.default.createElement(
                      "div",
                      { className: "news-container-padding" },
                      _react2.default.createElement(
                        "div",
                        { className: "podcast-author" },
                        "Jason Woodland"
                      ),
                      _react2.default.createElement(
                        "div",
                        { className: "podcast-detail-flex" },
                        _react2.default.createElement("a", { className: "headphone ion-headphone" }),
                        _react2.default.createElement(
                          "div",
                          { className: "podcast-title" },
                          "Always the Journey Podcast Episode No. 2"
                        )
                      ),
                      _react2.default.createElement("div", { className: "learn-more-container" })
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "podcast-container" },
              _react2.default.createElement(
                "div",
                { className: "podcast-post" },
                _react2.default.createElement(
                  "a",
                  { href: "http://freecitiespodcast.libsyn.com/decentral-hub-and-d10e-recap", target: "_blank" },
                  _react2.default.createElement(
                    "div",
                    { className: "news-detail-container" },
                    _react2.default.createElement(
                      "div",
                      { className: "news-container-padding" },
                      _react2.default.createElement(
                        "div",
                        { className: "podcast-author" },
                        "Anthoney"
                      ),
                      _react2.default.createElement(
                        "div",
                        { className: "podcast-detail-flex" },
                        _react2.default.createElement("a", { className: "headphone ion-headphone" }),
                        _react2.default.createElement(
                          "div",
                          { className: "podcast-title" },
                          "DeCentral Hub and D10e ReCap"
                        )
                      ),
                      _react2.default.createElement("div", { className: "learn-more-container" })
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "podcast-container" },
              _react2.default.createElement(
                "div",
                { className: "podcast-post" },
                _react2.default.createElement(
                  "a",
                  { href: "https://www.youtube.com/watch?v=tZ2XKUoNtyc", target: "_blank" },
                  _react2.default.createElement(
                    "div",
                    { className: "news-detail-container" },
                    _react2.default.createElement(
                      "div",
                      { className: "news-container-padding" },
                      _react2.default.createElement(
                        "div",
                        { className: "podcast-author" },
                        "Future Tech Podcast"
                      ),
                      _react2.default.createElement(
                        "div",
                        { className: "podcast-detail-flex" },
                        _react2.default.createElement("a", { className: "headphone ion-headphone" }),
                        _react2.default.createElement(
                          "div",
                          { className: "podcast-title" },
                          "Neureal Open-Source, Peer-to-Peer Pr"
                        )
                      ),
                      _react2.default.createElement("div", { className: "learn-more-container" })
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

  return News;
}(_react.Component);

exports.default = News;

/***/ })
/******/ ]);
});
//# sourceMappingURL=static.e6ceadbf.js.map