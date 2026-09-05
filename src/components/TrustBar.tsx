'use client';

import React from 'react';
import { Star, MessageSquare, Award, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '@/data/salonData';

export const TrustBar: React.FC = () => {
  const stats = [
    {
      icon: <Star className="w-5 h-5 text-[#C9A66B]" />,
      value: `${BUSINESS_INFO.googleRating} ★`,
      label: 'Google Rating',
    },
    {
      icon: <MessageSquare className="w-5 h-5 text-[#B77B83]" />,
      value: BUSINESS_INFO.totalReviews,
      label: 'Google Reviews',
    },
    {
      icon: <Award className="w-5 h-5 text-[#C9A66B]" />,
      value: BUSINESS_INFO.fiveStarReviews,
      label: 'Five-Star Reviews',
    },
    {
      icon: <Clock className="w-5 h-5 text-[#B77B83]" />,
      value: '10 AM – 9 PM',
      label: 'Open Daily',
    },
  ];

  return (
    <section className="bg-white border-y border-[#EAE5DF] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-x-0 md:divide-x divide-[#EAE5DF]/60">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center px-4 py-2 hover:scale-105 transition-transform"
            >
              <div className="p-2.5 rounded-full bg-[#FAF8F5] mb-2 border border-[#EAE5DF]/50">
                {stat.icon}
              </div>
              <div className="font-serif text-2xl sm:text-3xl font-bold text-[#292525]">
                {stat.value}
              </div>
              <div className="text-xs text-[#756D6D] uppercase tracking-wider font-medium mt-0.5">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
