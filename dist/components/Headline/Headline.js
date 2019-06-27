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
    global.Headline = mod.exports;
  }
})(this, function (_exports, _objectSpread2, _react, _styles, _clsx) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _objectSpread2 = _interopRequireDefault(_objectSpread2);
  _react = _interopRequireDefault(_react);
  _clsx = _interopRequireDefault(_clsx);
  var defaultProps = {
    className: ''
  }; // Component styles manipulated entirely by theme

  var styleClasses = function styleClasses(theme) {
    return {
      root: (0, _objectSpread2.default)({
        color: theme.typographyValues.color,
        fontFamily: theme.typographyValues.fontFamily,
        fontWeight: theme.typographyValues.fontWeight
      }, theme.typography.h1)
    };
  };

  var Headline = function Headline(_ref) {
    var children = _ref.children,
        className = _ref.className,
        classes = _ref.classes,
        id = _ref.id;
    return _react.default.createElement("h1", {
      className: (0, _clsx.default)('Headline', classes.root, className),
      "data-quid": "Headline-".concat(id)
    }, children);
  };

  Headline.defaultProps = defaultProps;

  var _default = (0, _styles.withStyles)(styleClasses, {
    index: 0,
    withTheme: true
  })(Headline);

  _exports.default = _default;
});