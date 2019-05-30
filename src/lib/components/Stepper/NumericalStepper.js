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

const styleClasses = theme => ({
  stepperIcon: {
    color: theme.palette.primary.main,
    width: '24px',
    height: '24px',
    '&:active,&:hover': {
      color: theme.palette.colorVariables.WHITE
    }
  },
  stepperInput: {
    height: '48px',
    margin: '8px 8px',
    border: `solid 1px ${theme.palette.colorVariables.GRAY}`,
    'border-radius': '4px',
    'text-align': 'center',
    '&:active,&:hover': {
      background: theme.palette.primary.main,
      opacity: '10%',
      border: `solid 1px ${theme.palette.colorVariables.DARKER_BLUE}`
    },
    '&:focus': {
      border: `solid 2px ${theme.palette.colorVariables.DARKER_BLUE}`
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
  error: {
    color: theme.palette.error.main,
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
  },
  disabled: {
    background: 'transparent',
    borderColor: theme.palette.disabled.main
  }
});

class NumericalStepper extends Component {
  render() {
    const {
      classes,
      error,
      labelText,
      helpText,
      inputText,
      onIncrease,
      onDecrease,
      disabled
    } = this.props;

    return (
      <MUIStep disabled={disabled}>
        <MUIStepLabel classes={{ label: classes.stepperLabel }}>
          {labelText}
        </MUIStepLabel>
        <StepperButton disabled={disabled} onClick={onDecrease}>
          <RemoveIcon disabled={disabled} className={classes.stepperIcon} />
        </StepperButton>
        <input className={classes.stepperInput} type="text" value={inputText} />
        <StepperButton disabled={disabled} onClick={onIncrease}>
          <AddIcon className={classes.stepperIcon} />
        </StepperButton>
        <MUIStepLabel
          classes={{ label: classes.helpText, error: classes.error }}
          className={classes.helpText}
          error={!disabled ? error : false}
        >
          {helpText}
          {error && !disabled && <ReportProblem />}
        </MUIStepLabel>
      </MUIStep>
    );
  }
}

NumericalStepper.propTypes = {
  // MUI Decorator
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
