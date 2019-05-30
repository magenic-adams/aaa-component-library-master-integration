import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import { withStyles } from '@material-ui/styles';
import cx from 'clsx';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

type propTypes = {
  // Decorator Props
  className?: PropTypes.string,
  classes: PropTypes.object,
  // Passed Props
  items: {
    id: PropTypes.string | PropTypes.number,
    value: PropTypes.string | PropTypes.number,
    display: PropTypes.string | PropTypes.number | PropTypes.node
  }
};

const styleClasses = theme => ({
  root: {
    width: '338px',
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
    '&:active,&:hover': {
      background: theme.palette.colorVariables.SECONDARY_HOVER
    }
  },
  disabled: {
    background: theme.palette.disabled.main,
    color: theme.palette.common.white
  }
});

function SelectListItemText({ item, classes, className }: propTypes) {
  const { display, isSelected, onSelect } = item;

  return (
    <ListItem
      className={cx('ListItem', className)}
      classes={classes}
      button
      divider
      selected={isSelected}
      onClick={onSelect}
    >
      <ListItemText primary={display} />
    </ListItem>
  );
}

SelectListItemText.defaultProps = {
  className: ''
};

export default withStyles(styleClasses, { withTheme: true })(
  SelectListItemText
);
