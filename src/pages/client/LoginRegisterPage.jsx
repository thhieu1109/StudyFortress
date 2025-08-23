import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";

function LoginRegisterPage() {
  const [isLogin, setIsLogin] = useState(true);
  
  const handleOpenLogin = () => {
      setIsLogin(true);
  }

  return (
    <div className="flex items-center justify-center min-h-screen min-w-40 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Glass morphism card */}
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-8 relative z-10">
        {/* Logo/Icon */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Chào mừng bạn</h1>
          <p className="text-white/70 text-sm">{isLogin ? "Đăng nhập" : "Đăng ký"} để tiếp tục hành trình</p>
        </div>

        {/* Enhanced Tabs */}
        <div className="relative mb-8">
          <div className="flex bg-white/10 rounded-2xl p-1 backdrop-blur-sm">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-3 text-sm font-semibold rounded-xl transition-all duration-300 relative overflow-hidden ${
                isLogin
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg transform scale-105"
                  : "text-white/70 hover:text-white hover:bg-white/5"
              }`}
            >
              {isLogin && (
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-20 animate-pulse"></div>
              )}
              <span className="relative z-10">Đăng nhập</span>
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-3 text-sm font-semibold rounded-xl transition-all duration-300 relative overflow-hidden ${
                !isLogin
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg transform scale-105"
                  : "text-white/70 hover:text-white hover:bg-white/5"
              }`}
            >
              {!isLogin && (
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-20 animate-pulse"></div>
              )}
              <span className="relative z-10">Đăng ký</span>
            </button>
          </div>
        </div>

        {/* Form */}
        <div className="space-y-6 ">
          {isLogin ? (
           <Login />
          ) : (
            <Register handleOpenLogin={handleOpenLogin} />
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginRegisterPage;