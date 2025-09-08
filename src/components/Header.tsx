import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Works', path: '/gallery' },
    { name: 'About', path: '/cv' },
    { name: 'Sound', path: '/music' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-8xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20 lg:h-24">
          {/* Logo */}
          <Link to="/" className="group relative">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-black rounded-full group-hover:scale-110 transition-transform duration-300"></div>
              <div className="hidden sm:block">
                <span className="text-xl font-light tracking-[-0.02em] text-black">
                  Dmitrii Kremenskii
                </span>
              </div>
              <div className="sm:hidden">
                <span className="text-lg font-light tracking-[-0.02em] text-black">
                  EM
                </span>
              </div>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative text-sm font-light tracking-wide transition-all duration-300 group ${
                  location.pathname === item.path
                    ? 'text-black'
                    : 'text-gray-400 hover:text-black'
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-px bg-black transition-all duration-300 ${
                  location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-black transition-colors"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-gray-100 py-6"
            >
              <div className="space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block text-base font-light tracking-wide transition-colors duration-200 ${
                      location.pathname === item.path
                        ? 'text-black'
                        : 'text-gray-500 hover:text-black'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;