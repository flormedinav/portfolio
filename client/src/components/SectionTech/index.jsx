import {
  Box,
  CardMedia,
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
import Title from '../Title';
import {
  techFrontend,
  techBackend,
  tools,
  agile,
  techAndImg,
} from '../../texts/sectionTech';
import codeImage from '../../assets/code.jpg';

const SectionTech = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        height: '60vh',
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* <img
        src={codeImage}
        alt='Imagen de fondo'
        style={{
          width: '100%',
          opacity: 0.07,
        }}
      /> */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
          // backgroundImage:
          //   'linear-gradient(270deg, rgba(0,0,0,0) 51%, rgba(98,217,183,0.2) 100%)',
        }}
      >
        {' '}
        <Container sx={{ pt: '5rem' }}>
          <Title text='tecnologías' />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <Box sx={{ mb: '1.5rem' }}>
              <Typography
                variant='h4'
                sx={{
                  fontWeight: '600',
                  mb: '1rem',
                  fontSize: '1.5rem',
                }}
              >
                Frontend
              </Typography>
              <Box sx={{ mb: '1.5rem', display: 'flex' }}></Box>
            </Box>

            <Box sx={{ mb: '1.5rem' }}>
              <Typography
                variant='h4'
                sx={{
                  fontWeight: '600',
                  mb: '1rem',
                  fontSize: '1.5rem',
                  color: theme.palette.primary.main,
                }}
              >
                Backend
              </Typography>
              <Typography
                variant='subtitle1'
                sx={{
                  fontSize: '1.1rem',
                }}
              >
                Javascript{' '}
                <span
                  style={{
                    color: theme.palette.primary.main,
                    fontWeight: '600',
                  }}
                >
                  |
                </span>
                Node.js{' '}
                <span
                  style={{
                    color: theme.palette.primary.main,
                    fontWeight: '600',
                  }}
                >
                  |
                </span>{' '}
                Express.js{' '}
                <span
                  style={{
                    color: theme.palette.primary.main,
                    fontWeight: '600',
                  }}
                >
                  |
                </span>{' '}
                PostgreSQL{' '}
                <span
                  style={{
                    color: theme.palette.primary.main,
                    fontWeight: '600',
                  }}
                >
                  |
                </span>{' '}
                Sequelize{' '}
                <span
                  style={{
                    color: theme.palette.primary.main,
                    fontWeight: '600',
                  }}
                >
                  |
                </span>{' '}
                Json Web Token{' '}
                <span
                  style={{
                    color: theme.palette.primary.main,
                    fontWeight: '600',
                  }}
                >
                  |
                </span>{' '}
                Passport{' '}
                <span
                  style={{
                    color: theme.palette.primary.main,
                    fontWeight: '600',
                  }}
                >
                  |
                </span>{' '}
                Swagger{' '}
                <span
                  style={{
                    color: theme.palette.primary.main,
                    fontWeight: '600',
                  }}
                >
                  |
                </span>{' '}
                Joi.
              </Typography>
            </Box>

            <Box sx={{ mb: '1.5rem' }}>
              <Typography
                variant='h4'
                sx={{
                  fontWeight: '600',
                  mb: '1rem',
                  fontSize: '1.5rem',
                }}
              >
                Herramientas
              </Typography>
              <Typography
                variant='subtitle1'
                sx={{
                  fontSize: '1.1rem',
                }}
              >
                Javascript | HTML5 | CSS3 | Responsive Design | React.js | Redux
                | Redux Toolkit | TanStack Query | Material UI | JQuery | AJAX |
                Storybook.
              </Typography>
            </Box>
            <Box>
              <Typography
                variant='h4'
                sx={{
                  fontWeight: '600',
                  mb: '1rem',
                  fontSize: '1.5rem',
                }}
              >
                Ágil
              </Typography>
              <Typography
                variant='subtitle1'
                sx={{
                  fontSize: '1.1rem',
                }}
              >
                Javascript | HTML5 | CSS3 | Responsive Design | React.js | Redux
                | Redux Toolkit | TanStack Query | Material UI | JQuery | AJAX |
                Storybook.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default SectionTech;
