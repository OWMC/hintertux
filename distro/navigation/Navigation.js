"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _MobileNavButton = _interopRequireDefault(require("../mobileNavButton/MobileNavButton"));
require("./navigation.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var toggleClass = function toggleClass() {
  var element = document.getElementById("primary-nav-list");
  element.classList.toggle("visible");
};
var Navigation = function Navigation(_ref) {
  var _ref$navLinks = _ref.navLinks,
    navLinks = _ref$navLinks === void 0 ? [{
      title: 'Home',
      url: '/'
    }, {
      title: 'About',
      url: '/about'
    }] : _ref$navLinks;
  // console.log("NAVLINKS: ", navLinks.map((navLink, id) => navLink));
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_MobileNavButton["default"], null), /*#__PURE__*/_react["default"].createElement("nav", {
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
  navLinks: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    title: _propTypes["default"].string.isRequired,
    url: _propTypes["default"].string.isRequired
  }))
};
var _default = exports["default"] = Navigation;