import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';

const GreenRadio = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})(props => <Radio color="default" {...props} />);

// function isSelected() {}

export default function RadioButtonsContainer() {
  const items = [
    { id: 1, value: 1, text: 'First Item', selected: true },
    { id: 2, value: 2, text: 'Second Item', selected: true },
    { id: 3, value: 3, text: 'Third Item' },
  ];
  // eslint-disable-next-line no-console
  console.log(items);

  // const [selectedValues, setSelectedValue] = React.useState('a');

  // function handleChange(event) {
  //   setSelectedValue(event.target.value);
  // }

  return (
    <div>
      <Radio
        // checked={selectedValue === 1}
        // onChange={handleChange}
        value={1}
        inputProps={{ 'aria-label': 1 }}
      />
      <Radio
        // checked={selectedValue === 1}
        // onChange={handleChange}
        value={2}
        inputProps={{ 'aria-label': 2 }}
      />
      <GreenRadio
        // checked={selectedValue === 1}
        // onChange={handleChange}
        value={3}
        inputProps={{ 'aria-label': 3 }}
      />
    </div>
  );
}
