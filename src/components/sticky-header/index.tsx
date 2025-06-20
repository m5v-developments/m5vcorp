'use client';

import Image from 'next/image';
import { useState, useCallback } from 'react';

const StickyHeader = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleMouseEnter = useCallback(() => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
    setIsAboutOpen(true);
  }, [closeTimeout]);

  const handleMouseLeave = useCallback(() => {
    const timeout = setTimeout(() => {
      setIsAboutOpen(false);
    }, 300); // 300ms delay before closing
    setCloseTimeout(timeout);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top ticker with gradient background */}
      <div className="min-h-8 bg-gradient-to-r from-black-primary to-accent-blue flex items-center px-4 md:px-6 py-2">
        <p className="text-off-white text-s md:text-sm leading-tight">
          Latest: M5V DEVELOPMENTS HAS A CORPORATE WEBSITE (in development)
        </p>
      </div>

      {/* Main navigation */}
      <nav className="h-20 bg-black-primary flex items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <a href="/" className="relative w-32 h-12 -ml-2 lg:ml-0">
          <Image
            src="/images/logo.svg"
            alt="M5V Corp Logo"
            fill
            className="object-contain"
            priority
          />
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8">
          {/* About Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button 
              className="text-off-white hover:text-accent-blue flex items-center gap-1 py-2"
            >
              About
              <svg 
                className={`w-4 h-4 transition-transform duration-200 ${isAboutOpen ? 'rotate-180' : ''}`}
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {/* Dropdown Menu */}
            <div 
              className={`absolute top-full left-0 mt-2 w-48 bg-black-primary border border-accent-blue/20 rounded-sm shadow-lg py-2 transition-all duration-200 ${
                isAboutOpen 
                  ? 'opacity-100 translate-y-0 visible' 
                  : 'opacity-0 -translate-y-2 invisible'
              }`}
            >
              <a href="/company" className="block px-4 py-3 text-off-white hover:bg-accent-blue/10 hover:text-accent-blue">
                Company
              </a>
              <a href="/team" className="block px-4 py-3 text-off-white hover:bg-accent-blue/10 hover:text-accent-blue">
                Team
              </a>
            </div>
          </div>
          <a href="/projects" className="text-off-white hover:text-accent-blue">Projects</a>
          <a href="/careers" className="text-off-white hover:text-accent-blue">Careers</a>
          <a href="/news" className="text-off-white hover:text-accent-blue">News</a>
          <a href="/contact" className="text-off-white hover:text-accent-blue">Contact</a>
        </div>

        {/* Desktop Right side - Social + Login */}
        <div className="hidden lg:flex items-center gap-6">
          {/* Social Icons */}
          <div className="flex gap-4">
            <a href="https://instagram.com/m5v_developments" target="_blank" rel="noopener noreferrer" className="text-off-white hover:text-accent-blue">
              <span className="sr-only">Instagram</span>
              <Image
                src="/images/icons/instagram-icon.svg"
                alt="Instagram"
                width={20}
                height={20}
                className="w-5 h-5"
              />
            </a>
            <a href="https://youtube.com/m5v_developments" target="_blank" rel="noopener noreferrer" className="text-off-white hover:text-accent-blue">
              <span className="sr-only">YouTube</span>
              <Image
                src="/images/icons/youtube-icon.svg"
                alt="YouTube"
                width={20}
                height={20}
                className="w-5 h-5"
              />
            </a>
          </div>

          {/* Login Button */}
          <a 
            href="/contact" 
            className="border border-off-white text-off-white hover:bg-accent-blue hover:border-accent-blue px-6 py-2 rounded-sm transition-colors"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile Hamburger Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 relative z-[70]"
          aria-label="Toggle mobile menu"
        >
          <span 
            className={`block w-6 h-0.5 transition-all duration-300 ${
              isMobileMenuOpen ? 'rotate-45 translate-y-1.5 bg-white' : 'bg-off-white'
            }`}
          />
          <span 
            className={`block w-6 h-0.5 transition-all duration-300 ${
              isMobileMenuOpen ? 'opacity-0 bg-white' : 'bg-off-white'
            }`}
          />
          <span 
            className={`block w-6 h-0.5 transition-all duration-300 ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-1.5 bg-white' : 'bg-off-white'
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`lg:hidden fixed inset-0 bg-black-primary/95 z-[60] transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={closeMobileMenu}
      >
        <div 
          className={`absolute top-20 left-0 right-0 bg-black-primary border-t border-accent-blue/20 transition-all duration-300 ${
            isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Mobile Navigation Links */}
          <div className="px-6 py-8 space-y-6">
            {/* About Section */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-off-white text-lg font-medium">About</span>
                <svg 
                  className="w-5 h-5 text-accent-blue" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className="pl-4 space-y-3">
                <a 
                  href="/company" 
                  className="block text-off-white/80 hover:text-accent-blue transition-colors"
                  onClick={closeMobileMenu}
                >
                  Company
                </a>
                <a 
                  href="/team" 
                  className="block text-off-white/80 hover:text-accent-blue transition-colors"
                  onClick={closeMobileMenu}
                >
                  Team
                </a>
              </div>
            </div>

            {/* Other Navigation Links */}
            <a 
              href="/projects" 
              className="block text-off-white text-lg font-medium hover:text-accent-blue transition-colors"
              onClick={closeMobileMenu}
            >
              Projects
            </a>
            <a 
              href="/careers" 
              className="block text-off-white text-lg font-medium hover:text-accent-blue transition-colors"
              onClick={closeMobileMenu}
            >
              Careers
            </a>
            <a 
              href="/news" 
              className="block text-off-white text-lg font-medium hover:text-accent-blue transition-colors"
              onClick={closeMobileMenu}
            >
              News
            </a>
            <a 
              href="/contact" 
              className="block text-off-white text-lg font-medium hover:text-accent-blue transition-colors"
              onClick={closeMobileMenu}
            >
              Contact
            </a>

            {/* Mobile Social Icons */}
            <div className="pt-6 border-t border-accent-blue/20">
              <div className="flex gap-6">
                <a href="https://instagram.com/m5v_developments" target="_blank" rel="noopener noreferrer" className="text-off-white hover:text-accent-blue transition-colors">
                  <span className="sr-only">Instagram</span>
                  <Image
                    src="/images/icons/instagram-icon.svg"
                    alt="Instagram"
                    width={20}
                    height={20}
                    className="w-6 h-6"
                  />
                </a>
                <a href="https://youtube.com/m5v_developments" target="_blank" rel="noopener noreferrer" className="text-off-white hover:text-accent-blue transition-colors">
                  <span className="sr-only">YouTube</span>
                  <Image
                    src="/images/icons/youtube-icon.svg"
                    alt="YouTube"
                    width={20}
                    height={20}
                    className="w-6 h-6"
                  />
                </a>
              </div>
            </div>

            {/* Mobile Contact Button */}
            <div className="pt-4">
              <a 
                href="/contact" 
                className="inline-block border border-off-white text-off-white hover:bg-accent-blue hover:border-accent-blue px-6 py-3 rounded-sm transition-colors"
                onClick={closeMobileMenu}
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default StickyHeader; 