import { Box, Button, CardMedia, Container, Typography } from "@mui/material";
import Title from "../Title";
import { useTheme } from "@emotion/react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import profilePhoto5 from "../../assets/perfil5.png";

const SectionContact = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        pt: "6rem",
        pb: "6rem",
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row" },
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Title text="Contacto" />
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <a
              href="https://www.linkedin.com/in/flormedinav/"
              target="_back"
              style={{ textDecoration: "none" }}
            >
              <Button size="large" sx={{ mr: "1rem" }}>
                <LinkedInIcon
                  sx={{
                    color: theme.palette.primary.main,
                  }}
                />
                <Typography
                  sx={{
                    ml: "0.5rem",
                    color: "white",
                  }}
                >
                  LinkedIn
                </Typography>
              </Button>
            </a>
            <a
              href="https://github.com/flormedinav"
              target="_back"
              style={{ textDecoration: "none" }}
            >
              <Button size="large" sx={{ mr: "1rem" }}>
                <GitHubIcon
                  sx={{
                    color: theme.palette.primary.main,
                  }}
                />
                <Typography
                  sx={{
                    ml: "0.5rem",
                    color: "white",
                  }}
                >
                  Github
                </Typography>
              </Button>
            </a>
            <a
              href="mailto:flormedinav7@gmail.com"
              target="_back"
              style={{ textDecoration: "none" }}
            >
              <Button size="large" sx={{ mr: "1rem" }}>
                <MailIcon
                  sx={{
                    color: theme.palette.primary.main,
                  }}
                />
                <Typography
                  sx={{
                    ml: "0.5rem",
                    color: "white",
                  }}
                >
                  Mail
                </Typography>
              </Button>
            </a>
            <a
              href="https://calendly.com/flormedinav/reunion?month=2023-06"
              target="_back"
              style={{ textDecoration: "none" }}
            >
              <Button size="large" sx={{ mr: "1rem" }}>
                <CalendarMonthIcon
                  sx={{
                    color: theme.palette.primary.main,
                  }}
                />
                <Typography
                  sx={{
                    ml: "0.5rem",
                    color: "white",
                  }}
                >
                  Calendly
                </Typography>
              </Button>
            </a>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: { xs: "2rem", md: "" },
          }}
        >
          <Box
            sx={{
              width: "250px",
              height: "250px",
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
            src={profilePhoto5}
            sx={{
              width: "300px",
              height: "250px",
              position: "relative",
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default SectionContact;
