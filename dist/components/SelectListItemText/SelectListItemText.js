import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import React from 'react';
import { withStyles } from '@material-ui/styles';
import invariant from 'tiny-invariant'; // Types

// Material Components
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

var styleClasses = function styleClasses(theme) {
  return {
    root: {
      height: 48,
      background: theme.secondaryPalette.colorVariables.TRANSPARENT,
      '&.Mui-selected, &.Mui-selected:hover': {
        backgroundColor: theme.secondaryPalette.colorVariables.SECONDARY_HOVER
      },
      '&:hover': {
        backgroundColor: theme.secondaryPalette.colorVariables.SECONDARY_HOVER
      }
    },
    gutters: {
      padding: '0 13px 0 13px'
    },
    divider: {
      borderBottom: "1px solid ".concat(theme.palette.primary.main),
      '&:last-child': {
        borderBottom: 'none'
      }
    },
    primary: _defineProperty({
      fontSize: 18,
      letterSpacing: 'normal',
      fontStretch: 'normal',
      lineHeight: 1.5
    }, theme.breakpoints.between('xs', 'sm'), {
      fontSize: 16
    })
  };
};

function checkValidity(item) {
  if (!item) {
    invariant(false, 'You have not passed an item for rendering.');
  } else {
    if (!item.id && !item.display) {
      invariant(false, 'id and display should have value.');
    }

    if (!(typeof item.display === 'string' || typeof item.display === 'number')) {
      invariant(false, 'Invalid display type. It must be string or number');
    }
  }
}

var SelectListItemText = function SelectListItemText(_ref) {
  var classes = _ref.classes,
      item = _ref.item,
      onSelect = _ref.onSelect;
  checkValidity(item);
  var display = item.display,
      id = item.id;
  var divider = classes.divider,
      gutters = classes.gutters,
      primary = classes.primary,
      root = classes.root;
  return React.createElement(ListItem, {
    "data-quid": "SelectListItem-".concat(id),
    classes: {
      root: root,
      divider: divider,
      gutters: gutters
    },
    divider: true,
    selected: item.selected,
    onClick: function onClick() {
      return onSelect(item);
    }
  }, React.createElement(ListItemText, {
    classes: {
      primary: primary
    },
    primary: display
  }));
};

export default withStyles(styleClasses, {
  withTheme: true
})(SelectListItemText);