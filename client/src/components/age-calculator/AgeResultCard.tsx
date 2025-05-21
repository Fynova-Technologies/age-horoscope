import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { AgeResult } from '@/lib/age-calculator';

interface AgeResultCardProps {
  result: AgeResult | null;
}

const AgeResultCard = ({ result }: AgeResultCardProps) => {
  const [seconds, setSeconds] = useState(0);
  
  // Update seconds in real-time if we have a result
  useEffect(() => {
    if (!result) return;
    
    // Initial calculation
    setSeconds(result.seconds);
    
    // Update every second
    const interval = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);
    
    return () => clearInterval(interval);
  }, [result]);
  
  if (!result) {
    return (
      <div className="w-full lg:w-3/5 glass-card rounded-3xl p-6 md:p-8 shadow-md relative overflow-hidden flex items-center justify-center">
        <p className="text-gray-500 dark:text-gray-400 text-center py-16">
          Enter your birth details to see your age calculation and celestial profile.
        </p>
      </div>
    );
  }

  return (
    <motion.div 
      className="w-full lg:w-3/5 glass-card rounded-3xl p-6 md:p-8 shadow-md relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute top-0 right-0 m-6">
        <button 
          className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition"
          aria-label="Share results"
        >
          <i className="fas fa-share-alt text-lg"></i>
        </button>
      </div>

      <h3 className="font-heading text-xl text-gray-800 dark:text-white font-medium mb-6">
        Your Age Details
      </h3>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {[
          { label: 'Years', value: result.years, color: 'primary' },
          { label: 'Months', value: result.months, color: 'primary' },
          { label: 'Days', value: result.days, color: 'primary' },
          { label: 'Hours', value: result.hours, color: 'secondary' },
          { label: 'Minutes', value: result.minutes, color: 'secondary' },
          { label: 'Seconds', value: seconds, color: 'secondary', live: true }
        ].map((item, index) => (
          <motion.div 
            key={item.label}
            className="bg-white/50 dark:bg-white/5 rounded-xl p-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <span className="block text-sm text-gray-600 dark:text-gray-300">
              {item.label}
            </span>
            <motion.span 
              className={`block text-2xl font-accent font-bold text-${item.color} mt-1`}
              key={item.live ? item.value : undefined}
              initial={item.live ? { scale: 1.2 } : undefined}
              animate={item.live ? { scale: 1 } : undefined}
              transition={item.live ? { duration: 0.2 } : undefined}
            >
              {item.value}
            </motion.span>
          </motion.div>
        ))}
      </div>

      <div className="space-y-4">
        <motion.div 
          className="flex items-center space-x-3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.6 }}
        >
          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
            <i className="fas fa-calendar-day text-primary"></i>
          </div>
          <div>
            <p className="text-gray-800 dark:text-white">
              You were born on a <span className="font-medium">{result.birthWeekday}</span>
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="flex items-center space-x-3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.7 }}
        >
          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
            <i className="fas fa-birthday-cake text-primary"></i>
          </div>
          <div>
            <p className="text-gray-800 dark:text-white">
              <span className="font-medium">{result.daysUntilBirthday} days</span> until your next birthday
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="flex items-center space-x-3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.8 }}
        >
          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-secondary/20 flex items-center justify-center">
            <i className="fas fa-star text-secondary"></i>
          </div>
          <div>
            <p className="text-gray-800 dark:text-white">
              Your zodiac sign is <span className="font-medium">{result.zodiacSign}</span>
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="flex items-center space-x-3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.9 }}
        >
          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-secondary/20 flex items-center justify-center">
            <i className="fas fa-dragon text-secondary"></i>
          </div>
          <div>
            <p className="text-gray-800 dark:text-white">
              Your Chinese zodiac is <span className="font-medium">{result.chineseZodiac}</span>
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="flex items-center space-x-3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 1 }}
        >
          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-yellow-400/20 flex items-center justify-center">
            <i className="fas fa-hashtag text-yellow-500"></i>
          </div>
          <div>
            <p className="text-gray-800 dark:text-white">
              Your life path number is <span className="font-medium">{result.lifePathNumber}</span>
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AgeResultCard;
