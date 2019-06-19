import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MUIInputLabel from '@material-ui/core/InputLabel';
import cx from 'clsx';

// Types
import { Theme } from '@material-ui/core/styles/createMuiTheme';

interface RequiredProps {
  classes: any, // MUI Decorator
  children: string | React.ReactElement | React.ReactHTMLElement<any>,
  id: string,
};

interface OptionalProps {
  className?: string,
  disabled?: boolean,
  error?: string,
  focused?: boolean,
}

const defaultProps:OptionalProps = {
  className: '',
  disabled: false,
  error: '',
  focused: false,
};

const styleClasses = (theme:Theme): {
  root: any,
  formControl: any
} => ({
  root: {
    color: theme.secondaryPalette.colorVariables.BLACK,
    display: 'block',
    marginBottom: -8,
    fontFamily: theme.typographyValues.fontFamily,
    fontWeight: theme.typographyValues.fontWeight,
    ...theme.typography.body1,
  },
  formControl: {
    position: 'relative',
    transform: 'unset',
  },
});

const Label:React.FunctionComponent<RequiredProps & OptionalProps> = ({
    children,
    classes,
    className,
    disabled,
    error,
    focused,
    id,
  }) => {
  return (
    <MUIInputLabel
      className={cx('InputLabel', className)}
      classes={classes}
      disabled={disabled}
      disableAnimation
      error={!!error}
      focused={focused}
      htmlFor={id}
      data-quid={`Label-${id}`}
      shrink={false}
    >
      {children}
    </MUIInputLabel>
  );
};

Label.defaultProps = defaultProps;

export default withStyles(styleClasses, { index: 0, withTheme: true })(Label);
