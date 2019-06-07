import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import invariant from 'tiny-invariant';
import { withStyles } from '@material-ui/styles';
import cx from 'clsx';
import List from '@material-ui/core/List';
import SelectListItemText from '../SelectListItemText/SelectListItemText';

var styleClasses = function styleClasses(theme) {
  return {
    root: _defineProperty({
      width: '341px',
      background: theme.palette.common.white,
      border: "2px solid ".concat(theme.palette.primary.main),
      borderRadius: '4px',
      padding: '0px',
      boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.35)',
      '& span': {
        fontFamily: theme.typography.fontFamily
      }
    }, theme.breakpoints.down(321), {
      width: '100%',
      border: "1px solid ".concat(theme.palette.primary.main),
      boxShadow: 'none',
      borderRadius: '0px',
      '& span': {
        fontSize: '16px'
      }
    }),
    fullOverlay: _defineProperty({}, theme.breakpoints.down(415), {
      width: '100%',
      border: "1px solid ".concat(theme.palette.primary.main),
      boxShadow: 'none',
      borderRadius: '0px',
      '& span': {
        fontSize: '16px'
      }
    })
  };
};

function areItemKeysPresent(items) {
  return items.every(function (item) {
    return item.id && item.value && item.display;
  });
}

function areItemsValid(items) {
  if (!Array.isArray(items) || items.length === 0) {
    invariant(false, 'items array is empty');
  }

  if (!areItemKeysPresent(items)) {
    invariant(false, 'Invalid object keys are present. Keys should contain id, value and display');
  }

  return true;
}

function SelectList(_ref) {
  var classes = _ref.classes,
      items = _ref.items,
      type = _ref.type,
      _onSelect = _ref.onSelect;
  return React.createElement(Fragment, null, areItemsValid(items) ? function () {
    switch (type) {
      case 'primary':
        return React.createElement(List, {
          dense: true,
          className: cx('List', classes.root, _defineProperty({}, classes.fullOverlay, items.length > 6))
        }, items.map(function (item) {
          return React.createElement(SelectListItemText, {
            key: item.id,
            item: item,
            selected: true,
            onSelect: function onSelect() {
              return _onSelect(item);
            }
          });
        }));

      case 'radioGroup':
        // TODO: ACL-19 Radio Group
        return null;

      default:
        return null;
    }
  }() : null);
}

export default withStyles(styleClasses, {
  withTheme: true
})(SelectList);