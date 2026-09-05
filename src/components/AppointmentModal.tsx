'use client';

import React, { useState } from 'react';
import { X, CheckCircle2, Phone, MessageCircle, Calendar, Sparkles } from 'lucide-react';
import { BUSINESS_INFO, SERVICES_DATA } from '@/data/salonData';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  initialService = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: initialService || SERVICES_DATA[0].name,
    date: '',
    time: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div
        className="relative max-w-lg w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-[#EAE5DF] max-h-[90vh] flex flex-col animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#FAF8F5] p-6 border-b border-[#EAE5DF] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#E8C7C7]/40 flex items-center justify-center text-[#B77B83]">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-[#292525]">Book Appointment</h3>
              <p className="text-[11px] text-[#756D6D]">AME Unisex Salon & Studio Lucknow</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#E8C7C7]/20 text-[#292525] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto">
          {isSubmitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-xl font-bold text-[#292525]">
                Demo Enquiry Received!
              </h4>
              <p className="text-xs text-[#756D6D] max-w-sm mx-auto leading-relaxed">
                Thank you for trying the website demo! To connect with AME Salon right away, use the direct phone or WhatsApp buttons below:
              </p>

              {/* Direct Instant Contact CTAs */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={BUSINESS_INFO.telLink}
                  className="w-full sm:w-auto bg-[#B77B83] text-white px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call {BUSINESS_INFO.phoneFormatted}</span>
                </a>
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-[#25D366] text-white px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Directly</span>
                </a>
              </div>

              <button
                onClick={handleReset}
                className="text-xs font-semibold text-[#756D6D] hover:text-[#292525] underline pt-4 block mx-auto"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold text-[#292525] mb-1">
                  Your Full Name <span className="text-[#B77B83]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Priya Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#EAE5DF] focus:outline-none focus:ring-2 focus:ring-[#B77B83]/40 text-xs text-[#292525] bg-[#FAF8F5]"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-xs font-semibold text-[#292525] mb-1">
                  Phone / WhatsApp Number <span className="text-[#B77B83]">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#EAE5DF] focus:outline-none focus:ring-2 focus:ring-[#B77B83]/40 text-xs text-[#292525] bg-[#FAF8F5]"
                />
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-xs font-semibold text-[#292525] mb-1">
                  Preferred Service <span className="text-[#B77B83]">*</span>
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#EAE5DF] focus:outline-none focus:ring-2 focus:ring-[#B77B83]/40 text-xs text-[#292525] bg-[#FAF8F5]"
                >
                  {SERVICES_DATA.map((srv) => (
                    <option key={srv.id} value={srv.name}>
                      {srv.name}
                    </option>
                  ))}
                  <option value="Custom Package Enquiry">Custom Package Consultation</option>
                </select>
              </div>

              {/* Date & Time Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#292525] mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-[#EAE5DF] focus:outline-none focus:ring-2 focus:ring-[#B77B83]/40 text-xs text-[#292525] bg-[#FAF8F5]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#292525] mb-1">
                    Preferred Time
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-[#EAE5DF] focus:outline-none focus:ring-2 focus:ring-[#B77B83]/40 text-xs text-[#292525] bg-[#FAF8F5]"
                  >
                    <option value="">Select Time Slot</option>
                    <option value="10:00 AM - 12:00 PM">10:00 AM - 12:00 PM</option>
                    <option value="12:00 PM - 03:00 PM">12:00 PM - 03:00 PM</option>
                    <option value="03:00 PM - 06:00 PM">03:00 PM - 06:00 PM</option>
                    <option value="06:00 PM - 09:00 PM">06:00 PM - 09:00 PM</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-[#292525] mb-1">
                  Additional Notes / Request
                </label>
                <textarea
                  rows={2}
                  placeholder="Mention any specific bridal event date, hair type, or special request..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2 rounded-xl border border-[#EAE5DF] focus:outline-none focus:ring-2 focus:ring-[#B77B83]/40 text-xs text-[#292525] bg-[#FAF8F5]"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#B77B83] hover:bg-[#a36870] text-white py-3 rounded-full text-xs font-semibold uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2 mt-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Submit Appointment Request</span>
              </button>

              <p className="text-[10px] text-center text-[#756D6D]">
                Demo Mode: Submitting will show instant confirmation.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
