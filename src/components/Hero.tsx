'use client';

import React from 'react';
import Image from 'next/image';
import { Star, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '@/data/salonData';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#FAF8F5]">
      {/* Decorative Subtle Background Elements */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-[#E8C7C7]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#C9A66B]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            {/* Rating Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#EAE5DF] shadow-sm w-fit">
              <div className="flex items-center gap-1 text-[#C9A66B]">
                <Star className="w-4 h-4 fill-current" />
                <span className="text-xs font-bold text-[#292525]">
                  {BUSINESS_INFO.googleRating}
                </span>
              </div>
              <span className="text-xs text-[#756D6D]">
                · {BUSINESS_INFO.totalReviews} Google Reviews ({BUSINESS_INFO.fiveStarReviews} ★★★★★)
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#292525] tracking-tight leading-[1.15]">
              Beauty, Styled <br />
              <span className="italic font-normal text-[#B77B83]">Your Way.</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-[#756D6D] max-w-xl leading-relaxed">
              {BUSINESS_INFO.heroSub}
            </p>

            {/* Key Value Pill Highlights */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium text-[#292525] pt-1">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#B77B83]" />
                HD & Airbrush Bridal
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#B77B83]" />
                Founded by Ms. Ananya Mishra
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#B77B83]" />
                Sanitized & Hygienic Studio
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                onClick={onOpenBooking}
                className="bg-[#B77B83] hover:bg-[#a36870] text-white px-8 py-3.5 rounded-full text-sm font-semibold tracking-wider uppercase shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <Sparkles className="w-4 h-4 text-[#FAF8F5]" />
                <span>Book Appointment</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="#services"
                className="bg-white hover:bg-[#FAF8F5] text-[#292525] border border-[#EAE5DF] hover:border-[#C9A66B] px-7 py-3.5 rounded-full text-sm font-semibold tracking-wider uppercase text-center transition-all duration-300"
              >
                Explore Services
              </a>
            </div>

            {/* Address & Time Hint */}
            <div className="pt-4 border-t border-[#EAE5DF]/60 flex items-center gap-3 text-xs text-[#756D6D]">
              <span className="font-semibold text-[#292525]">Location:</span> Aliganj, Lucknow
              <span className="hidden sm:inline">|</span>
              <span className="hidden sm:inline font-semibold text-[#292525]">Hours:</span> Open Daily 10 AM – 9 PM
            </div>
          </div>

          {/* Hero Right Visual Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Bridal Image Frame */}
              <div className="relative rounded-2xl overflow-hidden border-4 border-white shadow-xl aspect-[3/4] bg-[#E8C7C7]/20">
                <Image
                  src="/images/image031.jpg"
                  alt="AME Salon Lucknow HD Bridal Makeup Transformation"
                  fill
                  priority
                  className="object-cover object-top hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-3.5 rounded-xl border border-white/50 shadow-sm">
                  <p className="text-xs font-serif font-semibold text-[#292525]">
                    Signature HD Bridal Makeup
                  </p>
                  <p className="text-[11px] text-[#756D6D] truncate">
                    Customized bridal styling & draping in Aliganj, Lucknow
                  </p>
                </div>
              </div>

              {/* Secondary Overlapping Accent Frame */}
              <div className="hidden sm:block absolute -bottom-6 -left-6 w-36 h-44 rounded-xl overflow-hidden border-4 border-white shadow-lg bg-white">
                <Image
                  src="/images/image123.jpg"
                  alt="AME Salon Studio Floral Wall Logo"
                  fill
                  className="object-cover"
                  sizes="150px"
                />
              </div>

              {/* Verified Badge Overlay */}
              <div className="absolute top-4 right-4 bg-[#FAF8F5] text-[#292525] px-3 py-1.5 rounded-full text-[11px] font-medium border border-[#C9A66B]/40 shadow-sm flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Open Today · 10 AM - 9 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
