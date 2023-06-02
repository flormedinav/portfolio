import { Box, Container } from "@mui/material";
import SectionStart from "../components/SectionStart";
import SectionAbout from "../components/SectionAbout";
import SectionTech from "../components/SectionTech";
import SectionImage from "../components/SectionImage";
import SectionProjects from "../components/SectionProjects";
import Footer from "../components/Footer";
import SectionContact from "../components/SectionContact";
import ScrollToTopButton from "../components/ScrollToTopButton";

const HomePage = () => {
  return (
    <Box>
      <Box id="inicio">
        <SectionStart />
      </Box>
      <SectionImage />
      <Box id="sobre-mi">
        <SectionAbout />
      </Box>

      <Box id="tecnologias">
        <SectionTech />
      </Box>

      <Box id="proyectos">
        <SectionProjects />
      </Box>

      <Box id="contacto">
        <SectionContact />
      </Box>
      <Footer />
    </Box>
  );
};

export default HomePage;
