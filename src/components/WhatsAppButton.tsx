import React from 'react';
import { MessageCircle } from 'lucide-react';

import { trackAdsConversion } from '../utils/analytics';

export default function WhatsAppButton() {
  const handleClick = () => {
    trackAdsConversion("generate_lead", "engagement", "whatsapp_chat");
  };

  return (
    <>
      {/* Mobile Sticky Footer CTA */}
      <div
        className="fixed bottom-0 left-0 w-full z-50 md:hidden bg-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] border-t border-gray-200 p-3 flex items-center justify-between animate-fade-in-up"
      >
        <div className="flex flex-col">
          <span className="text-xs font-bold text-gray-800 uppercase tracking-wider">Book Direct</span>
          <span className="text-[10px] text-gray-500">Save 20% on your stay</span>
        </div>
        <a
          href="https://wa.me/917505029696?text=Hi!%20I'm%20interested%20in%20booking%20a%20stay%20at%20Whispering%20Pines."
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
          className="bg-[#25D366] text-white px-5 py-2.5 rounded shadow flex items-center text-sm font-bold uppercase tracking-wider active:scale-95 transition-transform"
        >
          <MessageCircle className="w-4 h-4 mr-2" />
          WhatsApp
        </a>
      </div>

      {/* Desktop Floating Action Button */}
      <a
        href="https://wa.me/917505029696"
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="fixed bottom-6 right-6 z-50 hidden md:flex items-center justify-center p-4 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-green-600 hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-green-300 transition-all duration-300 animate-fade-in"
        aria-label="Chat with us on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-[#25D366] border-2 border-white"></span>
        </span>
      </a>
    </>
  );
}
