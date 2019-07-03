"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _styles = require("@material-ui/styles");

var _Label = _interopRequireDefault(require("../Label/Label"));

var _RadioItem = _interopRequireDefault(require("../RadioItem/RadioItem"));

var _SelectList = _interopRequireDefault(require("../SelectList/SelectList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const defaultProps = {
  type: '',
  instructionLabel: '',
  selectedId: '',
  selectedIds: [],
  disableAll: false,
  disabledIds: []
};

const styleClasses = theme => ({
  root: {
    border: 'none',
    boxShadow: 'none',
    marginTop: 16,
    '& li': {
      border: 'none',
      padding: 0,
      marginBottom: 4,
      '&:active,&:hover': {
        background: 'none'
      },
      [theme.breakpoints.up('md')]: {
        width: 534
      }
    }
  },
  [theme.breakpoints.up('md')]: {
    width: 534
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%'
  }
});

function isInArray(ids, id) {
  if (Array.isArray(ids)) {
    for (let i = 0; i < ids.length; i += 1) {
      if (ids[i] === id) return true;
    }
  }

  return false;
}

function isSelected(type, id, selectedId, selectedIds) {
  if (type === 'multi-select') {
    return isInArray(selectedIds, id);
  }

  return id === selectedId;
}

function constructDisplayItems(id, type, items, selectedId, selectedIds, disableAll, disabledIds, _onSelect) {
  return Array.isArray(items) && items.map(item => {
    const checked = isSelected(type, item.id, selectedId, selectedIds);
    const disabled = !!disableAll || isInArray(disabledIds, item.id);
    return _objectSpread({}, item, {
      key: "RadioItem-".concat(item.id),
      display: _react.default.createElement(_RadioItem.default, {
        name: id,
        item: item,
        checked: checked,
        disabled: disabled,
        onSelect: () => typeof _onSelect === 'function' ? _onSelect(item) : null
      })
    });
  });
}

const RadioGroup = (_ref) => {
  let {
    classes,
    disableAll,
    disabledIds,
    id,
    items,
    instructionLabel,
    selectedId,
    selectedIds,
    type,
    onSelect: _onSelect2
  } = _ref;
  const newItems = constructDisplayItems(id, type, items, selectedId, selectedIds, disableAll, disabledIds, _onSelect2);
  return _react.default.createElement(_react.Fragment, null, instructionLabel && _react.default.createElement(_Label.default, {
    disabled: false,
    id: id,
    focused: false
  }, instructionLabel), _react.default.createElement(_SelectList.default, {
    className: (0, _clsx.default)('RadioGroup', classes.root),
    items: newItems,
    onSelect: () => _onSelect2
  }));
};

RadioGroup.defaultProps = defaultProps;

var _default = (0, _styles.withStyles)(styleClasses, {
  index: 0,
  withTheme: true
})(RadioGroup);

exports.default = _default;