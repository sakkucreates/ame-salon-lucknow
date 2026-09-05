'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { TrustBar } from '@/components/TrustBar';
import { ServicesSection } from '@/components/ServicesSection';
import { BridalFeature } from '@/components/BridalFeature';
import { AboutSection } from '@/components/AboutSection';
import { GallerySection } from '@/components/GallerySection';
import { ReviewsSection } from '@/components/ReviewsSection';
import { WhyChooseSection } from '@/components/WhyChooseSection';
import { LocationHours } from '@/components/LocationHours';
import { AppointmentModal } from '@/components/AppointmentModal';
import { Footer } from '@/components/Footer';

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('');

  const handleOpenBooking = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    } else {
      setSelectedService('');
    }
    setIsBookingOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#292525] relative">
      {/* Top Navbar */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Hero Section */}
      <Hero onOpenBooking={() => handleOpenBooking()} />

      {/* Trust & Stats Bar */}
      <TrustBar />

      {/* Services Section */}
      <ServicesSection onOpenBooking={handleOpenBooking} />

      {/* Bridal Feature Showcase */}
      <BridalFeature onOpenBooking={handleOpenBooking} />

      {/* About Section - Meet Ananya Mishra */}
      <AboutSection />

      {/* Real Work & Studio Gallery */}
      <GallerySection />

      {/* Customer Reviews Section */}
      <ReviewsSection />

      {/* Why Choose AME Section */}
      <WhyChooseSection />

      {/* Location & Opening Hours */}
      <LocationHours />

      {/* Interactive Appointment Modal */}
      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialService={selectedService}
      />

      {/* Footer */}
      <Footer />
    </main>
  );
}
