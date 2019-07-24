"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/styles");

var _clsx = _interopRequireDefault(require("clsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultProps = {
  className: '',
  secondary: false
}; // Component styles manipulated entirely by theme

var styleClasses = theme => {
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

var Body = (_ref) => {
  var {
    children,
    className,
    classes,
    id,
    secondary
  } = _ref;
  return _react.default.createElement("p", {
    className: (0, _clsx.default)('Body', classes.root, {
      [classes.primary]: !secondary,
      [classes.secondary]: secondary
    }, className),
    "data-quid": "Body-".concat(id)
  }, children);
};

Body.defaultProps = defaultProps;

var _default = (0, _styles.withStyles)(styleClasses, {
  index: 0,
  withTheme: true
})(Body);

exports.default = _default;