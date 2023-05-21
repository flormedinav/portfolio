import {
  Box,
  Button,
  CardMedia,
  Container,
  Typography,
  useTheme,
} from '@mui/material';

const SectionStart = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        height: '80vh',
        width: '100%',
        background:
          // 'linear-gradient(90deg, rgba(0,0,0,0) 51%, rgba(98,217,183,0.2861519607843137) 100%)',
          'linear-gradient(90deg, rgba(0,0,0,0) 51%, rgba(98,217,183,0.20772058823529416) 100%)',
      }}
    >
      <Container
        sx={{ display: 'flex', justifyContent: 'space-between', pt: '200px' }}
      >
        <Box>
          <Typography
            variant='h2'
            sx={{
              mb: '1rem',
              fontWeight: '700',
              fontSize: '5rem',
            }}
          >
            Hey
            <span style={{ color: theme.palette.primary.main }}>!</span>
          </Typography>
          <Typography
            variant='h3'
            sx={{
              textTransform: 'uppercase',
              fontWeight: '600',
              mb: '0.5rem',
              fontSize: '2.5rem',
            }}
          >
            Soy{' '}
            <span style={{ color: theme.palette.primary.main }}>
              Florencia Medina
            </span>
          </Typography>
          <Typography
            variant='h5'
            sx={{
              textTransform: 'uppercase',
              fontWeight: '600',
              color: theme.palette.text.secondary,
              mb: '1rem',
              fontSize: '1.5rem',
            }}
          >
            Desarrolladora web full stack
          </Typography>

          <Button
            variant='contained'
            size='large'
            sx={{ color: 'white', fontWeight: '600', mt: '6rem', mr: '1rem' }}
          >
            Contactarme
          </Button>
          <Button
            variant='outlined'
            size='large'
            sx={{ color: 'white', fontWeight: '600', mt: '6rem' }}
          >
            Descargar CV
          </Button>

          {/* <Box>
            <Box>
              <Typography>Email</Typography>
              <Typography>flormedinav7@gmail.com</Typography>
            </Box>
            <Box>
              <Typography>Celular</Typography>
              <Typography>flormedinav7@gmail.com</Typography>
            </Box>
            <Box>
              <Typography>País</Typography>
              <Typography>Argentina</Typography>
            </Box>
          </Box> */}
        </Box>
        {/* <Box
          sx={{
            width: '400px',
            height: '400px',
            // border: '1px solid',
            // borderColor: 'none',
            borderRadius: '50%',
            overflow: 'hidden',
          }}
        >
          <CardMedia component='img' src={profilePhoto} sx={{}} />
        </Box> */}
        <Box sx={{ width: '400px' }}>
          <code>
            {`
              const bienvenida = () => {
                const sobreMi = {
                  nombre: 'Florencia',
                  apellido: 'Medina',
                  imagen: 'florencia.jpg',
                  país: 'Argentina',
                };
              
                return sobreMi;
              };
              
              bienvenida();
            `}
          </code>
        </Box>
      </Container>
    </Box>
  );
};

export default SectionStart;
