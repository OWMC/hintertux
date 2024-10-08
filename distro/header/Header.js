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
var Header = function Header(_ref) {
  var logoLink = _ref.logoLink,
    login = _ref.login,
    user = _ref.user,
    onLogin = _ref.onLogin,
    onLogout = _ref.onLogout,
    onCreateAccount = _ref.onCreateAccount,
    showPrimaryNav = _ref.showPrimaryNav;
  return /*#__PURE__*/_react["default"].createElement("header", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "storybook-header"
  }, logoLink ? /*#__PURE__*/_react["default"].createElement("a", {
    href: logoLink.url,
    title: logoLink.title,
    className: "logoLink"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: _owmcLogo["default"],
    alt: "OWMC logo",
    className: "logo"
  })) : /*#__PURE__*/_react["default"].createElement("img", {
    src: _owmcLogo["default"],
    alt: "OWMC logo",
    className: "logo"
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
Header.defaultProps = {
  logoLink: null,
  showPrimaryNav: true,
  login: false,
  user: null
};
var _default = exports["default"] = Header;