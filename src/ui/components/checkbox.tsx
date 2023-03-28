import React, { useState } from 'react';
import { getTheme } from '../../utils/designSystem';
import { Checkbox } from 'react-native-ui-lib';

type IngredientsListProps = {
  isChecked: boolean;
};

const CheckboxComponent = ({ isChecked }: IngredientsListProps) => {
  const [checked, setChecked] = useState<boolean>(isChecked);

  const handleValueChange = () => {
    setChecked(!checked);
  };

  return (
    <Checkbox value={checked} onValueChange={handleValueChange} color={getTheme().lightOrange} />
  );
};

export default CheckboxComponent;
