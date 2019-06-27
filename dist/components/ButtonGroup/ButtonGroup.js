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
    global.ButtonGroup = mod.exports;
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
  ;
  ;
  var defaultProps = {
    className: ''
  };

  var styleClasses = function styleClasses(theme) {
    return {
      root: (0, _defineProperty2.default)({
        width: '100%',
        marginTop: 24,
        marginBottom: 24,
        '& .Button:nth-child(n+1)': {
          marginTop: 8
        }
      }, theme.breakpoints.up('md'), {
        width: 'inherit'
      })
    };
  };

  var ButtonGroup = function ButtonGroup(_ref) {
    var children = _ref.children,
        classes = _ref.classes,
        className = _ref.className;
    return _react.default.createElement("div", {
      className: (0, _clsx.default)('ButtonGroup', classes.root, className)
    }, children);
  };

  ButtonGroup.defaultProps = defaultProps;

  var _default = (0, _styles.withStyles)(styleClasses, {
    index: 0,
    withTheme: true
  })(ButtonGroup);

  _exports.default = _default;
});