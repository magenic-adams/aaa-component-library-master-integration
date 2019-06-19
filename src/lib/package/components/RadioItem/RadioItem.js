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
    width: theme.common.ELEMENT_PANEL_WIDTH_MOBILE,
    height: theme.common.ELEMENT_PANEL_HEIGHT,
    borderRadius: theme.common.ELEMENT_BORDER_RADIUS,
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
    [theme.breakpoints.down('md')]: {
      width: theme.common.ELEMENT_PANEL_WIDTH_TABLET,
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
    classes: { root },
    input: { name, onBlur, onFocus },
    checked,
    value,
    onChange,
  } = props;
  return (
    <MUIRadio
      onChange={onChange}
      classes={{ root }}
      name={name}
      onBlur={onBlur}
      onFocus={onFocus}
      checked={checked}
      value={value}
      color="primary"
    />
  );
};

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
      data-quid={`RadioItem-${id}`}
      className={cx('Radio', root, {
        [classes.selected]: checked,
      })}
      classes={{
        label,
      }}
      value={value}
      disabled={disabled}
      onChange={() => onSelect(item)}
      control={
        <Field
          name={name}
          key={`RadioItem-${id}`}
          classes={{
            root: radio,
          }}
          disabled={disabled}
          checked={checked}
          color="primary"
          item={item}
          onChange={() => onSelect(item)}
          render={fieldProps => <Radio props={fieldProps} />}
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
