import React, { Fragment } from 'react';
import cx from 'clsx';
import { withStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';

// Components
import Label from '../Label/Label';
import SelectList from '../SelectList/SelectList';

// Types
import { RadioItem } from '..';
import SelectItem from '../../types/SelectItem';

interface RequiredProps {
  id: string;
  items: SelectItem[];
  selectedValues: string[] | number[];
  onChange: (item: SelectItem) => void;
}

interface OptionalProps {
  classes?: any; // MUI Decorator
  className?: string;
  initialValue?: string | number;
  instructionLabel?: string;
  /**
   * Used to disable specific radio items by value
   */
  disabledValues?: string[] | number[];
  disableAll?: boolean;
  multiSelect?: boolean;
}

const defaultProps: OptionalProps = {
  multiSelect: false,
  instructionLabel: '',
  disableAll: false,
  disabledValues: [],
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
        background: 'none',
      },
      [theme.breakpoints.up('md')]: {
        width: 534,
      },
    },
    '& li > span ': {
      // This is a workaround to disable the ripple button effect on the component.
      // Currently, the MenuItem component don't have exposed prop to disable ripple effect.
      width: 0,
    },
  },
  [theme.breakpoints.up('md')]: {
    width: 534,
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
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
  value: string | number,
  selectedValues: string[] | number[] | undefined
) {
  return isInArray(selectedValues, value);
}

function constructDisplayItems(
  id: string,
  items: SelectItem[],
  disableAll: boolean | undefined,
  disabledValues: string[] | number[] | undefined,
  selectedValues: string[] | number[],
  onChange: (item: SelectItem) => void
): any {
  return (
    Array.isArray(items) &&
    items.map(item => {
      const checked = isSelected(item.value, selectedValues);
      const disabled = !!disableAll || isInArray(disabledValues, item.value);

      return {
        ...item,
        key: `RadioItem-${item.id}`,
        display: (
          <RadioItem
            name={id}
            checked={checked}
            item={item}
            disabled={disabled}
            onChange={onChange}
          />
        ),
      };
    })
  );
}

const RadioGroup: React.FunctionComponent<RequiredProps & OptionalProps> = ({
  classes,
  disableAll,
  disabledValues,
  id,
  items,
  instructionLabel,
  selectedValues,
  onChange,
}) => {
  const newItems = constructDisplayItems(
    id,
    items,
    disableAll,
    disabledValues,
    selectedValues,
    onChange
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
        onSelect={() => onChange}
      />
    </Fragment>
  );
};

RadioGroup.defaultProps = defaultProps;

export default withStyles(styleClasses, { index: 0, withTheme: true })(
  RadioGroup
);
