import { Button } from "@mui/material";

const ButtonNav = ({ text }) => {
  return (
    <Button variant="text" sx={{ color: "white", ml: "5px" }}>
      {text}
    </Button>
  );
};

export default ButtonNav;
