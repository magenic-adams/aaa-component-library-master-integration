import React from 'react';
import MUIReportProblem from '@material-ui/icons/ReportProblem';
import MUIFormHelperText from '@material-ui/core/FormHelperText';
import { withStyles } from '@material-ui/core/styles';

interface RequiredProps {
  id: string,
};

interface OptionalProps {
  classes?: any, // MUI Decorator
  error?: string,
  helperText?: string,
  disableWarning?: boolean
}

const defaultProps:OptionalProps = {
  error: '',
  helperText: '',
  disableWarning: false,
};

const styleClasses = (theme:any): { // CSS Classes
    root: any,
    helperTextStyle: any,
    errorIcon: any,
    errorText: any,
    errorTextWrapper: any,
  } => {
  return {
    root: {
      minHeight: 26,
    },
    helperTextStyle: {
      color: theme.secondaryPalette.colorVariables.GRAY,
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

const FormFieldMeta:React.FunctionComponent<RequiredProps & OptionalProps> = ({
  error,
  disableWarning,
  classes,
  helperText,
  id,
}) => {
  if (disableWarning) return null;
  return (
    <div className={classes.root}>
      {error && (
        <div className={classes.errorTextWrapper}>
          <MUIReportProblem
            data-quid={`FormFieldMetaReportProblem-${id}`}
            color="error"
            className={classes.errorIcon}
          />
          <MUIFormHelperText
            data-quid={`FormFieldMetaErrorText-${id}`}
            className={classes.errorText}
          >
            {error}
          </MUIFormHelperText>
        </div>
      )}

      {helperText && (
        <MUIFormHelperText
          data-quid={`FormFieldMetaHelperText-${id}`}
          className={classes.helperTextStyle}
          error={false}
        >
          {helperText}
        </MUIFormHelperText>
      )} 
    </div>
  );
};

FormFieldMeta.defaultProps = defaultProps;

export default withStyles(styleClasses, { index: 0, withTheme: true })(
  FormFieldMeta
);
