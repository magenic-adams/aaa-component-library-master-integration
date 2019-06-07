import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import { withStyles } from '@material-ui/core/styles';

// Material UI components
import MUIInput from '@material-ui/core/Input';
import MUIFormControl from "@material-ui/core/FormControl";
import MUIFormHelperText from "@material-ui/core/FormHelperText";
import MUIClear from '@material-ui/icons/Clear';
import MUIInputAdornment from '@material-ui/core/InputAdornment';
import MUIIconButton from '@material-ui/core/IconButton';
import MUIReportProblem from '@material-ui/icons/ReportProblem';

// Components
import Label from "../../Label/Label";

const styleClasses = theme => ({
  root: {
    marginTop: '8px',
    height: 48,
    width: '100%',
    border: 0,
    borderRadius: 4,
    background: theme.palette.colorVariables.WHITE,
    boxShadow: `inset 0 0 0 1px ${theme.palette.colorVariables.GRAY}`,
    '&:hover,&:active': {
      boxShadow: `inset 0 0 0 1px ${theme.palette.colorVariables.DARKER_BLUE}`,
    },
  },
  focused: {
    boxShadow: `inset 0 0 0 2px ${theme.palette.colorVariables.DARKER_BLUE}`,
    '&:hover': {
      boxShadow: `inset 0 0 0 2px ${theme.palette.colorVariables.DARKER_BLUE}`,
    },
  },
  disabled: {
    background: theme.palette.disabled.main,
    boxShadow: "initial",
  },
  input: {
    padding: '10px 12px',
    [theme.breakpoints.up('sm')]: {
      fontSize: '16px'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '18px'
    }
  },
  iconButton: {
    padding: '10px',
    transition: 'none'
  },
  iconStyle: {
    fontSize: '20px',
    color: theme.palette.primary.main
  },
  formControlStyle: {
    [theme.breakpoints.up('sm')]: {
      width: '100%',
    },
    [theme.breakpoints.up('md')]: {
      width: '534px',
    },
  },
  helperTextStyle: {
    color: `${theme.palette.colorVariables.GRAY} !important`,
    [theme.breakpoints.up('sm')]: {
      fontSize: '14px'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '16px'
    }
  },
  error: {
    boxShadow: `inset 0 0 0 2px ${theme.palette.error.main}`,
    '&:focus': {
      boxShadow: `inset 0 0 0 2px ${theme.palette.error.main}`,
    },
  },
  errorTextWrapper: {
    marginTop: 8,
  },
  errorText: {
    display: 'inline',
    paddingTop: 10,
    marginTop: 8,
    [theme.breakpoints.up('sm')]: {
      fontSize: '14px'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '16px'
    },
  },
  errorIcon: {
    display: 'inline',
    verticalAlign: 'text-bottom',
    fontSize: 20,
    marginRight: 8,
  }
});

type propTypes = {
  // MUI Decorator
  classes: PropTypes.object,
  // Passed Props
  className?: PropTypes.string,
  formControlClass?: PropTypes.string,
  disabled?: PropTypes.bool,
  error?: PropTypes.string,
  disableErrorWarning?: PropTypes.bool,
  helperText?: PropTypes.string,
  id: PropTypes.string,
  labelName?: PropTypes.string,
  name: PropTypes.string,
  placeholder?: PropTypes.string,
  type?: PropTypes.string,
  value?: PropTypes.string,
  onBlur?: PropTypes.func,
  onChange?: PropTypes.func,
  onClear?: PropTypes.func,
  onFocus?: PropTypes.func,
};


function Input({
  autoFocus,
  classes,
  className,
  forwardedRef,
  formControlClass,
  disabled,
  error,
  helperText,
  id,
  labelName,
  name,
  placeholder,
  type,
  value,
  onBlur,
  onChange,
  onClear,
  onFocus,
}): propTypes {
  return (
    <MUIFormControl
      className={cx(classes.formControlStyle, formControlClass)}
      error={!!error}
      disabled={disabled}
    >
      {labelName && (
        <Label htmlFor={id}>
          {labelName}
        </Label>
      )}
      
      <MUIInput
        autoFocus={autoFocus}
        autoComplete="off"
        classes={{
          root: classes.root,
          disabled: classes.disabled,
          focused: classes.focused,
          error: classes.error,
          input: classes.input
        }}
        className={cx("BaseInput", className)}
        disableUnderline
        endAdornment={
          (onClear && value) && (
            <MUIInputAdornment position="end">
              <MUIIconButton
                disableRipple
                aria-label="Clear text"
                onClick={onClear}
                disabled={disabled}
                color="inherit"
                className={classes.iconButton}
              >
                <MUIClear className={classes.iconStyle}/>
              </MUIIconButton>
            </MUIInputAdornment>
          )
        }
        id={id}
        inputProps={{
          'data-quid': `BaseInput-${id}`,
          ref: forwardedRef,
        }}
        name={name}
        placeholder={labelName ? null : placeholder}
        type={type}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
      />

      {error && (
        <div className={classes.errorTextWrapper}>
          <MUIReportProblem
            color="error"
            className={classes.errorIcon}
          />
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
        >
          {helperText}
        </MUIFormHelperText>
      )}
    </MUIFormControl>
  );
}

Input.defaultProps = {
  autoFocus: false,
  className: '',
  formControlClass: '',
  forwardedRef: React.createRef(),
  disabled: false,
  helperText: null,
  labelName: null,
  placeholder: '',
  type: 'text',
  value: undefined,
  onBlur: () => {},
  onChange: () => {},
  onClear: null,
  onFocus: () => {},
};


export default withStyles(styleClasses, { index: 0, withTheme: true })(Input);
