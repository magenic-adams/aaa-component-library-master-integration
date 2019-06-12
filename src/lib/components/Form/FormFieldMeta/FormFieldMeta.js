import React from 'react';
import MUIReportProblem from '@material-ui/icons/ReportProblem';
import MUIFormHelperText from '@material-ui/core/FormHelperText';
import { withStyles } from '@material-ui/core/styles';

const styleClasses = theme => {
  return {
    root: {
      minHeight: 26,
    },
    helperTextStyle: {
      color: theme.palette.colorVariables.GRAY,
      [theme.breakpoints.up('sm')]: {
        fontSize: 14,
      },
      [theme.breakpoints.up('md')]: {
        fontSize: 16,
      },
    },
    errorTextWrapper: {
      marginTop: 6,
    },
    errorText: {
      color: theme.palette.error.main,
      display: 'inline',
      paddingTop: 10,
      marginTop: 8,
      [theme.breakpoints.up('sm')]: {
        fontSize: 14,
      },
      [theme.breakpoints.up('md')]: {
        fontSize: 16,
      },
    },
    errorIcon: {
      display: 'inline',
      verticalAlign: 'text-bottom',
      fontSize: 20,
      marginRight: 8,
    },
  };
};

function FormFieldMeta({
  error,
  disableWarning,
  classes,
  helperText,
  id,
}){
  if (disableWarning) return null;
  return (
    <div className={classes.root}>
      {error && (
        <div className={classes.errorTextWrapper}>
          <MUIReportProblem color="error" className={classes.errorIcon} />
          <MUIFormHelperText
            id={`${id}-component-error-text`}
            className={classes.errorText}
          >
            {error}
          </MUIFormHelperText>
        </div>
      )}

      {helperText && (
        <MUIFormHelperText
          id={`${id}-component-helper-text`}
          className={classes.helperTextStyle}
          error={false}
        >
          {helperText}
        </MUIFormHelperText>
      )} 
    </div>
  );
}

export default withStyles(styleClasses, { index: 0, withTheme: true })(
  FormFieldMeta
);
