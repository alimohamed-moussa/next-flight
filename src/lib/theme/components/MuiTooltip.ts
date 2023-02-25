import { borderRadius, fontWeight, fontSize, shadow } from '../globals';
import { palette } from '../palette';

export const MuiTooltip = {
  styleOverrides: {
    tooltip: {
      fontSize: fontSize.xs,
      fontWeight: fontWeight.normal,
      backgroundColor: palette.somber.dark,
      boxShadow: shadow.one,
      borderRadius: borderRadius.small,
      padding: '8px',
    },
  },
};
