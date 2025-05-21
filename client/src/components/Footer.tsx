const Footer = () => {
  return (
    <footer className="bg-white dark:bg-cosmic-black border-t border-gray-200 dark:border-gray-800 py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <span className="font-accent font-bold text-2xl text-primary">
              Astral<span className="text-secondary">Insight</span>
            </span>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 max-w-xs">
              Discover the cosmic influences that shape your life journey with our premium astrology tools.
            </p>
          </div>
          <div className="flex space-x-4">
            {['facebook-f', 'instagram', 'twitter', 'pinterest-p'].map((icon) => (
              <a 
                key={icon}
                href="#" 
                className="h-10 w-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-primary hover:text-white transition-colors duration-200"
                aria-label={icon}
              >
                <i className={`fab fa-${icon}`}></i>
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            {
              title: "Features",
              links: [
                { label: "Age Calculator", href: "#age-calculator" },
                { label: "Zodiac Profiles", href: "#zodiac" },
                { label: "Compatibility", href: "#compatibility" },
                { label: "Daily Horoscope", href: "#daily-horoscope" }
              ]
            },
            {
              title: "Resources",
              links: [
                { label: "Astrology Blog", href: "#" },
                { label: "Learning Center", href: "#" },
                { label: "Moon Phases", href: "#" },
                { label: "Planetary Movements", href: "#" }
              ]
            },
            {
              title: "Company",
              links: [
                { label: "About Us", href: "#" },
                { label: "Our Astrologers", href: "#" },
                { label: "Testimonials", href: "#" },
                { label: "Contact Us", href: "#" }
              ]
            },
            {
              title: "Legal",
              links: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Cookie Policy", href: "#" },
                { label: "GDPR Compliance", href: "#" }
              ]
            }
          ].map((section) => (
            <div key={section.title}>
              <h3 className="font-heading text-sm uppercase tracking-wider text-gray-800 dark:text-white font-medium mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href} 
                      className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            &copy; {new Date().getFullYear()} AstralInsight. All rights reserved.
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-4 md:mt-0">
            Designed with <i className="fas fa-heart text-secondary"></i> for cosmic seekers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
