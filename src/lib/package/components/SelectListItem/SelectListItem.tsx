import React from 'react';
import invariant from 'tiny-invariant';
import { withStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import MenuItem from '@material-ui/core/MenuItem';

// Types
import SelectItem from '../../types/SelectItem';

interface RequiredProps {
  item: SelectItem;
  onSelect: (item: SelectItem) => void;
}

interface OptionalProps {
  classes?: any;
  className?: string;
  value?: string | number;
  disabled?: boolean;
  tabIndex: number;
}

const defaultProps: OptionalProps = {
  className: '',
  disabled: false,
  tabIndex: 0,
  value: '',
};

const styleClasses = (
  theme: Theme,
): {
  // CSS Classes
  root: any;
  gutters: any;
} => ({
  root: {
    height: 48,
    background: theme.secondaryPalette.colorVariables.TRANSPARENT,
    fontSize: 18,
    letterSpacing: 'normal',
    fontStretch: 'normal',
    lineHeight: 1.5,
    fontFamily: theme.typography.fontFamily,
    borderBottom: `1px solid ${theme.palette.primary.main}`,
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: 16,
    },
    '& .MuiTouchRipple-root': {
      visibility: 'hidden',
    },
    '&.Mui-selected,&.Mui-selected:hover,&.Mui-focusVisible,&:focus,&:hover': {
      backgroundColor: theme.secondaryPalette.colorVariables.SECONDARY_HOVER,
    },
  },
  gutters: {
    padding: '0 13px 0 13px',
  },
});

function checkValidity(item: {
  id?: string | number;
  display?: string | number;
}): void {
  if (!item) {
    invariant(false, 'You have not passed an item for rendering.');
  }
  if (!item.id && !item.display) {
    invariant(false, 'id and display should have value.');
  }
}

const SelectListItem: React.FunctionComponent<
  RequiredProps & OptionalProps
> = ({ classes, className, disabled, item, onSelect, ...rest }) => {
  checkValidity(item);
  const { id, value, display } = item;
  const { gutters, root } = classes;

  return (
    <MenuItem
      className={className}
      classes={{ root, gutters }}
      data-quid={`SelectListItem-${id}`}
      disabled={disabled}
      divider
      onClick={() => onSelect(item)}
      {...rest}
      value={value}
    >
      {display}
    </MenuItem>
  );
};

SelectListItem.defaultProps = defaultProps;

export default withStyles(styleClasses, { index: 0, withTheme: true })(
  SelectListItem,
);
