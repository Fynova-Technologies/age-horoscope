import { getWesternZodiacSign, getChineseZodiacSign } from './zodiac-data';
import { getDayOfWeek, getDaysUntilBirthday, calculateLifePathNumber } from './utils';

export interface AgeResult {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  birthWeekday: string;
  daysUntilBirthday: number;
  zodiacSign: string;
  chineseZodiac: string;
  lifePathNumber: number;
}

/**
 * Calculate age and related information from birth date and optional birth time
 */
export function calculateAge(birthDateStr: string, birthTimeStr?: string): AgeResult {
  // Parse birth date
  const birthDate = new Date(birthDateStr);
  
  // Add birth time if provided
  if (birthTimeStr) {
    const [hours, minutes] = birthTimeStr.split(':').map(Number);
    birthDate.setHours(hours || 0, minutes || 0, 0, 0);
  } else {
    birthDate.setHours(0, 0, 0, 0);
  }
  
  // Current date and time
  const now = new Date();
  
  // Calculate difference
  const diffTime = now.getTime() - birthDate.getTime();
  
  // Calculate years
  let years = now.getFullYear() - birthDate.getFullYear();
  const birthMonth = birthDate.getMonth();
  const currentMonth = now.getMonth();
  const birthDay = birthDate.getDate();
  const currentDay = now.getDate();
  
  // Adjust years if birth month/day hasn't occurred yet this year
  if (
    currentMonth < birthMonth || 
    (currentMonth === birthMonth && currentDay < birthDay)
  ) {
    years--;
  }
  
  // Create a date that's years from birth date
  const tempDate = new Date(birthDate);
  tempDate.setFullYear(tempDate.getFullYear() + years);
  
  // Calculate months
  let months = currentMonth - birthMonth;
  if (currentMonth < birthMonth) months += 12;
  if (currentDay < birthDay) {
    months--;
    if (months < 0) months += 12;
  }
  
  // Calculate days
  const lastDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
  let days = currentDay - birthDay;
  if (days < 0) {
    days += lastDayOfMonth;
  }
  
  // Calculate hours, minutes, seconds
  let hours = now.getHours() - birthDate.getHours();
  if (hours < 0) {
    hours += 24;
    days--;
  }
  
  let minutes = now.getMinutes() - birthDate.getMinutes();
  if (minutes < 0) {
    minutes += 60;
    hours--;
  }
  
  let seconds = now.getSeconds() - birthDate.getSeconds();
  if (seconds < 0) {
    seconds += 60;
    minutes--;
  }
  
  // Get birth weekday
  const birthWeekday = getDayOfWeek(birthDate);
  
  // Get days until next birthday
  const daysUntilBirthday = getDaysUntilBirthday(birthDate);
  
  // Get zodiac signs
  const zodiacSign = getWesternZodiacSign(birthDate);
  const chineseZodiac = getChineseZodiacSign(birthDate);
  
  // Get life path number
  const lifePathNumber = calculateLifePathNumber(birthDate);
  
  // Get zodiac sign name
  const zodiacData = zodiacSign.charAt(0).toUpperCase() + zodiacSign.slice(1);
  
  return {
    years,
    months,
    days,
    hours,
    minutes,
    seconds,
    birthWeekday,
    daysUntilBirthday,
    zodiacSign: zodiacData,
    chineseZodiac,
    lifePathNumber
  };
}
