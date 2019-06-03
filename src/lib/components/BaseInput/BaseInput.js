import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import InputMUI from '@material-ui/core/Input';
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Clear from '@material-ui/icons/Clear';
import Label from "../Label/Label";
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import ReportProblem from '@material-ui/icons/ReportProblem';

const styleClasses = theme => ({
  root: {
    marginTop: '8px',
    height: '48px',
    width: '100%',
    borderRadius: '4px',
    background: theme.palette.colorVariables.WHITE,
    border: `solid 1px ${theme.palette.colorVariables.GRAY}`,
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      border: `solid 1px ${theme.palette.colorVariables.DARKER_BLUE}`,
    },
  },
  focused: {
    border: `solid 2px ${theme.palette.colorVariables.DARKER_BLUE}`,
  },
  disabled: {
    background: theme.palette.disabled.main,
    border: "none",
    '&:hover': {
      backgroundColor: theme.palette.disabled.main,
      border: "none",
    },
  },
  error: {
    border: `solid 2px ${theme.palette.error.main} !important`,
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

class Input extends Component {
  render() {
    const {
      classes,
      className,
      formControlClass,
      disabled,
      error,
      errorText,
      helperText,
      id,
      inputComponent,
      labelName,
      name,
      placeholder,
      value,
      onBlur,
      onChange,
      onClear
    } = this.props;
    return (
      <Fragment>
        <FormControl className={cx(classes.formControlStyle, formControlClass)} error={error} disabled={disabled} >
          {labelName && <Label
            htmlFor={id}
          >{labelName}</Label>}
          <InputMUI
            autoComplete="off"
            classes={{
              root: classes.root,
              disabled: classes.disabled,
              focused: classes.focused,
              error: classes.error,
              input: classes.input
            }}
            className={cx("Input", className)}
            disableUnderline
            endAdornment={
              (onClear && value) && <InputAdornment position="end">
                <IconButton
                  disableRipple
                  aria-label="Clear text"
                  onClick={onClear}
                  disabled={disabled}
                  color="inherit"
                  className={classes.iconButton}
                >
                  <Clear
                    className={classes.iconStyle}
                  />
                </IconButton>
              </InputAdornment>
            }
            id={id}
            inputComponent={inputComponent}
            name={name}
            placeholder={placeholder}
            type="text"
            value={value}
            onChange={onChange}
            onBlur={onBlur}
          />
          {(errorText && error) &&
            <div className={classes.errorTextStyle}>
              <FormHelperText id={id + "-component-error-text"}>{errorText}</FormHelperText>
              <ReportProblem color="error" />
            </div>}
          {helperText && <FormHelperText id={id + "-component-helper-text"} className={classes.helperTextStyle}>{helperText}</FormHelperText>}
        </FormControl>
      </Fragment>
    );
  }
}

Input.propTypes = {
  // MUI Decorator
  classes: PropTypes.object.isRequired,
  // Passed Props
  className: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  inputComponent: PropTypes.func,
  labelName: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  onClear: PropTypes.func
};

export default withStyles(styleClasses, { withTheme: true })(Input);
