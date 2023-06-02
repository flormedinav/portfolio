import {
  Box,
  Button,
  CardMedia,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";

const CardsProjects = ({ name, description, img, github, tech }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        // mr: "1rem",
        p: "10px",
        borderRadius: "10px",
        width: { xs: "100%", md: "calc(50% - 1rem)" },
        // borderBottom: '1px solid',
        // borderBottomColor: theme.palette.primary.main,
        mb: "1.5rem",
      }}
    >
      <Paper
        elevation={5}
        sx={{
          background: theme.palette.background.main,
          width: "100%",
          height: { xs: "300px", sm: "380px" },
          display: "flex",
          justifyContent: "center",
          mb: "1.25rem",
          "&:hover": {
            transform: "translateY(-4px)",
          },
        }}
      >
        <CardMedia
          component="img"
          src={img}
          sx={{
            objectFit: "contain",
            // pl: { sm: "5%", md: "3%" },
            // pr: { sm: "5%", md: "3%" },
            pt: { sm: "5%" },
            pb: { sm: "5%" },
          }}
        />
      </Paper>
      <Typography
        variant="subtitle1"
        sx={{
          fontWeight: "700",
          mb: "0.5rem",
          fontSize: "1.25rem",
          textTransform: "uppercase",
          color: theme.palette.primary.main,
        }}
      >
        {name}
      </Typography>
      <Typography variant="subtitle1" sx={{ mb: "0.3rem" }}>
        {description}
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{ color: "gray", fontSize: "0.75rem", mb: "1rem", height: "50px" }}
      >
        {tech}
      </Typography>
      <Button variant="outlined">
        <a
          href={github}
          target="back"
          style={{
            textDecoration: "none",
            color: theme.palette.primary.main,
          }}
        >
          Ir al repositorio ➜
        </a>
      </Button>
    </Box>
  );
};

export default CardsProjects;
