import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import invariant from 'tiny-invariant';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

var styleClasses = function styleClasses(theme) {
  return {
    root: {
      height: 48,
      background: theme.palette.colorVariables.TRANSPARENT,
      '&.Mui-selected, &.Mui-selected:hover': {
        backgroundColor: theme.palette.colorVariables.SECONDARY_HOVER
      },
      '&:hover': {
        backgroundColor: theme.palette.colorVariables.SECONDARY_HOVER
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

function isValid(id, display) {
  if (!id && !display) {
    invariant(false, 'id and display should have value.');
  }

  if (!(typeof display === 'string' || typeof display === 'number')) {
    invariant(false, 'Invalid display type. It must be string or number');
  }

  return true;
}

function SelectListItemText(_ref) {
  var classes = _ref.classes,
      item = _ref.item,
      onSelect = _ref.onSelect;

  var _ref2 = item || {},
      display = _ref2.display,
      id = _ref2.id;

  var divider = classes.divider,
      gutters = classes.gutters,
      primary = classes.primary,
      root = classes.root;
  return isValid(id, display) ? React.createElement(ListItem, {
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
  })) : null;
}

export default withStyles(styleClasses, {
  withTheme: true
})(SelectListItemText);