import React, { useState } from "react";
import { TextField, Button, Checkbox, FormControlLabel, Link, Typography } from "@mui/material";
import { addDocument } from "../../services/firebaseService";
import { useAccounts } from "../../contexts/AccountProvider";


const innerUser = { fullName: "", email: "", password: "", rePassword: "" }
function Register({ handleOpenLogin }) {
    const [user, setUser] = useState(innerUser)
    const [error, setError] = useState("")
    const accounts = useAccounts();


    const handleSubmitAccount = async () => {
        if (!registerFormValidation()) {
            return;
        }
        const { rePassword, ...newAccount } = user;
        await addDocument("accounts", newAccount);
        handleOpenLogin();
    }

    const handleChangeInput = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const registerFormValidation = () => {
        const newError = {};

        // Full name
        if (!user.fullName) {
            newError.fullName = "Please enter your full name";
        } else if (!/^[a-zA-ZÀ-ỹ\s]+$/.test(user.fullName)) {
            newError.fullName = "Name must not contain numbers or special characters";
        } else if (user.fullName.trim().split(" ").length < 2) {
            newError.fullName = "Please enter at least first and last name";
        } else {
            newError.fullName = "";
        }

        // Email
        if (!user.email) {
            newError.email = "Please enter your email";
        } else if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(user.email)) {
            newError.email = "Email must be in format: something@gmail.com";
        }  else if (accounts.find(e => e.email == user.email)) {
            newError.email = "Email da duoc su dung";
        } else {
            newError.email = "";
        }

        // Password
        if (!user.password) {
            newError.password = "Please enter your password";
        } else if (user.password.length < 8) {
            newError.password = "Password must be at least 8 characters";
        } else {
            newError.password = "";
        }

        // Re-password
        newError.rePassword =
            user.rePassword === user.password ? "" : "Passwords do not match";

        setError(newError);

        return Object.values(newError).every((element) => element === "");
    };


    return (
        <div className="space-y-6">
            {/* Full Name */}
            <TextField
                label="Họ và tên"
                type="text"
                placeholder="Nguyễn Văn A"
                value={user.fullName}
                onChange={handleChangeInput}
                fullWidth
                name="fullName"
                error={!!error.fullName}
                helperText={error.fullName}
                variant="outlined"
                InputProps={{
                    sx: {
                        marginBottom: "15px",
                        color: "white",
                        "& .MuiOutlinedInput-root": {
                            borderRadius: "12px",
                            background: "rgba(255,255,255,0.1)",
                            "& fieldset": { borderColor: "rgba(255,255,255,0.2)" },
                            "&:hover fieldset": { borderColor: "#c084fc" },
                            "&.Mui-focused fieldset": {
                                borderColor: "#c084fc",
                                boxShadow: "0 0 8px rgba(192,132,252,0.8)",
                            },
                        },
                    },
                }}
                InputLabelProps={{
                    sx: {
                        color: "rgba(255,255,255,0.9)",
                        "&.Mui-focused": { color: "#d8b4fe" },
                    },
                }}
            />

            {/* Email */}
            <TextField
                label="Email"
                type="email"
                name="email"
                error={!!error.email}
                placeholder="example@email.com"
                value={user.email}
                helperText={error.email}
                onChange={handleChangeInput}
                fullWidth
                variant="outlined"
                InputProps={{
                    sx: {
                        marginBottom: "15px",
                        color: "white",
                        "& .MuiOutlinedInput-root": {
                            borderRadius: "12px",
                            background: "rgba(255,255,255,0.1)",
                            "& fieldset": { borderColor: "rgba(255,255,255,0.2)" },
                            "&:hover fieldset": { borderColor: "#c084fc" },
                            "&.Mui-focused fieldset": {
                                borderColor: "#c084fc",
                                boxShadow: "0 0 8px rgba(192,132,252,0.8)",
                            },
                        },
                    },
                }}
                InputLabelProps={{
                    sx: {
                        color: "rgba(255,255,255,0.9)",
                        "&.Mui-focused": { color: "#d8b4fe" },
                    },
                }}
            />

            {/* Password */}
            <TextField
                label="Mật khẩu"
                type="password"
                name="password"
                placeholder="Tối thiểu 8 ký tự"

                value={user.password}
                error={!!error.password}
                helperText={error.password}
                onChange={handleChangeInput}

                fullWidth
                variant="outlined"
                InputProps={{
                    sx: {
                        marginBottom: "15px",
                        color: "white",
                        "& .MuiOutlinedInput-root": {
                            borderRadius: "12px",
                            background: "rgba(255,255,255,0.1)",
                            "& fieldset": { borderColor: "rgba(255,255,255,0.2)" },
                            "&:hover fieldset": { borderColor: "#c084fc" },
                            "&.Mui-focused fieldset": {
                                borderColor: "#c084fc",
                                boxShadow: "0 0 8px rgba(192,132,252,0.8)",
                            },
                        },
                    },
                }}
                InputLabelProps={{
                    sx: {
                        color: "rgba(255,255,255,0.9)",
                        "&.Mui-focused": { color: "#d8b4fe" },
                    },
                }}
            />

            <TextField
                label="Nhập lại mật khẩu"
                type="password"

                name="rePassword"
                error={!!error.rePassword}
                helperText={error.rePassword}
                placeholder="Tối thiểu 8 ký tự"
                value={user.rePassword}
                onChange={handleChangeInput}

                fullWidth
                variant="outlined"
                InputProps={{
                    sx: {

                        color: "white",
                        "& .MuiOutlinedInput-root": {
                            borderRadius: "12px",
                            background: "rgba(255,255,255,0.1)",
                            "& fieldset": { borderColor: "rgba(255,255,255,0.2)" },
                            "&:hover fieldset": { borderColor: "#c084fc" },
                            "&.Mui-focused fieldset": {
                                borderColor: "#c084fc",
                                boxShadow: "0 0 8px rgba(192,132,252,0.8)",
                            },
                        },
                    },
                }}
                InputLabelProps={{
                    sx: {
                        color: "rgba(255,255,255,0.9)",
                        "&.Mui-focused": { color: "#d8b4fe" },
                    },
                }}
            />



            {/* Submit Button */}
            <Button
                type="submit"
                onClick={handleSubmitAccount}
                fullWidth
                sx={{
                    py: 1.5,
                    marginBottom: "15px",
                    fontWeight: "bold",
                    fontSize: "1rem",
                    borderRadius: "12px",
                    color: "white",
                    background: "linear-gradient(to right, #a855f7, #ec4899)",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.4)",
                    "&:hover": {
                        background: "linear-gradient(to right, #9333ea, #db2777)",
                        transform: "scale(1.05)",
                    },
                    transition: "all 0.3s ease",
                }}
            >
                Tạo tài khoản
            </Button>

            {/* Already have account */}
            <Typography variant="body2" align="center" sx={{ color: "rgba(255,255,255,0.7)" }}>
                Đã có tài khoản?{" "}
                <span className="text-purple-300 cursor-pointer hover:text-purple-200 font-semibold transition-colors">
                    Đăng nhập
                </span>
            </Typography>
        </div>
    );
}

export default Register;
