import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import { withStyles } from '@material-ui/styles';

import Label from '../Label/Label';
import RadioItem from '../RadioItem/RadioItem';
import SelectList from '../SelectList/SelectList';

type propTypes = {
  // Decorator Props
  classes: PropTypes.object,
  // Passed Props
  name: PropTypes.string,
  items: [
    {
      id: PropTypes.number,
      value: PropTypes.string | PropTypes.number,
      text: PropTypes.string | PropTypes.number
    }
  ],
  instructionLabel: PropTypes.string,
  /**
   * Used to set checked props in radio item for single-select radio buttons
   */
  selectedId?: PropTypes.number,
  /**
   * Used to set checked props in radio item for multi-select radio buttons
   */
  selectedIds?: [PropTypes.number],
  /**
   * Used to disable specific radio items by value
   */
  disabledIds?: [PropTypes.number],
  disableAll?: PropTypes.bool,
  type?: PropTypes.string,
  onSelect: PropTypes.func
};

const styleClasses = () => ({
  root: {
    width: 534,
    border: 'none',
    boxShadow: 'none',
    marginTop: 16,
  },
});

function isSelected(type, id, selectedId, selectedIds) {
  if (type === 'single-select') {
    return id === selectedId;
  }
  if (type === 'multi-select') {
    return selectedIds.includes(id);
  }
  return false;
}

function constructDisplayItems(
  name,
  type,
  items = [],
  selectedId,
  selectedIds,
  disableAll,
  disabledIds,
  onSelect
) {
  return (
    Array.isArray(items) &&
    items.map(item => {
      const { id } = item;
      const checked = isSelected(type, id, selectedId, selectedIds);
      const disabled = !!disableAll || disabledIds.includes(id);

      return {
        ...item,
        key: `RadioItem-${id}`,
        display: (
          <RadioItem
            name={name}
            item={item}
            checked={checked}
            disabled={disabled}
            onSelect={() =>
              typeof onSelect === 'function' ? onSelect(item) : null
            }
          />
        ),
      };
    })
  );
}

function RadioGroup({
  classes,
  disableAll,
  disabledIds,
  items,
  instructionLabel,
  name,
  selectedId,
  selectedIds,
  type,
  onSelect,
}: propTypes) {
  const newItems = constructDisplayItems(
    name,
    type,
    items,
    selectedId,
    selectedIds,
    disableAll,
    disabledIds,
    onSelect
  );

  return (
    <Fragment>
      {instructionLabel && (
        <Label disabled={false} error={false} focused={false}>
          {instructionLabel}
        </Label>
      )}
      <SelectList
        className={cx('RadioGroup', classes.root)}
        type={type}
        name={name}
        items={newItems}
        onSelect={onSelect}
      />
    </Fragment>
  );
}

RadioGroup.defaultProps = {
  type: 'single-select',
  selectedId: '',
  selectedIds: [],
  disableAll: false,
  disabledIds: [],
};

export default withStyles(styleClasses, { index: 0, withTheme: true })(
  RadioGroup
);
