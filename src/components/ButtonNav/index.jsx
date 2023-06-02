import { Button, useTheme } from "@mui/material";

const ButtonNav = ({ text, isActive }) => {
  const theme = useTheme();
  return (
    <Button
      variant="text"
      sx={{
        color: isActive ? theme.palette.primary.main : "white",
        ml: "5px",
      }}
    >
      {text}
    </Button>
  );
};

export default ButtonNav;
