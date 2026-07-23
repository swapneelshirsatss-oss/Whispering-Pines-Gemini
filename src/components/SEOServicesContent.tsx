import React from 'react';
import { CheckCircle2, ShieldCheck, Dumbbell, UtensilsCrossed, BedDouble, ConciergeBell, PartyPopper } from 'lucide-react';
import { motion } from "motion/react";
import LazyImage from "./LazyImage";
import wellnessImg from "../assets/images/outside-view-from-resort-hotel.avif?url";
import diningImg from "../assets/images/Restaurant-cafe-ramgarh.avif?url";
import roomImg from "../assets/images/Room-interior-in-resort-near-nanital.avif?url";
import servicesImg from "../assets/images/lounge-area-inwhispering-pines-resort-by-casa-de-bello.avif?url";
import eventsImg from "../assets/images/banquest-hall-in-resort.avif?url";

const SEO_SERVICES_CONTENT = [
  {
    id: "wellness",
    sectionTitle: "Wellness & Recreation",
    h2: "Activities & Entertainment That Make Your Ramgarh Stay Unforgettable",
    icon: <Dumbbell className="w-6 h-6 text-[#c9a832] mb-4" />,
    image: wellnessImg,
    alt: "Beautiful outdoor view from Whispering Pines Resort highlighting the natural surroundings for wellness activities",
    h3s: [
      "Guided Nature Treks Through Malla Ramgarh's Pine & Deodar Forest Trails",
      "ATV Rides & Zip-Lining — Adventure Sports with Himalayan Views",
      "Sports Courts & Indoor Games — Active Stays for the Whole Family",
      "Nightly Bonfires & Open BBQ Grills Under the Himalayan Starlit Sky",
      "Live Music, Open-Air Evenings & Curated Wine Tastings at the Resort"
    ],
    eeat: "Specificity of location (Malla Ramgarh, pine/deodar) and our focus on 'Active Stays for the Whole Family' ensures that whether you're seeking a quiet retreat or an adventurous family resort Nainital experience, your stay in Ramgarh is fully catered to."
  },
  {
    id: "dining",
    sectionTitle: "Dining & Culinary",
    h2: "Farm-Fresh Kumaoni Dining & Multi-Cuisine Meals — Cooked on the Mountain",
    icon: <UtensilsCrossed className="w-6 h-6 text-[#c9a832] mb-4" />,
    image: diningImg,
    alt: "Elegant in-house restaurant cafe at Whispering Pines Resort in Ramgarh",
    h3s: [
      "24-Hour In-Room Dining — Meals, Snacks & Midnight Cravings Delivered Fresh",
      "Open-Air Restaurant with Panoramic Himalayan Views & Multi-Cuisine Buffet",
      "Poolside Bar, Traditional Kumaoni Tea Corner & Gourmet Dining Experience",
      "Locally Sourced, Chemical-Free Ingredients — Our Farm-to-Table Promise",
      "Custom Meal Plans for Families, Couples & Corporate Groups Staying in Ramgarh"
    ],
    eeat: "Our farm-to-table promise guarantees locally sourced, chemical-free ingredients. We directly collaborate with Ramgarh's highland farmers to craft an authentic culinary journey, providing the authenticity discerning guests seek during a stay in Ramgarh."
  },
  {
    id: "amenities",
    sectionTitle: "Room Amenities & Comfort",
    h2: "Room Amenities Designed for Comfort, Connectivity & Complete Relaxation",
    icon: <BedDouble className="w-6 h-6 text-[#c9a832] mb-4" />,
    image: roomImg,
    alt: "Luxurious wooden room interior at Whispering Pines Resort",
    h3s: [
      "In-Room Dining Service — Hot Meals Served on Your Private Balcony",
      "150 Mbps High-Speed Wi-Fi, Smart TV & USB Ports Throughout the Property",
      "Mini-Bar, Stocked Bar Cart & In-Room Safe for a Luxury Ramgarh Stay",
      "Cozy Stone Fireplace Rooms — Perfect for Winter Family Stays Near Nainital",
      "Private Plunge Pool Upgrades — Exclusive Room Category on Request"
    ],
    eeat: "With enterprise-grade 150 Mbps fiber connectivity, bespoke stone fireplaces, and premium plunge pools, we have engineered our rooms specifically for modern travelers requiring absolute comfort in the remote Himalayas."
  },
  {
    id: "services",
    sectionTitle: "Guest Services & Conveniences",
    h2: "Effortless Guest Services — So You Focus Only on Your Ramgarh Stay",
    icon: <ConciergeBell className="w-6 h-6 text-[#c9a832] mb-4" />,
    image: servicesImg,
    alt: "Cozy indoor lounge area at Whispering Pines Resort by Casa de Bello",
    h3s: [
      "24/7 Front Desk, Tour Assistance & Luggage Storage — Always at Your Service",
      "Airport Shuttle, Valet Parking & Electric Vehicle Charging on Property",
      "Bicycle Rentals & Guided Local Sightseeing — Explore at Your Own Pace",
      "Cab Service to Kainchi Dham, Mukteshwar Temple & Nainital from the Resort",
      "Kids' Play Zone, Family Activity Corner & On-Request Childcare Services",
      "Best Family Resort Near Nainital — Services Built Around Every Generation",
      "Conference Hall, High-Speed Internet & Banquet Venue for Corporate Groups",
      "Bespoke Event Catering, Custom Menu & Premium Indoor-Outdoor Dining Setup"
    ],
    eeat: "From securing specialized transport for temple visits to organizing engaging activities for toddlers, our 24/7 concierge team is composed of local Kumaoni experts who understand the nuances of a perfect family resort Nainital vacation."
  },
  {
    id: "events",
    sectionTitle: "Events & Outdoor Lawn",
    h2: "2,200 Sq Ft Himalayan Lawn — Weddings, Events & Celebrations in Ramgarh",
    icon: <PartyPopper className="w-6 h-6 text-[#c9a832] mb-4" />,
    image: eventsImg,
    alt: "Spacious banquet hall setup for events at Whispering Pines Resort",
    h3s: [
      "Nanda Devi Range as Your Backdrop — Outdoor Varmala & Sunset Cocktail Setup",
      "Expansive Green Lawn Facing the Himalayas — Ideal for Open-Air Dinners",
      "Premium Outdoor Event Space with Bespoke Catering & Elegant Décor Options",
      "Our Hospitality Team Handles Everything — You Focus on Your Guests, We Handle the Rest",
      "Unforgettable Celebrations at Ramgarh's Most Scenic Family Resort Near Nainital"
    ],
    eeat: "Executing flawless mountain events requires immense logistical expertise. Our dedicated event management team has successfully hosted dozens of seamless high-altitude celebrations, guaranteeing an immaculate experience for you and your guests."
  }
];

