"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _styles = require("@material-ui/styles");

var _FormGroup = _interopRequireDefault(require("@material-ui/core/FormGroup"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Components
const styleClasses = () => ({
  root: {
    marginTop: 16,
    marginBottom: 16
  }
});

const defaultProps = {
  className: ''
};

const FormGroup = (_ref) => {
  let {
    children,
    classes,
    className
  } = _ref;
  return _react.default.createElement(_FormGroup.default, {
    className: (0, _clsx.default)('FormGroup', className),
    classes: classes
  }, children);
};

FormGroup.defaultProps = defaultProps;

var _default = (0, _styles.withStyles)(styleClasses, {
  index: 0,
  withTheme: true
})(FormGroup);

exports.default = _default;