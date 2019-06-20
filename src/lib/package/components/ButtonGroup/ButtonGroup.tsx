import React from 'react';
import { withStyles } from '@material-ui/styles';
import cx from 'clsx';

// Types
import { Theme } from '@material-ui/core/styles/createMuiTheme';

interface RequiredProps {
  children: any,
};

interface OptionalProps {
  classes?: any,
  className?: string
};

const defaultProps:OptionalProps = {
  className: '',
};

const styleClasses = (theme:Theme): {
  // CSS Classes
  root: any
} => ({
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


const ButtonGroup:React.FunctionComponent<RequiredProps & OptionalProps> = ({
  children,
  classes,
  className,
}) => {
  return (
    <div className={cx('ButtonGroup', classes.root, className)}>
      {children}
    </div>
  );
};

ButtonGroup.defaultProps = defaultProps;

export default withStyles(styleClasses, { index: 0, withTheme: true })(ButtonGroup);
