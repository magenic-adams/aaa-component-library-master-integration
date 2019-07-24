"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleClasses = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styleClasses = theme => ({
  root: {
    borderRadius: 4
  },
  formControlStyle: {
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 534
    }
  },
  select: {
    '&:focus': {
      border: 0,
      background: 'none'
    }
  },
  selectMenu: _objectSpread({
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 8,
    paddingRight: 8
  }, theme.typography.body1),
  icon: {
    color: theme.palette.primary.main,
    fontSize: 32,
    top: 'calc(50% - 15px)'
  },
  disabledIcon: {
    color: theme.secondaryPalette.colorVariables.GRAY,
    fontSize: 32,
    top: 'calc(50% - 15px)'
  },
  disabled: {
    background: theme.secondaryPalette.disabled.main,
    boxShadow: 'none',
    '&:hover': {
      boxShadow: 'none'
    }
  },
  input: {
    height: 48,
    border: 0,
    borderRadius: 4,
    background: theme.secondaryPalette.colorVariables.WHITE,
    alignItems: 'initial',
    boxShadow: "inset 0 0 0 1px ".concat(theme.secondaryPalette.colorVariables.GRAY),
    '&:hover': {
      boxShadow: "inset 0 0 0 1px ".concat(theme.secondaryPalette.colorVariables.DARKER_BLUE)
    },
    '&.Mui-disabled': {
      boxShadow: 'none'
    },
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 534
    }
  },
  error: {
    boxShadow: "inset 0 0 0 2px ".concat(theme.palette.error.main),
    '&$focused': {
      boxShadow: "inset 0 0 0 2px ".concat(theme.palette.error.main)
    }
  },
  focused: {
    border: 0,
    borderRadius: 4,
    background: theme.secondaryPalette.colorVariables.WHITE,
    boxShadow: "inset 0 0 0 2px ".concat(theme.secondaryPalette.colorVariables.DARKER_BLUE)
  },
  dropdown: {
    marginTop: 4,
    left: 0,
    border: "2px solid ".concat(theme.secondaryPalette.colorVariables.DARKER_BLUE),
    boxShadow: "0 2px 8px 0 ".concat(theme.secondaryPalette.colorVariables.GRAY),
    '& ul': {
      padding: 0
    },
    '& li:last-child': {
      borderBottom: 'none'
    },
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 534
    }
  },
  displayNone: {
    display: 'none'
  }
});

exports.styleClasses = styleClasses;