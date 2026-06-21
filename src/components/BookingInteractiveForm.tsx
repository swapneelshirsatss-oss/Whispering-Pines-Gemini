import React, { useState, useEffect } from "react";
import { Calendar, Users, Home, ArrowUpRight } from "lucide-react";
import { ROOMS_INVENTORY, generateWhatsAppLink } from "../data";

export default function BookingInteractiveForm() {
  const [selectedRoomId, setSelectedRoomId] = useState(ROOMS_INVENTORY[0].id);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guestsCount, setGuestsCount] = useState("2");
  const [nights, setNights] = useState(1);
  const [totalCost, setTotalCost] = useState(0);

  const selectedRoom = ROOMS_INVENTORY.find((r) => r.id === selectedRoomId) || ROOMS_INVENTORY[0];

  useEffect(() => {
    if (checkIn && checkOut) {
      const start = new Date(checkIn);
      const end = new Date(checkOut);
      const diffTime = end.getTime() - start.getTime();
      const calculatedNights = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      
      if (calculatedNights > 0) {
        setNights(calculatedNights);
        setTotalCost(calculatedNights * selectedRoom.pricePerNight);
      } else {
        setNights(1);
        setTotalCost(selectedRoom.pricePerNight);
      }
    } else {
      setNights(1);
      setTotalCost(selectedRoom.pricePerNight);
    }
  }, [checkIn, checkOut, selectedRoomId, selectedRoom.pricePerNight]);

  // Set default dates (tomorrow and day after)
  useEffect(() => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    const dayAfter = new Date(tomorrow);
    dayAfter.setDate(tomorrow.getDate() + 2);

    const formatDateStr = (date: Date) => {
      return date.toISOString().split("T")[0];
    };

    setCheckIn(formatDateStr(tomorrow));
    setCheckOut(formatDateStr(dayAfter));
  }, []);

  const whatsAppLink = generateWhatsAppLink(
    selectedRoom.name,
    checkIn,
    checkOut,
    guestsCount
  );

  return (
    <section id="book-form" className="py-20 lg:py-28 bg-[#1B3322]/10 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-widest text-[#c9a832] uppercase block mb-2">
            Plan your Getaway
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1B3322]">
            Book Room & Check Availability
          </h2>
          <div className="w-16 h-[2px] bg-[#c9a832] mx-auto mt-4 mb-6" />
          <p className="text-sm text-[#2C3531]/80 font-sans leading-relaxed">
            Configure your dream holiday below. Our reception team will verify availability for your preferred category, 
            drafting a unified inquiry ticket to instantly dispatch on WhatsApp.
          </p>
        </div>

        {/* Dynamic Booking Planner Box */}
        <div className="bg-white rounded-sm overflow-hidden shadow-2xl border border-[#2C3531]/5 grid grid-cols-1 lg:grid-cols-12 gap-0">
          
          {/* Interactive Inputs Form - Left */}
          <form className="p-6 sm:p-10 lg:col-span-7 space-y-6" onSubmit={(e) => e.preventDefault()}>
            <h3 className="font-display text-xl font-bold text-[#1B3322] flex items-center">
              <Home className="w-5 h-5 text-[#c9a832] mr-2" />
              1. Customize Booking Parameters
            </h3>
            
            {/* Input Room */}
            <div className="space-y-2">
              <label htmlFor="room-select" className="text-[11px] font-mono uppercase tracking-wider text-[#2C3531]/70 block font-semibold">
                Select Suite / Room Category
              </label>
              <div className="relative">
                <select
                  id="room-select"
                  value={selectedRoomId}
                  onChange={(e) => setSelectedRoomId(e.target.value)}
                  className="w-full bg-[#FAF9F6] border border-[#2C3531]/15 focus:border-[#c9a832] rounded-sm py-3 px-4 text-sm focus:outline-none transition-colors"
                >
                  {ROOMS_INVENTORY.map((room) => (
                    <option key={room.id} value={room.id}>
                      {room.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Input Dates Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="checkin-date" className="text-[11px] font-mono uppercase tracking-wider text-[#2C3531]/70 block font-semibold flex items-center">
                  <Calendar className="w-4 h-4 text-[#c9a832] mr-1" />
                  Check-In
                </label>
                <input
                  type="date"
                  id="checkin-date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full bg-[#FAF9F6] border border-[#2C3531]/15 focus:border-[#c9a832] rounded-sm py-2.5 px-4 text-sm focus:outline-none transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="checkout-date" className="text-[11px] font-mono uppercase tracking-wider text-[#2C3531]/70 block font-semibold flex items-center">
                  <Calendar className="w-4 h-4 text-[#c9a832] mr-1" />
                  Check-Out
                </label>
                <input
                  type="date"
                  id="checkout-date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full bg-[#FAF9F6] border border-[#2C3531]/15 focus:border-[#c9a832] rounded-sm py-2.5 px-4 text-sm focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Input Guest Counts dropdown */}
            <div className="space-y-2">
              <label htmlFor="guests-count" className="text-[11px] font-mono uppercase tracking-wider text-[#2C3531]/70 block font-semibold flex items-center">
                <Users className="w-4 h-4 text-[#c9a832] mr-1" />
                Number of Guests & Children
              </label>
              <select
                id="guests-count"
                value={guestsCount}
                onChange={(e) => setGuestsCount(e.target.value)}
                className="w-full bg-[#FAF9F6] border border-[#2C3531]/15 focus:border-[#c9a832] rounded-sm py-3 px-4 text-sm focus:outline-none transition-colors"
              >
                <option value="1">1 Adult</option>
                <option value="2">2 Adults</option>
                <option value="3">3 Guests (Requires Extra Rollaway Bed)</option>
                <option value="4">4 Guests</option>
                <option value="5-6">5 to 6 Guests</option>
                <option value="7-10">7 to 10 Guests (Recommended: Entire Cottage)</option>
              </select>
            </div>

            {/* Inclusions badge footer info */}
            <p className="text-xs text-[#2C3531]/60 leading-relaxed italic">
              * Included In Rate: Bed linen supplies, 24/7 water supply, organic bath sets, dedicated room servicing, and fiber broadband Wi-Fi coverage.
            </p>
          </form>

          {/* Reservation Request Summary Panel - Right */}
          <div className="bg-[#1B3322] text-[#FAF9F6] p-6 sm:p-10 lg:col-span-5 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#FAF9F6]/10">
            <div>
              <h3 className="font-display text-xl font-bold text-[#FAF9F6] mb-6 flex items-center pb-4 border-b border-[#FAF9F6]/15">
                2. Reservation Request Summary
              </h3>
              
              {/* Breakdowns List */}
              <div className="space-y-4 text-xs font-sans tracking-wide">
                <div className="flex justify-between items-baseline">
                  <span className="text-[#FAF9F6]/75">Selected Accommodation:</span>
                  <span className="font-semibold text-right max-w-[200px]">{selectedRoom.name}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-[#FAF9F6]/75">Rates Structure:</span>
                  <span className="font-mono text-[#c9a832]">Best Available Rates</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-[#FAF9F6]/75">Duration of Stay:</span>
                  <span className="font-mono">{nights} night(s)</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-[#FAF9F6]/75">Traveler Capacity:</span>
                  <span className="font-mono">{guestsCount} head(s)</span>
                </div>
              </div>

              {/* Rate Discussion Display */}
              <div className="mt-8 pt-6 border-t border-[#FAF9F6]/15 flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase font-mono tracking-widest text-[#c9a832]">Rate Discussion</span>
                  <p className="text-[10px] text-white/50">*Negotiated directly with our receptionist</p>
                </div>
                <div className="font-mono text-xl font-bold text-[#c9a832]">
                  Discuss Rates
                </div>
              </div>
            </div>

            {/* Click To WhatsApp Primary Trigger Anchor */}
            <div className="mt-10 pt-6 border-t border-[#FAF9F6]/15">
              <a
                href={whatsAppLink}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-[#c9a832] hover:bg-[#A6875D] text-[#1B3322] hover:text-[#FAF9F6] font-mono text-center text-xs font-bold uppercase tracking-widest py-4 px-6 rounded-sm shadow-xl flex items-center justify-center transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>Instantly Check Dates on WhatsApp</span>
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </a>
              <span className="text-[9px] uppercase font-mono tracking-widest text-center block text-[#c9a832] mt-3 animate-pulse">
                ★ 100% Secure Direct Booking Process
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
