import { useState } from 'react';
import { Link } from 'wouter';
import { useTheme } from './ThemeProvider';
import { Button } from '@/components/ui/button';
import { 
  Sheet,
  SheetContent,
  SheetTrigger
} from '@/components/ui/sheet';
import { Menu, Moon, Sun } from 'lucide-react';

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const links = [
    { href: "#home", label: "Home" },
    { href: "#age-calculator", label: "Age Calculator" },
    { href: "#zodiac", label: "Zodiac Profile" },
    { href: "#compatibility", label: "Compatibility" },
    { href: "#daily-horoscope", label: "Daily Horoscope" }
  ];

  return (
    <nav className="bg-white/90 dark:bg-cosmic-black/90 dark:border-gray-700 backdrop-blur-md fixed w-full z-50 border-b border-gray-200 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="font-accent font-bold text-2xl text-primary">
                Astral<span className="text-secondary">Insight</span>
              </span>
            </div>
            <div className="hidden md:block ml-10">
              <div className="flex items-center space-x-8">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="font-heading text-gray-700 dark:text-white hover:text-primary dark:hover:text-primary text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="rounded-full p-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5 text-yellow-400" />
              ) : (
                <Moon className="h-5 w-5 text-primary" />
              )}
            </button>
            <Button
              className="hidden md:block bg-primary hover:bg-opacity-90 text-white"
              size="sm"
            >
              Sign In
            </Button>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[250px] sm:w-[300px]">
                <div className="flex flex-col gap-4 mt-8">
                  {links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="font-heading text-lg text-gray-700 dark:text-white hover:text-primary dark:hover:text-primary transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
