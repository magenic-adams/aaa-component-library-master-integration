import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

/* eslint-disable no-console */

/* eslint-disable no-plusplus */
import React from 'react';
import PropTypes from 'prop-types'; // eslint-disable-next-line import/no-extraneous-dependencies

import { withStyles } from '@material-ui/styles';
import cx from 'clsx'; // eslint-disable-next-line import/no-cycle

import { Button, ButtonGroup } from '..';

var styleClasses = function styleClasses(theme) {
  return {
    button: _defineProperty({
      width: '157px',
      height: '48px',
      '& span': {
        fontSize: '18px'
      }
    }, theme.breakpoints.between('xs', 'sm'), {
      width: '50%',
      '& span': {
        fontSize: '16px',
        fontWeight: '700'
      }
    }),
    left: {
      borderTopRightRadius: '0px',
      borderBottomRightRadius: '0px',
      borderRightStyle: 'none'
    },
    right: {
      borderTopLeftRadius: '0px',
      borderBottomLeftRadius: '0px'
    },
    active: _defineProperty({
      background: theme.palette.primary.dark,
      color: theme.palette.common.white,
      '&:hover': {
        background: theme.palette.primary.dark
      }
    }, theme.breakpoints.between('xs', 'sm'), {
      background: theme.palette.colorVariables.SECONDARY_HOVER,
      color: theme.palette.primary.main,
      '&:hover': {
        background: theme.palette.colorVariables.SECONDARY_HOVER
      }
    })
  };
};

function handleClick(value, callback) {
  if (callback) callback(value);
}

function isOptionsKeysPresent(options) {
  var acceptedKeys = ['id', 'text'];

  for (var i = 0; i < options.length; i++) {
    var keys = Object.keys(options[i]);

    for (var k = 0; k < keys.length; k++) {
      if (!acceptedKeys.includes(keys[k])) return false;
    }
  }

  return true;
}

function getClassName(value, id, classes) {
  var button = classes.button,
      active = classes.active;
  var isIdMatched = value && value.id !== undefined && value.id === id;
  return isIdMatched ? "".concat(button, " ").concat(active) : button;
}

function isOptionsValid(options) {
  if (!Array.isArray(options) || options.length < 2) {
    console.error('Invalid length of options. You must passed maximum number of two options');
    return false;
  }

  if (!isOptionsKeysPresent(options)) {
    console.error('Invalid object keys are present. Keys should contain id and text');
    return false;
  }

  return true;
}

function ToggleButtonGroup(_ref) {
  var classes = _ref.classes,
      className = _ref.className,
      value = _ref.value,
      disabled = _ref.disabled,
      onSelect = _ref.onSelect,
      options = _ref.options;
  return React.createElement("div", null, isOptionsValid(options) ? React.createElement(ButtonGroup, {
    className: cx('ButtonGroup', classes.root, className)
  }, React.createElement(Button, {
    className: cx('Button', "".concat(getClassName(value, options[0].id, classes), " ").concat(classes.left), className),
    color: "secondary",
    disabled: disabled,
    onClick: function onClick() {
      return handleClick(options[0], onSelect);
    }
  }, options[0].text), React.createElement(Button, {
    className: cx('Button', "".concat(getClassName(value, options[1].id, classes), " ").concat(classes.right), className),
    color: "secondary",
    disabled: disabled,
    onClick: function onClick() {
      return handleClick(options[1], onSelect);
    }
  }, options[1].text)) : null);
}

ToggleButtonGroup.defaultProps = {
  className: '',
  value: {
    id: '',
    text: ''
  }
};
export default withStyles(styleClasses, {
  withTheme: true
})(ToggleButtonGroup);