"use client";
import React from 'react';

const Services = () => {
  const services = [
    { 
      id: "01",
      title: "Frontend Engineering", 
      desc: "Architecting high-performance React & Next.js systems. I build responsive, accessible, and modular interfaces with a focus on clean JSX code.", 
      tag: "Development"
    },
    { 
      id: "03",
      title: "Technical SEO", 
      desc: "Optimizing Core Web Vitals, Schema markup, and sitemap architectures to ensure your digital assets dominate search engine rankings.", 
      tag: "Optimization"
    },
    { 
      id: "02",
      title: "Digital Strategy", 
      desc: "End-to-end brand growth planning and social media management, turning digital platforms into high-converting organic engines.", 
      tag: "Brand Growth"
    },
    { 
      id: "04",
      title: "Performance Marketing", 
      desc: "Scaling brands through data-backed Google and Meta ad campaigns, focusing on high ROI and advanced conversion tracking.", 
      tag: "Ads & ROI"
    }
  ];

  return (
    <section id="services" className="relative py-40 px-6 bg-transparent overflow-hidden transition-colors duration-500">
      
      {/* Background Ghost Text */}
      <div className="absolute top-20 left-10 text-[15rem] font-black text-black/[0.03] dark:text-white/[0.15] select-none leading-none tracking-tighter hidden lg:block">
        EXPERTISE
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-32">
          <div className="flex items-center gap-4 mb-6">
             <div className="w-12 h-[1px] bg-[#5b51ff]"></div>
             <span className="text-[#5b51ff] text-[10px] font-black uppercase tracking-[0.5em]">Capabilities</span>
          </div>
          <h2 className="text-5xl md:text-8xl font-black text-black dark:text-white uppercase leading-[0.9] tracking-tighter">
            Engineering <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5b51ff] to-cyan-400 italic">Growth Engines.</span>
          </h2>
        </div>

        {/* Services Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 border-t border-black/5 dark:border-white/5">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`group p-12 md:p-20 border-b border-black/5 dark:border-white/5 transition-all duration-700 hover:bg-black/[0.01] dark:hover:bg-white/[0.01]
                ${index % 2 === 0 ? 'lg:border-r' : ''}`}
            >
              <div className="relative">
                {/* Floating ID Number */}
                <span className="absolute -top-10 -left-6 text-xs font-black text-[#5b51ff]/30 opacity-0 group-hover:opacity-100 transition-all duration-500 tracking-widest">
                  // {service.id}
                </span>
                
                <div className="flex flex-col gap-8">
                  <div className="space-y-3">
                    <p className="text-[10px] font-bold text-[#5b51ff] uppercase tracking-[0.3em]">{service.tag}</p>
                    <h3 className="text-4xl font-black text-black dark:text-white group-hover:translate-x-2 transition-transform duration-500 uppercase tracking-tighter">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed max-w-sm font-medium">
                    {service.desc}
                  </p>

                  <div className="pt-4">
                    <div className="w-14 h-14 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center text-black dark:text-white group-hover:bg-[#5b51ff] group-hover:border-[#5b51ff] group-hover:text-white transition-all duration-500 group-hover:rotate-45">
                      <span className="text-2xl">→</span>
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