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
        // background: theme.palette.background.paper,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        pt: "6rem",
        pb: "6rem",
      }}
    >
      <Container>
        <Title text="Contacto" />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Box
              sx={{
                mr: "1rem",
              }}
            >
              <a href="https://www.linkedin.com/in/flormedinav/" target="_back">
                <Button size="large">
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
            </Box>

            <Box
              sx={{
                mr: "1rem",
              }}
            >
              <a href="https://github.com/flormedinav" target="_back">
                <Button size="large">
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
            </Box>

            <Box
              sx={{
                mr: "1rem",
              }}
            >
              <a href="mailto:flormedinav7@gmail.com" target="_back">
                <Button size="large">
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
            </Box>

            <Box
              sx={{
                mr: "1rem",
              }}
            >
              <a
                href="https://calendly.com/flormedinav/reunion?month=2023-06"
                target="_back"
              >
                <Button size="large">
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
            <Box
              sx={{
                width: "350px",
                height: "350px",
                // overflow: "hidden",
                background:
                  "linear-gradient(180deg, rgba(0,0,0,0) 20%, rgba(98,217,183,0.2805497198879552) 100%)",
                borderRadius: "50%",
              }}
            >
              <CardMedia
                component="img"
                // src={profilePhoto}
                src={profilePhoto5}
                sx={{
                  width: "350px",
                  height: "350px",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default SectionContact;
