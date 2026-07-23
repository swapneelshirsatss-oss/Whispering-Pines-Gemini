import React from "react";

import { Image as ImageIcon } from "lucide-react";
import LazyImage from "./LazyImage";

// Import existing images
import img1 from "../assets/images/resort_mukteshwar_luxury_hero_1782031089955.avif?url";
import img2 from "../assets/images/villa_in_nanital.avif?url";
import img3 from "../assets/images/Whispering-pines-balcony-view-nanital.webp?url";
import img4 from "../assets/images/Private-Dining-Area-resort-near-mukteshwar.avif?url";
import img5 from "../assets/images/Delux_room_Whispering_pines_mukteshwar.avif?url";
import img6 from "../assets/images/Family_Twin Room_Near_nainital.avif?url";
import img7 from "../assets/images/Group_booking_nainital_resort.avif?url";
import img8 from "../assets/images/Restaurant-cafe-ramgarh.avif?url";
import img9 from "../assets/images/Delux Room 2 Beds.avif?url";
import img10 from "../assets/images/Delux-room-in-whispering-pines-resort.avif?url";
import img11 from "../assets/images/Family-Twin Room.avif?url";
import img12 from "../assets/images/Premiuam-villa-room.avif?url";
import img13 from "../assets/images/Premium-Villas-rooms.avif?url";
import img14 from "../assets/images/Room-interior-in-resort-near-nanital.avif?url";
import img15 from "../assets/images/Super-delux room.avif?url";
import img16 from "../assets/images/balcony Room.avif?url";
import img17 from "../assets/images/banquest-hall-in-resort.avif?url";
import img18 from "../assets/images/bathtub-in-hotel-room.avif?url";
import img19 from "../assets/images/best-resort-in-ramgarh.avif?url";
import img20 from "../assets/images/delux-room-bathroom.avif?url";
import img21 from "../assets/images/delux-room-in-whispering-pines.avif?url";
import img22 from "../assets/images/dining-area-inramgarh-resort.avif?url";
import img23 from "../assets/images/double-bed-occupancy-inramgarh-resort.avif?url";
import img24 from "../assets/images/double-room-for-family-in-ramgarh-resort.avif?url";
import img25 from "../assets/images/lounge-area-inwhispering-pines-resort-by-casa-de-bello.avif?url";
import img26 from "../assets/images/outside-view-from-resort-hotel.avif?url";
import img27 from "../assets/images/ramgarh-hotel-booking.avif?url";
import img28 from "../assets/images/resort-near-mukteshwar-resort-room.avif?url";
import img29 from "../assets/images/stay-near-kainchi-dham.avif?url";
import img30 from "../assets/images/twin-room.avif?url";
import img31 from "../assets/images/villa in nanital.avif?url";

const images = [
  { src: img1, alt: "Luxury resort view in Mukteshwar", span: "col-span-1 sm:col-span-2 row-span-2" },
  { src: img2, alt: "Premium Villa in Nainital", span: "col-span-1 row-span-1" },
  { src: img3, alt: "Balcony view of Himalayas", span: "col-span-1 row-span-2" },
  { src: img4, alt: "Resort Dining Hall", span: "col-span-1 sm:col-span-2 row-span-1" },
  { src: img5, alt: "Deluxe Skylight Room", span: "col-span-1 row-span-2" },
  { src: img6, alt: "Family Twin Room", span: "col-span-1 row-span-1" },
  { src: img7, alt: "Group Booking Room", span: "col-span-1 sm:col-span-2 row-span-1" },
  { src: img8, alt: "Restaurant seating area", span: "col-span-1 sm:col-span-3 row-span-2" },
  { src: img9, alt: "Deluxe Room with 2 Beds", span: "col-span-1 row-span-1" },
  { src: img10, alt: "Deluxe Room interior", span: "col-span-1 row-span-1" },
  { src: img11, alt: "Family Twin Room view", span: "col-span-1 sm:col-span-2 row-span-1" },
  { src: img12, alt: "Premium Villa Bedroom", span: "col-span-1 row-span-2" },
  { src: img13, alt: "Premium Villas lounge", span: "col-span-1 sm:col-span-2 row-span-1" },
  { src: img14, alt: "Resort Suite interior", span: "col-span-1 row-span-1" },
  { src: img15, alt: "Super Deluxe Room", span: "col-span-1 sm:col-span-2 row-span-1" },
  { src: img16, alt: "Balcony Room view", span: "col-span-1 row-span-2" },
  { src: img17, alt: "Banquet Hall setup", span: "col-span-1 sm:col-span-2 row-span-1" },
  { src: img18, alt: "Luxury Bathtub in Room", span: "col-span-1 row-span-1" },
  { src: img19, alt: "Resort Exterior view", span: "col-span-1 sm:col-span-2 row-span-1" },
  { src: img20, alt: "Deluxe Bathroom", span: "col-span-1 row-span-1" },
  { src: img21, alt: "Deluxe Room Cozy Setup", span: "col-span-1 row-span-2" },
  { src: img22, alt: "Dining Area in Ramgarh", span: "col-span-1 sm:col-span-2 row-span-1" },
  { src: img23, alt: "Double Bed Occupancy room", span: "col-span-1 row-span-1" },
  { src: img24, alt: "Double Family Room", span: "col-span-1 sm:col-span-2 row-span-1" },
  { src: img25, alt: "Resort Lounge Area", span: "col-span-1 sm:col-span-3 row-span-2" },
  { src: img26, alt: "Scenic view from Resort Hotel", span: "col-span-1 sm:col-span-2 row-span-2" },
  { src: img27, alt: "Hotel room interior", span: "col-span-1 row-span-1" },
  { src: img28, alt: "Resort near Mukteshwar room", span: "col-span-1 row-span-1" },
  { src: img29, alt: "Stay near Kainchi Dham", span: "col-span-1 sm:col-span-2 row-span-1" },
  { src: img30, alt: "Twin Room comfort", span: "col-span-1 row-span-1" },
  { src: img31, alt: "Premium Villa in Ramgarh", span: "col-span-1 sm:col-span-2 row-span-1" },
];

export default function GalleryGrid() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header Block */}
      <div 
        className="text-center max-w-3xl mx-auto mb-16 animate-fade-in"
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
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 auto-rows-[200px]">
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`relative overflow-hidden rounded-sm group ${img.span} animate-fade-in`}
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
          </div>
        ))}
      </div>
    </div>
  );
}
