import React from 'react';
import PropTypes from 'prop-types';
// import invariant from 'tiny-invariant';
import { withStyles } from '@material-ui/styles';
import cx from 'clsx';
// import List from '@material-ui/core/List';

// Components
import SelectListItemText from '../SelectListItemText/SelectListItemText';

type propTypes = {
  // Decorator Props
  classes: PropTypes.object,
  // Passed Props
  className?: PropTypes.string,
  items: [
    {
      key: PropTypes.string,
      id: PropTypes.string | PropTypes.number,
      value: PropTypes.string | PropTypes.number,
      text: PropTypes.string,
      display?: PropTypes.node,
      className?: PropTypes.string,
      selected?: PropTypes.bool,
      disabled?: PropTypes.bool
    }
  ],
  onSelect: PropTypes.func
};

const styleClasses = theme => ({
  root: {
    width: 341,
    background: theme.palette.colorVariables.WHITE,
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
});

function renderDefaultListItem(item, onSelect) {
  return (
    item && (
      <SelectListItemText
        key={item.id}
        item={item}
        onSelect={() => onSelect(item)}
      />
    )
  );
}

function SelectList({ className, classes, items, onSelect }: propTypes) {
  return (
    <div className={cx(classes.root, className)}>
      {Array.isArray(items) &&
        items.map(item => {
          return item && item.display ? (
            <div className={item.className} key={item.key}>
              {item.display}
            </div>
          ) : (
            renderDefaultListItem(item, onSelect)
          );
        })}
    </div>
  );
}

SelectList.defaultProps = {
  className: '',
};
export default withStyles(styleClasses, { withTheme: true })(SelectList);
