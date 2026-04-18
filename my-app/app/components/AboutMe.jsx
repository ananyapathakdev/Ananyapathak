"use client";
import React from 'react';

const AboutMe = () => {
  const techStack = [
    { category: "Core Frontend", tools: "React 19, Next.js 15, JSX" },
    { category: "Styling & UI", tools: "Tailwind v4, Framer Motion" },
    { category: "Web Performance", tools: "Core Web Vitals, Page Speed" },
    { category: "Technical SEO", tools: "Schema & Semantic HTML" },
  ];

  return (
    <section id="about" className="relative py-40 px-6 bg-transparent transition-colors duration-700 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* PHASE 1: THE IDENTITY (More Margin Bottom) */}
        <div className="flex flex-col gap-6 mb-40">
          <span className="text-[#5b51ff] font-black text-[10px] uppercase tracking-[0.5em] flex items-center gap-3">
            <span className="w-12 h-[1px] bg-[#5b51ff]"></span> 01. The Profile
          </span>
          <h2 className="text-7xl md:text-[10rem] font-black text-black dark:text-white leading-[0.8] tracking-tighter uppercase">
            Ananya <br /> 
            <span className="text-gray-100 dark:text-white/15">Pathak.</span>
          </h2>
        </div>

        {/* PHASE 2: THE DUALITY (Increased Gap) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 mb-48">
          <div className="space-y-10">
            <h3 className="text-4xl font-bold text-black dark:text-white tracking-tight leading-tight">
              An Engineer who builds with <br/> <span className="text-[#5b51ff]">Conversion</span> in mind.
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-xl leading-relaxed max-w-lg">
              I specialize in building lightning-fast interfaces. My code isn't just functional; 
              it's optimized for search-first performance and high accessibility.
            </p>
          </div>
          
          <div className="flex flex-col justify-end gap-12">
             <div className="h-[1px] w-full bg-black/5 dark:bg-white/5"></div>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
                {techStack.map((item, index) => (
                  <div key={index} className="group">
                    <p className="text-[10px] font-black text-[#5b51ff] uppercase mb-3 tracking-[0.2em]">{item.category}</p>
                    <p className="text-black dark:text-white font-bold text-lg tracking-tight">
                      {item.tools}
                    </p>
                  </div>
                ))}
             </div>
          </div>
        </div>

        {/* PHASE 3: TECHNICAL BENTO (Wider Gaps & Softer Borders) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Box 1: Frontend */}
          <div className="p-12 rounded-[60px] bg-black text-white flex flex-col justify-between aspect-square group transition-all hover:scale-[1.02] duration-500 shadow-2xl shadow-purple-500/10">
            <div className="flex justify-between items-start">
               <span className="text-[10px] font-bold tracking-widest opacity-30 uppercase">Frontend Logic</span>
               <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                  <span className="text-lg">↗</span>
               </div>
            </div>
            <div>
              <h4 className="text-3xl font-black leading-tight uppercase tracking-tighter mb-6">
                Component <br/> Architecture.
              </h4>
              <div className="flex flex-wrap gap-3">
                <span className="text-[10px] px-3 py-1.5 bg-white/5 rounded-full border border-white/10 tracking-wider font-bold">REACT 19</span>
                <span className="text-[10px] px-3 py-1.5 bg-white/5 rounded-full border border-white/10 tracking-wider font-bold">NEXT.JS</span>
              </div>
            </div>
          </div>

          {/* Box 2: SEO (Cleaner List) */}
          <div className="p-12 rounded-[60px] bg-white dark:bg-zinc-900/30 border border-black/[0.03] dark:border-white/[0.05] flex flex-col justify-between aspect-square transition-all hover:scale-[1.02] duration-500">
            <span className="text-[10px] font-bold tracking-widest text-[#5b51ff] uppercase">Optimization</span>
            <div className="space-y-6">
              <h4 className="text-3xl font-black leading-tight uppercase tracking-tighter text-black dark:text-white">
                Technical SEO <br/> Specialist.
              </h4>
              <div className="space-y-3">
                <ul className="text-[13px] font-bold text-gray-600 dark:text-gray-400 space-y-2 uppercase tracking-wide">
                  <li className="flex items-center gap-3">○ Schema Markup</li>
                  <li className="flex items-center gap-3">○ Semantic HTML</li>
                  <li className="flex items-center gap-3">○ Core Vitals</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Box 3: UI/UX */}
          <div className="p-12 rounded-[60px] bg-gradient-to-br from-[#5b51ff] to-[#3db9ff] text-white flex flex-col justify-between aspect-square relative overflow-hidden transition-all hover:scale-[1.02] duration-500">
             <div className="absolute -bottom-6 -right-6 p-8 opacity-10 text-[12rem] font-black tracking-tighter">UI</div>
             <span className="text-[10px] font-bold tracking-widest uppercase opacity-60">Design Systems</span>
             <h4 className="text-3xl font-black leading-tight uppercase tracking-tighter relative z-10">
                Tailwind v4 <br/> Implementation.
             </h4>
          </div>

        </div>

        {/* FOOTER */}
        <div className="mt-48 text-center">
           <p className="text-black/[0.03] dark:text-white/[0.19] text-5xl md:text-9xl font-black uppercase italic tracking-tighter select-none">
             Performance Driven.
           </p>
        </div>

      </div>
    </section>
  );
};

export default AboutMe;