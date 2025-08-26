import './App.css'
import { useContext } from "react";
import { AuthContexts } from "./contexts/AuthProvider";

import AuthPage from './pages/client/AuthPage'
import HomePage from './pages/client/HomePage'
import AdminDashboard from './pages/admin/AdminDashboard'

function App() {
  const { accountLogin } = useContext(AuthContexts);

  return (
    <>
      {
        accountLogin 
          ? accountLogin.role === "admin"
              ? <AdminDashboard />
              : <HomePage />
              : <AuthPage />
      }
    </>
  );
}

export default App;
