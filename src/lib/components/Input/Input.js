import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import InputMUI from '@material-ui/core/Input';
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Label from "../Label/Label";

const styleClasses = {
  root: {
    'margin-top': '8px',
    'width': '343px',
    'height': '48px',
    borderRadius: '4px',
    background: '#ffffff',
    border: 'solid 1px #717174',
    '&:hover': {
      backgroundColor: "#f3f3f3",
      "&.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        border: 'solid 1px #09216a',
      },
    },
    "&.Mui-focused": {
      border: "solid 2px #09216a"
    },
    "&.Mui-error": {
      border: "solid 2px #da291c"
    },
  },
  disabled: {
    background: '#f1f2f3',
    border: "none",
  },
  error: {
    border: "solid 2px #da291c",
  },
  input: {
    padding: '10px 12px'
  }
}


class Input extends Component {
  render() {
    const {
      id,
      name,
      type,
      placeholder,
      value,
      onChange,
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
            disableAnimation={true}
            shrink={false}
          >{labelName || 'Label'}</Label>}
          
          {/* Insert logic here text/numeric */}
          {type === 'text' && <InputMUI
            id={id}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            disableUnderline={true}
            className={cx("Input", className)}
            classes={classes}
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
  onBlur: PropTypes.func
};

export default withStyles(styleClasses)(Input);
