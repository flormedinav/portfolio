import { Box, Paper, Typography, useTheme } from "@mui/material";
import style from "./SliderTech.module.css";

const SlideTech = ({ techs, direction }) => {
  const theme = useTheme();
  let directionSlider = "";

  direction === "left"
    ? (directionSlider = "slideTrack")
    : (directionSlider = "slideTrackLeft");

  return (
    <Box className={style.slider}>
      <Box sx={{ display: "flex" }} className={style[directionSlider]}>
        {techs.map((tech) => (
          <Paper
            elevation={4}
            className={style.slide}
            sx={{
              m: "0.5rem",
              pt: "6px",
              pb: "6px",
              pl: "14px",
              pr: "14px",
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
              <Typography sx={{ fontSize: "0.90rem" }}>
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
  );
};

export default SlideTech;
