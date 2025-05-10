import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Calendar } from 'lucide-react';
import { Logo } from './logo/Logo';
import { Link } from 'react-router-dom';

const navigationItems = [
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Technology', href: '#technology' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Portfolio', href: '#portfolio' }
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (href: string) => {
    if (window.location.pathname !== '/') {
      // Redirect to home page with the hash
      window.location.href = `/${href}`;
    } else {
      // Smooth scroll to the section if already on the home page
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false); // Close the menu
  };

  const scrollToContact = () => {
    if (window.location.pathname !== '/') {
      // Redirect to home page with the #contact hash
      window.location.href = '/#contact';
    } else {
      const element = document.querySelector('#contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false); // Close the menu
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50 bg-slate-900/50 backdrop-blur-lg border-b border-slate-800"
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
           {navigationItems.map(({ label, href }) => (
  <Link href={`/${href}`} key={label}>
    <button
      onClick={() => scrollToSection(href)}
      className="text-slate-300 hover:text-blue-400 transition-colors cursor-pointer"
    >
      {label}
    </button>
  </Link>
))}

            <button
              onClick={scrollToContact}
              className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-slate-300"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-slate-800">
            <div className="flex flex-col gap-4">
              {navigationItems.map(({ label, href }) => (
                <button
                  key={label}
                  onClick={() => scrollToSection(href)}
                  className="text-slate-300 hover:text-blue-400 transition-colors cursor-pointer"
                >
                  {label}
                </button>
              ))}
              <button
                onClick={scrollToContact}
                className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-medium hover:opacity-90 transition-opacity flex items-center gap-2 justify-center"
              >
                <Calendar className="w-4 h-4" />
                Contact Us
              </button>
            </div>
          </div>
        )}
      </div>
    </motion.nav>
  );
};
