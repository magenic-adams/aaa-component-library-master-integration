import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import MUIStep from '@material-ui/core/Step';

import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import MUIStepLabel from '@material-ui/core/StepLabel';
import StepperButton from '../Button/IconButton';

type propTypes = {
  // MUI Decorator
  classes: PropTypes.object,
  // Passed Props
  className: PropTypes.string,
  children?: PropTypes.string | PropTypes.node,
  color?: 'primary' | 'secondary',
  disabled: PropTypes.bool,
  labelText: PropTypes.string,
  errorText: PropTypes.string,
  onClick: () => {}
};

const styleClasses = theme => ({
  stepperIcon: {
    color: '#4470BF',
    width: '24px',
    height: '24px'
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
    }
  }
});

class NumericalStepper extends Component<propTypes> {
  render() {
    const { classes, error } = this.props;
    return (
      <MUIStep>
        <MUIStepLabel classes={{ label: classes.stepperLabel }}>
          {this.props.labelText}
        </MUIStepLabel>
        <StepperButton>
          <RemoveIcon className={classes.stepperIcon} />
        </StepperButton>
        <input className={classes.stepperInput} type='text' />
        <StepperButton>
          <AddIcon className={classes.stepperIcon} />
        </StepperButton>
        <MUIStepLabel
          classes={{ label: classes.helpText, error: classes.error }}
          className={classes.helpText}
          error={error}
        >
          {this.props.errorText}
        </MUIStepLabel>
      </MUIStep>
    );
  }
}

export default withStyles(styleClasses, { withTheme: true })(NumericalStepper);