export default function SEOServicesContent() {
  return (
    <section className="py-16 lg:py-24 bg-white border-t border-[#2C3531]/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-widest text-[#c9a832] uppercase block mb-2">
            Premium Offerings
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1B3322]">
            Detailed Guide to Our Resort Services
          </h2>
          <div className="w-16 h-[2px] bg-[#c9a832] mx-auto mt-4 mb-6" />
        </div>

        <div className="space-y-20">
          {SEO_SERVICES_CONTENT.map((section, index) => (
            <div key={section.id} className="relative">
              {/* Decorative side line for desktop */}
              <div className="hidden md:block absolute left-[-2rem] top-0 bottom-0 w-[1px] bg-[#c9a832]/30" />
              
              <div className="flex flex-col">
                {/* Header */}
                <div className="mb-8">
                  <span className="text-xs font-mono tracking-widest text-[#c9a832] uppercase font-bold block mb-3">
                    SECTION {index + 1} — {section.sectionTitle}
                  </span>
                  {section.icon}
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-[#1B3322] leading-tight">
                    {section.h2}
                  </h2>
                </div>

                {/* Section Image */}
                <div className="w-full h-64 md:h-[400px] rounded-sm overflow-hidden mb-10 shadow-lg">
                  <LazyImage 
                    src={section.image} 
                    alt={section.alt}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" 
                  />
                </div>

                {/* Bullets (H3s logically, visually list) */}
                <ul className="space-y-4 mb-10">
                  {section.h3s.map((h3, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-[#c9a832] mr-3 mt-0.5 shrink-0" />
                      {/* Using h3 tag for SEO, but styling it like list text */}
                      <h3 className="text-[#2C3531]/80 font-sans text-base md:text-lg leading-relaxed font-medium m-0">
                        {h3}
                      </h3>
                    </li>
                  ))}
                </ul>

                {/* EEAT Block */}
                <div className="bg-[#FAF9F6] border-l-4 border-[#c9a832] p-6 md:p-8 rounded-r-sm shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-5">
                    <ShieldCheck className="w-24 h-24 text-[#1B3322]" />
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center mb-3">
                      <ShieldCheck className="w-5 h-5 text-[#1B3322] mr-2" />
                      <span className="text-xs font-mono tracking-widest text-[#1B3322] uppercase font-bold">
                        Insider Expertise
                      </span>
                    </div>
                    <p className="text-[#2C3531]/90 font-sans italic text-base md:text-lg leading-relaxed m-0">
                      "{section.eeat}"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
