'use client';

import React from 'react';
import Image from 'next/image';
import { MapPin, Phone, Clock, Navigation, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '@/data/salonData';

export const LocationHours: React.FC = () => {
  return (
    <section id="location" className="py-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Location & Hours Info */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#B77B83] bg-[#E8C7C7]/30 px-3 py-1 rounded-full border border-[#B77B83]/20">
                Visit Studio
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#292525] mt-3">
                Location & Opening Hours
              </h2>
              <p className="text-sm text-[#756D6D] mt-1">
                Conveniently located in Sector P, Aliganj, Lucknow. Open 7 days a week.
              </p>
            </div>

            {/* Address Card */}
            <div className="bg-white rounded-2xl p-6 border border-[#EAE5DF] shadow-sm flex items-start gap-4">
              <div className="p-3 rounded-xl bg-[#FAF8F5] text-[#B77B83] border border-[#EAE5DF] shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#292525] mb-1">
                  Studio Address
                </h4>
                <p className="text-xs sm:text-sm text-[#756D6D] leading-relaxed">
                  {BUSINESS_INFO.address}
                </p>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-white rounded-2xl p-6 border border-[#EAE5DF] shadow-sm flex items-start gap-4">
              <div className="p-3 rounded-xl bg-[#FAF8F5] text-[#C9A66B] border border-[#EAE5DF] shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div className="w-full">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#292525] mb-2">
                  Operating Hours
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-xs text-[#756D6D]">
                  {BUSINESS_INFO.dailyHours.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between border-b border-[#EAE5DF]/40 pb-1">
                      <span className="font-medium text-[#292525]">{item.day}:</span>
                      <span>{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={BUSINESS_INFO.telLink}
                className="bg-[#B77B83] hover:bg-[#a36870] text-white px-6 py-3 rounded-full text-xs font-semibold tracking-wider uppercase transition-all shadow-sm flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>

              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-3 rounded-full text-xs font-semibold tracking-wider uppercase transition-all shadow-sm flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>

              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-[#FAF8F5] text-[#292525] border border-[#EAE5DF] hover:border-[#C9A66B] px-6 py-3 rounded-full text-xs font-semibold tracking-wider uppercase transition-all shadow-sm flex items-center gap-2"
              >
                <Navigation className="w-4 h-4 text-[#B77B83]" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>

          {/* Right Visual Image Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border-4 border-white shadow-xl aspect-[4/3] bg-white">
              <Image
                src="/images/image077.jpg"
                alt="AME Salon Aliganj Lucknow Exterior Banner"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#C9A66B] block">
                  Studio Entrance
                </span>
                <p className="font-serif text-base font-bold">1st Floor, D-78, Sector P, Aliganj</p>
                <p className="text-xs text-white/90">Phone: {BUSINESS_INFO.phoneFormatted}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
