(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@babel/runtime/helpers/esm/objectSpread", "react", "@material-ui/styles", "clsx"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@babel/runtime/helpers/esm/objectSpread"), require("react"), require("@material-ui/styles"), require("clsx"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.objectSpread, global.react, global.styles, global.clsx);
    global.undefined = mod.exports;
  }
})(this, function (exports, _objectSpread2, _react, _styles, _clsx) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _objectSpread3 = _interopRequireDefault(_objectSpread2);

  var _react2 = _interopRequireDefault(_react);

  var _clsx2 = _interopRequireDefault(_clsx);

  import _interopRequireDefault from "@babel/runtime/helpers/esm/interopRequireDefault";

  // Component styles manipulated entirely by theme
  var styleClasses = function styleClasses(theme) {
    return {
      root: (0, _objectSpread3.default)({
        color: theme.typographyValues.color,
        fontFamily: theme.typographyValues.fontFamily,
        fontWeight: theme.typographyValues.fontWeight
      }, theme.typography.subtitle1)
    };
  };

  var Subtitle = function Subtitle(_ref) {
    var children = _ref.children,
        className = _ref.className,
        classes = _ref.classes,
        id = _ref.id;
    return _react2.default.createElement("div", {
      className: (0, _clsx2.default)('Subtitle', classes.root, className),
      "data-quid": "Subtitle-".concat(id)
    }, children);
  };

  exports.default = (0, _styles.withStyles)(styleClasses, {
    index: 0,
    withTheme: true
  })(Subtitle);
});