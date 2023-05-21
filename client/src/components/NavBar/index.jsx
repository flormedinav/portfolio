import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Switch,
  useScrollTrigger,
  useTheme,
  Typography,
  Button,
  CardMedia,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
// import LinkRouter from '../LinkRouter';
import { useState, useEffect } from 'react';
import ButtonNav from '../ButtonNav';
// import NavBarDrawer from '../NavBarDrawer';

const NavBar = ({ handleThemeChange }) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  const handleDrawerToggle = () => {
    setOpen(!open);
    setShowMenu(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setOpen(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <AppBar
        component='nav'
        position='fixed'
        sx={{
          background: 'transparent',
          background: trigger ? `${theme.palette.nav.main}` : `transparent`,
          backdropFilter: trigger ? 'blur(20px)' : ``,
          boxShadow: trigger ? '' : 'none',
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            backgroundColor: 'transparent',
          }}
        >
          <Box sx={{ display: { xs: 'flex', sm: 'flex', md: 'none' } }}>
            <IconButton
              color='white'
              size='large'
              onClick={handleDrawerToggle}
              sx={{
                border: '1px solid',
                borderColor: '#BF9A56',
                width: '42px',
                height: '42px',
                mt: '5px',
              }}
            >
              <MenuIcon sx={{ color: 'white' }} />
            </IconButton>
          </Box>

          <Box
            sx={{
              display: {
                xs: 'none',
                sm: 'none',
                md: 'flex',
              },
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <ButtonNav text='Inicio' />
            <ButtonNav text='Sobre mi' />
            <ButtonNav text='Tecnologías' />
            <ButtonNav text='Proyectos' />
            <ButtonNav text='Contacto' />
          </Box>
        </Toolbar>
      </AppBar>

      {/* <NavBarDrawer
        open={open}
        handleDrawerToggle={handleDrawerToggle}
        handleThemeChange={handleThemeChange}
      /> */}
    </>
  );
};

export default NavBar;
