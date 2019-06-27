(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@material-ui/core/styles/createMuiTheme"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@material-ui/core/styles/createMuiTheme"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.createMuiTheme);
    global.createStyleTheme = mod.exports;
  }
})(this, function (_exports, _createMuiTheme) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = createStyleTheme;
  _createMuiTheme = _interopRequireDefault(_createMuiTheme);

  function createStyleTheme(options) {
    return (0, _createMuiTheme.default)(options);
  }
});