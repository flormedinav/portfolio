import { Button, useTheme } from "@mui/material";

const ButtonNav = ({ text, isActive }) => {
  const theme = useTheme();
  return (
    <Button
      variant="text"
      sx={{
        color: isActive ? theme.palette.primary.main : "white",
        ml: "5px",
        mb: { xs: "0.75rem", md: "0rem" },
      }}
    >
      {text}
    </Button>
  );
};

export default ButtonNav;
