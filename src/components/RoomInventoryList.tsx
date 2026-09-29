import React, { useState } from "react";
import { Users, Bed, Check, ArrowRight, Apple, Snowflake, Info, MessageCircle, Sparkles, ShieldCheck } from "lucide-react";
import LazyImage from "./LazyImage";
import { trackAdsConversion } from "../utils/analytics";
import type { RoomOption } from "../types";
import { BOOKING_ENGINE_URL, ROOMS_INVENTORY, generateWhatsAppLink } from "../data";

interface RoomInventoryListProps {
  initialFilter?: string;
  hideLink?: boolean;
  title?: string;
  isH1?: boolean;
  categoryIntro?: string;
  optimizedImages?: Record<string, string>;
  rooms?: RoomOption[];
}

export default function RoomInventoryList({
  initialFilter = "all",
  hideLink = false,
  title = "Suites & Cottages at Uttarakhand's Most Loved Family Resort",
  isH1 = false,
  categoryIntro = "Suites & Cottages at Uttarakhand's Most Loved Family Resort",
  optimizedImages,
  rooms = ROOMS_INVENTORY,
}: RoomInventoryListProps = {}) {
  const [filter, setFilter] = useState(initialFilter);

  const filterOptions = [
    { label: "All Properties & Rooms", value: "all" },
    { label: "Full Premium Villas", value: "villa" },
    { label: "Suites & Hidden Lofts", value: "suite" },
    { label: "Deluxe Rooms (2 Guests)", value: "deluxe" },
  ];

  const filteredRooms = rooms.filter((room) => {
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
    <section id="rooms" className="py-20 lg:py-28 bg-[#FAF9F6] border-b border-[#E6E0D6]">
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
            <article
              key={room.id}
              className="bg-transparent overflow-hidden group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center animate-fade-in-up"
            >
              {/* Room Image - Left/Top */}
              <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-[32rem] overflow-hidden rounded-sm">
                <LazyImage
                  src={optimizedImages?.[room.id] || room.image}
                  alt={`Cozy interior bedroom of ${room.name} at Whispering Pines Resort Mukteshwar, Uttarakhand`}
                  className="w-full h-full"
                  imgClassName="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  priority={index === 0}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-[#1B3322]/10 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0 pointer-events-none" />
                
                {/* Special Tags */}
                <div className="absolute top-4 left-4 flex flex-col gap-1.5 z-10">
                  {room.featured && (
                    <div className="bg-[#1B3322] text-[#FAF9F6] text-[10px] uppercase font-mono tracking-[0.2em] px-3.5 py-1.5 rounded-sm shadow-md border border-[#c9a832]/40 font-bold">
                      Signature Villa
                    </div>
                  )}
                  {room.pricePerNight && (
                    <div className="bg-[#FAF9F6]/95 backdrop-blur-md text-[#1B3322] text-[11px] font-mono font-bold px-3 py-1.5 rounded-sm shadow-md flex items-center flex-wrap gap-1.5 border border-[#1B3322]/10">
                      <Sparkles className="w-3 h-3 text-[#c9a832]" />
                      <span className="tnum">₹{room.pricePerNight.toLocaleString("en-IN")}/night</span>
                      {room.otaPricePerNight && (
                        <span className="line-through text-gray-400 font-normal text-[10px] tnum">
                          ₹{room.otaPricePerNight.toLocaleString("en-IN")}
                        </span>
                      )}
                      {room.directSavings && (
                        <span className="bg-[#25D366]/20 text-[#15803d] text-[9px] font-bold px-1.5 py-0.5 rounded tracking-tight">
                          {room.directSavings}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Room Specifications - Right/Bottom */}
              <div className="lg:col-span-5 flex flex-col justify-center space-y-6 lg:pr-8">
                <div>
                  <div className="mb-4">
                    <p className="text-[10px] font-mono text-[#c9a832] uppercase tracking-[0.2em] mb-2 font-semibold">
                      {room.subtitle}
                    </p>
                    <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-[#1B3322] leading-tight">
                      {room.name}
                    </h2>
                  </div>
                  
                  <div className="w-12 h-[1px] bg-[#c9a832] mb-6" />
                  <p className="text-sm text-[#2C3531]/80 leading-relaxed mb-6 font-sans font-light">
                    {room.description}
                  </p>

                  {/* Badges Bar */}
                  <div className="flex flex-wrap gap-4 sm:gap-8 mb-6 text-[11px] text-[#2C3531]/75 font-mono uppercase tracking-wider">
                    <span className="flex items-center">
                      <Users className="w-3.5 h-3.5 mr-2 text-[#c9a832]" />
                      {room.capacity}
                    </span>
                    <span className="flex items-center">
                      <Bed className="w-3.5 h-3.5 mr-2 text-[#c9a832]" />
                      {room.bedType}
                    </span>
                  </div>

                  {/* Direct Resident Privileges Pill */}
                  {room.directPerks && room.directPerks.length > 0 && (
                    <div className="mb-6 p-3 rounded bg-[#1B3322]/5 border border-[#1B3322]/10">
                      <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#1B3322] mb-1.5 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] shrink-0" />
                        <span>Direct Booking Privileges:</span>
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[11px] text-[#2C3531]/80 font-sans">
                        {room.directPerks.slice(0, 2).map((perk, pIdx) => (
                          <li key={pIdx} className="flex items-center gap-1.5">
                            <Check className="w-3 h-3 text-[#25D366] shrink-0" />
                            <span>{perk}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Room Amenities Grid */}
                  <div className="mb-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5">
                      {room.amenities.slice(0, 4).map((item, idx) => (
                        <div key={idx} className="flex items-center text-xs text-[#2C3531]/80">
                          <div className="w-1.5 h-1.5 bg-[#c9a832] rounded-full mr-2.5 shrink-0" />
                          <h3 className="font-sans font-light leading-snug">{item}</h3>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Dual Booking CTAs */}
                <div className="pt-6 border-t border-[#2C3531]/10 flex flex-wrap items-center gap-3">
                  <a
                    href={generateWhatsAppLink({ roomName: room.name, source: "Room Inventory Card" })}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackAdsConversion("generate_lead", "booking", `room_card_whatsapp_${room.id}`)}
                    className="inline-flex items-center justify-center gap-2 bg-[#1B3322] hover:bg-[#2A4832] text-[#FAF9F6] font-mono text-[11px] font-bold uppercase tracking-wider px-5 py-3 rounded-xl shadow-md transition-all duration-300 btn-shimmer"
                  >
                    <svg className="w-3.5 h-3.5 text-[#25D366] shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.116.554 4.1 1.523 5.823L0 24l6.344-1.498A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.792 9.792 0 01-5.002-1.374l-.359-.213-3.765.889.953-3.676-.234-.376A9.794 9.794 0 012.182 12C2.182 6.574 6.574 2.182 12 2.182S21.818 6.574 21.818 12 17.426 21.818 12 21.818z"/>
                    </svg>
                    <span>Reserve on WhatsApp</span>
                  </a>

                  <a
                    href={BOOKING_ENGINE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleRoomBookingClick}
                    className="inline-flex items-center text-[#1B3322] hover:text-[#c9a832] font-mono text-[11px] font-semibold uppercase tracking-wider px-3 py-3 transition-colors duration-300 group/btn"
                  >
                    <span>Check Web Engine</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {!hideLink && (
          <div className="mt-16 text-center">
            <a
              href="/suites-cottages-ramgarh-resort/"
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
