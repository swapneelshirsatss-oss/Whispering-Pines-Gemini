import React from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { BOOKING_ENGINE_URL } from "../data";
import resortLuxuryHeroImg from "../assets/images/Whispering-pines-balcony-view-nanital.avif?url";
import LazyImage from "./LazyImage";
import { trackAdsConversion } from "../utils/analytics";


interface HeroProps {
  optimizedImage?: string;
  optimizedMobileImage?: string;
}

export default function Hero({ optimizedImage, optimizedMobileImage }: HeroProps = {}) {
  const handleHeroBookingClick = () => {
    trackAdsConversion("generate_lead", "booking", "hero_whatsapp_booking");
  };

  const mainHeroSrc = optimizedImage || resortLuxuryHeroImg;

  return (
    <header className="relative min-h-screen flex items-center justify-center bg-[#1B3322] overflow-hidden">
      {/* Decorative Overlays for Rich Contrast */}
      <div className="absolute inset-0 z-0">
        <LazyImage
          src={mainHeroSrc}
          mobileSrc={optimizedMobileImage}
          alt="Whispering Pines Resort luxury 4-star mountain hotel exterior overlooking Himalayan snow peaks in Mukteshwar"
          className="w-full h-full object-cover opacity-45 scale-105"
          referrerPolicy="no-referrer"
          placeholderColor="#1B3322"
          priority
        />
        {/* Organic Vignettes */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B3322] via-[#1B3322]/50 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#FAF9F6] to-transparent pointer-events-none" />
      </div>

      {/* Main Structural Content Grid */}
      <div 
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-12 animate-fade-in"
      >
        {/* Small Tagline */}
        <div className="inline-flex items-center space-x-2 bg-[#1B3322]/40 backdrop-blur-md border border-[#FAF9F6]/20 px-4 py-2 rounded-full mb-8">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#FAF9F6]">
            Premium Alpine Luxury • Mukteshwar
          </span>
        </div>

        {/* Master Heading */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-[#FAF9F6] mb-6 leading-tight drop-shadow-lg max-w-5xl mx-auto">
          The Best Resort in Ramgarh <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FAF9F6] via-[#c9a832] to-[#FAF9F6] font-semibold italic text-3xl sm:text-4xl md:text-5xl lg:text-5xl block mt-3 sm:mt-4">
            with 180° Himalayan Views & Private Orchards
          </span>
        </h1>
        
        {/* Sub-copy block */}
        <p id="speakable-hero-intro" className="max-w-2xl mx-auto text-lg sm:text-xl text-[#FAF9F6]/90 font-sans font-light leading-relaxed mb-10 drop-shadow-md">
          Looking for the best resort in Ramgarh? Experience a premium mountain getaway near Nainital & Mukteshwar at Whispering Pines by Casa De Bello (formerly Clarks Exotica). Enjoy private fruit orchards, cozy fireplace rooms, and breathtaking 180° Himalayan panoramas. Book direct on WhatsApp for our best price guaranteed.
        </p>

        {/* Highlight Quick Badges */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-12 text-sm text-[#FAF9F6]/90 font-mono">
          <span className="flex items-center">
            <Check className="w-4 h-4 text-[#c9a832] mr-1.5" />
            180° Himalayan Peaks
          </span>
          <span className="flex items-center">
            <Check className="w-4 h-4 text-[#c9a832] mr-1.5" />
            Cozy Wood Fireplaces
          </span>
          <span className="flex items-center">
            <Check className="w-4 h-4 text-[#c9a832] mr-1.5" />
            Luxury Private Villas
          </span>
        </div>

        {/* Double Primary Actions Header */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 max-w-lg mx-auto">
          <a
            href={BOOKING_ENGINE_URL}
            target="_blank"
            rel="noreferrer"
            onClick={handleHeroBookingClick}
            className="w-full sm:w-auto bg-[#c9a832] hover:bg-[#FAF9F6] text-[#1B3322] hover:text-[#1B3322] px-8 py-4 font-mono text-[11px] font-semibold uppercase tracking-[0.15em] transition-all duration-300 flex items-center justify-center border border-[#c9a832] hover:border-[#FAF9F6]"
          >
            Check Availability
            <ArrowUpRight className="w-4 h-4 ml-2 opacity-80" />
          </a>
          <a
            href="#rooms"
            className="w-full sm:w-auto bg-transparent hover:bg-[#FAF9F6]/10 text-[#FAF9F6] border border-[#FAF9F6]/40 hover:border-[#FAF9F6] px-8 py-4 font-mono text-[11px] font-semibold uppercase tracking-[0.15em] transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
          >
            Explore Suites
          </a>
        </div>

        {/* Trust & Social Proof */}
        <div className="mt-10 flex flex-col items-center justify-center">
          <div className="inline-flex items-center gap-3 bg-[#1B3322]/95 backdrop-blur-lg border-2 border-[#c9a832] px-6 py-3 rounded-full shadow-2xl hover:bg-[#1B3322] transition-all transform hover:scale-105">
            <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            <div className="flex items-center gap-2 text-sm sm:text-base font-sans">
              <strong className="text-[#c9a832] font-bold text-base sm:text-lg tracking-wide">4.6★</strong>
              <span className="font-bold text-white tracking-wide">(400+ Google Reviews)</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 hidden md:block z-20">
        <a href="#about" aria-label="Scroll down to details" className="flex flex-col items-center text-[#FAF9F6]/80 hover:text-[#c9a832] transition-colors">
          <div className="w-5 h-8 border-2 border-[#c9a832]/60 rounded-full flex items-start justify-center p-1 bg-[#1B3322]/40 backdrop-blur-sm">
            <div className="w-1 h-2 bg-[#c9a832] rounded-full animate-bounce mt-1" />
          </div>
        </a>
      </div>
    </header>
  );
}
