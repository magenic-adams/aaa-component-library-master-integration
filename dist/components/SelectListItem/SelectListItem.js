import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import React from 'react';
import { withStyles } from '@material-ui/styles';
import invariant from 'tiny-invariant'; // Types

// Material Components
import ListItem from '@material-ui/core/ListItem'; // Types

var styleClasses = function styleClasses(theme) {
  var _root;

  return {
    root: (_root = {
      height: 48,
      background: theme.secondaryPalette.colorVariables.TRANSPARENT,
      fontSize: 18,
      letterSpacing: 'normal',
      fontStretch: 'normal',
      lineHeight: 1.5,
      fontFamily: theme.typography.fontFamily
    }, _defineProperty(_root, theme.breakpoints.between('xs', 'sm'), {
      fontSize: 16
    }), _defineProperty(_root, '&.Mui-selected, &.Mui-selected:hover', {
      backgroundColor: theme.secondaryPalette.colorVariables.SECONDARY_HOVER
    }), _defineProperty(_root, '&:hover', {
      backgroundColor: theme.secondaryPalette.colorVariables.SECONDARY_HOVER
    }), _root),
    gutters: {
      padding: '0 13px 0 13px'
    },
    divider: {
      borderBottom: "1px solid ".concat(theme.palette.primary.main),
      '&:last-child': {
        borderBottom: 'none'
      }
    }
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

var SelectListItem = function SelectListItem(_ref) {
  var classes = _ref.classes,
      item = _ref.item,
      onSelect = _ref.onSelect;
  checkValidity(item);
  var display = item.display,
      id = item.id,
      value = item.value;
  var divider = classes.divider,
      gutters = classes.gutters,
      root = classes.root;
  return React.createElement(ListItem, {
    "data-quid": "SelectListItem-".concat(id),
    value: value,
    classes: {
      root: root,
      divider: divider,
      gutters: gutters
    },
    divider: true,
    onClick: function onClick() {
      return onSelect(item);
    }
  }, display);
};

export default withStyles(styleClasses, {
  withTheme: true
})(SelectListItem);