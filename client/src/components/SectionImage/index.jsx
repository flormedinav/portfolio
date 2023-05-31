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
} from "../../texts/sectionTech";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CircleIcon from "@mui/icons-material/Circle";
import codeImage from "../../assets/code.jpg";
import { imagesTech } from "./images";
import style from "./SectionImage.module.css";
import SlideTech from "../SliderTech";

const SectionImage = () => {
  return (
    <Box
      sx={{
        height: "100%",
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
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          p: "0.5rem",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            backgroundImage:
              "linear-gradient(270deg, rgba(0,0,0,0) 51%, #16151B 100%)",
            zIndex: 2,
          }}
        />
        <SlideTech techs={techFrontend} direction="left" />
        <SlideTech techs={techBackend} />
        <SlideTech techs={tools} direction="left" />
        <SlideTech techs={agile} />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            backgroundImage:
              "linear-gradient(90deg, rgba(0,0,0,0) 51%, #16151B 100%)",
            zIndex: 2,
          }}
        />
      </Box>
    </Box>
  );
};
export default SectionImage;
