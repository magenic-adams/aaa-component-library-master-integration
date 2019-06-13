import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import { withStyles } from '@material-ui/styles';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';

var styleClasses = function styleClasses(theme) {
  return {
    root: _defineProperty({
      width: 534,
      height: 48,
      borderRadius: 4,
      border: "1px solid ".concat(theme.palette.colorVariables.BLACK),
      margin: '0px 0px 8px 0px',
      '&:hover': {
        background: theme.palette.colorVariables.SECONDARY_HOVER
      },
      '&.Mui-disabled, &.Mui-disabled:hover': {
        borderColor: theme.palette.disabled.main,
        background: 'none'
      }
    }, theme.breakpoints.down('md'), {
      width: '100%'
    }),
    radio: {
      color: theme.palette.colorVariables.GRAY,
      '&:hover': {
        background: 'none'
      }
    },
    selected: {
      border: "2px solid ".concat(theme.palette.colorVariables.DARKER_BLUE),
      fontWeight: theme.typography.buttonPrimary.fontWeight,
      '&.Mui-disabled, &.Mui-disabled:hover': {
        borderColor: theme.palette.disabled.main,
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

function RadioItem(_ref) {
  var classes = _ref.classes,
      checked = _ref.checked,
      disabled = _ref.disabled,
      item = _ref.item,
      name = _ref.name,
      onSelect = _ref.onSelect;
  var id = item.id,
      value = item.value,
      text = item.text;
  var label = classes.label,
      radio = classes.radio,
      root = classes.root;
  return React.createElement(FormControlLabel, {
    className: cx('FormControlLabel', root, _defineProperty({}, classes.selected, checked)),
    classes: {
      label: label
    },
    value: value,
    disabled: disabled,
    control: React.createElement(Radio, {
      name: name,
      key: "RadioItem-".concat(id),
      "data-quid": "RadioItem-".concat(id),
      classes: {
        root: radio
      },
      checked: checked,
      color: "primary",
      onChange: onSelect
    }),
    label: text
  });
}

RadioItem.defaultProps = {
  checked: false,
  disabled: false
};
export default withStyles(styleClasses, {
  withTheme: true
})(RadioItem);