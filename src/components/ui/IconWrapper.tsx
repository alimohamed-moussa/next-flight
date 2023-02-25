import * as React from 'react';
import Box from '@mui/material/Box';
import { borderRadius } from '../../lib/theme/globals';

interface IconWrapperProps {
  color: string;
  wrapperBorderColor?: string;
  icon: JSX.Element;
  wrapperWidth: number;
  wrapperHeight: number;
}

const IconWrapper = ({
  color,
  wrapperBorderColor,
  icon,
  wrapperWidth,
  wrapperHeight,
}: IconWrapperProps): JSX.Element => {
  return (
    <Box
      sx={{
        ...(wrapperBorderColor !== null && {
          border: '1px solid',
          borderColor: wrapperBorderColor,
        }),
        ...(wrapperBorderColor == null && {
          border: 'Opx !important',
          borderColor: 'transparent',
        }),

        backgroundColor: color,
        borderRadius: borderRadius.full,
        padding: '2px',
        width: wrapperWidth,
        height: wrapperHeight,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {icon}
    </Box>
  );
};
export default IconWrapper;
