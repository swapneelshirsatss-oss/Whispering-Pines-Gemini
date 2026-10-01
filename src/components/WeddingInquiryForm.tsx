import React, { useState } from "react";
import { Calendar, Users, Phone, Mail, User, MessageSquare, Send, CheckCircle2, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";
import { trackAdsConversion } from "../utils/analytics";

interface WeddingFormData {
  fullName: string;
  phone: string;
  email: string;
  weddingDate: string;
  guestCount: string;
  message: string;
}

export default function WeddingInquiryForm() {
  const [formData, setFormData] = useState<WeddingFormData>({
    fullName: "",
    phone: "",
    email: "",
    weddingDate: "",
    guestCount: "50-70",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const constructWhatsAppMessage = (data: WeddingFormData) => {
    return `Hello Casa De Bello Whispering Pines! I am inquiring about hosting a destination wedding:
• Couple/Host Name: ${data.fullName || "Not provided"}
• Mobile / WhatsApp: ${data.phone || "Not provided"}
• Email: ${data.email || "Not provided"}
• Tentative Wedding Date: ${data.weddingDate || "To be decided"}
• Estimated Guests: ${data.guestCount}
• Special Requirements: ${data.message || "Please share availability, buyout packages, and bespoke culinary options."}

I look forward to discussing the bridal villa allocation and customized wedding proposal.`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Track conversion in Google Ads / GTM
    trackAdsConversion("generate_lead", "wedding", "wedding_proposal_submission", {
      phone_number: formData.phone,
      method: "proposal_form",
      conversion_type: "whatsapp",
    });

    const waText = constructWhatsAppMessage(formData);
    const waUrl = `https://wa.me/917505029696?text=${encodeURIComponent(waText)}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Open WhatsApp in a new tab so guest communicates directly with the wedding team
      if (typeof window !== "undefined") {
        window.open(waUrl, "_blank", "noopener,noreferrer");
      }
    }, 600);
  };

  return (
    <div id="wedding-inquiry" className="relative scroll-mt-24">
      {/* Editorial Container with Subtle Alabaster Texture & Hairline Border */}
      <div className="bg-white border border-[#1B3322]/10 rounded-2xl p-6 sm:p-10 lg:p-12 shadow-luxury-md relative overflow-hidden">
        {/* Decorative Golden Top Accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1B3322] via-[#c9a832] to-[#1B3322]" />

        {submitted ? (
          <div className="py-10 text-center space-y-6 animate-fade-in">
            <div className="w-16 h-16 bg-[#1B3322]/10 rounded-full flex items-center justify-center mx-auto text-[#1B3322]">
              <CheckCircle2 className="w-9 h-9 text-[#1B3322]" />
            </div>

            <div className="space-y-3 max-w-lg mx-auto">
              <span className="font-mono text-xs text-[#c9a832] uppercase tracking-[0.2em] font-semibold block">
                Inquiry Received · Priority Allocation
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-medium text-[#1B3322]">
                Thank You, {formData.fullName || "Guest"}
              </h3>
              <p className="text-sm text-[#2C3531]/80 leading-relaxed font-sans">
                Your wedding proposal request has been logged with our direct event desk. Our dedicated Casa De Bello wedding director is preparing dates and customized buyout details.
              </p>
            </div>

            {/* Host Perks Banner in Confirmation */}
            <div className="bg-[#FAF9F6] border border-[#c9a832]/30 rounded-xl p-5 max-w-md mx-auto text-left flex items-start gap-3.5">
              <Sparkles className="w-5 h-5 text-[#c9a832] shrink-0 mt-0.5" />
              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#1B3322] font-bold block mb-1">
                  Host Direct Perks Applied
                </span>
                <p className="text-xs text-[#2C3531]/80 leading-relaxed">
                  Direct inquiries receive priority bridal villa allocation and a complimentary on-site menu tasting session.
                </p>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`https://wa.me/917505029696?text=${encodeURIComponent(constructWhatsAppMessage(formData))}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-mono uppercase tracking-widest font-semibold transition-all duration-300 shadow-sm"
              >
                <span>Chat on WhatsApp Directly</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-[#1B3322]/20 hover:border-[#1B3322] text-[#1B3322] text-xs font-mono uppercase tracking-widest font-semibold transition-all duration-200"
              >
                Submit Another Request
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              {/* Full Name */}
              <div className="space-y-2">
                <label htmlFor="fullName" className="block text-xs font-mono uppercase tracking-wider text-[#1B3322] font-semibold">
                  Full Name <span className="text-[#C27847]">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#2C3531]/40">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Radhika Sharma & Vikram Mehta"
                    className="w-full pl-10 pr-4 py-3 bg-[#FAF9F6] border border-[#1B3322]/15 rounded-lg text-sm text-[#2C3531] placeholder:text-[#2C3531]/40 focus:outline-none focus:border-[#c9a832] focus:ring-1 focus:ring-[#c9a832] transition-colors"
                  />
                </div>
              </div>

              {/* Mobile / WhatsApp Number */}
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-xs font-mono uppercase tracking-wider text-[#1B3322] font-semibold">
                  Mobile / WhatsApp Number <span className="text-[#C27847]">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#2C3531]/40">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full pl-10 pr-4 py-3 bg-[#FAF9F6] border border-[#1B3322]/15 rounded-lg text-sm text-[#2C3531] placeholder:text-[#2C3531]/40 focus:outline-none focus:border-[#c9a832] focus:ring-1 focus:ring-[#c9a832] transition-colors font-mono"
                  />
                </div>
              </div>

              {/* Email Address */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-[#1B3322] font-semibold">
                  Email Address <span className="text-[#C27847]">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#2C3531]/40">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="host@example.com"
                    className="w-full pl-10 pr-4 py-3 bg-[#FAF9F6] border border-[#1B3322]/15 rounded-lg text-sm text-[#2C3531] placeholder:text-[#2C3531]/40 focus:outline-none focus:border-[#c9a832] focus:ring-1 focus:ring-[#c9a832] transition-colors"
                  />
                </div>
              </div>

              {/* Tentative Wedding Date */}
              <div className="space-y-2">
                <label htmlFor="weddingDate" className="block text-xs font-mono uppercase tracking-wider text-[#1B3322] font-semibold">
                  Tentative Wedding Date <span className="text-[#C27847]">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#2C3531]/40">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <input
                    type="date"
                    id="weddingDate"
                    name="weddingDate"
                    required
                    value={formData.weddingDate}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-[#FAF9F6] border border-[#1B3322]/15 rounded-lg text-sm text-[#2C3531] focus:outline-none focus:border-[#c9a832] focus:ring-1 focus:ring-[#c9a832] transition-colors font-mono"
                  />
                </div>
              </div>
            </div>

            {/* Estimated Guest Count */}
            <div className="space-y-2">
              <label htmlFor="guestCount" className="block text-xs font-mono uppercase tracking-wider text-[#1B3322] font-semibold">
                Estimated Guest Count <span className="text-[#C27847]">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#2C3531]/40">
                  <Users className="w-4 h-4" />
                </div>
                <select
                  id="guestCount"
                  name="guestCount"
                  value={formData.guestCount}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 bg-[#FAF9F6] border border-[#1B3322]/15 rounded-lg text-sm text-[#2C3531] focus:outline-none focus:border-[#c9a832] focus:ring-1 focus:ring-[#c9a832] transition-colors appearance-none cursor-pointer"
                >
                  <option value="30-50">30 – 50 Guests (Intimate Villa & Orchard Gathering)</option>
                  <option value="50-70">50 – 70 Guests (Complete Estate Buyout · Recommended)</option>
                  <option value="70-100">70 – 100 Guests (Full Lawns & Extended Celebrations)</option>
                </select>
                <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-[#2C3531]/50 text-xs">
                  ▼
                </div>
              </div>
            </div>

            {/* Message / Specific Requirements */}
            <div className="space-y-2">
              <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-[#1B3322] font-semibold">
                Message / Specific Requirements
              </label>
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your ceremonial vision: specific ritual dates, preferred services (Decoration & Lighting, Menu Creation, Spa & Wellness, Pre-Bridal Beauty, Wedding Cake), or bridal villa allocation..."
                  className="w-full p-3.5 bg-[#FAF9F6] border border-[#1B3322]/15 rounded-lg text-sm text-[#2C3531] placeholder:text-[#2C3531]/40 focus:outline-none focus:border-[#c9a832] focus:ring-1 focus:ring-[#c9a832] transition-colors leading-relaxed"
                />
              </div>
            </div>

            {/* Host Perks Callout */}
            <div className="bg-[#FAF9F6] border border-[#c9a832]/25 rounded-xl p-4 flex items-start gap-3">
              <Sparkles className="w-4 h-4 text-[#c9a832] shrink-0 mt-0.5" />
              <p className="text-xs text-[#2C3531]/90 leading-relaxed font-sans">
                <strong className="text-[#1B3322] font-semibold">Host Perks Privilege:</strong> Direct inquiries receive priority bridal villa allocation and a complimentary on-site menu tasting session.
              </p>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-shimmer inline-flex items-center justify-center gap-3 py-4 px-8 rounded-full bg-[#1B3322] hover:bg-[#2A4832] text-[#FAF9F6] text-xs sm:text-sm font-mono uppercase tracking-[0.18em] font-semibold transition-all duration-300 shadow-luxury-md focus-ring disabled:opacity-70 cursor-pointer"
              >
                {isSubmitting ? (
                  <span>Preparing Custom Proposal...</span>
                ) : (
                  <>
                    <span>Request Wedding Proposal</span>
                    <Send className="w-4 h-4 text-[#c9a832]" />
                  </>
                )}
              </button>
            </div>

            {/* Under-CTA Trust Reassurance */}
            <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-[11px] text-[#2C3531]/65 font-mono">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#1B3322]" />
                100% Private Estate Buyout
              </span>
              <span>•</span>
              <span>Zero Booking Intermediary Fees</span>
              <span>•</span>
              <span>Fast Response in &lt; 2 Hours</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
