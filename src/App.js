import { Route, Routes } from "react-router-dom";
import HomePage from "./views/HomePage";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { darkTheme, lightTheme } from "./themes";
import NavBar from "./components/NavBar";
import ScrollToTopButton from "./components/ScrollToTopButton";

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
        <NavBar />
        <HomePage />
        <ScrollToTopButton />
      </ThemeProvider>
    </>
  );
};

export default App;
