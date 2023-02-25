import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import IconWrapper from './IconWrapper';
import {
  borderRadius,
  fontWeight,
  lineHeight,
  fontSize,
} from '../../lib/theme/globals';
import { palette } from '../../lib/theme/palette';

interface OverviewProps {
  result: string | number;
  icon: JSX.Element;
  label: string;
  overviewWidth: number;
  overviewheight: number;
  color: string;
  iconWrapperColor: string;
  iconWrapperSize: number;
}

const Overview = ({
  result,
  icon,
  label,
  overviewWidth,
  overviewheight,
  color,
  iconWrapperColor,
  iconWrapperSize,
}: OverviewProps): JSX.Element => {
  return (
    <Box
      sx={{
        backgroundColor: color,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '5px',
        paddingBottom: '5px',
        width: overviewWidth,
        height: overviewheight,
        borderRadius: borderRadius.small,
      }}
    >
      <IconWrapper
        color={iconWrapperColor}
        icon={icon}
        wrapperHeight={iconWrapperSize}
        wrapperWidth={iconWrapperSize}
      />
      <Typography
        sx={{
          textTransform: 'capitalize',
          fontSize: fontSize.base,
          fontWeight: fontWeight.normal,
          lineHeight: lineHeight.normal,
          color: palette.rare.main,
          marginLeft: '3px',
        }}
      >
        {label} :
      </Typography>
      <Typography
        sx={{
          marginLeft: '3px',
          textTransform: 'capitalize',
          fontSize: fontSize.base,
          fontWeight: fontWeight.bold,
          lineHeight: lineHeight.loose,
          color: palette.somber.dark,
        }}
      >
        {result}
      </Typography>
    </Box>
  );
};
export default Overview;
