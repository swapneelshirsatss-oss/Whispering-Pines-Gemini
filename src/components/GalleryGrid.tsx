import React from "react";

import { Image as ImageIcon } from "lucide-react";
import LazyImage from "./LazyImage";

// Import existing images
const img1 = "/images/Resort-in-nanital-on-mukteshwar-road.avif";
import img2 from "../assets/images/villa_in_nanital.avif?url";
import img3 from "../assets/images/Whispering-pines-balcony-view-nanital.avif?url";
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
  { src: img1, alt: "Whispering Pines Resort by Casa De Bello — 4-Star Heritage Mountain Resort on Bhowali-Ramgarh-Mukteshwar Road", span: "col-span-1 sm:col-span-2 row-span-2" },
  { src: img2, alt: "Private Villa near Nainital — Stone & Cedar Wood Heritage Estate surrounded by Fruit Orchards", span: "col-span-1 row-span-1" },
  { src: img3, alt: "180° Himalayan Peak View of Nanda Devi and Trishul from Whispering Pines Balcony in Malla Ramgarh", span: "col-span-1 row-span-2" },
  { src: img4, alt: "Private Dining Area & Multi-Cuisine Restaurant at Whispering Pines Resort near Mukteshwar", span: "col-span-1 sm:col-span-2 row-span-1" },
  { src: img5, alt: "Deluxe Skylight Suite — Cathedral Wood-Paneled Attic Bedroom with Night-Time Star Gazing Roof Window", span: "col-span-1 row-span-2" },
  { src: img6, alt: "Family Twin Room — Ground Floor Suite with Direct Access to Private Peach and Apple Orchards", span: "col-span-1 row-span-1" },
  { src: img7, alt: "Group Booking Accommodations — Spacious Mountain Resort Rooms for Family Reunions near Nainital", span: "col-span-1 sm:col-span-2 row-span-1" },
  { src: img8, alt: "Restaurant & Cafe Seating Area serving Fresh Organic Homestyle Kumaoni Delicacies in Ramgarh", span: "col-span-1 sm:col-span-3 row-span-2" },
  { src: img9, alt: "Deluxe Room with 2 Double Beds — Comfortable Heritage Mountain Lodging in Malla Ramgarh", span: "col-span-1 row-span-1" },
  { src: img10, alt: "Deluxe Suite Room Interior featuring Geo-Heaters and Artisanal Stone Walls near Mukteshwar", span: "col-span-1 row-span-1" },
  { src: img11, alt: "Family Twin Room View overlooking Terraced Fruit Orchards and Pine Canopies in Uttarakhand", span: "col-span-1 sm:col-span-2 row-span-1" },
  { src: img12, alt: "Master Bedroom inside Private Heritage Villa at Whispering Pines Resort by Casa De Bello", span: "col-span-1 row-span-2" },
  { src: img13, alt: "Premium Villa Living Room with High Wooden Ceiling Trusses and Cozy Fireplace Seating", span: "col-span-1 sm:col-span-2 row-span-1" },
  { src: img14, alt: "Luxury Suite Interior with Cedar Pine Wood Panel Finish and Himalayan Sunrise View Window", span: "col-span-1 row-span-1" },
  { src: img15, alt: "Super Deluxe Room — Premium Himalayan View Suite at Whispering Pines Resort Ramgarh", span: "col-span-1 sm:col-span-2 row-span-1" },
  { src: img16, alt: "Private Cedar Pine Balcony Room with Scenic Panorama of Bhowali-Ramgarh Valley", span: "col-span-1 row-span-2" },
  { src: img17, alt: "Banquet & Event Hall Setup for Corporate Retreats and Intimate Himalayan Weddings", span: "col-span-1 sm:col-span-2 row-span-1" },
  { src: img18, alt: "Luxury En-Suite Bathroom featuring Deep Soak Bathtub and Rain Shower in Ramgarh Resort", span: "col-span-1 row-span-1" },
  { src: img19, alt: "Exterior Architecture of Whispering Pines Resort (formerly Clarks Exotica) in Malla Ramgarh", span: "col-span-1 sm:col-span-2 row-span-1" },
  { src: img20, alt: "Modern En-Suite Bathroom with Geo-Heating Radiator and Clean Luxury Amenities", span: "col-span-1 row-span-1" },
  { src: img21, alt: "Cozy Deluxe Room Setup with Hand-Crafted Kumaoni Wood Furniture and Warm Bedding", span: "col-span-1 row-span-2" },
  { src: img22, alt: "Mountain View Dining Room serving Farm-to-Table Meals at Whispering Pines Resort", span: "col-span-1 sm:col-span-2 row-span-1" },
  { src: img23, alt: "Double Bed Occupancy Heritage Room — Best Value Resort Booking near Mukteshwar", span: "col-span-1 row-span-1" },
  { src: img24, alt: "Double Family Room with Private Balcony viewing Snow-Capped Himalayan Peaks", span: "col-span-1 sm:col-span-2 row-span-1" },
  { src: img25, alt: "Lounge & Fireplace Living Area inside 3-Bedroom Private Villa near Nainital", span: "col-span-1 sm:col-span-3 row-span-2" },
  { src: img26, alt: "Scenic View of Pine Forest and Terraced Slopes from Whispering Pines Resort Hotel", span: "col-span-1 sm:col-span-2 row-span-2" },
  { src: img27, alt: "Boutique Hotel Room Interior with Warm Ambient Lighting and Cedar Wood Flooring", span: "col-span-1 row-span-1" },
  { src: img28, alt: "Spacious Resort Room near Mukteshwar Dham with Modern Comforts and High-Speed Wi-Fi", span: "col-span-1 row-span-1" },
  { src: img29, alt: "Whispering Pines Resort Stay near Baba Neem Karoli Kainchi Dham Ashram", span: "col-span-1 sm:col-span-2 row-span-1" },
  { src: img30, alt: "Twin Room Bed Layout with Soft Linen and Scenic Himalayan Valley Windows", span: "col-span-1 row-span-1" },
  { src: img31, alt: "Private Villa Exterior showcasing Native Kumaoni Stone Masonry and Pine Garden Lawn", span: "col-span-1 sm:col-span-2 row-span-1" },
  { src: "/images/best -resort-in-ramgarh-uttarkahand.avif", alt: "Best Resort in Ramgarh Uttarakhand — Whispering Pines by Casa De Bello Estate View", span: "col-span-1 sm:col-span-2 row-span-2" },
  { src: "/images/best-place-to-stay-near-mukteshwar.avif", alt: "Best Place to Stay near Mukteshwar for Families, Couples and Remote Workations", span: "col-span-1 row-span-1" },
  { src: "/images/best-resort-in-uttrakahnd.avif", alt: "Best Mountain Resort in Uttarakhand featuring Outdoor Swimming Pool and Peak Views", span: "col-span-1 sm:col-span-2 row-span-1" },
  { src: "/images/hotel-near-kainchidham.avif", alt: "Boutique Mountain Stay near Kainchi Dham with Dedicated 150 Mbps Fiber Wi-Fi", span: "col-span-1 row-span-2" },
  { src: "/images/reosrt-reasurant-near-nanital.avif", alt: "Resort Restaurant near Nainital serving Multi-Cuisine Dishes and Kumaoni Tea", span: "col-span-1 sm:col-span-2 row-span-1" },
  { src: "/images/resoert-near-nanital.avif", alt: "Whispering Pines Resort Estate View nestled in Active Peach and Apple Orchards", span: "col-span-1 row-span-1" },
  { src: "/images/resort-for-families-in-mukteshwar.avif", alt: "Resort for Families in Mukteshwar featuring Enclosed Safe Lawns and Bonfire Area", span: "col-span-1 sm:col-span-2 row-span-1" },
  { src: "/images/vikka-in-mukteshwar.avif", alt: "Heritage Alpine Villa Exterior with Double-Height Windows in Malla Ramgarh", span: "col-span-1 row-span-2" },
  { src: "/images/villa-for-families-in-mukteshwar.avif", alt: "Private Family Villa Grounds with Outdoor Barbeque Grill and Stargazing Deck", span: "col-span-1 sm:col-span-2 row-span-1" },
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
