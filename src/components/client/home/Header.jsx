import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star, Clock, DollarSign, Search, Menu, X, ShoppingCart, User } from 'lucide-react';
import { Link, NavLink, useNavigate } from "react-router";
import LoginForm from "../../../pages/client/auth/LoginForm";
import RegisterForm from "../../../pages/client/auth/RegisterForm";
import { useAuth } from "../../../contexts/AuthProvider";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { accountLogin } = useAuth();
  console.log(accountLogin);

  return (
    <header className="relative z-50 flex items-center justify-between mb-8 px-4 md:px-8 py-4 rounded-3xl bg-white/90 backdrop-blur-sm shadow-[0_8px_25px_rgba(0,0,0,0.08)]">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-500 rounded-xl flex items-center justify-center" />
        <span className="font-bold text-xl text-gray-800">
          Study Fortress
        </span>
      </div>

      {/* Menu desktop */}
      <nav className="hidden lg:flex items-center space-x-8 text-sm text-gray-600 font-medium">
        <NavLink
          to="/courses"
          className={({ isActive }) =>
            `hover:text-purple-600 transition-colors duration-200 cursor-pointer ${isActive ? 'text-purple-600 font-semibold' : ''
            }`
          }
        >
          Courses
        </NavLink>

        <NavLink
          to="/categories"
          className={({ isActive }) =>
            `hover:text-purple-600 transition-colors duration-200 cursor-pointer ${isActive ? 'text-purple-600 font-semibold' : ''
            }`
          }
        >
          Categories
        </NavLink>

        
        <Link to="/instructor">
          <button className="bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full px-6 py-2 text-sm font-semibold hover:shadow-lg transition-all duration-200">
            Become Instructor
          </button>
        </Link>
        {!accountLogin && <Link to={"/login"}
          className="border border-purple-600 text-purple-600 rounded-full px-6 py-2 text-sm font-semibold hover:bg-purple-600 hover:text-white transition-all duration-200"
        >
          Login
        </Link>}

        {/* Nút Login */}

      </nav>

      {/* Icon bên phải */}
      <div className="hidden lg:flex items-center space-x-4">
        <button className="p-2 text-gray-600 hover:text-purple-600 transition-colors">
          <Search size={20} />
        </button>
        <button className="p-2 text-gray-600 hover:text-purple-600 transition-colors relative">
          <ShoppingCart size={20} />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
            2
          </span>
        </button>
        <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full cursor-pointer flex items-center justify-center text-white font-semibold">
          {accountLogin?.fullName ? accountLogin.fullName.toUpperCase() : "?"}
        </div>

      </div>

      {/* Mobile menu toggle */}
      <button
        className="lg:hidden p-2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white rounded-2xl shadow-xl mt-2 p-6 lg:hidden">
          <nav className="flex flex-col space-y-4 text-sm text-gray-600 font-medium">
            <a className="hover:text-purple-600 transition-colors duration-200 py-2" href="#">
              Courses
            </a>
            <a className="hover:text-purple-600 transition-colors duration-200 py-2" href="#">
              Categories
            </a>
            <a className="hover:text-purple-600 transition-colors duration-200 py-2" href="#">
              My Learning
            </a>
            <button onClick={() => navigate("/instructor")} className="bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full px-6 py-3 text-sm font-semibold mt-4">
              Become Instructor
            </button>
            {/* Login Mobile */}
            <Link
              to="/auth"
              className="border border-purple-600 text-purple-600 rounded-full px-6 py-3 text-sm font-semibold mt-2 text-center hover:bg-purple-600 hover:text-white transition-all duration-200"
            >
              Login
            </Link>
          </nav>
        </div>
      )}

    </header>
  );
}

export default Header;