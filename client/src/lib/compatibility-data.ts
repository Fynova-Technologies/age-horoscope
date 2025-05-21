import { zodiacSigns } from './zodiac-data';

interface CompatibilityCategory {
  name: string;
  rating: number;
  description: string;
}

export interface CompatibilityResult {
  firstSign: string;
  secondSign: string;
  score: number;
  description: string;
  categories: CompatibilityCategory[];
  advice: string;
}

// Compatibility scores between zodiac signs (simplified)
const compatibilityScores: Record<string, Record<string, number>> = {
  aries: {
    aries: 70,
    taurus: 45,
    gemini: 85,
    cancer: 50,
    leo: 90,
    virgo: 55,
    libra: 65,
    scorpio: 40,
    sagittarius: 90,
    capricorn: 40,
    aquarius: 80,
    pisces: 60
  },
  taurus: {
    aries: 45,
    taurus: 85,
    gemini: 50,
    cancer: 90,
    leo: 65,
    virgo: 95,
    libra: 80,
    scorpio: 85,
    sagittarius: 40,
    capricorn: 95,
    aquarius: 40,
    pisces: 85
  },
  gemini: {
    aries: 85,
    taurus: 50,
    gemini: 75,
    cancer: 50,
    leo: 85,
    virgo: 65,
    libra: 90,
    scorpio: 45,
    sagittarius: 90,
    capricorn: 45,
    aquarius: 90,
    pisces: 55
  },
  cancer: {
    aries: 50,
    taurus: 90,
    gemini: 50,
    cancer: 85,
    leo: 60,
    virgo: 80,
    libra: 60,
    scorpio: 95,
    sagittarius: 40,
    capricorn: 70,
    aquarius: 40,
    pisces: 95
  },
  leo: {
    aries: 90,
    taurus: 65,
    gemini: 85,
    cancer: 60,
    leo: 80,
    virgo: 60,
    libra: 90,
    scorpio: 55,
    sagittarius: 95,
    capricorn: 50,
    aquarius: 70,
    pisces: 65
  },
  virgo: {
    aries: 55,
    taurus: 95,
    gemini: 65,
    cancer: 80,
    leo: 60,
    virgo: 80,
    libra: 70,
    scorpio: 85,
    sagittarius: 50,
    capricorn: 95,
    aquarius: 50,
    pisces: 70
  },
  libra: {
    aries: 65,
    taurus: 80,
    gemini: 90,
    cancer: 60,
    leo: 90,
    virgo: 70,
    libra: 80,
    scorpio: 60,
    sagittarius: 85,
    capricorn: 65,
    aquarius: 90,
    pisces: 70
  },
  scorpio: {
    aries: 40,
    taurus: 85,
    gemini: 45,
    cancer: 95,
    leo: 55,
    virgo: 85,
    libra: 60,
    scorpio: 85,
    sagittarius: 45,
    capricorn: 85,
    aquarius: 40,
    pisces: 95
  },
  sagittarius: {
    aries: 90,
    taurus: 40,
    gemini: 90,
    cancer: 40,
    leo: 95,
    virgo: 50,
    libra: 85,
    scorpio: 45,
    sagittarius: 85,
    capricorn: 40,
    aquarius: 90,
    pisces: 60
  },
  capricorn: {
    aries: 40,
    taurus: 95,
    gemini: 45,
    cancer: 70,
    leo: 50,
    virgo: 95,
    libra: 65,
    scorpio: 85,
    sagittarius: 40,
    capricorn: 85,
    aquarius: 60,
    pisces: 80
  },
  aquarius: {
    aries: 80,
    taurus: 40,
    gemini: 90,
    cancer: 40,
    leo: 70,
    virgo: 50,
    libra: 90,
    scorpio: 40,
    sagittarius: 90,
    capricorn: 60,
    aquarius: 85,
    pisces: 65
  },
  pisces: {
    aries: 60,
    taurus: 85,
    gemini: 55,
    cancer: 95,
    leo: 65,
    virgo: 70,
    libra: 70,
    scorpio: 95,
    sagittarius: 60,
    capricorn: 80,
    aquarius: 65,
    pisces: 90
  }
};

