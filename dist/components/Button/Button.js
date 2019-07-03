"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _styles = require("@material-ui/styles");

var _clsx = _interopRequireDefault(require("clsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

;
const defaultProps = {
  color: 'primary',
  className: '',
  disabled: false,
  fadeUp: false,
  isIconButton: false,
  href: '',
  type: 'button'
};

const styleClasses = theme => {
  return {
    root: {
      display: 'block',
      border: 0,
      height: 48,
      lineHeight: '48px',
      boxShadow: 'none',
      padding: '0 16px',
      textTransform: 'none',
      marginTop: 0,
      transition: '300ms transform ease-in-out',
      transform: 'translateY(0)',
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: 314
      },
      '&:disabled': {
        cursor: 'not-allowed'
      }
    },
    label: {
      lineHeight: '48px',
      height: '100%',
      fontSize: 18
    },
    containedPrimary: _objectSpread({}, theme.typographyElements.buttonPrimary, {
      background: theme.palette.primary.main,
      '&:active,&:hover': {
        background: theme.palette.primary.dark
      },
      '&:disabled': {
        background: theme.secondaryPalette.disabled.main,
        color: theme.secondaryPalette.colorVariables.WHITE
      }
    }),
    containedSecondary: _objectSpread({}, theme.typographyElements.buttonSecondary, {
      border: '1px solid',
      borderColor: theme.palette.primary.main,
      background: theme.secondaryPalette.colorVariables.TRANSPARENT,
      '&:active,&:hover': {
        background: theme.secondaryPalette.colorVariables.SECONDARY_HOVER
      },
      '&:disabled': {
        background: theme.secondaryPalette.colorVariables.TRANSPARENT,
        borderColor: theme.secondaryPalette.disabled.main
      },
      fontWeight: theme.typographyValues.fontWeight
    }),
    fadeUp: {
      transform: 'translateY(-8px)'
    },
    iconButton: {
      display: 'inline-block',
      verticalAlign: "bottom",
      width: 48,
      height: 48,
      border: "1px solid ".concat(theme.secondaryPalette.colorVariables.GRAY),
      borderRadius: 4,
      backgroundColor: "".concat(theme.secondaryPalette.colorVariables.WHITE),
      '&:active,&:hover': {
        borderWidth: 1,
        backgroundColor: "".concat(theme.secondaryPalette.colorVariables.SECONDARY_HOVER),
        borderColor: "".concat(theme.secondaryPalette.colorVariables.DARKER_BLUE),
        '& svg': {
          color: "".concat(theme.palette.primary.main)
        }
      },
      '&:disabled': {
        background: "".concat(theme.secondaryPalette.disabled.main),
        border: "none",
        '&:hover': {
          backgroundColor: "".concat(theme.secondaryPalette.disabled.main)
        },
        '& svg': {
          color: "".concat(theme.secondaryPalette.colorVariables.GRAY)
        }
      },
      '&:nth-child(n+1)': {
        marginRight: 8
      },
      '&:nth-child(n+2)': {
        marginLeft: 8
      }
    }
  };
};

const Button = (_ref) => {
  let {
    children,
    className,
    classes,
    color,
    disabled,
    fadeUp,
    forwardedRef,
    href,
    id,
    type,
    onClick,
    isIconButton
  } = _ref;
  return _react.default.createElement(_Button.default, {
    className: (0, _clsx.default)('Button', {
      [classes.fadeUp]: fadeUp,
      [classes.iconButton]: isIconButton
    }, className),
    classes: {
      root: classes.root,
      containedPrimary: classes.containedPrimary,
      containedSecondary: classes.containedSecondary,
      label: classes.label
    },
    disabled: disabled,
    disableRipple: true,
    "data-quid": id,
    color: color,
    variant: "contained",
    href: href,
    ref: forwardedRef,
    type: type,
    onClick: onClick
  }, children);
};

Button.defaultProps = defaultProps;

var _default = (0, _styles.withStyles)(styleClasses, {
  index: 0,
  withTheme: true
})(Button);

exports.default = _default;