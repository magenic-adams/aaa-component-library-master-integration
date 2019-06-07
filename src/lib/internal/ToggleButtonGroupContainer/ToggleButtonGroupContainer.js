import React from 'react';
import { ToggleButtonGroup } from '../../components';

export default function ToggleButtonGroupContainer({
  disabled,
  options,
  value,
  onSelect
}) {
  const [option, setOption] = React.useState(value);

  const handleOptions = selectedOption => {
    setOption(selectedOption);

    if (onSelect) onSelect(selectedOption);
  };
  return (
    <ToggleButtonGroup
      options={options}
      value={option && option.id}
      disabled={disabled}
      onSelect={selectedOption => handleOptions(selectedOption)}
    />
  );
}
