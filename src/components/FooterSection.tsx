import React from "react";
import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';
import { RESORT_CONTACT } from "../data";
import Logo from "./Logo";

export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1B3322] text-[#FAF9F6] pt-16 pb-12 border-t border-[#c9a832]/20 relative overflow-hidden">
      {/* Ambient Background Gradient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-[#c9a832]/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#FAF9F6]/10">
          
          {/* Column 1: Brand & Bio (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <Logo />
            <div>
              <span className="text-xs font-mono text-[#c9a832] uppercase tracking-[0.2em] block font-medium">
                Casa De Bello • Whispering Pines
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#FAF9F6]/75 font-sans leading-relaxed">
              Whispering Pines Resort by Casa De Bello is a premier 4-star boutique heritage mountain resort in Malla Ramgarh on the Bhowali-Ramgarh-Mukteshwar Road, Uttarakhand. Featuring 180° Himalayan views of Nanda Devi & Trishul peaks, private fruit orchards, wood fireplaces, and 150 Mbps Fiber Wi-Fi.
            </p>
            
            {/* Social Media Icon Badges */}
            {RESORT_CONTACT.socials && (
              <div className="pt-2">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#c9a832] block mb-3 font-semibold">
                  Connect With Us
                </span>
                <div className="flex items-center gap-3">
                  {RESORT_CONTACT.socials.facebook && (
                    <a
                      href={RESORT_CONTACT.socials.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-[#FAF9F6]/5 hover:bg-[#c9a832] text-[#FAF9F6] hover:text-[#1B3322] border border-[#FAF9F6]/15 hover:border-[#c9a832] transition-all duration-300 flex items-center justify-center shadow-sm hover:scale-110"
                      aria-label="Facebook"
                      title="Follow us on Facebook"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                  )}
                  {RESORT_CONTACT.socials.instagram && (
                    <a
                      href={RESORT_CONTACT.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-[#FAF9F6]/5 hover:bg-[#c9a832] text-[#FAF9F6] hover:text-[#1B3322] border border-[#FAF9F6]/15 hover:border-[#c9a832] transition-all duration-300 flex items-center justify-center shadow-sm hover:scale-110"
                      aria-label="Instagram"
                      title="Follow us on Instagram"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                  )}
                  {RESORT_CONTACT.socials.twitter && (
                    <a
                      href={RESORT_CONTACT.socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-[#FAF9F6]/5 hover:bg-[#c9a832] text-[#FAF9F6] hover:text-[#1B3322] border border-[#FAF9F6]/15 hover:border-[#c9a832] transition-all duration-300 flex items-center justify-center shadow-sm hover:scale-110"
                      aria-label="X (Twitter)"
                      title="Follow us on X (Twitter)"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                  )}
                  {RESORT_CONTACT.socials.youtube && (
                    <a
                      href={RESORT_CONTACT.socials.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-[#FAF9F6]/5 hover:bg-[#c9a832] text-[#FAF9F6] hover:text-[#1B3322] border border-[#FAF9F6]/15 hover:border-[#c9a832] transition-all duration-300 flex items-center justify-center shadow-sm hover:scale-110"
                      aria-label="YouTube"
                      title="Subscribe on YouTube"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    </a>
                  )}
                  {RESORT_CONTACT.socials.tripadvisor && (
                    <a
                      href={RESORT_CONTACT.socials.tripadvisor}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-[#FAF9F6]/5 hover:bg-[#c9a832] text-[#FAF9F6] hover:text-[#1B3322] border border-[#FAF9F6]/15 hover:border-[#c9a832] transition-all duration-300 flex items-center justify-center shadow-sm hover:scale-110"
                      aria-label="TripAdvisor"
                      title="Review us on TripAdvisor"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-3.5 14a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0-3.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 3.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0-3.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm3.3-3.9c-.8.8-1.9 1.4-3.1 1.4-1.7 0-3.2-1-3.9-2.5-.7 1.5-2.2 2.5-3.9 2.5-1.2 0-2.3-.6-3.1-1.4L3.5 13H2.1c0-.4.3-.7.7-.7h1.4c.5-2.3 2.5-4.1 5-4.1 1.5 0 2.9.6 3.8 1.7.9-1.1 2.3-1.7 3.8-1.7 2.5 0 4.5 1.8 5 4.1h1.4c.4 0 .7.3.7.7h-1.4l-1.3-1.4z"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Column 2: Navigation Quick Links (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#c9a832] font-semibold border-b border-[#c9a832]/30 pb-2 inline-block">
              Explore Pages
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-xs sm:text-sm font-sans text-[#FAF9F6]/80 pt-1">
              <a href="/" data-astro-prefetch="hover" className="hover:text-[#c9a832] transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-[#c9a832] rounded-full group-hover:scale-125 transition-transform"></span>Home</a>
              <a href="/about-whispering-pines-resort-ramgarh/" data-astro-prefetch="hover" className="hover:text-[#c9a832] transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-[#c9a832] rounded-full group-hover:scale-125 transition-transform"></span>About Us</a>
              <a href="/suites-cottages-ramgarh-resort/" data-astro-prefetch="hover" className="hover:text-[#c9a832] transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-[#c9a832] rounded-full group-hover:scale-125 transition-transform"></span>Rooms & Suites</a>
              <a href="/private-villas-near-nainital/" data-astro-prefetch="hover" className="hover:text-[#c9a832] transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-[#c9a832] rounded-full group-hover:scale-125 transition-transform"></span>Premium Villas</a>
              <a href="/resort-amenities-mukteshwar/" data-astro-prefetch="hover" className="hover:text-[#c9a832] transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-[#c9a832] rounded-full group-hover:scale-125 transition-transform"></span>Amenities</a>
              <a href="/resort-services-ramgarh/" data-astro-prefetch="hover" className="hover:text-[#c9a832] transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-[#c9a832] rounded-full group-hover:scale-125 transition-transform"></span>Services</a>
              <a href="/things-to-do-near-mukteshwar/" data-astro-prefetch="hover" className="hover:text-[#c9a832] transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-[#c9a832] rounded-full group-hover:scale-125 transition-transform"></span>Local Sights</a>
              <a href="/gallery/" data-astro-prefetch="hover" className="hover:text-[#c9a832] transition-colors flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-[#c9a832] rounded-full group-hover:scale-125 transition-transform"></span>Gallery</a>
              <a href="/reviews/" data-astro-prefetch="hover" className="hover:text-[#c9a832] transition-colors flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-[#c9a832] rounded-full group-hover:scale-125 transition-transform"></span>Reviews</a>
              <a href="/blog/" data-astro-prefetch="hover" className="hover:text-[#c9a832] transition-colors flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-[#c9a832] rounded-full group-hover:scale-125 transition-transform"></span>Blog</a>
              <a href="/contact-whispering-pines-resort-mukteshwar/" data-astro-prefetch="hover" className="hover:text-[#c9a832] transition-colors flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-[#c9a832] rounded-full group-hover:scale-125 transition-transform"></span>Contact Us</a>
              <a href="https://casadebello.whisperingpinesresort.in/" target="_blank" rel="noopener noreferrer" className="text-[#c9a832] hover:text-[#FAF9F6] transition-colors flex items-center gap-1.5 group font-semibold"><span className="w-1.5 h-1.5 bg-[#c9a832] rounded-full group-hover:scale-125 transition-transform"></span>Casa De Bello</a>
            </div>
          </div>

          {/* Column 3: Contact & Location (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#c9a832] font-semibold border-b border-[#c9a832]/30 pb-2 inline-block">
              Location & Reservations
            </h4>
            <div className="space-y-3.5 text-xs sm:text-sm font-sans text-[#FAF9F6]/85 pt-1">
              <a
                href={RESORT_CONTACT.gmapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start hover:text-[#c9a832] transition-colors group"
              >
                <MapPin className="w-4 h-4 text-[#c9a832] mr-3 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="leading-relaxed">{RESORT_CONTACT.location}</span>
              </a>
              <a
                href={`tel:${RESORT_CONTACT.phone}`}
                className="flex items-center hover:text-[#c9a832] transition-colors group"
              >
                <Phone className="w-4 h-4 text-[#c9a832] mr-3 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="font-mono tracking-wide">{RESORT_CONTACT.phone}</span>
              </a>
              <a
                href={`mailto:${RESORT_CONTACT.email}`}
                className="flex items-center hover:text-[#c9a832] transition-colors group"
              >
                <Mail className="w-4 h-4 text-[#c9a832] mr-3 shrink-0 group-hover:scale-110 transition-transform" />
                <span>{RESORT_CONTACT.email}</span>
              </a>
            </div>

            {/* Direct WhatsApp CTA Button inside Footer */}
            <div className="pt-2">
              <a
                href="https://casadebello-book.whisperingpinesresort.in/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#c9a832] hover:bg-[#FAF9F6] text-[#1B3322] font-mono text-xs font-bold uppercase tracking-wider px-5 py-3 rounded shadow-md transition-all transform hover:-translate-y-0.5"
              >
                <span>Direct WhatsApp Booking</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Map Full Width Row */}
        <div className="py-8 border-b border-[#FAF9F6]/10">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#c9a832] font-semibold flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#c9a832]" /> Estate Map & Coordinates
            </h4>
            <span className="text-[11px] font-mono text-[#FAF9F6]/50 hidden sm:inline">Malla Ramgarh, Uttarakhand</span>
          </div>
          <div className="w-full h-56 sm:h-72 rounded-xl overflow-hidden shadow-xl border border-[#c9a832]/20">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3475.0889621951014!2d79.5506321!3d29.4261962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a0a3285f1c95a9%3A0x74636d4e06267d3e!2sWhispering%20Pines!5e0!3m2!1sen!2sin!4v1782035643721!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>

        {/* Footer Bottom Copyrights & Legal Panel */}
        <div className="pt-8 flex flex-col lg:flex-row items-center justify-between gap-6 text-xs font-sans text-[#FAF9F6]/65 text-center lg:text-left">
          <div className="space-y-2">
            <p>© {currentYear} Whispering Pines Resort Mukteshwar. All Rights Reserved.</p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-[11px] font-sans">
              <a href="/privacy-policy/" data-astro-prefetch="hover" className="hover:text-[#c9a832] transition-colors">Privacy Policy</a>
              <span className="text-[#FAF9F6]/30">•</span>
              <a href="/terms/" data-astro-prefetch="hover" className="hover:text-[#c9a832] transition-colors">Terms & Conditions</a>
              <span className="text-[#FAF9F6]/30">•</span>
              <a href="/sitemap/" data-astro-prefetch="hover" className="hover:text-[#c9a832] transition-colors">Sitemap</a>
              <span className="text-[#FAF9F6]/30">•</span>
              <a href="https://casadebello.whisperingpinesresort.in/" target="_blank" rel="noopener noreferrer" className="text-[#c9a832] hover:text-[#FAF9F6] transition-colors font-medium">Casa De Bello Edition</a>
            </div>
            <p className="text-[10px] text-[#FAF9F6]/40 max-w-2xl pt-1 leading-normal">
              Operated by <a href="https://casadebello.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#c9a832] transition-colors">Casa De Bello - Luxury Resort Hotel in Bhowali, Nainital</a>.
            </p>
          </div>

          <div className="text-center lg:text-right space-y-1">
            <p className="font-mono text-xs text-[#c9a832]">
              Official Domain: <a href={RESORT_CONTACT.domain} className="hover:underline text-[#FAF9F6]">{RESORT_CONTACT.domain.replace("https://", "")}</a>
            </p>
            <p className="text-[10px] text-[#FAF9F6]/40 font-mono">Conversion Optimized WhatsApp Direct Reservations</p>
          </div>
        </div>

      </div>
    </footer>
  );
}
