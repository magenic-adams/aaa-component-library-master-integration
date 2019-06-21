import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import React, { Fragment } from 'react';
import cx from 'clsx';
import { withStyles } from '@material-ui/styles'; // Types

// Components
import Label from '../../Label/Label';
import FormRadioItem from '../FormRadioItem/FormRadioItem';
import SelectList from '../../SelectList/SelectList'; // Types

var defaultProps = {
  type: '',
  instructionLabel: '',
  selectedId: '',
  selectedIds: [],
  disableAll: false,
  disabledIds: []
};

var styleClasses = function styleClasses(theme) {
  var _root;

  return {
    root: (_root = {
      width: 534,
      border: 'none',
      boxShadow: 'none',
      marginTop: 16,
      '& li': {
        border: 'none',
        padding: 0,
        marginBottom: 4,
        '&:active,&:hover': {
          background: 'none'
        }
      }
    }, _defineProperty(_root, theme.breakpoints.up('md'), {
      width: 534
    }), _defineProperty(_root, theme.breakpoints.up('sm'), {
      width: '100%'
    }), _root)
  };
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
      display: React.createElement(FormRadioItem, {
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

var FormRadioGroup = function FormRadioGroup(_ref) {
  var classes = _ref.classes,
      disableAll = _ref.disableAll,
      disabledIds = _ref.disabledIds,
      id = _ref.id,
      items = _ref.items,
      instructionLabel = _ref.instructionLabel,
      selectedId = _ref.selectedId,
      selectedIds = _ref.selectedIds,
      type = _ref.type,
      _onSelect2 = _ref.onSelect;
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

FormRadioGroup.defaultProps = defaultProps;
export default withStyles(styleClasses, {
  index: 0,
  withTheme: true
})(FormRadioGroup);