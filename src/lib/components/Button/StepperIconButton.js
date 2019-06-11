/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { withStyles } from '@material-ui/styles';
import AAAButton from './Button';

const IconButton = props => {
  const { classes, children, disabled, onClick, id } = props;
  return (
    <AAAButton
      onClick={onClick}
      disabled={disabled}
      className={classes.iconButton}
      id={id}
      isButtonIcon
    >
      {children}
    </AAAButton>
  );
};

export default withStyles({ withTheme: true })(IconButton);
