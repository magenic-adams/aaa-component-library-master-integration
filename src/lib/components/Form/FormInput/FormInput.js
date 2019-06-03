import React, {PureComponent} from 'react';
import { Field } from 'react-final-form';

// Components
import Input from '../../Input/Input';

class FormInput extends PureComponent {
  render(){
    console.log('this.props', this.props);
    const { name } = this.props;
    return (
      <Field
        name={name}
        component={(fieldProps) => {
          return (
            <Input {...fieldProps.input} {...this.props} />
          );
        }}
      />
    );
  }
}

export default FormInput;
