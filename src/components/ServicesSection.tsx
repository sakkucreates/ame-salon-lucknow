'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { SERVICES_DATA, ServiceCategory } from '@/data/salonData';
import { Sparkles, ChevronRight, CheckCircle2 } from 'lucide-react';

interface ServicesSectionProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<string>(SERVICES_DATA[0].id);

  return (
    <section id="services" className="py-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#B77B83] bg-[#E8C7C7]/30 px-3 py-1 rounded-full border border-[#B77B83]/20">
            Our Offerings
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#292525] mt-3 mb-4">
            Curated Beauty & Grooming Services
          </h2>
          <p className="text-sm sm:text-base text-[#756D6D]">
            From bespoke HD bridal transformations to luxury hair spas, facials, nail extensions, and grooming.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service: ServiceCategory) => {
            const isActive = activeCategory === service.id;
            return (
              <div
                key={service.id}
                onClick={() => setActiveCategory(service.id)}
                className={`bg-white rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col justify-between cursor-pointer group shadow-sm hover:shadow-md ${
                  isActive
                    ? 'border-[#B77B83] ring-1 ring-[#B77B83]/30'
                    : 'border-[#EAE5DF] hover:border-[#C9A66B]/50'
                }`}
              >
                <div>
                  {/* Service Image Header */}
                  <div className="relative h-48 w-full bg-[#FAF8F5] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <h3 className="absolute bottom-3 left-4 right-4 font-serif text-xl font-bold text-white drop-shadow-sm">
                      {service.name}
                    </h3>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <p className="text-xs sm:text-sm text-[#756D6D] mb-4 leading-relaxed">
                      {service.shortDesc}
                    </p>

                    {/* Supported Service Items List */}
                    <div className="space-y-2 border-t border-[#EAE5DF]/70 pt-4">
                      <span className="text-[11px] font-semibold text-[#292525] uppercase tracking-wider block mb-2">
                        Included Services:
                      </span>
                      <ul className="grid grid-cols-1 gap-1.5 text-xs text-[#292525]">
                        {service.items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#B77B83] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-6 pt-0 mt-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenBooking(service.name);
                    }}
                    className="w-full bg-[#FAF8F5] hover:bg-[#B77B83] text-[#292525] hover:text-white border border-[#EAE5DF] hover:border-[#B77B83] py-2.5 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 group-hover:border-[#B77B83]"
                  >
                    <span>Enquire Now</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-[#EAE5DF] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-serif text-lg font-bold text-[#292525]">
              Looking for a Customized Beauty Package?
            </h4>
            <p className="text-xs sm:text-sm text-[#756D6D] mt-1">
              Speak directly with Ms. Ananya Mishra for tailored pre-bridal grooming and event packages.
            </p>
          </div>
          <button
            onClick={() => onOpenBooking('Custom Package Enquiry')}
            className="bg-[#B77B83] hover:bg-[#a36870] text-white px-6 py-3 rounded-full text-xs font-semibold tracking-wider uppercase shrink-0 transition-colors shadow-sm flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>Consult Our Artist</span>
          </button>
        </div>
      </div>
    </section>
  );
};
