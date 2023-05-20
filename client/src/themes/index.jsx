import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
  palette: {
    mode: 'light',
    typography: {
      fontFamily: 'Khand, sans-serif',
    },
    primary: {
      main: '#62D9B7',
      light: 'rgb(129, 224, 197)',
      dark: 'rgb(68, 151, 128)',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    // secondary: {
    //   main: '#BF9A56',
    //   light: '#D9A362',
    //   dark: '#8C7446',
    //   contrastText: '#fff',
    // },
    background: {
      main: '#ffff',
      default: '#F5F5F5',
    },
    section: {
      main: '#F5F5F5',
      secondary: '#141E37',
    },
    text: {
      primary: 'rgba(0, 0, 0)',
      secondary: 'rgba(0, 0, 0, 0.8)',
      disabled: 'rgba(0, 0, 0, 0.6)',
      default: '#ffff',
    },
    error: {
      main: '#d32f2f',
      light: '#ef5350',
      dark: '#c62828',
      contrastText: '#fff',
    },
    warning: {
      main: '#ed6c02',
      light: '#ff9800',
      dark: '#e65100',
      contrastText: '#fff',
    },
    info: {
      main: '#0288d1',
      light: '#03a9f4',
      dark: '#01579b',
      contrastText: '#fff',
    },
    success: {
      main: '#2e7d32',
      light: '#4caf50',
      dark: '#1b5e20',
      contrastText: '#fff',
    },
    divider: {
      main: '#BFBFBF',
      divider: '#BFBFBF',
    },
  },
});

export const darkTheme = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
  palette: {
    mode: 'dark',
    // primary: {
    //   main: '#009D66',
    //   light: 'rgb(51, 176, 132)',
    //   dark: 'rgb(0, 109, 71)',
    //   contrastText: 'rgba(0, 0, 0, 0.87)',
    // },
    primary: {
      main: '#62D9B7',
      main: 'rgb(68, 151, 128)',
      light: 'rgb(129, 224, 197)',
      dark: '#62D9B7',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    // // // primary: {
    // //   main: '#ed6c02',
    // //   light: '#ff9800',
    // //   dark: '#e65100',
    // // // },
    // secondary: {
    //   main: '#000905',
    //   light: 'rgb(129, 224, 197)',
    //   dark: 'rgb(68, 151, 128)',
    //   contrastText: 'rgba(0, 0, 0, 0.87)',
    // },
    background: {
      paper: '#000000',
      default: '#0C0C0C',
    },
    section: {
      primary: '#313131',
      secondary: '#1C1C1C',
    },
    text: {
      primary: '#ffff',
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.1)',
      default: '#ffff',
    },
    error: {
      main: '#d32f2f',
      light: '#ef5350',
      dark: '#c62828',
      contrastText: '#fff',
    },
    warning: {
      main: '#ed6c02',
      light: '#ff9800',
      dark: '#e65100',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    info: {
      main: '#0288d1',
      light: '#03a9f4',
      dark: '#01579b',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    success: {
      main: '#2e7d32',
      light: '#4caf50',
      dark: '#1b5e20',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    divider: {
      main: 'rgba(255, 255, 255, 0.12)',
      divider: 'rgba(255, 255, 255, 0.12)',
    },
  },
});
