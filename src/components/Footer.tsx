'use client';

import React from 'react';
import { Phone, MapPin, Clock, Instagram, MessageCircle, Navigation, Heart } from 'lucide-react';
import { BUSINESS_INFO } from '@/data/salonData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FAF8F5] border-t border-[#EAE5DF] pt-16 pb-10 text-[#292525]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#EAE5DF]">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#E8C7C7]/40 border border-[#C9A66B]/30 flex items-center justify-center text-[#292525] font-serif font-bold text-xl">
                â
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-semibold text-lg tracking-wider text-[#292525]">
                  AME
                </span>
                <span className="text-[10px] tracking-widest uppercase text-[#756D6D]">
                  Unisex Salon & Studio
                </span>
              </div>
            </div>
            <p className="text-xs text-[#756D6D] leading-relaxed">
              Bridal makeup, beauty, hair, nails and grooming in Aliganj, Lucknow. Founded by Ms. Ananya Mishra.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-[#EAE5DF] flex items-center justify-center text-[#292525] hover:bg-[#B77B83] hover:text-white hover:border-[#B77B83] transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-[#EAE5DF] flex items-center justify-center text-[#25D366] hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-[#EAE5DF] flex items-center justify-center text-[#292525] hover:bg-[#C9A66B] hover:text-white hover:border-[#C9A66B] transition-all"
                aria-label="Google Maps"
              >
                <Navigation className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-[#292525] mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs text-[#756D6D]">
              <li>
                <a href="#services" className="hover:text-[#B77B83] transition-colors">
                  All Beauty Services
                </a>
              </li>
              <li>
                <a href="#bridal" className="hover:text-[#B77B83] transition-colors">
                  Bridal Makeup Packages
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#B77B83] transition-colors">
                  Meet Ananya Mishra
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#B77B83] transition-colors">
                  Client Portfolio & Gallery
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#B77B83] transition-colors">
                  Google Customer Reviews
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-[#292525] mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3 text-xs text-[#756D6D]">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B77B83] shrink-0 mt-0.5" />
                <span>1st Floor, D-78, Sector Q Rd, Sector P, Aliganj, Lucknow, UP 226024</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#B77B83] shrink-0" />
                <a href={BUSINESS_INFO.telLink} className="hover:text-[#B77B83] font-semibold text-[#292525]">
                  {BUSINESS_INFO.phoneFormatted}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#25D366]"
                >
                  WhatsApp Chat
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-[#292525] mb-4">
              Opening Hours
            </h4>
            <div className="bg-white p-4 rounded-xl border border-[#EAE5DF] space-y-2 text-xs text-[#756D6D]">
              <div className="flex items-center gap-2 text-[#292525] font-semibold">
                <Clock className="w-3.5 h-3.5 text-[#C9A66B]" />
                <span>Open Daily</span>
              </div>
              <p>Monday – Sunday</p>
              <p className="font-semibold text-[#292525]">10:00 AM – 9:00 PM</p>
              <div className="pt-2 border-t border-[#EAE5DF] text-[10px] text-[#B77B83] font-medium">
                4.9 ★ Rated Salon in Lucknow
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#756D6D]">
          <p>© {new Date().getFullYear()} AME Unisex Salon & Makeup Studio. All rights reserved.</p>
          <p className="flex items-center gap-1 text-[11px]">
            Designed with <Heart className="w-3 h-3 text-[#B77B83] fill-current" /> for Ms. Ananya Mishra
          </p>
        </div>
      </div>
    </footer>
  );
};
