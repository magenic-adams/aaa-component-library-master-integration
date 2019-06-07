import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import invariant from 'tiny-invariant';
import { withStyles } from '@material-ui/styles';
import cx from 'clsx';
import List from '@material-ui/core/List';
import SelectListItemText from '../SelectListItemText/SelectListItemText';

type propTypes = {
  // Decorator Props
  classes: PropTypes.object,
  // Passed Props
  items: [
    {
      id: PropTypes.string | PropTypes.number,
      value: PropTypes.string | PropTypes.number,
      display: PropTypes.string | PropTypes.number | PropTypes.node,
      isSelected?: PropTypes.bool,
      disabled?: PropTypes.bool
    }
  ],
  type: PropTypes.string,
  onSelect: PropTypes.func
};

const styleClasses = theme => ({
  root: {
    width: '341px',
    background: theme.palette.common.white,
    border: `2px solid ${theme.palette.primary.main}`,
    borderRadius: '4px',
    padding: '0px',
    boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.35)'
  },
  fullOverlay: {
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      border: `1px solid ${theme.palette.primary.main}`,
      boxShadow: 'none',
      borderRadius: '0px',
      '& span': {
        fontSize: '16px'
      }
    }
  }
});

function areItemKeysPresent(items) {
  return items.every(item => item.id && item.value && item.display);
}

function areItemsValid(items) {
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

function SelectList({ classes, items, type, onSelect }: propTypes) {
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
                      [classes.fullOverlay]: items.length > 6
                    })}
                  >
                    {items.map(item => (
                      <SelectListItemText
                        key={item.id}
                        item={item}
                        selected
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
