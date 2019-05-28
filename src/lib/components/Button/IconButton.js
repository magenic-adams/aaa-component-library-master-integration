import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import AAAButton from '../Button/Button';

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
  }
});
class IconButton extends Component {
  render() {
    const { classes, children } = this.props;
    return <AAAButton className={classes.stepperButton}>{children}</AAAButton>;
  }
}

export default withStyles(styleClasses, { withTheme: true })(IconButton);
