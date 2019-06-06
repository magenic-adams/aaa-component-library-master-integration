/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import MUIStep from '@material-ui/core/Step';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import ReportProblem from '@material-ui/icons/ReportProblem';
import MUIStepLabel from '@material-ui/core/StepLabel';

import StepperButton from '../Button/StepperIconButton';
import NumericInput from '../Input/NumericInput/NumericInput';
import {
  AAA_CSS_IMPORTANT,
  AAA_CSS_CENTER,
  AAA_CSS_INLINE,
  AAA_CSS_MIDDLE,
  AAA_CSS_BASELINE
} from '../../constants/cssConstants';

const styleClasses = theme => ({
  stepperIcon: {
    color: theme.palette.primary.main,
    width: '24px',
    height: '24px'
  },
  stepperInput: {
    height: '48px',
    verticalAlign: `${AAA_CSS_BASELINE} ${AAA_CSS_IMPORTANT}`,
    borderRadius: '4px',
    textAlign: `${AAA_CSS_CENTER}`,
    '& input': {
      textAlign: `${AAA_CSS_CENTER} ${AAA_CSS_IMPORTANT}`
    }
  },
  stepperLabel: {
    color: theme.palette.colorVariables.BLACK,
    marginTop: '8px',
    fontSize: '16px',
    [theme.breakpoints.up('md')]: {
      fontSize: '18px'
    }
  },
  helpText: {
    color: theme.palette.colorVariables.GRAY,
    marginTop: '8px',
    '& span': {
      fontSize: '14px',
      [theme.breakpoints.up('md')]: {
        fontSize: `16px  ${AAA_CSS_IMPORTANT}`
      }
    }
  },
  formControl: {
    width: `25% ${AAA_CSS_IMPORTANT}`,
    marginTop: '0'
  },
  error: {
    color: theme.palette.error.main,
    fontSize: '14px',
    [theme.breakpoints.up('md')]: {
      fontSize: '16px'
    },
    '& svg': {
      display: `${AAA_CSS_INLINE}`,
      fontSize: '20px',
      marginLeft: '8px',
      marginRight: '8px',
      verticalAlign: `${AAA_CSS_MIDDLE}`
    }
  }
});

class NumericalStepper extends Component {
  render() {
    const {
      classes,
      error,
      labelText,
      helpText,
      errorText,
      inputText,
      onIncrease,
      onDecrease,
      disabled,
      id
    } = this.props;

    return (
      <MUIStep id={id} disabled={disabled} classes={classes.root}>
        <MUIStepLabel
          id={`${id}-stepLabel`}
          classes={{ label: classes.stepperLabel }}
        >
          {labelText}
        </MUIStepLabel>
        <StepperButton
          id={`${id}-decreaseStepper`}
          disabled={disabled}
          onClick={onDecrease}
        >
          <RemoveIcon
            id={`${id}-removeIcon`}
            disabled={disabled}
            className={classes.stepperIcon}
          />
        </StepperButton>

        <NumericInput
          id={`${id}-numericInput`}
          className={classes.stepperInput}
          formControlClass={classes.formControl}
          type="text"
          value={inputText}
          error={error}
          disabled={disabled}
        />
        <StepperButton
          id={`${id}-increaseStepper`}
          disabled={disabled}
          onClick={onIncrease}
        >
          <AddIcon id={`${id}-addIcon`} className={classes.stepperIcon} />
        </StepperButton>
        <MUIStepLabel
          id={`${id}-component-error-text`}
          classes={{ error: classes.error }}
          className={classes.helpText}
          error={error}
        >
          {error && <ReportProblem />}
          {errorText}
        </MUIStepLabel>
        <MUIStepLabel
          id={`${id}-component-helper-text`}
          className={classes.helpText}
        >
          {helpText}
        </MUIStepLabel>
      </MUIStep>
    );
  }
}

NumericalStepper.propTypes = {
  id: PropTypes.string.isRequired,
  classes: PropTypes.object,
  disabled: PropTypes.bool,
  labelText: PropTypes.string.isRequired,
  helpText: PropTypes.string,
  onIncrease: PropTypes.func.isRequired,
  onDecrease: PropTypes.func.isRequired
};

NumericalStepper.defaultProps = {
  classes: {},
  disabled: false,
  helpText: ''
};

export default withStyles(styleClasses, { withTheme: true })(NumericalStepper);
