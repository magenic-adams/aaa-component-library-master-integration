import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import React, { Fragment } from 'react';
import cx from 'clsx';
import { withStyles } from '@material-ui/styles';
// Components
import Label from '../Label/Label';
import RadioItem from '../RadioItem/RadioItem';
import SelectList from '../SelectList/SelectList'; // Types

var defaultProps = {
  type: '',
  instructionLabel: '',
  selectedId: '',
  selectedIds: [],
  disableAll: false,
  disabledIds: []
};

var styleClasses = function styleClasses(theme) {
  var _ref;

  return _ref = {
    root: {
      border: 'none',
      boxShadow: 'none',
      marginTop: 16,
      '& li': _defineProperty({
        border: 'none',
        padding: 0,
        marginBottom: 4,
        '&:active,&:hover': {
          background: 'none'
        }
      }, theme.breakpoints.up('md'), {
        width: 534
      })
    }
  }, _defineProperty(_ref, theme.breakpoints.up('md'), {
    width: 534
  }), _defineProperty(_ref, theme.breakpoints.down('sm'), {
    width: '100%'
  }), _ref;
};

function isInArray(ids, id) {
  if (Array.isArray(ids)) {
    for (var i = 0; i < ids.length; i += 1) {
      if (ids[i] === id) return true;
    }
  }

  return false;
}

function isSelected(type, id, selectedId, selectedIds) {
  if (type === 'multi-select') {
    return isInArray(selectedIds, id);
  }

  return id === selectedId;
}

function constructDisplayItems(id, type, items, selectedId, selectedIds, disableAll, disabledIds, _onSelect) {
  return Array.isArray(items) && items.map(function (item) {
    var checked = isSelected(type, item.id, selectedId, selectedIds);
    var disabled = !!disableAll || isInArray(disabledIds, item.id);
    return _objectSpread({}, item, {
      key: "RadioItem-".concat(item.id),
      display: React.createElement(RadioItem, {
        name: id,
        item: item,
        checked: checked,
        disabled: disabled,
        onSelect: function onSelect() {
          return typeof _onSelect === 'function' ? _onSelect(item) : null;
        }
      })
    });
  });
}

var RadioGroup = function RadioGroup(_ref2) {
  var classes = _ref2.classes,
      disableAll = _ref2.disableAll,
      disabledIds = _ref2.disabledIds,
      id = _ref2.id,
      items = _ref2.items,
      instructionLabel = _ref2.instructionLabel,
      selectedId = _ref2.selectedId,
      selectedIds = _ref2.selectedIds,
      type = _ref2.type,
      _onSelect2 = _ref2.onSelect;
  var newItems = constructDisplayItems(id, type, items, selectedId, selectedIds, disableAll, disabledIds, _onSelect2);
  return React.createElement(Fragment, null, instructionLabel && React.createElement(Label, {
    disabled: false,
    id: id,
    focused: false
  }, instructionLabel), React.createElement(SelectList, {
    className: cx('RadioGroup', classes.root),
    items: newItems,
    onSelect: function onSelect() {
      return _onSelect2;
    }
  }));
};

RadioGroup.defaultProps = defaultProps;
export default withStyles(styleClasses, {
  index: 0,
  withTheme: true
})(RadioGroup);