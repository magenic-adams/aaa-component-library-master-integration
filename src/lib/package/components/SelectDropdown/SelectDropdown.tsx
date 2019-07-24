import React, { ChangeEvent, ReactNode } from 'react';
import invariant from 'tiny-invariant';
import cx from 'clsx';
import { withStyles } from '@material-ui/styles';

import FormControl from '@material-ui/core/FormControl';
import MUIInput from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';

// Components
import Label from '../Label/Label';
import SelectListItem from '../SelectListItem/SelectListItem';
import FormFieldMeta from '../Form/FormFieldMeta/FormFieldMeta';

// Types
import SelectItem from '../../types/SelectItem';

// Style
import { styleClasses } from '../SelectDropdown/SelectDropdownStyles';

// Utilities
import noop from '../../utilities/noop';

interface RequiredProps {
  id: string;
  items: SelectItem[];
  onChange: (
    event: ChangeEvent<{ name?: string | undefined; value: any }>,
    child: ReactNode
  ) => void;
}

interface OptionalProps {
  classes?: any; // MUI Decorator
  error?: string;
  formControlClass?: string;
  helperText?: string;
  label?: string;
  disabled?: boolean;
  disableWarning?: boolean;
  placeHolder?: string;
  value?: string | number;
}

interface States {
  openListItems: boolean;
  openDownward: boolean;
}
function areItemKeysPresent(items: SelectItem[]) {
  return items.every(
    item =>
      item.hasOwnProperty('id') &&
      item.hasOwnProperty('value') &&
      item.hasOwnProperty('display')
  );
}

function checkValidity(items: SelectItem[]) {
  if (!Array.isArray(items) || items.length === 0) {
    invariant(false, 'items is empty');
  }

  if (!areItemKeysPresent(items)) {
    invariant(
      false,
      'Invalid object keys are present. Keys should contain id, value and display'
    );
  }
}

class SelectDropdown extends React.Component<
  RequiredProps & OptionalProps,
  States
