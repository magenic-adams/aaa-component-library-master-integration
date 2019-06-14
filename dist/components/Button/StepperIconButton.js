import React from 'react';
import { withStyles } from '@material-ui/styles';
import Button from './Button';

const IconButton = props => {
  const { classes, children, disabled, onClick, id } = props;
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      className={classes.iconButton}
      id={id}
      isButtonIcon
    >
      {children}
    </Button>
  );
};

export default withStyles({ index: 0, withTheme: true })(IconButton);
