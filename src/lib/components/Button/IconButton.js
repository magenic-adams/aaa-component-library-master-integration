/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import AAAButton from './Button';
import {
  AAA_CSS_IMPORTANT,
  AAA_CSS_SOLID,
  AAA_CSS_BOTTOM
} from '../../constants/cssConstants';

const styleClasses = theme => ({
  iconButton: {
    'vertical-align': `${AAA_CSS_BOTTOM}`,
    width: `48px ${AAA_CSS_IMPORTANT}`,
    height: `48px ${AAA_CSS_IMPORTANT}`,
    'margin-left': '8px',
    'margin-right': '8px',
    border: `${AAA_CSS_SOLID} 1px ${
      theme.palette.colorVariables.GRAY
    } ${AAA_CSS_IMPORTANT}`,
    'border-radius': '4px',
    'background-color': `${
      theme.palette.colorVariables.WHITE
    } ${AAA_CSS_IMPORTANT}`,
    '&:active,&:hover': {
      'background-color': `${
        theme.palette.colorVariables.SECONDARY_HOVER
      } ${AAA_CSS_IMPORTANT}`,
      'border-color': `${
        theme.palette.colorVariables.DARKER_BLUE
      } 1px ${AAA_CSS_IMPORTANT}`,
      '& svg': {
        color: `${theme.palette.primary.main} ${AAA_CSS_IMPORTANT}`
      }
    },
    '&:disabled': {
      background: `${theme.palette.disabled.main} ${AAA_CSS_IMPORTANT}`,
      border: `none ${AAA_CSS_IMPORTANT}`,
      '&:hover': {
        backgroundColor: `${theme.palette.disabled.main} ${AAA_CSS_IMPORTANT}`
      },
      '& svg': {
        color: `${theme.palette.colorVariables.GRAY} ${AAA_CSS_IMPORTANT}`
      }
    }
  }
});
class IconButton extends Component {
  render() {
    const { classes, children, disabled, onClick, id } = this.props;
    return (
      <AAAButton
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
