import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const moonPhases = [
  { 
    name: 'New Moon', 
    description: 'A time for new beginnings and setting intentions. Focus on starting fresh projects.',
    position: 0 
  },
  { 
    name: 'Waxing Crescent', 
    description: 'A time for growth and gaining momentum. Take action on your intentions.',
    position: 0.125 
  },
  { 
    name: 'First Quarter', 
    description: 'A time for decision making and overcoming challenges. Stay committed to your goals.',
    position: 0.25 
  },
  { 
    name: 'Waxing Gibbous', 
    description: 'A great time for growth and refinement. Focus on building and expanding your existing projects.',
    position: 0.375 
  },
  { 
    name: 'Full Moon', 
    description: 'A time of completion, illumination, and heightened emotions. Celebrate achievements.',
    position: 0.5 
  },
  { 
    name: 'Waning Gibbous', 
    description: 'A time for gratitude and sharing. Focus on giving back and expressing appreciation.',
    position: 0.625 
  },
  { 
    name: 'Last Quarter', 
    description: 'A time for reflection and forgiveness. Release what no longer serves you.',
    position: 0.75 
  },
  { 
    name: 'Waning Crescent', 
    description: 'A time for rest and surrender. Focus on self-care and preparing for the next cycle.',
    position: 0.875 
  }
];

// Function to calculate current moon phase (simplified)
const getCurrentMoonPhase = () => {
  // In a real implementation, this would use actual astronomical calculations
  // For this demo, we'll return a random moon phase
  const randomIndex = Math.floor(Math.random() * moonPhases.length);
  return moonPhases[randomIndex];
};

const MoonPhase = () => {
  const [moonPhase, setMoonPhase] = useState<any>(null);
  
  useEffect(() => {
    const currentPhase = getCurrentMoonPhase();
    setMoonPhase(currentPhase);
  }, []);
  
  if (!moonPhase) {
    return (
      <div className="glass-card rounded-3xl p-6 shadow-md">
        <h3 className="font-heading text-xl text-gray-800 dark:text-white font-medium mb-4">
          Current Moon Phase
        </h3>
        <p className="text-center text-gray-600 dark:text-gray-400">
          Loading moon phase data...
        </p>
      </div>
    );
  }

  return (
    <div className="glass-card rounded-3xl p-6 shadow-md">
      <h3 className="font-heading text-xl text-gray-800 dark:text-white font-medium mb-4">
        Current Moon Phase
      </h3>
      
      <div className="flex justify-center mb-4">
        <motion.div 
          className="h-24 w-24 rounded-full flex items-center justify-center bg-black/5 dark:bg-white/5"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        >
          {/* Moon illustration that changes based on the current phase */}
          <div className="h-20 w-20 bg-gray-900 dark:bg-gray-100 rounded-full overflow-hidden relative">
            <div 
              className="absolute top-0 right-0 h-20 bg-white dark:bg-gray-900 rounded-r-full"
              style={{ 
                width: `${moonPhase.position * 100}%`, 
                transform: moonPhase.position > 0.5 ? 'translateX(100%)' : 'none' 
              }}
            ></div>
          </div>
        </motion.div>
      </div>
      
      <div className="text-center">
        <h4 className="font-heading text-base text-gray-800 dark:text-white font-medium">
          {moonPhase.name}
        </h4>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
          {moonPhase.description}
        </p>
      </div>
    </div>
  );
};

export default MoonPhase;
