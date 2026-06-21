import React, { useState, useEffect } from 'react';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumbs() {
  const [activeSection, setActiveSection] = useState('Home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['about', 'rooms', 'amenities', 'experiences', 'booking', 'faq'];
      const scrollPosition = window.scrollY + 200; // Offset for header

      let current = 'Home';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition) {
          const capitalized = section.charAt(0).toUpperCase() + section.slice(1);
          current = capitalized;
        }
      }

      // Handle specific mappings
      if (current === 'About') current = 'The Resort';
      else if (current === 'Rooms') current = 'Suites & Cottages';
      else if (current === 'Experiences') current = 'Local Experiences';
      else if (current === 'Booking') current = 'Reservation';
      else if (current === 'Faq') current = 'FAQ';

      setActiveSection(window.scrollY < 100 ? 'Home' : current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Visual Breadcrumb Navigation */}
      <nav 
        aria-label="Breadcrumb" 
        className={`fixed left-0 w-full z-40 bg-[#FAF9F6]/95 backdrop-blur-sm border-b border-[#EAE8E3] py-1.5 px-4 sm:px-6 lg:px-8 transition-all duration-300 shadow-sm ${
          scrolled ? 'top-[64px] md:top-[60px]' : 'top-[72px] md:top-[80px]'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center text-xs sm:text-sm font-medium">
          <ol className="flex items-center space-x-1 sm:space-x-2 w-full truncate">
            <li className="flex items-center">
              <a 
                href="#" 
                className="text-[#2C3531]/60 hover:text-[#c9a832] transition-colors flex items-center"
              >
                <Home className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1" />
                <span className="sr-only">Home</span>
              </a>
            </li>
            <li className="flex items-center text-[#2C3531]/40">
              <ChevronRight className="w-3.5 h-3.5" />
            </li>
            <li className="flex items-center">
              <span className="text-[#2C3531]/60">Uttarakhand</span>
            </li>
            <li className="flex items-center text-[#2C3531]/40">
              <ChevronRight className="w-3.5 h-3.5" />
            </li>
            <li className="flex items-center">
              <a href="#about" className="text-[#2C3531]/60 hover:text-[#c9a832] transition-colors whitespace-nowrap">
                Whispering Pines Mukteshwar
              </a>
            </li>
            {activeSection !== 'Home' && (
              <>
                <li className="flex items-center text-[#2C3531]/40">
                  <ChevronRight className="w-3.5 h-3.5" />
                </li>
                <li className="flex items-center">
                  <span className="text-[#c9a832] font-semibold whitespace-nowrap truncate" aria-current="page">
                    {activeSection}
                  </span>
                </li>
              </>
            )}
          </ol>
        </div>
      </nav>

      {/* Structured Google SEO Breadcrumbs */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://whisperingpinesmukteshwar.com/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Uttarakhand Resorts",
              "item": "https://whisperingpinesmukteshwar.com/#destinations"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Whispering Pines Mukteshwar",
              "item": "https://whisperingpinesmukteshwar.com/#about"
            }
          ]
        })}
      </script>
    </>
  );
}
