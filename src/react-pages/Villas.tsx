import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Breadcrumbs from "../components/Breadcrumbs";
import RoomInventoryList from "../components/RoomInventoryList";
import BookingInteractiveForm from "../components/BookingInteractiveForm";
import FooterSection from "../components/FooterSection";
import WhatsAppButton from "../components/WhatsAppButton";
import RecentBookingNotification from "../components/RecentBookingNotification";
import { Home, Trees, Compass, ShieldCheck, Heart, UserCheck } from "lucide-react";

export default function Villas() {
  return (
    <div className="relative min-h-screen bg-[#FAF9F6] text-[#2C3531] overflow-x-hidden pb-20 md:pb-0 selection:bg-[#c9a832] selection:text-[#1B3322]">
      <Navbar />
      <Breadcrumbs />
      
      <main className="pt-24">
        {/* Room Inventory List filtered to 'villa' */}
        <RoomInventoryList 
          hideLink={true} 
          initialFilter="villa" 
          title="Book Villas Near Nainital — A Stone & Orchard Nature Retreat in Ramgarh"
          categoryIntro="Ramgarh's Most Exclusive Nature Retreat — Your Private Alpine Estate"
          isH1={true}
        />

        {/* Villa Architecture Section */}
        <section className="py-20 bg-white border-t border-[#2C3531]/5">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-4 flex items-center justify-center">
                <div className="w-16 h-16 bg-[#1B3322]/5 rounded-full flex items-center justify-center text-[#c9a832]">
                  <Home className="w-8 h-8" />
                </div>
              </div>
              <div className="md:col-span-8 space-y-4">
                <h2 className="font-display text-3xl font-bold text-[#1B3322]">
                  Built for the Mountains
                </h2>
                <div className="w-12 h-[2px] bg-[#c9a832]" />
                <p className="text-sm sm:text-base text-[#2C3531]/80 leading-relaxed font-sans font-light">
                  Our premium <strong>villas near Nainital</strong> are engineered for the high-altitude Himalayan environment using hand-hewn mountain stones and solid pine wood finishes. As a signature feature of our <strong>Ramgarh nature retreat</strong>, this Kumaoni-inspired architectural design naturally retains cozy warmth during the winter and stays cool during summer fruit harvests.
                </p>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-[#2C3531]/5 pt-6">
                  {[
                    "Artisanal Stone Masonry by Native Kumaoni Craftsmen",
                    "Double-Height Cedar Wood Trusses & Warm Timber Flooring",
                    "Glass-Pane Windows Framing Nanda Devi & Trishul Peaks",
                    "Heritage Alpine Design Meets 4-Star Modern Comfort"
                  ].map((feat, idx) => (
                    <div key={idx} className="flex items-start text-xs text-[#2C3531]/80">
                      <span className="w-1.5 h-1.5 bg-[#c9a832] rounded-full mr-2.5 mt-1.5 shrink-0" />
                      <h3 className="font-sans font-light leading-relaxed">{feat}</h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Inside the Villa Section */}
        <section className="py-20 bg-[#1B3322]/5 border-t border-[#2C3531]/5">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8 space-y-4 order-2 md:order-1">
                <h2 className="font-display text-3xl font-bold text-[#1B3322]">
                  What's Inside Your Private Villa Near Nainital
                </h2>
                <div className="w-12 h-[2px] bg-[#c9a832]" />
                <p className="text-sm sm:text-base text-[#2C3531]/80 leading-relaxed font-sans font-light">
                  Step into the premium interiors of our exclusive <strong>villas near Nainital</strong>. Designed as a luxury <strong>Ramgarh nature retreat</strong>, the property features three grand king bedrooms with dedicated en-suite bathrooms, a wood attic loft, a stone fireplace, and a full kitchen built for self-catering family holidays.
                </p>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-[#1B3322]/10 pt-6">
                  {[
                    "3 Grand King Bedrooms + Loft — Sleeps Up to 10 Guests",
                    "3 Private En-Suite Baths with Hot Showers",
                    "Homestyle Kitchen for Self-Catering Stays",
                    "Luxury Stone Fireplace Living Room for Winter Evenings"
                  ].map((feat, idx) => (
                    <div key={idx} className="flex items-start text-xs text-[#2C3531]/80">
                      <span className="w-1.5 h-1.5 bg-[#c9a832] rounded-full mr-2.5 mt-1.5 shrink-0" />
                      <h3 className="font-sans font-light leading-relaxed">{feat}</h3>
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:col-span-4 flex items-center justify-center order-1 md:order-2">
                <div className="w-16 h-16 bg-[#1B3322]/5 rounded-full flex items-center justify-center text-[#c9a832]">
                  <ShieldCheck className="w-8 h-8" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Orchard & Outdoors Section */}
        <section className="py-20 bg-white border-t border-[#2C3531]/5">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-4 flex items-center justify-center">
                <div className="w-16 h-16 bg-[#1B3322]/5 rounded-full flex items-center justify-center text-[#c9a832]">
                  <Trees className="w-8 h-8" />
                </div>
              </div>
              <div className="md:col-span-8 space-y-4">
                <h2 className="font-display text-3xl font-bold text-[#1B3322]">
                  Private Fruit Orchard, Pine Trails & Open Himalayan Skies
                </h2>
                <div className="w-12 h-[2px] bg-[#c9a832]" />
                <p className="text-sm sm:text-base text-[#2C3531]/80 leading-relaxed font-sans font-light">
                  Enjoy absolute peace at our <strong>Ramgarh nature retreat</strong>, nestled inside certified working orchards of apple, peach, and plum trees. Guests booking our luxury <strong>villas near Nainital</strong> enjoy direct access to deodar walking trails and 180° views of the snow-clad Nanda Devi range.
                </p>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-[#2C3531]/5 pt-6">
                  {[
                    "Wake Up Inside a Working Peach, Plum & Apple Orchard",
                    "Bonfire Pit & Outdoor BBQ Grill on Private Lawn",
                    "Direct Access to Deodar & Pine Forest Walking Trails",
                    "180° Unobstructed Himalayan Panorama from Your Balcony"
                  ].map((feat, idx) => (
                    <div key={idx} className="flex items-start text-xs text-[#2C3531]/80">
                      <span className="w-1.5 h-1.5 bg-[#c9a832] rounded-full mr-2.5 mt-1.5 shrink-0" />
                      <h3 className="font-sans font-light leading-relaxed">{feat}</h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who it's For Section */}
        <section className="py-20 bg-[#1B3322]/5 border-t border-[#2C3531]/5">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8 space-y-4 order-2 md:order-1">
                <h2 className="font-display text-3xl font-bold text-[#1B3322]">
                  Perfect For — Families, Honeymooners & Group Nature Retreats
                </h2>
                <div className="w-12 h-[2px] bg-[#c9a832]" />
                <p className="text-sm sm:text-base text-[#2C3531]/80 leading-relaxed font-sans font-light">
                  Our spacious <strong>villas near Nainital</strong> are optimized for multi-generational family getaways, peaceful honeymoons, and corporate groups seeking a <strong>Ramgarh nature retreat</strong> with high-speed 150 Mbps fiber connectivity, gated privacy, and dedicated on-site catering.
                </p>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-[#1B3322]/10 pt-6">
                  {[
                    "Multi-Generational Family Holidays Near Nainital",
                    "Honeymoon & Couples' Nature Retreat in Uttarakhand",
                    "Corporate Offsite & Team Workcation Ramgarh Stays",
                    "Pet-Friendly Villa — Safe Enclosed Lawns for Dogs"
                  ].map((feat, idx) => (
                    <div key={idx} className="flex items-start text-xs text-[#2C3531]/80">
                      <span className="w-1.5 h-1.5 bg-[#c9a832] rounded-full mr-2.5 mt-1.5 shrink-0" />
                      <h3 className="font-sans font-light leading-relaxed">{feat}</h3>
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:col-span-4 flex items-center justify-center order-1 md:order-2">
                <div className="w-16 h-16 bg-[#1B3322]/5 rounded-full flex items-center justify-center text-[#c9a832]">
                  <Heart className="w-8 h-8" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Booking Section */}
        <BookingInteractiveForm 
          title="Reserve Your Villa Near Nainital — Direct Booking, Best Price" 
          features={[
            "Entire Villa Available on Exclusive Rental Basis",
            "Best Rate Guaranteed on Direct WhatsApp Booking",
            "Secure UPI & Credit Card Payment — Instant Confirmation"
          ]}
        />
      </main>

      <FooterSection />
      <WhatsAppButton />
      <RecentBookingNotification />
    </div>
  );
}
