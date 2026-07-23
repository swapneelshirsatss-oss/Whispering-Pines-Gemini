import React, { useState } from "react";
import { Users, Bed, Check, ArrowRight, Apple, Snowflake, Info } from "lucide-react";
import { ROOMS_INVENTORY, BOOKING_ENGINE_URL } from "../data";
import LazyImage from "./LazyImage";
import { trackAdsConversion } from "../utils/analytics";
import { motion } from "motion/react";

interface RoomInventoryListProps {
  initialFilter?: string;
  hideLink?: boolean;
  title?: string;
  isH1?: boolean;
  categoryIntro?: string;
}

export default function RoomInventoryList({
  initialFilter = "all",
  hideLink = false,
  title = "Suites & Cottages at Uttarakhand's Most Loved Family Resort",
  isH1 = false,
  categoryIntro = "Suites & Cottages at Uttarakhand's Most Loved Family Resort",
}: RoomInventoryListProps = {}) {
  const [filter, setFilter] = useState(initialFilter);

  const filterOptions = [
    { label: "All Properties & Rooms", value: "all" },
    { label: "Full Premium Villas", value: "villa" },
    { label: "Suites & Hidden Lofts", value: "suite" },
    { label: "Deluxe Rooms (2 Guests)", value: "deluxe" },
  ];

  const filteredRooms = ROOMS_INVENTORY.filter((room) => {
    if (filter === "all") return true;
    if (filter === "villa") return room.id === "entire-cottage";
    if (filter === "suite") return room.id === "delux-room";
    if (filter === "deluxe") return room.id === "delux-room" || room.id === "orchard-room" || room.id === "cedar-room";
    return true;
  });

  const handleRoomBookingClick = () => {
    trackAdsConversion("generate_lead", "booking", "room_list_whatsapp_booking");
  };

  return (
    <section id="rooms" className="py-20 lg:py-28 bg-[#1B3322]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-widest text-[#c9a832] uppercase block mb-2">
            Sanctuaries of Slumber
          </span>
          {isH1 ? (
            <>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B3322] mb-4">
                {title}
              </h1>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-[#2C3531]/80 mt-4 mb-4">
                {categoryIntro}
              </h2>
            </>
          ) : (
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B3322] mb-4">
              {title}
            </h2>
          )}
          <div className="w-16 h-[2px] bg-[#c9a832] mx-auto mb-6" />
          <p className="text-sm sm:text-base text-[#2C3531]/80 font-sans leading-relaxed">
            Meticulously paneled with local Kumaoni pine and cedar timbers, each suite is an expansive private refuge engineered for absolute serenity. Secure your <strong>Ramgarh resort booking</strong> directly to avoid third-party commissions. Whether you need a private villa for a multi-generational holiday or a deluxe skylight attic suite for a couple's retreat, Whispering Pines by Casa De Bello is the premier <strong>family resort Nainital</strong> visitors recommend for high-altitude peace and genuine local hospitality.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-2 mb-12">
          {filterOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setFilter(opt.value)}
              className={`px-4 sm:px-5 py-3 sm:py-2.5 rounded-sm text-[11px] sm:text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
                filter === opt.value
                  ? "bg-[#1B3322] text-[#FAF9F6] shadow-md border border-[#1B3322]"
                  : "bg-white text-[#2C3531]/75 hover:bg-[#1B3322]/10 border border-[#2C3531]/10 hover:text-[#1B3322]"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Room List Grid */}
        <div className="space-y-16 lg:space-y-24">
          {filteredRooms.map((room, index) => (
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
              key={room.id}
              className="bg-transparent overflow-hidden group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
            >
              {/* Room Image - Left/Top */}
              <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-[32rem] overflow-hidden rounded-sm">
                <LazyImage
                  src={room.image}
                  alt={`Cozy interior bedroom of ${room.name} at Whispering Pines Resort Mukteshwar, Uttarakhand`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-[#1B3322]/10 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0" />
                
                {/* Special Tags */}
                {room.featured && (
                  <div className="absolute top-6 left-6 bg-[#FAF9F6] text-[#1B3322] text-[10px] uppercase font-mono tracking-[0.2em] px-4 py-2 rounded-sm shadow-lg">
                    Estate Signature
                  </div>
                )}
              </div>

              {/* Room Specifications - Right/Bottom */}
              <div className="lg:col-span-5 flex flex-col justify-center space-y-6 lg:pr-8">
                <div>
                  <div className="mb-4">
                    <p className="text-[10px] font-mono text-[#c9a832] uppercase tracking-[0.2em] mb-2">
                      {room.subtitle}
                    </p>
                    <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-[#1B3322] leading-tight">
                      {room.name}
                    </h2>
                  </div>
                  
                  <div className="w-12 h-[1px] bg-[#c9a832] mb-6" />
                  <p className="text-sm text-[#2C3531]/75 leading-relaxed mb-8 font-sans font-light">
                    {room.description}
                  </p>

                  {/* Badges Bar */}
                  <div className="flex space-x-8 mb-8 text-[11px] text-[#2C3531]/70 font-mono uppercase tracking-widest">
                    <span className="flex items-center">
                      <Users className="w-3.5 h-3.5 mr-2 opacity-50" />
                      {room.capacity}
                    </span>
                    <span className="flex items-center">
                      <Bed className="w-3.5 h-3.5 mr-2 opacity-50" />
                      {room.bedType}
                    </span>
                  </div>

                  {/* Room Amenities Grid */}
                  <div className="mb-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3">
                      {room.amenities.slice(0, 4).map((item, idx) => (
                        <div key={idx} className="flex items-center text-xs text-[#2C3531]/80">
                          <div className="w-1 h-1 bg-[#c9a832] rounded-full mr-3 shrink-0" />
                          <h3 className="font-sans font-light">{item}</h3>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Booking Button */}
                <div className="pt-8 border-t border-[#2C3531]/10">
                  <a
                    href={BOOKING_ENGINE_URL}
                    target="_blank"
                    rel="noreferrer"
                    onClick={handleRoomBookingClick}
                    className="inline-flex items-center text-[#1B3322] hover:text-[#c9a832] font-mono text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors duration-300 group/btn"
                  >
                    <span>Reserve Accommodation</span>
                    <ArrowRight className="w-4 h-4 ml-3 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {!hideLink && (
          <div className="mt-16 text-center">
            <a
              href="/suites-cottages-ramgarh-resort"
              className="inline-flex items-center justify-center px-8 py-3 sm:px-10 sm:py-4 bg-transparent border border-[#c9a832] text-[#1B3322] hover:bg-[#c9a832] hover:text-[#FAF9F6] font-mono text-[11px] sm:text-xs font-semibold uppercase tracking-widest transition-colors duration-300 rounded-sm group"
            >
              View All Accommodation Details
              <ArrowRight className="w-4 h-4 ml-3 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
