import { ACEPrimaryTheme, SelectDropdown } from '../../package/components';

export const demo = `function SelectDropdownContainer({ disabled, error }) {
   const status =  [
        { id: 1, value: 'S', display: 'Single' },
        { id: 2, value: 'M', display: 'Married' },
        { id: 3, value: 'A', display: 'Divorced' },
        { id: 4, value: 'C', display: 'Widowed' },
    ];
  
  const id = 'status';
  const [values, setValues] = React.useState({
    status: '',
  });

  function handleChange(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <SelectDropdown
      id={id}
      items={status}
      onChange={handleChange}
      value={values.status}
      label="Status"
      placeHolder="Select one"
      helperText="Choose one above"
      error={error}
      disabled={disabled}
    />
  );
}`;

export const scope = {
  ACEPrimaryTheme,
  SelectDropdown,
};
