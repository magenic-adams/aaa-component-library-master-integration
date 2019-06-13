import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import React from 'react';
import PropTypes from 'prop-types';
import RadioItem from '../RadioItem/RadioItem';
import SelectList from '../SelectList/SelectList';

function isSelected(type, value, selectedValue, selectedValues) {
  if (type === 'single-select-radio') {
    return value.toString() === selectedValue.toString();
  }

  if (type === 'multi-select-radio') {
    return selectedValues.map(String).includes(value.toString());
  }

  return false;
}

function constructDisplayItems(name, type) {
  var items = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var selectedValue = arguments.length > 3 ? arguments[3] : undefined;
  var selectedValues = arguments.length > 4 ? arguments[4] : undefined;
  var disableAll = arguments.length > 5 ? arguments[5] : undefined;
  var disabledValues = arguments.length > 6 ? arguments[6] : undefined;
  var onSelect = arguments.length > 7 ? arguments[7] : undefined;
  return Array.isArray(items) && items.map(function (item) {
    var value = item.value;
    var checked = isSelected(type, value, selectedValue, selectedValues);
    var disabled = !!disableAll || disabledValues.map(String).includes(value.toString());
    return _objectSpread({}, item, {
      display: React.createElement(RadioItem, {
        name: name,
        item: item,
        checked: checked,
        disabled: disabled,
        onSelect: onSelect
      })
    });
  });
}

function RadioGroup(_ref) {
  var disableAll = _ref.disableAll,
      disabledValues = _ref.disabledValues,
      items = _ref.items,
      name = _ref.name,
      selectedValue = _ref.selectedValue,
      selectedValues = _ref.selectedValues,
      type = _ref.type,
      onSelect = _ref.onSelect;
  var newItems = constructDisplayItems(name, type, items, selectedValue, selectedValues, disableAll, disabledValues, onSelect);
  return React.createElement(SelectList, {
    type: type,
    name: name,
    items: newItems,
    onSelect: onSelect
  });
}

RadioGroup.defaultProps = {
  type: 'single-select-radio',
  selectedValue: '',
  selectedValues: [],
  disableAll: false,
  disabledValues: []
};
export default RadioGroup;