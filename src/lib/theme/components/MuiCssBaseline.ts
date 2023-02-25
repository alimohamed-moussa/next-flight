import { palette } from '../palette';

export const MuiCssBaseline = {
  styleOverrides: `
  html,
  body {
    padding: 0;
    margin: 0;
    background-color: ${palette.background.default};
  }
  * {
    box-sizing: border-box;
  }  
`
};
