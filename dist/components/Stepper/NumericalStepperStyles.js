"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleClasses = exports.overrideStepperLabel = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _styles = require("@material-ui/styles");

var _cssConstants = require("../../constants/cssConstants");

var _error;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// If overrides need to be passed down to child components
// extract it into a method so makeStyles dynamic class naming
// will not be used.
var overrideStepperLabel = function overrideStepperLabel(props) {
  return {
    label: _defineProperty({
      color: _lodash["default"].get(props, 'overrides.label.color', props.theme.secondaryPalette.colorVariables.BLACK),
      marginTop: 8,
      fontSize: 16
    }, props.theme.breakpoints.up('md'), {
      fontSize: 18
    })
  };
}; // IF the style is part of Material UI API keep it inside styleClasses


exports.overrideStepperLabel = overrideStepperLabel;
var styleClasses = (0, _styles.makeStyles)({
  stepperInputWrapper: {
    display: 'inline-block',
    width: 78
  },
  stepperIcon: {
    width: 24,
    height: '100%',
    color: function color(props) {
      return props.theme.palette.primary.main;
    }
  },
  actionWrapper: {
    margin: '16px 0 6px 0'
  },
  helperText: {
    color: function color(props) {
      return props.theme.secondaryPalette.colorVariables.GRAY;
    },
    marginTop: 8,
    '& span': _defineProperty({
      fontSize: 14
    }, function (props) {
      return props.theme.breakpoints.up('md');
    }, {
      fontSize: 16
    })
  },
  error: (_error = {
    color: function color(props) {
      return props.theme.palette.error.main;
    },
    fontSize: 14
  }, _defineProperty(_error, function (props) {
    return props.theme.breakpoints.up('md');
  }, {
    fontSize: '16px'
  }), _defineProperty(_error, '& svg', {
    display: "".concat(_cssConstants.AAA_CSS_INLINE),
    fontSize: 20,
    marginLeft: 8,
    marginRight: 8,
    verticalAlign: "".concat(_cssConstants.AAA_CSS_MIDDLE)
  }), _error)
});
exports.styleClasses = styleClasses;