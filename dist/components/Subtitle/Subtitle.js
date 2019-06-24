import _objectSpread from '@babel/runtime/helpers/esm/objectSpread';
import React from 'react';
import { withStyles } from '@material-ui/styles';
import cx from 'clsx';

// Component styles manipulated entirely by theme
const styleClasses = function styleClasses(theme) {
  return {
    root: _objectSpread({
      color: theme.typographyValues.color,
      fontFamily: theme.typographyValues.fontFamily,
      fontWeight: theme.typographyValues.fontWeight,
    }, theme.typography.subtitle1),
  };
};

const Subtitle = function Subtitle(_ref) {
  const { children } = _ref;
      const { className } = _ref;
      const { classes } = _ref;
      const { id } = _ref;
  return React.createElement('div', {
    className: cx('Subtitle', classes.root, className),
    'data-quid': 'Subtitle-'.concat(id),
  }, children);
};

export default withStyles(styleClasses, {
  index: 0,
  withTheme: true,
})(Subtitle);
