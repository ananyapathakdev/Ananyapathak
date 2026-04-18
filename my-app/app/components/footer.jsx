"use client";
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative pt-20 pb-10 px-6 bg-transparent border-t border-black/5 dark:border-white/5 transition-colors duration-700">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
          
          {/* Brand Side */}
          <div className="space-y-6 max-w-sm">
            <h2 className="text-2xl font-black text-black dark:text-white tracking-tighter uppercase">
              Ananya <span className="text-[#5b51ff]">Pathak.</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-relaxed">
              Specializing in high-performance Frontend architectures and search-optimized growth engines. 
              Based in India, working globally.
            </p>
          </div>

          {/* Quick Links & Socials */}
          <div className="grid grid-cols-2 gap-16 md:gap-24">
            <div className="space-y-4">
              <p className="text-[10px] font-black text-[#5b51ff] uppercase tracking-[0.3em]">Navigation</p>
              <ul className="space-y-2">
                {['About', 'Projects', 'Services', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-sm font-bold text-black dark:text-white hover:text-[#5b51ff] transition-colors uppercase tracking-tight">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <p className="text-[10px] font-black text-[#5b51ff] uppercase tracking-[0.3em]">Connect</p>
              <ul className="space-y-2">
                <li>
                  <a href="https://linkedin.com/in/ananyapathakdev" target="_blank" className="text-sm font-bold text-black dark:text-white hover:text-[#5b51ff] transition-colors uppercase tracking-tight">
                    LinkedIn ↗
                  </a>
                </li>
                <li>
                  <a href="https://github.com/ananyapathakdev" target="_blank" className="text-sm font-bold text-black dark:text-white hover:text-cyan-400 transition-colors uppercase tracking-tight">
                    GitHub ↗
                  </a>
                </li>
                <li>
                  <a href="mailto:ananyapathak.mfp@gmail.com" className="text-sm font-bold text-black dark:text-white hover:text-[#5b51ff] transition-colors uppercase tracking-tight">
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-black/5 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            © {currentYear} ALL RIGHTS RESERVED
          </p>
          
          <div className="flex items-center gap-6">
             <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                <p className="text-[10px] font-black text-black dark:text-white uppercase tracking-widest">Available for projects</p>
             </div>
             <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
               Handcrafted in React & Tailwind
             </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;