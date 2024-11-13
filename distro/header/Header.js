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
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Logo = function Logo() {
  return /*#__PURE__*/_react["default"].createElement("svg", {
    version: "1.1",
    id: "Layer_1",
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    className: "logo",
    viewBox: "0 0 595.28 136.837",
    enableBackground: "new 0 0 595.28 136.837"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M102.288,9.599C92.004,3.87,80.697,1,68.359,1C56.021,1,44.712,3.87,34.43,9.599c-10.28,5.734-18.413,13.71-24.394,23.929 C4.053,43.745,1.064,55.273,1.064,68.108c0,12.836,2.989,24.393,8.972,34.678c5.981,10.279,14.114,18.287,24.394,24.02 c10.282,5.73,21.591,8.598,33.929,8.598c12.337,0,23.615-2.867,33.833-8.598c10.218-5.732,18.32-13.74,24.301-24.02 c3.034-5.215,5.294-10.76,6.789-16.629l-18.967-67.935C110.707,14.936,106.7,12.06,102.288,9.599z M93.5,95.585 c-6.294,6.857-14.674,10.283-25.141,10.283c-10.595,0-19.037-3.426-25.331-10.283c-6.292-6.848-9.441-16.01-9.441-27.477 c0-11.462,3.148-20.624,9.441-27.478c6.293-6.853,14.736-10.282,25.331-10.282c10.467,0,18.847,3.43,25.141,10.282 c6.292,6.854,9.441,16.016,9.441,27.478C102.942,79.576,99.792,88.738,93.5,95.585z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M545.903,102.503c-3.99,2.244-8.849,3.365-14.581,3.365c-10.593,0-19.039-3.426-25.329-10.283 c-6.293-6.848-9.442-16.01-9.442-27.477c0-11.462,3.149-20.624,9.442-27.478c6.29-6.853,14.736-10.282,25.329-10.282 c5.732,0,10.591,1.121,14.581,3.366c3.985,2.243,7.29,5.921,9.907,11.029h38.133c-4.486-13.707-12.4-24.425-23.737-32.151 C558.863,4.862,545.903,1,531.322,1c-12.338,0-23.648,2.87-33.927,8.599c-10.285,5.734-18.417,13.71-24.396,23.929 c-2.99,5.107-5.233,10.542-6.729,16.302l19.018,68.116c3.639,3.309,7.671,6.201,12.107,8.676 c10.278,5.73,21.589,8.596,33.927,8.596c14.581,0,27.541-3.863,38.884-11.588c11.337-7.725,19.251-18.443,23.737-32.152h-38.133 C553.193,96.587,549.889,100.259,545.903,102.503z"
  }), /*#__PURE__*/_react["default"].createElement("polygon", {
    points: "452.664,38.763 442.488,2.87 405.851,2.87 383.046,86.054 360.054,2.87 323.416,2.87 286.777,134.097  321.173,134.097 340.61,50.911 363.045,134.097 399.31,134.097 422.676,50.911 445.48,134.097 479.689,134.097 479.607,133.814  479.203,133.814 \t"
  }), /*#__PURE__*/_react["default"].createElement("polygon", {
    points: "479.203,133.814 479.607,133.814 452.664,38.763 \t"
  }), /*#__PURE__*/_react["default"].createElement("polygon", {
    points: "278.681,2.866 259.242,86.05 236.808,2.866 200.544,2.866 177.177,86.05 154.373,2.866 120.191,2.866  121.886,8.937 157.363,134.093 194.003,134.093 216.805,50.908 239.8,134.093 276.439,134.093 313.076,2.866 \t"
  }), /*#__PURE__*/_react["default"].createElement("polygon", {
    points: "120.167,2.866 121.886,8.937 120.191,2.866 \t"
  }));
};
var Header = function Header(_ref) {
  var _ref$logoLink = _ref.logoLink,
    logoLink = _ref$logoLink === void 0 ? null : _ref$logoLink,
    _ref$login = _ref.login,
    login = _ref$login === void 0 ? false : _ref$login,
    _ref$user = _ref.user,
    user = _ref$user === void 0 ? null : _ref$user,
    onLogin = _ref.onLogin,
    onLogout = _ref.onLogout,
    onCreateAccount = _ref.onCreateAccount,
    _ref$showPrimaryNav = _ref.showPrimaryNav,
    showPrimaryNav = _ref$showPrimaryNav === void 0 ? true : _ref$showPrimaryNav,
    navLinks = _ref.navLinks;
  return /*#__PURE__*/_react["default"].createElement("header", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "storybook-header"
  }, logoLink ? /*#__PURE__*/_react["default"].createElement("a", {
    href: logoLink.url,
    title: logoLink.title,
    className: "logoLink"
  }, /*#__PURE__*/_react["default"].createElement(Logo, null)) : /*#__PURE__*/_react["default"].createElement(Logo, null), /*#__PURE__*/_react["default"].createElement("div", {
    className: "loginAndNav"
  }, showPrimaryNav !== false && /*#__PURE__*/_react["default"].createElement(_Navigation["default"], {
    navLinks: navLinks
  }), login !== false && /*#__PURE__*/_react["default"].createElement("nav", {
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