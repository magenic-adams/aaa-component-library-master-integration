(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@babel/runtime/helpers/esm/classCallCheck", "@babel/runtime/helpers/esm/createClass", "@babel/runtime/helpers/esm/possibleConstructorReturn", "@babel/runtime/helpers/esm/getPrototypeOf", "@babel/runtime/helpers/esm/inherits", "react", "react-final-form", "final-form-set-field-touched", "../../utilities/validations/validate"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@babel/runtime/helpers/esm/classCallCheck"), require("@babel/runtime/helpers/esm/createClass"), require("@babel/runtime/helpers/esm/possibleConstructorReturn"), require("@babel/runtime/helpers/esm/getPrototypeOf"), require("@babel/runtime/helpers/esm/inherits"), require("react"), require("react-final-form"), require("final-form-set-field-touched"), require("../../utilities/validations/validate"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.classCallCheck, global.createClass, global.possibleConstructorReturn, global.getPrototypeOf, global.inherits, global.react, global.reactFinalForm, global.finalFormSetFieldTouched, global.validate);
    global.undefined = mod.exports;
  }
})(this, function (exports, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _getPrototypeOf2, _inherits2, _react, _reactFinalForm, _finalFormSetFieldTouched, _validate) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _getPrototypeOf3 = _interopRequireDefault(_getPrototypeOf2);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _react2 = _interopRequireDefault(_react);

  var _finalFormSetFieldTouched2 = _interopRequireDefault(_finalFormSetFieldTouched);

  import _interopRequireDefault from "@babel/runtime/helpers/esm/interopRequireDefault";

  var FormDecorator = function (_React$Component) {
    (0, _inherits3.default)(FormDecorator, _React$Component);

    function FormDecorator() {
      (0, _classCallCheck3.default)(this, FormDecorator);
      return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf3.default)(FormDecorator).apply(this, arguments));
    }

    (0, _createClass3.default)(FormDecorator, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            render = _this$props.render,
            validations = _this$props.validations,
            onSubmit = _this$props.onSubmit;
        return _react2.default.createElement(_reactFinalForm.Form, Object.assign({
          validate: FormDecorator.handleValidate({
            validations: validations
          }),
          mutators: {
            setFieldTouched: _finalFormSetFieldTouched2.default
          },
          onSubmit: onSubmit
        }, this.props, {
          render: FormDecorator.decorateRender(render, validations) // Render passed is always decorated

        }));
      }
    }], [{
      key: "allRequiredFieldsHaveBeenVisitedOrHaveValues",
      value: function allRequiredFieldsHaveBeenVisitedOrHaveValues(_ref) {
        var formRenderProps = _ref.formRenderProps,
            validations = _ref.validations;
        var values = formRenderProps.values,
            visited = formRenderProps.visited;
        var validationFields = Object.keys(validations);
        var requiredFields = validationFields.filter(function (fieldKey) {
          return Object.prototype.hasOwnProperty.call(validations[fieldKey], 'required');
        });
        return requiredFields.every(function (fieldKey) {
          return !!values[fieldKey] || !!visited[fieldKey];
        });
      }
    }, {
      key: "decorateFormRenderProps",
      value: function decorateFormRenderProps(_ref2) {
        var formRenderProps = _ref2.formRenderProps,
            validations = _ref2.validations;
        return Object.assign({}, formRenderProps, {
          allRequiredFieldsHaveBeenVisitedOrHaveValues: this.allRequiredFieldsHaveBeenVisitedOrHaveValues({
            formRenderProps: formRenderProps,
            validations: validations
          })
        });
      }
    }, {
      key: "handleValidate",
      value: function handleValidate(_ref3) {
        var validations = _ref3.validations;
        return function (values) {
          return (0, _validate.validateForm)(values, validations);
        };
      }
    }, {
      key: "decorateRender",
      value: function decorateRender(renderFn, validations) {
        var _this = this;

        return function (formRenderProps) {
          // Form Render Props are passed to the render method of the Form
          // Values include [handleSubmit, form, and ...formState]
          // For more information:
          // https://github.com/final-form/react-final-form#formrenderprops
          // **** 
          // We are augmenting these values by adding additional information valuable to our functionality
          return renderFn(_this.decorateFormRenderProps({
            formRenderProps: formRenderProps,
            validations: validations
          }));
        };
      }
    }]);
    return FormDecorator;
  }(_react2.default.Component);

  exports.default = FormDecorator;
});