"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _tinyInvariant = _interopRequireDefault(require("tiny-invariant"));

var _styles = require("@material-ui/styles");

var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const styleClasses = theme => ({
  root: {
    height: 48,
    background: theme.secondaryPalette.colorVariables.TRANSPARENT,
    fontSize: 18,
    letterSpacing: 'normal',
    fontStretch: 'normal',
    lineHeight: 1.5,
    fontFamily: theme.typography.fontFamily,
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: 16
    },
    '&.Mui-selected, &.Mui-selected:hover': {
      backgroundColor: theme.secondaryPalette.colorVariables.SECONDARY_HOVER
    },
    '&:hover': {
      backgroundColor: theme.secondaryPalette.colorVariables.SECONDARY_HOVER
    }
  },
  gutters: {
    padding: '0 13px 0 13px'
  },
  divider: {
    borderBottom: "1px solid ".concat(theme.palette.primary.main),
    '&:last-child': {
      borderBottom: 'none'
    }
  }
});

function checkValidity(item) {
  if (!item) {
    (0, _tinyInvariant.default)(false, 'You have not passed an item for rendering.');
  }

  if (!item.id && !item.display) {
    (0, _tinyInvariant.default)(false, 'id and display should have value.');
  }
}

const SelectListItem = (_ref) => {
  let {
    classes,
    item,
    onSelect
  } = _ref;
  checkValidity(item);
  const {
    display,
    id,
    value
  } = item;
  const {
    divider,
    gutters,
    root
  } = classes;
  return _react.default.createElement(_ListItem.default, {
    "data-quid": "SelectListItem-".concat(id),
    value: value,
    classes: {
      root,
      divider,
      gutters
    },
    divider: true,
    onClick: () => onSelect(item)
  }, display);
};

var _default = (0, _styles.withStyles)(styleClasses, {
  index: 0,
  withTheme: true
})(SelectListItem);

exports.default = _default;