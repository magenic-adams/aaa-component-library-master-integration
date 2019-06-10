import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import invariant from 'tiny-invariant';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

type propTypes = {
  // Decorator Props
  classes: PropTypes.object,
  // Passed Props
  item: {
    id: PropTypes.string | PropTypes.number,
    value: PropTypes.string | PropTypes.number,
    display: PropTypes.string | PropTypes.number
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

function isValid(id, display) {
  if (!id && !display) {
    invariant(false, 'id and display should have value.');
  }
  if (!(typeof display === 'string' || typeof display === 'number')) {
    invariant(false, 'Invalid display type. It must be string or number');
  }
  return true;
}

function SelectListItemText({ classes, item, onSelect }: propTypes) {
  const { display, id } = item || {};
  const { divider, gutters, primary, root } = classes;

  return isValid(id, display) ? (
    <ListItem
      data-quid={`SelectListItem-${id}`}
      classes={{ root, divider, gutters }}
      divider
      selected={item.selected}
      onClick={() => onSelect(item)}
    >
      <ListItemText classes={{ primary }} primary={display} />
    </ListItem>
  ) : null;
}

export default withStyles(styleClasses, { withTheme: true })(
  SelectListItemText
);
