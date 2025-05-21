import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Function to calculate age from birth date
export function getAge(birthDate: Date) {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();
  
  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  
  return age;
}

// Function to calculate days until next birthday
export function getDaysUntilBirthday(birthDate: Date) {
  const today = new Date();
  const currentYear = today.getFullYear();
  
  // Create date objects for this year's and next year's birthday
  const thisYearBirthday = new Date(currentYear, birthDate.getMonth(), birthDate.getDate());
  const nextYearBirthday = new Date(currentYear + 1, birthDate.getMonth(), birthDate.getDate());
  
  // Determine which to use
  const targetDate = today > thisYearBirthday ? nextYearBirthday : thisYearBirthday;
  
  // Calculate difference in days
  const diffTime = targetDate.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  return diffDays;
}

// Function to format time units for display
export function formatTimeUnit(value: number) {
  return value < 10 ? `0${value}` : `${value}`;
}

// Function to get the day of week from a date
export function getDayOfWeek(date: Date) {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return days[date.getDay()];
}

// Function to calculate life path number from birth date
export function calculateLifePathNumber(birthDate: Date) {
  const dateString = birthDate.toISOString().split('T')[0]; // Format: YYYY-MM-DD
  const date = dateString.replace(/-/g, ''); // Remove hyphens
  
  // Sum all digits
  let sum = 0;
  for (let i = 0; i < date.length; i++) {
    sum += parseInt(date[i]);
  }
  
  // Reduce to a single digit (unless it's 11, 22, or 33, which are master numbers)
  while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
    let newSum = 0;
    sum.toString().split('').forEach(digit => {
      newSum += parseInt(digit);
    });
    sum = newSum;
  }
  
  return sum;
}

// Function to share content
export function shareContent(title: string, text: string, url: string) {
  if (navigator.share) {
    navigator.share({
      title,
      text,
      url
    })
    .catch((error) => console.log('Error sharing:', error));
  } else {
    // Fallback - copy to clipboard
    navigator.clipboard.writeText(`${title}\n${text}\n${url}`)
      .then(() => alert('Copied to clipboard!'))
      .catch((error) => console.log('Error copying to clipboard:', error));
  }
}
