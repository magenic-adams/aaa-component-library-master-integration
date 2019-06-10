import React from 'react';
import PropTypes from 'prop-types';
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
    isSelected?: PropTypes.bool,
    disabled?: PropTypes.bool
  }
};

const styleClasses = theme => ({
  root: {
    width: '343px',
    height: '48px',
    borderRadius: '4px',
    border: `1px solid ${theme.palette.primary.main}`,
    marginBottom: '8px',
    '&:hover': {
      background: theme.palette.colorVariables.SECONDARY_HOVER,
    },
  },
  radio: {
    padding: '0px 16px 0 16px',
    color: theme.palette.colorVariables.BLACK,
    '&$checked': {
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.colorVariables.WHITE,
    },
    '&:hover': {
      background: 'none',
    },
  },
  disabled: {
    borderColor: theme.palette.disabled.main,
  },
  label: {
    paddingRight: '16px',
  },
});

function RadioItem({ classes, item }: propTypes) {
  const { checked, disabled, id, value, text } = item;
  const { label, radio, root } = classes;
  return (
    <FormControlLabel
      classes={{ root, label }}
      value={value}
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
          checked={checked}
          color="primary"
          disabled={disabled}
          value={value}
        />
      }
      label={text}
    />
  );
}

export default withStyles(styleClasses, { withTheme: true })(RadioItem);
