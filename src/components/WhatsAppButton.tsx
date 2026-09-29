import React, { useState } from 'react';
import { MessageCircle, Phone, Sparkles } from 'lucide-react';
import { trackAdsConversion } from '../utils/analytics';

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  const handleWhatsAppClick = (source: string) => {
    trackAdsConversion("generate_lead", "booking", source);
  };

  const handleCallClick = () => {
    trackAdsConversion("phone_call_click", "engagement", "sticky_mobile_phone_call");
  };

  return (
    <>
      {/* Luxury Mobile Sticky Dual-Action Concierge Bar */}
      <div
        className="fixed bottom-0 left-0 w-full z-50 md:hidden bg-[#1B3322]/95 backdrop-blur-lg border-t border-[#c9a832]/35 shadow-[0_-8px_24px_rgba(0,0,0,0.35)] px-3 py-2 animate-fade-in-up"
        role="region"
        aria-label="Direct Booking Actions"
      >
        {/* Micro Guarantee Header */}
        <div className="flex items-center justify-center gap-1.5 pb-1.5 text-[10px] font-mono text-[#c9a832] tracking-wider uppercase">
          <Sparkles className="w-3 h-3" />
          <span>Direct Booking: Best Rate + Free Bonfire</span>
        </div>

        {/* 50/50 Split Action Buttons */}
        <div className="grid grid-cols-2 gap-2">
          {/* Action 1: Call Front Desk (Anurra Warm Terracotta Tone) */}
          <a
            href="tel:+917505029696"
            onClick={handleCallClick}
            className="flex items-center justify-center gap-2 bg-[#C27847] hover:bg-[#b06a3c] active:bg-[#9c5a30] text-[#FAF9F6] border border-[#C27847]/40 rounded-xl py-2.5 px-2 text-xs font-mono font-semibold uppercase tracking-wider transition-all shadow-sm"
            title="Call Whispering Pines Direct Front Desk"
          >
            <Phone className="w-3.5 h-3.5 text-white" />
            <span>Call Resort</span>
          </a>

          {/* Action 2: WhatsApp VIP Booking (Authentic WhatsApp Branding) */}
          <a
            href="https://wa.me/917505029696?text=Hi!%20I'm%20planning%20a%20stay%20at%20Whispering%20Pines%20Resort%20Mukteshwar.%20Please%20share%20availability%20and%20direct%20booking%20best%20rates."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleWhatsAppClick("sticky_mobile_whatsapp")}
            className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] active:scale-[0.98] text-white rounded-xl py-2.5 px-2 text-xs font-mono font-bold uppercase tracking-wider shadow-md transition-all relative overflow-hidden"
          >
            <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.116.554 4.1 1.523 5.823L0 24l6.344-1.498A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.792 9.792 0 01-5.002-1.374l-.359-.213-3.765.889.953-3.676-.234-.376A9.794 9.794 0 012.182 12C2.182 6.574 6.574 2.182 12 2.182S21.818 6.574 21.818 12 17.426 21.818 12 21.818z"/>
            </svg>
            <span>WhatsApp</span>
            <span className="w-2 h-2 rounded-full bg-white animate-ping absolute top-2 right-2 opacity-75" />
          </a>
        </div>
      </div>

      {/* Desktop Floating Concierge Pill */}
      <aside 
        className="fixed bottom-6 right-6 z-50 hidden md:flex items-center group"
        aria-label="Floating Concierge"
      >
        <a
          href="https://wa.me/917505029696?text=Hi!%20I'm%20planning%20a%20stay%20at%20Whispering%20Pines%20Resort%20Mukteshwar.%20Please%20share%20availability%20and%20direct%20booking%20best%20rates."
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => handleWhatsAppClick("desktop_floating_whatsapp")}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="flex items-center gap-3 bg-[#1B3322] hover:bg-[#2A4832] text-[#FAF9F6] border border-[#c9a832]/40 hover:border-[#c9a832] px-4 py-3 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105"
          title="Chat directly with Whispering Pines Resort Concierge"
        >
          {/* Animated WhatsApp Icon Badge */}
          <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-[#25D366] text-white shadow-sm shrink-0">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.116.554 4.1 1.523 5.823L0 24l6.344-1.498A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.792 9.792 0 01-5.002-1.374l-.359-.213-3.765.889.953-3.676-.234-.376A9.794 9.794 0 012.182 12C2.182 6.574 6.574 2.182 12 2.182S21.818 6.574 21.818 12 17.426 21.818 12 21.818z"/>
            </svg>
            <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#25D366] border border-white" />
            </span>
          </div>

          {/* Text Details */}
          <div className="flex flex-col text-left pr-1">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#c9a832]">
              Instant Concierge
            </span>
            <span className="text-xs font-sans font-medium text-[#FAF9F6]">
              Book Direct & Save 15%
            </span>
          </div>
        </a>
      </aside>
    </>
  );
}

