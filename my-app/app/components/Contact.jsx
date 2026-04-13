"use client";
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="relative py-32 px-6 bg-transparent transition-colors duration-700 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Left Side: Contact Info */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-[#5b51ff] font-black uppercase tracking-[0.4em] text-[10px]">Get In Touch</h2>
              <h3 className="text-6xl md:text-8xl font-black text-black dark:text-white leading-[0.85] tracking-tighter">
                READY TO <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">SCALE UP?</span>
              </h3>
            </div>

            <div className="space-y-10">
              {/* Email Section */}
              <div className="group">
                <p className="text-gray-400 font-bold uppercase text-[10px] tracking-widest mb-3">Drop a line</p>
                <a 
                  href="mailto:ananyapathak.mfp@gmail.com" 
                  className="text-2xl md:text-4xl font-bold text-black dark:text-white group-hover:text-[#5b51ff] transition-all duration-300 break-all border-b-2 border-black/5 dark:border-white/10 pb-2 inline-block"
                >
                  ananyapathak.mfp@gmail.com
                </a>
              </div>
              
              {/* Social Links */}
              <div className="flex gap-12">
                <div className="group">
                  <p className="text-gray-400 font-bold uppercase text-[10px] tracking-widest mb-2">Instagram</p>
                  <a href="#" className="text-black dark:text-white font-black text-lg group-hover:text-cyan-400 transition-colors uppercase tracking-tight">Instagram ↗</a>
                </div>
                <div className="group">
                  <p className="text-gray-400 font-bold uppercase text-[10px] tracking-widest mb-2">LinkedIn</p>
                  <a href="#" className="text-black dark:text-white font-black text-lg group-hover:text-cyan-400 transition-colors uppercase tracking-tight">www.linkedin.com/in/ananyapathakdev ↗</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Minimalist Form */}
          <div className="relative">
            {/* Soft Glow behind form */}
            <div className="absolute inset-0 bg-[#5b51ff]/5 blur-[100px] rounded-full pointer-events-none"></div>
            
            <form className="relative z-10 p-8 md:p-12 rounded-[45px] bg-gray-50/50 dark:bg-white/[0.03] border border-black/5 dark:border-white/10 backdrop-blur-sm space-y-8">
              <div className="space-y-6">
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Your Name"
                    className="w-full bg-transparent border-b border-black/10 dark:border-white/10 py-4 text-black dark:text-white focus:outline-none focus:border-[#5b51ff] transition-all font-medium placeholder:text-gray-400"
                  />
                </div>
                
                <div className="relative">
                  <input 
                    type="email" 
                    placeholder="Email Address"
                    className="w-full bg-transparent border-b border-black/10 dark:border-white/10 py-4 text-black dark:text-white focus:outline-none focus:border-[#5b51ff] transition-all font-medium placeholder:text-gray-400"
                  />
                </div>

                <div className="relative pt-4">
                  <textarea 
                    rows={4}
                    placeholder="How can I help your brand grow?"
                    className="w-full bg-transparent border-b border-black/10 dark:border-white/10 py-4 text-black dark:text-white focus:outline-none focus:border-[#5b51ff] transition-all font-medium placeholder:text-gray-400 resize-none"
                  ></textarea>
                </div>
              </div>

              <button className="w-full py-6 bg-black dark:bg-white text-white dark:text-black rounded-full font-black uppercase tracking-[0.3em] text-xs hover:bg-[#5b51ff] dark:hover:bg-[#5b51ff] hover:text-white transition-all duration-500 transform hover:scale-[1.02]">
                Send Inquiry
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;