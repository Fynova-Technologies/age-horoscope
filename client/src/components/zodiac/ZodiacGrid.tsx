import { zodiacSigns } from '@/lib/zodiac-data';
import { motion } from 'framer-motion';

interface ZodiacGridProps {
  onSelectSign: (sign: string) => void;
}

const ZodiacGrid = ({ onSelectSign }: ZodiacGridProps) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 mb-16">
      {zodiacSigns.map((sign, index) => (
        <motion.div
          key={sign.name}
          className="zodiac-sign rounded-2xl bg-white dark:bg-gray-800 p-4 shadow-md hover:shadow-lg text-center cursor-pointer transition duration-300 transform"
          onClick={() => onSelectSign(sign.id)}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-16 h-16 mx-auto mb-2 rounded-full border-2 border-primary/20 flex items-center justify-center bg-primary/10">
            <span dangerouslySetInnerHTML={{ __html: sign.symbol }} className="text-2xl text-primary" />
          </div>
          <h3 className="font-heading font-medium text-gray-800 dark:text-white">{sign.name}</h3>
          <p className="text-xs text-gray-600 dark:text-gray-400">{sign.dates}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default ZodiacGrid;
