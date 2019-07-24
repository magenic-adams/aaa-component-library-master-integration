/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
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

import styleClasses, { StepperStylesOverride } from './NumericalStepperStyles';

interface RequiredProps {
  id: string;
  name: string;
  onDecrease: (evt: React.SyntheticEvent) => void;
  onIncrease: (evt: React.SyntheticEvent) => void;
  onBlur: (evt: React.SyntheticEvent) => void;
  onChange: (evt: React.SyntheticEvent) => void;
}

interface OptionalProps {
  classes?: any; // MUI Decorator
  disabled?: boolean;
  disableWarning?: boolean;
  error?: string;
  helperText?: string;
  labelText?: string | React.ReactElement | React.ReactHTMLElement<any>;
  mask?: RegExp[];
  value?: number;
  overrides?: StepperStylesOverride;
}

const stepperOverridesDefault: StepperStylesOverride = {};

const defaultProps: OptionalProps = {
  classes: {},
  disabled: false,
  labelText: '',
  helperText: '',
  error: '',
  value: 1,
};

const NumericalStepper: React.FunctionComponent<
  RequiredProps & OptionalProps
> = props => {
  const {
    disabled,
    disableWarning,
    error,
    helperText,
    id,
    labelText,
    mask,
    name,
    onIncrease,
    onDecrease,
    onBlur,
    onChange,
    value,
    overrides = stepperOverridesDefault,
  } = props;

  const classes = styleClasses(overrides);

  return (
    <MUIFormControl
      id={id}
      disabled={disabled}
      classes={{ root: classes.root }}
    >
      <Label
        overrides={overrides}
        id={`NumericalStepperLabel-${id}`}
        disabled={false}
        error={error}
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
            className={classes.stepperIcon}
          />
        </StepperButton>

        <div className={classes.stepperInputWrapper}>
          <NumericInput
            id={`NumericalStepperInput-${id}`}
            name={name}
            centerText
            type="text"
            value={value}
            error={error}
            disabled={disabled}
            mask={mask}
            onBlur={onBlur}
            onChange={onChange}
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

NumericalStepper.defaultProps = defaultProps;

export default withTheme(NumericalStepper);
