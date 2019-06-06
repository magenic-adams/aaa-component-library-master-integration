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

const styleClasses = () => ({
  root: {
    width: '100%',
    marginTop: 24,
    marginBottom: 24,
    '& .Button:nth-child(n+1)': {
      marginTop: 8,
    },
    // [theme.breakpoints.up('md')]: {
    //   width: 'inherit',
    //   '& .Button:nth-child(n+1)': {
    //     marginTop: 0,
    //   },
    // },
  }
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
  className: ''
};

export default withStyles(styleClasses, {withTheme: true})(ButtonGroup);
