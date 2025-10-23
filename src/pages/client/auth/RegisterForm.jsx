import { useState } from 'react';
import {
    Box,
    Button,
    Typography,
    Checkbox,
    FormControlLabel,
    Divider,
    
    Slide,
    Stack,
    Avatar,
    Chip
} from '@mui/material';
import {
    Email,
    Lock,
    Person,
    Google,
    Facebook,
    ArrowForward
} from '@mui/icons-material';
import CustomTextField from '../../../components/client/Auth/CustomTextField';
import SocialButton from '../../../components/client/Auth/SocialButton';
import { useAccounts } from '../../../contexts/AccountProvider';
import { addDocument } from '../../../services/firebaseService';
import { Link } from 'react-router';

// ✅ Đặt tên rõ nghĩa, dễ hiểu
const initialUserState = { fullName: "", email: "", password: "", confirmPassword: "" };

const RegisterForm = ({ onSwitchToLogin }) => {
    // ✅ userInfo thay vì user → rõ ràng là state cho form đăng ký
    const [userInfo, setUserInfo] = useState(initialUserState);

    // ✅ formErrors thay vì error → rõ ràng là lưu lỗi form
    const [formErrors, setFormErrors] = useState({});

    // ✅ đặt tên accountsList thay vì accounts → dễ hiểu hơn
    const accountsList = useAccounts();

    // ✅ isSubmitting thay vì loading → chuẩn convention (boolean flag nên bắt đầu bằng "is" hoặc "has")
    const [isSubmitting, setIsSubmitting] = useState(false);

    // ✅ handleInputChange thay vì handleChangeInput → verb + noun → dễ hiểu, convention React
    const handleInputChange = (fieldName) => (event) => {
        setUserInfo(prev => ({
            ...prev,
            [fieldName]: event.target.value
        }));
    };

    // ✅ validateRegisterForm thay vì registerFormValidation → động từ validate rõ nghĩa
    const validateRegisterForm = () => {
        const newErrors = {};

        // Full name validation
        if (!userInfo.fullName) {
            newErrors.fullName = "Vui lòng nhập họ và tên";
        } else if (!/^[a-zA-ZÀ-ỹ\s]+$/.test(userInfo.fullName)) {
            newErrors.fullName = "Tên không được chứa số hoặc ký tự đặc biệt";
        } else if (userInfo.fullName.trim().split(" ").length < 2) {
            newErrors.fullName = "Vui lòng nhập đầy đủ họ và tên";
        } else {
            newErrors.fullName = "";
        }

        // Email validation
        if (!userInfo.email) {
            newErrors.email = "Vui lòng nhập email";
        } else if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(userInfo.email)) {
            newErrors.email = "Email phải có dạng: something@gmail.com";
        } else if (accountsList.find(acc => acc.email === userInfo.email)) {
            newErrors.email = "Email đã được sử dụng";
        } else {
            newErrors.email = "";
        }

        // Password validation
        if (!userInfo.password) {
            newErrors.password = "Vui lòng nhập mật khẩu";
        } else if (userInfo.password.length < 8) {
            newErrors.password = "Mật khẩu tối thiểu 8 ký tự";
        } else {
            newErrors.password = "";
        }

        // Confirm password validation
        newErrors.confirmPassword =
            userInfo.confirmPassword === userInfo.password ? "" : "Mật khẩu xác nhận không khớp";

        setFormErrors(newErrors);

        return Object.values(newErrors).every((msg) => msg === "");
    };

    // ✅ handleFormSubmit thay vì handleSubmit → rõ ràng hơn
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        if (!validateRegisterForm()) return;

        setIsSubmitting(true);
        try {
            // Bỏ confirmPassword ra khi lưu DB
            const { confirmPassword, ...newAccount } = userInfo;
            // Thêm role mặc định
            const accountWithRole = {
                ...newAccount,
                role: "user"
            };
            await addDocument("accounts", accountWithRole);

            setUserInfo(initialUserState);
            onSwitchToLogin();
        } finally {
            setIsSubmitting(false);
        }
    };

    return (  
            <Slide direction="left" in timeout={600} sx={{mt:2 }}>
                <Box>
                    {/* Avatar + Tiêu đề */}
                    <Box textAlign="center" mb={4}>
                        <Avatar
                            sx={{
                                width: 64,
                                height: 64,
                                background: 'linear-gradient(45deg, #ec4899 30%, #8b5cf6 90%)',
                                margin: '0 auto 16px',
                            }}
                        >
                            <Person sx={{ fontSize: 30 }} />
                        </Avatar>
                        <Typography variant="h4" fontWeight="bold" color="primary" gutterBottom>
                            Tạo tài khoản mới
                        </Typography>
                    </Box>
                    {/* Form Input Fields */}
                    <Stack spacing={3}>
                        <CustomTextField
                            label="Họ và tên"
                            icon={Person}
                            value={userInfo.fullName}
                            onChange={handleInputChange("fullName")}
                            error={!!formErrors.fullName}
                            helperText={formErrors.fullName}
                        />

                        <CustomTextField
                            label="Email"
                            type="email"
                            icon={Email}
                            value={userInfo.email}
                            onChange={handleInputChange("email")}
                            error={!!formErrors.email}
                            helperText={formErrors.email}
                        />

                        <CustomTextField
                            label="Mật khẩu"
                            type="password"
                            icon={Lock}
                            showPasswordToggle
                            value={userInfo.password}
                            onChange={handleInputChange("password")}
                            error={!!formErrors.password}
                            helperText={formErrors.password}
                        />

                        <CustomTextField
                            label="Xác nhận mật khẩu"
                            type="password"
                            icon={Lock}
                            showPasswordToggle
                            value={userInfo.confirmPassword}
                            onChange={handleInputChange("confirmPassword")}
                            error={!!formErrors.confirmPassword}
                            helperText={formErrors.confirmPassword}
                        />

                        <Button
                            variant="contained"
                            size="large"
                            endIcon={!isSubmitting && <ArrowForward />} // ẩn icon khi loading
                            onClick={handleFormSubmit}
                            disabled={isSubmitting} // disable khi đang submit
                            sx={{ py: 1 }}
                        >
                            {isSubmitting ? "Đang xử lý..." : "Tạo tài khoản"}
                        </Button>
                    </Stack>

                    {/* Social Register */}
                    <Box mt={4}>
                        <Divider sx={{ my: 1 }}>
                            <Chip label="Hoặc đăng ký bằng" size="small" />
                        </Divider>

                        <Stack direction="row" spacing={2}>
                            <SocialButton
                                provider="Google"
                                icon={Google}
                                color="#db4437"
                                onClick={() => console.log("Google register")}
                            />
                            <SocialButton
                                provider="Facebook"
                                icon={Facebook}
                                color="#4267B2"
                                onClick={() => console.log("Facebook register")}
                            />
                        </Stack>
                    </Box>

                    {/* Switch to Login */}
                    <Typography variant="body2" textAlign="center" color="text.secondary">
                        Đã có tài khoản?{" "}
                        <div to="/login"
                            component="button"
                            variant="body2"
                            color="primary"
                            fontWeight="bold"
                            onClick={onSwitchToLogin}
                            sx={{ textDecoration: 'none' }}
                        >
                            Đăng nhập ngay
                        </div>
                    </Typography>
                </Box>
            </Slide>
    );
};

export default RegisterForm;
