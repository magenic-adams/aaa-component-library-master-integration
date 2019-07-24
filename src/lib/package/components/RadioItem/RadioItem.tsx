import React from 'react';
import cx from 'clsx';
import invariant from 'tiny-invariant';

// Material UI
import { withStyles } from '@material-ui/styles';
import MUIRadio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { Theme } from '@material-ui/core';

// Types
import SelectItem from '../../types/SelectItem';

interface RequiredProps {
  name: string;
  item: SelectItem;
  onChange: (item: SelectItem) => void;
}

interface OptionalProps {
  classes?: any; // MUI Decorator
  className?: string;
  checked?: boolean;
  disabled?: boolean;
  selectedValues?: any[];
  onBlur?: (evt: React.SyntheticEvent) => void;
  onFocus?: (evt: React.SyntheticEvent) => void;
}

const defaultProps: OptionalProps = {
  className: '',
  checked: false,
  disabled: false,
  onBlur: () => {},
  onFocus: () => {},
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
    boxShadow: `inset 0 0 0 1px ${theme.secondaryPalette.colorVariables.GRAY}`,
    marginLeft: 0,
    marginRight: 0,
    '&:hover': {
      background: theme.secondaryPalette.colorVariables.SECONDARY_HOVER,
    },
    '&.Mui-disabled, &.Mui-disabled:hover': {
      boxShadow: `inset 0 0 0 2px ${theme.secondaryPalette.disabled.main}`,
      background: 'none',
    },
    '& svg': {
      margin: 2.5,
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
    [theme.breakpoints.down('sm')]: {
      boxShadow: `inset 0 0 0 1px ${
        theme.secondaryPalette.colorVariables.DARKER_BLUE
      }`,
    },
    fontWeight: 500,
    background: theme.secondaryPalette.colorVariables.TRANSPARENT,
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

const RadioItem: React.FunctionComponent<RequiredProps & OptionalProps> = ({
  classes,
  checked,
  disabled,
  item,
  name,
  onChange,
  onBlur,
  onFocus,
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
          <MUIRadio
            key={item.id}
            name={name}
            checked={checked}
            disabled={disabled}
            color="primary"
            value={item.value}
            onChange={() => onChange(item)}
            onBlur={onBlur}
            onFocus={onFocus}
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
