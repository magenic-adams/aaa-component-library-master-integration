import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import { withStyles } from '@material-ui/styles';
import RadioItem from '../RadioItem/RadioItem';
import SelectList from '../SelectList/SelectList';

type propTypes = {
  // Decorator Props
  classes: PropTypes.object,
  // Passed Props
  name: PropTypes.string,
  items: [
    {
      id: PropTypes.string | PropTypes.number,
      value: PropTypes.string | PropTypes.number,
      text: PropTypes.string | PropTypes.number
    }
  ],
  /**
   * Used to set checked props in radio item for single-select radio buttons
   */
  selectedValue?: PropTypes.string | PropTypes.number,
  /**
   * Used to set checked props in radio item for multi-select radio buttons
   */
  selectedValues?: [PropTypes.string | PropTypes.number],
  /**
   * Used to disable specific radio items by value
   */
  disabledValues?: [PropTypes.string | PropTypes.number],
  disableAll?: PropTypes.bool,
  type?: PropTypes.string,
  onSelect: PropTypes.func
};

const styleClasses = () => ({
  root: {
    width: 534,
    border: 'none',
    boxShadow: 'none',
  },
});

function isSelected(type, value, selectedValue, selectedValues) {
  if (type === 'single-select') {
    return value.toString() === selectedValue.toString();
  }
  if (type === 'multi-select') {
    return selectedValues.map(String).includes(value.toString());
  }
  return false;
}

function constructDisplayItems(
  name,
  type,
  items = [],
  selectedValue,
  selectedValues,
  disableAll,
  disabledValues,
  onSelect
) {
  return (
    Array.isArray(items) &&
    items.map(item => {
      const { id, value } = item;
      const checked = isSelected(type, value, selectedValue, selectedValues);
      const disabled =
        !!disableAll || disabledValues.map(String).includes(value.toString());

      return {
        ...item,
        key: `RadioItem-${id}`,
        display: (
          <RadioItem
            name={name}
            item={item}
            checked={checked}
            disabled={disabled}
            onSelect={onSelect}
          />
        ),
      };
    })
  );
}

function RadioGroup({
  classes,
  disableAll,
  disabledValues,
  items,
  name,
  selectedValue,
  selectedValues,
  type,
  onSelect,
}: propTypes) {
  const newItems = constructDisplayItems(
    name,
    type,
    items,
    selectedValue,
    selectedValues,
    disableAll,
    disabledValues,
    onSelect
  );

  return (
    <SelectList
      className={cx('RadioGroup', classes.root)}
      type={type}
      name={name}
      items={newItems}
      onSelect={onSelect}
    />
  );
}

RadioGroup.defaultProps = {
  type: 'single-select',
  selectedValue: '',
  selectedValues: [],
  disableAll: false,
  disabledValues: [],
};

export default withStyles(styleClasses, { index: 0, withTheme: true })(
  RadioGroup
);
