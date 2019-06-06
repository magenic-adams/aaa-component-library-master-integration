/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import AAAButton from './Button';

const styleClasses = theme => ({
  iconButton: {
    width: '48px !important',
    height: '48px !important',
    'margin-left': '8px',
    'margin-right': '8px',
    border: 'solid 1px #717174 !important',
    'border-radius': '4px',
    'background-color': '#FFFFFF !important',
    '&:active,&:hover': {
      'background-color': `${
        theme.palette.colorVariables.SECONDARY_HOVER
      } !important`,
      '& svg': {
        color: `${theme.palette.primary.main} !important`
      }
    }
  },
  root: {
    'vertical-align': 'bottom'
  }
});
class IconButton extends Component {
  render() {
    const { classes, children, disabled, onClick, id } = this.props;
    return (
      <AAAButton
        classes={{ root: classes.root }}
        onClick={onClick}
        disabled={disabled}
        className={classes.iconButton}
        id={id}
      >
        {children}
      </AAAButton>
    );
  }
}

export default withStyles(styleClasses, { withTheme: true })(IconButton);
