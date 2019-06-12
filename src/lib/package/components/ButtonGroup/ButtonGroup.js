/* eslint-disable react/require-default-props */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import cx from 'clsx';

type propTypes = {
  // Decorator Props
  classes: PropTypes.object,
  // Passed Props
  children: PropTypes.node,
  className?: PropTypes.string
};

const styleClasses = theme => ({
  root: {
    width: '100%',
    marginTop: 24,
    marginBottom: 24,
    '& .Button:nth-child(n+1)': {
      marginTop: 8,
    },
    [theme.breakpoints.up('md')]: {
      width: 'inherit',
    },
  },
});


function ButtonGroup({
  children,
  classes,
  className,
}:propTypes){
  return (
    <div className={cx('ButtonGroup', classes.root, className)}>
      {children}
    </div>
  );
}

ButtonGroup.defaultProps = {
  className: '',
};

export default withStyles(styleClasses, { index: 0, withTheme: true })(ButtonGroup);
