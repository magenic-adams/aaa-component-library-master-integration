"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/styles");

var _clsx = _interopRequireDefault(require("clsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Component styles manipulated entirely by theme
const styleClasses = theme => {
  return {
    root: _objectSpread({
      color: theme.typographyValues.color,
      fontFamily: theme.typographyValues.fontFamily,
      fontWeight: theme.typographyValues.fontWeight
    }, theme.typography.subtitle1)
  };
};

const Subtitle = (_ref) => {
  let {
    children,
    className,
    classes,
    id
  } = _ref;
  return _react.default.createElement("div", {
    className: (0, _clsx.default)('Subtitle', classes.root, className),
    "data-quid": "Subtitle-".concat(id)
  }, children);
};

var _default = (0, _styles.withStyles)(styleClasses, {
  index: 0,
  withTheme: true
})(Subtitle);

exports.default = _default;