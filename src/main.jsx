import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CategoryProvider from './contexts/CategoryProvider.jsx'
import SubCategoryProvider from './contexts/SubCategoryProvider.jsx'
import AccountsProvider from './contexts/AccountProvider.jsx'
import AuthProvider from './contexts/AuthProvider.jsx'
import { CourseProvider } from './contexts/CourseProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <CategoryProvider>
        <SubCategoryProvider>
          <AccountsProvider>
            <CourseProvider>
              <AuthProvider>
                <App />
              </AuthProvider>
            </CourseProvider>
          </AccountsProvider>
        </SubCategoryProvider>
      </CategoryProvider>
  </StrictMode>,
)
