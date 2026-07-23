import React from "react";
import { Compass, Flame, Wifi, UtensilsCrossed, Heart, Car, Sparkles, Trees, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { GENERAL_AMENITIES } from "../data";

const iconMap: Record<string, LucideIcon> = {
  Compass,
  Flame,
  Wifi,
  UtensilsCrossed,
  Heart,
  Car,
  Sparkles,
  Trees
};

interface AmenitiesListProps {
  hideLink?: boolean;
  title?: string;
  isH1?: boolean;
}

export default function AmenitiesList({
  hideLink = false,
  title = "Tailored Mountain Luxuries",
  isH1 = false
}: AmenitiesListProps = {}) {
  return (
    <section id="amenities" className="py-20 lg:py-28 bg-[#1B3322] text-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-widest text-[#c9a832] uppercase block mb-2 animate-pulse">
            Bespoke Guest Comforts
          </span>
          {isH1 ? (
            <>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#FAF9F6]">
                {title}
              </h1>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-[#c9a832] mt-4 mb-4">
                What Sets Us Apart — Amenities No Other Resort Near Mukteshwar Offers
              </h2>
            </>
          ) : (
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#FAF9F6]">
              {title}
            </h2>
          )}
          <div className="w-16 h-[2px] bg-[#c9a832] mx-auto mt-4 mb-6" />
          <p className="text-sm sm:text-base text-[#FAF9F6]/85 font-sans leading-relaxed">
            Experience premium, rustic estate hospitality inside a private gated preserve. As the <strong>best resort near mukteshwar</strong>, we provide everything required to turn a mountain retreat into a highly-connected, comfortable, and warm sanctuary built for a true Himalayan escape.
          </p>
        </div>

        {/* Grid Box */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {GENERAL_AMENITIES.map((amenity, idx) => {
            const IconComponent = iconMap[amenity.icon] || Compass;
            return (
              <div
                key={idx}
                className="bg-[#FAF9F6]/5 hover:bg-[#FAF9F6]/10 border border-[#FAF9F6]/10 hover:border-[#c9a832]/30 p-6 sm:p-8 rounded-sm hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Visual Icon Container */}
                <div className="w-12 h-12 bg-[#FAF9F6]/10 group-hover:bg-[#c9a832] rounded-sm flex items-center justify-center mb-6 transition-all duration-300">
                  <IconComponent className="w-6 h-6 text-[#c9a832] group-hover:text-[#1B3322] transition-colors duration-300" />
                </div>
                
                {/* Title */}
                <h2 className="text-lg font-display font-semibold text-[#FAF9F6] mb-3">
                  {amenity.title}
                </h2>
                
                {/* Description fallback */}
                {!amenity.features && (
                  <p className="text-xs sm:text-sm text-[#FAF9F6]/80 font-sans leading-relaxed">
                    {amenity.description}
                  </p>
                )}

                {/* Feature List (H3 sub-headers) */}
                {amenity.features && (
                  <div className="mt-4 space-y-3">
                    {amenity.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start text-xs text-[#FAF9F6]/85">
                        <span className="w-1.5 h-1.5 bg-[#c9a832] rounded-full mr-2.5 mt-1.5 shrink-0" />
                        <h3 className="font-sans font-light leading-relaxed">{feature}</h3>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Highlights bottom note */}
        <div className="mt-16 bg-[#FAF9F6]/5 border border-[#FAF9F6]/10 rounded-sm p-6 text-center max-w-4xl mx-auto">
          <p className="text-xs sm:text-sm font-sans italic text-[#FAF9F6]/90">
            "At Whispering Pines, our power grid is fully safeguarded by high-capacity quiet energy generators. 
            Coupled with double stable water pumping channels, our remote mountain stay remains entirely insulated from high altitude outages."
          </p>
        </div>

        {!hideLink && (
          <div className="mt-16 text-center">
            <a
              href="/resort-amenities-mukteshwar"
              className="inline-flex items-center justify-center px-8 py-3 sm:px-10 sm:py-4 bg-transparent border border-[#c9a832] text-[#FAF9F6] hover:bg-[#c9a832] hover:text-[#1B3322] font-mono text-[11px] sm:text-xs font-semibold uppercase tracking-widest transition-colors duration-300 rounded-sm group"
            >
              View All Amenities
              <ArrowRight className="w-4 h-4 ml-3 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        )}

      </div>
    </section>
  );
}
