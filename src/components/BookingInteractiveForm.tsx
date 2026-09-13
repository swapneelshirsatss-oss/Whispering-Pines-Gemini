import React, { useState, useEffect } from "react";
import { Calendar, Users, Home, ArrowUpRight, ChevronDown, MessageCircle, Sparkles, Check } from "lucide-react";
import { trackAdsConversion } from "../utils/analytics";

const BOOKING_ENGINE_URL = "https://casadebello-book.whisperingpinesresort.in/";

const FORM_ROOM_OPTIONS = [
  { id: "entire-cottage", name: "Private 3-BHK Alpine Villa (Up to 10 Guests)", pricePerNight: 15999 },
  { id: "delux-room", name: "Deluxe Skylight Attic Suite (2-3 Guests)", pricePerNight: 6499 },
  { id: "orchard-room", name: "Family Twin Room with Orchard Lawn (2-4 Guests)", pricePerNight: 4999 }
];

interface BookingInteractiveFormProps {
  title?: string;
  features?: string[];
}

export default function BookingInteractiveForm({
  title = "Plan Your Mountain Getaway with Direct Booking Privileges",
  features
}: BookingInteractiveFormProps = {}) {
  const [selectedRoomId, setSelectedRoomId] = useState(FORM_ROOM_OPTIONS[0].id);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guestsCount, setGuestsCount] = useState("2 Guests");
  const [nights, setNights] = useState(1);
  const [totalCost, setTotalCost] = useState(15999);

  const selectedRoom = FORM_ROOM_OPTIONS.find((r) => r.id === selectedRoomId) || FORM_ROOM_OPTIONS[0];

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

  const estimatedOtaCost = Math.round(totalCost * 1.18);
  const directSavings = estimatedOtaCost - totalCost;

  // Dynamic WhatsApp pre-filled inquiry text
  const whatsAppMessage = `Hi Whispering Pines Resort! I would like to book a stay directly:
• Accommodation: ${selectedRoom.name}
• Check-In: ${checkIn}
• Check-Out: ${checkOut} (${nights} night${nights > 1 ? "s" : ""})
• Guests: ${guestsCount}
• Estimated Direct Rate: ₹${totalCost.toLocaleString("en-IN")}
Please confirm availability and share direct booking privileges.`;

  const whatsAppLink = `https://wa.me/917505029696?text=${encodeURIComponent(whatsAppMessage)}`;

  const handleWhatsAppBookingClick = () => {
    trackAdsConversion("generate_lead", "booking", "whatsapp_form_booking");
  };

  const handleEngineBookingClick = () => {
    trackAdsConversion("generate_lead", "booking", "engine_form_booking");
  };

  return (
    <section id="book-form" className="py-20 lg:py-28 bg-[#1B3322]/5 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-widest text-[#c9a832] uppercase block mb-2 font-semibold">
            Direct Reservation Estimator
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B3322]">
            {title}
          </h2>
          {features && (
            <div className="mt-6 mb-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center justify-center max-w-3xl mx-auto border-y border-[#1B3322]/10 py-6">
              {features.map((feat, idx) => (
                <div key={idx} className="flex items-center justify-center text-xs text-[#2C3531]/80">
                  <span className="w-1.5 h-1.5 bg-[#c9a832] rounded-full mr-2.5 shrink-0" />
                  <h3 className="font-sans font-light leading-relaxed">{feat}</h3>
                </div>
              ))}
            </div>
          )}
          <div className="w-16 h-[2px] bg-[#c9a832] mx-auto mt-4 mb-6" />
          <p className="text-sm sm:text-base text-[#2C3531]/80 font-sans leading-relaxed">
            Customize your stay dates and preferred accommodation below. When booking direct on WhatsApp or our official portal, you eliminate third-party commissions, lock in guaranteed best rates, and receive complimentary bonfire & orchard privileges.
          </p>
        </div>

        {/* Dynamic Booking Planner Box */}
        <div className="bg-white rounded-lg overflow-hidden shadow-luxury-lg border border-[#1B3322]/10 grid grid-cols-1 lg:grid-cols-12 gap-0">
          
          {/* Interactive Inputs Form - Left */}
          <form className="p-6 sm:p-10 lg:col-span-7 space-y-6" onSubmit={(e) => e.preventDefault()}>
            <h3 className="font-display text-xl font-bold text-[#1B3322] flex items-center">
              <Home className="w-5 h-5 text-[#c9a832] mr-2" />
              1. Customize Your Stay
            </h3>
            
            {/* Input Room */}
            <div className="space-y-2">
              <label htmlFor="room-select" className="text-[11px] font-mono uppercase tracking-wider text-[#2C3531]/70 block font-semibold">
                Select Suite / Villa Category
              </label>
              <div className="relative">
                <select
                  id="room-select"
                  value={selectedRoomId}
                  onChange={(e) => setSelectedRoomId(e.target.value)}
                  className="w-full bg-[#FAF9F6] border border-[#2C3531]/15 focus:border-[#c9a832] rounded py-3 pl-3.5 pr-8 text-[13px] font-medium text-[#1B3322] focus:outline-none transition-colors appearance-none cursor-pointer"
                >
                  {FORM_ROOM_OPTIONS.map((room) => (
                    <option key={room.id} value={room.id}>
                      {room.name} — From ₹{room.pricePerNight.toLocaleString("en-IN")}/night
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#2C3531]/60">
                  <ChevronDown className="w-4 h-4" />
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
                  className="w-full bg-[#FAF9F6] border border-[#2C3531]/15 focus:border-[#c9a832] rounded py-2.5 px-3 text-[13px] font-medium text-[#1B3322] focus:outline-none transition-colors cursor-pointer"
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
                  className="w-full bg-[#FAF9F6] border border-[#2C3531]/15 focus:border-[#c9a832] rounded py-2.5 px-3 text-[13px] font-medium text-[#1B3322] focus:outline-none transition-colors cursor-pointer"
                />
              </div>
            </div>

            {/* Input Guest Counts dropdown */}
            <div className="space-y-2">
              <label htmlFor="guests-count" className="text-[11px] font-mono uppercase tracking-wider text-[#2C3531]/70 block font-semibold flex items-center">
                <Users className="w-4 h-4 text-[#c9a832] mr-1" />
                Number of Guests
              </label>
              <div className="relative">
                <select
                  id="guests-count"
                  value={guestsCount}
                  onChange={(e) => setGuestsCount(e.target.value)}
                  className="w-full bg-[#FAF9F6] border border-[#2C3531]/15 focus:border-[#c9a832] rounded py-2.5 pl-3.5 pr-8 text-[13px] font-medium text-[#1B3322] focus:outline-none transition-colors appearance-none cursor-pointer"
                >
                  <option value="1 Adult">1 Adult</option>
                  <option value="2 Adults">2 Adults (Couple)</option>
                  <option value="3 Guests">3 Guests (Requires Extra Bed)</option>
                  <option value="4 Guests">4 Guests (Family)</option>
                  <option value="5-6 Guests">5 to 6 Guests</option>
                  <option value="7-10 Guests (Villa Group)">7 to 10 Guests (Recommended: 3-BHK Alpine Villa)</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#2C3531]/60">
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Inclusions VIP List */}
            <div className="pt-2 border-t border-[#1B3322]/10 space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#c9a832] font-semibold block">
                Direct Booking VIP Inclusions:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#2C3531]/80">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#1B3322] shrink-0" />
                  <span>Complimentary Evening Bonfire</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#1B3322] shrink-0" />
                  <span>Guided Fruit Orchard Nature Walk</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#1B3322] shrink-0" />
                  <span>15% Dining Privilege at Restaurant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#1B3322] shrink-0" />
                  <span>Priority Early Check-In (Subject to slot)</span>
                </div>
              </div>
            </div>
          </form>

          {/* Reservation Request Summary Panel - Right */}
          <div className="bg-[#1B3322] text-[#FAF9F6] p-6 sm:p-10 lg:col-span-5 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#FAF9F6]/10 relative">
            <div>
              <div className="flex items-center justify-between border-b border-[#FAF9F6]/10 pb-4 mb-6">
                <h3 className="font-display text-xl sm:text-2xl font-medium text-[#FAF9F6]">
                  Reservation Summary
                </h3>
                <span className="bg-[#c9a832]/20 text-[#c9a832] border border-[#c9a832]/30 text-[10px] font-mono uppercase px-2 py-0.5 rounded">
                  Best Rate
                </span>
              </div>
              
              {/* Breakdowns List */}
              <div className="space-y-4 text-xs sm:text-sm font-sans font-light">
                <div className="flex justify-between items-start border-b border-[#FAF9F6]/5 pb-3">
                  <span className="text-[#FAF9F6]/60">Category</span>
                  <span className="font-medium text-right max-w-[180px] text-[#FAF9F6]">{selectedRoom.name}</span>
                </div>
                
                <div className="flex justify-between border-b border-[#FAF9F6]/5 pb-3">
                  <span className="text-[#FAF9F6]/60">Duration</span>
                  <span className="font-mono text-[#FAF9F6]">{nights} night{nights > 1 ? "s" : ""}</span>
                </div>
                <div className="flex justify-between border-b border-[#FAF9F6]/5 pb-3">
                  <span className="text-[#FAF9F6]/60">Party Size</span>
                  <span className="font-mono text-[#FAF9F6]">{guestsCount}</span>
                </div>
              </div>

              {/* Price Transparency & OTA Comparison Display */}
              <div className="mt-6 p-4 rounded bg-[#FAF9F6]/5 border border-[#FAF9F6]/10">
                <div className="flex justify-between items-baseline mb-1">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#FAF9F6]/60">
                    Est. OTA Platform Price:
                  </span>
                  <span className="text-xs font-mono line-through text-[#FAF9F6]/50">
                    ₹{estimatedOtaCost.toLocaleString("en-IN")}
                  </span>
                </div>

                <div className="flex justify-between items-baseline">
                  <span className="text-xs uppercase font-mono tracking-wider text-[#c9a832] font-semibold flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Direct Booking Rate:
                  </span>
                  <div className="font-display text-2xl sm:text-3xl font-bold text-[#FAF9F6]">
                    ₹{totalCost.toLocaleString("en-IN")}
                  </div>
                </div>

                <div className="mt-2 pt-2 border-t border-[#FAF9F6]/10 flex items-center justify-between text-[11px] font-mono text-[#c9a832]">
                  <span>Direct Savings Guarantee:</span>
                  <span className="font-bold">~₹{directSavings.toLocaleString("en-IN")} Saved</span>
                </div>
              </div>
            </div>

            {/* Click To WhatsApp Primary Trigger Anchor & Web Booking */}
            <div className="mt-8 pt-6 border-t border-[#FAF9F6]/10 space-y-3">
              <a
                href={whatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppBookingClick}
                className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white font-mono text-center text-xs font-bold uppercase tracking-wider py-4 px-6 rounded shadow-xl flex items-center justify-center transition-all duration-300 transform active:scale-[0.99] group"
              >
                <MessageCircle className="w-4 h-4 mr-2 fill-current" />
                <span>Reserve on WhatsApp (Best Rate)</span>
              </a>

              <a
                href={BOOKING_ENGINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleEngineBookingClick}
                className="w-full bg-transparent hover:bg-white/10 text-[#FAF9F6] border border-[#FAF9F6]/25 font-mono text-center text-[10px] font-semibold uppercase tracking-wider py-2.5 px-4 rounded flex items-center justify-center transition-colors"
              >
                <span>Or Book via Direct Engine</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 opacity-70" />
              </a>

              <div className="text-center pt-1">
                <span className="text-[9px] uppercase font-mono tracking-wider text-[#FAF9F6]/50">
                  Zero hidden fees • Instant front-desk confirmation
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

