import { Box, Container, Typography, useTheme } from "@mui/material";

const Footer = () => {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();
  return (
    <Box
      sx={{
        height: "auto",
        width: "100%",
        pb: "4rem",
        pt: "4rem",
        width: "100%",
        background: theme.palette.background.paper,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography> Copyright © {currentYear} Florencia Medina.</Typography>
    </Box>
  );
};

export default Footer;
