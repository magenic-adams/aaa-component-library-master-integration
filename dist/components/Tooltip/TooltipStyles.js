"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

// Types
var styleClasses = theme => ({
  tooltip: {
    backgroundColor: theme.secondaryPalette.colorVariables.WHITE,
    pointerEvents: 'all',
    color: theme.secondaryPalette.colorVariables.BLACK,
    boxShadow: theme.shadows[1],
    maxWidth: '100%',
    width: 534,
    padding: 0,
    [theme.breakpoints.down('md')]: {
      width: '100%',
      maxWidth: 534
    }
  },
  arrow: {
    position: 'absolute',
    fontSize: 6,
    width: '3em',
    height: '3em',
    '&::before': {
      content: 'unset',
      display: 'block',
      [theme.breakpoints.between('md', 'xl')]: {
        content: '""'
      }
    }
  },
  popper: {
    '&[x-placement*="bottom"] $arrow': {
      top: 5,
      left: 250,
      marginTop: -0.95,
      '&::before': {
        display: 'inline-block',
        borderTop: "20px solid ".concat(theme.secondaryPalette.colorVariables.WHITE),
        boxShadow: "-2px -1px 1px ".concat(theme.secondaryPalette.colorVariables.VERY_LIGHT_GRAY),
        'borderRight': "20px solid ".concat(theme.secondaryPalette.colorVariables.TRANSPARENT),
        '-o-transform': 'rotate(45deg)',
        '-ms-transform': 'rotate(45deg)',
        '-moz-transform': 'rotate(45deg)',
        '-webkit-transform': 'rotate(45deg)'
      }
    },
    '&[x-placement*="bottom-start"] $arrow': {
      top: 5,
      left: 55,
      marginTop: -0.95,
      '&::before': {
        display: 'inline-block',
        borderTop: "20px solid ".concat(theme.secondaryPalette.colorVariables.WHITE),
        boxShadow: "-2px -1px 1px ".concat(theme.secondaryPalette.colorVariables.VERY_LIGHT_GRAY),
        'borderRight': "20px solid ".concat(theme.secondaryPalette.colorVariables.TRANSPARENT),
        '-o-transform': 'rotate(45deg)',
        '-ms-transform': 'rotate(45deg)',
        '-moz-transform': 'rotate(45deg)',
        '-webkit-transform': 'rotate(45deg)'
      }
    },
    '&[x-placement*="bottom-end"] $arrow': {
      top: 5,
      left: 'unset',
      right: 60,
      marginTop: -0.95,
      '&::before': {
        display: 'inline-block',
        borderTop: "20px solid ".concat(theme.secondaryPalette.colorVariables.WHITE),
        boxShadow: "-2px -1px 1px ".concat(theme.secondaryPalette.colorVariables.VERY_LIGHT_GRAY),
        'borderRight': "20px solid ".concat(theme.secondaryPalette.colorVariables.TRANSPARENT),
        '-o-transform': 'rotate(45deg)',
        '-ms-transform': 'rotate(45deg)',
        '-moz-transform': 'rotate(45deg)',
        '-webkit-transform': 'rotate(45deg)'
      },
      tooltipPlacementBottom: {
        transform: 'translateX(52px)'
      }
    },
    '&[x-placement*="top"] $arrow': {
      bottom: 12,
      left: 255,
      marginBottom: '-0.95em',
      '&::before': {
        display: 'inline-block',
        borderTop: "20px solid ".concat(theme.secondaryPalette.colorVariables.TRANSPARENT),
        boxShadow: "2px 3px 1px ".concat(theme.secondaryPalette.colorVariables.VERY_LIGHT_GRAY),
        'borderRight': "20px solid ".concat(theme.secondaryPalette.colorVariables.WHITE),
        '-o-transform': 'rotate(45deg)',
        '-ms-transform': 'rotate(45deg)',
        '-moz-transform': 'rotate(45deg)',
        '-webkit-transform': 'rotate(45deg)'
      },
      [theme.breakpoints.down('md')]: {
        bottom: 12
      }
    },
    '&[x-placement*="top-start"] $arrow': {
      bottom: 12,
      left: 55,
      marginBottom: '-0.95em',
      '&::before': {
        display: 'inline-block',
        borderTop: "20px solid ".concat(theme.secondaryPalette.colorVariables.TRANSPARENT),
        boxShadow: "2px 3px 1px ".concat(theme.secondaryPalette.colorVariables.VERY_LIGHT_GRAY),
        'borderRight': "20px solid ".concat(theme.secondaryPalette.colorVariables.WHITE),
        '-o-transform': 'rotate(45deg)',
        '-ms-transform': 'rotate(45deg)',
        '-moz-transform': 'rotate(45deg)',
        '-webkit-transform': 'rotate(45deg)'
      }
    },
    '&[x-placement*="top-end"] $arrow': {
      bottom: 12,
      left: 'unset',
      right: 60,
      marginBottom: '-0.95em',
      '&::before': {
        display: 'inline-block',
        borderTop: "20px solid ".concat(theme.secondaryPalette.colorVariables.TRANSPARENT),
        boxShadow: "2px 3px 1px ".concat(theme.secondaryPalette.colorVariables.VERY_LIGHT_GRAY),
        'borderRight': "20px solid ".concat(theme.secondaryPalette.colorVariables.WHITE),
        '-o-transform': 'rotate(45deg)',
        '-ms-transform': 'rotate(45deg)',
        '-moz-transform': 'rotate(45deg)',
        '-webkit-transform': 'rotate(45deg)'
      }
    }
  },
  placeholder: {
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16
  },
  tooltipTitle: {
    color: theme.secondaryPalette.colorVariables.BLACK,
    fontSize: 16,
    paddingBottom: 8
  },
  tooltipDescription: {
    color: theme.secondaryPalette.colorVariables.BLACK,
    fontSize: 16,
    paddingBottom: 16,
    fontWeight: 'normal'
  },
  iconStyle: {
    color: theme.palette.primary.main,
    cursor: 'pointer',
    float: 'right',
    fontSize: 40,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 4
  }
});

var _default = styleClasses;
exports.default = _default;