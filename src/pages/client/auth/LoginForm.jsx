import { useState } from 'react';
import {
  Box,
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
  Divider,
  Fade,
  Stack,
  Avatar,
  Chip
} from '@mui/material';
import {
  Email,
  Lock,
  Google,
  Facebook,
  ArrowForward
} from '@mui/icons-material';
import CustomTextField from '../../../components/client/Auth/CustomTextField';
import SocialButton from '../../../components/client/Auth/SocialButton';


import { Link, useNavigate } from 'react-router';
import { useAccounts } from '../../../contexts/AccountProvider';
import { useAuth } from '../../../contexts/AuthProvider';

const LoginForm = ({ onSwitchToRegister }) => {
  const { login } = useAuth();     // ✅ lấy hàm login từ AuthProvider

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState("");

  const handleInputChange = (field) => (e) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const result = login(formData.email, formData.password);

    if (!result.success) {
      setError(result.message);
      return;
    }
    // ✅ Lưu thông tin user và token vào localStorage
    localStorage.setItem("user", JSON.stringify(result.user));
    console.log("Login Success")
    navigate("/")
  };

  return (

    <Fade in timeout={600} >
      <Box sx={{ mt: 4 }}>
        <Box textAlign="center" mb={4}>
          <Avatar
            sx={{
              width: 64,
              height: 64,
              backgroundColor: 'primary.main',
              margin: '0 auto 16px',
            }}
          >
            <Lock sx={{ fontSize: 30 }} />
          </Avatar>
          <Typography variant="h4" fontWeight="bold" color="primary" gutterBottom>
            Chào mừng trở lại!
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Đăng nhập vào tài khoản của bạn
          </Typography>
        </Box>

        <Stack spacing={3}>
          <CustomTextField
            label="Email"
            type="email"
            icon={Email}
            value={formData.email}
            onChange={handleInputChange("email")}
          />

          <CustomTextField
            label="Mật khẩu"
            icon={Lock}
            showPasswordToggle
            value={formData.password}
            onChange={handleInputChange("password")}
          />

          {error && (
            <Typography color="error" variant="body2">{error}</Typography>
          )}

          <Box display="flex" justifyContent="space-between" alignItems="center">
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="Ghi nhớ đăng nhập"
              sx={{ color: 'text.secondary' }}
            />
            <Link
              component="button"
              variant="body2"
              color="primary"
              sx={{ fontWeight: 600 }}
            >
              Quên mật khẩu?
            </Link>
          </Box>

          <Button
            variant="contained"
            size="large"
            endIcon={<ArrowForward />}
            onClick={handleSubmit}
            sx={{ py: 2 }}
          >
            Đăng nhập
          </Button>
        </Stack>

        <Box mt={4}>
          <Divider sx={{ my: 3 }}>
            <Chip label="Hoặc đăng nhập bằng" size="small" />
          </Divider>

          <Stack direction="row" spacing={2}>
            <SocialButton
              provider="Google"
              icon={Google}
              color="#db4437"
              onClick={() => console.log("Google login")}
            />
            <SocialButton
              provider="Facebook"
              icon={Facebook}
              color="#4267B2"
              onClick={() => console.log("Facebook login")}
            />
          </Stack>
        </Box>

        <Typography variant="body2" textAlign="center" mt={4} color="text.secondary">
          Chưa có tài khoản?{" "}
          <div
            component="button"
            variant="body2"
            color="primary"
            fontWeight="bold"
            onClick={onSwitchToRegister}
            sx={{ textDecoration: 'none' }}
          >
            Đăng ký ngay
          </div>
        </Typography>
      </Box>
    </Fade>
  );
};

export default LoginForm;
