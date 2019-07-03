"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _styles = require("@material-ui/styles");

var _FormGroup = _interopRequireDefault(require("@material-ui/core/FormGroup"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Components
var styleClasses = function styleClasses() {
  return {
    root: {
      marginTop: 16,
      marginBottom: 16
    }
  };
};

var defaultProps = {
  className: ''
};

var FormGroup = function FormGroup(_ref) {
  var children = _ref.children,
      classes = _ref.classes,
      className = _ref.className;
  return _react["default"].createElement(_FormGroup["default"], {
    className: (0, _clsx["default"])('FormGroup', className),
    classes: classes
  }, children);
};

FormGroup.defaultProps = defaultProps;

var _default = (0, _styles.withStyles)(styleClasses, {
  index: 0,
  withTheme: true
})(FormGroup);

exports["default"] = _default;