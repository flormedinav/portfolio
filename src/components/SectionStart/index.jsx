import {
  Box,
  Button,
  CardMedia,
  Container,
  Typography,
  useTheme,
} from "@mui/material";
import imageCodeStart from "../../assets/codeStart.png";

const SectionStart = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        background:
          //   // 'linear-gradient(90deg, rgba(0,0,0,0) 51%, rgba(98,217,183,0.2861519607843137) 100%)',
          "linear-gradient(90deg, rgba(0,0,0,0) 51%, rgba(98,217,183,0.20772058823529416) 100%)",
        pt: "13rem",
        pb: "12rem",
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: { xs: "center", md: "space-between" },
          alignItems: { xs: "center", md: "center" },
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "unset" },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              mb: "1rem",
              fontWeight: "700",
              fontSize: { xs: "4rem", md: "5rem" },
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
              fontSize: { xs: "1.75rem", md: "2.5rem" },
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
              textAlign: { xs: "center", md: "start" },
            }}
          >
            Desarrolladora web full stack
          </Typography>
          <Box>
            <Button
              variant="contained"
              size="large"
              sx={{
                color: "white",
                fontWeight: "600",
                mt: { xs: "3rem", md: "6rem" },
                mr: "1rem",
              }}
            >
              Contactarme
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                color: "white",
                fontWeight: "600",
                mt: { xs: "3rem", md: "6rem" },
              }}
            >
              Descargar CV
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            width: { xs: "350px", sm: "400px", lg: "450px" },
            mt: { xs: "3rem", md: "0rem" },
          }}
        >
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
