"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;
;

var Portal = (_ref) => {
  var {
    children,
    container,
    id
  } = _ref;
  return _react.default.createElement(_core.Portal, {
    container: container,
    "data-quid": "Portal-".concat(id)
  }, children);
};

var _default = Portal;
exports.default = _default;