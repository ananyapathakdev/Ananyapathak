'use client';

import React, { useState, useEffect } from 'react';

export default function Hero() {
  const [skillIndex, setSkillIndex] = useState(0);

  const skills = [
    "Frontend Developer",
    "Technical SEO Specialist",
    "React & Next.js Expert",
    "UI/UX Designer",
    "Digital Growth Strategist"
  ];

  const downloadResume = () => {
    const resumePath = '/resumes/Ananya-Pathak-Resume.pdf';
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = 'Ananya-Pathak-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setSkillIndex((prev) => (prev + 1) % skills.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [skills.length]);

  return (
    <div className="bg-white dark:bg-black transition-colors duration-500">
      
      <style>{`
        @keyframes slideUp {
          0% {
            transform: translateY(100%);
            opacity: 0;
          }
          10% {
            transform: translateY(0);
            opacity: 1;
          }
          90% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(-100%);
            opacity: 0;
          }
        }

        .animate-skill {
          display: inline-block;
          animation: slideUp 3s infinite;
        }
      `}</style>

      <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
        
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.1] bg-[url('/grid.svg')] bg-center pointer-events-none"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-7xl mx-auto relative z-10">

          {/* LEFT CONTENT */}
          <div className="space-y-6 mt-15">

            <h1 className="text-7xl md:text-8xl font-extrabold tracking-tighter text-black dark:text-white leading-[0.9]">
              Hi, I’m <br />

              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-500 via-blue-500 to-emerald-400">
                Ananya Pathak
              </span>
            </h1>

            {/* SKILLS */}
            <div className="h-12 overflow-hidden flex items-center">
              <p
                key={skillIndex}
                className="animate-skill text-2xl md:text-3xl font-bold tracking-tight text-blue-600 dark:text-blue-400 uppercase"
              >
                {skills[skillIndex]} |
              </p>
            </div>

            {/* DESCRIPTION */}
            <p className="text-gray-500 dark:text-gray-400 font-medium text-lg max-w-xl">
              Engineering digital experiences where speed meets strategy. I combine
              modern frontend frameworks with technical SEO to build web applications
              that aren&apos;t just fast—they&apos;re discoverable. From React
              architectures to data-driven growth, I turn complex code into
              high-ranking digital assets.
            </p>

            {/* BUTTONS */}
            <div className="pt-8 flex flex-col sm:flex-row gap-4">

              {/* VIEW MY WORK */}
              <a
                href="#projects"
                className="px-8 py-3 bg-blue-600 text-white rounded-full font-bold hover:scale-105 transition-transform text-center"
              >
                View My Work
              </a>

              {/* CONNECT */}
              <a
                href="#contact"
                className="px-8 py-3 border border-black/20 dark:border-white/20 text-black dark:text-white rounded-full font-bold hover:bg-gray-100 dark:hover:bg-white/5 transition-all text-center"
              >
                Connect →
              </a>

              {/* RESUME - ONLY ONE */}
              <button
                type="button"
                onClick={downloadResume}
                className="px-8 py-3 border-2 border-[#5b51ff] text-[#5b51ff] dark:text-blue-400 dark:border-blue-400 rounded-full font-bold hover:bg-[#5b51ff] hover:text-white dark:hover:bg-blue-400 dark:hover:text-black transition-all duration-300 flex items-center justify-center gap-2"
              >
                📄 Resume
              </button>

            </div>
          </div>

          {/* PHOTO SECTION */}
          <div className="flex justify-center md:justify-end">

            <div className="relative p-1.5 rounded-full bg-linear-to-tr from-purple-500 via-blue-400 to-emerald-400 shadow-2xl">

              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-[6px] border-white dark:border-black bg-gray-100 dark:bg-zinc-900">

                <img
                  src="/me.jpeg"
                  className="w-full h-full object-cover scale-110"
                  alt="Ananya Pathak"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://ui-avatars.com/api/?name=Ananya+Pathak&background=0D8ABC&color=fff&size=512";
                  }}
                />

              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}