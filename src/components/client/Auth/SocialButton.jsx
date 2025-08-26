import { Button } from '@mui/material';

const SocialButton = ({ provider, icon: Icon, color, onClick }) => (
  <Button
    variant="outlined"
    startIcon={<Icon />}
    onClick={onClick}
    sx={{
      flex: 1,
      py: 1.5,
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      color: color,
      '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        transform: 'translateY(-1px)',
      },
    }}
  >
    {provider}
  </Button>
);

export default SocialButton;