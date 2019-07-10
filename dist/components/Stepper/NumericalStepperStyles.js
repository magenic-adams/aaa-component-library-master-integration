"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleClasses = exports.overrideStepperLabel = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _styles = require("@material-ui/styles");

var _cssConstants = require("../../constants/cssConstants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// If overrides need to be passed down to child components
// extract it into a method so makeStyles dynamic class naming
// will not be used.
const overrideStepperLabel = props => {
  return {
    label: {
      color: _lodash.default.get(props, 'overrides.label.color', props.theme.secondaryPalette.colorVariables.BLACK),
      marginTop: 8,
      fontSize: 16,
      [props.theme.breakpoints.up('md')]: {
        fontSize: 18
      }
    }
  };
}; // IF the style is part of Material UI API keep it inside styleClasses


exports.overrideStepperLabel = overrideStepperLabel;
const styleClasses = (0, _styles.makeStyles)({
  stepperInputWrapper: {
    display: 'inline-block',
    width: 78
  },
  stepperIcon: {
    width: 24,
    height: '100%',
    color: props => props.theme.palette.primary.main
  },
  actionWrapper: {
    margin: '16px 0 6px 0'
  },
  helperText: {
    color: props => props.theme.secondaryPalette.colorVariables.GRAY,
    marginTop: 8,
    '& span': {
      fontSize: 14,
      [props => props.theme.breakpoints.up('md')]: {
        fontSize: 16
      }
    }
  },
  error: {
    color: props => props.theme.palette.error.main,
    fontSize: 14,
    [props => props.theme.breakpoints.up('md')]: {
      fontSize: '16px'
    },
    '& svg': {
      display: "".concat(_cssConstants.ACE_CSS_INLINE),
      fontSize: 20,
      marginLeft: 8,
      marginRight: 8,
      verticalAlign: "".concat(_cssConstants.ACE_CSS_MIDDLE)
    }
  }
});
exports.styleClasses = styleClasses;