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
    global.undefined = mod.exports;
  }
})(this, function (exports, _react, _clsx, _styles, _FormGroup) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _clsx2 = _interopRequireDefault(_clsx);

  var _FormGroup2 = _interopRequireDefault(_FormGroup);

  import _interopRequireDefault from "@babel/runtime/helpers/esm/interopRequireDefault";

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
    return _react2.default.createElement(_FormGroup2.default, {
      className: (0, _clsx2.default)('FormGroup', className),
      classes: classes
    }, children);
  };

  FormGroup.defaultProps = defaultProps;
  exports.default = (0, _styles.withStyles)(styleClasses, {
    index: 0,
    withTheme: true
  })(FormGroup);
});