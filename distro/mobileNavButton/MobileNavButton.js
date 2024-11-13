"use strict";
'use client';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Button = _interopRequireDefault(require("../button/Button"));
require("./mobileNavButton.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var toggleClass = function toggleClass() {
  var element = document.getElementById("primary-nav-list");
  element.classList.toggle("visible");
};
var MobileNavButton = function MobileNavButton() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    id: "mobile-menu-toggle",
    "aria-controls": "primary-menu",
    "aria-expanded": "false",
    onClick: toggleClass,
    label: "MENU",
    size: "small"
  }));
};
var _default = exports["default"] = MobileNavButton;