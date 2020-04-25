"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ProductTable;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ProductRow(props) {
  var products = props.product;
  return _react.default.createElement("tr", null, _react.default.createElement("td", null, products.product_name), _react.default.createElement("td", null, "$", products.price), _react.default.createElement("td", null, products.category), _react.default.createElement("td", null, _react.default.createElement("a", {
    target: "_blank",
    href: products.image_path
  }, "View ")), _react.default.createElement("td", null, _react.default.createElement("a", {
    href: "/#/productedit/".concat(products.id)
  }, "Edit")));
}

function ProductTable(props) {
  var ProductRows = props.products.map(function (product) {
    return _react.default.createElement(ProductRow, {
      key: product.id,
      product: product
    });
  });
  return _react.default.createElement("table", {
    className: "bordered-table"
  }, _react.default.createElement("thead", null, _react.default.createElement("tr", null, _react.default.createElement("th", null, "Product Name"), _react.default.createElement("th", null, "Price"), _react.default.createElement("th", null, "Category"), _react.default.createElement("th", null, "Image"), _react.default.createElement("th", null, "Action"))), _react.default.createElement("tbody", null, ProductRows));
}