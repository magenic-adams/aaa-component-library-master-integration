import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import { withStyles } from '@material-ui/styles';

// Types
import { Theme } from '@material-ui/core/styles/createMuiTheme';

//Components
import Label from '../../Label/Label';
import FormRadioItem from '../FormRadioItem/FormRadioItem';
import SelectList from '../../SelectList/SelectList';

// Types
import SelectItem from '../../../types/SelectItem';

interface RequiredProps {
  id: string;
  name: string;
  items: SelectItem[];
  onSelect: (item: SelectItem) => void;
}

interface OptionalProps {
  classes?: any; // MUI Decorator
  className?: string;
  instructionLabel?: string;
  /**
   * Used to set checked props in radio item for single-select radio buttons
   */
  selectedId: string | number;
  /**
   * Used to set checked props in radio item for multi-select radio buttons
   */
  selectedIds?: string[] | number[];
  /**
   * Used to disable specific radio items by value
   */
  disabledIds?: string[] | number[];
  disableAll?: boolean;
  type?: string;
}

const defaultProps: OptionalProps = {
  type: '',
  instructionLabel: '',
  selectedId: '',
  selectedIds: [],
  disableAll: false,
  disabledIds: [],
};

const styleClasses = (theme: Theme): { root: any } => ({
  root: {
    width: 534,
    border: 'none',
    boxShadow: 'none',
    marginTop: 16,
    [theme.breakpoints.up('md')]: {
      width: 534,
    },
    [theme.breakpoints.up('sm')]: {
      width: '100%',
    },
  },
});

function isSelected(
  type: string | undefined,
  id: string | number,
  selectedId: string | number | undefined,
  selectedIds: string[] | number[] | undefined,
) {
  if (type === 'multi-select') {
    return isInArray(selectedIds, id);
  }
  return id === selectedId;
}

function isInArray(ids: string[] | number[] | undefined, id: string | number) {
  if (Array.isArray(ids)) {
    for (var i = 0; i < ids.length; i++) {
      if (ids[i] === id) return true;
    }
  }
  return false;
}

function constructDisplayItems(
  name: string,
  type: string | undefined,
  items: SelectItem[],
  selectedId: string | number | undefined,
  selectedIds: string[] | number[] | undefined,
  disableAll: boolean | undefined,
  disabledIds: string[] | number[] | undefined,
  onSelect: (item: SelectItem) => void,
): any {
  return (
    Array.isArray(items) &&
    items.map(item => {
      const { id } = item;
      const checked = isSelected(type, id, selectedId, selectedIds);
      const disabled = !!disableAll || isInArray(disabledIds, id);

      return {
        ...item,
        key: `RadioItem-${id}`,
        display: (
          <FormRadioItem
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

const FormRadioGroup: React.FunctionComponent<
  RequiredProps & OptionalProps
> = ({
  classes,
  disableAll,
  disabledIds,
  id,
  items,
  instructionLabel,
  name,
  selectedId,
  selectedIds,
  type,
  onSelect,
}) => {
  const newItems = constructDisplayItems(
    name,
    type,
    items,
    selectedId,
    selectedIds,
    disableAll,
    disabledIds,
    onSelect,
  );

  return (
    <Fragment>
      {instructionLabel && (
        <Label disabled={false} id={id} focused={false}>
          {instructionLabel}
        </Label>
      )}
      <SelectList
        className={cx('RadioGroup', classes.root)}
        name={name}
        items={newItems}
        onSelect={() => onSelect}
      />
    </Fragment>
  );
};

FormRadioGroup.defaultProps = defaultProps;

export default withStyles(styleClasses, { index: 0, withTheme: true })(
  FormRadioGroup,
);
