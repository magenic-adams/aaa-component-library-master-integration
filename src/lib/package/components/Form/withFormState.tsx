import React from 'react';
import { useForm } from 'react-final-form';

const withFormState = (Component:any) => (props:any) => (
  <Component 
    formState={useForm()} {...props}
  />
);

export default withFormState;
