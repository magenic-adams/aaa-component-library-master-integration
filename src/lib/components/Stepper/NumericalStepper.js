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

type propTypes = {
  // MUI Decorator
  classes: PropTypes.object,
  // Passed Props
  className: PropTypes.string,
  disabled: PropTypes.bool,
  labelText: PropTypes.string,
  errorText: PropTypes.string,
  onIncrease: () => {},
  onDecrease: () => {}
};

const styleClasses = theme => ({
  stepperIcon: {
    color: '#4470BF',
    width: '24px',
    height: '24px',
    '&:active,&:hover': {
      color: '#FFFFFF'
    }
  },
  stepperInput: {
    height: '48px',
    margin: '8px 8px',
    border: 'solid 1px #717174',
    'border-radius': '4px',
    'text-align': 'center',
    '&:active,&:hover': {
      background: '#4470BF',
      opacity: '10%',
      border: 'solid 1px #09216A'
    },
    '&:focus': {
      border: 'solid 2px #09216A'
    }
  },
  stepperLabel: {
    color: '#2A282C',
    fontSize: '16px',
    [theme.breakpoints.up('md')]: {
      fontSize: '18px'
    }
  },
  helpText: {
    color: '#717174',
    fontSize: '14px',
    [theme.breakpoints.up('md')]: {
      fontSize: '16px'
    }
  },
  error: {
    color: '#DA291C !important',
    fontSize: '14px',
    [theme.breakpoints.up('md')]: {
      fontSize: '16px'
    },
    '& svg': {
      display: 'inline',
      float: 'right',
      fontSize: '20px',
      marginRight: '8px'
    }
  }
});

class NumericalStepper extends Component<propTypes> {
  render() {
    const {
      classes,
      error,
      labelText,
      helpText,
      onIncrease,
      onDecrease,
      disabled
    } = this.props;

    return (
      <MUIStep disabled={disabled}>
        <MUIStepLabel classes={{ label: classes.stepperLabel }}>
          {labelText}
        </MUIStepLabel>
        <StepperButton onClick={onDecrease}>
          <RemoveIcon className={classes.stepperIcon} />
        </StepperButton>
        <input className={classes.stepperInput} type="text" />
        <StepperButton onClick={onIncrease}>
          <AddIcon className={classes.stepperIcon} />
        </StepperButton>
        <MUIStepLabel
          classes={{ label: classes.helpText, error: classes.error }}
          className={classes.helpText}
          error={error}
        >
          {helpText}
          {error && <ReportProblem />}
        </MUIStepLabel>
      </MUIStep>
    );
  }
}

export default withStyles(styleClasses, { withTheme: true })(NumericalStepper);
