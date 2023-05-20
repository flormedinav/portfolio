import { Box, Container } from '@mui/material';
import SectionStart from '../components/SectionStart';
import SectionAbout from '../components/SectionAbout';
import SectionTech from '../components/SectionTech';
import SectionImage from '../components/SectionImage';

const HomePage = () => {
  return (
    <Box>
      <SectionStart />
      <SectionAbout />
      <SectionTech />
      <SectionImage />
    </Box>
  );
};

export default HomePage;
