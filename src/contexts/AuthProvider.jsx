import React, { createContext, useState } from 'react';

export const AuthContexts  = createContext();
function AuthProvider({ children }) {
     const [accountLogin, setAccountLogin] = useState(null);
    const login = (user) => {
        setAccountLogin(user);
    }

    const logout = () => {
         setAccountLogin(null);
    }
    return (
        <AuthContexts.Provider value={{ accountLogin, login , logout }}>
            { children }
        </AuthContexts.Provider>
    );
}

export default AuthProvider;