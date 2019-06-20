import _objectSpread from '@babel/runtime/helpers/esm/objectSpread';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MUIInputLabel from '@material-ui/core/InputLabel';
import cx from 'clsx';

;
const defaultProps = {
  className: '',
  disabled: false,
  error: '',
  focused: false,
};

const styleClasses = function styleClasses(theme) {
  return {
    root: _objectSpread({
      color: theme.secondaryPalette.colorVariables.BLACK,
      display: 'block',
      marginBottom: -8,
      fontFamily: theme.typographyValues.fontFamily,
      fontWeight: theme.typographyValues.fontWeight,
    }, theme.typography.body1),
    formControl: {
      position: 'relative',
      transform: 'unset',
    },
  };
};

const Label = function Label(_ref) {
  const { children } = _ref;
      const { classes } = _ref;
      const { className } = _ref;
      const { disabled } = _ref;
      const { error } = _ref;
      const { focused } = _ref;
      const { id } = _ref;
  return React.createElement(MUIInputLabel, {
    className: cx('InputLabel', className),
    classes,
    disabled,
    disableAnimation: true,
    error: !!error,
    focused,
    htmlFor: id,
    'data-quid': 'Label-'.concat(id),
    shrink: false,
  }, children);
};

Label.defaultProps = defaultProps;
export default withStyles(styleClasses, {
  index: 0,
  withTheme: true,
})(Label);
