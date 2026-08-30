import React from "react";
import { MapPin, Phone, Mail, ArrowUpRight, ShieldCheck } from 'lucide-react';
import Logo from "./Logo";
import { RESORT_CONTACT } from "../data";

export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1B3322] text-[#FAF9F6] pt-16 pb-12 border-t border-[#c9a832]/20 relative overflow-hidden">
      {/* Ambient Background Gradient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-[#c9a832]/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#FAF9F6]/10">
          
          {/* Column 1: Brand & Bio (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <Logo />
            <div>
              <span className="text-xs font-mono text-[#c9a832] uppercase tracking-[0.2em] block font-medium">
                Casa De Bello • Whispering Pines
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#FAF9F6]/75 font-sans leading-relaxed">
              A luxury 25-room boutique Himalayan retreat nestled in the fruit bowl of Kumaon at 1,780m altitude. Offering 180° panoramic views of Nanda Devi and Trishul peaks, private orchards, and heated living quarters.
            </p>
            
            {/* Social Media Icon Badges */}
            {RESORT_CONTACT.socials && (
              <div className="pt-2">
                <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-[#c9a832] block mb-2 font-semibold">
                  Official Channels
                </span>
                <div className="flex items-center space-x-2.5">
                  {RESORT_CONTACT.socials.facebook && (
                    <a
                      href={RESORT_CONTACT.socials.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-[#FAF9F6]/5 hover:bg-[#c9a832] text-[#FAF9F6] hover:text-[#1B3322] border border-[#FAF9F6]/15 hover:border-[#c9a832] transition-all duration-300 flex items-center justify-center shadow-sm hover:scale-110"
                      aria-label="Facebook"
                      title="Follow Whispering Pines on Facebook"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.593 0 9 1.582 9 4.615V8z"/>
                      </svg>
                    </a>
                  )}
                  {RESORT_CONTACT.socials.instagram && (
                    <a
                      href={RESORT_CONTACT.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-[#FAF9F6]/5 hover:bg-[#c9a832] text-[#FAF9F6] hover:text-[#1B3322] border border-[#FAF9F6]/15 hover:border-[#c9a832] transition-all duration-300 flex items-center justify-center shadow-sm hover:scale-110"
                      aria-label="Instagram"
                      title="Follow Whispering Pines on Instagram"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                  )}
                  {RESORT_CONTACT.socials.youtube && (
                    <a
                      href={RESORT_CONTACT.socials.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-[#FAF9F6]/5 hover:bg-[#c9a832] text-[#FAF9F6] hover:text-[#1B3322] border border-[#FAF9F6]/15 hover:border-[#c9a832] transition-all duration-300 flex items-center justify-center shadow-sm hover:scale-110"
                      aria-label="YouTube"
                      title="Subscribe to Whispering Pines on YouTube"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    </a>
                  )}
                  {RESORT_CONTACT.socials.tripadvisor && (
                    <a
                      href={RESORT_CONTACT.socials.tripadvisor}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-[#FAF9F6]/5 hover:bg-[#c9a832] text-[#FAF9F6] hover:text-[#1B3322] border border-[#FAF9F6]/15 hover:border-[#c9a832] transition-all duration-300 flex items-center justify-center shadow-sm hover:scale-110"
                      aria-label="TripAdvisor"
                      title="Review Whispering Pines on TripAdvisor"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-3.5 14a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0-3.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 3.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0-3.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm3.3-3.9c-.8.8-1.9 1.4-3.1 1.4-1.7 0-3.2-1-3.9-2.5-.7 1.5-2.2 2.5-3.9 2.5-1.2 0-2.3-.6-3.1-1.4L3.5 13H2.1c0-.4.3-.7.7-.7h1.4c.5-2.3 2.5-4.1 5-4.1 1.5 0 2.9.6 3.8 1.7.9-1.1 2.3-1.7 3.8-1.7 2.5 0 4.5 1.8 5 4.1h1.4c.4 0 .7.3.7.7h-1.4l-1.3-1.4z"/>
                      </svg>
                    </a>
                  )}
                </div>

                {/* Google Preferred Source Button */}
                <div className="pt-3">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#c9a832] block mb-1.5 font-semibold">
                    Google Preferred Source
                  </span>
                  <div 
                    className="g-preferred-source inline-block min-h-[36px]" 
                    {...{ "google-add-preferred-source-btn": "" }} 
                    data-domain="whisperingpinesresort.in" 
                    data-theme="dark" 
                    data-lang="en"
                  ></div>
                </div>
              </div>
            )}
          </div>

          {/* Column 2: Explore Pages & Target Personas (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#c9a832] font-semibold border-b border-[#c9a832]/30 pb-2 inline-block">
              Explore & Curated Stays
            </h4>
            <div className="grid grid-cols-2 gap-x-2 gap-y-1.5 text-xs font-sans text-[#FAF9F6]/80 pt-1">
              <a href="/" data-astro-prefetch="hover" className="hover:text-[#c9a832] transition-colors flex items-center gap-1.5 group"><span className="w-1 h-1 bg-[#c9a832] rounded-full group-hover:scale-125 transition-transform"></span>Home</a>
              <a href="/about-whispering-pines-resort-ramgarh/" data-astro-prefetch="hover" className="hover:text-[#c9a832] transition-colors flex items-center gap-1.5 group"><span className="w-1 h-1 bg-[#c9a832] rounded-full group-hover:scale-125 transition-transform"></span>About Us</a>
              <a href="/suites-cottages-ramgarh-resort/" data-astro-prefetch="hover" className="hover:text-[#c9a832] transition-colors flex items-center gap-1.5 group"><span className="w-1 h-1 bg-[#c9a832] rounded-full group-hover:scale-125 transition-transform"></span>Rooms & Suites</a>
              <a href="/private-villas-near-nainital/" data-astro-prefetch="hover" className="hover:text-[#c9a832] transition-colors flex items-center gap-1.5 group"><span className="w-1 h-1 bg-[#c9a832] rounded-full group-hover:scale-125 transition-transform"></span>3-BHK Villa</a>
              <a href="/resort-amenities-mukteshwar/" data-astro-prefetch="hover" className="hover:text-[#c9a832] transition-colors flex items-center gap-1.5 group"><span className="w-1 h-1 bg-[#c9a832] rounded-full group-hover:scale-125 transition-transform"></span>Amenities</a>
              <a href="/things-to-do-near-mukteshwar/" data-astro-prefetch="hover" className="hover:text-[#c9a832] transition-colors flex items-center gap-1.5 group"><span className="w-1 h-1 bg-[#c9a832] rounded-full group-hover:scale-125 transition-transform"></span>Local Sights</a>
              <a href="/gallery/" data-astro-prefetch="hover" className="hover:text-[#c9a832] transition-colors flex items-center gap-1.5 group"><span className="w-1 h-1 bg-[#c9a832] rounded-full group-hover:scale-125 transition-transform"></span>Gallery</a>
              <a href="/reviews/" data-astro-prefetch="hover" className="hover:text-[#c9a832] transition-colors flex items-center gap-1.5 group"><span className="w-1 h-1 bg-[#c9a832] rounded-full group-hover:scale-125 transition-transform"></span>Reviews (4.6★)</a>
              <a href="/blog/" data-astro-prefetch="hover" className="hover:text-[#c9a832] transition-colors flex items-center gap-1.5 group"><span className="w-1 h-1 bg-[#c9a832] rounded-full group-hover:scale-125 transition-transform"></span>Travel Blog</a>
              <a href="/contact-whispering-pines-resort-mukteshwar/" data-astro-prefetch="hover" className="hover:text-[#c9a832] transition-colors flex items-center gap-1.5 group"><span className="w-1 h-1 bg-[#c9a832] rounded-full group-hover:scale-125 transition-transform"></span>Contact</a>
            </div>

            {/* Target Customer Personas Silos */}
            <div className="pt-3 border-t border-[#FAF9F6]/10 space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-[#c9a832] block font-semibold">
                Curated For Your Travel Style
              </span>
              <div className="space-y-1 text-[11px] text-[#FAF9F6]/75">
                <a href="/private-villas-near-nainital/" className="block hover:text-[#c9a832] transition-colors">
                  🏡 <strong className="text-[#FAF9F6]">Urban Families & Kids:</strong> 3-BHK Villa (10 Pax) & Heated Rooms
                </a>
                <a href="/about-whispering-pines-resort-ramgarh/" className="block hover:text-[#c9a832] transition-colors">
                  💻 <strong className="text-[#FAF9F6]">Remote Workcations:</strong> 150 Mbps Fiber & Extended Stay Rates
                </a>
                <a href="/resort-amenities-mukteshwar/" className="block hover:text-[#c9a832] transition-colors">
                  🐾 <strong className="text-[#FAF9F6]">Pet-Friendly Holidays:</strong> Private Enclosed Orchard Lawns
                </a>
                <a href="/clarks-exotica-resort-ramgarh-mukteshwar/" className="block hover:text-[#c9a832] transition-colors">
                  🌲 <strong className="text-[#FAF9F6]">Clarks Exotica Legacy:</strong> Upgraded Heritage Continuation
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Location Corridors & Drive-To Hubs (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#c9a832] font-semibold border-b border-[#c9a832]/30 pb-2 inline-block">
              Drive-To Corridors (6–8h)
            </h4>
            
            {/* Primary Feeder Cities */}
            <div className="space-y-2 text-xs text-[#FAF9F6]/80 pt-1 font-sans">
              <a href="/contact-whispering-pines-resort-mukteshwar/#distance-matrix" className="block hover:text-[#c9a832] transition-colors">
                🚗 <strong className="text-[#FAF9F6]">Delhi & South Delhi:</strong> 340 km • 6.5 hrs via NH 9
              </a>
              <a href="/contact-whispering-pines-resort-mukteshwar/#distance-matrix" className="block hover:text-[#c9a832] transition-colors">
                🚗 <strong className="text-[#FAF9F6]">Gurugram & Golf Course Rd:</strong> 360 km • 7.0 hrs
              </a>
              <a href="/contact-whispering-pines-resort-mukteshwar/#distance-matrix" className="block hover:text-[#c9a832] transition-colors">
                🚗 <strong className="text-[#FAF9F6]">Noida & Gr. Noida:</strong> 330 km • 6.0 hrs via DME
              </a>
              <a href="/contact-whispering-pines-resort-mukteshwar/#distance-matrix" className="block hover:text-[#c9a832] transition-colors">
                🚗 <strong className="text-[#FAF9F6]">Ghaziabad & Meerut:</strong> 310 km • 5.5 hrs
              </a>
              <a href="/contact-whispering-pines-resort-mukteshwar/#distance-matrix" className="block hover:text-[#c9a832] transition-colors">
                🚗 <strong className="text-[#FAF9F6]">Faridabad & Agra:</strong> 370 km • 7.5 hrs
              </a>
              <a href="/contact-whispering-pines-resort-mukteshwar/#distance-matrix" className="block hover:text-[#c9a832] transition-colors">
                🚗 <strong className="text-[#FAF9F6]">Lucknow & Kanpur:</strong> 380 km • 7.5 hrs via Bareilly
              </a>
              <a href="/contact-whispering-pines-resort-mukteshwar/#distance-matrix" className="block hover:text-[#c9a832] transition-colors">
                🚗 <strong className="text-[#FAF9F6]">Chandigarh & Tri-City:</strong> 420 km • 8.5 hrs
              </a>
            </div>

            {/* Secondary Metro Connections */}
            <div className="pt-3 border-t border-[#FAF9F6]/10">
              <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-[#c9a832] block mb-1.5 font-semibold">
                Secondary Metros (Air / Rail Hubs)
              </span>
              <p className="text-[11px] text-[#FAF9F6]/70 leading-relaxed">
                <span className="text-[#FAF9F6] font-medium">Mumbai, Bengaluru, Kolkata, Pune, Ahmedabad & Surat:</span> Fly to Pantnagar (PGH) / IGI Airport (DEL) or take Kathgodam Express (43 km).
              </p>
            </div>
          </div>

          {/* Column 4: Global Footer NAP & Verified GBP Entity Card (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#c9a832] font-semibold border-b border-[#c9a832]/30 pb-2 inline-flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#c9a832]" />
              <span>Verified Resort NAP</span>
            </h4>

            {/* Semantic Schema.org / Microdata Address Card matching Google Business Profile */}
            <address 
              className="not-italic space-y-3 text-xs font-sans text-[#FAF9F6]/85 pt-1"
              itemScope
              itemType="https://schema.org/Resort"
            >
              <meta itemProp="url" content="https://whisperingpinesresort.in/" />
              <meta itemProp="priceRange" content="₹₹₹" />
              <meta itemProp="currenciesAccepted" content="INR" />

              {/* 1. Official Entity Name (Strict GBP Match) */}
              <div className="flex items-center gap-2 text-[#FAF9F6] font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#25D366] shrink-0 animate-pulse" title="Open & Accepting Direct Bookings"></span>
                <span itemProp="name" className="font-sans font-bold text-xs sm:text-sm text-[#FAF9F6] leading-snug">
                  Whispering Pines Resort by Casa De Bello
                </span>
              </div>

              {/* 2. Official Postal Address (Strict GBP Match) */}
              <a
                href={RESORT_CONTACT.gmapsCid}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start hover:text-[#c9a832] transition-colors group"
                title="View verified Google Maps location (CID: 8386667112972057918)"
                itemProp="address"
                itemScope
                itemType="https://schema.org/PostalAddress"
              >
                <MapPin className="w-3.5 h-3.5 text-[#c9a832] mr-2 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="leading-relaxed text-[11px] sm:text-xs text-[#FAF9F6]/90 group-hover:text-[#c9a832]">
                  <span itemProp="streetAddress">Malla Ramgarh, Bhowali-Ramgarh-Mukteshwar Rd</span>,{' '}
                  <span itemProp="addressLocality">Mukteshwar</span>,{' '}
                  <span itemProp="addressRegion">Nainital, Uttarakhand</span>{' '}
                  <span itemProp="postalCode">263137</span>
                  <meta itemProp="addressCountry" content="IN" />
                </span>
              </a>

              {/* 3. Official Phone Number (Strict GBP Match: 075050 29696) */}
              <a
                href={`tel:${RESORT_CONTACT.phoneTel || '+917505029696'}`}
                className="flex items-center hover:text-[#c9a832] transition-colors group"
                itemProp="telephone"
                title="Call Whispering Pines Direct Concierge: 075050 29696"
              >
                <Phone className="w-3.5 h-3.5 text-[#c9a832] mr-2 shrink-0 group-hover:scale-110 transition-transform" />
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="font-mono tracking-wide font-semibold text-xs sm:text-sm">075050 29696</span>
                  <span className="text-[10px] font-mono text-[#FAF9F6]/60">(+91 75050 29696)</span>
                </div>
              </a>

              {/* 4. Official Email */}
              <a
                href={`mailto:${RESORT_CONTACT.email}`}
                className="flex items-center hover:text-[#c9a832] transition-colors group"
                itemProp="email"
                title="Email Whispering Pines Reservations"
              >
                <Mail className="w-3.5 h-3.5 text-[#c9a832] mr-2 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-[11px] sm:text-xs">{RESORT_CONTACT.email}</span>
              </a>

              {/* Google Traveler & Google Review Authority Badges */}
              <div className="pt-1 flex flex-wrap items-center gap-2">
                <a
                  href={RESORT_CONTACT.googleTravel}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#FAF9F6]/5 hover:bg-[#FAF9F6]/10 border border-[#FAF9F6]/15 hover:border-[#c9a832] text-[11px] text-[#FAF9F6] transition-all group shadow-sm"
                  title="View Whispering Pines Resort on Google Travel & Google Hotels"
                >
                  <svg className="w-3.5 h-3.5 text-[#4285F4] shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                  <span className="font-medium text-[#FAF9F6]/90">Google Traveler</span>
                </a>
                <a
                  href={RESORT_CONTACT.gmapsCid}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#FAF9F6]/5 hover:bg-[#FAF9F6]/10 border border-[#FAF9F6]/15 hover:border-[#c9a832] text-[11px] text-[#FAF9F6] transition-all shadow-sm"
                  title="Verified Google Business Profile Rating (400+ Reviews)"
                >
                  <span className="text-amber-400 font-bold">★ 4.6</span>
                  <span className="text-[#FAF9F6]/70 font-mono text-[10px]">(400+ Reviews)</span>
                </a>
              </div>

              {/* Direct WhatsApp CTA Button inside Footer */}
              <div className="pt-1.5">
                <a
                  href="https://casadebello-book.whisperingpinesresort.in/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#c9a832] hover:bg-[#FAF9F6] text-[#1B3322] font-mono text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded shadow-md transition-all transform hover:-translate-y-0.5 text-center"
                >
                  <span>WhatsApp Direct Booking</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </address>
          </div>

        </div>

        {/* Estate Map Full Width Row */}
        <div className="py-8 border-b border-[#FAF9F6]/10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#c9a832] font-semibold flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#c9a832]" /> 
              <span>Estate Map & Verified Google Business Profile (GBP)</span>
            </h4>
            <span className="text-[11px] font-mono text-[#FAF9F6]/60">
              Malla Ramgarh, Bhowali-Ramgarh-Mukteshwar Rd, Uttarakhand 263137 • GPS: 29.4262° N, 79.5506° E
            </span>
          </div>
          <div className="w-full h-56 sm:h-72 rounded-xl overflow-hidden shadow-xl border border-[#c9a832]/20">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3475.0886542866456!2d79.5506314!3d29.4262052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a0a3285f1c95a9%3A0x74636d4e06267d3e!2sWhispering%20Pines%20Resort%20by%20casa%20de%20bello!5e0!3m2!1sen!2sin!4v1784812384641!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Whispering Pines Resort by Casa De Bello Google Map"
            >
            </iframe>
          </div>
          <div className="pt-3 flex flex-wrap items-center justify-between gap-3 text-xs text-[#FAF9F6]/70">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#c9a832]"></span>
              <span className="font-mono text-[11px]">Altitude: 1,780m • 180° Nanda Devi & Trishul Himalayan Views</span>
            </div>
            <div className="flex items-center gap-4 text-[11px] font-mono">
              <a href={RESORT_CONTACT.gmapsLink} target="_blank" rel="noopener noreferrer" className="hover:text-[#c9a832] transition-colors underline flex items-center gap-1">
                <span>Get Directions (Google Maps)</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <a href={RESORT_CONTACT.gmapsCid} target="_blank" rel="noopener noreferrer" className="hover:text-[#c9a832] transition-colors underline flex items-center gap-1">
                <span>Google Business Profile (CID)</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Copyrights & Legal Panel */}
        <div className="pt-8 flex flex-col lg:flex-row items-center justify-between gap-6 text-xs font-sans text-[#FAF9F6]/65 text-center lg:text-left">
          <div className="space-y-2">
            <p>© {currentYear} Whispering Pines Resort by Casa De Bello. All Rights Reserved.</p>
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
            <p className="text-[11px] text-[#FAF9F6]/70 pt-0.5">
              Website Developed by <a href="https://growguest.in/" target="_blank" rel="noopener noreferrer" className="text-[#c9a832] hover:underline transition-colors font-medium">Growguest</a>
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
