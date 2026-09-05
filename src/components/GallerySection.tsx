'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { GALLERY_DATA, GalleryItem } from '@/data/salonData';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Work' },
    { id: 'bridal', label: 'Bridal' },
    { id: 'makeup', label: 'Makeovers' },
    { id: 'hair', label: 'Hair Care' },
    { id: 'nails', label: 'Nail Studio' },
    { id: 'salon', label: 'Studio Ambience' },
  ];

  const filteredItems =
    selectedCategory === 'all'
      ? GALLERY_DATA
      : GALLERY_DATA.filter((item) => item.category === selectedCategory);

  const currentLightboxItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-white border-b border-[#EAE5DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#B77B83] bg-[#E8C7C7]/30 px-3 py-1 rounded-full border border-[#B77B83]/20">
            Real Transformations
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#292525] mt-3 mb-3">
            AME Work & Studio Portfolio
          </h2>
          <p className="text-sm text-[#756D6D]">
            Explore real client makeup looks, nail extensions, hair styling, and our studio ambience.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
                selectedCategory === cat.id
                  ? 'bg-[#B77B83] text-white shadow-sm'
                  : 'bg-[#FAF8F5] text-[#292525] hover:bg-[#E8C7C7]/30 border border-[#EAE5DF]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry / Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item: GalleryItem, idx: number) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(idx)}
              className="group relative rounded-2xl overflow-hidden bg-[#FAF8F5] border border-[#EAE5DF] cursor-pointer shadow-sm hover:shadow-md transition-all duration-300 aspect-[4/3]"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                <span className="text-[10px] font-semibold tracking-widest uppercase text-[#C9A66B] mb-1">
                  {item.categoryLabel}
                </span>
                <h4 className="font-serif text-base font-bold drop-shadow-sm">{item.title}</h4>
                <p className="text-xs text-white/80 line-clamp-2 mt-1">{item.caption}</p>
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {currentLightboxItem && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Controls */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 sm:left-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 sm:right-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Image & Info */}
          <div
            className="relative max-w-4xl w-full max-h-[85vh] bg-black rounded-2xl overflow-hidden border border-white/10 flex flex-col justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[65vh] bg-black">
              <Image
                src={currentLightboxItem.image}
                alt={currentLightboxItem.title}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
            <div className="p-5 bg-[#292525] text-white flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold text-[#C9A66B] uppercase tracking-wider">
                  {currentLightboxItem.categoryLabel}
                </span>
                <span className="text-xs text-white/60">
                  {lightboxIndex! + 1} / {filteredItems.length}
                </span>
              </div>
              <h3 className="font-serif text-lg font-bold">{currentLightboxItem.title}</h3>
              <p className="text-xs text-white/80">{currentLightboxItem.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
