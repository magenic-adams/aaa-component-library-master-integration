import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import AAAButton from '../Button/Button';
//import {Add as AddIcon, Remove as RemoveIcon} from '@material-ui/icons';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
type propTypes = {
    // MUI Decorator
    classes: PropTypes.object,
    // Passed Props
    className: PropTypes.string,
    children?: PropTypes.string | PropTypes.node,
    color?: 'primary' | 'secondary',
    disabled: PropTypes.bool,
    href?: PropTypes.bool,
    onClick: () => {},
  };

const styleClasses = theme => ({
    stepperButton: {
        width: '48px',
        height: '48px',
        margin: '8px 8px',
        border: 'solid 1px #717174',
        'border-radius': '4px',
        'background-color': '#FFFFFF'
    },
    stepperIcon: {
        color: '#4470BF',
        width: '24px',
        height: '24px'
    },
    numericInput: {
        height: '48px',
        margin: '8px 8px',
        border: 'solid 1px #717174',
        'border-radius': '4px',
        'text-align': 'center'
    },
    label: {
        color: '#2A282C',
        fontSize: '16px',
        [theme.breakpoints.up('md')]: {
        fontSize: '18px'
        }
    },
    helpTextError: {
          color: '#717174',
          fontSize: '14px',
          [theme.breakpoints.up('md')]: {
              fontSize: '16px'
          }
      }
})

class NumericalStepper extends Component {
    render() {
    const {classes} = this.props;
        return (
            <div>
                <AAAButton className={classes.stepperButton}>
                    <RemoveIcon className={classes.stepperIcon}/>
                </AAAButton>
                <input className={classes.numericInput} type="text"></input>
                <AAAButton className={classes.stepperButton}>
                    <AddIcon className={classes.stepperIcon}/>
                </AAAButton>
            </div>
        )
    }
}

export default withStyles(styleClasses, {withTheme: true})(NumericalStepper);;