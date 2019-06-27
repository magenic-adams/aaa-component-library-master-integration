(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@babel/runtime/helpers/esm/defineProperty", "react", "@material-ui/styles", "clsx"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@babel/runtime/helpers/esm/defineProperty"), require("react"), require("@material-ui/styles"), require("clsx"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.defineProperty, global.react, global.styles, global.clsx);
    global.Body = mod.exports;
  }
})(this, function (_exports, _defineProperty2, _react, _styles, _clsx) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _defineProperty2 = _interopRequireDefault(_defineProperty2);
  _react = _interopRequireDefault(_react);
  _clsx = _interopRequireDefault(_clsx);
  var defaultProps = {
    className: '',
    secondary: false
  }; // Component styles manipulated entirely by theme

  var styleClasses = function styleClasses(theme) {
    return {
      root: {
        color: theme.typographyValues.color,
        fontFamily: theme.typographyValues.fontFamily,
        fontWeight: theme.typographyValues.fontWeight
      },
      primary: theme.typography.body1,
      secondary: theme.typography.body2
    };
  };

  var Body = function Body(_ref) {
    var _cx;

    var children = _ref.children,
        className = _ref.className,
        classes = _ref.classes,
        id = _ref.id,
        secondary = _ref.secondary;
    return _react.default.createElement("p", {
      className: (0, _clsx.default)('Body', classes.root, (_cx = {}, (0, _defineProperty2.default)(_cx, classes.primary, !secondary), (0, _defineProperty2.default)(_cx, classes.secondary, secondary), _cx), className),
      "data-quid": "Body-".concat(id)
    }, children);
  };

  Body.defaultProps = defaultProps;

  var _default = (0, _styles.withStyles)(styleClasses, {
    index: 0,
    withTheme: true
  })(Body);

  _exports.default = _default;
});