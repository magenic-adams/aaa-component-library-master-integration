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
    global.undefined = mod.exports;
  }
})(this, function (exports, _defineProperty2, _react, _styles, _clsx) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _defineProperty3 = _interopRequireDefault(_defineProperty2);

  var _react2 = _interopRequireDefault(_react);

  var _clsx2 = _interopRequireDefault(_clsx);

  import _interopRequireDefault from "@babel/runtime/helpers/esm/interopRequireDefault";
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
    return _react2.default.createElement("p", {
      className: (0, _clsx2.default)('Body', classes.root, (_cx = {}, (0, _defineProperty3.default)(_cx, classes.primary, !secondary), (0, _defineProperty3.default)(_cx, classes.secondary, secondary), _cx), className),
      "data-quid": "Body-".concat(id)
    }, children);
  };

  Body.defaultProps = defaultProps;
  exports.default = (0, _styles.withStyles)(styleClasses, {
    index: 0,
    withTheme: true
  })(Body);
});