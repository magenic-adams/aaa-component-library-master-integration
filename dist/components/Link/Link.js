"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/styles");

var _core = require("@material-ui/core");

var _noop = _interopRequireDefault(require("../../utilities/noop"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

;
;
var defaultProps = {
  className: '',
  href: '',
  color: 'primary',
  onClick: _noop.default,
  onBlur: _noop.default,
  rel: 'noopener',
  target: '_blank'
};

var styleClasses = theme => ({
  root: {
    cursor: 'pointer'
  },
  colorPrimary: _objectSpread({}, theme.typographyElements.linkPrimary, {
    '&:hover': {
      color: theme.secondaryPalette.colorVariables.VERY_DARK_BLUE
    }
  }),
  colorSecondary: _objectSpread({
    color: theme.secondaryPalette.colorVariables.DARKER_BLUE
  }, theme.typographyElements.linkSecondary, {
    padding: '13.5px 0 13.5px 0',
    '&:hover': {
      color: theme.secondaryPalette.colorVariables.VERY_DARK_BLUE
    }
  })
});

var Link = (_ref) => {
  var {
    children,
    className,
    classes,
    color,
    component,
    href,
    id,
    onBlur,
    onClick,
    rel,
    target
  } = _ref;
  return _react.default.createElement(_core.Link, {
    className: className,
    color: color,
    component: component,
    id: id,
    href: href,
    onBlur: onBlur,
    onClick: onClick,
    rel: rel,
    target: target,
    underline: "always",
    TypographyClasses: classes
  }, children);
};

Link.defaultProps = defaultProps;

var _default = (0, _styles.withStyles)(styleClasses, {
  withTheme: true
})(Link);

exports.default = _default;