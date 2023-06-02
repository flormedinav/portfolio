import { Typography, useTheme, Box } from "@mui/material";

const Title = ({ text }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        mb: "2rem",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textTransform: "uppercase",
          // color: theme.palette.primary.main,
          fontWeight: "600",
          mb: "0.5rem",
          fontSize: "2.5rem",
        }}
      >
        {text}
        <span style={{ color: theme.palette.primary.main, fontWeight: "600" }}>
          .
        </span>
      </Typography>
      <Box
        sx={{
          width: "100px",
          border: "2px solid",
          borderColor: theme.palette.primary.main,
        }}
      ></Box>
    </Box>
  );
};

export default Title;
