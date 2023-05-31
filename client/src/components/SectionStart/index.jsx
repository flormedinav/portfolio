import {
  Box,
  Button,
  CardMedia,
  Container,
  Typography,
  useTheme,
} from "@mui/material";
import imageCodeStart from "../../assets/codeStart.png";
import profilePhoto2 from "../../assets/perfil3.png";

const SectionStart = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        height: "75vh",
        width: "100%",
        // background:
        //   //   // 'linear-gradient(90deg, rgba(0,0,0,0) 51%, rgba(98,217,183,0.2861519607843137) 100%)',
        //   "linear-gradient(90deg, rgba(0,0,0,0) 51%, rgba(98,217,183,0.20772058823529416) 100%)",
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          pt: "200px",
        }}
      >
        <Box sx={{ width: "50%" }}>
          <Box>
            <Typography
              variant="h2"
              sx={{
                mb: "1rem",
                fontWeight: "700",
                fontSize: "5rem",
              }}
            >
              Hola
              <span style={{ color: theme.palette.primary.main }}>!</span> 👋🏼
            </Typography>
            <Typography
              variant="h3"
              sx={{
                textTransform: "uppercase",
                fontWeight: "600",
                mb: "0.5rem",
                fontSize: "2.5rem",
              }}
            >
              Soy{" "}
              <span style={{ color: theme.palette.primary.main }}>
                Florencia Medina
              </span>
            </Typography>
            <Typography
              variant="h5"
              sx={{
                textTransform: "uppercase",
                fontWeight: "600",
                color: theme.palette.text.secondary,
                mb: "1rem",
                fontSize: "1.5rem",
              }}
            >
              Desarrolladora web full stack
            </Typography>

            <Button
              variant="contained"
              size="large"
              sx={{ color: "white", fontWeight: "600", mt: "6rem", mr: "1rem" }}
            >
              Contactarme
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{ color: "white", fontWeight: "600", mt: "6rem" }}
            >
              Descargar CV
            </Button>
          </Box>
        </Box>

        <Box sx={{ width: "450px" }}>
          <CardMedia
            component="img"
            src={imageCodeStart}
            // src={profilePhoto2}
            sx={{ width: "100%" }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default SectionStart;
