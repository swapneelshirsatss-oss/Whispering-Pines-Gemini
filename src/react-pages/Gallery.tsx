import React from "react";
import { motion } from "motion/react";
import { Image as ImageIcon } from "lucide-react";
import LazyImage from "../components/LazyImage";
import Navbar from "../components/Navbar";
import Breadcrumbs from "../components/Breadcrumbs";
import FooterSection from "../components/FooterSection";
import WhatsAppButton from "../components/WhatsAppButton";
import RecentBookingNotification from "../components/RecentBookingNotification";

// Import existing images
import img1 from "../assets/images/resort_mukteshwar_luxury_hero_1782031089955.avif?url";
import img2 from "../assets/images/villa_in_nanital.avif?url";
import img3 from "../assets/images/Whispering-pines-balcony-view-nanital.webp?url";
import img4 from "../assets/images/Private-Dining-Area-resort-near-mukteshwar.avif?url";
import img5 from "../assets/images/Delux_room_Whispering_pines_mukteshwar.avif?url";
import img6 from "../assets/images/Family_Twin Room_Near_nainital.avif?url";
import img7 from "../assets/images/Group_booking_nainital_resort.avif?url";
import img8 from "../assets/images/Restaurant-cafe-ramgarh.avif?url";

const images = [
  { src: img1, alt: "Luxury resort view in Mukteshwar", span: "col-span-1 sm:col-span-2 row-span-2" },
  { src: img2, alt: "Premium Villa in Nainital", span: "col-span-1 row-span-1" },
  { src: img3, alt: "Balcony view of Himalayas", span: "col-span-1 row-span-2" },
  { src: img4, alt: "Resort Dining Hall", span: "col-span-1 sm:col-span-2 row-span-1" },
  { src: img5, alt: "Deluxe Skylight Room", span: "col-span-1 row-span-2" },
  { src: img6, alt: "Family Twin Room", span: "col-span-1 row-span-1" },
  { src: img7, alt: "Group Booking Room", span: "col-span-1 sm:col-span-2 row-span-1" },
  { src: img8, alt: "Restaurant seating area", span: "col-span-1 sm:col-span-3 row-span-2" },
];

export default function Gallery() {
  return (
    <div className="relative min-h-screen bg-[#FAF9F6] text-[#2C3531] overflow-x-hidden pb-20 md:pb-0 selection:bg-[#c9a832] selection:text-[#1B3322]">
      <Navbar />
      <Breadcrumbs />
      <main className="pt-24 pb-20 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs font-mono tracking-widest text-[#c9a832] uppercase flex items-center justify-center mb-3">
            <ImageIcon className="w-4 h-4 mr-2" />
            Visual Journey
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1B3322] mb-6">
            A Glimpse into Paradise
          </h1>
          <div className="w-20 h-[2px] bg-[#c9a832] mx-auto mb-6" />
          <p className="text-[17px] sm:text-lg text-[#2C3531]/80 font-sans leading-relaxed">
            Explore the tranquil corners, grand alpine architecture, and breathtaking panoramic views that make Whispering Pines the best resort in Ramgarh.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`relative overflow-hidden rounded-sm group ${img.span}`}
            >
              <LazyImage
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B3322]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-[#FAF9F6] font-display text-lg drop-shadow-md">
                  {img.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
        </div>
      </main>
      <FooterSection />
      <WhatsAppButton />
      <RecentBookingNotification />
    </div>
  );
}
