/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';

// Material UI Components
import MUIFormControl from '@material-ui/core/FormControl';
import MUIAddIcon from '@material-ui/icons/Add';
import MUIRemoveIcon from '@material-ui/icons/Remove';

// Components
import FormFieldMeta from '../Form/FormFieldMeta/FormFieldMeta';
import Label from '../Label/Label';
import StepperButton from '../Button/Button';
import NumericInput from '../Input/NumericInput/NumericInput';

import {
  AAA_CSS_INLINE,
  AAA_CSS_MIDDLE,
} from '../../constants/cssConstants';

interface RequiredProps {
  id: string,
  name: string,
  children: string | React.ReactElement | React.ReactHTMLElement<any>,
  onDecrease: (evt:React.SyntheticEvent) => void,
  onIncrease: (evt:React.SyntheticEvent) => void,
}

interface OptionalProps {
  classes?: any, // MUI Decorator
  disabled?: boolean,
  disableWarning?: boolean,
  error?: string,
  helperText?: string,
  labelText?: string | React.ReactElement | React.ReactHTMLElement<any>,
  mask?: string[], // Pass through
  value?: number,
}

const defaultProps: OptionalProps = {
  disabled: false,
  disableWarning: false,
  error: '',
  helperText: '',
  labelText: '',
  mask: [],
  value: 0,
};


const styleClasses = (theme:any) => ({
  stepperIcon: {
    width: 24,
    height: '100%',
    color: theme.palette.primary.main,
  },
  stepperInputWrapper: {
    display: 'inline-block',
    width: 78,
  },
  stepperLabel: {
    color: theme.secondaryPalette.colorVariables.BLACK,
    marginTop: 8,
    fontSize: '16px',
    [theme.breakpoints.up('md')]: {
      fontSize: '18px',
    },
  },
  actionWrapper: {
    margin: '16px 0 6px 0',
  },
  helperText: {
    color: theme.secondaryPalette.colorVariables.GRAY,
    marginTop: 8,
    '& span': {
      fontSize: 14,
      [theme.breakpoints.up('md')]: {
        fontSize: 16,
      },
    },
  },
  error: {
    color: theme.palette.error.main,
    fontSize: 14,
    [theme.breakpoints.up('md')]: {
      fontSize: '16px',
    },
    '& svg': {
      display: `${AAA_CSS_INLINE}`,
      fontSize: 20,
      marginLeft: 8,
      marginRight: 8,
      verticalAlign: `${AAA_CSS_MIDDLE}`,
    },
  },
});

const NumericalStepper:React.FunctionComponent<RequiredProps & OptionalProps> = ({
  classes,
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
  value,
}) => {
  return (
    <MUIFormControl
      id={id}
      disabled={disabled}
      classes={classes.root}
    >
      {labelText && (
        <Label
          id={`NumericalStepperLabel-${id}`}
          disabled={false}
          error={error}
          focused={false}
        >
          {labelText}
        </Label>
      )}
      <div className={classes.actionWrapper}>
        <StepperButton
          id={`DecreaseStepper-${id}`}
          disabled={disabled}
          onClick={onDecrease}
          isIconButton
        >
          <MUIRemoveIcon
            data-quid={`RemoveIcon-${id}`}
            className={classes.stepperIcon}
          />
        </StepperButton>

        <div className={classes.stepperInputWrapper}>
          <NumericInput
            name={name}
            id={`NumericalStepperInput-${id}`}
            centerText
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

NumericalStepper.defaultProps = defaultProps;

export default withStyles(styleClasses, { index: 0, withTheme: true })(
  NumericalStepper
);
