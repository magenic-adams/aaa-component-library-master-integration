"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styles = require("@material-ui/styles");

var _tinyInvariant = _interopRequireDefault(require("tiny-invariant"));

var _clsx = _interopRequireDefault(require("clsx"));

var _Button = _interopRequireDefault(require("../Button/Button"));

var _ButtonGroup = _interopRequireDefault(require("../ButtonGroup/ButtonGroup"));

var _colors = require("../../constants/colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// Material UI Components
const defaultProps = {
  className: '',
  disabled: false,
  value: ''
};

const styleClasses = theme => ({
  root: {
    display: 'flex',
    '& .Button': {
      width: '157px',
      height: '48px'
    },
    [theme.breakpoints.down('sm')]: {
      '& .Button': {
        width: '50%',
        '&:hover': {
          background: theme.secondaryPalette.colorVariables.SECONDARY_HOVER
        }
      }
    }
  },
  left: {
    borderTopRightRadius: '0px',
    borderBottomRightRadius: '0px'
  },
  right: {
    borderTopLeftRadius: '0px',
    borderBottomLeftRadius: '0px'
  },
  active: {
    '&:hover': {
      background: theme.palette.primary.dark
    }
  }
});

const leftButtonOverrides = {
  borderRightStyle: 'none',
  activeColor: _colors.ACE_COLOR_MAIN_BLUE
};
const rightButtonOverrides = {
  activeColor: _colors.ACE_COLOR_MAIN_BLUE
};
/**
 * Propagates value selected to parent callback
 * @param  {String|Number} option - value passed
 * @param  {Function} onSelect
 * @return {void}
 */

function handleClick(position, opt, onSelect) {
  if (position === 'left') {
    leftButtonOverrides.activeColor = _colors.ACE_COLOR_MAIN_WHITE;
    leftButtonOverrides.background = _colors.ACE_COLOR_MAIN_BLUE;
    rightButtonOverrides.activeColor = _colors.ACE_COLOR_MAIN_BLUE;
    rightButtonOverrides.background = _colors.ACE_COLOR_TRANSPARENT;
  } else {
    leftButtonOverrides.activeColor = _colors.ACE_COLOR_MAIN_BLUE;
    leftButtonOverrides.background = _colors.ACE_COLOR_TRANSPARENT;
    rightButtonOverrides.activeColor = _colors.ACE_COLOR_MAIN_WHITE;
    rightButtonOverrides.background = _colors.ACE_COLOR_MAIN_BLUE;
  }

  onSelect(opt);
}
/**
 * Checks to see if correct option keys are present
 * @param  {Array} options
 * @return {Boolean} isOptionsKeyPresent?
 */


function isOptionsKeysPresent(options) {
  return options.every(op => op.id && op.text);
}
/**
 * Returns the active CSS class if active
 * @param  {String|Number} value - current value
 * @param  {String|Number} id
 * @param  {Object} classes - css classes
 * @return {String} activeClass
 */


function getActiveClass(value, id, classes) {
  let activeClass = '';
  const {
    active
  } = classes;

  if (value === id) {
    activeClass = "".concat(active);
  }

  return activeClass;
}
/**
 * Returns if the options are valid or not
 * @param  {Array} options - passed options
 * @return {Boolean} areOptionsValid
 */


function areOptionsValid(options) {
  if (!Array.isArray(options) || options.length < 2) {
    (0, _tinyInvariant.default)(false, 'Invalid length of options. You must passed maximum number of two options');
  }

  if (!isOptionsKeysPresent(options)) {
    (0, _tinyInvariant.default)(false, 'Invalid object keys are present. Keys should contain id and text');
  }

  return true;
}

const ToggleButtonGroup = (_ref) => {
  let {
    classes,
    className,
    disabled,
    options,
    value,
    onSelect
  } = _ref;
  return _react.default.createElement(_react.Fragment, null, areOptionsValid(options) ? _react.default.createElement(_ButtonGroup.default, {
    className: (0, _clsx.default)(classes.root, className)
  }, _react.default.createElement(_Button.default, {
    className: (0, _clsx.default)("".concat(getActiveClass(value, options[0].id, classes), " ").concat(classes.left), className),
    color: "secondary",
    id: "ToggleButton-".concat(options[0].id),
    disabled: disabled,
    onClick: () => handleClick('left', options[0], onSelect),
    overrides: leftButtonOverrides
  }, options[0].text), _react.default.createElement(_Button.default, {
    className: (0, _clsx.default)("".concat(getActiveClass(value, options[1].id, classes), " ").concat(classes.right), className),
    color: "secondary",
    id: "ToggleButton-".concat(options[1].id),
    disabled: disabled,
    onClick: () => handleClick('right', options[1], onSelect),
    overrides: rightButtonOverrides
  }, options[1].text)) : null);
};

ToggleButtonGroup.defaultProps = defaultProps;

var _default = (0, _styles.withStyles)(styleClasses, {
  index: 0,
  withTheme: true
})(ToggleButtonGroup);

exports.default = _default;