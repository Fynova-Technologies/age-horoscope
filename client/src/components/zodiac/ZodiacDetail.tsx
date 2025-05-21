import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { zodiacSigns } from '@/lib/zodiac-data';

interface ZodiacDetailProps {
  sign: string;
}

const ZodiacDetail = ({ sign }: ZodiacDetailProps) => {
  const [zodiacData, setZodiacData] = useState<any>(null);
  
  useEffect(() => {
    const selectedSign = zodiacSigns.find(s => s.id === sign);
    if (selectedSign) {
      setZodiacData(selectedSign);
    }
  }, [sign]);
  
  if (!zodiacData) {
    return (
      <div className="glass-card rounded-3xl p-6 md:p-8 shadow-md overflow-hidden relative">
        <p className="text-center text-gray-600 dark:text-gray-400">Loading zodiac information...</p>
      </div>
    );
  }

  return (
    <motion.div 
      className="glass-card rounded-3xl p-6 md:p-8 shadow-md overflow-hidden relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/10 blur-3xl"></div>
      
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/3">
          <div className="text-center lg:text-left">
            <div className="w-24 h-24 md:w-32 md:h-32 mx-auto lg:mx-0 rounded-full border-4 border-primary/20 flex items-center justify-center bg-primary/10">
              <span 
                dangerouslySetInnerHTML={{ __html: zodiacData.symbol }} 
                className="text-4xl md:text-5xl text-primary"
              />
            </div>
            <h3 className="mt-4 font-accent text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
              {zodiacData.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">{zodiacData.dates}</p>
            
            <div className="mt-6 space-y-3">
              {[
                { label: 'Element', value: zodiacData.element },
                { label: 'Ruling Planet', value: zodiacData.rulingPlanet },
                { label: 'Symbol', value: zodiacData.symbolName }
              ].map(item => (
                <div key={item.label} className="flex items-center justify-center lg:justify-start space-x-2">
                  <span className="text-sm text-gray-600 dark:text-gray-300">{item.label}:</span>
                  <span className="text-sm font-medium text-gray-800 dark:text-white">{item.value}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-6">
              <h4 className="font-heading text-sm uppercase tracking-wider text-gray-600 dark:text-gray-300">
                Lucky Elements
              </h4>
              <div className="mt-2 flex flex-wrap justify-center lg:justify-start gap-2">
                {zodiacData.luckyElements.map((element: string) => (
                  <span key={element} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs">
                    {element}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-full lg:w-2/3">
          <h4 className="font-heading text-xl text-gray-800 dark:text-white font-medium mb-4">
            Personality Traits
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-white/50 dark:bg-white/5 rounded-xl p-4">
              <h5 className="font-heading text-sm uppercase tracking-wider text-gray-600 dark:text-gray-300 mb-2">
                Strengths
              </h5>
              <ul className="space-y-2">
                {zodiacData.strengths.map((strength: string) => (
                  <li key={strength} className="flex items-center space-x-2">
                    <i className="fas fa-check text-primary text-xs"></i>
                    <span className="text-gray-800 dark:text-white">{strength}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/50 dark:bg-white/5 rounded-xl p-4">
              <h5 className="font-heading text-sm uppercase tracking-wider text-gray-600 dark:text-gray-300 mb-2">
                Weaknesses
              </h5>
              <ul className="space-y-2">
                {zodiacData.weaknesses.map((weakness: string) => (
                  <li key={weakness} className="flex items-center space-x-2">
                    <i className="fas fa-times text-secondary text-xs"></i>
                    <span className="text-gray-800 dark:text-white">{weakness}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <h4 className="font-heading text-xl text-gray-800 dark:text-white font-medium mb-4">
            Love &amp; Relationships
          </h4>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            {zodiacData.love}
          </p>
          
          <h4 className="font-heading text-xl text-gray-800 dark:text-white font-medium mb-4">
            Career &amp; Ambitions
          </h4>
          <p className="text-gray-600 dark:text-gray-300">
            {zodiacData.career}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ZodiacDetail;
