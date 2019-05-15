import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, withTheme } from '@material-ui/styles';
import cx from 'clsx';

type propTypes = {
  // Decorator Props
  classes: PropTypes.object,
  // Passed Props
  children: PropTypes.node,
  className?: PropTypes.string
};

const styleClasses = {
  root: {
    '& .Button': {
      marginTop: '8px',
      marginBottom: '8px'
    }
  }
}


function ButtonGroup({children, classes = {}, className = '', theme}:propTypes){
  console.log('TODO:NEXT analyze usage of theme for breakpoints')
  return (
    <div className={cx('ButtonGroup', classes.root, className)}>
      {children}
    </div>
  );
}

export default withStyles(styleClasses)(withTheme(ButtonGroup));
