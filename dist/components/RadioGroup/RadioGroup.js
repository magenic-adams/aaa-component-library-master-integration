"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _styles = require("@material-ui/styles");

var _Label = _interopRequireDefault(require("../Label/Label"));

var _SelectList = _interopRequireDefault(require("../SelectList/SelectList"));

var _ = require("..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultProps = {
  multiSelect: false,
  instructionLabel: '',
  disableAll: false,
  disabledValues: []
};

var styleClasses = theme => ({
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
    },
    '& li > span ': {
      // This is a workaround to disable the ripple button effect on the component.
      // Currently, the MenuItem component don't have exposed prop to disable ripple effect.
      width: 0
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
    for (var i = 0; i < ids.length; i += 1) {
      if (ids[i] === id) return true;
    }
  }

  return false;
}

function isSelected(value, selectedValues) {
  return isInArray(selectedValues, value);
}

function constructDisplayItems(id, items, disableAll, disabledValues, selectedValues, onChange) {
  return Array.isArray(items) && items.map(item => {
    var checked = isSelected(item.value, selectedValues);
    var disabled = !!disableAll || isInArray(disabledValues, item.value);
    return _objectSpread({}, item, {
      key: "RadioItem-".concat(item.id),
      display: _react.default.createElement(_.RadioItem, {
        name: id,
        checked: checked,
        item: item,
        disabled: disabled,
        onChange: onChange
      })
    });
  });
}

var RadioGroup = (_ref) => {
  var {
    classes,
    disableAll,
    disabledValues,
    id,
    items,
    instructionLabel,
    selectedValues,
    onChange
  } = _ref;
  var newItems = constructDisplayItems(id, items, disableAll, disabledValues, selectedValues, onChange);
  return _react.default.createElement(_react.Fragment, null, instructionLabel && _react.default.createElement(_Label.default, {
    disabled: false,
    id: id,
    focused: false
  }, instructionLabel), _react.default.createElement(_SelectList.default, {
    className: (0, _clsx.default)('RadioGroup', classes.root),
    items: newItems,
    onSelect: () => onChange
  }));
};

RadioGroup.defaultProps = defaultProps;

var _default = (0, _styles.withStyles)(styleClasses, {
  index: 0,
  withTheme: true
})(RadioGroup);

exports.default = _default;