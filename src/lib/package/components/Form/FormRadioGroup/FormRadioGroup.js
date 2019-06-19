import React from 'react';
import PropTypes from 'prop-types';
import { Field, useForm, FieldRenderProps } from 'react-final-form';
import RadioGroup from '../../RadioGroup/RadioGroup';

type propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  items: [
    {
      id: PropTypes.number,
      value: PropTypes.string | PropTypes.number,
      text: PropTypes.string | PropTypes.number
    }
  ]
};

function handleFormFieldChange(input, formState, rest) {
  console.log('handleFormFieldChange', rest);
  const change = () => {
    // const { name, onChange } = input;
    // const {
    //   mutators: { setFieldTouched },
    // } = formState;
    console.log('Change!');
    // setFieldTouched(name, false);
    // console.log('formstate', formState);
    // console.log('value radio', val);
    // onChange(val);
  };
  return change;
}

const RadioWrapper: React.SFC<FieldRenderProps> = ({
  input,
  meta,
  ...rest
}) => {
  const formState = useForm();
  return (
    <RadioGroup
      type={input.type}
      name={input.name}
      onSelect={handleFormFieldChange(input, formState, rest)}
      {...rest}
    />
  );
};

const FormRadioGroup = props => {
  const { type, selectedId, selectedIds } = props;
  return (
    <Field
      {...props}
      values={type === 'multi-select' ? selectedIds : selectedId}
      component={RadioWrapper}
    />
  );
};

export default FormRadioGroup;
