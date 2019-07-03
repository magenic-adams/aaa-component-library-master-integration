"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = createStyleTheme;

var _createMuiTheme = _interopRequireDefault(require("@material-ui/core/styles/createMuiTheme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function createStyleTheme(options) {
  return (0, _createMuiTheme["default"])(options);
}