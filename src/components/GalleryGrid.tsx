import React, { useState, useEffect } from "react";
import { Image as ImageIcon, Sparkles, X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import LazyImage from "./LazyImage";

export interface GalleryImage {
  src: string;
  alt: string;
  category: "rooms" | "villas" | "dining" | "views";
  categoryLabel: string;
  span?: string;
}

const images: GalleryImage[] = [
  // HIGHLIGHT / FEATURED HERO IMAGES
  { src: "/images/Resort-in-nanital-on-mukteshwar-road.avif", alt: "Whispering Pines Resort by Casa De Bello — 4-Star Heritage Mountain Resort on Bhowali-Ramgarh-Mukteshwar Road", category: "views", categoryLabel: "Outdoors & Views", span: "col-span-1 sm:col-span-2 row-span-2" },
  { src: "/images/villa_in_nanital.avif", alt: "Private Villa near Nainital — Stone & Cedar Wood Heritage Estate surrounded by Fruit Orchards", category: "villas", categoryLabel: "Private Villa", span: "col-span-1 row-span-1" },
  { src: "/images/Whispering-pines-balcony-view-nanital.avif", alt: "180° Himalayan Peak View of Nanda Devi and Trishul from Whispering Pines Balcony in Malla Ramgarh", category: "views", categoryLabel: "Outdoors & Views", span: "col-span-1 row-span-2" },
  { src: "/images/Private-Dining-Area-resort-near-mukteshwar.avif", alt: "Private Dining Area & Multi-Cuisine Restaurant at Whispering Pines Resort near Mukteshwar", category: "dining", categoryLabel: "Dining & Restaurant", span: "col-span-1 sm:col-span-2 row-span-1" },
  { src: "/images/Delux_room_Whispering_pines_mukteshwar.avif", alt: "Deluxe Skylight Suite — Cathedral Wood-Paneled Attic Bedroom with Night-Time Star Gazing Roof Window", category: "rooms", categoryLabel: "Rooms & Suites", span: "col-span-1 row-span-2" },
  { src: "/images/Family_Twin%20Room_Near_nainital.avif", alt: "Family Twin Room — Ground Floor Suite with Direct Access to Private Peach and Apple Orchards", category: "rooms", categoryLabel: "Rooms & Suites", span: "col-span-1 row-span-1" },
  { src: "/images/Group_booking_nainital_resort.avif", alt: "Group Booking Accommodations — Spacious Mountain Resort Rooms for Family Reunions near Nainital", category: "views", categoryLabel: "Outdoors & Views", span: "col-span-1 sm:col-span-2 row-span-1" },
  { src: "/images/Restaurant-cafe-ramgarh.avif", alt: "Restaurant & Cafe Seating Area serving Fresh Organic Homestyle Kumaoni Delicacies in Ramgarh", category: "dining", categoryLabel: "Dining & Restaurant", span: "col-span-1 sm:col-span-3 row-span-2" },
  
  // NEW IMAGES ADDED YESTERDAY & RECENTLY
  { src: "/images/View-from-resort-mukteshwar.avif", alt: "Unobstructed Valley & Pine Canopy View from Whispering Pines Estate Grounds", category: "views", categoryLabel: "Outdoors & Views", span: "col-span-1 row-span-1" },
  { src: "/images/balcony-view-from-resort-near-mukteshwar.avif", alt: "Scenic Himalayan Sunrise View from Private Cedar Balcony in Malla Ramgarh", category: "views", categoryLabel: "Outdoors & Views", span: "col-span-1 sm:col-span-2 row-span-1" },
  { src: "/images/premiuam-room-in-whispering-pines-double-bed.avif", alt: "Premium Double Bed Suite with Mountain View & Heritage Wood Finishing", category: "rooms", categoryLabel: "Rooms & Suites", span: "col-span-1 row-span-1" },
  { src: "/images/resort_mukteshwar_luxury_hero_1782031089955.avif", alt: "Panoramic Himalayan Ridge & Peach Orchard View at Whispering Pines Resort", category: "views", categoryLabel: "Outdoors & Views", span: "col-span-1 sm:col-span-2 row-span-2" },
  { src: "/images/What-Makes-Our-resort-Villas-Different-From-Regular-Homestays-Near-Mukteshwar-uttarkhand.avif", alt: "Heritage Kumaoni Stone Architecture & Manicured Lawns of Private Villa Estate", category: "villas", categoryLabel: "Private Villa", span: "col-span-1 row-span-1" },
  { src: "/images/Why-Many-Travellers-Choose-resort-Near-Mukteshwar-Instead-of-Staying-Inside-the-Town.avif", alt: "Peaceful Fruit Orchards & Uncrowded Mountain Setting in Malla Ramgarh", category: "views", categoryLabel: "Outdoors & Views", span: "col-span-1 sm:col-span-2 row-span-1" },
  { src: "/images/Resort-Near-Mukteshwar-for-Families-Couples-Workations.avif", alt: "Overview of Whispering Pines Resort Estate for Families, Couples & Remote Workations", category: "views", categoryLabel: "Outdoors & Views", span: "col-span-1 sm:col-span-2 row-span-1" },

  // ROOMS & SUITES
  { src: "/images/Delux%20Room%202%20Beds.avif", alt: "Deluxe Room with 2 Double Beds — Comfortable Heritage Mountain Lodging in Malla Ramgarh", category: "rooms", categoryLabel: "Rooms & Suites", span: "col-span-1 row-span-1" },
  { src: "/images/Delux-room-in-whispering-pines-resort.avif", alt: "Deluxe Suite Room Interior featuring Geo-Heaters and Artisanal Stone Walls near Mukteshwar", category: "rooms", categoryLabel: "Rooms & Suites", span: "col-span-1 row-span-1" },
  { src: "/images/Family-Twin%20Room.avif", alt: "Family Twin Room View overlooking Terraced Fruit Orchards and Pine Canopies in Uttarakhand", category: "rooms", categoryLabel: "Rooms & Suites", span: "col-span-1 sm:col-span-2 row-span-1" },
  { src: "/images/Room-interior-in-resort-near-nanital.avif", alt: "Luxury Suite Interior with Cedar Pine Wood Panel Finish and Himalayan Sunrise View Window", category: "rooms", categoryLabel: "Rooms & Suites", span: "col-span-1 row-span-1" },
  { src: "/images/Super-delux%20room.avif", alt: "Super Deluxe Room — Premium Himalayan View Suite at Whispering Pines Resort Ramgarh", category: "rooms", categoryLabel: "Rooms & Suites", span: "col-span-1 sm:col-span-2 row-span-1" },
  { src: "/images/balcony%20Room.avif", alt: "Private Cedar Pine Balcony Room with Scenic Panorama of Bhowali-Ramgarh Valley", category: "rooms", categoryLabel: "Rooms & Suites", span: "col-span-1 row-span-2" },
  { src: "/images/bathtub-in-hotel-room.avif", alt: "Luxury En-Suite Bathroom featuring Deep Soak Bathtub and Rain Shower in Ramgarh Resort", category: "rooms", categoryLabel: "Rooms & Suites", span: "col-span-1 row-span-1" },
  { src: "/images/delux-room-bathroom.avif", alt: "Modern En-Suite Bathroom with Geo-Heating Radiator and Clean Luxury Amenities", category: "rooms", categoryLabel: "Rooms & Suites", span: "col-span-1 row-span-1" },
  { src: "/images/delux-room-in-whispering-pines.avif", alt: "Cozy Deluxe Room Setup with Hand-Crafted Kumaoni Wood Furniture and Warm Bedding", category: "rooms", categoryLabel: "Rooms & Suites", span: "col-span-1 row-span-2" },
  { src: "/images/double-bed-occupancy-inramgarh-resort.avif", alt: "Double Bed Occupancy Heritage Room — Best Value Resort Booking near Mukteshwar", category: "rooms", categoryLabel: "Rooms & Suites", span: "col-span-1 row-span-1" },
  { src: "/images/double-room-for-family-in-ramgarh-resort.avif", alt: "Double Family Room with Private Balcony viewing Snow-Capped Himalayan Peaks", category: "rooms", categoryLabel: "Rooms & Suites", span: "col-span-1 sm:col-span-2 row-span-1" },
  { src: "/images/ramgarh-hotel-booking.avif", alt: "Boutique Hotel Room Interior with Warm Ambient Lighting and Cedar Wood Flooring", category: "rooms", categoryLabel: "Rooms & Suites", span: "col-span-1 row-span-1" },
  { src: "/images/resort-near-mukteshwar-resort-room.avif", alt: "Spacious Resort Room near Mukteshwar Dham with Modern Comforts and High-Speed Wi-Fi", category: "rooms", categoryLabel: "Rooms & Suites", span: "col-span-1 row-span-1" },
  { src: "/images/twin-room.avif", alt: "Twin Room Bed Layout with Soft Linen and Scenic Himalayan Valley Windows", category: "rooms", categoryLabel: "Rooms & Suites", span: "col-span-1 row-span-1" },

  // PRIVATE VILLAS
  { src: "/images/Premiuam-villa-room.avif", alt: "Master Bedroom inside Private Heritage Villa at Whispering Pines Resort by Casa De Bello", category: "villas", categoryLabel: "Private Villa", span: "col-span-1 row-span-2" },
  { src: "/images/Premium-Villas-rooms.avif", alt: "Premium Villa Living Room with High Wooden Ceiling Trusses and Cozy Fireplace Seating", category: "villas", categoryLabel: "Private Villa", span: "col-span-1 sm:col-span-2 row-span-1" },
  { src: "/images/lounge-area-inwhispering-pines-resort-by-casa-de-bello.avif", alt: "Lounge & Fireplace Living Area inside 3-Bedroom Private Villa near Nainital", category: "villas", categoryLabel: "Private Villa", span: "col-span-1 sm:col-span-3 row-span-2" },
  { src: "/images/villa%20in%20nanital.avif", alt: "Private Villa Exterior showcasing Native Kumaoni Stone Masonry and Pine Garden Lawn", category: "villas", categoryLabel: "Private Villa", span: "col-span-1 sm:col-span-2 row-span-1" },
  { src: "/images/vikka-in-mukteshwar.avif", alt: "Heritage Alpine Villa Exterior with Double-Height Windows in Malla Ramgarh", category: "villas", categoryLabel: "Private Villa", span: "col-span-1 row-span-2" },
  { src: "/images/villa-for-families-in-mukteshwar.avif", alt: "Private Family Villa Grounds with Outdoor Barbeque Grill and Stargazing Deck", category: "villas", categoryLabel: "Private Villa", span: "col-span-1 sm:col-span-2 row-span-1" },

  // DINING & RESTAURANTS
  { src: "/images/dining-area-inramgarh-resort.avif", alt: "Mountain View Dining Room serving Farm-to-Table Meals at Whispering Pines Resort", category: "dining", categoryLabel: "Dining & Restaurant", span: "col-span-1 sm:col-span-2 row-span-1" },
  { src: "/images/reosrt-reasurant-near-nanital.avif", alt: "Resort Restaurant near Nainital serving Multi-Cuisine Dishes and Kumaoni Tea", category: "dining", categoryLabel: "Dining & Restaurant", span: "col-span-1 sm:col-span-2 row-span-1" },

  // OUTDOORS, VIEWS & AMENITIES
  { src: "/images/banquest-hall-in-resort.avif", alt: "Banquet & Event Hall Setup for Corporate Retreats and Intimate Himalayan Weddings", category: "views", categoryLabel: "Outdoors & Views", span: "col-span-1 sm:col-span-2 row-span-1" },
  { src: "/images/best-resort-in-ramgarh.avif", alt: "Exterior Architecture of Whispering Pines Resort (formerly Clarks Exotica) in Malla Ramgarh", category: "views", categoryLabel: "Outdoors & Views", span: "col-span-1 sm:col-span-2 row-span-1" },
  { src: "/images/outside-view-from-resort-hotel.avif", alt: "Scenic View of Pine Forest and Terraced Slopes from Whispering Pines Resort Hotel", category: "views", categoryLabel: "Outdoors & Views", span: "col-span-1 sm:col-span-2 row-span-2" },
  { src: "/images/stay-near-kainchi-dham.avif", alt: "Whispering Pines Resort Stay near Baba Neem Karoli Kainchi Dham Ashram", category: "views", categoryLabel: "Outdoors & Views", span: "col-span-1 sm:col-span-2 row-span-1" },
  { src: "/images/best%20-resort-in-ramgarh-uttarkahand.avif", alt: "Best Resort in Ramgarh Uttarakhand — Whispering Pines by Casa De Bello Estate View", category: "views", categoryLabel: "Outdoors & Views", span: "col-span-1 sm:col-span-2 row-span-2" },
  { src: "/images/best-place-to-stay-near-mukteshwar.avif", alt: "Best Place to Stay near Mukteshwar for Families, Couples and Remote Workations", category: "views", categoryLabel: "Outdoors & Views", span: "col-span-1 row-span-1" },
  { src: "/images/best-resort-in-uttrakahnd.avif", alt: "Best Mountain Resort in Uttarakhand featuring Outdoor Swimming Pool and Peak Views", category: "views", categoryLabel: "Outdoors & Views", span: "col-span-1 sm:col-span-2 row-span-1" },
  { src: "/images/hotel-near-kainchidham.avif", alt: "Boutique Mountain Stay near Kainchi Dham with Dedicated 150 Mbps Fiber Wi-Fi", category: "views", categoryLabel: "Outdoors & Views", span: "col-span-1 row-span-2" },
  { src: "/images/resoert-near-nanital.avif", alt: "Whispering Pines Resort Estate View nestled in Active Peach and Apple Orchards", category: "views", categoryLabel: "Outdoors & Views", span: "col-span-1 row-span-1" },
  { src: "/images/resort-for-families-in-mukteshwar.avif", alt: "Resort for Families in Mukteshwar featuring Enclosed Safe Lawns and Bonfire Area", category: "views", categoryLabel: "Outdoors & Views", span: "col-span-1 sm:col-span-2 row-span-1" }
];

type CategoryFilter = "all" | "rooms" | "villas" | "dining" | "views";

interface CategoryTab {
  id: CategoryFilter;
  label: string;
  count: number;
}

export default function GalleryGrid() {
  const [activeTab, setActiveTab] = useState<CategoryFilter>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages = activeTab === "all" 
    ? images 
    : images.filter(img => img.category === activeTab);

  const tabs: CategoryTab[] = [
    { id: "all", label: "All Photos", count: images.length },
    { id: "rooms", label: "Rooms & Suites", count: images.filter(i => i.category === "rooms").length },
    { id: "villas", label: "Private Villa", count: images.filter(i => i.category === "villas").length },
    { id: "dining", label: "Dining & Cafe", count: images.filter(i => i.category === "dining").length },
    { id: "views", label: "Views & Outdoors", count: images.filter(i => i.category === "views").length }
  ];

  // Lightbox keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") {
        setLightboxIndex(prev => (prev !== null ? (prev === 0 ? filteredImages.length - 1 : prev - 1) : null));
      }
      if (e.key === "ArrowRight") {
        setLightboxIndex(prev => (prev !== null ? (prev === filteredImages.length - 1 ? 0 : prev + 1) : null));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredImages.length]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header Block */}
      <div className="text-center max-w-3xl mx-auto mb-10 animate-fade-in">
        <span className="text-xs font-mono tracking-widest text-[#c9a832] uppercase flex items-center justify-center mb-3">
          <ImageIcon className="w-4 h-4 mr-2" />
          Visual Journey
        </span>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1B3322] mb-5">
          A Glimpse into Paradise
        </h1>
        <div className="w-20 h-[2px] bg-[#c9a832] mx-auto mb-5" />
        <p className="text-[17px] sm:text-lg text-[#2C3531]/80 font-sans leading-relaxed">
          Explore the tranquil corners, grand alpine architecture, and breathtaking panoramic views that make Whispering Pines the best resort in Ramgarh near Mukteshwar.
        </p>
      </div>

      {/* Interactive Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setLightboxIndex(null);
              }}
              className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-2 shadow-sm ${
                isActive
                  ? "bg-[#1B3322] text-[#c9a832] ring-2 ring-[#c9a832]/50 shadow-md transform -translate-y-0.5"
                  : "bg-white text-[#2C3531] hover:bg-[#1B3322]/10 hover:text-[#1B3322] border border-[#EAE8E3]"
              }`}
            >
              <span>{tab.label}</span>
              <span
                className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold ${
                  isActive ? "bg-[#c9a832] text-[#1B3322]" : "bg-gray-100 text-gray-600"
                }`}
              >
                {tab.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Filter Info Subtitle */}
      <div className="flex items-center justify-between border-b border-[#EAE8E3] pb-4 mb-8">
        <span className="text-xs font-mono uppercase tracking-wider text-[#2C3531]/60">
          Showing {filteredImages.length} {filteredImages.length === 1 ? "Image" : "Images"}
        </span>
        <span className="text-xs font-mono text-[#c9a832] flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5" /> Click any photo for lightbox view
        </span>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 auto-rows-[220px]">
        {filteredImages.map((img, idx) => (
          <div
            key={`${img.src}-${idx}`}
            onClick={() => setLightboxIndex(idx)}
            className={`relative overflow-hidden rounded-lg group cursor-pointer border border-black/5 shadow-sm transition-all duration-300 hover:shadow-xl ${
              activeTab === "all" ? img.span || "col-span-1 row-span-1" : "col-span-1 row-span-1"
            }`}
          >
            <LazyImage
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Category Tag Badge */}
            <div className="absolute top-3 left-3 z-10 opacity-90 group-hover:opacity-100 transition-opacity">
              <span className="bg-[#1B3322]/85 text-[#c9a832] text-[10px] font-mono font-semibold px-2.5 py-1 rounded-sm backdrop-blur-sm shadow-md border border-[#c9a832]/30">
                {img.categoryLabel}
              </span>
            </div>
            {/* Hover Caption Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1B3322]/90 via-[#1B3322]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
              <span className="text-[#FAF9F6] font-display text-sm sm:text-base leading-snug drop-shadow-md mb-2">
                {img.alt}
              </span>
              <span className="text-[11px] font-mono text-[#c9a832] flex items-center gap-1">
                <Maximize2 className="w-3 h-3" /> View High-Res Photo
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Full-Screen Interactive Lightbox Modal */}
      {lightboxIndex !== null && filteredImages[lightboxIndex] && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fade-in">
          {/* Close Button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-5 right-5 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-colors z-50 focus:outline-none"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          <button
            onClick={() =>
              setLightboxIndex(prev => (prev !== null ? (prev === 0 ? filteredImages.length - 1 : prev - 1) : null))
            }
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors z-50"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={() =>
              setLightboxIndex(prev => (prev !== null ? (prev === filteredImages.length - 1 ? 0 : prev + 1) : null))
            }
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors z-50"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image & Detail Container */}
          <div className="max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center">
            <img
              src={filteredImages[lightboxIndex].src}
              alt={filteredImages[lightboxIndex].alt}
              className="max-h-[70vh] w-auto max-w-full object-contain rounded-lg shadow-2xl mb-4 border border-white/10"
            />
            <div className="text-center max-w-2xl space-y-2">
              <span className="inline-block bg-[#c9a832] text-[#1B3322] text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                {filteredImages[lightboxIndex].categoryLabel} ({lightboxIndex + 1} of {filteredImages.length})
              </span>
              <p className="text-white font-display text-base sm:text-xl font-medium leading-relaxed drop-shadow-md">
                {filteredImages[lightboxIndex].alt}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
