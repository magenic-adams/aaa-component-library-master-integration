import React from 'react';
import invariant from 'tiny-invariant';
import { withStyles } from '@material-ui/styles';
import cx from 'clsx';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import SelectListItem from '../SelectListItem/SelectListItem';

interface selectItem {
  id: string | number;
  value: string | number;
  display: string | number;
  selected?: boolean;
  disabled?: boolean;
}

interface RequiredProps {
  items: selectItem[];
  onSelect: (item: selectItem) => void;
}

interface OptionalProps {
  classes?: any; // MUI Decorator
  className?: string;
  name?: string;
}

const defaultProps: OptionalProps = {
  className: '',
};

const styleClasses = (
  theme: Theme
): {
  // CSS Classes
  root: any;
} => ({
  root: {
    width: 341,
    background: theme.secondaryPalette.colorVariables.WHITE,
    border: `2px solid ${theme.palette.primary.main}`,
    borderRadius: 4,
    padding: '0px',
    boxShadow: `0 2px 8px 0 ${theme.secondaryPalette.colorVariables.GRAY}`,
    '& span': {
      fontFamily: theme.typographyValues.fontFamily,
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      border: `1px solid ${theme.palette.primary.main}`,
      boxShadow: 'none',
      borderRadius: 0,
      '& span': {
        fontSize: 16,
      },
    },
  },
});

function areItemKeysPresent(items: selectItem[]) {
  return items.every(item => item.id && item.value && item.display);
}

function checkValidity(items: selectItem[]) {
  if (!Array.isArray(items) || items.length === 0) {
    invariant(false, 'items is empty');
  }

  if (!areItemKeysPresent(items)) {
    invariant(
      false,
      'Invalid object keys are present. Keys should contain id, value and display'
    );
  }
}

const SelectList: React.FunctionComponent<RequiredProps & OptionalProps> = ({
  classes,
  className,
  items,
  onSelect,
}) => {
  checkValidity(items);

  return (
    <div className={cx(classes.root, className)}>
      {items.map(item => {
        return (
          item.display && (
            <SelectListItem
              key={item.id}
              item={item}
              onSelect={() => onSelect(item)}
            />
          )
        );
      })}
    </div>
  );
};

SelectList.defaultProps = defaultProps;

export default withStyles(styleClasses, { withTheme: true })(SelectList);
