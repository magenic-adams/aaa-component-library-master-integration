import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import React from 'react';
import cx from 'clsx';
import invariant from 'tiny-invariant'; // Material UI

import { withStyles } from '@material-ui/styles';
import MUIRadio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Field } from 'react-final-form';
var defaultProps = {
  className: '',
  checked: false,
  disabled: false
};

var styleClasses = function styleClasses(theme) {
  var _root;

  return {
    root: (_root = {
      width: 534,
      height: 48,
      borderRadius: 4,
      border: 0,
      background: theme.secondaryPalette.colorVariables.WHITE,
      boxShadow: "inset 0 0 0 1px ".concat(theme.secondaryPalette.colorVariables.BLACK),
      margin: '0px 0px 8px 0px',
      '&:hover': {
        background: theme.secondaryPalette.colorVariables.SECONDARY_HOVER
      },
      '&.Mui-disabled, &.Mui-disabled:hover': {
        borderColor: theme.secondaryPalette.disabled.main,
        background: 'none'
      }
    }, _defineProperty(_root, theme.breakpoints.up('md'), {
      width: 534
    }), _defineProperty(_root, theme.breakpoints.down('sm'), {
      width: '100%'
    }), _root),
    selected: {
      border: 0,
      boxShadow: "inset 0 0 0 2px ".concat(theme.secondaryPalette.colorVariables.DARKER_BLUE),
      fontWeight: 500,
      background: theme.secondaryPalette.colorVariables.SECONDARY_HOVER,
      '&.Mui-disabled, &.Mui-disabled:hover': {
        borderColor: theme.secondaryPalette.disabled.main,
        background: 'none'
      }
    },
    label: {
      fontFamily: theme.typography.fontFamily,
      fontSize: 16,
      paddingRight: 16
    }
  };
};

function checkValidity(item) {
  if (!item) {
    invariant(false, 'You have not passed an item for rendering.');
  }

  if (!item.id && !item.value) {
    invariant(false, 'id and value are empty.');
  }
}

var Radio = function Radio(fieldProps) {
  var _fieldProps = _objectSpread({}, fieldProps),
      itemId = _fieldProps.itemId,
      _fieldProps$input = _fieldProps.input,
      name = _fieldProps$input.name,
      value = _fieldProps$input.value,
      onBlur = _fieldProps$input.onBlur,
      onFocus = _fieldProps$input.onFocus,
      checked = _fieldProps.checked,
      disabled = _fieldProps.disabled,
      onChange = _fieldProps.onChange;

  return React.createElement(MUIRadio, {
    key: itemId,
    name: name,
    checked: checked,
    value: value,
    disabled: disabled,
    color: "primary",
    onChange: onChange,
    onBlur: onBlur,
    onFocus: onFocus
  });
};

var FormRadioItem = function FormRadioItem(_ref) {
  var classes = _ref.classes,
      checked = _ref.checked,
      disabled = _ref.disabled,
      item = _ref.item,
      name = _ref.name,
      onSelect = _ref.onSelect;
  checkValidity(item);
  return !!item && React.createElement(FormControlLabel, {
    "data-quid": "RadioItem-".concat(item.id),
    className: cx('Radio', classes.root, _defineProperty({}, classes.selected, checked)),
    classes: {
      label: classes.label
    },
    control: React.createElement(Field, {
      itemId: item.id,
      name: name,
      type: "radio",
      checked: checked,
      disabled: disabled,
      color: "primary",
      value: item.value,
      onChange: function onChange() {
        return onSelect(item);
      },
      component: Radio
    }),
    label: item.display
  });
};

FormRadioItem.defaultProps = defaultProps;
export default withStyles(styleClasses, {
  index: 0,
  withTheme: true
})(FormRadioItem);