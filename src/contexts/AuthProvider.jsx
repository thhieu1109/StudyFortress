import React, { createContext, useContext, useEffect, useState } from "react";
import { useAccounts } from "./AccountProvider";


export const AuthContexts = createContext();

// Custom hook để dễ sử dụng
export const useAuth = () => useContext(AuthContexts);

function AuthProvider({ children }) {
    const [accountLogin, setAccountLogin] = useState(null);
    const accounts = useAccounts(); // <-- lấy danh sách accounts từ context

    const login = (email, password) => {
        const foundUser = accounts.find((acc) => acc.email === email && acc.password === password);

        if (foundUser) {
            setAccountLogin(foundUser);
            return { success: true, message: "Đăng nhập thành công", user: foundUser };
        } else {
            return { success: false, message: "Email hoặc mật khẩu không đúng" };
        }
    };
     useEffect(() => {
        const login = localStorage.getItem("user");
        if(login) {
             setAccountLogin(JSON.parse(login));
        }
     },[]);

    const logout = () => {
        setAccountLogin(null);
    };
  
    return (
        <AuthContexts.Provider value={{ accountLogin, login, logout }}>
            {children}
        </AuthContexts.Provider>
    );
}

export default AuthProvider;
