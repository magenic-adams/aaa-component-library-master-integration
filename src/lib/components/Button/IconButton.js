/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import AAAButton from './Button';

const styleClasses = theme => ({
  iconButton: {
    width: '48px',
    height: '48px',
    margin: '8px 8px',
    border: 'solid 1px #717174',
    'border-radius': '4px',
    'background-color': '#FFFFFF',
    '&:active,&:hover': {
      '& svg': {
        color: '#FFFFFF'
      }
    }
  }
});
class IconButton extends Component {
  render() {
    const { classes, children } = this.props;
    return <AAAButton className={classes.iconButton}>{children}</AAAButton>;
  }
}

export default withStyles(styleClasses, { withTheme: true })(IconButton);
