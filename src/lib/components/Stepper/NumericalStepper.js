/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import MUIStep from '@material-ui/core/Step';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import ReportProblem from '@material-ui/icons/ReportProblem';
import MUIStepLabel from '@material-ui/core/StepLabel';

import StepperButton from '../Button/Button';
import NumericInput from '../Input/NumericInput/NumericInput';

import {
  AAA_CSS_INLINE,
  AAA_CSS_MIDDLE,
} from '../../constants/cssConstants';


const styleClasses = theme => ({
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
    color: theme.palette.colorVariables.BLACK,
    marginTop: 8,
    fontSize: '16px',
    [theme.breakpoints.up('md')]: {
      fontSize: '18px',
    },
  },
  helpText: {
    color: theme.palette.colorVariables.GRAY,
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

type propTypes = {
  id: PropTypes.string.isRequired,
  classes?: {},
  disabled?: PropTypes.bool,
  error?: PropTypes.bool,
  labelText?: PropTypes.string,
  helpText?: PropTypes.string,
  mask?: [], // Pass through
  onIncrease: (React.SyntheticEvent) => void,
  onDecrease: (React.SyntheticEvent) => void,
  value?: PropTypes.number,
};

const NumericalStepper = (props:propTypes) => {
  const {
    classes,
    disabled,
    error,
    errorText,
    helpText,
    id,
    labelText,
    mask,
    onIncrease,
    onDecrease,
    value,
  } = props;
  console.log('value', value);
  return (
    <MUIStep
      id={id}
      disabled={disabled}
      classes={classes.root}
    >
      <MUIStepLabel
        data-quid={`StepLabel-${id}`}
        classes={{ label: classes.stepperLabel }}
      >
        {labelText}
      </MUIStepLabel>
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
          className={classes.stepperInputWrapper}
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
        <AddIcon data-quid={`AddIcon-${id}`} className={classes.stepperIcon} />
      </StepperButton>
      <MUIStepLabel
        data-quid={`Component-error-text-${id}`}
        classes={{ error: classes.error }}
        className={classes.helpText}
        error={error}
      >
        {error && <ReportProblem data-quid={`ReportProblem-${id}`} />}
        {errorText}
      </MUIStepLabel>
      <MUIStepLabel
        data-quid={`Component-helper-text-${id}`}
        className={classes.helpText}
      >
        {helpText}
      </MUIStepLabel>
    </MUIStep>
  );
};

NumericalStepper.defaultProps = {
  classes: {},
  disabled: false,
  helpText: '',
  mask: [],
  error: false,
  value: 1,
};

export default withStyles(styleClasses, { index: 0, withTheme: true })(
  NumericalStepper
);
