import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';

interface CustomCheckboxProps {
  size: number;
  borderColor: string;
  checkedColor: string;
  checked: boolean;
}

const CustomCheckbox = ({
  size,
  borderColor,
  checkedColor,
  checked,
}: CustomCheckboxProps): JSX.Element => {
  return (
    <Checkbox
      sx={{
        color: borderColor,
        '& .MuiSvgIcon-root': {
          fontSize: size,
        },
        '&.Mui-checked': {
          color: checkedColor,
        },
      }}
      checked={checked}
      inputProps={{ 'aria-label': 'custom' }}
    />
  );
};
export default CustomCheckbox;
