import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { withStyles } from '@material-ui/styles'; // Material UI Components

import MUIFormControl from '@material-ui/core/FormControl';
import MUIAddIcon from '@material-ui/icons/Add';
import MUIRemoveIcon from '@material-ui/icons/Remove'; // Components

import FormFieldMeta from '../Form/FormFieldMeta/FormFieldMeta';
import Label from '../Label/Label';
import StepperButton from '../Button/Button';
import NumericInput from '../Input/NumericInput/NumericInput';
import { AAA_CSS_INLINE, AAA_CSS_MIDDLE } from '../../constants/cssConstants';
var defaultProps = {
  disabled: false,
  disableWarning: false,
  error: '',
  helperText: '',
  labelText: '',
  mask: [],
  value: 0
};

var styleClasses = function styleClasses(theme) {
  var _error;

  return {
    stepperIcon: {
      width: 24,
      height: '100%',
      color: theme.palette.primary.main
    },
    stepperInputWrapper: {
      display: 'inline-block',
      width: 78
    },
    stepperLabel: _defineProperty({
      color: theme.secondaryPalette.colorVariables.BLACK,
      marginTop: 8,
      fontSize: '16px'
    }, theme.breakpoints.up('md'), {
      fontSize: '18px'
    }),
    actionWrapper: {
      margin: '16px 0 6px 0'
    },
    helperText: {
      color: theme.secondaryPalette.colorVariables.GRAY,
      marginTop: 8,
      '& span': _defineProperty({
        fontSize: 14
      }, theme.breakpoints.up('md'), {
        fontSize: 16
      })
    },
    error: (_error = {
      color: theme.palette.error.main,
      fontSize: 14
    }, _defineProperty(_error, theme.breakpoints.up('md'), {
      fontSize: '16px'
    }), _defineProperty(_error, '& svg', {
      display: "".concat(AAA_CSS_INLINE),
      fontSize: 20,
      marginLeft: 8,
      marginRight: 8,
      verticalAlign: "".concat(AAA_CSS_MIDDLE)
    }), _error)
  };
};

var NumericalStepper = function NumericalStepper(_ref) {
  var classes = _ref.classes,
      disabled = _ref.disabled,
      disableWarning = _ref.disableWarning,
      error = _ref.error,
      helperText = _ref.helperText,
      id = _ref.id,
      labelText = _ref.labelText,
      mask = _ref.mask,
      name = _ref.name,
      onIncrease = _ref.onIncrease,
      onDecrease = _ref.onDecrease,
      value = _ref.value;
  return React.createElement(MUIFormControl, {
    id: id,
    disabled: disabled,
    classes: classes.root
  }, labelText && React.createElement(Label, {
    id: "NumericalStepperLabel-".concat(id),
    disabled: false,
    error: error,
    focused: false
  }, labelText), React.createElement("div", {
    className: classes.actionWrapper
  }, React.createElement(StepperButton, {
    id: "DecreaseStepper-".concat(id),
    disabled: disabled,
    onClick: onDecrease,
    isIconButton: true
  }, React.createElement(MUIRemoveIcon, {
    "data-quid": "RemoveIcon-".concat(id),
    className: classes.stepperIcon
  })), React.createElement("div", {
    className: classes.stepperInputWrapper
  }, React.createElement(NumericInput, {
    name: name,
    id: "NumericalStepperInput-".concat(id),
    centerText: true,
    value: value,
    error: error,
    disabled: disabled,
    mask: mask,
    disableWarning: true
  })), React.createElement(StepperButton, {
    id: "IncreaseStepper-".concat(id),
    disabled: disabled,
    onClick: onIncrease,
    isIconButton: true
  }, React.createElement(MUIAddIcon, {
    "data-quid": "AddIcon-".concat(id),
    className: classes.stepperIcon
  }))), React.createElement(FormFieldMeta, {
    id: "NumericalStepperMeta-".concat(id),
    disableWarning: disableWarning,
    error: error,
    helperText: helperText
  }));
};

NumericalStepper.defaultProps = defaultProps;
export default withStyles(styleClasses, {
  index: 0,
  withTheme: true
})(NumericalStepper);