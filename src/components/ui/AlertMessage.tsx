import { IconButton, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Icon from './Icon';
import Button from './Button';
import * as React from 'react';

import {
  borderRadius,
  fontWeight,
  lineHeight,
  fontSize,
  shadow,
} from '../../lib/theme/globals';
import { palette } from '../../lib/theme/palette';
import { ColorType } from '../../lib/ColorType';

interface AlertMessageProps {
  alertMessageWidth: number;
  color: string;
  alertContent: string;
  buttonText: string;
  btnColor: ColorType;

  onAction: () => void;
  onClose: () => void;
}

const AlertMessage = ({
  alertMessageWidth,
  color,
  alertContent,
  buttonText,
  btnColor,
  onAction,
  onClose,
}: AlertMessageProps): JSX.Element => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0px 3px 0px 15px',
        width: alertMessageWidth,
        height: '34px',
        backgroundColor: color,
        boxShadow: shadow.one,
        borderRadius: borderRadius.small,
      }}
    >
      <Typography
        sx={{
          fontStyle: 'normal',
          fontWeight: fontWeight.normal,
          fontSize: fontSize.md,
          lineHeight: lineHeight.small,
          color: palette.white,
        }}
      >
        {alertContent}
      </Typography>
      <Stack direction='row'>
        <Button
          sx={{
            paddingRight: '0px',
            textTransform: 'uppercase',
            fontStyle: 'normal',
            fontWeight: fontWeight.medium,
            fontSize: fontSize.md,
            lineHeight: lineHeight.small,
          }}
          size='small'
          color={btnColor}
          onClick={onAction}
        >
          {buttonText}
        </Button>
        <IconButton onClick={onClose} sx={{ paddingLeft: '0px' }}>
          <Icon color={palette.white.main} name='close' size={15} />
        </IconButton>
      </Stack>
    </Box>
  );
};

export default AlertMessage;
