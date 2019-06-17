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

const defaultProps:OptionalProps = {
  className: '',
};

// Component styles manipulated entirely by theme
const styleClasses = (theme:any) => {
  return {
    root: {
      color: theme.typography.color,
      fontFamily: theme.typography.fontFamily,
      fontWeight: theme.typography.fontWeight,
      ...theme.typography.h1,
    },
  };
};

const Headline:React.FunctionComponent<RequiredProps & OptionalProps> = ({
  children,
  className,
  classes,
  id,
}) => {
  return (
    <h1
      className={cx('Headline', classes.root, className)}
      data-quid={`Headline-${id}`}
    >
      {children}
    </h1>
  );
}

Headline.defaultProps = defaultProps;

export default withStyles(styleClasses, { index: 0, withTheme: true })(Headline);
