import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { zodiacSigns } from '@/lib/zodiac-data';

interface CompatibilityResultsProps {
  result: any;
}

const CompatibilityResults = ({ result }: CompatibilityResultsProps) => {
  const [firstSignData, setFirstSignData] = useState<any>(null);
  const [secondSignData, setSecondSignData] = useState<any>(null);
  
  useEffect(() => {
    const firstSign = zodiacSigns.find(s => s.id === result.firstSign);
    const secondSign = zodiacSigns.find(s => s.id === result.secondSign);
    
    if (firstSign) setFirstSignData(firstSign);
    if (secondSign) setSecondSignData(secondSign);
  }, [result]);
  
  if (!firstSignData || !secondSignData) {
    return <div>Loading compatibility data...</div>;
  }

  return (
    <motion.div 
      className="bg-white/30 dark:bg-white/5 rounded-2xl p-6 md:p-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
        <div className="flex items-center space-x-6 md:space-x-12">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto rounded-full border-2 border-primary/50 flex items-center justify-center bg-primary/10">
              <span 
                dangerouslySetInnerHTML={{ __html: firstSignData.symbol }} 
                className="text-2xl text-primary"
              />
            </div>
            <h4 className="mt-2 font-heading font-medium text-gray-800 dark:text-white">
              {firstSignData.name}
            </h4>
          </div>

          <div className="text-center">
            <div className="h-20 w-20 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center shadow-md">
              <span className="font-accent text-2xl font-bold text-secondary">
                {result.score}%
              </span>
            </div>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Compatibility</p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 mx-auto rounded-full border-2 border-secondary/50 flex items-center justify-center bg-secondary/10">
              <span 
                dangerouslySetInnerHTML={{ __html: secondSignData.symbol }} 
                className="text-2xl text-secondary"
              />
            </div>
            <h4 className="mt-2 font-heading font-medium text-gray-800 dark:text-white">
              {secondSignData.name}
            </h4>
          </div>
        </div>

        <div className="flex-1">
          <h3 className="font-heading text-xl text-gray-800 dark:text-white font-medium mb-4 text-center md:text-left">
            Relationship Dynamics
          </h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-heading text-base text-gray-800 dark:text-white font-medium mb-2">
                Overall Harmony
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {result.description}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {result.categories.map((category: any) => (
                <div key={category.name} className="bg-white/50 dark:bg-white/10 rounded-xl p-4">
                  <h5 className="font-heading text-sm text-gray-800 dark:text-white font-medium mb-2">
                    {category.name}
                  </h5>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <i 
                        key={i} 
                        className={`${i < category.rating ? 'fas' : 'far'} fa-star text-yellow-500`}
                      ></i>
                    ))}
                  </div>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                    {category.description}
                  </p>
                </div>
              ))}
            </div>
            
            <div>
              <h4 className="font-heading text-base text-gray-800 dark:text-white font-medium mb-2">
                Relationship Advice
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {result.advice}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <button className="px-6 py-2 font-heading text-sm font-medium border border-primary rounded-full text-primary hover:bg-primary/10 transition">
          <i className="fas fa-download mr-2"></i> Download Full Report
        </button>
      </div>
    </motion.div>
  );
};

export default CompatibilityResults;
