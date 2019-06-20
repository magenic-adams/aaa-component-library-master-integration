import _objectSpread from '@babel/runtime/helpers/esm/objectSpread';
import React from 'react';
import { withStyles } from '@material-ui/styles';
import cx from 'clsx';

;

// Component styles manipulated entirely by theme
const styleClasses = function styleClasses(theme) {
  return {
    root: _objectSpread({
      color: theme.typographyValues.color,
      fontFamily: theme.typographyValues.fontFamily,
      fontWeight: theme.typographyValues.fontWeight,
    }, theme.typography.h2),
  };
};

const Subheadline = function Subheadline(_ref) {
  const { children } = _ref;
      const { className } = _ref;
      const { classes } = _ref;
      const { id } = _ref;
  return React.createElement('h2', {
    className: cx('Subheadline', classes.root, className),
    'data-quid': 'Subheadline-'.concat(id),
  }, children);
};

Subheadline.defaultProps = {
  className: '',
};
export default withStyles(styleClasses, {
  index: 0,
  withTheme: true,
})(Subheadline);
