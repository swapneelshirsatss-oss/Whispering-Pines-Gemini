import React from "react";
import { Utensils, Flame, Car, Sparkles, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { RESORT_SERVICES } from "../data";

const iconMap: Record<string, LucideIcon> = {
  Utensils,
  Flame,
  Car,
  Sparkles
};

interface ServicesSectionProps {
  hideLink?: boolean;
}

export default function ServicesSection({ hideLink = false }: ServicesSectionProps = {}) {
  return (
    <section id="services" className="py-20 lg:py-28 bg-[#FAF9F6] text-[#2C3531]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-widest text-[#c9a832] uppercase block mb-2 animate-pulse">
            Premium Resort Services
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1B3322]">
            Dedicated Personal Care
          </h2>
          <div className="w-16 h-[2px] bg-[#c9a832] mx-auto mt-4 mb-6" />
          <p className="text-sm sm:text-base text-[#2C3531]/80 font-sans leading-relaxed">
            Our dedicated team is always on hand to provide personalized services that elevate your stay.
            From in-room dining to tailored travel assistance, we ensure every moment is effortless.
          </p>
        </div>

        {/* Grid Box */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {RESORT_SERVICES.map((service, idx) => {
            const IconComponent = iconMap[service.icon] || Sparkles;
            return (
              <div
                key={idx}
                className="bg-white hover:bg-[#1B3322]/5 border border-[#2C3531]/10 hover:border-[#c9a832]/50 p-6 sm:p-8 rounded-sm hover:shadow-xl transition-all duration-300 group"
              >
                {/* Visual Icon Container */}
                <div className="w-12 h-12 bg-[#1B3322]/5 group-hover:bg-[#c9a832] rounded-sm flex items-center justify-center mb-6 transition-all duration-300">
                  <IconComponent className="w-6 h-6 text-[#c9a832] group-hover:text-[#1B3322] transition-colors duration-300" />
                </div>
                
                {/* Title */}
                <h3 className="text-lg font-display font-semibold text-[#1B3322] mb-3">
                  {service.title}
                </h3>
                
                {/* description */}
                <p className="text-xs sm:text-sm text-[#2C3531]/75 font-sans leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {!hideLink && (
          <div className="mt-16 text-center">
            <a
              href="/services"
              className="inline-flex items-center justify-center px-8 py-3 sm:px-10 sm:py-4 bg-transparent border border-[#c9a832] text-[#1B3322] hover:bg-[#c9a832] hover:text-[#FAF9F6] font-mono text-[11px] sm:text-xs font-semibold uppercase tracking-widest transition-colors duration-300 rounded-sm group"
            >
              View All Services
              <ArrowRight className="w-4 h-4 ml-3 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        )}

      </div>
    </section>
  );
}
