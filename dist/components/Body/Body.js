"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/styles");

var _clsx = _interopRequireDefault(require("clsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultProps = {
  className: '',
  secondary: false
}; // Component styles manipulated entirely by theme

var styleClasses = function styleClasses(theme) {
  return {
    root: {
      color: theme.typographyValues.color,
      fontFamily: theme.typographyValues.fontFamily,
      fontWeight: theme.typographyValues.fontWeight
    },
    primary: theme.typography.body1,
    secondary: theme.typography.body2
  };
};

var Body = function Body(_ref) {
  var _cx;

  var children = _ref.children,
      className = _ref.className,
      classes = _ref.classes,
      id = _ref.id,
      secondary = _ref.secondary;
  return _react["default"].createElement("p", {
    className: (0, _clsx["default"])('Body', classes.root, (_cx = {}, _defineProperty(_cx, classes.primary, !secondary), _defineProperty(_cx, classes.secondary, secondary), _cx), className),
    "data-quid": "Body-".concat(id)
  }, children);
};

Body.defaultProps = defaultProps;

var _default = (0, _styles.withStyles)(styleClasses, {
  index: 0,
  withTheme: true
})(Body);

exports["default"] = _default;