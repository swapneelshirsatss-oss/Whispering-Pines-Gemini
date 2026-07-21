import React, { useState, useEffect } from "react";
import { Calendar, Users, Home, ArrowUpRight, ChevronDown } from "lucide-react";
import { ROOMS_INVENTORY, BOOKING_ENGINE_URL } from "../data";
import { trackAdsConversion } from "../utils/analytics";

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

  const whatsAppLink = BOOKING_ENGINE_URL;

  const handleBookingClick = () => {
    trackAdsConversion("generate_lead", "booking", "whatsapp_form_booking");
  };

  return (
    <section id="book-form" className="py-20 lg:py-28 bg-[#1B3322]/10 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-widest text-[#c9a832] uppercase block mb-2">
            Plan your Getaway
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B3322]">
            Complete Your Ramgarh Resort Booking in Easy Steps
          </h2>
          <div className="w-16 h-[2px] bg-[#c9a832] mx-auto mt-4 mb-6" />
          <p className="text-sm text-[#2C3531]/80 font-sans leading-relaxed">
            Configure your dream mountain getaway below to secure Ramgarh's best rates. Our reception team will verify availability for your preferred suites and cottages, drafting a personalized inquiry to instantly dispatch on WhatsApp for our best price guaranteed.
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
                  className="w-full bg-[#FAF9F6] border border-[#2C3531]/15 focus:border-[#c9a832] rounded-sm py-2 pl-3 pr-8 text-[13px] focus:outline-none transition-colors appearance-none cursor-pointer"
                >
                  {ROOMS_INVENTORY.map((room) => (
                    <option key={room.id} value={room.id}>
                      {room.name}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-[#2C3531]/60">
                  <ChevronDown className="w-3.5 h-3.5" />
                </div>
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
                  className="w-full bg-[#FAF9F6] border border-[#2C3531]/15 focus:border-[#c9a832] rounded-sm py-2 px-3 text-[13px] focus:outline-none transition-colors cursor-pointer"
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
                  className="w-full bg-[#FAF9F6] border border-[#2C3531]/15 focus:border-[#c9a832] rounded-sm py-2 px-3 text-[13px] focus:outline-none transition-colors cursor-pointer"
                />
              </div>
            </div>

            {/* Input Guest Counts dropdown */}
            <div className="space-y-2">
              <label htmlFor="guests-count" className="text-[11px] font-mono uppercase tracking-wider text-[#2C3531]/70 block font-semibold flex items-center">
                <Users className="w-4 h-4 text-[#c9a832] mr-1" />
                Number of Guests & Children
              </label>
              <div className="relative">
                <select
                  id="guests-count"
                  value={guestsCount}
                  onChange={(e) => setGuestsCount(e.target.value)}
                  className="w-full bg-[#FAF9F6] border border-[#2C3531]/15 focus:border-[#c9a832] rounded-sm py-2 pl-3 pr-8 text-[13px] focus:outline-none transition-colors appearance-none cursor-pointer"
                >
                  <option value="1">1 Adult</option>
                  <option value="2">2 Adults</option>
                  <option value="3">3 Guests (Requires Extra Rollaway Bed)</option>
                  <option value="4">4 Guests</option>
                  <option value="5-6">5 to 6 Guests</option>
                  <option value="7-10">7 to 10 Guests (Recommended: Entire Cottage)</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-[#2C3531]/60">
                  <ChevronDown className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>

            {/* Inclusions badge footer info */}
            <p className="text-xs text-[#2C3531]/60 leading-relaxed italic">
              * Included In Rate: Bed linen supplies, 24/7 water supply, organic bath sets, dedicated room servicing, and fiber broadband Wi-Fi coverage.
            </p>
          </form>

          {/* Reservation Request Summary Panel - Right */}
          <div className="bg-[#1B3322] text-[#FAF9F6] p-8 sm:p-12 lg:col-span-5 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#FAF9F6]/10">
            <div>
              <h3 className="font-display text-2xl font-medium text-[#FAF9F6] mb-8 pb-6 border-b border-[#FAF9F6]/10">
                Reservation Details
              </h3>
              
              {/* Breakdowns List */}
              <div className="space-y-6 text-sm font-sans font-light tracking-wide">
                <div className="flex justify-between items-baseline border-b border-[#FAF9F6]/5 pb-4">
                  <span className="text-[#FAF9F6]/60">Accommodation</span>
                  <span className="font-medium text-right max-w-[200px]">{selectedRoom.name}</span>
                </div>
                
                <div className="flex justify-between border-b border-[#FAF9F6]/5 pb-4">
                  <span className="text-[#FAF9F6]/60">Duration</span>
                  <span className="font-mono">{nights} night(s)</span>
                </div>
                <div className="flex justify-between border-b border-[#FAF9F6]/5 pb-4">
                  <span className="text-[#FAF9F6]/60">Guests</span>
                  <span className="font-mono">{guestsCount}</span>
                </div>
              </div>

              {/* Rate Discussion Display */}
              <div className="mt-8 pt-6 flex flex-col">
                <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#c9a832] mb-1">Direct Booking Rate</span>
                <div className="font-display text-2xl text-[#FAF9F6]">
                  Upon Request
                </div>
              </div>
            </div>

            {/* Click To WhatsApp Primary Trigger Anchor */}
            <div className="mt-12 pt-8 border-t border-[#FAF9F6]/10">
              <a
                href={whatsAppLink}
                target="_blank"
                rel="noreferrer"
                onClick={handleBookingClick}
                className="w-full bg-[#c9a832] hover:bg-[#FAF9F6] text-[#1B3322] hover:text-[#1B3322] font-mono text-center text-[11px] font-bold uppercase tracking-[0.2em] py-5 px-6 rounded-sm shadow-xl flex items-center justify-center transition-all duration-300"
              >
                <span>Request Availability</span>
                <ArrowUpRight className="w-4 h-4 ml-3 opacity-80" />
              </a>
              <div className="mt-6 text-center">
                <span className="text-[9px] uppercase font-mono tracking-[0.15em] text-[#FAF9F6]/50">
                  Best rates guaranteed on direct bookings.
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
