(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@babel/runtime/helpers/esm/defineProperty", "react", "tiny-invariant", "@material-ui/styles", "@material-ui/core/ListItem"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@babel/runtime/helpers/esm/defineProperty"), require("react"), require("tiny-invariant"), require("@material-ui/styles"), require("@material-ui/core/ListItem"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.defineProperty, global.react, global.tinyInvariant, global.styles, global.ListItem);
    global.undefined = mod.exports;
  }
})(this, function (exports, _defineProperty2, _react, _tinyInvariant, _styles, _ListItem) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _defineProperty3 = _interopRequireDefault(_defineProperty2);

  var _react2 = _interopRequireDefault(_react);

  var _tinyInvariant2 = _interopRequireDefault(_tinyInvariant);

  var _ListItem2 = _interopRequireDefault(_ListItem);

  import _interopRequireDefault from "@babel/runtime/helpers/esm/interopRequireDefault";

  var styleClasses = function styleClasses(theme) {
    var _root;

    return {
      root: (_root = {
        height: 48,
        background: theme.secondaryPalette.colorVariables.TRANSPARENT,
        fontSize: 18,
        letterSpacing: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.5,
        fontFamily: theme.typography.fontFamily
      }, (0, _defineProperty3.default)(_root, theme.breakpoints.between('xs', 'sm'), {
        fontSize: 16
      }), (0, _defineProperty3.default)(_root, '&.Mui-selected, &.Mui-selected:hover', {
        backgroundColor: theme.secondaryPalette.colorVariables.SECONDARY_HOVER
      }), (0, _defineProperty3.default)(_root, '&:hover', {
        backgroundColor: theme.secondaryPalette.colorVariables.SECONDARY_HOVER
      }), _root),
      gutters: {
        padding: '0 13px 0 13px'
      },
      divider: {
        borderBottom: "1px solid ".concat(theme.palette.primary.main),
        '&:last-child': {
          borderBottom: 'none'
        }
      }
    };
  };

  function checkValidity(item) {
    if (!item) {
      (0, _tinyInvariant2.default)(false, 'You have not passed an item for rendering.');
    }

    if (!item.id && !item.display) {
      (0, _tinyInvariant2.default)(false, 'id and display should have value.');
    }
  }

  var SelectListItem = function SelectListItem(_ref) {
    var classes = _ref.classes,
        item = _ref.item,
        onSelect = _ref.onSelect;
    checkValidity(item);
    var display = item.display,
        id = item.id,
        value = item.value;
    var divider = classes.divider,
        gutters = classes.gutters,
        root = classes.root;
    return _react2.default.createElement(_ListItem2.default, {
      "data-quid": "SelectListItem-".concat(id),
      value: value,
      classes: {
        root: root,
        divider: divider,
        gutters: gutters
      },
      divider: true,
      onClick: function onClick() {
        return onSelect(item);
      }
    }, display);
  };

  exports.default = (0, _styles.withStyles)(styleClasses, {
    index: 0,
    withTheme: true
  })(SelectListItem);
});