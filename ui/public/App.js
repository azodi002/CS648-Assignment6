"use strict";

require("babel-polyfill");

require("whatwg-fetch");

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _reactRouterDom = require("react-router-dom");

var _Page = _interopRequireDefault(require("./Page.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var element = _react.default.createElement(_reactRouterDom.HashRouter, null, _react.default.createElement(_Page.default, null));

_reactDom.default.render(element, document.getElementById('content'));