import React from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { generateWhatsAppLink } from "../data";
import resortLuxuryHeroImg from "../assets/images/resort_mukteshwar_luxury_hero_1782031089955.jpg";
import LazyImage from "./LazyImage";
import { trackAdsConversion } from "../utils/analytics";

export default function Hero() {
  const handleHeroBookingClick = () => {
    trackAdsConversion("generate_lead", "booking", "hero_whatsapp_booking");
  };

  return (
    <header className="relative min-h-screen flex items-center justify-center bg-[#1B3322] overflow-hidden first-letter:">
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
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-12">
        {/* Small Tagline */}
        <div className="inline-flex items-center space-x-1.5 bg-[#FAF9F6]/10 backdrop-blur-sm border border-[#FAF9F6]/15 px-3.5 py-1.5 rounded-full mb-6">
          <span className="w-2 h-2 rounded-full bg-[#c9a832] animate-pulse" />
          <span className="text-xs font-mono uppercase tracking-widest text-[#FAF9F6]">
            4-Star Alpine Luxury Sanctuary · Mukteshwar
          </span>
        </div>

        {/* Master Heading */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#FAF9F6] mb-6 leading-[1.08]">
          Experience Tranquility at <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FAF9F6] via-[#c9a832] to-[#FAF9F6]">
            Whispering Pines Resort
          </span>
          <span className="block text-xl sm:text-2xl md:text-3xl font-light font-sans tracking-wide text-[#FAF9F6]/90 mt-2">
            By Casa De Bello · Mukteshwar
          </span>
        </h1>

        {/* Sub-copy block */}
        <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-[#FAF9F6]/85 font-sans font-light leading-relaxed mb-10 px-2">
          A premium 4-star luxury boutique resort nestled high in the Mukteshwar hills. 
          Surround yourself with sweet orchards, cozy custom fireplaces, and breathtaking 180-degree panoramas 
          of the majestic Himalayan peaks.
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
            High Speed Fiber Internet
          </span>
        </div>

        {/* Double Primary Actions Header */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto">
          <a
            href={generateWhatsAppLink("Entire Cottage")}
            target="_blank"
            rel="noreferrer"
            onClick={handleHeroBookingClick}
            className="w-full sm:w-auto bg-[#c9a832] hover:bg-[#A6875D] text-[#1B3322] hover:text-[#FAF9F6] px-8 py-4 font-semibold text-sm uppercase tracking-wider rounded-sm shadow-md hover:shadow-xl flex items-center justify-center transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Instantly Book via WhatsApp
            <ArrowUpRight className="w-4 h-4 ml-1.5" />
          </a>
          <a
            href="#rooms"
            className="w-full sm:w-auto bg-transparent hover:bg-[#FAF9F6]/5 text-[#FAF9F6] border border-[#FAF9F6]/30 hover:border-[#FAF9F6]/80 px-8 py-4 font-semibold text-sm uppercase tracking-wider rounded-sm flex items-center justify-center transition-all duration-300"
          >
            Explore Accommodations
          </a>
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
