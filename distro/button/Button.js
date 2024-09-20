"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./button.css");
var _excluded = ["backgroundColor", "size", "minWidth", "label", "href", "newTab"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
// import '../../utilities/colourclasses.css';

/**
 * Primary UI component for user interaction
 */
var Button = function Button(_ref) {
  var backgroundColor = _ref.backgroundColor,
    size = _ref.size,
    minWidth = _ref.minWidth,
    label = _ref.label,
    href = _ref.href,
    newTab = _ref.newTab,
    props = _objectWithoutProperties(_ref, _excluded);
  var minimumwidth = minWidth ? 'storybook-button--minwidth' : 'no';
  return href ? /*#__PURE__*/_react["default"].createElement("a", {
    className: ['storybook-button', "storybook-button--".concat(size), minimumwidth].join(' '),
    href: href,
    target: newTab ? "_blank" : undefined,
    rel: newTab ? "noreferrer" : undefined
  }, label) : /*#__PURE__*/_react["default"].createElement("button", _extends({
    type: "button",
    className: ['storybook-button', "storybook-button--".concat(size), minimumwidth].join(' ')
  }, props), label);
};
Button.propTypes = {
  href: _propTypes["default"].string,
  newTab: _propTypes["default"].bool,
  minWidth: _propTypes["default"].bool,
  size: _propTypes["default"].oneOf(['small', 'medium', 'large']),
  label: _propTypes["default"].string.isRequired,
  onClick: _propTypes["default"].func
};
Button.defaultProps = {
  href: '',
  size: 'medium',
  minWidth: false,
  onClick: undefined
};
var _default = exports["default"] = Button;