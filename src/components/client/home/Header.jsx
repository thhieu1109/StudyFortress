import { useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Star, Clock, DollarSign, Search, Menu, X, ShoppingCart, User, LogOut, BookOpen, Settings } from 'lucide-react';
import { Link, NavLink, useNavigate } from "react-router";
import LoginForm from "../../../pages/client/auth/LoginForm";
import RegisterForm from "../../../pages/client/auth/RegisterForm";
import { useAuth } from "../../../contexts/AuthProvider";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { accountLogin, logout } = useAuth();
  const dropdownRef = useRef(null);

  // Đóng dropdown khi click bên ngoài
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsUserMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    // Xóa token và thông tin user từ localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('accountLogin');
    
    // Cập nhật context (nếu AuthProvider có function logout)
    logout(); 
    
    // Đóng dropdown
    setIsUserMenuOpen(false);
    
    // Redirect về trang chủ
    navigate('/');
    
    // Reload trang để reset state (optional)
    window.location.reload();
  };

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

        {/* Hiển thị Login/Register hoặc User Avatar */}
        {!accountLogin ? (
          <div className="flex items-center space-x-3">
            <Link
              to="/auth/login"
              className="border border-purple-600 text-purple-600 rounded-full px-6 py-2 text-sm font-semibold hover:bg-purple-50 transition-all duration-200"
            >
              Login
            </Link>
            <Link
              to="/auth/register"
              className="bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full px-6 py-2 text-sm font-semibold hover:shadow-lg transition-all duration-200"
            >
              Register
            </Link>
          </div>
        ) : (
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              className="w-9 h-9 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full cursor-pointer flex items-center justify-center text-white font-semibold text-sm hover:shadow-lg transition-all duration-200"
            >
              {accountLogin?.fullName?.charAt(0).toUpperCase() || "?"}
            </button>

            {/* User Dropdown Menu */}
            {isUserMenuOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl py-2 border border-gray-100">
                <div className="px-4 py-3 border-b border-gray-100">
                  <p className="text-sm font-semibold text-gray-800">{accountLogin?.fullName}</p>
                  <p className="text-xs text-gray-500 mt-1">{accountLogin?.email}</p>
                </div>
                
                <Link
                  to="/my-learning"
                  className="flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors"
                  onClick={() => setIsUserMenuOpen(false)}
                >
                  <BookOpen size={16} className="mr-3" />
                  My Learning
                </Link>
                
                <Link
                  to="/settings"
                  className="flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors"
                  onClick={() => setIsUserMenuOpen(false)}
                >
                  <Settings size={16} className="mr-3" />
                  Settings
                </Link>
                
                <div className="border-t border-gray-100 mt-2 pt-2">
                  <button
                    onClick={handleLogout}
                    className="flex items-center w-full px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors"
                  >
                    <LogOut size={16} className="mr-3" />
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
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
            <NavLink
              to="/courses"
              className={({ isActive }) =>
                `hover:text-purple-600 transition-colors duration-200 py-2 ${isActive ? 'text-purple-600 font-semibold' : ''}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Courses
            </NavLink>
            <NavLink
              to="/categories"
              className={({ isActive }) =>
                `hover:text-purple-600 transition-colors duration-200 py-2 ${isActive ? 'text-purple-600 font-semibold' : ''}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Categories
            </NavLink>
            
            {accountLogin && (
              <NavLink
                to="/my-learning"
                className={({ isActive }) =>
                  `hover:text-purple-600 transition-colors duration-200 py-2 ${isActive ? 'text-purple-600 font-semibold' : ''}`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                My Learning
              </NavLink>
            )}

            <button 
              onClick={() => {
                navigate("/instructor");
                setIsMenuOpen(false);
              }} 
              className="bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full px-6 py-3 text-sm font-semibold mt-4"
            >
              Become Instructor
            </button>

            {/* Login/Register hoặc Logout cho Mobile */}
            {!accountLogin ? (
              <>
                <Link
                  to="/auth/login"
                  className="border border-purple-600 text-purple-600 rounded-full px-6 py-3 text-sm font-semibold mt-2 text-center hover:bg-purple-50 transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/auth/register"
                  className="bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full px-6 py-3 text-sm font-semibold text-center hover:shadow-lg transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Register
                </Link>
              </>
            ) : (
              <>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-xs text-gray-500 mb-1">Logged in as</p>
                  <p className="font-semibold text-gray-800">{accountLogin?.fullName}</p>
                </div>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                  className="border border-red-500 text-red-500 rounded-full px-6 py-3 text-sm font-semibold mt-2 text-center hover:bg-red-50 transition-all duration-200"
                >
                  Logout
                </button>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;