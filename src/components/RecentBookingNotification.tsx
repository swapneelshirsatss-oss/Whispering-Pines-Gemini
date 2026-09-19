import React, { useState, useEffect } from "react";
import { CheckCircle2, X, Sparkles } from "lucide-react";

interface BookingNotification {
  guest: string;
  room: string;
  nights: string;
  timeAgo: string;
}

const RECENT_BOOKINGS: BookingNotification[] = [
  {
    guest: "Family from Gurugram (NCR)",
    room: "3-BHK Alpine Villa (Entire Estate)",
    nights: "3 nights",
    timeAgo: "18 minutes ago"
  },
  {
    guest: "Couple from South Delhi",
    room: "Deluxe Skylight Attic Suite",
    nights: "2 nights",
    timeAgo: "42 minutes ago"
  },
  {
    guest: "Guests from Chandigarh",
    room: "Family Twin Room with Orchard Lawn",
    nights: "4 nights",
    timeAgo: "1 hour ago"
  }
];

export default function RecentBookingNotification() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Check if dismissed in this session
    if (typeof window !== "undefined" && sessionStorage.getItem("dismissed_booking_toast")) {
      return;
    }

    // Show initial toast after 7 seconds
    const initialTimer = setTimeout(() => {
      setIsVisible(true);
    }, 7000);

    // Auto-cycle through bookings every 20 seconds
    const cycleInterval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % RECENT_BOOKINGS.length);
        setIsVisible(true);
      }, 600);
    }, 22000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(cycleInterval);
    };
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    if (typeof window !== "undefined") {
      sessionStorage.setItem("dismissed_booking_toast", "true");
    }
  };

  const booking = RECENT_BOOKINGS[currentIndex];

  if (!isVisible || !booking) return null;

  return (
    <aside
      className="fixed bottom-20 left-3 sm:left-6 z-40 max-w-sm w-[calc(100%-1.5rem)] sm:w-auto bg-[#FAF9F6] text-[#1B3322] rounded border border-[#c9a832]/30 shadow-luxury-lg p-3.5 flex items-start space-x-3 pointer-events-auto animate-fade-in-up transition-all duration-300"
      aria-label="Recent booking activity"
    >
      {/* Verified Gold Checkmark Badge */}
      <div className="shrink-0 pt-0.5">
        <div className="w-7 h-7 rounded-full bg-[#1B3322]/10 flex items-center justify-center text-[#c9a832]">
          <CheckCircle2 className="w-4 h-4 text-[#1B3322]" />
        </div>
      </div>

      <div className="flex-1 min-w-0 pr-1">
        <div className="flex items-center gap-1.5 mb-0.5">
          <span className="text-[10px] font-mono uppercase tracking-wider text-[#c9a832] font-semibold flex items-center gap-1">
            <Sparkles className="w-2.5 h-2.5" />
            Verified Direct Booking
          </span>
          <span className="text-[10px] text-[#2C3531]/50 font-sans">• {booking.timeAgo}</span>
        </div>
        
        <p className="text-xs font-semibold text-[#1B3322] truncate">
          {booking.guest}
        </p>
        <p className="text-[11px] text-[#2C3531]/80 leading-snug">
          Reserved <span className="font-medium text-[#1B3322]">{booking.room}</span> ({booking.nights})
        </p>

        <div className="mt-2 flex items-center gap-3">
          <a
            href="/book-now/"
            className="text-[10px] font-mono uppercase tracking-wider font-bold text-[#1B3322] hover:text-[#c9a832] underline underline-offset-2 transition-colors"
          >
            Direct Perks & Savings →
          </a>
        </div>
      </div>

      <button
        onClick={handleDismiss}
        className="shrink-0 text-[#2C3531]/40 hover:text-[#1B3322] transition-colors p-1"
        aria-label="Dismiss notification"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </aside>
  );
}

