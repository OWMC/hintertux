"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Button = _interopRequireDefault(require("../button/Button"));
var _Navigation = _interopRequireDefault(require("../navigation/Navigation"));
require("./header.css");
var _owmcLogo = _interopRequireDefault(require("../../static/logos/owmc-logo.svg"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Image = function Image(_ref) {
  var imgUrl = _ref.imgUrl,
    altText = _ref.altText,
    classText = _ref.classText;
  return /*#__PURE__*/_react["default"].createElement("img", {
    src: window.next ? imgUrl.src : imgUrl,
    alt: altText,
    className: classText
  });
};
var Header = function Header(_ref2) {
  var _ref2$logoLink = _ref2.logoLink,
    logoLink = _ref2$logoLink === void 0 ? null : _ref2$logoLink,
    _ref2$login = _ref2.login,
    login = _ref2$login === void 0 ? false : _ref2$login,
    _ref2$user = _ref2.user,
    user = _ref2$user === void 0 ? null : _ref2$user,
    onLogin = _ref2.onLogin,
    onLogout = _ref2.onLogout,
    onCreateAccount = _ref2.onCreateAccount,
    _ref2$showPrimaryNav = _ref2.showPrimaryNav,
    showPrimaryNav = _ref2$showPrimaryNav === void 0 ? true : _ref2$showPrimaryNav;
  return /*#__PURE__*/_react["default"].createElement("header", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "storybook-header"
  }, logoLink ? /*#__PURE__*/_react["default"].createElement("a", {
    href: logoLink.url,
    title: logoLink.title,
    className: "logoLink"
  }, /*#__PURE__*/_react["default"].createElement(Image, {
    imgUrl: _owmcLogo["default"],
    altText: "OWMC logo",
    classText: "logo"
  })) : /*#__PURE__*/_react["default"].createElement(Image, {
    imgUrl: _owmcLogo["default"],
    altText: "OWMC logo",
    classText: "logo"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "loginAndNav"
  }, showPrimaryNav !== false && /*#__PURE__*/_react["default"].createElement(_Navigation["default"], null), login !== false && /*#__PURE__*/_react["default"].createElement("nav", {
    className: "loginNav"
  }, user ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "welcome"
  }, "Welcome, ", /*#__PURE__*/_react["default"].createElement("b", null, user.name), "!"), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    size: "small",
    onClick: onLogout,
    label: "Log out"
  })) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    size: "small",
    onClick: onLogin,
    label: "Log in"
  }), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    size: "small",
    onClick: onCreateAccount,
    label: "Sign up"
  }))))));
};
Header.propTypes = {
  logoLink: _propTypes["default"].shape({
    url: _propTypes["default"].string.isRequired,
    title: _propTypes["default"].string.isRequired
  }),
  showPrimaryNav: _propTypes["default"].bool,
  login: _propTypes["default"].bool,
  user: _propTypes["default"].shape({
    name: _propTypes["default"].string.isRequired
  }),
  onLogin: _propTypes["default"].func.isRequired,
  onLogout: _propTypes["default"].func.isRequired,
  onCreateAccount: _propTypes["default"].func.isRequired
};
var _default = exports["default"] = Header;