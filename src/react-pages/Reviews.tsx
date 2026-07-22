import React from "react";
import { motion } from "motion/react";
import { Star } from "lucide-react";
import TestimonialList from "../components/TestimonialList";
import Navbar from "../components/Navbar";
import Breadcrumbs from "../components/Breadcrumbs";
import FooterSection from "../components/FooterSection";
import WhatsAppButton from "../components/WhatsAppButton";
import RecentBookingNotification from "../components/RecentBookingNotification";

export default function Reviews() {
  return (
    <div className="relative min-h-screen bg-[#FAF9F6] text-[#2C3531] overflow-x-hidden pb-20 md:pb-0 selection:bg-[#c9a832] selection:text-[#1B3322]">
      <Navbar />
      <Breadcrumbs />
      <main className="pt-24 bg-[#1B3322]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        
        {/* Header Block */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-xs font-mono tracking-widest text-[#c9a832] uppercase flex items-center justify-center mb-3">
            <Star className="w-4 h-4 mr-2" />
            Guest Experiences
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#FAF9F6] mb-6">
            Whispering Pines Reviews
          </h1>
          <div className="w-20 h-[2px] bg-[#c9a832] mx-auto mb-6" />
          <p className="text-[17px] sm:text-lg text-[#FAF9F6]/80 font-sans leading-relaxed">
            Discover why our guests consistently rate us as the best resort in Ramgarh. Read genuine testimonials from families, couples, and solo travelers who found their perfect Himalayan escape with us.
          </p>
        </motion.div>
      </div>

      {/* Render the actual TestimonialList component */}
        <div className="border-t border-[#FAF9F6]/10 pt-4 pb-20">
          <TestimonialList />
        </div>
      </main>
      <FooterSection />
      <WhatsAppButton />
      <RecentBookingNotification />
    </div>
  );
}
