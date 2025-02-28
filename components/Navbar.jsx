'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[var(--nav-bg)]/95 backdrop-blur-navbar shadow-lg py-2' 
        : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <span className="text-xl md:text-2xl font-bold text-gradient">
              RCS Guitars and Gear
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <NavLink href="/" label="Home" delay="0" />
            <NavLink href="/meet-the-team" label="Meet the Team" delay="100" />
            <NavLink href="/gallery" label="Gallery" delay="200" />
            <NavLink href="mailto:rcscustommusic@gmail.com" label="Get In Touch" delay="300" />
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-[var(--text-primary)] p-2 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] rounded-md"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="container mx-auto px-4 py-4 bg-[var(--card-bg)]/95 backdrop-blur-navbar border-t border-[var(--card-border)] shadow-lg">
          <div className="flex flex-col space-y-4">
            <MobileNavLink href="/" label="Home" onClick={() => setIsOpen(false)} delay="0" />
            <MobileNavLink href="/meet-the-team" label="Meet the Team" onClick={() => setIsOpen(false)} delay="100" />
            <MobileNavLink href="/gallery" label="Gallery" onClick={() => setIsOpen(false)} delay="200" />
            <MobileNavLink href="mailto:rcscustommusic@gmail.com" label="Get In Touch" onClick={() => setIsOpen(false)} delay="300" />
          </div>
        </div>
      </div>
    </nav>
  );
}

// Desktop navigation link
function NavLink({ href, label, delay }) {
  return (
    <Link 
      href={href}
      className="relative px-3 py-2 text-[var(--text-primary)] font-medium hover:text-[var(--primary)] transition-colors duration-200 group nav-item-animation"
      style={{ animationDelay: `${delay}ms` }}
    >
      {label}
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[var(--primary)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
    </Link>
  );
}

// Mobile navigation link
function MobileNavLink({ href, label, onClick, delay }) {
  return (
    <Link 
      href={href}
      onClick={onClick}
      className="block px-4 py-2 text-[var(--text-primary)] hover:bg-[var(--secondary-hover)] hover:text-[var(--primary)] rounded-md transition-colors duration-200 mobile-nav-item"
      style={{ animationDelay: `${delay}ms` }}
    >
      {label}
    </Link>
  );
}
