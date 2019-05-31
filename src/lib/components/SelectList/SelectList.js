/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-cycle */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import cx from 'clsx';
import List from '@material-ui/core/List';
import { SelectListItemText } from '..';

type propTypes = {
  // Decorator Props
  classes: PropTypes.object,
  // Passed Props
  items: {
    id: PropTypes.string | PropTypes.number,
    value: PropTypes.string | PropTypes.number,
    display: PropTypes.string | PropTypes.number | PropTypes.node.primary,
    isSelected?: PropTypes.bool,
    disabled?: PropTypes.bool
  },
  type?: PropTypes.string,
  onSelect: PropTypes.func
};

const styleClasses = theme => ({
  root: {
    width: '341px',
    background: theme.palette.common.white,
    border: `2px solid ${theme.palette.primary.main}`,
    borderRadius: '4px',
    padding: '0px',
    boxShadow: '0 2px 8px 0',
    [theme.breakpoints.down('sm', 'md')]: {
      border: `1px solid ${theme.palette.primary.main}`,
      boxShadow: 'none',
      borderRadius: '0px'
    }
  },
  fullOverlay: {
    border: `1px solid ${theme.palette.primary.main}`,
    boxShadow: 'none',
    borderRadius: '0px',
    '& span:first-child': {
      fontSize: '16px'
    }
  }
});

function SelectList({ classes, items, type, onSelect }: propTypes) {
  return (
    <Fragment>
      {items && items.length
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
              default:
                return null;
            }
          })()
        : null}
    </Fragment>
  );
}

SelectList.defaultProps = {
  type: 'primary'
};

export default withStyles(styleClasses, { withTheme: true })(SelectList);
