import React, { createContext, useContext, useEffect, useState } from "react";
import { useAccounts } from "./AccountProvider";

export const AuthContexts = createContext();

export const useAuth = () => useContext(AuthContexts);

function AuthProvider({ children }) {
    const [accountLogin, setAccountLogin] = useState(null);
    const accounts = useAccounts();

    // Load user từ localStorage khi component mount
    useEffect(() => {
        const savedUser = localStorage.getItem("user");
        if (savedUser) {
            setAccountLogin(JSON.parse(savedUser));
        }
    }, []);

    const login = (email, password) => {
        const foundUser = accounts.find((acc) => acc.email === email && acc.password === password);

        if (foundUser) {
            setAccountLogin(foundUser);
            localStorage.setItem('user', JSON.stringify(foundUser)); // Lưu vào localStorage
            return { success: true, message: "Đăng nhập thành công", user: foundUser };
        } else {
            return { success: false, message: "Email hoặc mật khẩu không đúng" };
        }
    };

    const logout = () => {
        setAccountLogin(null);
        localStorage.removeItem('user'); // Xóa khỏi localStorage
    };
  
    return (
        <AuthContexts.Provider value={{ accountLogin, login, logout }}>
            {children}
        </AuthContexts.Provider>
    );
}

export default AuthProvider;