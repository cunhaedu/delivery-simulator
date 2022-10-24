import { createTheme, PaletteOptions } from '@mui/material';

const palette: PaletteOptions = {
  mode: 'dark',
  primary: {
    main: '#FFCD00',
    contrastText: '#252526',
  },
  background: {
    default: '#252526',
  }
}

export const theme = createTheme({
  palette,
});
