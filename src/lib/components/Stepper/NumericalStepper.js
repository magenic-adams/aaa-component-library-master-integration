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
import StepperButton from '../Button/IconButton';
import NumericInput from '../NumericInput/NumericInput';
// import TextInput from '../TextInput/TextInput';
import {
  AAA_CSS_IMPORTANT,
  AAA_CSS_SOLID,
  AAA_CSS_CENTER,
  AAA_CSS_INLINE,
  AAA_CSS_RIGHT
} from '../../constants/cssConstants';

const styleClasses = theme => ({
  stepperIcon: {
    color: theme.palette.colorVariables.DARKER_BLUE,
    width: '24px',
    height: '24px',
    '&:active,&:hover': {
      color: `${theme.palette.primary.main} ${AAA_CSS_IMPORTANT}`
    }
  },
  stepperInput: {
    height: '48px',
    'vertical-align': 'baseline !important',
    border: `solid 1px ${theme.palette.colorVariables.GRAY}`,
    'border-radius': '4px',
    'text-align': `${AAA_CSS_CENTER}`,
    '&:active,&:hover': {
      background: theme.palette.colorVariables.SECONDARY_HOVER,
      opacity: '10%',
      border: `${AAA_CSS_SOLID} 1px ${theme.palette.colorVariables.DARKER_BLUE}`
    },
    '&:focus': {
      border: `${AAA_CSS_SOLID} 2px ${theme.palette.colorVariables.DARKER_BLUE}`
    }
  },
  stepperLabel: {
    color: theme.palette.colorVariables.BLACK,
    fontSize: '16px',
    [theme.breakpoints.up('md')]: {
      fontSize: '18px'
    }
  },
  helpText: {
    color: theme.palette.colorVariables.GRAY,
    fontSize: '14px',
    [theme.breakpoints.up('md')]: {
      fontSize: '16px'
    }
  },
  formControl: {
    width: '100px',
    'margin-top': '0'
  },
  error: {
    color: theme.palette.error.main,
    fontSize: '14px',
    [theme.breakpoints.up('md')]: {
      fontSize: '16px'
    },
    '& svg': {
      display: `${AAA_CSS_INLINE}`,
      float: `${AAA_CSS_RIGHT}`,
      fontSize: '20px',
      marginRight: '8px'
    }
  },
  disabled: {
    background: theme.palette.colorVariables.TRANSPARENT,
    borderColor: `${theme.palette.disabled.main} ${AAA_CSS_IMPORTANT}`
  },
  root: {
    '& input': {
      'text-align': 'center !important'
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
      <MUIStep data-quid={id} disabled={disabled} classes={classes.root}>
        <MUIStepLabel
          data-quid="stepLabel"
          classes={{ label: classes.stepperLabel }}
        >
          {labelText}
        </MUIStepLabel>
        <StepperButton
          id="decreaseStepper"
          disabled={disabled}
          onClick={onDecrease}
        >
          <RemoveIcon
            data-quid="removeIcon"
            disabled={disabled}
            className={classes.stepperIcon}
          />
        </StepperButton>

        <NumericInput
          classes={{ root: classes.root }}
          className={classes.stepperInput}
          formControlClass={classes.formControl}
          type="text"
          value={inputText}
          error={error}
        />
        <StepperButton
          id="increaseStepper"
          disabled={disabled}
          onClick={onIncrease}
        >
          <AddIcon data-quid="addIcon" className={classes.stepperIcon} />
        </StepperButton>
        <MUIStepLabel
          data-quid="helpTextLabel"
          classes={{ label: classes.helpText, error: classes.error }}
          className={classes.helpText}
          error={!disabled ? error : false}
        >
          {errorText}
          {error && !disabled && <ReportProblem />}
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
