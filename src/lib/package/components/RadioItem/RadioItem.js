import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import { withStyles } from '@material-ui/styles';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';

type propTypes = {
  // Decorator Props
  classes: PropTypes.object,
  // Passed Props
  name: PropTypes.string,
  item: {
    id: PropTypes.string | PropTypes.number,
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
    height: 48,
    borderRadius: 4,
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
      width: '100%',
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
    fontWeight: theme.typography.buttonPrimary.fontWeight,
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

function RadioItem({
  classes,
  checked,
  disabled,
  item,
  name,
  onSelect,
}: propTypes) {
  const { id, value, text } = item;
  const { label, radio, root } = classes;
  return (
    <FormControlLabel
      className={cx('FormControlLabel', root, {
        [classes.selected]: checked,
      })}
      classes={{
        label,
      }}
      value={value}
      disabled={disabled}
      control={
        <Radio
          name={name}
          key={`RadioItem-${id}`}
          data-quid={`RadioItem-${id}`}
          classes={{
            root: radio,
          }}
          checked={checked}
          color="primary"
          onChange={onSelect}
        />
      }
      label={text}
    />
  );
}

RadioItem.defaultProps = {
  checked: false,
  disabled: false,
};

export default withStyles(styleClasses, { withTheme: true })(RadioItem);
