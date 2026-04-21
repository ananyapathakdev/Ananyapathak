"use client";
import React from 'react';

const Blog = () => {
  const insights = [
    {
      title: "Modern Frontend Stack",
      label: "Development",
      desc: "Architecting ultra-fast interfaces using React 19, Next.js 15, and Tailwind v4 for optimum performance.",
      icon: "💻",
      color: "hover:border-cyan-400"
    },
    {
      title: "Performance UI",
      label: "User Experience",
      desc: "Focusing on Core Web Vitals and Framer Motion to create seamless, high-converting user journeys.",
      icon: "✨",
      color: "hover:border-[#5b51ff]"
    },
    {
      title: "Technical SEO",
      label: "Optimization",
      desc: "Implementing advanced schema markup and semantic structures to ensure maximum search visibility.",
      icon: "🔍",
      color: "hover:border-emerald-400"
    },
    {
      title: "Growth Strategy",
      label: "Marketing",
      desc: "Scaling brands through search-first fundamentals and data-backed Google & Meta ad campaigns.",
      icon: "📈",
      color: "hover:border-purple-400"
    }
  ];

  return (
    <section id="blog" className="relative py-40 px-6 bg-transparent transition-colors duration-700">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-24">
          <h2 className="text-[#5b51ff] font-black uppercase tracking-[0.4em] text-[10px] mb-6 flex items-center gap-3">
             <span className="w-8 h-[1px] bg-[#5b51ff]"></span> Expertise & Journal
          </h2>
          <h3 className="text-6xl md:text-8xl font-black text-black dark:text-white leading-[0.85] tracking-tighter uppercase">
            CORE <br /> <span className="text-gray-100 dark:text-white/18">DISCIPLINES.</span>
          </h3>
        </div>

        {/* 4-Card Grid for Portfolio Insights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {insights.map((item, index) => (
            <div 
              key={index} 
              className={`group p-10 rounded-[55px] bg-white dark:bg-zinc-900/40 border border-black/[0.03] dark:border-white/[0.05] ${item.color} transition-all duration-500 flex flex-col justify-between h-[420px] hover:scale-[1.02]`}
            >
              <div>
                <div className="flex justify-between items-start mb-10">
                  <span className="text-[9px] font-black uppercase tracking-widest text-[#5b51ff] bg-[#5b51ff]/5 px-4 py-2 rounded-full border border-[#5b51ff]/10">
                    {item.label}
                  </span>
                  <span className="text-2xl group-hover:rotate-12 transition-transform duration-500">
                    {item.icon}
                  </span>
                </div>
                <h4 className="text-2xl font-black text-black dark:text-white leading-tight tracking-tight mb-6 uppercase">
                  {item.title}
                </h4>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-loose">
                  {item.desc}
                </p>
              </div>

              <div className="pt-8 border-t border-black/5 dark:border-white/5">
                <button className="text-[10px] font-black uppercase tracking-[0.2em] text-[#5b51ff] flex items-center gap-3 group-hover:gap-5 transition-all">
                  Read Insight <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Minimal Banner - Updated for better spacing */}
        <div className="mt-20 p-16 rounded-[60px] bg-black text-white flex flex-col lg:flex-row justify-between items-center gap-10 border border-white/5 shadow-2xl shadow-purple-500/5">
           <div className="space-y-3 text-center lg:text-left">
              <p className="text-3xl font-black tracking-tight uppercase">Have a project in mind?</p>
              <p className="text-gray-400 text-lg font-medium">Let&apos;s build a high-performance engine for your brand.</p>
           </div>
           <a href="#contact" className="px-12 py-6 bg-white text-black rounded-full font-black uppercase tracking-[0.2em] text-[10px] hover:bg-[#5b51ff] hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-xl">
              Start a Conversation
           </a>
        </div>
 
      </div>
    </section>
  );
};

export default Blog;