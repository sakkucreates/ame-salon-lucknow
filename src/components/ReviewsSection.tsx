'use client';

import React from 'react';
import { Star, Quote, CheckCircle } from 'lucide-react';
import { REVIEWS_DATA, BUSINESS_INFO, ReviewItem } from '@/data/salonData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8C7C7]/30 border border-[#B77B83]/20 mb-3">
            <Star className="w-3.5 h-3.5 text-[#C9A66B] fill-current" />
            <span className="text-xs font-semibold text-[#B77B83] uppercase tracking-widest">
              Verified Feedback
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#292525]">
            Loved by Our Clients
          </h2>
          <p className="text-sm text-[#756D6D] mt-2">
            Rated {BUSINESS_INFO.googleRating} / 5 stars across {BUSINESS_INFO.totalReviews} authentic Google Reviews in Lucknow.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS_DATA.map((review: ReviewItem) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-6 border border-[#EAE5DF] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-[#C9A66B] fill-current" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-[#E8C7C7]" />
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-[#292525] leading-relaxed mb-4 italic">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="pt-4 border-t border-[#EAE5DF]/60 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-[#292525]">{review.reviewer}</h4>
                  <span className="text-[10px] text-[#756D6D] block">Google Customer Review</span>
                </div>
                {review.tag && (
                  <span className="text-[9px] font-semibold text-[#B77B83] bg-[#E8C7C7]/20 px-2 py-0.5 rounded-full border border-[#B77B83]/20">
                    {review.tag}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View All Reviews CTA */}
        <div className="mt-12 text-center">
          <a
            href={BUSINESS_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white hover:bg-[#FAF8F5] text-[#292525] border border-[#EAE5DF] hover:border-[#C9A66B] px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all shadow-sm"
          >
            <span>Read All 114 Google Reviews</span>
            <CheckCircle className="w-4 h-4 text-[#B77B83]" />
          </a>
        </div>
      </div>
    </section>
  );
};
