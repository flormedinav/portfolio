import { Box, Container, Typography, useTheme } from "@mui/material";

const Footer = () => {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();
  return (
    <Box
      sx={{
        height: "15vh",
        width: "100%",
        background: theme.palette.background.paper,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        pt: "4rem",
        pb: "4rem",
      }}
    >
      <Typography> Copyright © {currentYear} Florencia Medina.</Typography>
    </Box>
  );
};

export default Footer;
