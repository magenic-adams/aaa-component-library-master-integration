import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import invariant from 'tiny-invariant';
import { withStyles } from '@material-ui/styles';
import MUIRadio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Field } from 'react-final-form';

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
    height: 48,
    borderRadius: 4,
    border: `1px solid ${theme.palette.colorVariables.BLACK}`,
    background: theme.palette.colorVariables.WHITE,
    margin: '0px 0px 8px 0px',
    '&:hover': {
      background: theme.palette.colorVariables.SECONDARY_HOVER,
    },
    '&.Mui-disabled, &.Mui-disabled:hover': {
      borderColor: theme.palette.disabled.main,
      background: 'none',
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: 534,
    },
    [theme.breakpoints.up('sm')]: {
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
    fontWeight: theme.typographyVariables.BOLD,
    background: theme.palette.colorVariables.SECONDARY_HOVER,
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

const Radio = ({ props }) => {
  const {
    id,
    input: { name, value, onBlur, onFocus },
    checked,
    disabled,
    onChange,
  } = props;
  return (
    <MUIRadio
      key={id}
      name={name}
      checked={checked}
      value={value}
      disabled={disabled}
      color="primary"
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
    />
  );
};

function FormRadioItem({
  classes,
  checked,
  disabled,
  item,
  name,
  onSelect,
}: propTypes) {
  const { id, value, text } = { ...item };
  const { label, root } = { ...classes };

  return item && isValidItem(item) ? (
    <FormControlLabel
      data-quid={`RadioItem-${id}`}
      className={cx('Radio', root, {
        [classes.selected]: checked,
      })}
      classes={{
        label,
      }}
      control={
        <Field
          id={id}
          name={name}
          type="radio"
          checked={checked}
          disabled={disabled}
          color="primary"
          value={value}
          onChange={() => onSelect(item)}
          render={fieldProps => <Radio props={fieldProps} />}
        />
      }
      label={text}
    />
  ) : null;
}

FormRadioItem.defaultProps = {
  checked: false,
  disabled: false,
};

export default withStyles(styleClasses, { index: 0, withTheme: true })(
  FormRadioItem
);
