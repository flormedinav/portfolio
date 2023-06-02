import { Box, CardMedia, Paper, Typography, useTheme } from "@mui/material";

const CardsProjects = ({ name, description, img, github }) => {
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
            transform: "translateY(-4px)", // Cambia la posición vertical del elemento
          },
        }}
      >
        {/*  pt: "12%", pl: "5%", pr: "5%", pb: "12%" */}
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
        sx={{ color: "gray", fontSize: "0.75rem", mb: "1rem" }}
      >
        #Javscript #React #Redux #Node #Express
      </Typography>
      <Typography
        sx={{
          fontSize: "1rem",
          mt: "0.3rem",
          borderBottom: "1px solid transparent", // Línea inferior inicialmente transparente
          transition: "border-color 0.3s ease", // Transición suave para el cambio de color de la línea
          "&:hover": {
            borderBottomColor: theme.palette.primary.main,
          },
        }}
      >
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
      </Typography>
    </Box>
  );
};

export default CardsProjects;
