/* eslint-disable @typescript-eslint/indent */

import * as React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { fontWeight, fontSize } from '../../lib/theme/globals';
import { palette } from '../../lib/theme/palette';

interface SwitchesProps {
  color:
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning'
    | 'default'
    | 'black'
    | 'orange'
    | 'red'
    | 'yellow'
    | 'rare'
    | 'somber'
    | 'neutral'
    | 'black'
    | 'white'
    | 'rose'
    | 'tangerine'
    | 'brown'
    | 'darkGrey';
  labelPlacement: 'top' | 'end' | 'start' | 'bottom';
  label: string;
  onChange: () => void;
  checked: boolean;
}

const Switches = ({
  color,
  labelPlacement,
  label,
  onChange,
  checked,
}: SwitchesProps): JSX.Element => {
  return (
    <FormControlLabel
      sx={{
        fontSize: fontSize.default,
        color: palette.neutral.medium,
        fontWeight: fontWeight.medium,
        textTransform: 'capitalize',
      }}
      value='top'
      control={
        <Switch
          sx={{ ml: 2, mr: 2 }}
          checked={checked}
          color={color}
          onChange={onChange}
        />
      }
      label={label}
      labelPlacement={labelPlacement}
    />
  );
};

export default Switches;
