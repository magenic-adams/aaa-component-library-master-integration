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
    height: '48px'
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
  button: {
    '&:hover': {
      background: `${theme.palette.colorVariables.SECONDARY_HOVER} !important`
    },
    transition: 'none'
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
  disabled: {
    background: theme.palette.disabled.main,
    color: theme.palette.common.white
  }
});

function SelectListItemText({ classes, item, onSelect }: propTypes) {
  const { id, display, isSelected } = item;

  return (
    item && (
      <ListItem
        button
        data-quid={`SelectListItem-${id}`}
        classes={{
          root: classes.root,
          divider: classes.divider,
          button: classes.button,
          disabled: classes.disabled,
          gutters: classes.gutters
        }}
        divider
        selected={isSelected}
        onClick={() => onSelect(item)}
      >
        <ListItemText
          classes={{ primary: classes.primary }}
          primary={display}
        />
      </ListItem>
    )
  );
}

export default withStyles(styleClasses, { withTheme: true })(
  SelectListItemText
);
