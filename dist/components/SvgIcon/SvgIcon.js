"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactInlinesvg = _interopRequireDefault(require("react-inlinesvg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SvgIcon = (_ref) => {
  var {
    className,
    id,
    svgIcon
  } = _ref;
  return _react.default.createElement(_reactInlinesvg.default, {
    className: className,
    id: id,
    src: svgIcon
  });
};

var _default = SvgIcon;
exports.default = _default;