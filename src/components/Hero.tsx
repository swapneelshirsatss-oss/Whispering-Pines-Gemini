import React from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { BOOKING_ENGINE_URL } from "../data";
import resortLuxuryHeroImg from "../assets/images/Whispering-pines-balcony-view-nanital.webp?url";
import LazyImage from "./LazyImage";
import { trackAdsConversion } from "../utils/analytics";


export default function Hero() {
  const handleHeroBookingClick = () => {
    trackAdsConversion("generate_lead", "booking", "hero_whatsapp_booking");
  };

  return (
    <header className="relative min-h-screen flex items-center justify-center bg-[#1B3322] overflow-hidden">
      {/* Decorative Overlays for Rich Contrast */}
      <div className="absolute inset-0 z-0">
        <LazyImage
          src={resortLuxuryHeroImg}
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
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-[#FAF9F6]/90 font-sans font-light leading-relaxed mb-10 drop-shadow-md">
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
        <div className="mt-12 flex flex-col items-center justify-center space-y-3 opacity-90">
          <div className="flex -space-x-3 overflow-hidden p-1">
            <img className="inline-block h-8 w-8 rounded-full border-2 border-[#1B3322]" src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=100" alt="Happy guest"/>
            <img className="inline-block h-8 w-8 rounded-full border-2 border-[#1B3322]" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=100" alt="Happy guest"/>
            <img className="inline-block h-8 w-8 rounded-full border-2 border-[#1B3322]" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100" alt="Happy guest"/>
            <img className="inline-block h-8 w-8 rounded-full border-2 border-[#1B3322]" src="https://images.unsplash.com/photo-1618641986557-1ecd230959aa?auto=format&fit=crop&q=80&w=100" alt="Happy guest"/>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FAF9F6] border-2 border-[#1B3322] text-[#1B3322]">
              <span className="text-[10px] font-bold leading-none">4.9</span>
            </div>
          </div>
          <span className="text-[11px] sm:text-xs font-sans text-[#FAF9F6]/80 tracking-wide text-center">
            <strong className="text-[#c9a832] font-semibold">4.6★</strong> on Google (388 reviews) <span className="mx-1.5 opacity-50">•</span> <strong className="text-[#c9a832] font-semibold">4.9★</strong> across all platforms
          </span>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block z-20">
        <a href="#about" aria-label="Scroll down to details" className="flex flex-col items-center text-[#FAF9F6]/60 hover:text-[#c9a832] transition-colors">
          <span className="text-[10px] font-mono tracking-widest uppercase mb-2">Scroll To Discover</span>
          <div className="w-5 h-8 border border-[#FAF9F6]/50 rounded-full flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-[#c9a832] rounded-full animate-bounce mt-1" />
          </div>
        </a>
      </div>
    </header>
  );
}
