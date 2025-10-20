import './App.css'
import { useContext } from "react";
import { AuthContexts } from "./contexts/AuthProvider";
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/Routers';
function App() {
  const { accountLogin } = useContext(AuthContexts);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
