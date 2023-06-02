import { Box, IconButton, useTheme, Button } from "@mui/material";
import { ArrowUpward } from "@mui/icons-material";
import { useEffect, useState } from "react";

const ScrollToTopButton = () => {
  const theme = useTheme();
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: "1rem",
        right: "1rem",
        width: "45px",
        height: "45px",
        opacity: showButton ? 1 : 0,
        pointerEvents: showButton ? "auto" : "none",
        transition: "opacity 0.3s",
        zIndex: 9999,
        backgroundColor: theme.palette.primary.main,
        borderRadius: "50%",
        boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
      }}
    >
      <IconButton
        sx={{
          color: "white",
          width: "100%",
          height: "100%",
        }}
        onClick={handleScrollToTop}
      >
        <ArrowUpward />
      </IconButton>
    </Box>
  );
};

export default ScrollToTopButton;
