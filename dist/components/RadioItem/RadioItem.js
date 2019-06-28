(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@babel/runtime/helpers/esm/objectSpread", "@babel/runtime/helpers/esm/defineProperty", "react", "clsx", "tiny-invariant", "@material-ui/styles", "@material-ui/core/Radio", "@material-ui/core/FormControlLabel"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@babel/runtime/helpers/esm/objectSpread"), require("@babel/runtime/helpers/esm/defineProperty"), require("react"), require("clsx"), require("tiny-invariant"), require("@material-ui/styles"), require("@material-ui/core/Radio"), require("@material-ui/core/FormControlLabel"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.objectSpread, global.defineProperty, global.react, global.clsx, global.tinyInvariant, global.styles, global.Radio, global.FormControlLabel);
    global.RadioItem = mod.exports;
  }
})(this, function (_exports, _objectSpread2, _defineProperty2, _react, _clsx, _tinyInvariant, _styles, _Radio, _FormControlLabel) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _objectSpread2 = _interopRequireDefault(_objectSpread2);
  _defineProperty2 = _interopRequireDefault(_defineProperty2);
  _react = _interopRequireDefault(_react);
  _clsx = _interopRequireDefault(_clsx);
  _tinyInvariant = _interopRequireDefault(_tinyInvariant);
  _Radio = _interopRequireDefault(_Radio);
  _FormControlLabel = _interopRequireDefault(_FormControlLabel);
  // Material UI
  var defaultProps = {
    className: '',
    checked: false,
    disabled: false
  };

  var styleClasses = function styleClasses(theme) {
    var _root;

    return {
      root: (_root = {
        width: 534,
        height: 48,
        borderRadius: 4,
        border: 0,
        background: theme.secondaryPalette.colorVariables.WHITE,
        boxShadow: "inset 0 0 0 1px ".concat(theme.secondaryPalette.colorVariables.BLACK),
        margin: '0px 0px 8px 0px',
        '&:hover': {
          background: theme.secondaryPalette.colorVariables.SECONDARY_HOVER
        },
        '&.Mui-disabled, &.Mui-disabled:hover': {
          boxShadow: "inset 0 0 0 2px ".concat(theme.secondaryPalette.disabled.main),
          background: 'none'
        }
      }, (0, _defineProperty2.default)(_root, theme.breakpoints.up('md'), {
        width: 534
      }), (0, _defineProperty2.default)(_root, theme.breakpoints.down('sm'), {
        width: '100%'
      }), _root),
      selected: {
        border: 0,
        boxShadow: "inset 0 0 0 2px ".concat(theme.secondaryPalette.colorVariables.DARKER_BLUE),
        fontWeight: 500,
        background: theme.secondaryPalette.colorVariables.SECONDARY_HOVER,
        '&.Mui-disabled, &.Mui-disabled:hover': {
          boxShadow: "inset 0 0 0 2px ".concat(theme.secondaryPalette.disabled.main),
          background: 'none'
        }
      },
      label: {
        fontFamily: theme.typography.fontFamily,
        fontSize: 16,
        paddingRight: 16
      },
      disabled: {
        boxShadow: "inset 0 0 0 1px ".concat(theme.secondaryPalette.disabled.main),
        background: 'none'
      }
    };
  };

  function checkValidity(item) {
    if (!item) {
      (0, _tinyInvariant.default)(false, 'You have not passed an item for rendering.');
    }

    if (!item.id && !item.value) {
      (0, _tinyInvariant.default)(false, 'id and value are empty.');
    }
  }

  var Radio = function Radio(props) {
    var _props = (0, _objectSpread2.default)({}, props),
        itemId = _props.itemId,
        checked = _props.checked,
        disabled = _props.disabled,
        value = _props.value,
        onChange = _props.onChange;

    return _react.default.createElement(_Radio.default, {
      key: itemId,
      name: itemId,
      checked: checked,
      value: value,
      disabled: disabled,
      color: "primary",
      onChange: onChange
    });
  };

  var RadioItem = function RadioItem(_ref) {
    var _cx;

    var classes = _ref.classes,
        checked = _ref.checked,
        disabled = _ref.disabled,
        item = _ref.item,
        name = _ref.name,
        onSelect = _ref.onSelect;
    checkValidity(item);
    return !!item && _react.default.createElement(_FormControlLabel.default, {
      "data-quid": "RadioItem-".concat(item.id),
      className: (0, _clsx.default)('Radio', classes.root, (_cx = {}, (0, _defineProperty2.default)(_cx, classes.selected, checked), (0, _defineProperty2.default)(_cx, classes.disabled, disabled), _cx)),
      classes: {
        label: classes.label
      },
      control: _react.default.createElement(Radio, {
        itemId: item.id,
        name: name,
        type: "radio",
        checked: checked,
        disabled: disabled,
        color: "primary",
        value: item.value,
        onChange: function onChange() {
          return onSelect(item);
        }
      }),
      label: item.display
    });
  };

  RadioItem.defaultProps = defaultProps;

  var _default = (0, _styles.withStyles)(styleClasses, {
    index: 0,
    withTheme: true
  })(RadioItem);

  _exports.default = _default;
});