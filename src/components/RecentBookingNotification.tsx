import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, X } from "lucide-react";

export default function RecentBookingNotification() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show notification after 8 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 8000);

    // Auto-hide after 12 seconds of being visible
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 20000);

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="fixed bottom-24 left-4 z-50 md:bottom-6 md:left-6 max-w-sm w-[calc(100%-2rem)] bg-white rounded-lg shadow-2xl border border-gray-100 p-3 flex items-start space-x-3 pointer-events-auto"
        >
          <div className="shrink-0 pt-0.5">
            <CheckCircle2 className="w-5 h-5 text-green-500" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-gray-900">
              New Booking!
            </p>
            <p className="text-xs text-gray-600 mt-0.5 leading-snug">
              Someone from Delhi just booked the <span className="font-semibold text-gray-800">Deluxe Cedar Room</span> for 2 nights.
            </p>
            <p className="text-[10px] text-gray-400 mt-1.5 font-mono">
              about 15 minutes ago
            </p>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close notification"
          >
            <X className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
