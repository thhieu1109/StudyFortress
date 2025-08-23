import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import CategoryProvider from './contexts/CategoryProvider.jsx'
import SubCategoryProvider from './contexts/SubCategoryProvider.jsx'
import AccountsProvider from './contexts/AccountProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CategoryProvider>
        <SubCategoryProvider>
          <AccountsProvider>
            <App />
          </AccountsProvider>
        </SubCategoryProvider>
      </CategoryProvider>
    </BrowserRouter>

  </StrictMode>,
)
