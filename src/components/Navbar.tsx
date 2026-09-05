'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '@/data/salonData';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Bridal', href: '#bridal' },
    { name: 'About AME', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Location', href: '#location' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-sm py-3 border-b border-[#EAE5DF]'
          : 'bg-[#FAF8F5]/80 backdrop-blur-sm py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Branding */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-[#E8C7C7]/40 border border-[#C9A66B]/30 flex items-center justify-center text-[#292525] font-serif font-bold text-xl group-hover:scale-105 transition-transform">
              â
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-semibold text-lg md:text-xl tracking-wider text-[#292525]">
                AME
              </span>
              <span className="text-[10px] tracking-widest uppercase text-[#756D6D] font-medium -mt-1">
                Unisex Salon & Studio
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#292525] hover:text-[#B77B83] transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1.5px] after:bg-[#B77B83] hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={BUSINESS_INFO.telLink}
              className="flex items-center gap-2 text-xs font-semibold text-[#292525] hover:text-[#B77B83] transition-colors px-3 py-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#B77B83]" />
              <span>{BUSINESS_INFO.phoneFormatted}</span>
            </a>
            <button
              onClick={onOpenBooking}
              className="bg-[#B77B83] hover:bg-[#a36870] text-white px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase shadow-sm transition-all duration-300 hover:shadow-md flex items-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenBooking}
              className="bg-[#B77B83] text-white p-2 rounded-full text-xs shadow-sm hover:bg-[#a36870] transition-colors"
              aria-label="Book Appointment"
            >
              <Calendar className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#292525] hover:bg-[#E8C7C7]/30 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F5] border-b border-[#EAE5DF] px-4 pt-3 pb-6 space-y-4 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#292525] hover:text-[#B77B83] px-2 py-1.5 rounded-md hover:bg-[#E8C7C7]/20 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-[#EAE5DF] flex flex-col gap-3">
            <a
              href={BUSINESS_INFO.telLink}
              className="flex items-center justify-center gap-2 text-sm font-semibold text-[#292525] py-2 border border-[#EAE5DF] rounded-full"
            >
              <Phone className="w-4 h-4 text-[#B77B83]" />
              <span>Call: {BUSINESS_INFO.phoneFormatted}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full bg-[#B77B83] text-white py-3 rounded-full text-xs font-semibold tracking-wider uppercase text-center shadow-sm flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