> {
  dropdownRef: React.RefObject<any> = React.createRef();
  boundingClientRect: any;

  static defaultProps: OptionalProps = {
    error: '',
    disabled: false,
    disableWarning: false,
    formControlClass: '',
    helperText: '',
    label: '',
    placeHolder: '',
  };

  static default: States = {
    openListItems: false,
    openDownward: true,
  };

  static defaultBoundingClientRec: any = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    height: 0,
    width: 0,
    x: 0,
    y: 0,
  };

  constructor(props: RequiredProps & OptionalProps) {
    super(props);
    this.setBoundingClientRec();
    this.state = {
      openListItems: SelectDropdown.default.openListItems,
      openDownward: SelectDropdown.default.openDownward,
    };
    this.updateListItemPosition = this.updateListItemPosition.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
  }

  componentDidMount() {
    this.updateListItemPosition();
    this.addScrollEventListener();
    this.addResizeEventListener();
  }

  componentWillUnmount() {
    this.removeScrollEventListener();
    this.removeResizeEventListener();
  }

  addScrollEventListener() {
    window.addEventListener('scroll', this.updateListItemPosition);
  }

  addResizeEventListener() {
    window.addEventListener('resize', this.updateListItemPosition);
  }

  removeScrollEventListener() {
    window.removeEventListener('scroll', this.updateListItemPosition);
  }

  removeResizeEventListener() {
    window.removeEventListener('resize', this.updateListItemPosition);
  }

  setBoundingClientRec() {
    const { dropdownRef } = this;
    this.boundingClientRect =
      dropdownRef.current != null
        ? dropdownRef.current.getBoundingClientRect()
        : { ...SelectDropdown.defaultBoundingClientRec };
  }

  openListDownward(boundingClientRect: any) {
    const elementViewPortPercentage =
      boundingClientRect != null
        ? (boundingClientRect.bottom / window.innerHeight) * 100
        : 0;
    return elementViewPortPercentage < 50;
  }

  updateListItemPosition() {
    this.setBoundingClientRec();
    this.handleListItemPosition(this.boundingClientRect);
    this.handleOpen(false);
  }

  handleListItemPosition(boundingClientRect: any) {
    const isOpenDownward = this.openListDownward(boundingClientRect);
    this.setState({
      openDownward: isOpenDownward,
    });
  }

  handleOpen(open: boolean) {
    this.setBoundingClientRec();
    this.setState({
      openListItems: open,
    });
  }

  handleClick() {
    const { openListItems } = this.state;
    const { disabled } = this.props;
    return !disabled ? this.handleOpen(!openListItems) : noop;
  }

  render() {
    const {
      classes,
      disabled,
      disableWarning,
      error,
      formControlClass,
      helperText,
      id,
      items,
      label,
      placeHolder,
      value,
      onChange,
    } = this.props;

    const {
      root,
      icon,
      input,
      focused,
      dropdown,
      disabled: disabledClass,
      disabledIcon,
      error: errorClass,
      formControlStyle,
      select,
      selectMenu,
    }: any = classes;

    const placeHolderItem: SelectItem = {
      id: -1,
      value: '',
      display: placeHolder,
    };

    checkValidity(items);

    const { boundingClientRect } = this;
    const { openDownward, openListItems } = this.state;
    return (
      <FormControl
        error={!!error}
        disabled={disabled}
        className={cx(formControlStyle, formControlClass)}
      >
        {label && (
          <Label id={id} error={error}>
            {label}
          </Label>
        )}
        <Select
          autoWidth
          displayEmpty
          classes={{
            root,
            select,
            selectMenu,
            icon: disabled ? disabledIcon : icon,
            disabled: disabledClass,
          }}
          value={value}
          data-quid={`SelectDropdown-${id}`}
          disabled={disabled}
          onChange={onChange}
          onClick={() => this.handleClick()}
          input={
            <MUIInput
              id={id}
              name={id}
              classes={{
                root: input,
                focused: focused,
                error: errorClass,
                disabled: disabledClass,
              }}
              disabled={disabled}
              disableUnderline
            />
          }
          ref={this.dropdownRef}
          // The props and classes passed down to the MUI Menu popover component
          // Refer to material ui popover for details https://material-ui.com/api/popover/
          MenuProps={{
            getContentAnchorEl: null,
            anchorReference: 'anchorPosition',
            anchorPosition: {
              top: openDownward
                ? boundingClientRect.bottom
                : boundingClientRect.top - 8,
              left: boundingClientRect.left,
            },
            anchorOrigin: {
              vertical: openDownward ? 'top' : 'bottom',
              horizontal: 'left',
            },
            transformOrigin: {
              vertical: openDownward ? 'top' : 'bottom',
              horizontal: 'left',
            },
            classes: { paper: dropdown },
            open: openListItems,
          }}
        >
          {placeHolder && (
            <SelectListItem
              key={placeHolderItem.id}
              value={placeHolderItem.value}
              item={placeHolderItem}
              tabIndex={-1}
              onSelect={() => placeHolderItem}
              disabled
              className={classes.displayNone}
            >
              {placeHolder}
            </SelectListItem>
          )}
          {items.map((item: SelectItem, index: number) => {
            return (
              item.display && (
                <SelectListItem
                  key={item.id}
                  item={item}
                  value={item.value} // Direct children of MUI Select should have value prop
                  tabIndex={index}
                  disabled={disabled}
                  onSelect={() => item}
                >
                  {item.display}
                </SelectListItem>
              )
            );
          })}
        </Select>

        <FormFieldMeta
          disableWarning={disableWarning}
          error={error}
          helperText={helperText}
          id={id}
        />
      </FormControl>
    );
  }
}

export default withStyles(styleClasses, { index: 0, withTheme: true })(
  SelectDropdown
);
