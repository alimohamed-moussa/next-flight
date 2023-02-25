import '@material-ui/core/styles';
declare module '@mui/material/styles' {
  interface Palette {
    red?: Palette['primary'];
    yellow?: Palette['primary'];
    rare?: Palette['primary'];
    somber?: Palette['primary'];
    neutral?: Palette['primary'];
    black?: Palette['primary'];
    white?: Palette['primary'];
    orange?: Palette['primary'];
    rose?: Palette['primary'];
    tangerine?: Palette['primary'];
    brown?: Palette['primary'];
    darkGrey?: Palette['primary'];
    // darkBlue?: Palette['primary'];
  }
  interface PaletteOptions {
    red?: PaletteOptions['primary'];
    yellow?: PaletteOptions['primary'];
    rare?: PaletteOptions['primary'];
    somber?: PaletteOptions['primary'];
    neutral?: PaletteOptions['primary'];
    black?: PaletteOptions['primary'];
    white?: PaletteOptions['primary'];
    orange?: PaletteOptions['primary'];
    rose?: PaletteOptions['primary'];
    tangerine?: PaletteOptions['primary'];
    brown?: PaletteOptions['primary'];
    darkGrey?: PaletteOptions['primary'];
    // darkBlue?: PaletteOptions['primary'];
  }
  // interface BreakpointOverrides {
  //   xs: false;
  //   sm: false;
  //   md: false;
  //   lg: false;
  //   xl: false;
  // }
}
