"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _InputLabel = _interopRequireDefault(require("@material-ui/core/InputLabel"));

var _clsx = _interopRequireDefault(require("clsx"));

var _lodash = require("lodash");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

;
const defaultProps = {
  className: '',
  disabled: false,
  error: '',
  focused: false
};

const styleClasses = theme => {
  return {
    root: _objectSpread({
      color: props => (0, _lodash.get)(props, 'overrides.label.color', theme.secondaryPalette.colorVariables.BLACK),
      display: 'block',
      marginBottom: -8,
      fontFamily: theme.typographyValues.fontFamily,
      fontWeight: theme.typographyValues.fontWeight
    }, theme.typography.body1),
    formControl: {
      position: 'relative',
      transform: 'unset'
    }
  };
};

const Label = (_ref) => {
  let {
    children,
    classes,
    className,
    disabled,
    error,
    focused,
    id
  } = _ref;
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

var _default = (0, _styles.withStyles)(styleClasses, {
  index: 0,
  withTheme: true
})(Label);

exports.default = _default;