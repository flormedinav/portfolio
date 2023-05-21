import { Button } from '@mui/material';

const ButtonNav = ({ text }) => {
  return (
    <Button variant='text' sx={{ color: 'white' }}>
      {text}
    </Button>
  );
};

export default ButtonNav;
