import React, { useState, useEffect } from "react";
import { X, Sparkles, ArrowUpRight } from "lucide-react";
import { trackAdsConversion } from "../utils/analytics";

/**
 * Direct-booking offer toast.
 * Replaces the former "recent booking" social-proof popup (which displayed
 * fabricated bookings) with an honest promotional CTA.
 * Component name kept for backward compatibility with existing page imports.
 */

const OFFER_DISCOUNT = "25%";

const WHATSAPP_MESSAGE =
  `Hi Whispering Pines Resort! I'd like to book a stay and claim today's ${OFFER_DISCOUNT} direct booking discount. Please share availability.`;

const WHATSAPP_LINK = `https://wa.me/917505029696?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const DISMISS_KEY = "dismissed_offer_toast";

export default function RecentBookingNotification() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem(DISMISS_KEY)) {
      return;
    }

    // Show the offer after 7 seconds so it doesn't compete with the hero
    const timer = setTimeout(() => setIsVisible(true), 7000);
    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    if (typeof window !== "undefined") {
      sessionStorage.setItem(DISMISS_KEY, "true");
    }
  };

  const handleWhatsAppClick = () => {
    trackAdsConversion("generate_lead", "booking", "offer_toast_whatsapp");
  };

  if (!isVisible) return null;

  return (
    <aside
      className="fixed bottom-24 md:bottom-6 left-3 sm:left-6 z-40 w-[calc(100%-1.5rem)] max-w-xs bg-[#1B3322] text-[#FAF9F6] rounded-lg border border-[#c9a832]/40 shadow-luxury-lg p-4 pointer-events-auto animate-fade-in-up"
      aria-label="Direct booking offer"
    >
      <button
        onClick={handleDismiss}
        className="absolute top-2 right-2 text-[#FAF9F6]/50 hover:text-[#FAF9F6] transition-colors p-1"
        aria-label="Dismiss offer"
      >
        <X className="w-3.5 h-3.5" />
      </button>

      <span className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider font-semibold text-[#1B3322] bg-[#c9a832] px-2 py-0.5 rounded-sm">
        <Sparkles className="w-2.5 h-2.5" />
        Today Only
      </span>

      <p className="mt-2.5 font-display text-lg font-bold leading-snug pr-4">
        Book Now &amp; Get {OFFER_DISCOUNT} Off
      </p>
      <p className="mt-1 text-[11px] text-[#FAF9F6]/75 leading-relaxed">
        Book direct with the resort to claim your discount.
      </p>

      <div className="mt-3.5 flex flex-col gap-2">
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleWhatsAppClick}
          className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] active:scale-[0.98] text-white rounded-md py-2.5 px-3 text-xs font-mono font-bold uppercase tracking-wider shadow-md transition-all"
        >
          Book Now on WhatsApp
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
        <a
          href="/book-now/"
          className="text-center text-[10px] font-mono uppercase tracking-wider text-[#c9a832] hover:text-[#FAF9F6] underline underline-offset-2 transition-colors"
        >
          See all direct booking perks →
        </a>
      </div>
    </aside>
  );
}
