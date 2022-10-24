import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './styles/theme';
import { Mapping } from './components/Mapping';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Mapping />
    </ThemeProvider>
  );
}

export default App;
