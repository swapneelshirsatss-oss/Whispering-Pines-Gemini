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
          {/* Action 1: Call Front Desk */}
          <a
            href="tel:+917505029696"
            onClick={handleCallClick}
            className="flex items-center justify-center gap-2 bg-[#FAF9F6]/10 hover:bg-[#FAF9F6]/15 active:bg-[#FAF9F6]/20 text-[#FAF9F6] border border-[#FAF9F6]/20 rounded py-2.5 px-2 text-xs font-mono font-semibold uppercase tracking-wider transition-all"
            title="Call Whispering Pines Direct Front Desk"
          >
            <Phone className="w-3.5 h-3.5 text-[#c9a832]" />
            <span>Call Resort</span>
          </a>

          {/* Action 2: WhatsApp VIP Booking */}
          <a
            href="https://wa.me/917505029696?text=Hi!%20I'm%20planning%20a%20stay%20at%20Whispering%20Pines%20Resort%20Mukteshwar.%20Please%20share%20availability%20and%20direct%20booking%20best%20rates."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleWhatsAppClick("sticky_mobile_whatsapp")}
            className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] active:scale-[0.98] text-white rounded py-2.5 px-2 text-xs font-mono font-bold uppercase tracking-wider shadow-md transition-all relative overflow-hidden"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current" />
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
            <MessageCircle className="w-5 h-5 fill-current" />
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

