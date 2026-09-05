'use client';

import React from 'react';
import Image from 'next/image';
import { Shield, HeartHandshake } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* About Text Content */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#B77B83] bg-[#E8C7C7]/30 px-3 py-1 rounded-full border border-[#B77B83]/20">
                The Founder & Studio
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#292525] mt-3">
                Meet Ananya Mishra
              </h2>
              <p className="text-xs uppercase tracking-widest text-[#C9A66B] font-semibold mt-1">
                Founder & Professional Makeup Artist
              </p>
            </div>

            <p className="text-sm sm:text-base text-[#756D6D] leading-relaxed">
              AME Unisex Salon & Makeup Studio was established by Ms. Ananya Mishra with a clear vision: to deliver exceptional, highly personalized beauty transformations and premium grooming services in Aliganj, Lucknow.
            </p>

            <p className="text-sm sm:text-base text-[#756D6D] leading-relaxed">
              Whether preparing a bride for her most cherished day or styling clients for festive makeovers and everyday grooming, Ms. Ananya Mishra and her team place utmost emphasis on meticulous attention to detail, strict hygiene standards, and using high-grade beauty products.
            </p>

            {/* Core Values / Commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-[#EAE5DF] shadow-sm">
                <div className="w-8 h-8 rounded-full bg-[#E8C7C7]/30 flex items-center justify-center text-[#B77B83] mb-2">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-[#292525]">Personalized Attention</h4>
                <p className="text-[11px] text-[#756D6D] mt-0.5">
                  Every consultation is customized to match your skin type, style, and personal comfort.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#EAE5DF] shadow-sm">
                <div className="w-8 h-8 rounded-full bg-[#E8C7C7]/30 flex items-center justify-center text-[#B77B83] mb-2">
                  <Shield className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-[#292525]">Hygiene & Care</h4>
                <p className="text-[11px] text-[#756D6D] mt-0.5">
                  Clean, sanitized workstations and single-use supplies for safe beauty experiences.
                </p>
              </div>
            </div>
          </div>

          {/* About Image Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border-4 border-white shadow-xl aspect-[4/3] bg-white">
              <Image
                src="/images/image123.jpg"
                alt="AME Salon Founder Studio Wall Ananya Mishra"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="font-serif text-lg font-bold">AME Unisex Salon & Studio</p>
                <p className="text-xs text-white/90">Sector P, Aliganj, Lucknow</p>
              </div>
            </div>

            {/* Overlapping Secondary Image */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 w-48 h-36 rounded-xl overflow-hidden border-4 border-white shadow-lg bg-white">
              <Image
                src="/images/image006.jpg"
                alt="AME Salon Reception & Studio Interior"
                fill
                className="object-cover"
                sizes="200px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
