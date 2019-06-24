import _objectSpread from '@babel/runtime/helpers/esm/objectSpread';
import React from 'react';
import { withStyles } from '@material-ui/styles';
import cx from 'clsx';

const defaultProps = {
  className: '',
}; // Component styles manipulated entirely by theme

const styleClasses = function styleClasses(theme) {
  return {
    root: _objectSpread({
      color: theme.typographyValues.color,
      fontFamily: theme.typographyValues.fontFamily,
      fontWeight: theme.typographyValues.fontWeight,
    }, theme.typography.h1),
  };
};

const Headline = function Headline(_ref) {
  const { children } = _ref;
      const { className } = _ref;
      const { classes } = _ref;
      const { id } = _ref;
  return React.createElement('h1', {
    className: cx('Headline', classes.root, className),
    'data-quid': 'Headline-'.concat(id),
  }, children);
};

Headline.defaultProps = defaultProps;
export default withStyles(styleClasses, {
  index: 0,
  withTheme: true,
})(Headline);
