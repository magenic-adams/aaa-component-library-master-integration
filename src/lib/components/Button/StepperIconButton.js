/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { withStyles } from '@material-ui/styles';
import AAAButton from './Button';
import {
  AAA_CSS_IMPORTANT,
  AAA_CSS_SOLID,
  AAA_CSS_BOTTOM,
} from '../../constants/cssConstants';

const styleClasses = theme => ({
  iconButton: {
    verticalAlign: `${AAA_CSS_BOTTOM}`,
    width: `48px ${AAA_CSS_IMPORTANT}`,
    height: `48px ${AAA_CSS_IMPORTANT}`,
    marginLeft: '8px',
    marginRight: '8px',
    border: `${AAA_CSS_SOLID} 1px ${
      theme.palette.colorVariables.GRAY
    } ${AAA_CSS_IMPORTANT}`,
    borderRadius: '4px',
    backgroundColor: `${
      theme.palette.colorVariables.WHITE
    } ${AAA_CSS_IMPORTANT}`,
    '&:active,&:hover': {
      backgroundColor: `${
        theme.palette.colorVariables.SECONDARY_HOVER
      } ${AAA_CSS_IMPORTANT}`,
      borderColor: `${
        theme.palette.colorVariables.DARKER_BLUE
      } 1px ${AAA_CSS_IMPORTANT}`,
      '& svg': {
        color: `${theme.palette.primary.main} ${AAA_CSS_IMPORTANT}`,
      },
    },
    '&:disabled': {
      background: `${theme.palette.disabled.main} ${AAA_CSS_IMPORTANT}`,
      border: `none ${AAA_CSS_IMPORTANT}`,
      '&:hover': {
        backgroundColor: `${theme.palette.disabled.main} ${AAA_CSS_IMPORTANT}`,
      },
      '& svg': {
        color: `${theme.palette.colorVariables.GRAY} ${AAA_CSS_IMPORTANT}`,
      },
    },
  },
});
const IconButton = props => {
  const { classes, children, disabled, onClick, id } = props;
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
};

export default withStyles(styleClasses, { withTheme: true })(IconButton);
