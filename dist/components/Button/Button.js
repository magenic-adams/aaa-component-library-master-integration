"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _styles = require("@material-ui/styles");

var _core = require("@material-ui/core");

var _lodash = require("lodash");

var _clsx = _interopRequireDefault(require("clsx"));

var _SvgIcon = _interopRequireDefault(require("../SvgIcon/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultProps = {
  color: 'primary',
  className: '',
  disabled: false,
  fadeUp: false,
  isIconButton: false,
  href: '',
  type: 'button'
};
var buttonOverridesDefault = {};
var styleClasses = (0, _core.makeStyles)(theme => {
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
      width: 314,
      '&:disabled': {
        cursor: 'not-allowed'
      }
    },
    label: {
      lineHeight: '48px',
      height: '100%',
      fontSize: 18,
      '-webkit-font-smoothing': 'antialiased',
      [theme.breakpoints.down('sm')]: {
        fontSize: 16,
        fontWeight: 700
      }
    },
    containedPrimary: _objectSpread({}, theme.typographyElements.buttonPrimary, {
      background: theme.palette.primary.main,
      '&:active,&:hover': {
        background: theme.palette.primary.dark,
        boxShadow: 'unset'
      },
      '&:disabled': {
        background: theme.secondaryPalette.disabled.main,
        color: theme.secondaryPalette.colorVariables.WHITE
      }
    }),
    containedSecondary: props => _objectSpread({}, theme.typographyElements.buttonSecondary, {
      color: (0, _lodash.get)(props, 'activeColor', theme.palette.primary.main),
      border: '1px solid',
      borderColor: theme.palette.primary.main,
      background: (0, _lodash.get)(props, 'background', theme.secondaryPalette.colorVariables.TRANSPARENT),
      [theme.breakpoints.down('sm')]: {
        background: theme.secondaryPalette.colorVariables.SECONDARY_HOVER,
        color: theme.palette.primary.main
      },
      '&:active,&:hover': {
        background: theme.secondaryPalette.colorVariables.SECONDARY_HOVER,
        boxShadow: 'unset'
      },
      '&:disabled': {
        background: theme.secondaryPalette.colorVariables.TRANSPARENT,
        borderColor: theme.secondaryPalette.disabled.main
      },
      fontWeight: theme.typographyValues.fontWeight,
      borderRightStyle: (0, _lodash.get)(props, 'borderRightStyle', 'solid')
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
      backgroundColor: theme.secondaryPalette.colorVariables.WHITE,
      '&:active,&:hover': {
        borderWidth: 1,
        backgroundColor: theme.secondaryPalette.colorVariables.SECONDARY_HOVER,
        borderColor: theme.secondaryPalette.colorVariables.DARKER_BLUE,
        '& svg': {
          color: theme.palette.primary.main
        }
      },
      '&:disabled': {
        background: theme.secondaryPalette.disabled.main,
        border: "none",
        '&:hover': {
          backgroundColor: theme.secondaryPalette.disabled.main
        },
        '& svg': {
          color: theme.secondaryPalette.colorVariables.GRAY
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
});

var Button = props => {
  var {
    children,
    className,
    color,
    disabled,
    fadeUp,
    forwardedRef,
    href,
    id,
    type,
    onClick,
    isIconButton,
    leftIcon,
    overrides = buttonOverridesDefault
  } = props;
  var classes = styleClasses(overrides);
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
  }, leftIcon && _react.default.createElement(_SvgIcon.default, {
    className: (0, _clsx.default)('leftIcon'),
    id: "button-icon",
    svgIcon: leftIcon
  }), children);
};

Button.defaultProps = defaultProps;

var _default = (0, _styles.withTheme)(Button);

exports.default = _default;