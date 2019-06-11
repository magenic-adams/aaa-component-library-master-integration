import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import invariant from 'tiny-invariant';
import { withStyles } from '@material-ui/styles';
import cx from 'clsx';
import List from '@material-ui/core/List';
import MUIRadioGroup from '@material-ui/core/RadioGroup';
import SelectListItemText from '../SelectListItemText/SelectListItemText';

type propTypes = {
  // Decorator Props
  classes: PropTypes.object,
  // Passed Props
  name?: PropTypes.string,
  items: [
    {
      id: PropTypes.string | PropTypes.number,
      value: PropTypes.string | PropTypes.number,
      display: PropTypes.string | PropTypes.number | PropTypes.node,
      selected?: PropTypes.bool,
      disabled?: PropTypes.bool
    }
  ],
  type: PropTypes.string,
  value?: PropTypes.string | PropTypes.number,
  onSelect: PropTypes.func
};

const styleClasses = theme => ({
  root: {
    width: 341,
    background: theme.palette.common.white,
    border: `2px solid ${theme.palette.primary.main}`,
    borderRadius: 4,
    padding: 0,
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

function SelectList({
  classes,
  items,
  name,
  type,
  value,
  onSelect,
}: propTypes) {
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
              case 'single-select-radio':
                return (
                  <MUIRadioGroup name={name} value={value} onChange={onSelect}>
                    {items.map(item => item.display)}
                  </MUIRadioGroup>
                );
              case 'multi-select-radio':
                return items.map(item => item.display);
              default:
                return null;
            }
          })()
        : null}
    </Fragment>
  );
}

SelectList.defaultProps = {
  name: '',
  value: '',
};

export default withStyles(styleClasses, { withTheme: true })(SelectList);
