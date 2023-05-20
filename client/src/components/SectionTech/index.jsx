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

const SectionTech = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        height: '50vh',
        width: '100%',
      }}
    >
      <Container sx={{ pt: '5rem' }}>
        <Typography
          variant='h4'
          sx={{
            fontSize: '2.5rem',
            textTransform: 'uppercase',
            color: theme.palette.primary.main,
            fontWeight: '600',
            mb: '2rem',
          }}
        >
          Tech Skills
        </Typography>
        <Box sx={{ display: 'flex' }}>
          <Box>
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
            <Typography variant='subtitle1'>Javascript</Typography>
            <Typography variant='subtitle1'>React.js</Typography>
            <Typography variant='subtitle1'>Redux</Typography>
            <Typography variant='subtitle1'>Javascript</Typography>
            <Typography variant='subtitle1'>Javascript</Typography>
            <Typography variant='subtitle1'>Javascript</Typography>
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
              Backend
            </Typography>
            <Typography variant='subtitle1'>Javascript</Typography>
            <Typography variant='subtitle1'>React.js</Typography>
            <Typography variant='subtitle1'>Redux</Typography>
            <Typography variant='subtitle1'>Javascript</Typography>
            <Typography variant='subtitle1'>Javascript</Typography>
            <Typography variant='subtitle1'>Javascript</Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default SectionTech;
