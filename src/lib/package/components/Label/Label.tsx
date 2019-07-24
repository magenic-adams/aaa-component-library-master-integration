import React from 'react';
import { makeStyles } from '@material-ui/core';
import { withTheme } from '@material-ui/core/styles';
import MUIInputLabel from '@material-ui/core/InputLabel';
import cx from 'clsx';
import { get } from 'lodash';

// Types
import { Theme } from '@material-ui/core/styles/createMuiTheme';

// If overrides need to be passed down to child components
// extract it into a method so makeStyles dynamic class naming
// will not be used.
export interface LabelStylesOverride {
  labelColor?: string | undefined;
  marginTop?: string | undefined;
}

interface RequiredProps {
  id: string;
}

interface OptionalProps {
  children?: string | React.ReactElement | React.ReactHTMLElement<any>;
  className?: string;
  disabled?: boolean;
  error?: string;
  focused?: boolean;
  overrides?: LabelStylesOverride;
}

const labelOverridesDefault: LabelStylesOverride = {};

const defaultProps: OptionalProps = {
  className: '',
  disabled: false,
  error: '',
  focused: false,
};

const styleClasses = makeStyles<Theme, LabelStylesOverride>(theme => {
  return {
    root: (props: LabelStylesOverride) => ({
      ...theme.typography.body1,
      color: get(
        props,
        'labelColor',
        theme.secondaryPalette.colorVariables.BLACK
      ),
      marginTop: get(props, 'marginTop', 8),
      display: 'block',
      marginBottom: -8,
      fontFamily: theme.typographyValues.fontFamily,
      fontWeight: theme.typographyValues.fontWeight,
      fontSize: 16,
      [theme.breakpoints.up('md')]: {
        fontSize: 18,
      },
    }),
    formControl: {
      position: 'relative',
      transform: 'unset',
    },
  };
});

const Label: React.FunctionComponent<RequiredProps & OptionalProps> = props => {
  const {
    children,
    className,
    disabled,
    error,
    focused,
    id,
    overrides = labelOverridesDefault,
  } = props;

  const classes = styleClasses(overrides);

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

export default withTheme(Label);
