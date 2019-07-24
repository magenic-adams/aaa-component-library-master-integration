"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _tinyInvariant = _interopRequireDefault(require("tiny-invariant"));

var _clsx = _interopRequireDefault(require("clsx"));

var _styles = require("@material-ui/styles");

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _Input = _interopRequireDefault(require("@material-ui/core/Input"));

var _Select = _interopRequireDefault(require("@material-ui/core/Select"));

var _Label = _interopRequireDefault(require("../Label/Label"));

var _SelectListItem = _interopRequireDefault(require("../SelectListItem/SelectListItem"));

var _FormFieldMeta = _interopRequireDefault(require("../Form/FormFieldMeta/FormFieldMeta"));

var _SelectDropdownStyles = require("../SelectDropdown/SelectDropdownStyles");

var _noop = _interopRequireDefault(require("../../utilities/noop"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function areItemKeysPresent(items) {
  return items.every(item => item.hasOwnProperty('id') && item.hasOwnProperty('value') && item.hasOwnProperty('display'));
}

function checkValidity(items) {
  if (!Array.isArray(items) || items.length === 0) {
    (0, _tinyInvariant.default)(false, 'items is empty');
  }

  if (!areItemKeysPresent(items)) {
    (0, _tinyInvariant.default)(false, 'Invalid object keys are present. Keys should contain id, value and display');
  }
}

class SelectDropdown extends _react.default.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "dropdownRef", _react.default.createRef());

    _defineProperty(this, "boundingClientRect", void 0);

    this.setBoundingClientRec();
    this.state = {
      openListItems: SelectDropdown.default.openListItems,
      openDownward: SelectDropdown.default.openDownward
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
    var {
      dropdownRef
    } = this;
    this.boundingClientRect = dropdownRef.current != null ? dropdownRef.current.getBoundingClientRect() : _objectSpread({}, SelectDropdown.defaultBoundingClientRec);
  }

  openListDownward(boundingClientRect) {
    var elementViewPortPercentage = boundingClientRect != null ? boundingClientRect.bottom / window.innerHeight * 100 : 0;
    return elementViewPortPercentage < 50;
  }

  updateListItemPosition() {
    this.setBoundingClientRec();
    this.handleListItemPosition(this.boundingClientRect);
    this.handleOpen(false);
  }

  handleListItemPosition(boundingClientRect) {
    var isOpenDownward = this.openListDownward(boundingClientRect);
    this.setState({
      openDownward: isOpenDownward
    });
  }

  handleOpen(open) {
    this.setBoundingClientRec();
    this.setState({
      openListItems: open
    });
  }

  handleClick() {
    var {
      openListItems
    } = this.state;
    var {
      disabled
    } = this.props;
    return !disabled ? this.handleOpen(!openListItems) : _noop.default;
  }

  render() {
    var {
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
      onChange
    } = this.props;
    var {
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
      selectMenu
    } = classes;
    var placeHolderItem = {
      id: -1,
      value: '',
      display: placeHolder
    };
    checkValidity(items);
    var {
      boundingClientRect
    } = this;
    var {
      openDownward,
      openListItems
    } = this.state;
    return _react.default.createElement(_FormControl.default, {
      error: !!error,
      disabled: disabled,
      className: (0, _clsx.default)(formControlStyle, formControlClass)
    }, label && _react.default.createElement(_Label.default, {
      id: id,
      error: error
    }, label), _react.default.createElement(_Select.default, {
      autoWidth: true,
      displayEmpty: true,
      classes: {
        root,
        select,
        selectMenu,
        icon: disabled ? disabledIcon : icon,
        disabled: disabledClass
      },
      value: value,
      "data-quid": "SelectDropdown-".concat(id),
      disabled: disabled,
      onChange: onChange,
      onClick: () => this.handleClick(),
      input: _react.default.createElement(_Input.default, {
        id: id,
        name: id,
        classes: {
          root: input,
          focused: focused,
          error: errorClass,
          disabled: disabledClass
        },
        disabled: disabled,
        disableUnderline: true
      }),
      ref: this.dropdownRef // The props and classes passed down to the MUI Menu popover component
      // Refer to material ui popover for details https://material-ui.com/api/popover/
      ,
      MenuProps: {
        getContentAnchorEl: null,
        anchorReference: 'anchorPosition',
        anchorPosition: {
          top: openDownward ? boundingClientRect.bottom : boundingClientRect.top - 8,
          left: boundingClientRect.left
        },
        anchorOrigin: {
          vertical: openDownward ? 'top' : 'bottom',
          horizontal: 'left'
        },
        transformOrigin: {
          vertical: openDownward ? 'top' : 'bottom',
          horizontal: 'left'
        },
        classes: {
          paper: dropdown
        },
        open: openListItems
      }
    }, placeHolder && _react.default.createElement(_SelectListItem.default, {
      key: placeHolderItem.id,
      value: placeHolderItem.value,
      item: placeHolderItem,
      tabIndex: -1,
      onSelect: () => placeHolderItem,
      disabled: true,
      className: classes.displayNone
    }, placeHolder), items.map((item, index) => {
      return item.display && _react.default.createElement(_SelectListItem.default, {
        key: item.id,
        item: item,
        value: item.value // Direct children of MUI Select should have value prop
        ,
        tabIndex: index,
        disabled: disabled,
        onSelect: () => item
      }, item.display);
    })), _react.default.createElement(_FormFieldMeta.default, {
      disableWarning: disableWarning,
      error: error,
      helperText: helperText,
      id: id
    }));
  }

}

_defineProperty(SelectDropdown, "defaultProps", {
  error: '',
  disabled: false,
  disableWarning: false,
  formControlClass: '',
  helperText: '',
  label: '',
  placeHolder: ''
});

_defineProperty(SelectDropdown, "default", {
  openListItems: false,
  openDownward: true
});

_defineProperty(SelectDropdown, "defaultBoundingClientRec", {
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  height: 0,
  width: 0,
  x: 0,
  y: 0
});

var _default = (0, _styles.withStyles)(_SelectDropdownStyles.styleClasses, {
  index: 0,
  withTheme: true
})(SelectDropdown);

exports.default = _default;