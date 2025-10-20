import React from 'react';
import { createBrowserRouter } from "react-router-dom";

// Layouts
import HomePage from "../pages/client/HomePage";
import AuthPage from "../pages/client/AuthPage";

// Client Pages
import Main from "../pages/client/main/Main";
import InstructorPage from "../pages/client/instructor/InstructorPage";
import LoginForm from "../pages/client/auth/LoginForm";
import RegisterForm from "../pages/client/auth/RegisterForm";

// Admin Pages
import Categories from '../pages/admin/categories/Categories';
import SubCategories from '../pages/admin/subCategories/SubCategories';
import CoursePage from '../pages/client/CoursePage';

export const router = createBrowserRouter([
  // Client Routes
  {
    path: "/",
    element: <HomePage />,
    children: [
      { index: true, element: <Main /> },
      { path: "instructor", element: <InstructorPage /> },
      { path: "courses", element: <CoursePage/> },
      // { path: "categories", element: <CategoriesPage /> },
     
    ]
  },
  
  // Auth Routes
  {
    path: "/auth",
    element: <AuthPage />,
    children: [
      { path: "login", element: <LoginForm /> },
      { path: "register", element: <RegisterForm /> }
    ]
  },
  
  // Admin Routes
  {
    path: "/admin",
    children: [
      { path: "categories", element: <Categories /> },
      { path: "subcategories", element: <SubCategories /> }
    ]
  }
]);

export default router;