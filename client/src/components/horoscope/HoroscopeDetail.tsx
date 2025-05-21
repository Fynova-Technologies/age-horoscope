import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { getHoroscope } from '@/lib/horoscope-data';
import { zodiacSigns } from '@/lib/zodiac-data';

interface HoroscopeDetailProps {
  sign: string;
}

const HoroscopeDetail = ({ sign }: HoroscopeDetailProps) => {
  const [horoscope, setHoroscope] = useState<any>(null);
  const [zodiacData, setZodiacData] = useState<any>(null);
  const [currentDate, setCurrentDate] = useState('');
  
  useEffect(() => {
    // Get the current date
    const now = new Date();
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    setCurrentDate(now.toLocaleDateString('en-US', options));
    
    // Get the zodiac sign info
    const selectedSign = zodiacSigns.find(s => s.id === sign);
    if (selectedSign) {
      setZodiacData(selectedSign);
    }
    
    // Get the horoscope data
    const horoscopeData = getHoroscope(sign);
    setHoroscope(horoscopeData);
  }, [sign]);
  
  if (!horoscope || !zodiacData) {
    return (
      <div className="glass-card rounded-3xl p-6 md:p-8 shadow-md relative overflow-hidden">
        <p className="text-center text-gray-600 dark:text-gray-400 py-16">
          Loading your horoscope...
        </p>
      </div>
    );
  }

  return (
    <motion.div 
      className="glass-card rounded-3xl p-6 md:p-8 shadow-md relative overflow-hidden"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/10 blur-3xl"></div>
      
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-14 h-14 rounded-full border-2 border-primary/50 flex items-center justify-center bg-primary/10">
          <span 
            dangerouslySetInnerHTML={{ __html: zodiacData.symbol }} 
            className="text-xl text-primary"
          />
        </div>
        <div>
          <h3 className="font-accent text-2xl font-bold text-gray-800 dark:text-white">
            {zodiacData.name} Daily Horoscope
          </h3>
          <p className="text-gray-600 dark:text-gray-300">{currentDate}</p>
        </div>
      </div>
      
      <div className="mb-8">
        <p className="text-gray-800 dark:text-white leading-relaxed">
          {horoscope.overview}
        </p>
        <p className="mt-4 text-gray-800 dark:text-white leading-relaxed">
          {horoscope.expanded}
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {horoscope.categories.map((category: any) => (
          <div key={category.name} className="bg-white/50 dark:bg-white/10 rounded-xl p-4">
            <div className="flex items-center space-x-2 mb-3">
              <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                <i className={`fas ${category.icon} text-primary`}></i>
              </div>
              <h4 className="font-heading text-gray-800 dark:text-white font-medium">
                {category.name}
              </h4>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {category.description}
            </p>
          </div>
        ))}
      </div>
      
      <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-6">
        <h4 className="font-heading text-base text-gray-800 dark:text-white font-medium mb-2">
          Lucky Elements Today
        </h4>
        <div className="flex flex-wrap gap-2">
          {horoscope.luckyElements.map((element: string) => (
            <span key={element} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs">
              {element}
            </span>
          ))}
        </div>
      </div>
      
      <div className="mt-6 flex justify-end">
        <button className="text-primary hover:text-secondary flex items-center space-x-1 transition">
          <i className="fas fa-bell"></i>
          <span className="text-sm">Get Daily Reminders</span>
        </button>
      </div>
    </motion.div>
  );
};

export default HoroscopeDetail;
