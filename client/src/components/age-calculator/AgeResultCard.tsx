import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { AgeResult } from '@/lib/age-calculator';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { zodiacSigns } from '@/lib/zodiac-data';
import { shareContent } from '@/lib/utils';

interface AgeResultCardProps {
  result: AgeResult | null;
}

const AgeResultCard = ({ result }: AgeResultCardProps) => {
  const [seconds, setSeconds] = useState(0);
  const [zodiacData, setZodiacData] = useState<any>(null);
  const { toast } = useToast();
  
  // Update seconds in real-time if we have a result
  useEffect(() => {
    if (!result) return;
    
    // Initial calculation
    setSeconds(result.seconds);
    
    // Update every second
    const interval = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);
    
    // Find zodiac data
    if (result.zodiacSign) {
      const sign = result.zodiacSign.toLowerCase();
      const foundSign = zodiacSigns.find(s => s.id === sign || s.name.toLowerCase() === sign);
      if (foundSign) {
        setZodiacData(foundSign);
      }
    }
    
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

  const handleDownloadProfile = () => {
    // In a real implementation, this would generate a PDF or similar file
    // For this demo, we'll just show a toast notification
    toast({
      title: "Profile Downloaded",
      description: "Your cosmic profile has been downloaded successfully.",
    });
  };

  const handleShareProfile = () => {
    const title = "My Cosmic Profile";
    const text = `I'm ${result.years} years, ${result.months} months, and ${result.days} days old. My zodiac sign is ${result.zodiacSign}!`;
    const url = window.location.href;
    
    shareContent(title, text, url);
    
    toast({
      title: "Profile Shared",
      description: "Your cosmic profile has been shared!",
    });
  };

  // Get compatible signs
  const getCompatibleSigns = () => {
    if (!zodiacData) return [];
    
    const element = zodiacData.element;
    let compatibleElements: Record<string, string[]> = {
      'Fire': ['Fire', 'Air'],
      'Earth': ['Earth', 'Water'],
      'Air': ['Air', 'Fire'],
      'Water': ['Water', 'Earth']
    };
    
    // Filter signs with compatible elements
    return zodiacSigns
      .filter(sign => compatibleElements[element].includes(sign.element) && sign.id !== zodiacData.id)
      .map(sign => sign.name);
  };

  return (
    <motion.div 
      className="w-full lg:w-3/5 glass-card rounded-3xl p-6 md:p-8 shadow-md relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute top-0 right-0 m-6 flex space-x-2">
        <button 
          className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition"
          aria-label="Download results"
          onClick={handleDownloadProfile}
        >
          <i className="fas fa-download text-lg"></i>
        </button>
        <button 
          className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition"
          aria-label="Share results"
          onClick={handleShareProfile}
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

      <div className="space-y-4 mb-8">
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

      {zodiacData && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <Accordion type="single" collapsible className="bg-white/40 dark:bg-gray-800/40 rounded-xl">
            <AccordionItem value="personality" className="border-b border-gray-200 dark:border-gray-700">
              <AccordionTrigger className="px-4 py-3 text-gray-800 dark:text-white font-heading">
                Personality Traits
              </AccordionTrigger>
              <AccordionContent className="px-4 py-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-heading text-sm uppercase tracking-wider text-gray-600 dark:text-gray-300 mb-2">
                      Strengths
                    </h4>
                    <ul className="space-y-1">
                      {zodiacData.strengths.slice(0, 5).map((strength: string) => (
                        <li key={strength} className="flex items-center space-x-2">
                          <i className="fas fa-check text-primary text-xs"></i>
                          <span className="text-gray-800 dark:text-white text-sm">{strength}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-heading text-sm uppercase tracking-wider text-gray-600 dark:text-gray-300 mb-2">
                      Weaknesses
                    </h4>
                    <ul className="space-y-1">
                      {zodiacData.weaknesses.slice(0, 5).map((weakness: string) => (
                        <li key={weakness} className="flex items-center space-x-2">
                          <i className="fas fa-times text-secondary text-xs"></i>
                          <span className="text-gray-800 dark:text-white text-sm">{weakness}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="compatibility" className="border-b border-gray-200 dark:border-gray-700">
              <AccordionTrigger className="px-4 py-3 text-gray-800 dark:text-white font-heading">
                Compatibility
              </AccordionTrigger>
              <AccordionContent className="px-4 py-3">
                <div>
                  <h4 className="font-heading text-sm uppercase tracking-wider text-gray-600 dark:text-gray-300 mb-2">
                    Most Compatible With
                  </h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {getCompatibleSigns().map((sign) => (
                      <span key={sign} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs">
                        {sign}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {zodiacData.love}
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="career" className="border-b border-gray-200 dark:border-gray-700">
              <AccordionTrigger className="px-4 py-3 text-gray-800 dark:text-white font-heading">
                Career Suggestions
              </AccordionTrigger>
              <AccordionContent className="px-4 py-3">
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {zodiacData.career}
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="lucky" className="border-b-0">
              <AccordionTrigger className="px-4 py-3 text-gray-800 dark:text-white font-heading">
                Lucky Elements
              </AccordionTrigger>
              <AccordionContent className="px-4 py-3">
                <div className="flex flex-wrap gap-2">
                  {zodiacData.luckyElements.map((element: string) => (
                    <span key={element} className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs">
                      {element}
                    </span>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="mt-6 flex justify-center">
            <Button
              variant="secondary"
              className="text-white"
              onClick={handleDownloadProfile}
            >
              <i className="fas fa-download mr-2"></i> Download Full Profile
            </Button>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default AgeResultCard;
