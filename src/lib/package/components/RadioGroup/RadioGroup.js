/* eslint-disable import/no-cycle */
import React from 'react';
import PropTypes from 'prop-types';
import RadioItem from '../RadioItem/RadioItem';
import SelectList from '../SelectList/SelectList';

type propTypes = {
  // Passed Props
  name: PropTypes.string,
  items: [
    {
      id: PropTypes.string | PropTypes.number,
      value: PropTypes.string | PropTypes.number,
      text: PropTypes.string | PropTypes.number,
      selected?: PropTypes.bool,
      disabled?: PropTypes.bool
    }
  ],
  /**
   * Used to set checked props in radio item for single select radio buttons
   */
  selectedValue?: PropTypes.string | PropTypes.number,
  /**
   * Used to set checked props in radio item for single select radio buttons
   */
  selectedValues?: [PropTypes.string | PropTypes.number],
  type?: PropTypes.string,
  onSelect: PropTypes.func
};

function isSelected(type, value, selectedValue, selectedValues) {
  if (type === 'single-select-radio') {
    return value.toString() === selectedValue;
  }
  if (type === 'multi-select-radio') {
    return selectedValues.includes(value.toString());
  }
  return false;
}

function constructDisplayItems(
  type,
  items,
  selectedValue,
  selectedValues,
  onSelect
) {
  return items.map(item => {
    const checked = isSelected(type, item.value, selectedValue, selectedValues);
    return {
      ...item,
      display: <RadioItem item={item} checked={checked} onSelect={onSelect} />,
    };
  });
}

function RadioGroup({
  items,
  name,
  selectedValue,
  selectedValues,
  type,
  onSelect,
}: propTypes) {
  const newItems = constructDisplayItems(
    type,
    items,
    selectedValue,
    selectedValues,
    onSelect
  );

  // TODO: Create type validation
  return (
    <SelectList type={type} name={name} items={newItems} onSelect={onSelect} />
  );
}

RadioGroup.defaultProps = {
  selectedValue: '',
  selectedValues: [],
  type: 'single-select-radio',
};

export default RadioGroup;
