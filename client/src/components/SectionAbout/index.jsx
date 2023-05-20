import { Box, CardMedia, Container, Typography, useTheme } from '@mui/material';
import profilePhoto from '../../assets/Perfil2.png';

const SectionAbout = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        height: '60vh',
        width: '100%',
        background: theme.palette.background.paper,
      }}
    >
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          pt: '5rem',
        }}
      >
        <Box
          sx={{
            height: '100%',
            borderRadius: '30px',
            overflow: 'hidden',
            background:
              'linear-gradient(180deg, rgba(0,0,0,0) 20%, rgba(98,217,183,0.2805497198879552) 76%)',
            borderRadius: '50%',
          }}
        >
          <CardMedia
            component='img'
            src={profilePhoto}
            sx={{
              width: 'auto',
              width: '390px',
              height: '400px',
            }}
          />
        </Box>
        <Box sx={{ width: '700px', ml: '5rem' }}>
          <Typography
            variant='h4'
            sx={{
              textTransform: 'uppercase',
              color: theme.palette.primary.main,
              fontWeight: '600',
              mb: '2rem',
            }}
          >
            ¿Quién soy?
          </Typography>
          <Typography
            variant='h4'
            sx={{
              fontWeight: '600',
              mb: '1rem',
              fontSize: '1.5rem',
            }}
          >
            Soy Florencia Medina, desarrolladora Web Full Stack.
          </Typography>
          <Typography
            variant='subtitle1'
            sx={{ mb: '1rem', fontSize: '1.15rem' }}
          >
            Cuento experiencia en proyectos utilizando tecnologías como{' '}
            <span
              style={{ color: theme.palette.primary.main, fontWeight: '600' }}
            >
              JavaScript, React.js, Redux, Node.js, Express y PostgreSQL
            </span>
            , entre otras.
          </Typography>
          <Typography variant='subtitle1' sx={{ fontSize: '1.15rem' }}>
            He participado en la realización de varios proyectos individuales y
            grupales, aplicando la metodología SCRUM con sprints semanales.
            Además de mi experiencia en desarrollo, también he desempeñado el
            rol de Teaching Assistant en Soy Henry. Estas experiencias me han
            permitido desarrollar habilidades de liderazgo, capacidad de escucha
            activa, trabajo en equipo y un fuerte compromiso.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default SectionAbout;
