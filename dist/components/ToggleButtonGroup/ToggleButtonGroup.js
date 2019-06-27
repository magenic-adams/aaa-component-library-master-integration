(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@babel/runtime/helpers/esm/defineProperty", "react", "@material-ui/styles", "tiny-invariant", "clsx", "../Button/Button", "../ButtonGroup/ButtonGroup"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@babel/runtime/helpers/esm/defineProperty"), require("react"), require("@material-ui/styles"), require("tiny-invariant"), require("clsx"), require("../Button/Button"), require("../ButtonGroup/ButtonGroup"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.defineProperty, global.react, global.styles, global.tinyInvariant, global.clsx, global.Button, global.ButtonGroup);
    global.undefined = mod.exports;
  }
})(this, function (exports, _defineProperty2, _react, _styles, _tinyInvariant, _clsx, _Button, _ButtonGroup) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _defineProperty3 = _interopRequireDefault(_defineProperty2);

  var _react2 = _interopRequireDefault(_react);

  var _tinyInvariant2 = _interopRequireDefault(_tinyInvariant);

  var _clsx2 = _interopRequireDefault(_clsx);

  var _Button2 = _interopRequireDefault(_Button);

  var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);

  import _interopRequireDefault from "@babel/runtime/helpers/esm/interopRequireDefault";
  // Material UI Components
  var defaultProps = {
    className: '',
    disabled: false,
    value: ''
  };

  var styleClasses = function styleClasses(theme) {
    return {
      root: (0, _defineProperty3.default)({
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
      active: (0, _defineProperty3.default)({
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
      (0, _tinyInvariant2.default)(false, 'Invalid length of options. You must passed maximum number of two options');
    }

    if (!isOptionsKeysPresent(options)) {
      (0, _tinyInvariant2.default)(false, 'Invalid object keys are present. Keys should contain id and text');
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
    return _react2.default.createElement(_react.Fragment, null, areOptionsValid(options) ? _react2.default.createElement(_ButtonGroup2.default, {
      className: (0, _clsx2.default)(classes.root, className)
    }, _react2.default.createElement(_Button2.default, {
      className: (0, _clsx2.default)("".concat(getActiveClass(value, options[0].id, classes), " ").concat(classes.left), className),
      color: "secondary",
      id: "ToggleButton-".concat(options[0].id),
      disabled: disabled,
      onClick: function onClick() {
        return handleClick(options[0], onSelect);
      }
    }, options[0].text), _react2.default.createElement(_Button2.default, {
      className: (0, _clsx2.default)("".concat(getActiveClass(value, options[1].id, classes), " ").concat(classes.right), className),
      color: "secondary",
      id: "ToggleButton-".concat(options[1].id),
      disabled: disabled,
      onClick: function onClick() {
        return handleClick(options[1], onSelect);
      }
    }, options[1].text)) : null);
  };

  ToggleButtonGroup.defaultProps = defaultProps;
  exports.default = (0, _styles.withStyles)(styleClasses, {
    index: 0,
    withTheme: true
  })(ToggleButtonGroup);
});