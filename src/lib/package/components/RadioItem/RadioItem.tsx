import React from 'react';
import cx from 'clsx';
import invariant from 'tiny-invariant';

// Material UI
import { withStyles } from '@material-ui/styles';
import MUIRadio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';

// import { Field } from 'react-final-form';
import { Theme } from '@material-ui/core';

// Types
import SelectItem from '../../types/SelectItem';

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
  theme: Theme
): { root: any; selected: any; disabled: any; label: any } => ({
  root: {
    width: 534,
    height: 48,
    borderRadius: 4,
    border: 0,
    background: theme.secondaryPalette.colorVariables.WHITE,
    boxShadow: `inset 0 0 0 1px ${theme.secondaryPalette.colorVariables.BLACK}`,
    margin: '0px 0px 8px 0px',
    '&:hover': {
      background: theme.secondaryPalette.colorVariables.SECONDARY_HOVER,
    },
    '&.Mui-disabled, &.Mui-disabled:hover': {
      boxShadow: `inset 0 0 0 2px ${theme.secondaryPalette.disabled.main}`,
      background: 'none',
    },
    [theme.breakpoints.up('md')]: {
      width: 534,
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  selected: {
    border: 0,
    boxShadow: `inset 0 0 0 2px ${
      theme.secondaryPalette.colorVariables.DARKER_BLUE
    }`,
    fontWeight: 500,
    background: theme.secondaryPalette.colorVariables.SECONDARY_HOVER,
    '&.Mui-disabled, &.Mui-disabled:hover': {
      boxShadow: `inset 0 0 0 2px ${theme.secondaryPalette.disabled.main}`,
      background: 'none',
    },
  },
  label: {
    fontFamily: theme.typography.fontFamily,
    fontSize: 16,
    paddingRight: 16,
  },
  disabled: {
    boxShadow: `inset 0 0 0 1px ${theme.secondaryPalette.disabled.main}`,
    background: 'none',
  },
});

function checkValidity(item: SelectItem) {
  if (!item) {
    invariant(false, 'You have not passed an item for rendering.');
  }
  if (!item.id && !item.value) {
    invariant(false, 'id and value are empty.');
  }
}

const Radio = (props: any) => {
  const { itemId, checked, disabled, value, onChange }: any = { ...props };
  return (
    <MUIRadio
      key={itemId}
      name={itemId}
      checked={checked}
      value={value}
      disabled={disabled}
      color="primary"
      onChange={onChange}
    />
  );
};

const RadioItem: React.FunctionComponent<RequiredProps & OptionalProps> = ({
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
          [classes.disabled]: disabled,
        })}
        classes={{
          label: classes.label,
        }}
        control={
          <Radio
            itemId={item.id}
            name={name}
            type="radio"
            checked={checked}
            disabled={disabled}
            color="primary"
            value={item.value}
            onChange={() => onSelect(item)}
          />
        }
        label={item.display}
      />
    )
  );
};

RadioItem.defaultProps = defaultProps;

export default withStyles(styleClasses, { index: 0, withTheme: true })(
  RadioItem
);
