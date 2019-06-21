import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import invariant from 'tiny-invariant';

// Material UI
import { withStyles } from '@material-ui/styles';
import MUIRadio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { Field } from 'react-final-form';
import { Theme } from '@material-ui/core';

// Types
import SelectItem from '../../../types/SelectItem';

interface RequiredProps {
  name: string;
  item: SelectItem;
  onSelect: (item: SelectItem) => void;
}

interface OptionalProps {
  classes?: any; // MUI Decorator
  className?: string;
  checked?: boolean;
  disabled?: boolean;
}

const defaultProps: OptionalProps = {
  className: '',
  checked: false,
  disabled: false,
};

const styleClasses = (
  theme: Theme,
): { root: any; selected: any; label: any } => ({
  root: {
    width: 534,
    height: 48,
    borderRadius: 4,
    border: `1px solid ${theme.secondaryPalette.colorVariables.BLACK}`,
    background: theme.secondaryPalette.colorVariables.WHITE,
    margin: '0px 0px 8px 0px',
    '&:hover': {
      background: theme.secondaryPalette.colorVariables.SECONDARY_HOVER,
    },
    '&.Mui-disabled, &.Mui-disabled:hover': {
      borderColor: theme.secondaryPalette.disabled.main,
      background: 'none',
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: 534,
    },
    [theme.breakpoints.up('sm')]: {
      width: '100%',
    },
  },
  selected: {
    border: `2px solid ${theme.secondaryPalette.colorVariables.DARKER_BLUE}`,
    fontWeight: 500,
    background: theme.secondaryPalette.colorVariables.SECONDARY_HOVER,
    '&.Mui-disabled, &.Mui-disabled:hover': {
      borderColor: theme.secondaryPalette.disabled.main,
      background: 'none',
    },
  },
  label: {
    fontFamily: theme.typography.fontFamily,
    fontSize: 16,
    paddingRight: 16,
  },
});

function checkValidity(item: SelectItem) {
  if (!item) {
    invariant(false, 'You have not passed an item for rendering.');
  } else {
    if (!item.id && !item.value) {
      invariant(false, 'id and value are empty.');
    }
  }
}

const Radio = (fieldProps: any) => {
  const {
    id,
    input: { name, value, onBlur, onFocus },
    checked,
    disabled,
    onChange,
  }: any = { ...fieldProps };
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

const FormRadioItem: React.FunctionComponent<RequiredProps & OptionalProps> = ({
  classes,
  checked,
  disabled,
  item,
  name,
  onSelect,
}) => {
  checkValidity(item);

  return (
    !!item && (
      <FormControlLabel
        data-quid={`RadioItem-${item.id}`}
        className={cx('Radio', classes.root, {
          [classes.selected]: checked,
        })}
        classes={{
          label: classes.label,
        }}
        control={
          <Field
            id={item.id}
            name={name}
            type="radio"
            checked={checked}
            disabled={disabled}
            color="primary"
            value={item.value}
            onChange={() => onSelect(item)}
            component={Radio}
          />
        }
        label={item.text}
      />
    )
  );
};

FormRadioItem.defaultProps = defaultProps;

export default withStyles(styleClasses, { index: 0, withTheme: true })(
  FormRadioItem,
);
