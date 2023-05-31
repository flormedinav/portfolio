import {
  Box,
  CardMedia,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";
import {
  techFrontend,
  techBackend,
  tools,
  agile,
  techAndImg,
} from "../../texts/sectionTech";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CircleIcon from "@mui/icons-material/Circle";
import codeImage from "../../assets/code.jpg";
import { imagesTech } from "./images";
import style from "./SectionImage.module.css";

const SectionImage = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        height: "20vh",
        width: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <img
        src={codeImage}
        alt="Imagen de fondo"
        style={{
          width: "100%",
          opacity: 0.07,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          backgroundImage:
            "linear-gradient(270deg, rgba(0,0,0,0) 51%, rgba(98,217,183,0.2) 100%)",
        }}
      >
        <Box className={style.slider}>
          <Box sx={{ display: "flex" }} className={style.slideTrack}>
            {techFrontend.map((tech) => (
              <Paper
                elevation={4}
                className={style.slide}
                sx={{
                  m: "0.5rem",
                  pt: "8px",
                  pb: "8px",
                  pl: "16px",
                  pr: "16px",
                  // background: theme.palette.background.paper,
                  borderRadius: "10px",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Typography>
                    {" "}
                    <span
                      style={{
                        color: theme.palette.primary.main,
                        fontWeight: "600",
                      }}
                    >
                      #
                    </span>{" "}
                    {tech}
                  </Typography>
                </Box>
              </Paper>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SectionImage;
