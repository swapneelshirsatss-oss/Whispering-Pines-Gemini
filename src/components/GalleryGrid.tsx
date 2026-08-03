import React from "react";

import { Image as ImageIcon } from "lucide-react";
import LazyImage from "./LazyImage";

const images = [
  { src: "/images/Resort-in-nanital-on-mukteshwar-road.avif", alt: "Whispering Pines Resort by Casa De Bello — 4-Star Heritage Mountain Resort on Bhowali-Ramgarh-Mukteshwar Road", span: "col-span-1 sm:col-span-2 row-span-2" },
  { src: "/images/villa_in_nanital.avif", alt: "Private Villa near Nainital — Stone & Cedar Wood Heritage Estate surrounded by Fruit Orchards", span: "col-span-1 row-span-1" },
  { src: "/images/Whispering-pines-balcony-view-nanital.avif", alt: "180° Himalayan Peak View of Nanda Devi and Trishul from Whispering Pines Balcony in Malla Ramgarh", span: "col-span-1 row-span-2" },
  { src: "/images/Private-Dining-Area-resort-near-mukteshwar.avif", alt: "Private Dining Area & Multi-Cuisine Restaurant at Whispering Pines Resort near Mukteshwar", span: "col-span-1 sm:col-span-2 row-span-1" },
  { src: "/images/Delux_room_Whispering_pines_mukteshwar.avif", alt: "Deluxe Skylight Suite — Cathedral Wood-Paneled Attic Bedroom with Night-Time Star Gazing Roof Window", span: "col-span-1 row-span-2" },
  { src: "/images/Family_Twin%20Room_Near_nainital.avif", alt: "Family Twin Room — Ground Floor Suite with Direct Access to Private Peach and Apple Orchards", span: "col-span-1 row-span-1" },
  { src: "/images/Group_booking_nainital_resort.avif", alt: "Group Booking Accommodations — Spacious Mountain Resort Rooms for Family Reunions near Nainital", span: "col-span-1 sm:col-span-2 row-span-1" },
  { src: "/images/Restaurant-cafe-ramgarh.avif", alt: "Restaurant & Cafe Seating Area serving Fresh Organic Homestyle Kumaoni Delicacies in Ramgarh", span: "col-span-1 sm:col-span-3 row-span-2" },
  { src: "/images/Delux%20Room%202%20Beds.avif", alt: "Deluxe Room with 2 Double Beds — Comfortable Heritage Mountain Lodging in Malla Ramgarh", span: "col-span-1 row-span-1" },
  { src: "/images/Delux-room-in-whispering-pines-resort.avif", alt: "Deluxe Suite Room Interior featuring Geo-Heaters and Artisanal Stone Walls near Mukteshwar", span: "col-span-1 row-span-1" },
  { src: "/images/Family-Twin%20Room.avif", alt: "Family Twin Room View overlooking Terraced Fruit Orchards and Pine Canopies in Uttarakhand", span: "col-span-1 sm:col-span-2 row-span-1" },
  { src: "/images/Premiuam-villa-room.avif", alt: "Master Bedroom inside Private Heritage Villa at Whispering Pines Resort by Casa De Bello", span: "col-span-1 row-span-2" },
  { src: "/images/Premium-Villas-rooms.avif", alt: "Premium Villa Living Room with High Wooden Ceiling Trusses and Cozy Fireplace Seating", span: "col-span-1 sm:col-span-2 row-span-1" },
  { src: "/images/Room-interior-in-resort-near-nanital.avif", alt: "Luxury Suite Interior with Cedar Pine Wood Panel Finish and Himalayan Sunrise View Window", span: "col-span-1 row-span-1" },
  { src: "/images/Super-delux%20room.avif", alt: "Super Deluxe Room — Premium Himalayan View Suite at Whispering Pines Resort Ramgarh", span: "col-span-1 sm:col-span-2 row-span-1" },
  { src: "/images/balcony%20Room.avif", alt: "Private Cedar Pine Balcony Room with Scenic Panorama of Bhowali-Ramgarh Valley", span: "col-span-1 row-span-2" },
  { src: "/images/banquest-hall-in-resort.avif", alt: "Banquet & Event Hall Setup for Corporate Retreats and Intimate Himalayan Weddings", span: "col-span-1 sm:col-span-2 row-span-1" },
  { src: "/images/bathtub-in-hotel-room.avif", alt: "Luxury En-Suite Bathroom featuring Deep Soak Bathtub and Rain Shower in Ramgarh Resort", span: "col-span-1 row-span-1" },
  { src: "/images/best-resort-in-ramgarh.avif", alt: "Exterior Architecture of Whispering Pines Resort (formerly Clarks Exotica) in Malla Ramgarh", span: "col-span-1 sm:col-span-2 row-span-1" },
  { src: "/images/delux-room-bathroom.avif", alt: "Modern En-Suite Bathroom with Geo-Heating Radiator and Clean Luxury Amenities", span: "col-span-1 row-span-1" },
  { src: "/images/delux-room-in-whispering-pines.avif", alt: "Cozy Deluxe Room Setup with Hand-Crafted Kumaoni Wood Furniture and Warm Bedding", span: "col-span-1 row-span-2" },
  { src: "/images/dining-area-inramgarh-resort.avif", alt: "Mountain View Dining Room serving Farm-to-Table Meals at Whispering Pines Resort", span: "col-span-1 sm:col-span-2 row-span-1" },
  { src: "/images/double-bed-occupancy-inramgarh-resort.avif", alt: "Double Bed Occupancy Heritage Room — Best Value Resort Booking near Mukteshwar", span: "col-span-1 row-span-1" },
  { src: "/images/double-room-for-family-in-ramgarh-resort.avif", alt: "Double Family Room with Private Balcony viewing Snow-Capped Himalayan Peaks", span: "col-span-1 sm:col-span-2 row-span-1" },
  { src: "/images/lounge-area-inwhispering-pines-resort-by-casa-de-bello.avif", alt: "Lounge & Fireplace Living Area inside 3-Bedroom Private Villa near Nainital", span: "col-span-1 sm:col-span-3 row-span-2" },
  { src: "/images/outside-view-from-resort-hotel.avif", alt: "Scenic View of Pine Forest and Terraced Slopes from Whispering Pines Resort Hotel", span: "col-span-1 sm:col-span-2 row-span-2" },
  { src: "/images/ramgarh-hotel-booking.avif", alt: "Boutique Hotel Room Interior with Warm Ambient Lighting and Cedar Wood Flooring", span: "col-span-1 row-span-1" },
  { src: "/images/resort-near-mukteshwar-resort-room.avif", alt: "Spacious Resort Room near Mukteshwar Dham with Modern Comforts and High-Speed Wi-Fi", span: "col-span-1 row-span-1" },
  { src: "/images/stay-near-kainchi-dham.avif", alt: "Whispering Pines Resort Stay near Baba Neem Karoli Kainchi Dham Ashram", span: "col-span-1 sm:col-span-2 row-span-1" },
  { src: "/images/twin-room.avif", alt: "Twin Room Bed Layout with Soft Linen and Scenic Himalayan Valley Windows", span: "col-span-1 row-span-1" },
  { src: "/images/villa%20in%20nanital.avif", alt: "Private Villa Exterior showcasing Native Kumaoni Stone Masonry and Pine Garden Lawn", span: "col-span-1 sm:col-span-2 row-span-1" },
  { src: "/images/best%20-resort-in-ramgarh-uttarkahand.avif", alt: "Best Resort in Ramgarh Uttarakhand — Whispering Pines by Casa De Bello Estate View", span: "col-span-1 sm:col-span-2 row-span-2" },
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
