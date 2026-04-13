"use client";
import React from 'react';

const Navbar = ({ isDark, setIsDark }) => {
  const navItems = ['Home', 'Blog', 'About', 'Projects', 'Contact'];

  return (
    /* FIXED: 'absolute' added instead of 'fixed'. 
       Isse ye sirf Hero section ke upar rahega aur scroll karne par upar chala jayega. */
    <nav className="absolute top-4 left-0 w-full z-50 flex justify-center px-6">
      <div className="flex items-center justify-between w-full max-w-7xl px-6 py-2 bg-white/10 dark:bg-black/20 backdrop-blur-xl border border-black/5 dark:border-white/10 rounded-full shadow-2xl transition-all duration-500">
        
        {/* Left: Photo & Name */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-400 dark:border-white/20">
            <img 
              src="/your-photo.jpg" 
              alt="Ananya Pathak" 
              className="w-full h-full object-cover"
              onError={(e) => { e.currentTarget.src="https://ui-avatars.com/api/?name=Ananya+Pathak"; }}
            />
          </div>
          <span className="font-bold text-sm text-black dark:text-white uppercase tracking-widest">
            Ananya Pathak
          </span>
        </div>

        {/* Center: Navigation Links */}
        <div className="hidden md:flex bg-gray-100/50 dark:bg-white/5 rounded-full px-2 py-1 border border-black/5 dark:border-white/5">
          {navItems.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="px-5 py-2 text-[11px] font-black uppercase tracking-widest text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-all"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Right: Toggle Button */}
        <button 
          onClick={() => setIsDark(!isDark)}
          className="relative w-14 h-7 bg-gray-200 dark:bg-white/10 rounded-full p-1 transition-all border border-black/5 dark:border-white/10"
        >
          <div className={`w-5 h-5 rounded-full transition-all duration-500 transform 
            ${isDark ? 'translate-x-7 bg-black' : 'translate-x-0 bg-yellow-400'}`}>
            <span className="text-[10px] flex items-center justify-center h-full">
               {isDark ? '🌙' : '☀️'}
            </span>
          </div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;