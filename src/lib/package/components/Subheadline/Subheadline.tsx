import React from 'react';
import { withStyles } from '@material-ui/styles';
import cx from 'clsx';

// Types
import { Theme } from '@material-ui/core/styles/createMuiTheme';

interface RequiredProps {
  classes: any, // MUI Decorator
  id: string,
  children: any,
};

interface OptionalProps {
  classes?: any, // MUI Decorator
  className?: string,
}

// Component styles manipulated entirely by theme
const styleClasses = (theme:Theme) => {
  return {
    root: {
      color: theme.typographyValues.color,
      fontFamily: theme.typographyValues.fontFamily,
      fontWeight: theme.typographyValues.fontWeight,
      ...theme.typography.h2,
    },
  };
};

const Subheadline:React.FunctionComponent<RequiredProps & OptionalProps> = ({
  children,
  className,
  classes,
  id,
}) => {
  return (
    <h2
      className={cx('Subheadline', classes.root, className)}
      data-quid={`Subheadline-${id}`}
    >
      {children}
    </h2>
  );
};

Subheadline.defaultProps = {
  className: '',
};

export default withStyles(styleClasses, { index: 0, withTheme: true })(Subheadline);
