
import React from 'react';
import { NavLink } from 'react-router-dom';
import ThemeToggleButton from './ThemeToggleButton';

const Header: React.FC = () => {
  const activeLinkStyle = {
    color: '#10b981', // emerald-500
  };

  return (
    <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50 shadow-md dark:border-b dark:border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <NavLink to="/" className="text-2xl font-bold text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-500 transition-colors duration-300">
              Sayandip Ghosh
            </NavLink>
          </div>
          <nav className="hidden md:flex items-center">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink
                to="/"
                className="text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
              >
                Home
              </NavLink>
              <NavLink
                to="/blog"
                className="text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
              >
                Blog
              </NavLink>
            </div>
             <div className="ml-4">
              <ThemeToggleButton />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;