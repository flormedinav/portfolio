import {
  Box,
  ListItem,
  ListItemText,
  Drawer,
  Switch,
  Button,
  List,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import ButtonNav from "../ButtonNav";

const NavBarDrawer = ({ open, handleDrawerToggle, handleThemeChange }) => {
  const [activeSection, setActiveSection] = useState("inicio");

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
    <Drawer
      open={open}
      anchor="right"
      onClose={handleDrawerToggle}
      sx={{
        display: { xs: "block", sm: "block", md: "none" },
        "& .MuiDrawer-paper": { boxSizing: "border-box", width: "60vw" },
        zIndex: 1200,
      }}
    >
      <Box sx={{ p: 2 }}>
        <List sx={{ display: "flex", flexDirection: "column" }}>
          <Link to="inicio" smooth={true} duration={1000}>
            <ButtonNav text="Inicio" isActive={activeSection === "inicio"} />
          </Link>
          <Link to="sobre-mi" smooth={true} duration={1000}>
            <ButtonNav
              text="Sobre mi"
              isActive={activeSection === "sobre-mi"}
            />
          </Link>
          <Link to="tecnologias" smooth={true} duration={1000}>
            <ButtonNav
              text="Tecnologías"
              isActive={activeSection === "tecnologias"}
            />
          </Link>
          <Link to="proyectos" smooth={true} duration={1000}>
            <ButtonNav
              text="Proyectos"
              isActive={activeSection === "proyectos"}
            />
          </Link>
          <Link to="contacto" smooth={true} duration={1000}>
            <ButtonNav
              text="Contacto"
              isActive={activeSection === "contacto"}
            />
          </Link>
        </List>
      </Box>
    </Drawer>
  );
};

export default NavBarDrawer;
