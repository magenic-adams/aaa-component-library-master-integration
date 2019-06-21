import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import React from 'react';
import invariant from 'tiny-invariant';
import { withStyles } from '@material-ui/styles';
import cx from 'clsx'; // Types

// Components
import SelectListItem from '../SelectListItem/SelectListItem';
var defaultProps = {
  className: ''
};

var styleClasses = function styleClasses(theme) {
  return {
    root: _defineProperty({
      width: 341,
      background: theme.secondaryPalette.colorVariables.WHITE,
      border: "2px solid ".concat(theme.palette.primary.main),
      borderRadius: 4,
      padding: '0px',
      boxShadow: "0 2px 8px 0 ".concat(theme.secondaryPalette.colorVariables.GRAY),
      '& span': {
        fontFamily: theme.typographyValues.fontFamily
      }
    }, theme.breakpoints.down('sm'), {
      width: '100%',
      border: "1px solid ".concat(theme.palette.primary.main),
      boxShadow: 'none',
      borderRadius: 0,
      '& span': {
        fontSize: 16
      }
    })
  };
};

function areItemKeysPresent(items) {
  return items.every(function (item) {
    return item.id && item.value && item.display;
  });
}

function checkValidity(items) {
  if (!Array.isArray(items) || items.length === 0) {
    invariant(false, 'items is empty');
  }

  if (!areItemKeysPresent(items)) {
    invariant(false, 'Invalid object keys are present. Keys should contain id, value and display');
  }
}

var SelectList = function SelectList(_ref) {
  var classes = _ref.classes,
      className = _ref.className,
      items = _ref.items,
      _onSelect = _ref.onSelect;
  checkValidity(items);
  return React.createElement("div", {
    className: cx(classes.root, className)
  }, items.map(function (item) {
    return item.display && React.createElement(SelectListItem, {
      key: item.id,
      item: item,
      onSelect: function onSelect() {
        return _onSelect(item);
      }
    });
  }));
};

SelectList.defaultProps = defaultProps;
export default withStyles(styleClasses, {
  withTheme: true
})(SelectList);