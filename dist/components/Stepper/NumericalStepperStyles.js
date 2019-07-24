"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@material-ui/core");

var _lodash = require("lodash");

var _cssConstants = require("../../constants/cssConstants.js");

var styleClasses = (0, _core.makeStyles)(theme => {
  return {
    stepperInputWrapper: props => ({
      display: 'inline-block',
      width: (0, _lodash.get)(props, 'stepperInputWidth', 78)
    }),
    stepperIcon: {
      width: 24,
      height: '100%',
      color: theme.palette.primary.main
    },
    actionWrapper: {
      margin: '16px 0 6px 0'
    },
    error: {
      color: theme.palette.error.main,
      fontSize: 14,
      [theme.breakpoints.up('md')]: {
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
  };
});
var _default = styleClasses;
exports.default = _default;