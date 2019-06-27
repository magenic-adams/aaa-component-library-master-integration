import React from 'react';
import { useForm } from 'react-final-form';

var withFormState = function withFormState(Component) {
  return function (props) {
    return React.createElement(Component, Object.assign({
      formState: useForm()
    }, props));
  };
};

export default withFormState;