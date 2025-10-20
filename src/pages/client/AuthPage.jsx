import { useState } from 'react';
import {
    Box,
    Paper,
    Container,
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import LoginForm from './auth/LoginForm';
import RegisterForm from './auth/RegisterForm';
import AuthTheme from '../../components/client/Auth/AuthTheme';

const AuthPage = () => {
    const [currentForm, setCurrentForm] = useState("login");

    return (
        <ThemeProvider theme={AuthTheme}>
            <Box
                sx={{
                    minHeight: '100vh',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: 2,
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                {/* Background decorations */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: -200,
                        right: -200,
                        width: 400,
                        height: 400,
                        background: 'radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)',
                        borderRadius: '50%',
                    }}
                />
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: -200,
                        left: -200,
                        width: 400,
                        height: 400,
                        background: 'radial-gradient(circle, rgba(236,72,153,0.3) 0%, transparent 70%)',
                        borderRadius: '50%',
                    }}
                />

                <Container maxWidth="sm">
                    <Paper
                        elevation={24}
                        sx={{
                            p: 4,
                            backgroundColor: 'rgba(255, 255, 255, 0.95)',
                            backdropFilter: 'blur(20px)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            position: 'relative',
                            overflow: 'hidden',
                        }}
                    >
                        {/* Form content */}
                        <Box position="relative" zIndex={1}>
                            {currentForm === "login" ? (
                                <LoginForm onSwitchToRegister={() => setCurrentForm("register")} />
                            ) : (
                                <RegisterForm onSwitchToLogin={() => setCurrentForm("login")} />
                            )}
                        </Box>

                        {/* Decorative gradient overlay */}
                        <Box
                            sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                height: 4,
                                background: 'linear-gradient(90deg, #6366f1, #8b5cf6, #ec4899)',
                            }}
                        />
                    </Paper>
                </Container>
            </Box>
        </ThemeProvider>
    );
};

export default AuthPage;