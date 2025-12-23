'use client';
import { useEffect, useState, useRef } from 'react';

export const Header = () => {
  const [activeSection, setActiveSection] = useState('');
  const [sliderStyle, setSliderStyle] = useState({ left: 0, width: 0 });
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'about', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2; // Use middle of viewport

      // Check if we're near the bottom of the page
      const isBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50;
      
      if (isBottom) {
        setActiveSection('contact');
        return;
      }

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const section = document.getElementById(sectionId);
        if (section) {
          const { offsetTop } = section;
          if (scrollPosition >= offsetTop) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    // Initial check
    handleScroll();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Update slider position based on active nav item
    if (navRef.current) {
      const activeLink = navRef.current.querySelector(`a[href="#${activeSection}"]`) as HTMLElement;
      if (activeLink) {
        const navRect = navRef.current.getBoundingClientRect();
        const linkRect = activeLink.getBoundingClientRect();
        setSliderStyle({
          left: linkRect.left - navRect.left,
          width: linkRect.width,
        });
      }
    }
  }, [activeSection]);

  const navItems = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  return (
    <div className="flex justify-center items-center top-3 z-10 sticky">
      <nav ref={navRef} className="relative flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        {/* Sliding background indicator */}
        <div
          className="absolute top-0.5 bottom-0.5 bg-white rounded-full transition-all duration-500 ease-in-out"
          style={{
            left: `${sliderStyle.left}px`,
            width: `${sliderStyle.width}px`,
          }}
        />
        {navItems.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className={`nav-item relative z-10 transition-colors duration-500 ${
              activeSection === item.id
                ? 'text-gray-900'
                : 'text-white/70'
            }`}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
};
