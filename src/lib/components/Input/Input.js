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

const styleClasses = theme => ({
  root: {
    'margin-top': '8px',
    'width': '343px',
    'height': '48px',
    borderRadius: '4px',
    background: '#ffffff',
    border: 'solid 1px #717174',
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      border: 'solid 1px #09216a',
    },
    "&.Mui-focused": {
      border: "solid 2px #09216a"
    },
    "&.Mui-error": {
      border: `solid 2px ${theme.palette.error.main}`
    }
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
    '&:hover': {
      backgroundColor: "#ffffff",
    },
  },
  input: {
    padding: '10px 12px',
  },
  iconButton: {
    padding: '10px',
    transition: 'none'
  },
  iconStyle: {
    fontSize: '20px',
    color: theme.palette.primary.main
  }
});

class Input extends Component {
  render() {
    const {
      id,
      name,
      type,
      placeholder,
      value,
      onChange,
      onClear,
      onBlur,
      labelName,
      className,
      error,
      disabled,
      helperText,
      errorText,
      classes
    } = this.props;
    return (
      <Fragment>
        <FormControl error={error} disabled={disabled}>
          {labelName && <Label
            htmlFor={id}
          >{labelName || 'Label'}</Label>}

          {/* Insert logic here text/numeric */}
          {type === 'text' && <InputMUI
            id={id}
            name={name}
            type='text'
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            disableUnderline={true}
            className={cx("Input", className)}
            value={value}
            classes={{
              root: classes.root,
              disabled: classes.disabled,
              error: classes.error,
              input: classes.input
            }}
            endAdornment={
              (onClear && value) && <InputAdornment position="end">
                <IconButton
                  disableRipple={true}
                  aria-label="Clear text"
                  onClick={onClear}
                  disabled={disabled}
                  color="inherit"
                  classes={{
                    root: classes.iconButton,
                  }}
                >
                  <Clear
                    classes={{
                      root: classes.iconStyle,
                    }} />
                </IconButton>
              </InputAdornment>
            }
          />}
          {(errorText && error) && <FormHelperText id={id + "-component-error-text"}>{errorText}</FormHelperText>}
        </FormControl>
        {helperText && <FormHelperText id={id + "-component-helper-text"}>{helperText}</FormHelperText>}
      </Fragment>
    );
  }
}

Input.propTypes = {
  // MUI Decorator
  classes: PropTypes.object.isRequired,
  // Passed Props
  className: PropTypes.string,
  labelName: PropTypes.string,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  onClear: PropTypes.func
};

export default withStyles(styleClasses, {withTheme: true})(Input);
