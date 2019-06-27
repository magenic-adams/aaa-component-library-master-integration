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
    global.undefined = mod.exports;
  }
})(this, function (exports, _react, _SvgIcon) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = createSvgIcon;

  var _react2 = _interopRequireDefault(_react);

  var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

  import _interopRequireDefault from "@babel/runtime/helpers/esm/interopRequireDefault";

  // createSvgIcon taken from Material UI utilities
  function createSvgIcon(path, displayName) {
    var Component = _react2.default.memo(_react2.default.forwardRef(function (props, ref) {
      return _react2.default.createElement(_SvgIcon2.default, Object.assign({
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