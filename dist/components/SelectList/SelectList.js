import _defineProperty from '@babel/runtime/helpers/esm/defineProperty';
import React, { Fragment } from 'react';
import invariant from 'tiny-invariant';
import { withStyles } from '@material-ui/styles';
import cx from 'clsx';
import List from '@material-ui/core/List'; // Components

import SelectListItemText from '../SelectListItemText/SelectListItemText';

const styleClasses = function styleClasses(theme) {
  return {
    root: _defineProperty(
      {
        width: 341,
        background: theme.secondaryPalette.colorVariables.WHITE,
        border: '2px solid '.concat(theme.palette.primary.main),
        borderRadius: 4,
        padding: '0px',
        boxShadow: '0 2px 8px 0 '.concat(
          theme.secondaryPalette.colorVariables.GRAY
        ),
        '& span': {
          fontFamily: theme.typographyValues.fontFamily,
        },
      },
      theme.breakpoints.down(321),
      {
        width: '100%',
        border: '1px solid '.concat(theme.palette.primary.main),
        boxShadow: 'none',
        borderRadius: 0,
        '& span': {
          fontSize: 16,
        },
      }
    ),
    fullOverlay: _defineProperty({}, theme.breakpoints.down(415), {
      width: '100%',
      border: '1px solid '.concat(theme.palette.primary.main),
      boxShadow: 'none',
      borderRadius: 0,
      '& span': {
        fontSize: 16,
      },
    }),
  };
};

function areItemKeysPresent(items) {
  return items.every(function(item) {
    return item.id && item.value && item.display;
  });
}

function areItemsValid(items) {
  if (!Array.isArray(items) || items.length === 0) {
    invariant(false, 'items array is empty');
  }

  if (!areItemKeysPresent(items)) {
    invariant(
      false,
      'Invalid object keys are present. Keys should contain id, value and display'
    );
  }

  return true;
}

const SelectList = function SelectList(_ref) {
  const { classes } = _ref;
  const { items } = _ref;
  const { type } = _ref;
  const _onSelect = _ref.onSelect;
  return React.createElement(
    Fragment,
    null,
    areItemsValid(items)
      ? (function() {
          switch (type) {
            case 'primary':
              return React.createElement(
                List,
                {
                  dense: true,
                  className: cx(
                    'List',
                    classes.root,
                    _defineProperty({}, classes.fullOverlay, items.length > 6)
                  ),
                },
                items.map(function(item) {
                  return React.createElement(SelectListItemText, {
                    key: item.id,
                    item,
                    onSelect: function onSelect() {
                      return _onSelect(item);
                    },
                  });
                })
              );

            case 'single-select-radio':
            case 'multi-select-radio':
              return React.createElement(
                'div',
                {
                  className: cx(classes.radioGroup),
                },
                items.map(function(item) {
                  return item.display;
                })
              );

            default:
              return null;
          }
        })()
      : null
  );
};

export default withStyles(styleClasses, {
  withTheme: true,
})(SelectList);
