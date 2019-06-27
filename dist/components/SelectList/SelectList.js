(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@babel/runtime/helpers/esm/defineProperty", "react", "tiny-invariant", "@material-ui/styles", "clsx", "../SelectListItem/SelectListItem"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@babel/runtime/helpers/esm/defineProperty"), require("react"), require("tiny-invariant"), require("@material-ui/styles"), require("clsx"), require("../SelectListItem/SelectListItem"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.defineProperty, global.react, global.tinyInvariant, global.styles, global.clsx, global.SelectListItem);
    global.undefined = mod.exports;
  }
})(this, function (exports, _defineProperty2, _react, _tinyInvariant, _styles, _clsx, _SelectListItem) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _defineProperty3 = _interopRequireDefault(_defineProperty2);

  var _react2 = _interopRequireDefault(_react);

  var _tinyInvariant2 = _interopRequireDefault(_tinyInvariant);

  var _clsx2 = _interopRequireDefault(_clsx);

  var _SelectListItem2 = _interopRequireDefault(_SelectListItem);

  import _interopRequireDefault from "@babel/runtime/helpers/esm/interopRequireDefault";
  var defaultProps = {
    className: ''
  };

  var styleClasses = function styleClasses(theme) {
    return {
      root: (0, _defineProperty3.default)({
        width: 341,
        background: theme.secondaryPalette.colorVariables.WHITE,
        border: "2px solid ".concat(theme.palette.primary.main),
        borderRadius: 4,
        padding: '0px',
        boxShadow: "0 2px 8px 0 ".concat(theme.secondaryPalette.colorVariables.GRAY),
        '& span': {
          fontFamily: theme.typographyValues.fontFamily
        }
      }, theme.breakpoints.down('sm'), {
        width: '100%',
        border: "1px solid ".concat(theme.palette.primary.main),
        boxShadow: 'none',
        borderRadius: 0,
        '& span': {
          fontSize: 16
        }
      })
    };
  };

  function areItemKeysPresent(items) {
    return items.every(function (item) {
      return item.id && item.value && item.display;
    });
  }

  function checkValidity(items) {
    if (!Array.isArray(items) || items.length === 0) {
      (0, _tinyInvariant2.default)(false, 'items is empty');
    }

    if (!areItemKeysPresent(items)) {
      (0, _tinyInvariant2.default)(false, 'Invalid object keys are present. Keys should contain id, value and display');
    }
  }

  var SelectList = function SelectList(_ref) {
    var classes = _ref.classes,
        className = _ref.className,
        items = _ref.items,
        _onSelect = _ref.onSelect;
    checkValidity(items);
    return _react2.default.createElement("div", {
      className: (0, _clsx2.default)(classes.root, className)
    }, items.map(function (item) {
      return item.display && _react2.default.createElement(_SelectListItem2.default, {
        key: item.id,
        item: item,
        onSelect: function onSelect() {
          return _onSelect(item);
        }
      });
    }));
  };

  SelectList.defaultProps = defaultProps;
  exports.default = (0, _styles.withStyles)(styleClasses, {
    withTheme: true
  })(SelectList);
});