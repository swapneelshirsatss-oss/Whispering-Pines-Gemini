import React from "react";
import { MapPin, Phone, Mail, ArrowUpRight, ExternalLink } from 'lucide-react';
import { RESORT_CONTACT } from "../data";
import Logo from "./Logo";

export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1B3322] text-[#FAF9F6] pt-16 pb-12 border-t border-[#c9a832]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid blocks */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-[#FAF9F6]/10">
          
          {/* Column 1: Brand & Bio */}
          <div className="md:col-span-5 space-y-4">
            <Logo />
            <div className="pt-1">
              <span className="text-xs font-mono text-[#c9a832] uppercase tracking-widest block">
                Casa De Bello - Whispering Pines
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#FAF9F6]/80 font-sans leading-relaxed max-w-sm">
              Premium luxury villas offered by Whispering Pines by Casa De Bello in the scenic heights of Malla Ramgarh. Wake up to 
              organic orchards, warm custom fireplaces, and 180-degree panoramas of the historic Nanda Devi snow range.
            </p>
            {RESORT_CONTACT.socials && (
              <div className="flex items-center gap-4 pt-2">
                {RESORT_CONTACT.socials.facebook && (
                  <a href={RESORT_CONTACT.socials.facebook} target="_blank" rel="noopener noreferrer" className="text-[#FAF9F6]/60 hover:text-[#c9a832] transition-colors text-xs font-bold tracking-widest font-mono" aria-label="Facebook">
                    FB
                  </a>
                )}
                {RESORT_CONTACT.socials.instagram && (
                  <a href={RESORT_CONTACT.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-[#FAF9F6]/60 hover:text-[#c9a832] transition-colors text-xs font-bold tracking-widest font-mono" aria-label="Instagram">
                    IG
                  </a>
                )}
                {RESORT_CONTACT.socials.twitter && (
                  <a href={RESORT_CONTACT.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-[#FAF9F6]/60 hover:text-[#c9a832] transition-colors text-xs font-bold tracking-widest font-mono" aria-label="Twitter">
                    TW
                  </a>
                )}
                {RESORT_CONTACT.socials.youtube && (
                  <a href={RESORT_CONTACT.socials.youtube} target="_blank" rel="noopener noreferrer" className="text-[#FAF9F6]/60 hover:text-[#c9a832] transition-colors text-xs font-bold tracking-widest font-mono" aria-label="Youtube">
                    YT
                  </a>
                )}
                {RESORT_CONTACT.socials.tripadvisor && (
                  <a href={RESORT_CONTACT.socials.tripadvisor} target="_blank" rel="noopener noreferrer" className="text-[#FAF9F6]/60 hover:text-[#c9a832] transition-colors text-xs font-bold tracking-widest font-mono" aria-label="TripAdvisor">
                    TA
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Column 2: Location and Contact parameters */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#c9a832] font-bold">
              Estate Location & Contact
            </h4>
            <div className="space-y-3.5 text-xs sm:text-sm font-sans text-[#FAF9F6]/85">
              <a
                href={RESORT_CONTACT.gmapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start hover:text-[#c9a832] transition-colors"
              >
                <MapPin className="w-4 h-4 text-[#c9a832] mr-2 shrink-0 mt-0.5" />
                <span>{RESORT_CONTACT.location}</span>
              </a>
              <a
                href={`tel:${RESORT_CONTACT.phone}`}
                className="flex items-center hover:text-[#c9a832] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#c9a832] mr-2 shrink-0" />
                <span>{RESORT_CONTACT.phone}</span>
              </a>

              <a
                href={`mailto:${RESORT_CONTACT.email}`}
                className="flex items-center hover:text-[#c9a832] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#c9a832] mr-2 shrink-0" />
                <span>{RESORT_CONTACT.email}</span>
              </a>
            </div>
          </div>

          {/* Column 3: Navigation quick links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#c9a832] font-bold">
              Explore Pages
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm font-sans text-[#FAF9F6]/80">
              <a href="/" data-astro-prefetch="hover" className="hover:text-[#c9a832] transition-colors">Home</a>
              <a href="/about-whispering-pines-resort-ramgarh" data-astro-prefetch="hover" className="hover:text-[#c9a832] transition-colors">About Us</a>
              <a href="/suites-cottages-ramgarh-resort" data-astro-prefetch="hover" className="hover:text-[#c9a832] transition-colors">Rooms & Suites</a>
              <a href="/private-villas-near-nainital" data-astro-prefetch="hover" className="hover:text-[#c9a832] transition-colors">Premium Villas</a>
              <a href="/resort-amenities-mukteshwar" data-astro-prefetch="hover" className="hover:text-[#c9a832] transition-colors">Amenities</a>
              <a href="/resort-services-ramgarh" data-astro-prefetch="hover" className="hover:text-[#c9a832] transition-colors">Services</a>
              <a href="/things-to-do-near-mukteshwar" data-astro-prefetch="hover" className="hover:text-[#c9a832] transition-colors">Local Experiences</a>
              <a href="/gallery" data-astro-prefetch="hover" className="hover:text-[#c9a832] transition-colors">Gallery</a>
              <a href="/reviews" data-astro-prefetch="hover" className="hover:text-[#c9a832] transition-colors">Guest Reviews</a>
              <a href="/blog" data-astro-prefetch="hover" className="hover:text-[#c9a832] transition-colors">Journal</a>
            </div>
          </div>

        </div>

        {/* Map Full Width Row */}
        <div className="pt-8 pb-8 border-b border-[#FAF9F6]/10">
          <h4 className="text-xs font-mono uppercase tracking-widest text-[#c9a832] font-bold mb-4">
              Find Us on the Map
          </h4>
          <div className="w-full h-64 md:h-80 rounded overflow-hidden shadow-lg border border-[#FAF9F6]/10">
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

        {/* Footer bottom legal copyrights panel */}
        <div className="mt-8 flex flex-col lg:flex-row items-center justify-between gap-6 text-xs font-sans text-[#FAF9F6]/60 text-center lg:text-left">
          <div className="space-y-2">
            <p>© {currentYear} Whispering Pines Resort Mukteshwar. All Rights Reserved.</p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-[11px]">
              <a href="/privacy-policy" data-astro-prefetch="hover" className="hover:text-[#c9a832] transition-colors">Privacy Policy</a>
              <span>|</span>
              <a href="/terms" data-astro-prefetch="hover" className="hover:text-[#c9a832] transition-colors">Terms & Conditions</a>
              <span>|</span>
              <a href="/sitemap" data-astro-prefetch="hover" className="hover:text-[#c9a832] transition-colors">Sitemap</a>
            </div>
            <p className="text-[10px] mt-2 text-white/40 max-w-2xl">
              Constructed as Casa De Bello - Whispering Pines. Malla Ramgarh Rural Estate. Operated by <a href="https://casadebello.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#c9a832] transition-colors">Casa De Bello - Luxury Resort Hotel in Bhowali, Nainital</a>.
            </p>
          </div>
          <div className="text-center lg:text-right">
            <p className="font-mono text-[#c9a832]">
              Domain Direct: <a href={RESORT_CONTACT.domain} className="hover:underline">{RESORT_CONTACT.domain.replace("https://", "")}</a>
            </p>
            <p className="text-[9px] mt-1 text-white/30">Managed entirely with secure conversion-optimized WhatsApp click-to-chat links.</p>
          </div>
        </div>

      </div>
    </footer>
  );
}
