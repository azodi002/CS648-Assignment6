"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page;

var _react = _interopRequireDefault(require("react"));

var _Contents = _interopRequireDefault(require("./Contents.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function NavBar() {
  return _react.default.createElement("nav", null, _react.default.createElement("a", {
    href: "/"
  }, "Home"), ' | ', _react.default.createElement("a", {
    href: "/#/products"
  }, "Product List"), ' | ', _react.default.createElement("a", {
    href: "/#/productview"
  }, "Product View"));
}

function Page() {
  return _react.default.createElement("div", null, _react.default.createElement(NavBar, null), _react.default.createElement(_Contents.default, null));
}