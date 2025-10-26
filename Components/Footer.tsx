
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-100 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700">
      <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-slate-500 dark:text-slate-400">
          &copy; {currentYear} Sayandip Ghosh. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;