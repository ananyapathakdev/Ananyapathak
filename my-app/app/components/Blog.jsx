"use client";
import React from 'react';

const Blog = () => {
  const insights = [
    {
      title: "Modern Frontend Stack",
      label: "Development",
      desc: "Building ultra-fast interfaces using React, Next.js, and Tailwind v4 for optimum user experience.",
      icon: "💻",
      color: "hover:border-cyan-400"
    },
    {
      title: "Growth Strategy",
      label: "Marketing",
      desc: "Scaling brands through search-first fundamentals and data-backed Google & Meta ad campaigns.",
      icon: "📈",
      color: "hover:border-[#5b51ff]"
    },
    {
      title: "Data Insights",
      label: "Analytics",
      desc: "Transforming raw data into profitable decisions using Advanced Excel and Business Analytics.",
      icon: "📊",
      color: "hover:border-green-400"
    },
    {
      title: "Business Law",
      label: "Tax & GST",
      desc: "Navigating compliance and financial strategy with certified tax practitioner expertise.",
      icon: "⚖️",
      color: "hover:border-orange-400"
    }
  ];

  return (
    <section id="blog" className="relative py-28 px-6 bg-transparent transition-colors duration-700">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-[#5b51ff] font-black uppercase tracking-[0.4em] text-[10px] mb-4">Expertise & Journal</h2>
          <h3 className="text-5xl md:text-7xl font-black text-black dark:text-white leading-none tracking-tighter">
            CORE <br /> <span className="text-gray-400">DISCIPLINES.</span>
          </h3>
        </div>

        {/* 4-Card Grid for Portfolio Insights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {insights.map((item, index) => (
            <div 
              key={index} 
              className={`group p-8 rounded-[40px] bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/10 ${item.color} transition-all duration-500 flex flex-col justify-between h-[360px] hover:shadow-2xl dark:hover:shadow-[#5b51ff]/5`}
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="text-[9px] font-black uppercase tracking-widest text-black dark:text-white/60 bg-black/5 dark:bg-white/5 px-3 py-1.5 rounded-full">
                    {item.label}
                  </span>
                  <span className="text-xl group-hover:scale-125 transition-transform duration-500">
                    {item.icon}
                  </span>
                </div>
                <h4 className="text-2xl font-black text-black dark:text-white leading-tight tracking-tight mb-4">
                  {item.title}
                </h4>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-6 border-t border-black/5 dark:border-white/5">
                <button className="text-[10px] font-black uppercase tracking-widest text-[#5b51ff] flex items-center gap-2 group-hover:gap-4 transition-all">
                  Learn More <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Minimal Banner */}
        <div className="mt-8 p-12 rounded-[50px] bg-gradient-to-r from-black to-gray-900 dark:from-[#111] dark:to-[#050505] text-white flex flex-col md:flex-row justify-between items-center gap-8 border border-white/5">
           <div className="space-y-2 text-center md:text-left">
              <p className="text-2xl font-black tracking-tight">Have a project in mind?</p>
              <p className="text-gray-400 text-sm font-medium">Let's combine code and marketing for your brand.</p>
           </div>
           <a href="#contact" className="px-10 py-5 bg-white text-black rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-[#5b51ff] hover:text-white transition-all transform hover:scale-105 active:scale-95">
             Start a Conversation
           </a>
        </div>

      </div>
    </section>
  );
};

export default Blog;