import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';

// Components
import BaseInput from '../../Input/BaseInput/BaseInput';

type propTypes = {
  name: PropTypes.string,
};

class FormInput extends PureComponent<propTypes> {
  render(){
    const { name } = this.props;
    return (
      <Field
        name={name}
        component={(fieldProps) => {
          const { meta } = fieldProps;
          return (
            <BaseInput
              error={!meta.active && meta.touched && meta.error}
              {...fieldProps.input}
              {...this.props} />
          );
        }}
      />
    );
  }
}

export default FormInput;
