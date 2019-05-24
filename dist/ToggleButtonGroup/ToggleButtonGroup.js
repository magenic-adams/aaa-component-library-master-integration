import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import cx from 'clsx';
import { Button, ButtonGroup } from '../../components';

var ToggleButtonGroup =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ToggleButtonGroup, _React$Component);

  function ToggleButtonGroup(props) {
    var _this;

    _classCallCheck(this, ToggleButtonGroup);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ToggleButtonGroup).call(this, props));
    _this.state = {
      selectedOption: null
    };
    _this.getActiveItemIndex = _this.getActiveItemIndex.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ToggleButtonGroup, [{
    key: "toggle",
    value: function toggle(index) {
      var options = this.props.options;
      var selectedOption = options[index];
      this.setState({
        selectedOption: selectedOption
      });
      return selectedOption;
    }
  }, {
    key: "getActiveItemIndex",
    value: function getActiveItemIndex(defaultItem) {
      var options = this.props.options;
      var selectedOption = this.state.selectedOption;
      var selectedIndex = -1;

      if (defaultItem) {
        selectedIndex = options.findIndex(function (option) {
          return option.value === defaultItem.value;
        });
      }

      if (selectedOption) {
        selectedIndex = options.findIndex(function (option) {
          return option.value === selectedOption.value;
        });
      }

      return selectedIndex;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          options = _this$props.options,
          defaultItem = _this$props.defaultItem,
          onSelect = _this$props.onSelect,
          disabled = _this$props.disabled,
          _this$props$classes = _this$props.classes,
          classes = _this$props$classes === void 0 ? {} : _this$props$classes,
          _this$props$className = _this$props.className,
          className = _this$props$className === void 0 ? '' : _this$props$className,
          themes = _this$props.themes;
      var selectedIndex = this.getActiveItemIndex(defaultItem);
      return React.createElement(ButtonGroup, null, options && options.map(function (option, index) {
        return React.createElement(Button, {
          key: index,
          color: selectedIndex === index ? "primary" : "secondary",
          onClick: function onClick() {
            _this2.toggle(index);

            if (onSelect) onSelect();
          },
          disabled: disabled
        }, option.text);
      }));
    }
  }]);

  return ToggleButtonGroup;
}(React.Component);

export default withStyles({
  withTheme: true
})(ToggleButtonGroup);