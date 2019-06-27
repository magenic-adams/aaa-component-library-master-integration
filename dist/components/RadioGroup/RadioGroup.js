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
    global.undefined = mod.exports;
  }
})(this, function (exports, _objectSpread2, _defineProperty2, _react, _clsx, _styles, _Label, _RadioItem, _SelectList) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _objectSpread3 = _interopRequireDefault(_objectSpread2);

  var _defineProperty3 = _interopRequireDefault(_defineProperty2);

  var _react2 = _interopRequireDefault(_react);

  var _clsx2 = _interopRequireDefault(_clsx);

  var _Label2 = _interopRequireDefault(_Label);

  var _RadioItem2 = _interopRequireDefault(_RadioItem);

  var _SelectList2 = _interopRequireDefault(_SelectList);

  import _interopRequireDefault from "@babel/runtime/helpers/esm/interopRequireDefault";
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
        '& li': (0, _defineProperty3.default)({
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
    }, (0, _defineProperty3.default)(_ref, theme.breakpoints.up('md'), {
      width: 534
    }), (0, _defineProperty3.default)(_ref, theme.breakpoints.down('sm'), {
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
      return (0, _objectSpread3.default)({}, item, {
        key: "RadioItem-".concat(item.id),
        display: _react2.default.createElement(_RadioItem2.default, {
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
    return _react2.default.createElement(_react.Fragment, null, instructionLabel && _react2.default.createElement(_Label2.default, {
      disabled: false,
      id: id,
      focused: false
    }, instructionLabel), _react2.default.createElement(_SelectList2.default, {
      className: (0, _clsx2.default)('RadioGroup', classes.root),
      items: newItems,
      onSelect: function onSelect() {
        return _onSelect2;
      }
    }));
  };

  RadioGroup.defaultProps = defaultProps;
  exports.default = (0, _styles.withStyles)(styleClasses, {
    index: 0,
    withTheme: true
  })(RadioGroup);
});