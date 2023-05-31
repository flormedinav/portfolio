import { Box, Container } from "@mui/material";
import SectionStart from "../components/SectionStart";
import SectionAbout from "../components/SectionAbout";
import SectionTech from "../components/SectionTech";
import SectionImage from "../components/SectionImage";
import SectionProjects from "../components/SectionProjects";
import Footer from "../components/Footer";
import SectionContact from "../components/SectionContact";

const HomePage = () => {
  return (
    <Box>
      <SectionStart />
      <SectionImage />
      <SectionAbout />
      <SectionTech />
      <SectionProjects />
      <SectionContact />
      <Footer />
    </Box>
  );
};

export default HomePage;
