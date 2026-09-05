'use client';

import React from 'react';
import { BUSINESS_INFO } from '@/data/salonData';
import { UserCheck, Award, ShieldCheck, Sparkles, Heart, Scissors } from 'lucide-react';

export const WhyChooseSection: React.FC = () => {
  const icons = [
    <UserCheck key="1" className="w-5 h-5 text-[#B77B83]" />,
    <Award key="2" className="w-5 h-5 text-[#C9A66B]" />,
    <ShieldCheck key="3" className="w-5 h-5 text-[#B77B83]" />,
    <Sparkles key="4" className="w-5 h-5 text-[#C9A66B]" />,
    <Heart key="5" className="w-5 h-5 text-[#B77B83]" />,
    <Scissors key="6" className="w-5 h-5 text-[#C9A66B]" />,
  ];

  return (
    <section className="py-20 bg-white border-b border-[#EAE5DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#B77B83] bg-[#E8C7C7]/30 px-3 py-1 rounded-full border border-[#B77B83]/20">
            Why Choose AME
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#292525] mt-3">
            Built on Quality, Hygiene & Artistry
          </h2>
          <p className="text-sm text-[#756D6D] mt-2">
            Every service at AME Unisex Salon is executed with professional care and individualized attention.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BUSINESS_INFO.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-[#FAF8F5] rounded-2xl p-6 border border-[#EAE5DF] hover:border-[#B77B83]/40 transition-all duration-300 group hover:shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-white border border-[#EAE5DF] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {icons[idx]}
              </div>
              <h3 className="font-serif text-lg font-bold text-[#292525] mb-2">{pillar.title}</h3>
              <p className="text-xs sm:text-sm text-[#756D6D] leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
