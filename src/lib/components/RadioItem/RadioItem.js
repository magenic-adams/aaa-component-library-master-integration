/* eslint-disable import/no-cycle */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
// import cx from 'clsx';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';

type propTypes = {
  // Decorator Props
  classes: PropTypes.object,
  // Passed Props
  value: PropTypes.string | PropTypes.number,
  text: PropTypes.string | PropTypes.number,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  onSelect: PropTypes.func
};

const styleClasses = theme => ({
  root: {
    width: '343px',
    height: '48px',
    borderRadius: '4px',
    border: `1px solid ${theme.palette.primary.main}`,
    marginBottom: '8px',
    '&:hover': {
      background: theme.palette.colorVariables.SECONDARY_HOVER
    }
  },
  radio: {
    padding: '0px 16px 0 16px',
    color: theme.palette.colorVariables.BLACK,
    '&$checked': {
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.colorVariables.WHITE
    },
    '&:hover': {
      background: 'none'
    }
  },
  disabled: {
    borderColor: theme.palette.disabled.main
  },
  label: {
    paddingRight: '16px'
  }
});

function RadioItem({
  classes,
  checked,
  disabled,
  value,
  text,
  // eslint-disable-next-line no-unused-vars
  onSelect
}: propTypes) {
  return (
    <FormControlLabel
      classes={classes}
      value={value}
      disabled={disabled}
      control={
        <Radio
          classes={{ root: classes.radio, checked: classes.checked }}
          checked={checked}
          color="primary"
          disabled={disabled}
          value={value}
          // onChange={() => onSelect()}
        />
      }
      label={text}
    />
  );
}

RadioItem.defaultProps = {};

export default withStyles(styleClasses, { withTheme: true })(RadioItem);
