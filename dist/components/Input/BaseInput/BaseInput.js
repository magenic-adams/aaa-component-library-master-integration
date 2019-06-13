import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import { withStyles } from '@material-ui/core/styles'; // Material UI components

import MUIInput from '@material-ui/core/Input';
import MUIFormControl from '@material-ui/core/FormControl';
import MUIClear from '@material-ui/icons/Clear';
import MUIInputAdornment from '@material-ui/core/InputAdornment';
import MUIIconButton from '@material-ui/core/IconButton'; // Components

import Label from '../../Label/Label';
import FormFieldMeta from '../../Form/FormFieldMeta/FormFieldMeta';

var styleClasses = function styleClasses(theme) {
  var _input, _formControlStyle;

  return {
    root: {
      padding: '0 12px',
      height: 48,
      width: '100%',
      border: 0,
      borderRadius: 4,
      background: theme.palette.colorVariables.WHITE,
      boxShadow: "inset 0 0 0 1px ".concat(theme.palette.colorVariables.GRAY),
      '&:hover,&:active': {
        boxShadow: "inset 0 0 0 1px ".concat(theme.palette.colorVariables.DARKER_BLUE)
      }
    },
    focused: {
      boxShadow: "inset 0 0 0 2px ".concat(theme.palette.colorVariables.DARKER_BLUE),
      '&:hover': {
        boxShadow: "inset 0 0 0 2px ".concat(theme.palette.colorVariables.DARKER_BLUE)
      }
    },
    disabled: {
      background: theme.palette.disabled.main,
      boxShadow: 'initial',
      '&:hover': {
        boxShadow: 'none'
      }
    },
    input: (_input = {
      boxSizing: 'border-box',
      height: '100%',
      lineHeight: '100%',
      textAlign: function textAlign(props) {
        return props.centerText ? 'center' : 'left';
      }
    }, _defineProperty(_input, theme.breakpoints.up('sm'), {
      fontSize: 16
    }), _defineProperty(_input, theme.breakpoints.up('md'), {
      fontSize: 18
    }), _input),
    inputAdornment: {
      marginRight: -10
    },
    iconButton: {
      height: 48,
      width: 48,
      borderRadius: 0,
      padding: 10,
      transition: 'none'
    },
    iconStyle: {
      fontSize: 20,
      color: theme.palette.primary.main
    },
    formControlStyle: (_formControlStyle = {}, _defineProperty(_formControlStyle, theme.breakpoints.up('sm'), {
      width: '100%'
    }), _defineProperty(_formControlStyle, theme.breakpoints.up('md'), {
      maxWidth: 534
    }), _formControlStyle),
    helperTextStyleErrorActive: {
      marginTop: 8
    },
    error: {
      boxShadow: "inset 0 0 0 2px ".concat(theme.palette.error.main),
      '&$focused': {
        // TODO
        boxShadow: "inset 0 0 0 2px ".concat(theme.palette.error.main)
      },
      // Modifiers
      centerText: {
        textAlign: 'center'
      }
    }
  };
};

function BaseInput(_ref) {
  var autoFocus = _ref.autoFocus,
      classes = _ref.classes,
      className = _ref.className,
      centerText = _ref.centerText,
      forwardedRef = _ref.forwardedRef,
      formControlClass = _ref.formControlClass,
      disabled = _ref.disabled,
      disableWarning = _ref.disableWarning,
      error = _ref.error,
      helperText = _ref.helperText,
      id = _ref.id,
      inputComponent = _ref.inputComponent,
      labelName = _ref.labelName,
      name = _ref.name,
      placeholder = _ref.placeholder,
      type = _ref.type,
      value = _ref.value,
      onBlur = _ref.onBlur,
      onChange = _ref.onChange,
      onClear = _ref.onClear,
      onFocus = _ref.onFocus;
  return React.createElement(MUIFormControl, {
    className: cx(classes.formControlStyle, formControlClass),
    error: !!error,
    disabled: disabled
  }, labelName && React.createElement(Label, {
    id: id,
    disabled: false,
    error: false,
    focused: false
  }, labelName), React.createElement(MUIInput, {
    autoFocus: autoFocus,
    autoComplete: "off",
    classes: {
      root: classes.root,
      disabled: classes.disabled,
      focused: classes.focused,
      error: classes.error,
      input: classes.input
    },
    className: cx('BaseInput', className, _defineProperty({}, classes.centerText, centerText)),
    disableUnderline: true,
    endAdornment: onClear && value && React.createElement(MUIInputAdornment, {
      className: classes.inputAdornment,
      position: "end"
    }, React.createElement(MUIIconButton, {
      disableRipple: true,
      "aria-label": "Clear text",
      onClick: onClear,
      disabled: disabled,
      color: "inherit",
      className: classes.iconButton
    }, React.createElement(MUIClear, {
      className: classes.iconStyle
    }))),
    id: id,
    inputProps: {
      'data-quid': "BaseInput-".concat(id)
    },
    inputRef: forwardedRef,
    inputComponent: inputComponent,
    name: name,
    placeholder: labelName ? null : placeholder,
    type: type,
    value: value,
    onBlur: onBlur,
    onChange: onChange,
    onFocus: onFocus
  }), React.createElement(FormFieldMeta, {
    disableWarning: disableWarning,
    error: error,
    helperText: helperText,
    id: id
  }));
}

BaseInput.defaultProps = {
  autoFocus: false,
  className: '',
  formControlClass: '',
  centerText: false,
  disabled: false,
  disableWarning: false,
  helperText: null,
  inputComponent: undefined,
  labelName: null,
  placeholder: '',
  type: 'text',
  value: undefined,
  onBlur: function onBlur() {},
  onChange: function onChange() {},
  onClear: null,
  onFocus: function onFocus() {}
};
export default withStyles(styleClasses, {
  index: 0,
  withTheme: true
})(BaseInput);