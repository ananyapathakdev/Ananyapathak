"use client";
import React from 'react';

const Services = () => {
  const services = [
    { 
      id: "01",
      title: "Frontend Engineering", 
      desc: "Architecting high-performance React & Next.js systems with a focus on clean UI and seamless user experience.", 
      tag: "Development"
    },
    { 
      id: "02",
      title: "Digital Marketing", 
      desc: "Strategic growth planning, social media management, and data-driven ad campaigns to scale your brand.", 
      tag: "Marketing"
    },
    { 
      id: "03",
      title: "SEO & Performance", 
      desc: "Optimizing web speed and search engine visibility to ensure your digital assets rank on the first page.", 
      tag: "Optimization"
    },
    { 
      id: "04",
      title: "Business Analytics", 
      desc: "Transforming raw data into actionable insights using Excel and advanced analytical tools for ROI growth.", 
      tag: "Analytics"
    }
  ];

  return (
    /* FIXED: Changed bg-black to bg-transparent so it follows the toggle */
    <section className="relative py-32 px-6 bg-transparent overflow-hidden transition-colors duration-500">
      
      {/* Background Ghost Text - Fixed colors for light/dark */}
      <div className="absolute top-20 left-10 text-[15rem] font-black text-black/[0.03] dark:text-white/[0.02] select-none leading-none tracking-tighter hidden lg:block">
        EXPERTISE
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-4">
             <div className="w-10 h-[1px] bg-[#5b51ff]"></div>
             <span className="text-[#5b51ff] text-[10px] font-black uppercase tracking-[0.4em]">Services</span>
          </div>
          {/* FIXED: text-white changed to black/white toggle */}
          <h2 className="text-5xl md:text-7xl font-black text-black dark:text-white uppercase leading-[0.9] tracking-tighter">
            Elevating Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5b51ff] to-cyan-400">Digital Presence.</span>
          </h2>
        </div>

        {/* Services Layout - Fixed Borders */}
        <div className="grid grid-cols-1 lg:grid-cols-2 border-t border-black/10 dark:border-white/10">
          {services.map((service, index) => (
            <div 
              key={index} 
              /* FIXED: Hover colors updated */
              className={`group p-12 md:p-16 border-b border-black/10 dark:border-white/10 transition-all duration-700 hover:bg-black/[0.02] dark:hover:bg-white/[0.02]
                ${index % 2 === 0 ? 'lg:border-r' : ''}`}
            >
              <div className="relative">
                {/* ID Number */}
                <span className="absolute -top-6 -left-6 text-sm font-black text-[#5b51ff]/40 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  {service.id}
                </span>
                
                <div className="flex flex-col gap-6">
                  <div className="space-y-2">
                    <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">{service.tag}</p>
                    {/* FIXED: Title color toggle */}
                    <h3 className="text-3xl font-bold text-black dark:text-white group-hover:text-[#5b51ff] transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                  
                  {/* FIXED: Desc text color toggle */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-loose max-w-sm font-medium">
                    {service.desc}
                  </p>

                  <div className="pt-6">
                    {/* FIXED: Arrow button border color toggle */}
                    <div className="w-12 h-12 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center text-black dark:text-white group-hover:bg-[#5b51ff] group-hover:border-[#5b51ff] group-hover:text-white transition-all duration-500 group-hover:rotate-45">
                      <span className="text-xl">→</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;