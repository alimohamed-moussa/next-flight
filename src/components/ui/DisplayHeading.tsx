import * as React from 'react';
import Typography from '@mui/material/Typography';
import { fontWeight, lineHeight, fontSize } from '../../lib/theme/globals';
import { palette } from '../../lib/theme/palette';

interface DisplayHeadingProps {
  result?: number;
  isActive: boolean;
  label: string;
}

const DisplayHeading = ({
  result,
  isActive,
  label,
}: DisplayHeadingProps): JSX.Element => {
  return result !== undefined && result >= 0 ? (
    <Typography
      sx={{
        fontSize: {
          sm: fontSize.lg,
          md: fontSize.lg,
        },
        fontWeight: fontWeight.medium,
        lineHeight: lineHeight.large,
        color: isActive ? palette.somber.dark : palette.neutral.main,
      }}
    >
      {label} ({result})
    </Typography>
  ) : (
    <Typography
      sx={{
        fontSize: {
          sm: fontSize.lg,
          md: fontSize.lg,
        },
        fontWeight: fontWeight.medium,
        lineHeight: lineHeight.large,
        color: isActive ? palette.somber.dark : palette.neutral.main,
      }}
    >
      {label}
    </Typography>
  );
};
export default DisplayHeading;
