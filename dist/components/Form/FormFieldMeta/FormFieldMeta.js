import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import React from 'react';
import MUIReportProblem from '@material-ui/icons/ReportProblem';
import MUIFormHelperText from '@material-ui/core/FormHelperText';
import { withStyles } from '@material-ui/core/styles';
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
  return React.createElement("div", {
    className: classes.root
  }, error && React.createElement("div", {
    className: classes.errorTextWrapper
  }, React.createElement(MUIReportProblem, {
    "data-quid": "FormFieldMetaReportProblem-".concat(id),
    color: "error",
    className: classes.errorIcon
  }), React.createElement(MUIFormHelperText, {
    "data-quid": "FormFieldMetaErrorText-".concat(id),
    className: classes.errorText
  }, error)), helperText && React.createElement(MUIFormHelperText, {
    "data-quid": "FormFieldMetaHelperText-".concat(id),
    className: classes.helperTextStyle,
    error: false
  }, helperText));
};

FormFieldMeta.defaultProps = defaultProps;
export default withStyles(styleClasses, {
  index: 0,
  withTheme: true
})(FormFieldMeta);