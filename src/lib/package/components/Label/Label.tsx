import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MUIInputLabel from '@material-ui/core/InputLabel';
import cx from 'clsx';
import { get } from 'lodash';

// Types
import { Theme } from '@material-ui/core/styles/createMuiTheme';

interface RequiredProps {
  classes: any, // MUI Decorator
  id: string,
};

interface OptionalProps {
  children?: string | React.ReactElement | React.ReactHTMLElement<any>,
  className?: string,
  disabled?: boolean,
  error?: string,
  focused?: boolean,
  overrides?: {
    label?: {
      color?: string,
    }
  }
}

const defaultProps:OptionalProps = {
  className: '',
  disabled: false,
  error: '',
  focused: false,
};

const styleClasses = (theme:Theme):{
  // CSS Classes
  root: any,
  formControl: any
} => {
  return {
    root: {
      color: (props:OptionalProps) =>
        get(
          props,
          'overrides.label.color',
          theme.secondaryPalette.colorVariables.BLACK
        ),
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
  };
};

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
