(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "@material-ui/core/SvgIcon"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("@material-ui/core/SvgIcon"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.SvgIcon);
    global.createSvgIcon = mod.exports;
  }
})(this, function (_exports, _react, _SvgIcon) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = createSvgIcon;
  _react = _interopRequireDefault(_react);
  _SvgIcon = _interopRequireDefault(_SvgIcon);

  // createSvgIcon taken from Material UI utilities
  function createSvgIcon(path, displayName) {
    var Component = _react.default.memo(_react.default.forwardRef(function (props, ref) {
      return _react.default.createElement(_SvgIcon.default, Object.assign({
        "data-mui-test": "".concat(displayName, "Icon"),
        ref: ref
      }, props), path);
    }));

    if (process.env.NODE_ENV !== 'production') {
      Component.displayName = "".concat(displayName, "Icon");
    } // Component.muiName = SvgIcon.muiName;


    return Component;
  }
});