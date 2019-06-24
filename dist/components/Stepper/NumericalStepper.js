/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { withTheme } from '@material-ui/styles'; // Material UI Components

import MUIFormControl from '@material-ui/core/FormControl';
import MUIAddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove'; // Components

import FormFieldMeta from '../Form/FormFieldMeta/FormFieldMeta';
import Label from '../Label/Label';
import StepperButton from '../Button/Button';
import NumericInput from '../Input/NumericInput/NumericInput';
import { overrideStepperLabel, styleClasses } from './NumericalStepperStyles';
var defaultProps = {
  classes: {},
  disabled: false,
  labelText: '',
  helperText: '',
  mask: [],
  error: '',
  value: 1
};

var NumericalStepper = function NumericalStepper(props) {
  var disabled = props.disabled,
      disableWarning = props.disableWarning,
      error = props.error,
      helperText = props.helperText,
      id = props.id,
      labelText = props.labelText,
      mask = props.mask,
      name = props.name,
      onIncrease = props.onIncrease,
      onDecrease = props.onDecrease,
      value = props.value;
  var classes = styleClasses(props);
  return React.createElement(MUIFormControl, {
    id: id,
    disabled: disabled,
    classes: {
      root: classes.root
    }
  }, React.createElement(Label, {
    overrides: overrideStepperLabel(props),
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
  }, React.createElement(RemoveIcon, {
    "data-quid": "RemoveIcon-".concat(id),
    className: classes.stepperIcon
  })), React.createElement("div", {
    className: classes.stepperInputWrapper
  }, React.createElement(NumericInput, {
    id: "NumericalStepperInput-".concat(id),
    name: name,
    centerText: true,
    type: "text",
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
export default withTheme(NumericalStepper);