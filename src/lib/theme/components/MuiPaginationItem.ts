import { palette } from '../palette';

export const MuiPaginationItem = {
  styleOverrides: {
    root: {
      '&.Mui-selected': {
        color: palette.primary.main,
        backgroundColor: 'transparent',
      },
    },
  },
};
