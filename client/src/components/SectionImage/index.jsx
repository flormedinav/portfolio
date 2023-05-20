import {
  Box,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from '@mui/material';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CircleIcon from '@mui/icons-material/Circle';
import codeImage from '../../assets/code.jpg';

const SectionImage = () => {
  const theme = useTheme();
  return (
    // <Box
    //   sx={{
    //     height: '30vh',
    //     width: '100%',
    //     backgroundImage: `url(${codeImage})`,
    //     overFlow: 'hidden',
    //   }}
    // >
    //   <Box
    //     sx={{
    //       background:
    //         'linear-gradient(270deg, rgba(0,0,0,0) 51%, rgba(98,217,183,0.20772058823529416) 100%)',
    //     }}
    //   >
    //     <Container sx={{ pt: '5rem' }}></Container>
    //   </Box>
    // </Box>
    <Box
      sx={{
        height: '30vh',
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <img
        src={codeImage}
        alt='Imagen de fondo'
        style={{
          width: '100%',
          opacity: 0.07,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
          backgroundImage:
            'linear-gradient(270deg, rgba(0,0,0,0) 51%, rgba(98,217,183,0.2) 100%)',
        }}
      ></Box>
      <Container sx={{ pt: '5rem' }}></Container>
    </Box>
  );
};

export default SectionImage;
