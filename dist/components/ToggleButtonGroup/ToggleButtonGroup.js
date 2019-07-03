"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styles = require("@material-ui/styles");

var _tinyInvariant = _interopRequireDefault(require("tiny-invariant"));

var _clsx = _interopRequireDefault(require("clsx"));

var _Button = _interopRequireDefault(require("../Button/Button"));

var _ButtonGroup = _interopRequireDefault(require("../ButtonGroup/ButtonGroup"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultProps = {
  className: '',
  disabled: false,
  value: ''
};

var styleClasses = function styleClasses(theme) {
  return {
    root: _defineProperty({
      display: 'flex',
      '& .Button': {
        width: '157px',
        height: '48px',
        '& span': {
          fontSize: '18px'
        }
      }
    }, theme.breakpoints.down('sm'), {
      '& .Button': {
        width: '50%',
        '& span': {
          fontSize: '16px !important',
          fontWeight: '700 !important'
        },
        '&:hover': {
          background: theme.secondaryPalette.colorVariables.SECONDARY_HOVER
        }
      }
    }),
    left: {
      borderTopRightRadius: '0px',
      borderBottomRightRadius: '0px',
      borderRightStyle: 'none !important'
    },
    right: {
      borderTopLeftRadius: '0px',
      borderBottomLeftRadius: '0px'
    },
    active: _defineProperty({
      background: "".concat(theme.palette.primary.dark, " !important"),
      color: "".concat(theme.secondaryPalette.colorVariables.WHITE, " !important"),
      '&:hover': {
        background: theme.palette.primary.dark
      }
    }, theme.breakpoints.down('sm'), {
      background: "".concat(theme.secondaryPalette.colorVariables.SECONDARY_HOVER, " !important"),
      color: "".concat(theme.palette.primary.main, " !important"),
      '&:hover': {
        background: theme.secondaryPalette.colorVariables.SECONDARY_HOVER
      }
    })
  };
};
/**
 * Propagates value selected to parent callback
 * @param  {String|Number} option - value passed
 * @param  {Function} onSelect
 * @return {void}
 */


function handleClick(opt, onSelect) {
  onSelect(opt);
}
/**
 * Checks to see if correct option keys are present
 * @param  {Array} options
 * @return {Boolean} isOptionsKeyPresent?
 */


function isOptionsKeysPresent(options) {
  return options.every(function (op) {
    return op.id && op.text;
  });
}
/**
 * Returns the active CSS class if active
 * @param  {String|Number} value - current value
 * @param  {String|Number} id
 * @param  {Object} classes - css classes
 * @return {String} activeClass
 */


function getActiveClass(value, id, classes) {
  var active = classes.active;
  return value === id ? "".concat(active) : '';
}
/**
 * Returns if the options are valid or not
 * @param  {Array} options - passed options
 * @return {Boolean} areOptionsValid
 */


function areOptionsValid(options) {
  if (!Array.isArray(options) || options.length < 2) {
    (0, _tinyInvariant["default"])(false, 'Invalid length of options. You must passed maximum number of two options');
  }

  if (!isOptionsKeysPresent(options)) {
    (0, _tinyInvariant["default"])(false, 'Invalid object keys are present. Keys should contain id and text');
  }

  return true;
}

var ToggleButtonGroup = function ToggleButtonGroup(_ref) {
  var classes = _ref.classes,
      className = _ref.className,
      disabled = _ref.disabled,
      options = _ref.options,
      value = _ref.value,
      onSelect = _ref.onSelect;
  return _react["default"].createElement(_react.Fragment, null, areOptionsValid(options) ? _react["default"].createElement(_ButtonGroup["default"], {
    className: (0, _clsx["default"])(classes.root, className)
  }, _react["default"].createElement(_Button["default"], {
    className: (0, _clsx["default"])("".concat(getActiveClass(value, options[0].id, classes), " ").concat(classes.left), className),
    color: "secondary",
    id: "ToggleButton-".concat(options[0].id),
    disabled: disabled,
    onClick: function onClick() {
      return handleClick(options[0], onSelect);
    }
  }, options[0].text), _react["default"].createElement(_Button["default"], {
    className: (0, _clsx["default"])("".concat(getActiveClass(value, options[1].id, classes), " ").concat(classes.right), className),
    color: "secondary",
    id: "ToggleButton-".concat(options[1].id),
    disabled: disabled,
    onClick: function onClick() {
      return handleClick(options[1], onSelect);
    }
  }, options[1].text)) : null);
};

ToggleButtonGroup.defaultProps = defaultProps;

var _default = (0, _styles.withStyles)(styleClasses, {
  index: 0,
  withTheme: true
})(ToggleButtonGroup);

exports["default"] = _default;