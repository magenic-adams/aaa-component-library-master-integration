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
    global.undefined = mod.exports;
  }
})(this, function (exports, _createMuiTheme) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = createStyleTheme;

  var _createMuiTheme2 = _interopRequireDefault(_createMuiTheme);

  import _interopRequireDefault from "@babel/runtime/helpers/esm/interopRequireDefault";

  function createStyleTheme(options) {
    return (0, _createMuiTheme2.default)(options);
  }
});