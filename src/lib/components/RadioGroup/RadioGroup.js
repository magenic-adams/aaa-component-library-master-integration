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
   * The selected value of the component
   */
  value: PropTypes.string | PropTypes.number,
  type?: PropTypes.string,
  onSelect: PropTypes.func
};

function constructDisplayItems(items, selectedValue) {
  return items.map(item => {
    return {
      ...item,
      display: <RadioItem item={item} selectedValue={selectedValue} />,
    };
  });
}

function RadioGroup({ name, items, value, type, onSelect }: propTypes) {
  const selectedValue = value.toString();
  const newItems = constructDisplayItems(items, selectedValue);

  // TODO: Create type validation
  return (
    <SelectList
      type={type}
      name={name}
      value={selectedValue}
      items={newItems}
      onSelect={onSelect}
    />
  );
}

RadioGroup.defaultProps = {
  type: 'single-select-radio',
};

export default RadioGroup;
