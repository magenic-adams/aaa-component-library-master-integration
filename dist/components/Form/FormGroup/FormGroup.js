(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "clsx", "@material-ui/styles", "@material-ui/core/FormGroup"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("clsx"), require("@material-ui/styles"), require("@material-ui/core/FormGroup"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.clsx, global.styles, global.FormGroup);
    global.FormGroup = mod.exports;
  }
})(this, function (_exports, _react, _clsx, _styles, _FormGroup) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _react = _interopRequireDefault(_react);
  _clsx = _interopRequireDefault(_clsx);
  _FormGroup = _interopRequireDefault(_FormGroup);

  // Components
  var styleClasses = function styleClasses() {
    return {
      root: {
        marginTop: 16,
        marginBottom: 16
      }
    };
  };

  var defaultProps = {
    className: ''
  };

  var FormGroup = function FormGroup(_ref) {
    var children = _ref.children,
        classes = _ref.classes,
        className = _ref.className;
    return _react.default.createElement(_FormGroup.default, {
      className: (0, _clsx.default)('FormGroup', className),
      classes: classes
    }, children);
  };

  FormGroup.defaultProps = defaultProps;

  var _default = (0, _styles.withStyles)(styleClasses, {
    index: 0,
    withTheme: true
  })(FormGroup);

  _exports.default = _default;
});