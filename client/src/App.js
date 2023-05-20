import { Route, Routes } from 'react-router-dom';
import HomePage from './views/HomePage';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { useState } from 'react';
import { darkTheme, lightTheme } from './themes';

const App = () => {
  const [theme, setTheme] = useState(darkTheme);

  const handleThemeChange = () => {
    setTheme(theme === darkTheme ? lightTheme : darkTheme);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        {/* <Routes>
        <Route path='/home' />
      </Routes> */}
        <CssBaseline />
        <HomePage />
      </ThemeProvider>
    </>
  );
};

export default App;
