(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@babel/runtime/helpers/esm/objectSpread", "react", "@material-ui/core/styles", "@material-ui/core/InputLabel", "clsx", "lodash"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@babel/runtime/helpers/esm/objectSpread"), require("react"), require("@material-ui/core/styles"), require("@material-ui/core/InputLabel"), require("clsx"), require("lodash"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.objectSpread, global.react, global.styles, global.InputLabel, global.clsx, global.lodash);
    global.undefined = mod.exports;
  }
})(this, function (exports, _objectSpread2, _react, _styles, _InputLabel, _clsx, _lodash) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _objectSpread3 = _interopRequireDefault(_objectSpread2);

  var _react2 = _interopRequireDefault(_react);

  var _InputLabel2 = _interopRequireDefault(_InputLabel);

  var _clsx2 = _interopRequireDefault(_clsx);

  import _interopRequireDefault from "@babel/runtime/helpers/esm/interopRequireDefault";
  ;
  var defaultProps = {
    className: '',
    disabled: false,
    error: '',
    focused: false
  };

  var styleClasses = function styleClasses(theme) {
    return {
      root: (0, _objectSpread3.default)({
        color: function color(props) {
          return (0, _lodash.get)(props, 'overrides.label.color', theme.secondaryPalette.colorVariables.BLACK);
        },
        display: 'block',
        marginBottom: -8,
        fontFamily: theme.typographyValues.fontFamily,
        fontWeight: theme.typographyValues.fontWeight
      }, theme.typography.body1),
      formControl: {
        position: 'relative',
        transform: 'unset'
      }
    };
  };

  var Label = function Label(_ref) {
    var children = _ref.children,
        classes = _ref.classes,
        className = _ref.className,
        disabled = _ref.disabled,
        error = _ref.error,
        focused = _ref.focused,
        id = _ref.id;
    return _react2.default.createElement(_InputLabel2.default, {
      className: (0, _clsx2.default)('InputLabel', className),
      classes: classes,
      disabled: disabled,
      disableAnimation: true,
      error: !!error,
      focused: focused,
      htmlFor: id,
      "data-quid": "Label-".concat(id),
      shrink: false
    }, children);
  };

  Label.defaultProps = defaultProps;
  exports.default = (0, _styles.withStyles)(styleClasses, {
    index: 0,
    withTheme: true
  })(Label);
});