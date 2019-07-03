"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _ReportProblem = _interopRequireDefault(require("@material-ui/icons/ReportProblem"));

var _FormHelperText = _interopRequireDefault(require("@material-ui/core/FormHelperText"));

var _styles = require("@material-ui/core/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
    }, _defineProperty(_helperTextStyle, theme.breakpoints.up('sm'), {
      fontSize: 14
    }), _defineProperty(_helperTextStyle, theme.breakpoints.up('md'), {
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
    }, _defineProperty(_errorText, theme.breakpoints.up('sm'), {
      fontSize: 14
    }), _defineProperty(_errorText, theme.breakpoints.up('md'), {
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
  return _react["default"].createElement("div", {
    className: classes.root
  }, error && _react["default"].createElement("div", {
    className: classes.errorTextWrapper
  }, _react["default"].createElement(_ReportProblem["default"], {
    "data-quid": "FormFieldMetaReportProblem-".concat(id),
    color: "error",
    className: classes.errorIcon
  }), _react["default"].createElement(_FormHelperText["default"], {
    "data-quid": "FormFieldMetaErrorText-".concat(id),
    className: classes.errorText
  }, error)), helperText && _react["default"].createElement(_FormHelperText["default"], {
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

exports["default"] = _default;