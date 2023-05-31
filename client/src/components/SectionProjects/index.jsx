import {
  Box,
  Button,
  CardMedia,
  Container,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";
import Title from "../Title";
import { projects } from "./projects";
import PaginationComponent from "../Pagination";
import SlideFavorites from "../SlideFavorites";

const SectionProjects = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        background: theme.palette.background.paper,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        pt: "4rem",
        pb: "4rem",
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Title text="Proyectos" />
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            mb: "1rem",
          }}
        >
          {projects.map(({ name, img, description, github }) => (
            <Box
              sx={{
                m: "0.5rem",
                p: "10px",
                borderRadius: "10px",
                width: "calc(50% - 1rem)",
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
                  height: "420px",
                  display: "flex",
                  justifyContent: "center",
                  mb: "1.25rem",
                  "&:hover": {
                    transform: "translateY(-4px)", // Cambia la posición vertical del elemento
                  },
                }}
              >
                <CardMedia
                  component="img"
                  src={img}
                  sx={{ pt: "12%", pl: "5%", pr: "5%", pb: "12%" }}
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
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default SectionProjects;
