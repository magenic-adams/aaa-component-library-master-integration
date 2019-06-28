import React from 'react';
import invariant from 'tiny-invariant';
import { withStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import ListItem from '@material-ui/core/ListItem';

// Types
import SelectItem from '../../types/SelectItem';

interface RequiredProps {
  item: SelectItem;
  onSelect: (item: SelectItem) => void;
}

interface OptionalProps {
  classes?: any;
}

const styleClasses = (
  theme: Theme
): {
  // CSS Classes
  root: any;
  gutters: any;
  divider: any;
} => ({
  root: {
    height: 48,
    background: theme.secondaryPalette.colorVariables.TRANSPARENT,
    fontSize: 18,
    letterSpacing: 'normal',
    fontStretch: 'normal',
    lineHeight: 1.5,
    fontFamily: theme.typography.fontFamily,
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: 16,
    },
    '&.Mui-selected, &.Mui-selected:hover': {
      backgroundColor: theme.secondaryPalette.colorVariables.SECONDARY_HOVER,
    },
    '&:hover': {
      backgroundColor: theme.secondaryPalette.colorVariables.SECONDARY_HOVER,
    },
  },
  gutters: {
    padding: '0 13px 0 13px',
  },
  divider: {
    borderBottom: `1px solid ${theme.palette.primary.main}`,
    '&:last-child': {
      borderBottom: 'none',
    },
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
> = ({ classes, item, onSelect }) => {
  checkValidity(item);

  const { display, id, value } = item;
  const { divider, gutters, root } = classes;

  return (
    <ListItem
      data-quid={`SelectListItem-${id}`}
      value={value}
      classes={{ root, divider, gutters }}
      divider
      onClick={() => onSelect(item)}
    >
      {display}
    </ListItem>
  );
};

export default withStyles(styleClasses, { index: 0, withTheme: true })(
  SelectListItem
);
