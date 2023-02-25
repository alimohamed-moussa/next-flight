import { fontWeight, borderRadius, fontSize } from '../globals';
import { palette } from '../palette';
import { typography } from '../typography';

export const MuiSwitch = {
  defaultProps: {
    disableRipple: true,
  },
  styleOverrides: {
    root: {
      width: '41px !important',
      height: '21px',
      padding: '0px',
      switchBase: {
        checked: {
          transform: 'translateX(26px) !important',
        },
      },
    },
    switchBase: {
      color: palette.orange.main,
      padding: '1px',
      '&$checked': {
        '& + $track': {
          backgroundColor: palette.orange.main,
        },
      },
    },
    thumb: {
      color: '#fff',
      width: '18px',
      height: '18px',
      marginBottom: '0.5px',
    },
    track: {
      borderRadius: borderRadius.sLarge,
      backgroundColor: palette.rare.lighter,
      opacity: '1 !important',
      '&:after, &:before': {
        color: 'white',
        fontSize: fontSize.xs,
        fontFamily: typography.fontFamily,
        fontWeight: fontWeight.normal,
        position: 'absolute',
        top: '5px',
      },
      '&:after': {
        content: "'ON'",
        left: '6px',
      },

      '&:before': {
        content: "'OFF'",
        right: '3px',
      },
    },
  },
};
