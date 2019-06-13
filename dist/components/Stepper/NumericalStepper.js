import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles'; // Material UI Components

import MUIFormControl from '@material-ui/core/FormControl';
import MUIAddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove'; // Components

import FormFieldMeta from '../Form/FormFieldMeta/FormFieldMeta';
import Label from '../Label/Label';
import StepperButton from '../Button/Button';
import NumericInput from '../Input/NumericInput/NumericInput';
import { AAA_CSS_INLINE, AAA_CSS_MIDDLE } from '../../constants/cssConstants';

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
      color: theme.palette.colorVariables.BLACK,
      marginTop: 8,
      fontSize: '16px'
    }, theme.breakpoints.up('md'), {
      fontSize: '18px'
    }),
    actionWrapper: {
      margin: '16px 0 6px 0'
    },
    helperText: {
      color: theme.palette.colorVariables.GRAY,
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

var NumericalStepper = function NumericalStepper(props) {
  var classes = props.classes,
      disabled = props.disabled,
      disableWarning = props.disableWarning,
      error = props.error,
      helperText = props.helperText,
      id = props.id,
      labelText = props.labelText,
      mask = props.mask,
      onIncrease = props.onIncrease,
      onDecrease = props.onDecrease,
      value = props.value;
  return React.createElement(MUIFormControl, {
    id: id,
    disabled: disabled,
    classes: classes.root
  }, React.createElement(Label, {
    id: "NumericalStepperLabel-".concat(id),
    disabled: false,
    error: false,
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
    disabled: disabled,
    className: classes.stepperIcon
  })), React.createElement("div", {
    className: classes.stepperInputWrapper
  }, React.createElement(NumericInput, {
    id: "NumericalStepperInput-".concat(id),
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

NumericalStepper.defaultProps = {
  classes: {},
  disabled: false,
  labelText: '',
  helperText: '',
  mask: [],
  error: false,
  value: 1
};
export default withStyles(styleClasses, {
  index: 0,
  withTheme: true
})(NumericalStepper);