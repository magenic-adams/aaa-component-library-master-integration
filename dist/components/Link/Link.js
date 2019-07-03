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

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

;
;
const defaultProps = {
  className: '',
  href: '',
  color: 'primary',
  onClick: _noop.default,
  onBlur: _noop.default,
  rel: 'noopener',
  target: '_blank'
};

const styleClasses = theme => ({
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

const Link = (_ref) => {
  let {
    children,
    className,
    classes,
    color,
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