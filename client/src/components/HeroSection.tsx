import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section id="home" className="pt-24 md:pt-28 pb-16 md:pb-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 dark:opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-color-primary),_transparent_50%),radial-gradient(circle_at_bottom_left,_var(--tw-color-secondary),_transparent_50%)]"></div>
        <div className="absolute -top-10 -right-10 w-40 h-40 md:w-64 md:h-64 rounded-full bg-primary opacity-10 dark:opacity-5 blur-3xl"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 md:w-64 md:h-64 rounded-full bg-secondary opacity-10 dark:opacity-5 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center md:space-x-10">
          <motion.div 
            className="w-full md:w-1/2 text-center md:text-left mb-10 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-accent text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white leading-tight">
              Discover Your <span className="text-primary">Celestial</span> Journey
            </h1>
            <p className="mt-6 text-gray-600 dark:text-gray-300 text-lg max-w-xl">
              Explore your age in cosmic detail, uncover your zodiac personality, and find your astrological compatibility with our premium astrology toolkit.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#age-calculator" 
                className="px-8 py-3 font-heading font-medium text-white bg-gradient-to-r from-primary to-secondary rounded-full shadow-md hover:shadow-lg transform transition hover:-translate-y-1"
              >
                Calculate Your Age
              </a>
              <a 
                href="#zodiac" 
                className="px-8 py-3 font-heading font-medium text-primary dark:text-white border-2 border-primary dark:border-white rounded-full hover:bg-primary/10 dark:hover:bg-white/10 transition"
              >
                Explore Zodiac Signs
              </a>
            </div>
          </motion.div>
          <motion.div 
            className="w-full md:w-1/2 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Zodiac wheel SVG */}
            <svg 
              viewBox="0 0 500 500" 
              className="zodiac-wheel w-4/5 mx-auto rounded-full shadow-lg"
            >
              <defs>
                <radialGradient id="zodiacGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                  <stop offset="0%" stopColor="#2c0e37" />
                  <stop offset="100%" stopColor="#180921" />
                </radialGradient>
              </defs>
              <circle cx="250" cy="250" r="240" fill="url(#zodiacGradient)" />
              <circle cx="250" cy="250" r="220" fill="none" stroke="#8A2BE2" strokeWidth="2" strokeOpacity="0.3" />
              <circle cx="250" cy="250" r="200" fill="none" stroke="#8A2BE2" strokeWidth="1" strokeOpacity="0.2" />
              
              {/* Zodiac symbols would be added here in a real implementation */}
              {/* This is a simplified representation */}
              {[...Array(12)].map((_, i) => {
                const angle = (i * 30) * Math.PI / 180;
                const x = 250 + 180 * Math.sin(angle);
                const y = 250 - 180 * Math.cos(angle);
                return (
                  <g key={i} transform={`translate(${x}, ${y})`}>
                    <circle r="15" fill="#AF7AC5" fillOpacity="0.8" />
                    <text 
                      textAnchor="middle" 
                      dominantBaseline="middle" 
                      fill="white" 
                      fontSize="14"
                    >
                      {i+1}
                    </text>
                  </g>
                );
              })}
              
              {/* Decorative elements */}
              <circle cx="250" cy="250" r="25" fill="#8A2BE2" fillOpacity="0.9" />
              <circle cx="250" cy="250" r="15" fill="#FF6B6B" fillOpacity="0.9" />
            </svg>
            
            <motion.div 
              className="absolute -top-5 right-10"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute bottom-0 left-10"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, delay: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="h-16 w-16 rounded-full bg-secondary/20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
