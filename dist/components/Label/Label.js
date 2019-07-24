"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

var _styles = require("@material-ui/core/styles");

var _InputLabel = _interopRequireDefault(require("@material-ui/core/InputLabel"));

var _clsx = _interopRequireDefault(require("clsx"));

var _lodash = require("lodash");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var labelOverridesDefault = {};
var defaultProps = {
  className: '',
  disabled: false,
  error: '',
  focused: false
};
var styleClasses = (0, _core.makeStyles)(theme => {
  return {
    root: props => _objectSpread({}, theme.typography.body1, {
      color: (0, _lodash.get)(props, 'labelColor', theme.secondaryPalette.colorVariables.BLACK),
      marginTop: (0, _lodash.get)(props, 'marginTop', 8),
      display: 'block',
      marginBottom: -8,
      fontFamily: theme.typographyValues.fontFamily,
      fontWeight: theme.typographyValues.fontWeight,
      fontSize: 16,
      [theme.breakpoints.up('md')]: {
        fontSize: 18
      }
    }),
    formControl: {
      position: 'relative',
      transform: 'unset'
    }
  };
});

var Label = props => {
  var {
    children,
    className,
    disabled,
    error,
    focused,
    id,
    overrides = labelOverridesDefault
  } = props;
  var classes = styleClasses(overrides);
  return _react.default.createElement(_InputLabel.default, {
    className: (0, _clsx.default)('InputLabel', className),
    classes: classes,
    disabled: disabled,
    disableAnimation: true,
    error: !!error,
    focused: focused,
    htmlFor: id,
    "data-quid": "Label-".concat(id),
    shrink: false
  }, children);
};

Label.defaultProps = defaultProps;

var _default = (0, _styles.withTheme)(Label);

exports.default = _default;