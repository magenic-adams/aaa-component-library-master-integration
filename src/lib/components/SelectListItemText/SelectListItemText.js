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
  primary: {
    fontSize: '18px',
    letterSpacing: 'normal',
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

function SelectListItemText({ item, className, classes , onSelect }: propTypes) {
  const { display, isSelected } = item;

  return (
    <ListItem
      button
      className={cx('ListItem', className)}
      classes={classes}
      divider
      selected={isSelected}
      onClick={() => onSelect(item)}
    >
      <ListItemText classes={{ primary: classes.primary }} primary={display} />
    </ListItem>
  );
}

SelectListItemText.defaultProps = {
  className: ''
};

export default withStyles(styleClasses, { withTheme: true })(
  SelectListItemText
);
