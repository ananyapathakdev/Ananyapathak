"use client";
import React from 'react';

const Projects = () => {
  const projectList = [
    {
      title: "Video Production Platform",
      category: "Frontend Engineering",
      description: "React.js based high-performance site featuring custom video players and dynamic filtering using Hooks and Framer Motion.", 
      tags: ["React.js", "JSX", "Framer Motion"],
      stats: "25% LCP Reduction" 
    },
    {
      title: "Professional Portfolio",
      category: "Next.js Development",
      description: "Developed a high-performance, SEO-optimized platform using Next.js, achieving a 98/100 Lighthouse score for technical excellence.",
      tags: ["Next.js", "Tailwind v4", "SEO Architecture"],
      stats: "98/100 Lighthouse" 
    },
    {
      title: "Athanni Softtech Internship",
      category: "Frontend Architecture",
      description: "Architected 15+ modular React components using Atomic Design principles, enhancing codebase reusability by 40%.",
      tags: ["React.js", "Tailwind", "Axios"],
      stats: "40% Reusability" 
    }
  ];

  return (
    <section id="projects" className="relative py-40 px-6 bg-transparent transition-colors duration-700">
      <div className="max-w-7xl mx-auto">
        
        {/* Header: Swapped UI/UX for FRONTEND ENGINEER */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="space-y-4">
            <h2 className="text-[#5b51ff] font-black uppercase tracking-[0.4em] text-[10px]">Technical Portfolio</h2>
            <h3 className="text-6xl md:text-8xl font-black text-black dark:text-white leading-[0.85] tracking-tighter uppercase">
              FRONTEND <br /> <span className="text-gray-100 dark:text-white/15">ENGINEER.</span>
            </h3>
          </div>
          <p className="text-gray-500 dark:text-gray-400 font-medium text-xl max-w-sm border-l-2 border-[#5b51ff] pl-8 leading-relaxed">
            Building high-performance, search-optimized web architectures with a focus on clean React code.
          </p>
        </div>

        {/* Project Cards (Increased spacing for better flow) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectList.map((project, index) => (
            <div key={index} className="group p-10 rounded-[55px] bg-white dark:bg-zinc-900/40 border border-black/[0.03] dark:border-white/[0.05] hover:border-[#5b51ff]/30 transition-all duration-500 hover:scale-[1.02]">
              <div className="flex justify-between items-start mb-12">
                <span className="text-[9px] font-black uppercase tracking-widest text-[#5b51ff] bg-[#5b51ff]/10 px-4 py-2 rounded-full border border-[#5b51ff]/10">
                  {project.category}
                </span>
                <span className="text-[10px] font-bold text-emerald-500 tracking-tighter">{project.stats}</span>
              </div>
              
              <h4 className="text-3xl font-black text-black dark:text-white tracking-tighter uppercase mb-6 leading-none">
                {project.title}
              </h4>
              
              <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-relaxed mb-10">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-black/5 dark:border-white/5">
                {project.tags.map((tag, tIndex) => (
                  <span key={tIndex} className="text-[9px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest px-1">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;