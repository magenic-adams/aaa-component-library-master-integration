"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _RadioGroup = _interopRequireDefault(require("../../RadioGroup/RadioGroup"));

var _reactFinalForm = require("react-final-form");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class FormRadioGroup extends _react.default.Component {
  constructor(props) {
    var {
      initialValue
    } = props;
    super(props);

    _defineProperty(this, "selectedValues", void 0);

    this.handleItemChange = this.handleItemChange.bind(this);
    this.renderFieldComponent = this.renderFieldComponent.bind(this);
    this.selectedValues = [];

    if (!!initialValue) {
      this.selectedValues = [initialValue];
    }
  }

  handleItemChange(fieldProps) {
    return item => {
      var {
        input: {
          onChange
        }
      } = fieldProps;
      var {
        value
      } = item;
      this.selectedValues = [value];
      onChange(value);
    };
  }

  renderFieldComponent(fieldProps) {
    var {
      id,
      items,
      disabledValues,
      initialValue,
      instructionLabel,
      disableAll
    } = fieldProps;
    return _react.default.createElement(_RadioGroup.default, {
      id: id,
      items: items,
      initialValue: initialValue,
      instructionLabel: instructionLabel,
      selectedValues: this.selectedValues,
      disabledValues: disabledValues,
      disableAll: disableAll,
      onChange: this.handleItemChange(fieldProps)
    });
  }

  render() {
    var {
      id,
      items,
      disabledValues,
      disableAll,
      initialValue,
      instructionLabel
    } = this.props;
    return _react.default.createElement(_reactFinalForm.Field, {
      id: id,
      name: id,
      items: items,
      initialValue: initialValue,
      instructionLabel: instructionLabel,
      disabledValues: disabledValues,
      disableAll: disableAll,
      component: this.renderFieldComponent
    });
  }

}

_defineProperty(FormRadioGroup, "defaultProps", {
  instructionLabel: '',
  disableAll: false,
  disabledValues: [],
  initialValue: ''
});

var _default = FormRadioGroup;
exports.default = _default;