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
  item: {
    id: PropTypes.string | PropTypes.number,
    value: PropTypes.string | PropTypes.number,
    text: PropTypes.string | PropTypes.number,
    disabled?: PropTypes.bool
  },
  selectedValue?: PropTypes.string | PropTypes.number
};

const styleClasses = theme => ({
  root: {
    width: 343,
    height: 48,
    borderRadius: 4,
    border: `1px solid ${theme.palette.primary.main}`,
    margin: '0px 0px 8px 0px',
    '&:hover': {
      background: theme.palette.colorVariables.SECONDARY_HOVER,
    },
  },
  radio: {
    color: theme.palette.colorVariables.GRAY,
    '&:hover': {
      background: 'none',
    },
  },
  selected: {
    border: `2px solid ${theme.palette.primary.main}`,
  },
  disabled: {
    borderColor: theme.palette.disabled.main,
  },
  label: {
    fontFamily: theme.typography.fontFamily,
    fontSize: 16,
    paddingRight: 16,
  },
});

function RadioItem({ classes, item, selectedValue }: propTypes) {
  const { disabled, id, value, text } = item;
  const { label, radio, root } = classes;
  return (
    <FormControlLabel
      className={cx('FormControlLabel', root, {
        [classes.selected]: selectedValue === value.toString(),
      })}
      classes={{ label }}
      value={value.toString()}
      disabled={disabled}
      control={
        <Radio
          key={id}
          data-quid={`RadioItem-${id}`}
          classes={{
            root: radio,
            checked: classes.checked,
            disabled: classes.disabled,
          }}
          color="primary"
          disabled={disabled}
        />
      }
      label={text}
    />
  );
}

RadioItem.defaultProps = {
  selectedValue: '',
};

export default withStyles(styleClasses, { withTheme: true })(RadioItem);
