import React from 'react';
import { withStyles } from '@material-ui/styles';
import cx from 'clsx';

interface RequiredProps {
  id: string | number,
  children: any,
}

interface OptionalProps {
  classes?: any, // MUI Decorator
  className?: string,
}

// Component styles manipulated entirely by theme
const styleClasses = (theme:any) => {
  return {
    root: {
      color: theme.typography.color,
      fontFamily: theme.typography.fontFamily,
      fontWeight: theme.typography.fontWeight,
      ...theme.typography.subtitle1,
    },
  };
};

const Subtitle:React.FunctionComponent<RequiredProps & OptionalProps> = ({
  children,
  className,
  classes,
  id,
}) => {
  return (
    <div
      className={cx('Subtitle', classes.root, className)}
      data-quid={`Subtitle-${id}`}
    >
      {children}
    </div>
  );
};

export default withStyles(styleClasses, { index: 0, withTheme: true })(Subtitle);
