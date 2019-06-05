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
    height: '48px',
    width: '100%',
    border: 0,
    borderRadius: '4px',
    background: theme.palette.colorVariables.WHITE,
    boxShadow: `inset 0 0 0 1px ${theme.palette.colorVariables.GRAY}`,
    '&:hover': {
      borderColor: theme.palette.colorVariables.DARKER_BLUE,
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
    '&:hover': {
      backgroundColor: theme.palette.disabled.main,
      border: "none",
    },
  },
  error: {
    boxShadow: `inset 0 0 0 1px ${theme.palette.error.main}`,
    '&:hover': {
      backgroundColor: theme.palette.colorVariables.WHITE,
    },
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
  errorTextStyle: {
    marginTop: '8px',
    '& p': {
      display: 'inline',
      [theme.breakpoints.up('sm')]: {
        fontSize: '14px'
      },
      [theme.breakpoints.up('md')]: {
        fontSize: '16px'
      }
    },
    '& svg': {
      display: 'inline',
      float: 'right',
      fontSize: '20px',
      marginRight: '8px'
    }
  }
});

type propTypes = {
  // MUI Decorator
  classes: PropTypes.object,
  // Passed Props
  className?: PropTypes.string,
  formControlClass?: PropTypes.string,
  disabled?: PropTypes.bool,
  error: PropTypes.string,
  helperText?: PropTypes.string,
  id: PropTypes.string,
  labelName?: PropTypes.string,
  name: PropTypes.string,
  placeholder?: PropTypes.string,
  type?: PropTypes.string,
  value: PropTypes.string,
  onBlur?: PropTypes.func,
  onChange?: PropTypes.func,
  onClear?: PropTypes.func
};


function Input({
  classes,
  className,
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
  onClear
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
        autoComplete="off"
        classes={{
          root: classes.root,
          disabled: classes.disabled,
          focused: classes.focused,
          error: classes.error,
          input: classes.input
        }}
        className={cx("BaseInput", className)}
        data-quid={`BaseInput-${id}`}
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
        name={name}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      
      {error && (
        <div>
          <MUIFormHelperText
            id={`${id}-component-error-text`}
            className={classes.errorTextStyle}
          >
            {error}
          </MUIFormHelperText>
          <MUIReportProblem color="error" />
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
  className: '',
  formControlClass: '',
  disabled: false,
  helperText: null,
  labelName: null,
  placeholder: '',
  type: 'text',
  onBlur: () => {},
  onChange: () => {},
  onClear: null
};


export default withStyles(styleClasses, { index: 0, withTheme: true })(Input);
