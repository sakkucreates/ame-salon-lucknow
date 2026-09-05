'use client';

import React from 'react';
import Image from 'next/image';
import { Sparkles, MessageCircle, Heart } from 'lucide-react';
import { BUSINESS_INFO } from '@/data/salonData';

interface BridalFeatureProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const BridalFeature: React.FC<BridalFeatureProps> = ({ onOpenBooking }) => {
  const bridalOfferings = [
    { title: 'HD & Airbrush Makeup', desc: 'Lightweight, long-lasting foundation creating a flawless camera-ready glow.' },
    { title: 'Customized Bridal Looks', desc: 'Personalized to complement your wedding ensemble, jewelry, and individual aesthetic.' },
    { title: 'Bridal Hairstyling', desc: 'Intricate updos, floral braids, and elegant traditional hair extensions.' },
    { title: 'Draping & Complete Styling', desc: 'Precision saree and lehenga draping for effortless poise throughout rituals.' },
    { title: 'Pre-Bridal Grooming', desc: 'Curated skin brightening, facials, hair spas, and relaxation packages.' },
  ];

  return (
    <section id="bridal" className="py-20 bg-white border-y border-[#EAE5DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Images Column */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-md border-2 border-[#FAF8F5]">
                  <Image
                    src="/images/image031.jpg"
                    alt="AME Bridal Makeup Artist Lucknow"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-md border-2 border-[#FAF8F5]">
                  <Image
                    src="/images/image004.jpg"
                    alt="Bridal Makeup Details AME Salon"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-md border-2 border-[#FAF8F5]">
                  <Image
                    src="/images/image123.jpg"
                    alt="AME Studio Logo Arch"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-md border-2 border-[#FAF8F5]">
                  <Image
                    src="/images/image023.jpg"
                    alt="Engagement Bridal Makeover Lucknow"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </div>
            </div>

            {/* Floating Luxury Tag */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-md px-5 py-3 rounded-full border border-[#C9A66B]/40 shadow-lg text-center">
              <span className="text-xs font-serif font-bold text-[#292525] block">
                Bridal Makeovers in Aliganj
              </span>
              <span className="text-[10px] text-[#B77B83] font-medium tracking-wider uppercase">
                4.9 ★ Rated Studio
              </span>
            </div>
          </div>

          {/* Bridal Content Column */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#B77B83] bg-[#E8C7C7]/30 px-3 py-1 rounded-full border border-[#B77B83]/20">
                Bridal Specialization
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#292525] mt-3 leading-tight">
                Your Bridal Look, <br />
                <span className="italic font-normal text-[#B77B83]">Thoughtfully Created.</span>
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#756D6D] leading-relaxed">
              At AME Unisex Salon & Makeup Studio, we believe every bride deserves a timeless, comfortable, and breathtaking transformation. Under the personal direction of Ms. Ananya Mishra, we blend premium international cosmetics with artful precision.
            </p>

            {/* Offerings List */}
            <div className="space-y-3 pt-2">
              {bridalOfferings.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-[#FAF8F5] border border-[#EAE5DF]/60">
                  <div className="p-1 rounded-full bg-[#E8C7C7]/40 text-[#B77B83] shrink-0 mt-0.5">
                    <Heart className="w-3.5 h-3.5 fill-current" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#292525]">{item.title}</h4>
                    <p className="text-[12px] text-[#756D6D]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4">
              <button
                onClick={() => onOpenBooking('Bridal Makeup Consultation')}
                className="bg-[#B77B83] hover:bg-[#a36870] text-white px-7 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Enquire for Bridal Makeup</span>
              </button>

              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Enquiry</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
