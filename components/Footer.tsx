import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* <p className="mb-4 text-lg font-semibold text-white">{portfolioData.name}</p> */}
        <p className="text-slate-400 text-sm mb-8">
          Thank you for visiting my portfolio. Feel free to connect with me on LinkedIn.
        </p>
        <div className="border-t border-slate-800 pt-8">
          <p className="text-sm">
            &copy; {currentYear} {portfolioData.name}. Last updated on Jan 2026.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;