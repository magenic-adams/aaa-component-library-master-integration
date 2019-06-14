import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import invariant from 'tiny-invariant';
import { withStyles } from '@material-ui/styles';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import {
  ELEMENT_PANEL_WIDTH_TABLET,
  ELEMENT_PANEL_HEIGHT,
  ELEMENT_BORDER_RADIUS,
} from '../../constants/cssConstants';

type propTypes = {
  // Decorator Props
  classes: PropTypes.object,
  // Passed Props
  name: PropTypes.string,
  item: {
    id: PropTypes.number,
    value: PropTypes.string | PropTypes.number,
    text: PropTypes.string | PropTypes.number
  },
  checked?: PropTypes.bool,
  disabled?: PropTypes.bool,
  onSelect: PropTypes.func
};

const styleClasses = theme => ({
  root: {
    width: 534,
    height: ELEMENT_PANEL_HEIGHT,
    borderRadius: ELEMENT_BORDER_RADIUS,
    border: `1px solid ${theme.palette.colorVariables.BLACK}`,
    margin: '0px 0px 8px 0px',
    '&:hover': {
      background: theme.palette.colorVariables.SECONDARY_HOVER,
    },
    '&.Mui-disabled, &.Mui-disabled:hover': {
      borderColor: theme.palette.disabled.main,
      background: 'none',
    },
    [theme.breakpoints.down('md')]: {
      width: ELEMENT_PANEL_WIDTH_TABLET,
    },
  },
  radio: {
    color: theme.palette.colorVariables.GRAY,
    '&:hover': {
      background: 'none',
    },
  },
  selected: {
    border: `2px solid ${theme.palette.colorVariables.DARKER_BLUE}`,
    fontWeight: theme.typographyVariables.BOLD,
    '&.Mui-disabled, &.Mui-disabled:hover': {
      borderColor: theme.palette.disabled.main,
      background: 'none',
    },
  },
  label: {
    fontFamily: theme.typography.fontFamily,
    fontSize: 16,
    paddingRight: 16,
  },
});

function isValidItem(item) {
  if (!item.id && !item.value) {
    invariant(false, 'id and value are empty');
  }
  return true;
}

function RadioItem({
  classes,
  checked,
  disabled,
  item,
  name,
  onSelect,
}: propTypes) {
  const { id, value, text } = { ...item };
  const { label, radio, root } = { ...classes };

  return item && isValidItem(item) ? (
    <FormControlLabel
      className={cx('Radio', root, {
        [classes.selected]: checked,
      })}
      classes={{
        label,
      }}
      value={value}
      disabled={disabled}
      onClick={() => onSelect(item)}
      control={
        <Radio
          name={name}
          key={`RadioItem-${id}`}
          inputProps={{ 'data-quid': `RadioItem-${id}` }}
          classes={{
            root: radio,
          }}
          checked={checked}
          color="primary"
          onClick={onSelect}
        />
      }
      label={text}
    />
  ) : null;
}

RadioItem.defaultProps = {
  checked: false,
  disabled: false,
};

export default withStyles(styleClasses, { index: 0, withTheme: true })(
  RadioItem
);
