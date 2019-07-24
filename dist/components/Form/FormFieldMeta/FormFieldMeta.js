"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ReportProblem = _interopRequireDefault(require("@material-ui/icons/ReportProblem"));

var _FormHelperText = _interopRequireDefault(require("@material-ui/core/FormHelperText"));

var _styles = require("@material-ui/core/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;
var defaultProps = {
  error: '',
  helperText: '',
  disableWarning: false
};

var styleClasses = theme => {
  return {
    root: {
      minHeight: 26
    },
    helperTextStyle: {
      color: theme.secondaryPalette.colorVariables.GRAY,
      [theme.breakpoints.up('sm')]: {
        fontSize: 14
      },
      [theme.breakpoints.up('md')]: {
        fontSize: 16
      }
    },
    errorTextWrapper: {
      marginTop: 6
    },
    errorText: {
      color: theme.palette.error.main,
      display: 'inline',
      paddingTop: 10,
      marginTop: 8,
      [theme.breakpoints.up('sm')]: {
        fontSize: 14
      },
      [theme.breakpoints.up('md')]: {
        fontSize: 16
      }
    },
    errorIcon: {
      display: 'inline',
      verticalAlign: 'text-bottom',
      fontSize: 20,
      marginRight: 8
    }
  };
};

var FormFieldMeta = (_ref) => {
  var {
    error,
    disableWarning,
    classes,
    helperText,
    id
  } = _ref;
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

exports.default = _default;