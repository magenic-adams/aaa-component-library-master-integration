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
      isSelected?: PropTypes.bool,
      disabled?: PropTypes.bool
    }
  ],
  onSelect: PropTypes.func
};

function constructDisplayItems(name, items) {
  return items.map(item => {
    return {
      ...item,
      name,
      display: <RadioItem item={item} />,
    };
  });
}

function RadioItemGroup({ name, items, onSelect }: propTypes) {
  const newItems = constructDisplayItems(name, items);

  return (
    <SelectList
      type="radioGroup"
      name={name}
      items={newItems}
      onSelect={onSelect}
    />
  );
}

export default RadioItemGroup;
