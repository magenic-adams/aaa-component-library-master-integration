(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@babel/runtime/helpers/esm/objectSpread", "@babel/runtime/helpers/esm/defineProperty", "react", "clsx", "@material-ui/styles", "../Label/Label", "../RadioItem/RadioItem", "../SelectList/SelectList"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@babel/runtime/helpers/esm/objectSpread"), require("@babel/runtime/helpers/esm/defineProperty"), require("react"), require("clsx"), require("@material-ui/styles"), require("../Label/Label"), require("../RadioItem/RadioItem"), require("../SelectList/SelectList"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.objectSpread, global.defineProperty, global.react, global.clsx, global.styles, global.Label, global.RadioItem, global.SelectList);
    global.RadioGroup = mod.exports;
  }
})(this, function (_exports, _objectSpread2, _defineProperty2, _react, _clsx, _styles, _Label, _RadioItem, _SelectList) {
  "use strict";

  var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _objectSpread2 = _interopRequireDefault(_objectSpread2);
  _defineProperty2 = _interopRequireDefault(_defineProperty2);
  _react = _interopRequireWildcard(_react);
  _clsx = _interopRequireDefault(_clsx);
  _Label = _interopRequireDefault(_Label);
  _RadioItem = _interopRequireDefault(_RadioItem);
  _SelectList = _interopRequireDefault(_SelectList);
  // Components
  var defaultProps = {
    type: '',
    instructionLabel: '',
    selectedId: '',
    selectedIds: [],
    disableAll: false,
    disabledIds: []
  };

  var styleClasses = function styleClasses(theme) {
    var _ref;

    return _ref = {
      root: {
        border: 'none',
        boxShadow: 'none',
        marginTop: 16,
        '& li': (0, _defineProperty2.default)({
          border: 'none',
          padding: 0,
          marginBottom: 4,
          '&:active,&:hover': {
            background: 'none'
          }
        }, theme.breakpoints.up('md'), {
          width: 534
        })
      }
    }, (0, _defineProperty2.default)(_ref, theme.breakpoints.up('md'), {
      width: 534
    }), (0, _defineProperty2.default)(_ref, theme.breakpoints.down('sm'), {
      width: '100%'
    }), _ref;
  };

  function isInArray(ids, id) {
    if (Array.isArray(ids)) {
      for (var i = 0; i < ids.length; i += 1) {
        if (ids[i] === id) return true;
      }
    }

    return false;
  }

  function isSelected(type, id, selectedId, selectedIds) {
    if (type === 'multi-select') {
      return isInArray(selectedIds, id);
    }

    return id === selectedId;
  }

  function constructDisplayItems(id, type, items, selectedId, selectedIds, disableAll, disabledIds, _onSelect) {
    return Array.isArray(items) && items.map(function (item) {
      var checked = isSelected(type, item.id, selectedId, selectedIds);
      var disabled = !!disableAll || isInArray(disabledIds, item.id);
      return (0, _objectSpread2.default)({}, item, {
        key: "RadioItem-".concat(item.id),
        display: _react.default.createElement(_RadioItem.default, {
          name: id,
          item: item,
          checked: checked,
          disabled: disabled,
          onSelect: function onSelect() {
            return typeof _onSelect === 'function' ? _onSelect(item) : null;
          }
        })
      });
    });
  }

  var RadioGroup = function RadioGroup(_ref2) {
    var classes = _ref2.classes,
        disableAll = _ref2.disableAll,
        disabledIds = _ref2.disabledIds,
        id = _ref2.id,
        items = _ref2.items,
        instructionLabel = _ref2.instructionLabel,
        selectedId = _ref2.selectedId,
        selectedIds = _ref2.selectedIds,
        type = _ref2.type,
        _onSelect2 = _ref2.onSelect;
    var newItems = constructDisplayItems(id, type, items, selectedId, selectedIds, disableAll, disabledIds, _onSelect2);
    return _react.default.createElement(_react.Fragment, null, instructionLabel && _react.default.createElement(_Label.default, {
      disabled: false,
      id: id,
      focused: false
    }, instructionLabel), _react.default.createElement(_SelectList.default, {
      className: (0, _clsx.default)('RadioGroup', classes.root),
      items: newItems,
      onSelect: function onSelect() {
        return _onSelect2;
      }
    }));
  };

  RadioGroup.defaultProps = defaultProps;

  var _default = (0, _styles.withStyles)(styleClasses, {
    index: 0,
    withTheme: true
  })(RadioGroup);

  _exports.default = _default;
});