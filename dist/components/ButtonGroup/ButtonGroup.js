"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/styles");

var _clsx = _interopRequireDefault(require("clsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;
;
const defaultProps = {
  className: ''
};

const styleClasses = theme => ({
  root: {
    width: '100%',
    marginTop: 24,
    marginBottom: 24,
    '& .Button:nth-child(n+1)': {
      marginTop: 8
    },
    [theme.breakpoints.up('md')]: {
      width: 'inherit'
    }
  }
});

const ButtonGroup = (_ref) => {
  let {
    children,
    classes,
    className
  } = _ref;
  return _react.default.createElement("div", {
    className: (0, _clsx.default)('ButtonGroup', classes.root, className)
  }, children);
};

ButtonGroup.defaultProps = defaultProps;

var _default = (0, _styles.withStyles)(styleClasses, {
  index: 0,
  withTheme: true
})(ButtonGroup);

exports.default = _default;