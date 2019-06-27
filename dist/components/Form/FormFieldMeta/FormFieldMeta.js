(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@babel/runtime/helpers/esm/defineProperty", "react", "@material-ui/icons/ReportProblem", "@material-ui/core/FormHelperText", "@material-ui/core/styles"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@babel/runtime/helpers/esm/defineProperty"), require("react"), require("@material-ui/icons/ReportProblem"), require("@material-ui/core/FormHelperText"), require("@material-ui/core/styles"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.defineProperty, global.react, global.ReportProblem, global.FormHelperText, global.styles);
    global.FormFieldMeta = mod.exports;
  }
})(this, function (_exports, _defineProperty2, _react, _ReportProblem, _FormHelperText, _styles) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _defineProperty2 = _interopRequireDefault(_defineProperty2);
  _react = _interopRequireDefault(_react);
  _ReportProblem = _interopRequireDefault(_ReportProblem);
  _FormHelperText = _interopRequireDefault(_FormHelperText);
  ;
  var defaultProps = {
    error: '',
    helperText: '',
    disableWarning: false
  };

  var styleClasses = function styleClasses(theme) {
    var _helperTextStyle, _errorText;

    return {
      root: {
        minHeight: 26
      },
      helperTextStyle: (_helperTextStyle = {
        color: theme.secondaryPalette.colorVariables.GRAY
      }, (0, _defineProperty2.default)(_helperTextStyle, theme.breakpoints.up('sm'), {
        fontSize: 14
      }), (0, _defineProperty2.default)(_helperTextStyle, theme.breakpoints.up('md'), {
        fontSize: 16
      }), _helperTextStyle),
      errorTextWrapper: {
        marginTop: 6
      },
      errorText: (_errorText = {
        color: theme.palette.error.main,
        display: 'inline',
        paddingTop: 10,
        marginTop: 8
      }, (0, _defineProperty2.default)(_errorText, theme.breakpoints.up('sm'), {
        fontSize: 14
      }), (0, _defineProperty2.default)(_errorText, theme.breakpoints.up('md'), {
        fontSize: 16
      }), _errorText),
      errorIcon: {
        display: 'inline',
        verticalAlign: 'text-bottom',
        fontSize: 20,
        marginRight: 8
      }
    };
  };

  var FormFieldMeta = function FormFieldMeta(_ref) {
    var error = _ref.error,
        disableWarning = _ref.disableWarning,
        classes = _ref.classes,
        helperText = _ref.helperText,
        id = _ref.id;
    if (disableWarning) return null;
    return _react.default.createElement("div", {
      className: classes.root
    }, error && _react.default.createElement("div", {
      className: classes.errorTextWrapper
    }, _react.default.createElement(_ReportProblem.default, {
      "data-quid": "FormFieldMetaReportProblem-".concat(id),
      color: "error",
      className: classes.errorIcon
    }), _react.default.createElement(_FormHelperText.default, {
      "data-quid": "FormFieldMetaErrorText-".concat(id),
      className: classes.errorText
    }, error)), helperText && _react.default.createElement(_FormHelperText.default, {
      "data-quid": "FormFieldMetaHelperText-".concat(id),
      className: classes.helperTextStyle,
      error: false
    }, helperText));
  };

  FormFieldMeta.defaultProps = defaultProps;

  var _default = (0, _styles.withStyles)(styleClasses, {
    index: 0,
    withTheme: true
  })(FormFieldMeta);

  _exports.default = _default;
});