/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from '@material-ui/styles';

// Material UI Components
import MUIFormControl from '@material-ui/core/FormControl';
import MUIAddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

// Components
import FormFieldMeta from '../Form/FormFieldMeta/FormFieldMeta';
import Label from '../Label/Label';
import StepperButton from '../Button/Button';
import NumericInput from '../Input/NumericInput/NumericInput';

import {
  overrideStepperLabel,
  styleClasses,
} from './NumericalStepperStyles';

type propTypes = {
  id: PropTypes.string.isRequired,
  classes?: {},
  disabled?: PropTypes.bool,
  error?: PropTypes.string,
  labelText?: PropTypes.string,
  helperText?: PropTypes.string,
  mask?: [], // Pass through
  onIncrease: React.SyntheticEvent => void,
  onDecrease: React.SyntheticEvent => void,
  value?: PropTypes.number
};

const NumericalStepper = (props: propTypes) => {
  const {
    disabled,
    disableWarning,
    error,
    helperText,
    id,
    labelText,
    mask,
    onIncrease,
    onDecrease,
    value,
  } = props;

  const classes = styleClasses(props);

  return (
    <MUIFormControl
      id={id}
      disabled={disabled}
      classes={{ root: classes.root }}
    >
      <Label
        overrides={overrideStepperLabel(props)}
        id={`NumericalStepperLabel-${id}`}
        disabled={false}
        error={false}
        focused={false}
      >
        {labelText}
      </Label>
      <div className={classes.actionWrapper}>
        <StepperButton
          id={`DecreaseStepper-${id}`}
          disabled={disabled}
          onClick={onDecrease}
          isIconButton
        >
          <RemoveIcon
            data-quid={`RemoveIcon-${id}`}
            disabled={disabled}
            className={classes.stepperIcon}
          />
        </StepperButton>

        <div className={classes.stepperInputWrapper}>
          <NumericInput
            id={`NumericalStepperInput-${id}`}
            centerText
            type="text"
            value={value}
            error={error}
            disabled={disabled}
            mask={mask}
            disableWarning
          />
        </div>
        <StepperButton
          id={`IncreaseStepper-${id}`}
          disabled={disabled}
          onClick={onIncrease}
          isIconButton
        >
          <MUIAddIcon
            data-quid={`AddIcon-${id}`}
            className={classes.stepperIcon}
          />
        </StepperButton>
      </div>

      <FormFieldMeta
        id={`NumericalStepperMeta-${id}`}
        disableWarning={disableWarning}
        error={error}
        helperText={helperText}
      />
    </MUIFormControl>
  );
};

NumericalStepper.defaultProps = {
  classes: {},
  disabled: false,
  labelText: '',
  helperText: '',
  mask: [],
  error: false,
  value: 1,
};

export default withTheme(NumericalStepper);
