import _defineProperty from '@babel/runtime/helpers/esm/defineProperty';
import React from 'react';
import invariant from 'tiny-invariant';
import { withStyles } from '@material-ui/styles';
import ListItem from '@material-ui/core/ListItem'; // Types

const styleClasses = function styleClasses(theme) {
  let _root;

  return {
    root:
      ((_root = {
        height: 48,
        background: theme.secondaryPalette.colorVariables.TRANSPARENT,
        fontSize: 18,
        letterSpacing: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.5,
        fontFamily: theme.typography.fontFamily,
      }),
      _defineProperty(_root, theme.breakpoints.between('xs', 'sm'), {
        fontSize: 16,
      }),
      _defineProperty(_root, '&.Mui-selected, &.Mui-selected:hover', {
        backgroundColor: theme.secondaryPalette.colorVariables.SECONDARY_HOVER,
      }),
      _defineProperty(_root, '&:hover', {
        backgroundColor: theme.secondaryPalette.colorVariables.SECONDARY_HOVER,
      }),
      _root),
    gutters: {
      padding: '0 13px 0 13px',
    },
    divider: {
      borderBottom: '1px solid '.concat(theme.palette.primary.main),
      '&:last-child': {
        borderBottom: 'none',
      },
    },
  };
};

function checkValidity(item) {
  if (!item) {
    invariant(false, 'You have not passed an item for rendering.');
  }

  if (!item.id && !item.display) {
    invariant(false, 'id and display should have value.');
  }
}

const SelectListItem = function SelectListItem(_ref) {
  const { classes } = _ref;
  const { item } = _ref;
  const { onSelect } = _ref;
  checkValidity(item);
  const { display } = item;
  const { id } = item;
  const { value } = item;
  const { divider } = classes;
  const { gutters } = classes;
  const { root } = classes;
  return React.createElement(
    ListItem,
    {
      'data-quid': 'SelectListItem-'.concat(id),
      value,
      classes: {
        root,
        divider,
        gutters,
      },
      divider: true,
      onClick: function onClick() {
        return onSelect(item);
      },
    },
    display
  );
};

export default withStyles(styleClasses, {
  index: 0,
  withTheme: true,
})(SelectListItem);
