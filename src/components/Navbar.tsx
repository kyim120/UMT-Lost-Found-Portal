
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, User, Menu, X, LogIn, LogOut } from 'lucide-react';
import NotificationSystem from './NotificationSystem';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const location = useLocation();

  useEffect(() => {
    // Check login status from localStorage
    const loginStatus = localStorage.getItem('isLoggedIn');
    const storedUserName = localStorage.getItem('userName');
    
    if (loginStatus === 'true') {
      setIsLoggedIn(true);
      setUserName(storedUserName || 'User');
    }
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const handleLogout = () => {
    // Clear login data from localStorage
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');
    
    setIsLoggedIn(false);
    setUserName('');
    setIsMenuOpen(false);
    
    // Redirect to home page
    window.location.href = '/';
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-gray-200/30 z-50 transition-all duration-300 shadow-lg shadow-blue-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
              <span className="text-white font-bold text-lg">L&F</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                UMT Lost & Found
              </h1>
              <p className="text-xs text-gray-500 font-medium">University Portal</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              to="/" 
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                isActive('/') 
                  ? 'text-blue-600 bg-gradient-to-r from-blue-50 to-purple-50 shadow-md' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/browse" 
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                isActive('/browse') 
                  ? 'text-blue-600 bg-gradient-to-r from-blue-50 to-purple-50 shadow-md' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50'
              }`}
            >
              Browse Items
            </Link>
            <Link 
              to="/report" 
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                isActive('/report') 
                  ? 'text-blue-600 bg-gradient-to-r from-blue-50 to-purple-50 shadow-md' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50'
              }`}
            >
              Report Item
            </Link>
            {isLoggedIn && (
              <Link 
                to="/dashboard" 
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  isActive('/dashboard') 
                    ? 'text-blue-600 bg-gradient-to-r from-blue-50 to-purple-50 shadow-md' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50'
                }`}
              >
                Dashboard
              </Link>
            )}
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-3">
            <button className="p-3 text-gray-600 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-xl transition-all duration-300 hover:scale-105">
              <Search className="w-5 h-5" />
            </button>
            
            {isLoggedIn && <NotificationSystem />}
            
            {isLoggedIn ? (
              <>
                <Link 
                  to="/profile" 
                  className="p-3 text-gray-600 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-xl transition-all duration-300 hover:scale-105"
                >
                  <User className="w-5 h-5" />
                </Link>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600 hidden sm:block">Hello, {userName}</span>
                  <button 
                    onClick={handleLogout}
                    className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    <LogOut className="w-4 h-4" />
                    <span className="hidden sm:block">Logout</span>
                  </button>
                </div>
              </>
            ) : (
              <Link 
                to="/login"
                className="flex items-center space-x-2 px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <LogIn className="w-4 h-4" />
                <span>Login</span>
              </Link>
            )}

            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-3 text-gray-600 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-xl transition-all duration-300"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200/30 animate-fade-in rounded-b-2xl shadow-lg">
            <div className="px-4 pt-4 pb-6 space-y-2">
              <Link 
                to="/" 
                className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all duration-300 ${
                  isActive('/') 
                    ? 'text-blue-600 bg-gradient-to-r from-blue-50 to-purple-50' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/browse" 
                className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all duration-300 ${
                  isActive('/browse') 
                    ? 'text-blue-600 bg-gradient-to-r from-blue-50 to-purple-50' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Browse Items
              </Link>
              <Link 
                to="/report" 
                className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all duration-300 ${
                  isActive('/report') 
                    ? 'text-blue-600 bg-gradient-to-r from-blue-50 to-purple-50' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Report Item
              </Link>
              {isLoggedIn && (
                <>
                  <Link 
                    to="/dashboard" 
                    className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all duration-300 ${
                      isActive('/dashboard') 
                        ? 'text-blue-600 bg-gradient-to-r from-blue-50 to-purple-50' 
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <Link 
                    to="/profile" 
                    className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all duration-300 ${
                      isActive('/profile') 
                        ? 'text-blue-600 bg-gradient-to-r from-blue-50 to-purple-50' 
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Profile
                  </Link>
                  <div className="px-4 py-3">
                    <p className="text-sm text-gray-600 mb-2">Logged in as: {userName}</p>
                    <button 
                      onClick={handleLogout}
                      className="w-full px-4 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl font-semibold text-center"
                    >
                      Logout
                    </button>
                  </div>
                </>
              )}
              {!isLoggedIn && (
                <Link 
                  to="/login"
                  className="block px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
