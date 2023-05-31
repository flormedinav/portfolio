import { Box, Container, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        height: '25vh',
        width: '100%',
        // background: theme.palette.background.paper,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        pt: '4rem',
        pb: '4rem',
      }}
    >
      <Container>
        <Typography>Soy el footer</Typography>
      </Container>
    </Box>
  );
};

export default Footer;
