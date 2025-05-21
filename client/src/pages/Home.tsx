import HeroSection from '@/components/HeroSection';
import AgeInputForm from '@/components/age-calculator/AgeInputForm';
import AgeResultCard from '@/components/age-calculator/AgeResultCard';
import ZodiacGrid from '@/components/zodiac/ZodiacGrid';
import ZodiacDetail from '@/components/zodiac/ZodiacDetail';
import CompatibilityForm from '@/components/compatibility/CompatibilityForm';
import CompatibilityResults from '@/components/compatibility/CompatibilityResults';
import HoroscopeSelector from '@/components/horoscope/HoroscopeSelector';
import MoonPhase from '@/components/horoscope/MoonPhase';
import HoroscopeDetail from '@/components/horoscope/HoroscopeDetail';
import CallToAction from '@/components/CallToAction';
import { useState } from 'react';
import { AgeResult } from '@/lib/age-calculator';
import { zodiacSigns } from '@/lib/zodiac-data';

export default function Home() {
  const [ageResult, setAgeResult] = useState<AgeResult | null>(null);
  const [selectedZodiacSign, setSelectedZodiacSign] = useState<string | null>(null);
  const [compatibilityResult, setCompatibilityResult] = useState<any | null>(null);
  const [selectedHoroscopeSign, setSelectedHoroscopeSign] = useState<string | null>(null);

  return (
    <div>
      <HeroSection />
      
      {/* Age Calculator Section */}
      <section id="age-calculator" className="py-16 md:py-24 relative bg-gray-50 dark:bg-gray-900/50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-accent text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
              Calculate Your <span className="text-primary">Cosmic</span> Age
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Discover your exact age down to the second, along with your zodiac sign, birth day details, and upcoming milestones.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            <AgeInputForm onAgeCalculated={setAgeResult} />
            <AgeResultCard result={ageResult} />
          </div>
        </div>
      </section>
      
      {/* Zodiac Profiles Section */}
      <section id="zodiac" className="py-16 md:py-24 relative">
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute top-0 left-0 w-full h-full opacity-5 dark:opacity-10 bg-[radial-gradient(circle_at_top_left,_var(--tw-color-primary),_transparent_40%),radial-gradient(circle_at_bottom_right,_var(--tw-color-secondary),_transparent_40%)]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-accent text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
              Explore <span className="text-primary">Zodiac</span> Profiles
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Discover the unique traits, characteristics, and cosmic influences of each zodiac sign.
            </p>
          </div>

          <ZodiacGrid onSelectSign={setSelectedZodiacSign} />
          
          {selectedZodiacSign && (
            <ZodiacDetail sign={selectedZodiacSign} />
          )}
        </div>
      </section>
      
      {/* Compatibility Calculator Section */}
      <section id="compatibility" className="py-16 md:py-24 relative bg-gray-50 dark:bg-gray-900/50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-accent text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
              Zodiac <span className="text-primary">Compatibility</span> Calculator
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Discover how your zodiac sign interacts with others in love, friendship, and professional relationships.
            </p>
          </div>

          <div className="glass-card rounded-3xl p-6 md:p-8 shadow-md">
            <CompatibilityForm onCalculateCompatibility={setCompatibilityResult} />
            
            {compatibilityResult && (
              <CompatibilityResults result={compatibilityResult} />
            )}
          </div>
        </div>
      </section>
      
      {/* Daily Horoscope Section */}
      <section id="daily-horoscope" className="py-16 md:py-24 relative">
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute top-0 left-0 w-full h-full opacity-5 dark:opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-color-primary),_transparent_40%),radial-gradient(circle_at_bottom_left,_var(--tw-color-secondary),_transparent_40%)]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-accent text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
              Your Daily <span className="text-primary">Horoscope</span>
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Receive personalized daily guidance based on your zodiac sign and cosmic alignments.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/3 space-y-6">
              <HoroscopeSelector onSelectSign={setSelectedHoroscopeSign} />
              <MoonPhase />
            </div>

            <div className="w-full md:w-2/3">
              {selectedHoroscopeSign && (
                <HoroscopeDetail sign={selectedHoroscopeSign} />
              )}
            </div>
          </div>
        </div>
      </section>
      
      <CallToAction />
    </div>
  );
}
