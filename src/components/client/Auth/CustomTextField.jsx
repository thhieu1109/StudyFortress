import { useState } from 'react';
import {
  TextField,
  IconButton,
  InputAdornment,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const CustomTextField = ({ 
  label, 
  type = "text", 
  icon: Icon, 
  showPasswordToggle = false,
  ...props 
}) => {
  const [showPassword, setShowPassword] = useState(false);
  
  return (
    <TextField
      fullWidth
      label={label}
      type={showPasswordToggle ? (showPassword ? "text" : "password") : type}
      variant="outlined"
      InputProps={{
        startAdornment: Icon && (
          <InputAdornment position="start">
            <Icon color="primary" />
          </InputAdornment>
        ),
        endAdornment: showPasswordToggle && (
          <InputAdornment position="end">
            <IconButton
              onClick={() => setShowPassword(!showPassword)}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      sx={{
        '& .MuiInputLabel-root': {
          color: '#64748b',
          '&.Mui-focused': {
            color: '#6366f1',
          },
        },
      }}
      {...props}
    />
  );
};

export default CustomTextField;