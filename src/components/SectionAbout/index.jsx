import { Box, CardMedia, Container, Typography, useTheme } from "@mui/material";
import profilePhoto from "../../assets/Perfil2.png";
import profilePhoto2 from "../../assets/perfil.png";
import Title from "../Title";

const SectionAbout = () => {
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
        pb: "6rem",
        pt: "6rem",
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: { xs: "3rem", md: "0rem" },
            order: { xs: "2", md: "-1" },
          }}
        >
          <Box
            sx={{
              width: { xs: "350px", sm: "400px" },
              height: { xs: "350px", sm: "420px" },
              // overflow: "hidden",
              background:
                "linear-gradient(180deg, rgba(0,0,0,0) 20%, rgba(98,217,183,0.2805497198879552) 100%)",
              borderRadius: "50%",
              position: "absolute",
            }}
          ></Box>
          <CardMedia
            component="img"
            // src={profilePhoto}
            src={profilePhoto2}
            sx={{
              width: { xs: "320px", sm: "400px" },
              height: { xs: "350px", sm: "420px" },
              position: "relative",
            }}
          />
        </Box>
        <Box sx={{ width: "auto", ml: { xs: "", md: "5rem" } }}>
          <Box sx={{ mb: "2rem" }}>
            <Title text="Sobre mi" />
          </Box>

          <Typography
            variant="h4"
            sx={{
              fontWeight: "600",
              mb: "1rem",
              fontSize: "1.5rem",
            }}
          >
            Soy Florencia Medina,{" "}
            <span
              style={{ color: theme.palette.primary.main, fontWeight: "600" }}
            >
              desarrolladora Web Full Stack.
            </span>
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ mb: "1rem", fontSize: "1.15rem" }}
          >
            Cuento con experiencia en proyectos utilizando tecnologías como{" "}
            <span
              style={{ color: theme.palette.primary.main, fontWeight: "600" }}
            >
              JavaScript, React.Js, Redux, Node.Js, Express y PostgreSQL
            </span>
            , entre otras.
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ fontSize: "1rem", textAlign: "justify" }}
          >
            He participado en la realización de varios proyectos individuales y
            grupales, aplicando la metodología SCRUM con sprints semanales.
            Además de mi experiencia en desarrollo, también he desempeñado el
            rol de Teaching Assistant en HENRY. Estas experiencias me han
            permitido desarrollar habilidades de liderazgo, capacidad de escucha
            activa, trabajo en equipo y un fuerte compromiso.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default SectionAbout;
