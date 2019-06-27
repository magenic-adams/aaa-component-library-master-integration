import React, { Fragment } from 'react';
import cx from 'clsx';
import { withStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';

// Components
import Label from '../Label/Label';
import RadioItem from '../RadioItem/RadioItem';
import SelectList from '../SelectList/SelectList';

// Types
import SelectItem from '../../types/SelectItem';

interface RequiredProps {
  id: string;
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
  disabledIds: []
};

const styleClasses = (theme: Theme): { root: any } => ({
  root: {
    border: 'none',
    boxShadow: 'none',
    marginTop: 16,
    '& li': {
      border: 'none',
      padding: 0,
      marginBottom: 4,
      '&:active,&:hover': {
        background: 'none'
      },
      [theme.breakpoints.up('md')]: {
        width: 534
      }
    }
  },
  [theme.breakpoints.up('md')]: {
    width: 534
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%'
  }
});

function isInArray(ids: string[] | number[] | undefined, id: string | number) {
  if (Array.isArray(ids)) {
    for (let i = 0; i < ids.length; i += 1) {
      if (ids[i] === id) return true;
    }
  }
  return false;
}

function isSelected(
  type: string | undefined,
  id: string | number,
  selectedId: string | number | undefined,
  selectedIds: string[] | number[] | undefined
) {
  if (type === 'multi-select') {
    return isInArray(selectedIds, id);
  }
  return id === selectedId;
}

function constructDisplayItems(
  id: string,
  type: string | undefined,
  items: SelectItem[],
  selectedId: string | number | undefined,
  selectedIds: string[] | number[] | undefined,
  disableAll: boolean | undefined,
  disabledIds: string[] | number[] | undefined,
  onSelect: (item: SelectItem) => void
): any {
  return (
    Array.isArray(items) &&
    items.map(item => {
      const checked = isSelected(type, item.id, selectedId, selectedIds);
      const disabled = !!disableAll || isInArray(disabledIds, item.id);

      return {
        ...item,
        key: `RadioItem-${item.id}`,
        display: (
          <RadioItem
            name={id}
            item={item}
            checked={checked}
            disabled={disabled}
            onSelect={() =>
              typeof onSelect === 'function' ? onSelect(item) : null
            }
          />
        )
      };
    })
  );
}

const RadioGroup: React.FunctionComponent<RequiredProps & OptionalProps> = ({
  classes,
  disableAll,
  disabledIds,
  id,
  items,
  instructionLabel,
  selectedId,
  selectedIds,
  type,
  onSelect
}) => {
  const newItems = constructDisplayItems(
    id,
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
        <Label disabled={false} id={id} focused={false}>
          {instructionLabel}
        </Label>
      )}
      <SelectList
        className={cx('RadioGroup', classes.root)}
        items={newItems}
        onSelect={() => onSelect}
      />
    </Fragment>
  );
};

RadioGroup.defaultProps = defaultProps;

export default withStyles(styleClasses, { index: 0, withTheme: true })(
  RadioGroup
);
