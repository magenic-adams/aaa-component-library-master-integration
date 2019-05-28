import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import cx from 'clsx';
import { Button, ButtonGroup } from '../../components';

var styleClasses = function styleClasses(theme) {
  return {
    root: {
      '& .Button:nth-child(1)': {
        borderTopRightRadius: '0px',
        borderBottomRightRadius: '0px',
        borderRightStyle: 'none'
      },
      '& .Button:nth-child(2)': {
        borderTopLeftRadius: '0px',
        borderBottomLeftRadius: '0px'
      }
    },
    button: _defineProperty({
      width: '157px',
      height: '48px',
      '& span': {
        fontSize: '18px'
      }
    }, theme.breakpoints.between('xs', 'sm'), {
      width: '50%',
      '& span': {
        fontSize: '16px',
        fontWeight: '700'
      }
    }),
    active: _defineProperty({
      background: theme.palette.primary.dark,
      color: theme.palette.common.white,
      '&:hover': {
        background: theme.palette.primary.dark
      }
    }, theme.breakpoints.between('xs', 'sm'), {
      background: theme.palette.colorVariables.SECONDARY_HOVER,
      color: theme.palette.primary.main,
      '&:hover': {
        background: theme.palette.colorVariables.SECONDARY_HOVER
      }
    })
  };
};

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
    return _this;
  }

  _createClass(ToggleButtonGroup, [{
    key: "toggle",
    value: function toggle(index, callback) {
      var options = this.props.options;
      var selectedOption = options[index];
      this.setState({
        selectedOption: selectedOption
      });
      if (callback) callback(selectedOption);
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
    key: "getClassName",
    value: function getClassName(selectedIndex, elementIndex) {
      var classes = this.props.classes;
      return selectedIndex === elementIndex ? "".concat(classes.button, " ").concat(classes.active) : classes.button;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          _this$props$classes = _this$props.classes,
          classes = _this$props$classes === void 0 ? {} : _this$props$classes,
          _this$props$className = _this$props.className,
          className = _this$props$className === void 0 ? '' : _this$props$className,
          defaultItem = _this$props.defaultItem,
          disabled = _this$props.disabled,
          onSelect = _this$props.onSelect,
          options = _this$props.options,
          theme = _this$props.theme;
      var selectedIndex = this.getActiveItemIndex(defaultItem);
      return React.createElement("div", null, options && options.length ? React.createElement(ButtonGroup, {
        className: cx('ButtonGroup', classes.root, className)
      }, React.createElement(Button, {
        className: cx('Button', this.getClassName(selectedIndex, 0), className),
        color: "secondary",
        disabled: disabled,
        tabIndex: 0,
        onClick: function onClick() {
          return _this2.toggle(0, onSelect);
        }
      }, options[0].text), React.createElement(Button, {
        className: cx('Button', this.getClassName(selectedIndex, 1), className),
        color: "secondary",
        disabled: disabled,
        onClick: function onClick() {
          return _this2.toggle(1, onSelect);
        }
      }, options[1].text)) : null);
    }
  }]);

  return ToggleButtonGroup;
}(React.Component);

export default withStyles(styleClasses, {
  withTheme: true
})(ToggleButtonGroup);