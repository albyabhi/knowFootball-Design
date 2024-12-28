import { ThemeProvider } from '@mui/material/styles'; // Import ThemeProvider
import { theme } from './theme'; // Your theme configuration
import Home from './Components/Home';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
