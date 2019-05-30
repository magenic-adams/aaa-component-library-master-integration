import React, { Component } from 'react';
import { ToggleButtonGroup } from '../../components';

export function ToggleButtonGroupContainer({ options, value, disabled, onSelect }) {
  const [option, setOption] = React.useState(value);

  const handleOptions = (selectedOption) => {
    setOption(selectedOption);
    
    if (onSelect)
      onSelect(selectedOption);
  }
  return (
    <ToggleButtonGroup 
      options={options} 
      value={option} 
      disabled={disabled} 
      onSelect={(selectedOption) => handleOptions(selectedOption)}
    >
    </ToggleButtonGroup>
  );
}