// Compatibility descriptions
const getCompatibilityDescription = (firstSign: string, secondSign: string, score: number): string => {
  const sign1 = zodiacSigns.find(s => s.id === firstSign);
  const sign2 = zodiacSigns.find(s => s.id === secondSign);
  
  if (!sign1 || !sign2) return "Compatibility information unavailable.";
  
  if (score >= 90) {
    return `${sign1.name} and ${sign2.name} form a highly compatible match! With a natural understanding of each other's needs and communication styles, this pairing creates harmony and balance. Your energies complement each other beautifully, creating a relationship with both excitement and stability.`;
  } else if (score >= 75) {
    return `${sign1.name} and ${sign2.name} share good compatibility with strong potential for a fulfilling relationship. While you may have different approaches to life, these differences often complement and strengthen your bond. With mutual respect and communication, you can build a lasting connection.`;
  } else if (score >= 60) {
    return `${sign1.name} and ${sign2.name} have moderate compatibility that requires some effort from both sides. Your different perspectives can create a balanced relationship if you learn to appreciate your differences. With patience and understanding, you can overcome challenges and build a rewarding connection.`;
  } else if (score >= 45) {
    return `${sign1.name} and ${sign2.name} face some compatibility challenges that will require work to overcome. Your natural tendencies may sometimes clash, but these differences can also help both of you grow. Success depends on your willingness to understand each other's fundamental needs and communication styles.`;
  } else {
    return `${sign1.name} and ${sign2.name} have significant compatibility challenges. This doesn't mean a relationship is impossible, but it will require extra effort, patience, and understanding from both sides. Focus on learning each other's love languages and respecting your different approaches to life.`;
  }
};

// Get compatibility categories based on the two signs
const getCompatibilityCategories = (firstSign: string, secondSign: string, score: number): CompatibilityCategory[] => {
  const sign1 = zodiacSigns.find(s => s.id === firstSign);
  const sign2 = zodiacSigns.find(s => s.id === secondSign);
  
  if (!sign1 || !sign2) return [];
  
  // Element compatibility factors
  const elementCompatibility: Record<string, Record<string, number>> = {
    Fire: { Fire: 4, Earth: 2, Air: 4, Water: 2 },
    Earth: { Fire: 2, Earth: 4, Air: 2, Water: 4 },
    Air: { Fire: 4, Earth: 2, Air: 4, Water: 2 },
    Water: { Fire: 2, Earth: 4, Air: 2, Water: 5 }
  };
  
  const loveRating = Math.min(5, Math.round(score / 20) + 1);
  const communicationRating = Math.min(5, Math.round(elementCompatibility[sign1.element][sign2.element]));
  const trustRating = Math.min(5, Math.round((score - 10) / 20) + 1);
  
  return [
    {
      name: "Love",
      rating: loveRating,
      description: loveRating >= 4 
        ? "Great romantic connection with shared values."
        : loveRating >= 3 
          ? "Potential for romance with some effort on both sides."
          : "Romantic compatibility requires significant effort and understanding."
    },
    {
      name: "Communication",
      rating: communicationRating,
      description: communicationRating >= 4 
        ? "Excellent verbal connection and understanding."
        : communicationRating >= 3 
          ? "Communication flows with occasional misunderstandings."
          : "Different communication styles require active listening."
    },
    {
      name: "Trust",
      rating: trustRating,
      description: trustRating >= 4 
        ? "Strong foundation of trust and reliability."
        : trustRating >= 3 
          ? "Trust can develop with honesty and consistency."
          : "Building trust requires extra effort and transparency."
    }
  ];
};

// Get compatibility advice based on the two signs
const getCompatibilityAdvice = (firstSign: string, secondSign: string, score: number): string => {
  const sign1 = zodiacSigns.find(s => s.id === firstSign);
  const sign2 = zodiacSigns.find(s => s.id === secondSign);
  
  if (!sign1 || !sign2) return "Compatibility advice unavailable.";
  
  if (score >= 75) {
    return `To strengthen your connection, ${sign1.name} should appreciate ${sign2.name}'s ${sign2.strengths[0].toLowerCase()} nature, while ${sign2.name} should value ${sign1.name}'s ${sign1.strengths[0].toLowerCase()} approach. Schedule regular quality time that combines both of your interests, and don't forget to express appreciation for each other's unique qualities.`;
  } else if (score >= 60) {
    return `To build harmony in your relationship, ${sign1.name} should be patient with ${sign2.name}'s ${sign2.weaknesses[0].toLowerCase()} tendencies, while ${sign2.name} should understand ${sign1.name}'s need for ${sign1.strengths[1].toLowerCase()}. Create a balance that respects both of your natural inclinations while encouraging growth in areas of difference.`;
  } else {
    return `For this relationship to thrive, both partners must make extra effort to understand each other's fundamental needs. ${sign1.name} should work on being less ${sign1.weaknesses[0].toLowerCase()}, while ${sign2.name} could benefit from embracing more ${sign1.strengths[0].toLowerCase()} approaches. Find activities that appeal to both of your elements (${sign1.element} and ${sign2.element}) to create common ground.`;
  }
};

/**
 * Calculate compatibility between two zodiac signs
 */
export function calculateCompatibility(firstSign: string, secondSign: string): CompatibilityResult {
  // Get compatibility score
  const score = compatibilityScores[firstSign][secondSign];
  
  // Generate description
  const description = getCompatibilityDescription(firstSign, secondSign, score);
  
  // Get compatibility categories
  const categories = getCompatibilityCategories(firstSign, secondSign, score);
  
  // Get compatibility advice
  const advice = getCompatibilityAdvice(firstSign, secondSign, score);
  
  return {
    firstSign,
    secondSign,
    score,
    description,
    categories,
    advice
  };
}
