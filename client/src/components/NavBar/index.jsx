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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
// import LinkRouter from '../LinkRouter';
import { useState, useEffect } from "react";
import ButtonNav from "../ButtonNav";
import { Link } from "react-scroll";
// import NavBarDrawer from '../NavBarDrawer';

const NavBar = ({ handleThemeChange }) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

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
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const sections = [
        "inicio",
        "sobre-mi",
        "tecnologias",
        "proyectos",
        "contacto",
      ];

      for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(sections[i]);

        if (section) {
          const { top, bottom } = section.getBoundingClientRect();
          const isVisible =
            top < windowHeight / 2 && bottom >= windowHeight / 2;

          if (isVisible) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <AppBar
        component="nav"
        position="fixed"
        sx={{
          background: "transparent",
          // background: trigger ? `${theme.palette.nav.main}` : `transparent`,
          backdropFilter: trigger ? "blur(20px)" : ``,
          boxShadow: trigger ? "" : "none",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "transparent",
          }}
        >
          <Box sx={{ display: { xs: "flex", sm: "flex", md: "none" } }}>
            <IconButton
              color="white"
              size="large"
              onClick={handleDrawerToggle}
              sx={{
                border: "1px solid",
                borderColor: "#BF9A56",
                width: "42px",
                height: "42px",
                mt: "5px",
              }}
            >
              <MenuIcon sx={{ color: "white" }} />
            </IconButton>
          </Box>

          <Box
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "flex",
              },
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Link to="inicio" smooth={true} duration={500}>
              <ButtonNav text="Inicio" isActive={activeSection === "inicio"} />
            </Link>
            <Link to="sobre-mi" smooth={true} duration={500}>
              <ButtonNav
                text="Sobre mi"
                isActive={activeSection === "sobre-mi"}
              />
            </Link>
            <Link to="tecnologias" smooth={true} duration={500}>
              <ButtonNav
                text="Tecnologías"
                isActive={activeSection === "tecnologias"}
              />
            </Link>
            <Link to="proyectos" smooth={true} duration={500}>
              <ButtonNav
                text="Proyectos"
                isActive={activeSection === "proyectos"}
              />
            </Link>
            <Link to="contacto" smooth={true} duration={500}>
              <ButtonNav
                text="Contacto"
                isActive={activeSection === "contacto"}
              />
            </Link>
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
