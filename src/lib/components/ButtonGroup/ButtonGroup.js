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
    '& .Button': {
      marginTop: '8px',
      marginBottom: '8px'
    },
    [theme.breakpoints.up('md')]: {
      width: 'inherit',
    },
  }
})


function ButtonGroup({children, classes = {}, className = '', theme}:propTypes){
  return (
    <div className={cx('ButtonGroup', classes.root, className)}>
      {children}
    </div>
  );
}

export default withStyles(styleClasses, {withTheme: true})(ButtonGroup);
