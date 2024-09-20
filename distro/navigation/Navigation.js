"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Button = _interopRequireDefault(require("../button/Button"));
require("./navigation.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var toggleClass = function toggleClass() {
  var element = document.getElementById("primary-nav-list");
  element.classList.toggle("visible");
};
var Navigation = function Navigation(_ref) {
  var navLinks = _ref.navLinks;
  console.log("NAVLINKS: ", navLinks.map(function (navLink) {
    return navLink;
  }));
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    id: "mobile-menu-toggle",
    "aria-controls": "primary-menu",
    "aria-expanded": "false",
    onClick: toggleClass,
    label: "MENU",
    size: "small"
  }), /*#__PURE__*/_react["default"].createElement("nav", {
    id: "primary-navigation",
    className: "primary-navigation",
    role: "navigation"
  }, /*#__PURE__*/_react["default"].createElement("ul", {
    id: "primary-nav-list",
    className: "primary-nav-list"
  }, navLinks.map(function (navLink, idx) {
    return /*#__PURE__*/_react["default"].createElement("li", {
      className: "primary-nav-list-item",
      key: idx
    }, /*#__PURE__*/_react["default"].createElement("a", {
      href: navLink.url,
      className: "primary-nav-list-item-link"
    }, navLink.title));
  }))));
};
Navigation.propTypes = {
  navlinks: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    title: _propTypes["default"].string.isRequired,
    url: _propTypes["default"].string.isRequired
  }))
};
Navigation.defaultProps = {
  navLinks: [{
    url: "*",
    title: "ringo"
  }, {
    url: "*",
    title: "les"
  }]
};
var _default = exports["default"] = Navigation;