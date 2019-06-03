import React, {Fragment } from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import InputMUI from '@material-ui/core/Input';
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Clear from '@material-ui/icons/Clear';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Label from "../Label/Label";

const styleClasses = theme => ({
  root: {
    marginTop: '8px',
    width: '343px',
    height: '48px',
    borderRadius: '4px',
    background: theme.palette.colorVariables.WHITE,
    border: `solid 1px ${theme.palette.colorVariables.GRAY}`,
    '&:hover': {
      border: `solid 1px ${theme.palette.colorVariables.DARKER_BLUE}`,
    },
    "&.Mui-focused": {
      border: `solid 2px ${theme.palette.colorVariables.DARKER_BLUE}`
    },
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

type propTypes = {
  // MUI Decorator
  classes: PropTypes.object.isRequired,
  // Passed Props
  className?: PropTypes.string,
  disabled?: PropTypes.bool,
  id: PropTypes.string.isRequired,
  labelName?: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: () => {},
  onBlur: () => {},
  onClear: () => {}
};

function Input({
    classes,
    className,
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
  }:propTypes){
  
  return (
    <Fragment>
      <FormControl error={error} disabled={disabled}>
        {labelName && (
          <Label htmlFor={id}>
            {labelName}
          </Label>
        )}

        {/* Insert logic here text/numeric */}
        {type === 'text' && <InputMUI
          classes={{
            root: classes.root,
            disabled: classes.disabled,
            error: classes.error,
            input: classes.input
          }}
          className={cx("Input", className)}
          disableUnderline
          id={id}
          name={name}
          placeholder={placeholder}
          type='text'
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          endAdornment={
            onClear && value && (
              <InputAdornment position="end">
                <IconButton
                  disableRipple
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
            )
          }
        />}

        {error && (
          <FormHelperText
            id={`${id  }-component-error-text`}
          >
            {error}
          </FormHelperText>
        )}
      </FormControl>
      {helperText && <FormHelperText id={`${id  }-component-helper-text`}>{helperText}</FormHelperText>}
    </Fragment>
  );
}

Input.defaultProps = {
  className: '',
  disabled: false,
  labelName: null,
}

export default withStyles(styleClasses, { withTheme: true })(Input);
