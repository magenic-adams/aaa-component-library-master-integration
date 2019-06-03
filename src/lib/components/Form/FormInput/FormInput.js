import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';

// Components
import Input from '../../Input/Input';

type propTypes = {
  name: PropTypes.string,
};

class FormInput extends PureComponent {
  render(){
    console.log('this.props', this.props);
    const { name } = this.props;
    return (
      <Field
        name={name}
        component={(fieldProps) => {
          const { meta } = fieldProps;
          return (
            <Input
              error={meta.touched && meta.error}
              {...fieldProps.input}
              {...this.props} />
          );
        }}
      />
    );
  }
}

export default FormInput;
