/* eslint-disable import/no-cycle */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { RadioItem, SelectList } from '..';

type propTypes = {
  // Passed Props
  name: PropTypes.string,
  items: {
    id: PropTypes.string | PropTypes.number,
    value: PropTypes.string | PropTypes.number,
    text: PropTypes.string | PropTypes.number,
    isSelected?: PropTypes.bool,
    disabled?: PropTypes.bool
  }
  // onSelect: PropTypes.func
};

function constructDisplayItems(name, items) {
  return items.map((item, index) => {
    return {
      ...item,
      name,
      display: (
        <RadioItem
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          value={item.value.toString()}
          aria-label={item.text}
          text={item.text}
          checked={item.isSelected}
          disabled={item.disabled}
          // onSelect={selectedOption => handleSelectItem(selectedOption)}
        />
      )
    };
  });
}

function RadioGroup({ name, items }: propTypes) {
  const newItems = constructDisplayItems(name, items);

  return <SelectList type="radioGroup" name={name} items={newItems} />;
}

export default RadioGroup;
