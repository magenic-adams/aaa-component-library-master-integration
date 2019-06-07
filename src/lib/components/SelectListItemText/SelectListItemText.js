import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
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
    height: '48px',
    background: theme.palette.colorVariables.TRANSPARENT,
    '&$selected, &$selected:hover': {
      backgroundColor: theme.palette.colorVariables.SECONDARY_HOVER
    },
    '&:hover': {
      backgroundColor: theme.palette.colorVariables.SECONDARY_HOVER
    }
  },
  gutters: {
    padding: '0 13px 0 13px'
  },
  divider: {
    borderBottom: `1px solid ${theme.palette.primary.main}`,
    '&:last-child': {
      borderBottom: 'none'
    }
  },
  primary: {
    fontSize: '18px',
    letterSpacing: 'normal',
    fontStretch: 'normal',
    lineHeight: 1.5,
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: '16px'
    }
  },
  selected: {}
});

function SelectListItemText({ classes, item, onSelect }: propTypes) {
  const { display, id } = item || {};
  const { divider, gutters, primary, root, selected } = classes;

  return id && display ? (
    <ListItem
      data-quid={`SelectListItem-${id}`}
      classes={{ root, divider, gutters, selected }}
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
