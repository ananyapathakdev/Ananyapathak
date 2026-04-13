export default function Hero() {
  return (
    /* bg-transparent ensures it follows the main page background toggle */
    <section className="min-h-screen flex items-center justify-center px-6 relative bg-transparent overflow-hidden transition-colors duration-500">
      
      {/* Background Effect from Demo */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.1] bg-[url('/grid.svg')] bg-center pointer-events-none"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-7xl mx-auto relative z-10">
        
        {/* Text Section: Digital Marketing Content */}
        <div className="space-y-6">
          <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight text-black dark:text-white leading-tight">
            Hi, I’m <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-emerald-400">
              Ananya Pathak
            </span>
          </h1>
          
          <p className="text-2xl font-bold tracking-tight text-gray-800 dark:text-gray-200 uppercase">
            Digital Marketing Expert |
          </p>
          
          <p className="text-gray-500 dark:text-gray-400 font-medium text-lg max-w-xl">
            I build data-driven marketing strategies and manage social media growth for brands, focusing on performance and search-first fundamentals.
          </p>
          
          <div className="pt-8 flex gap-4">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-full font-bold hover:scale-105 transition-transform">
              View My Work
            </button>
            <button className="px-8 py-3 border border-black/10 dark:border-white/10 rounded-full font-bold hover:bg-gray-100 dark:hover:bg-white/5 transition-all">
              Connect →
            </button>
          </div>
        </div>
        
        {/* Photo Section: With Glow and Fallback */}
        <div className="flex justify-center md:justify-end">
          <div className="relative p-2 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 shadow-2xl">
            <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-white dark:border-[#050505] bg-gray-200 dark:bg-gray-800">
              <img 
                src="/your-photo.jpg" // Replace with your actual photo filename
                alt="Ananya Pathak" 
                className="w-full h-full object-cover"
                onError={(e) => { 
                  e.currentTarget.src = "https://ui-avatars.com/api/?name=Ananya+Pathak&background=0D8ABC&color=fff&size=512"; 
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

