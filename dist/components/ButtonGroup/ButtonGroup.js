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

;
;
var defaultProps = {
  className: ''
};

var styleClasses = function styleClasses(theme) {
  return {
    root: _defineProperty({
      width: '100%',
      marginTop: 24,
      marginBottom: 24,
      '& .Button:nth-child(n+1)': {
        marginTop: 8
      }
    }, theme.breakpoints.up('md'), {
      width: 'inherit'
    })
  };
};

var ButtonGroup = function ButtonGroup(_ref) {
  var children = _ref.children,
      classes = _ref.classes,
      className = _ref.className;
  return _react["default"].createElement("div", {
    className: (0, _clsx["default"])('ButtonGroup', classes.root, className)
  }, children);
};

ButtonGroup.defaultProps = defaultProps;

var _default = (0, _styles.withStyles)(styleClasses, {
  index: 0,
  withTheme: true
})(ButtonGroup);

exports["default"] = _default;