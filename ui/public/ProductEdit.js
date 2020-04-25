"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ProductEdit;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ProductEdit(_ref) {
  var match = _ref.match;
  var id = match.params.id;
  return _react.default.createElement("h2", null, "This is a placeholder for editing product ".concat(id));
}