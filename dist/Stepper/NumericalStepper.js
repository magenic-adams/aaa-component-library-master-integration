import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import AAAButton from '../Button/Button'; //import {Add as AddIcon, Remove as RemoveIcon} from '@material-ui/icons';

import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

var styleClasses = function styleClasses(theme) {
  return {
    stepperButton: {
      width: '48px',
      height: '48px',
      margin: '8px 8px',
      border: 'solid 1px #717174',
      'border-radius': '4px',
      'background-color': '#FFFFFF'
    },
    stepperIcon: {
      color: '#4470BF',
      width: '24px',
      height: '24px'
    },
    numericInput: {
      height: '48px',
      margin: '8px 8px',
      border: 'solid 1px #717174',
      'border-radius': '4px',
      'text-align': 'center'
    },
    label: _defineProperty({
      color: '#2A282C',
      fontSize: '16px'
    }, theme.breakpoints.up('md'), {
      fontSize: '18px'
    }),
    helpTextError: _defineProperty({
      color: '#717174',
      fontSize: '14px'
    }, theme.breakpoints.up('md'), {
      fontSize: '16px'
    })
  };
};

var NumericalStepper =
/*#__PURE__*/
function (_Component) {
  _inherits(NumericalStepper, _Component);

  function NumericalStepper() {
    _classCallCheck(this, NumericalStepper);

    return _possibleConstructorReturn(this, _getPrototypeOf(NumericalStepper).apply(this, arguments));
  }

  _createClass(NumericalStepper, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      return React.createElement("div", null, React.createElement(AAAButton, {
        className: classes.stepperButton
      }, React.createElement(RemoveIcon, {
        className: classes.stepperIcon
      })), React.createElement("input", {
        className: classes.numericInput,
        type: "text"
      }), React.createElement(AAAButton, {
        className: classes.stepperButton
      }, React.createElement(AddIcon, {
        className: classes.stepperIcon
      })));
    }
  }]);

  return NumericalStepper;
}(Component);

export default withStyles(styleClasses, {
  withTheme: true
})(NumericalStepper);
;