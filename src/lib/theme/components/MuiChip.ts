import { fontWeight, borderRadius, lineHeight, fontSize } from '../globals';
import { palette } from '../palette';

export const MuiChip = {
  styleOverrides: {
    sizeMedium: {
      borderRadius: borderRadius.medium,
      height: '20px',
      paddingTop: '10px',
      paddingBottom: '10px',
      textTransform: 'uppercase' as any,
      fontStyle: 'normal',
      fontWeight: fontWeight.semiBold,
      fontSize: fontSize.sm,
      lineHeight: lineHeight.default,
    },
    filled: {
      color: palette.white.main,
    },
  },
  variants: [
    {
      props: { variant: 'alert' as any },
      style: {
        backgroundColor: 'transparent',
        textTransform: 'uppercase' as any,
        border: 'none',
        fontStyle: 'normal',
        fontWeight: fontWeight.bold,
        fontSize: fontSize.sm,
        lineHeight: lineHeight.default,
        color: palette.red.dark,
      },
    },
  ],
};
