import { Typography, useTheme } from "@mui/material";

const Title = ({ text }) => {
  const theme = useTheme();
  return (
    <Typography
      variant="h4"
      sx={{
        textTransform: "uppercase",
        // color: theme.palette.primary.main,
        fontWeight: "600",
        mb: "2rem",
        fontSize: "2.5rem",
      }}
    >
      {text}
    </Typography>
  );
};

export default Title;
