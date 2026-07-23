import React, { useState, useEffect } from "react";

import { Tag, X, Phone } from "lucide-react";
import { RESORT_CONTACT } from "../data";

export default function RecentBookingNotification() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show notification after 8 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 8000);

    // Auto-hide after 25 seconds of being visible
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 25000);

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div
          className="fixed bottom-24 left-4 z-50 md:bottom-6 md:left-6 max-w-sm w-[calc(100%-2rem)] bg-white rounded-lg shadow-2xl border border-[#c9a832]/30 p-4 flex items-start space-x-3 pointer-events-auto animate-fade-in-up transition-all duration-300"
        >
          <div className="shrink-0 pt-0.5 bg-[#c9a832]/10 p-2 rounded-full">
            <Tag className="w-5 h-5 text-[#c9a832]" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-gray-900">
              Special 25% Discount Applied!
            </p>
            <p className="text-xs text-gray-600 mt-1 leading-snug">
              Claim this exclusive offer within 30 minutes!
            </p>
            <div className="mt-3 flex items-center space-x-2">
              <a
                href={`tel:${RESORT_CONTACT.phone}`}
                className="inline-flex items-center justify-center bg-[#1B3322] hover:bg-[#c9a832] text-white hover:text-[#1B3322] text-[11px] font-mono font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-sm transition-all duration-300 shadow-sm"
              >
                <Phone className="w-3 h-3 mr-1.5" />
                Call Now
              </a>
              <span className="text-[10px] text-red-500 font-medium font-mono animate-pulse">
                Expires in 30 mins
              </span>
            </div>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close notification"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
    </>
  );
}
