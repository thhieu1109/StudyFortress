import React from "react";
import { TextField, Button, Link } from "@mui/material";

function Login(props) {
  return (
    <div className="space-y-6 ">
      {/* Email Field */}
      <TextField
        label="Email"
        type="email"
        placeholder="example@email.com"
        fullWidth
        variant="outlined"
        InputProps={{
          sx: {
             marginBottom : "15px",
            color: "white",
            "& .MuiOutlinedInput-root": {
              backgroundColor: "rgba(255,255,255,0.1)",
              borderRadius: "12px",
              "& fieldset": {
                borderColor: "rgba(255,255,255,0.2)",
              },
              "&:hover fieldset": {
                borderColor: "purple",
              },
              "&.Mui-focused fieldset": {
                borderColor: "purple",
                boxShadow: "0 0 8px rgba(168, 85, 247, 0.5)",
              },
            },
            "& .MuiInputLabel-root": {
              color: "rgba(255,255,255,0.9)",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#c084fc",
            },
          },
        }}
      />

      {/* Password Field */}
      <TextField
        label="Mật khẩu"
        type="password"
        placeholder="••••••••"
        fullWidth
        variant="outlined"
        InputProps={{
          sx: {
            color: "white",
            "& .MuiOutlinedInput-root": {
              backgroundColor: "rgba(255,255,255,0.1)",
              borderRadius: "12px",
              "& fieldset": {
                borderColor: "rgba(255,255,255,0.2)",
              },
              "&:hover fieldset": {
                borderColor: "purple",
              },
              "&.Mui-focused fieldset": {
                borderColor: "purple",
                boxShadow: "0 0 8px rgba(168, 85, 247, 0.5)",
              },
            },
            "& .MuiInputLabel-root": {
              color: "rgba(255,255,255,0.9)",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#c084fc",
            },
          },
        }}
      />

      {/* Forgot Password */}
      <div className="text-right">
        <Link
          href="#"
          underline="hover"
          sx={{ fontSize: "0.875rem", color: "#d8b4fe", "&:hover": { color: "#e9d5ff" } }}
        >
          Quên mật khẩu?
        </Link>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        fullWidth
        sx={{
          py: 1.5,
          fontWeight: "bold",
          color: "white",
          borderRadius: "12px",
          background: "linear-gradient(to right, #a855f7, #ec4899)",
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          "&:hover": {
            background: "linear-gradient(to right, #9333ea, #db2777)",
            transform: "scale(1.05)",
          },
          transition: "all 0.3s ease",
        }}
      >
        Đăng nhập
      </Button>

      <p className="text-sm text-white/70 text-center">
        Chưa có tài khoản?{" "}
        <span className="text-purple-300 cursor-pointer hover:text-purple-200 font-semibold transition-colors">
          Đăng ký ngay
        </span>
      </p>
    </div>
  );
}

export default Login;
