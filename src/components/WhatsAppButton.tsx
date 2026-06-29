import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { trackAdsConversion } from '../utils/analytics';

export default function WhatsAppButton() {
  const handleClick = () => {
    trackAdsConversion("generate_lead", "engagement", "whatsapp_chat");
  };

  return (
    <motion.a
      href="https://wa.me/917505029696"
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center p-4 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300 transition-colors"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle className="w-8 h-8 md:w-10 md:h-10" />
      <span className="absolute -top-1 -right-1 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500 border-2 border-white"></span>
      </span>
    </motion.a>
  );
}
