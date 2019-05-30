/* eslint-disable import/no-cycle */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import { withStyles } from '@material-ui/styles';
import cx from 'clsx';
import List from '@material-ui/core/List';
import { SelectListItemText } from '..';

type propTypes = {
  // Decorator Props
  classes: PropTypes.object,
  className?: PropTypes.string,
  // Passed Props
  items: {
    id: PropTypes.string | PropTypes.number,
    value: PropTypes.string | PropTypes.number,
    display: PropTypes.string | PropTypes.number | PropTypes.element
  },
  onSelect: PropTypes.func
};

const styleClasses = theme => ({
  root: {
    width: '338px',
    background: theme.palette.common.white,
    border: `2px solid ${theme.palette.primary.main}`,
    borderRadius: '4px',
    padding: '0px'
  }
});

function handleSelect(value, callback) {
  if (callback) callback(value);
}

function SelectList({ classes, className, items, onSelect }: propTypes) {
  return (
    <Fragment>
      {items && items.length ? (
        <List dense className={cx('List', classes.root, className)}>
          {items.map(item => (
            <SelectListItemText
              key={item.id}
              item={item}
              selected
              onSelect={() => handleSelect(item, onSelect)}
            />
          ))}
        </List>
      ) : null}
    </Fragment>
  );
}

SelectList.defaultProps = {
  className: ''
};

export default withStyles(styleClasses, { withTheme: true })(SelectList);
