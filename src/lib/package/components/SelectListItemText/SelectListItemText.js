import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import invariant from 'tiny-invariant';

// Material Components
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

type propTypes = {
  // Decorator Props
  classes: PropTypes.object,
  // Passed Props
  item: {
    id: PropTypes.number,
    value: PropTypes.string | PropTypes.number,
    text: PropTypes.string | PropTypes.number,
    selected?: PropTypes.bool
  }
};

const styleClasses = theme => ({
  root: {
    height: 48,
    background: theme.palette.colorVariables.TRANSPARENT,
    '&.Mui-selected, &.Mui-selected:hover': {
      backgroundColor: theme.palette.colorVariables.SECONDARY_HOVER,
    },
    '&:hover': {
      backgroundColor: theme.palette.colorVariables.SECONDARY_HOVER,
    },
  },
  gutters: {
    padding: '0 13px 0 13px',
  },
  divider: {
    borderBottom: `1px solid ${theme.palette.primary.main}`,
    '&:last-child': {
      borderBottom: 'none',
    },
  },
  primary: {
    fontSize: 18,
    letterSpacing: 'normal',
    fontStretch: 'normal',
    lineHeight: 1.5,
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: 16,
    },
  },
});

function isValid(id, value) {
  if (!id || !value) {
    invariant(false, 'id or value is empty.');
  }
  return true;
}

function SelectListItemText({ classes, item, onSelect }: propTypes) {
  const { id, value, text } = { ...item };
  const { divider, gutters, primary, root } = classes;

  return item && isValid(id, value) ? (
    <ListItem
      value={value}
      data-quid={`SelectListItem-${id}`}
      classes={{ root, divider, gutters }}
      divider
      selected={item.selected}
      onClick={() => onSelect(item)}
    >
      <ListItemText classes={{ primary }} primary={text} />
    </ListItem>
  ) : null;
}

export default withStyles(styleClasses, { withTheme: true })(
  SelectListItemText
);
