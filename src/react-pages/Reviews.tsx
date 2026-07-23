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
          <p className="text-[17px] sm:text-lg text-[#FAF9F6]/80 font-sans leading-relaxed mb-8">
            Discover why our guests consistently rate us as the best resort in Ramgarh. Read genuine testimonials from families, couples, and solo travelers who found their perfect Himalayan escape with us.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {/* Google Pill */}
            <div className="inline-flex items-center justify-center space-x-2 bg-[#FAF9F6]/5 border border-[#FAF9F6]/10 px-5 py-2.5 rounded-full text-[13px] sm:text-sm font-sans text-[#FAF9F6]/90">
              <svg viewBox="0 0 24 24" className="w-4 h-4">
                 <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                 <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                 <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                 <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              <strong className="text-[#c9a832] font-semibold">4.6★</strong> <span>(388 reviews)</span>
            </div>

            {/* TripAdvisor Pill */}
            <a href="https://www.tripadvisor.in/Hotel_Review-g1049689-d34470070-Reviews-Whispering_Pines_Resort_Mukteshwar-Ramgarh_Nainital_District_Uttarakhand.html" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center space-x-2 bg-[#FAF9F6]/5 border border-[#FAF9F6]/10 hover:bg-[#FAF9F6]/10 px-5 py-2.5 rounded-full text-[13px] sm:text-sm font-sans text-[#FAF9F6]/90 transition-colors">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#34e0a1] fill-current">
                <path d="M23.1,10.6a1.9,1.9,0,0,0-1.1-1.6l-1.8-.7a9.3,9.3,0,0,0-16.4,0l-1.8.7a1.9,1.9,0,0,0-1.1,1.6V12a1.9,1.9,0,0,0,1.2,1.8,4.1,4.1,0,0,0,2.1,4A6.1,6.1,0,0,0,9,21.5a6.3,6.3,0,0,0,2.8-.7,6.3,6.3,0,0,0,2.8.7,6.1,6.1,0,0,0,4.8-3.7,4.1,4.1,0,0,0,2.1-4A1.9,1.9,0,0,0,22.7,12ZM12,17a2.2,2.2,0,1,1,2.2-2.2A2.2,2.2,0,0,1,12,17Zm-5.3,3a4.7,4.7,0,1,1,4.7-4.7A4.7,4.7,0,0,1,6.7,20Zm10.6,0A4.7,4.7,0,1,1,22,15.3,4.7,4.7,0,0,1,17.3,20ZM6.7,12.7a2.7,2.7,0,1,0,2.7,2.7A2.7,2.7,0,0,0,6.7,12.7Zm10.6,0a2.7,2.7,0,1,0,2.7,2.7A2.7,2.7,0,0,0,17.3,12.7Z"/>
              </svg>
              <strong className="text-[#34e0a1] font-semibold">5.0★</strong> <span>Tripadvisor</span>
            </a>
          </div>
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
