import React from 'react';
import invariant from 'tiny-invariant';
import { withStyles } from '@material-ui/styles';
import cx from 'clsx';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import SelectListItem from '../SelectListItem/SelectListItem';
// Types
import SelectItem from '../../types/SelectItem';

interface RequiredProps {
  items: SelectItem[];
  onSelect: (item: SelectItem) => void;
}

interface OptionalProps {
  classes?: any; // MUI Decorator
  className?: string;
  name?: string;
  disabled?: boolean;
}

const defaultProps: OptionalProps = {
  className: '',
  disabled: false
};

const styleClasses = (
  theme: Theme
): {
  // CSS Classes
  root: any;
} => ({
  root: {
    width: 534,
    background: theme.secondaryPalette.colorVariables.WHITE,
    border: `2px solid ${theme.palette.primary.main}`,
    borderRadius: 4,
    padding: '0px',
    boxShadow: `0 2px 8px 0 ${theme.secondaryPalette.colorVariables.GRAY}`,
    '& span': {
      fontFamily: theme.typographyValues.fontFamily
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      border: `1px solid ${theme.palette.primary.main}`,
      boxShadow: 'none',
      borderRadius: 0,
      '& span': {
        fontSize: 16
      }
    }
  }
});

function areItemKeysPresent(items: SelectItem[]) {
  return items.every(item => 
    item.hasOwnProperty('id') && 
    item.hasOwnProperty('value') && 
    item.hasOwnProperty('display')
    );
}

function checkValidity(items: SelectItem[]) {
  if (!Array.isArray(items) || items.length === 0) {
    invariant(false, 'items are empty');
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
  disabled,
  items,
  onSelect
}) => {
  checkValidity(items);

  return (
    <div className={cx(classes.root, className)}>
      {items.map((item, index) => {
        return (
          item.display && (
            <SelectListItem
              key={item.id}
              value={item.value}
              item={item}
              onSelect={onSelect}
              tabIndex={index}
              disabled={disabled}
            />
          )
        );
      })}
    </div>
  );
};

SelectList.defaultProps = defaultProps;

export default withStyles(styleClasses, { withTheme: true })(SelectList);
