import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
  ThemeOptions
} from '@mui/material/styles';
import { palette } from './palette';
import { typography } from './typography';
import { breakpoints } from './breakpoints';
import * as components from './components';
import { CssBaseline } from '@mui/material';

const theme: ThemeOptions = createTheme({
  breakpoints,
  palette,
  components,
  typography
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </MuiThemeProvider>
);

export default theme;
