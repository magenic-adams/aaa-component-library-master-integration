(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@material-ui/core/styles/createMuiTheme"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@material-ui/core/styles/createMuiTheme"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.createMuiTheme);
    global.materialUiCreateMuiThemeD = mod.exports;
  }
})(this, function (_createMuiTheme) {
  "use strict";
});