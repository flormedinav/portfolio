import {
  Box,
  CardMedia,
  Container,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";
import Title from "../Title";
import { imagesTech } from "./images";
import { useState } from "react";
import { tech } from "../../texts/sectionTech";

const SectionTech = () => {
  const theme = useTheme();
  const [hoveredTech, setHoveredTech] = useState(null);

  const handleTechMouseEnter = (tech) => {
    setHoveredTech(tech);
  };

  const handleTechMouseLeave = () => {
    setHoveredTech(null);
  };

  return (
    <Box
      sx={{
        height: { xs: "auto", md: "55vh" },
        width: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: { xs: "", md: "absolute" },
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
        }}
      >
        <Container
          sx={{ overflow: "hidden", height: "100%", pt: "6rem", pb: "6rem" }}
        >
          <Title text="tecnologías" />

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {imagesTech.map(({ image, name }, index) => (
              <Paper
                component="div"
                onMouseEnter={() => handleTechMouseEnter(image)}
                onMouseLeave={handleTechMouseLeave}
                sx={{
                  p: "1rem",
                  height: "90px",
                  display: "flex",
                  justifyContent: "center",
                  margin: "0.5rem",
                  marginBottom: "1rem",
                  width: "100px",
                  position: "relative",
                }}
              >
                <CardMedia
                  component="img"
                  src={image}
                  sx={{ width: "90px", objectFit: "contain" }}
                />
                {hoveredTech === image && (
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      // background: "rgba(0.086, 0.082, 0.106, 0.5)",
                      backdropFilter: "blur(15px)",
                      color: "#fff",
                      fontSize: "1.1rem",
                      fontWeight: "700",
                      borderRadius: "5px",
                    }}
                  >
                    {name}
                  </div>
                )}
              </Paper>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default SectionTech;
