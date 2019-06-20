import _defineProperty from '@babel/runtime/helpers/esm/defineProperty';
import React from 'react';
import { withStyles } from '@material-ui/styles';
import cx from 'clsx';

const defaultProps = {
  className: '',
  secondary: false, // Component styles manipulated entirely by theme

};

const styleClasses = function styleClasses(theme) {
  return {
    root: {
      color: theme.typographyValues.color,
      fontFamily: theme.typographyValues.fontFamily,
      fontWeight: theme.typographyValues.fontWeight,
    },
    primary: theme.typography.body1,
    secondary: theme.typography.body2,
  };
};

const Body = function Body(_ref) {
  let _cx;

  const { children } = _ref;
      const { className } = _ref;
      const { classes } = _ref;
      const { id } = _ref;
      const { secondary } = _ref;
  return React.createElement('p', {
    className: cx('Body', classes.root, (_cx = {}, _defineProperty(_cx, classes.primary, !secondary), _defineProperty(_cx, classes.secondary, secondary), _cx), className),
    'data-quid': 'Body-'.concat(id),
  }, children);
};

Body.defaultProps = {
  className: '',
  secondary: false,
};
export default withStyles(styleClasses, {
  index: 0,
  withTheme: true,
})(Body);
