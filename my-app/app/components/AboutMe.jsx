"use client";
import React from 'react';

const AboutMe = () => {
  return (
    <section id="about" className="relative py-32 px-6 bg-transparent transition-colors duration-700 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* PHASE 1: THE IDENTITY */}
        <div className="flex flex-col gap-4 mb-32">
          <span className="text-[#5b51ff] font-black text-[10px] uppercase tracking-[0.5em] flex items-center gap-2">
            <span className="w-8 h-[1px] bg-[#5b51ff]"></span> 01. The Profile
          </span>
          <h2 className="text-7xl md:text-[10rem] font-black text-black dark:text-white leading-[0.8] tracking-tighter uppercase">
            Ananya <br /> 
            <span className="text-gray-200 dark:text-white/10">Pathak.</span>
          </h2>
        </div>

        {/* PHASE 2: THE DUALITY (Dev + Marketing) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-black dark:text-white tracking-tight">
              A Web Developer who understands the ROI of a pixel.
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-xl leading-relaxed max-w-lg">
              I don't just write code; I build growth engines. Combining **React/Next.js** precision with **Digital Marketing** psychology to turn visitors into customers.
            </p>
          </div>
          <div className="flex flex-col justify-end gap-6">
             <div className="h-[1px] w-full bg-black/10 dark:bg-white/10"></div>
             <div className="grid grid-cols-2 gap-10">
                <div>
                  <p className="text-sm font-black text-[#5b51ff] uppercase mb-2">Technical</p>
                  <p className="text-black dark:text-white font-bold">Vite, Tailwind v4, Node.js</p>
                </div>
                <div>
                  <p className="text-sm font-black text-[#5b51ff] uppercase mb-2">Growth</p>
                  <p className="text-black dark:text-white font-bold">Google Ads, Meta, SEO</p>
                </div>
             </div>
          </div>
        </div>

        {/* PHASE 3: THE EDGE (Bento Elements) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Business/Tax - Dark Minimalist */}
          <div className="p-12 rounded-[50px] bg-black text-white flex flex-col justify-between aspect-square group transition-all hover:bg-[#111]">
            <div className="flex justify-between items-start">
               <span className="text-[10px] font-bold tracking-widest opacity-40 uppercase italic">Compliance</span>
               <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                  <span className="text-sm">↗</span>
               </div>
            </div>
            <h4 className="text-3xl font-black leading-none uppercase tracking-tighter">
              Certified <br/> GST & Income <br/> Tax Expert.
            </h4>
          </div>

          {/* Analytics - Glassmorphism */}
          <div className="p-12 rounded-[50px] bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/10 flex flex-col justify-between aspect-square">
            <span className="text-[10px] font-bold tracking-widest text-[#5b51ff] uppercase">Data Logic</span>
            <div className="space-y-4">
              <h4 className="text-3xl font-black text-black dark:text-white leading-none uppercase tracking-tighter">
                Business <br/> Analytics & <br/> Adv. Excel.
              </h4>
              <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">ROI Focused Decisions</p>
            </div>
          </div>

          {/* Marketing Psychology - Vibrant Gradient */}
          <div className="p-12 rounded-[50px] bg-gradient-to-br from-[#5b51ff] to-cyan-500 text-white flex flex-col justify-between aspect-square relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-20 text-9xl font-black tracking-tighter">100</div>
             <span className="text-[10px] font-bold tracking-widest uppercase opacity-60">Execution</span>
             <h4 className="text-3xl font-black leading-none uppercase tracking-tighter relative z-10">
               Search First <br/> Fundamentals <br/> Strategy.
             </h4>
          </div>

        </div>

        {/* FOOTER TEXT */}
        <div className="mt-32 text-center">
           <p className="text-black/20 dark:text-white/5 text-4xl md:text-7xl font-black uppercase italic tracking-tighter">
             Transforming Visions into Performance.
           </p>
        </div>

      </div>
    </section>
  );
};

export default AboutMe;