import React, { Fragment } from 'react';
import invariant from 'tiny-invariant';
import { withStyles } from '@material-ui/styles';
import cx from 'clsx';
import List from '@material-ui/core/List';

// Components
import SelectListItemText from '../SelectListItemText/SelectListItemText';

interface selectItem {
  id: string | number,
  value: string | number,
  display: string | number,
  selected?: boolean,
  disabled?: boolean
}

interface RequiredProps {
  items: selectItem[],
  type: string,
  onSelect: (item:selectItem) => void
};

interface OptionalProps {
  classes?: any, // MUI Decorator
}

const styleClasses = (theme:any): {
  // CSS Classes
  root: any,
  fullOverlay: any,
} => ({
  root: {
    width: 341,
    background: theme.palette.colorVariables.WHITE,
    border: `2px solid ${theme.palette.primary.main}`,
    borderRadius: 4,
    padding: '0px',
    boxShadow: `0 2px 8px 0 ${theme.palette.colorVariables.GRAY}`,
    '& span': {
      fontFamily: theme.typography.fontFamily,
    },
    [theme.breakpoints.down(321)]: {
      width: '100%',
      border: `1px solid ${theme.palette.primary.main}`,
      boxShadow: 'none',
      borderRadius: 0,
      '& span': {
        fontSize: 16,
      },
    },
  },
  fullOverlay: {
    [theme.breakpoints.down(415)]: {
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

function areItemKeysPresent(items:selectItem[]) {
  return items.every(item => item.id && item.value && item.display);
}

function areItemsValid(items:selectItem[]) {
  if (!Array.isArray(items) || items.length === 0) {
    invariant(false, 'items array is empty');
  }

  if (!areItemKeysPresent(items)) {
    invariant(
      false,
      'Invalid object keys are present. Keys should contain id, value and display'
    );
  }
  return true;
}

const SelectList:React.FunctionComponent<RequiredProps & OptionalProps> = ({
  classes,
  items,
  type,
  onSelect,
}) => {
  return (
    <Fragment>
      {areItemsValid(items)
        ? (() => {
            switch (type) {
              case 'primary':
                return (
                  <List
                    dense
                    className={cx('List', classes.root, {
                      [classes.fullOverlay]: items.length > 6,
                    })}
                  >
                    {items.map(item => (
                      <SelectListItemText
                        key={item.id}
                        item={item}
                        onSelect={() => onSelect(item)}
                      />
                    ))}
                  </List>
                );
              case 'radioGroup':
                // TODO: ACL-19 Radio Group
                return null;
              default:
                return null;
            }
          })()
        : null}
    </Fragment>
  );
}

export default withStyles(styleClasses, { withTheme: true })(SelectList);
