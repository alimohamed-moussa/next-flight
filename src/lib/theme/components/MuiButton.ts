import { fontWeight, borderRadius, lineHeight, fontSize } from '../globals';
import { palette } from '../palette';

export const MuiButton = {
  defaultProps: {
    disableRipple: true,
    disableElevation: true,
    disableFocusRipple: true,
  },
  styleOverrides: {
    contained: {
      color: palette.white.main,
    },
    sizeMedium: {
      textTransform: 'capitalize' as any,
      height: '39px !important',
      paddingTop: '8px',
      paddingBottom: '8px',
      paddingLeft: '20px',
      paddingRight: '20px',
      borderRadius: borderRadius.sLarge,
      fontWeight: fontWeight.semiBold,
      fontSize: fontSize.base,
      lineHeight: lineHeight.medium,
    },
    outlinedSizeMedium: {
      height: '30px',
      fontWeight: fontWeight.medium,
      fontSize: fontSize.default,
      lineheight: lineHeight.default,
    },
    endIcon: {
      borderRadius: borderRadius.large,
      border: '1px',
      fontWeight: fontWeight.normal,
      fontSize: fontSize.default,
      lineHeight: lineHeight.default,
    },
    iconSizeMedium: {
      marginRight: '-10px',
      paddingLeft: '9px',
    },
  },
};
