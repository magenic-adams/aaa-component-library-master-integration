"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/styles");

var _Button = _interopRequireDefault(require("./Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IconButton = props => {
  var {
    classes,
    children,
    disabled,
    onClick,
    id
  } = props;
  return _react.default.createElement(_Button.default, {
    onClick: onClick,
    disabled: disabled,
    className: classes.iconButton,
    id: id,
    isButtonIcon: true
  }, children);
};

var _default = (0, _styles.withStyles)({
  index: 0,
  withTheme: true
})(IconButton);

exports.default = _default;