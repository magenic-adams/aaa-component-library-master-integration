import React from 'react';
import { withStyles } from '@material-ui/styles';
import invariant from 'tiny-invariant';

// Material Components
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

interface selectItem {
  id: string | number,
  value: string | number,
  display?: string | number,
  selected?: boolean,
  disabled?: boolean,
}

interface RequiredProps {
  item: selectItem,
  onSelect: (item:selectItem) => void
}

interface OptionalProps {
  classes?: any,
}

const styleClasses = (theme:any): {
  // CSS Classes
  root: any,
  gutters: any,
  divider: any,
  primary: any,
} => ({
  root: {
    height: 48,
    background: theme.secondaryPalette.colorVariables.TRANSPARENT,
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
  primary: {
    fontSize: 18,
    letterSpacing: 'normal',
    fontStretch: 'normal',
    lineHeight: 1.5,
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: 16,
    },
  },
});

function isValid(id?:string|number, display?:string|number) {
  if (!id && !display) {
    invariant(false, 'id and display should have value.');
  }
  if (!(typeof display === 'string' || typeof display === 'number')) {
    invariant(false, 'Invalid display type. It must be string or number');
  }
  return true;
}

const SelectListItemText:React.FunctionComponent<RequiredProps & OptionalProps> = ({
  classes,
  item,
  onSelect,
}) => {
  const { display, id } = item;
  const { divider, gutters, primary, root } = classes;

  return isValid(id, display) ? (
    <ListItem
      data-quid={`SelectListItem-${id}`}
      classes={{ root, divider, gutters }}
      divider
      selected={item.selected}
      onClick={() => onSelect(item)}
    >
      <ListItemText classes={{ primary }} primary={display} />
    </ListItem>
  ) : null;
}

export default withStyles(styleClasses, { withTheme: true })(
  SelectListItemText
);
