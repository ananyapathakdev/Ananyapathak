"use client";
import React, { useState } from 'react';

const Contact = () => {
  const [state, setState] = useState({
    submitting: false,
    succeeded: false,
    error: false
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setState({ ...state, submitting: true });
    
    const form = e.target;
    const formData = new FormData(form);

    try {
      // REPLACE 'YOUR_FORMSPREE_ID' with your actual ID from Formspree
      const response = await fetch("https://formspree.io/f/xpqkdvdl", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setState({ submitting: false, succeeded: true, error: false });
        form.reset();
      } else {
        setState({ submitting: false, succeeded: false, error: true });
      }
    } catch {
      setState({ submitting: false, succeeded: false, error: true });
    }
  };

  return (
    <section id="contact" className="relative py-40 px-6 bg-transparent transition-colors duration-700 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          
          {/* Left Side: Contact Info */}
          <div className="space-y-16">
            <div className="space-y-6">
              <h2 className="text-[#5b51ff] font-black uppercase tracking-[0.4em] text-[10px] flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[#5b51ff]"></span> Get In Touch
              </h2>
              <h3 className="text-6xl md:text-8xl font-black text-black dark:text-white leading-[0.85] tracking-tighter uppercase">
                READY TO <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400 italic">SCALE UP?</span>
              </h3>
            </div>

            <div className="space-y-12">
              <div className="group">
                <p className="text-gray-400 font-bold uppercase text-[10px] tracking-widest mb-4">Drop a line</p>
                <a 
                  href="mailto:ananyapathak.mfp@gmail.com" 
                  className="text-2xl md:text-4xl font-bold text-black dark:text-white group-hover:text-[#5b51ff] transition-all duration-300 break-all border-b border-black/5 dark:border-white/10 pb-3 inline-block"
                >
                  ananyapathak.mfp@gmail.com
                </a>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
                <div className="group">
                  <p className="text-gray-400 font-bold uppercase text-[10px] tracking-widest mb-3">Github</p>
                  <a 
                    href="https://github.com/ananyapathakdev" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-black dark:text-white font-black text-lg group-hover:text-cyan-400 transition-colors uppercase tracking-tight"
                  >
                    GitHub ↗
                  </a>
                </div>
                <div className="group">
                  <p className="text-gray-400 font-bold uppercase text-[10px] tracking-widest mb-3">LinkedIn</p>
                  <a 
                    href="https://www.linkedin.com/in/ananyapathakdev" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-black dark:text-white font-black text-lg group-hover:text-[#5b51ff] transition-colors uppercase tracking-tight"
                  >
                    LinkedIn ↗
                  </a>
                </div>
                <div className="group hidden sm:block">
                  <p className="text-gray-400 font-bold uppercase text-[10px] tracking-widest mb-3">Location</p>
                  <p className="text-black dark:text-white font-black text-lg uppercase tracking-tight">
                    Delhi
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form with functional logic */}
          <div className="relative">
            <div className="absolute inset-0 bg-[#5b51ff]/5 blur-[120px] rounded-full pointer-events-none"></div>
            
            <form 
              onSubmit={handleSubmit}
              className="relative z-10 p-10 md:p-14 rounded-[60px] bg-white dark:bg-zinc-900/40 border border-black/[0.03] dark:border-white/[0.05] shadow-2xl shadow-purple-500/5 backdrop-blur-md space-y-10"
            >
              <div className="space-y-8">
                <div className="relative">
                  <input 
                    required
                    type="text" 
                    name="name"
                    placeholder="Your Name"
                    className="w-full bg-transparent border-b border-black/10 dark:border-white/10 py-5 text-black dark:text-white focus:outline-none focus:border-[#5b51ff] transition-all font-medium placeholder:text-gray-400"
                  />
                </div>
                
                <div className="relative">
                  <input 
                    required
                    type="email" 
                    name="email"
                    placeholder="Email Address"
                    className="w-full bg-transparent border-b border-black/10 dark:border-white/10 py-5 text-black dark:text-white focus:outline-none focus:border-[#5b51ff] transition-all font-medium placeholder:text-gray-400"
                  />
                </div>

                <div className="relative pt-4">
                  <textarea 
                    required
                    name="message"
                    rows={4}
                    placeholder="How can I help your brand grow?"
                    className="w-full bg-transparent border-b border-black/10 dark:border-white/10 py-5 text-black dark:text-white focus:outline-none focus:border-[#5b51ff] transition-all font-medium placeholder:text-gray-400 resize-none"
                  ></textarea>
                </div>
              </div>

              <button 
                type="submit" 
                disabled={state.submitting}
                className="w-full py-7 bg-black dark:bg-white text-white dark:text-black rounded-full font-black uppercase tracking-[0.3em] text-[10px] hover:bg-[#5b51ff] dark:hover:bg-[#5b51ff] hover:text-white transition-all duration-500 transform hover:scale-[1.02] shadow-xl shadow-purple-500/10 disabled:opacity-50"
              >
                {state.submitting ? "Sending..." : state.succeeded ? "Message Sent!" : "Send Inquiry"}
              </button>

              {state.error && (
                <p className="text-red-500 text-xs font-bold text-center mt-4">
                  Something went wrong. Please try again or email directly.
                </p>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;