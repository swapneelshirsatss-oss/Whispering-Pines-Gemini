import React, { useState } from "react";
import { Users, Bed, Check, ArrowRight, Apple, Snowflake, Info } from "lucide-react";
import { ROOMS_INVENTORY, generateWhatsAppLink } from "../data";
import LazyImage from "./LazyImage";

export default function RoomInventoryList() {
  const [filter, setFilter] = useState("all");

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

  return (
    <section id="rooms" className="py-20 lg:py-28 bg-[#1B3322]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-widest text-[#c9a832] uppercase block mb-2">
            Sanctuaries of Slumber
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B3322] mb-4">
            Bespoke Premium Villas & Suites
          </h2>
          <div className="w-16 h-[2px] bg-[#c9a832] mx-auto mb-6" />
          <p className="text-sm sm:text-base text-[#2C3531]/80 font-sans leading-relaxed">
            Meticulously paneled with local pine and cedar timbers, each suite is an expansive private refuge 
            engineered for serenity. Choose from individual loft suites or secure the premium villas offered by Whispering Pines by Casa De Bello.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filterOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setFilter(opt.value)}
              className={`px-5 py-2.5 rounded-sm text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
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
        <div className="space-y-12 lg:space-y-16">
          {filteredRooms.map((room) => (
            <article
              key={room.id}
              className="bg-white rounded-sm overflow-hidden shadow-xl border border-[#2C3531]/5 grid grid-cols-1 lg:grid-cols-12 gap-0 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Room Image - Left/Top */}
              <div className="lg:col-span-5 relative h-64 sm:h-80 lg:h-auto min-h-[300px]">
                <LazyImage
                  src={room.image}
                  alt={`Cozy interior bedroom of ${room.name} at Whispering Pines Resort Mukteshwar, Uttarakhand`}
                  className="absolute inset-0"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-[#1B3322]/10 mix-blend-multiply" />
                
                {/* Special Tags */}
                {room.featured && (
                  <div className="absolute top-4 left-4 bg-[#c9a832] text-[#1B3322] text-[10px] uppercase font-mono font-bold tracking-widest px-3 py-1.5 rounded-sm shadow-md">
                    Entire Cottage Estate
                  </div>
                )}
                
                {/* Rate Status Display for Mobile */}
                <div className="absolute bottom-4 left-4 bg-[#1B3322]/90 backdrop-blur-sm text-[#FAF9F6] px-4 py-2 rounded-sm border border-[#c9a832]/30 lg:hidden">
                  <span className="text-[10px] font-mono uppercase tracking-wider opacity-75">Pricing Option</span>
                  <div className="font-mono font-bold text-xs text-[#c9a832]">
                    Contact Reception
                  </div>
                </div>
              </div>

              {/* Room Specifications - Right/Bottom */}
              <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-y-2 mb-2">
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#1B3322]">
                      {room.name}
                    </h3>
                    <div className="hidden lg:block text-right">
                      <span className="text-xs font-mono text-[#2C3531]/50 block uppercase tracking-wider">Pricing</span>
                      <span className="font-mono font-bold text-base text-[#1B3322]">
                        On Request
                      </span>
                    </div>
                  </div>
                  <p className="text-xs font-mono text-[#c9a832] uppercase tracking-wider font-semibold mb-4">
                    {room.subtitle}
                  </p>
                  
                  <div className="w-12 h-[1px] bg-[#c9a832] mb-5" />

                  <p className="text-sm text-[#2C3531]/80 leading-relaxed mb-6 font-sans">
                    {room.description}
                  </p>

                  {/* Badges Bar */}
                  <div className="grid grid-cols-2 gap-2 py-3.5 border-y border-[#2C3531]/10 mb-6 text-xs text-[#2C3531]/75 font-mono">
                    <span className="flex items-center">
                      <Users className="w-4 h-4 mr-2 text-[#c9a832]" />
                      <strong>Occupancy:</strong> &nbsp; {room.capacity}
                    </span>
                    <span className="flex items-center border-l border-[#2C3531]/10 pl-2">
                      <Bed className="w-4 h-4 mr-2 text-[#c9a832]" />
                      <strong>Beds:</strong> &nbsp; {room.bedType}
                    </span>
                  </div>

                  {/* Room Amenities Grid */}
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-widest text-[#1B3322] font-bold mb-3">
                      Exclusive In-Room Features:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                      {room.amenities.map((item, idx) => (
                        <div key={idx} className="flex items-center text-xs text-[#2C3531]/90">
                          <Check className="w-3.5 h-3.5 text-[#c9a832] mr-2 shrink-0" />
                          <span className="font-sans leading-tight">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Booking Button */}
                <div className="pt-6 border-t border-[#2C3531]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center text-xs text-[#1B3322]/80 space-x-2 font-sans">
                    <Info className="w-4 h-4 text-[#c9a832] shrink-0" />
                    <span>Includes fresh gourmet breakfast served at our organic Orchard Lawn.</span>
                  </div>
                  
                  <a
                    href={generateWhatsAppLink(room.name)}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto bg-[#1B3322] hover:bg-[#2A4832] text-[#FAF9F6] font-mono text-center text-xs font-bold uppercase tracking-wider py-3.5 px-6 rounded-sm shadow-md flex items-center justify-center space-x-2 transition-all duration-200"
                  >
                    <span>Instant Booking</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
