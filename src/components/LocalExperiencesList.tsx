import React from "react";
import { MapPin, Compass, ArrowRight } from "lucide-react";
import { LOCAL_EXPERIENCES } from "../data";
import LazyImage from "./LazyImage";

interface LocalExperiencesListProps {
  hideLink?: boolean;
  title?: string;
  asH1?: boolean;
}

export default function LocalExperiencesList({ 
  hideLink = false, 
  title = "Local Sights & Highland Excursions",
  asH1 = false 
}: LocalExperiencesListProps = {}) {
  const HeadingTag = asH1 ? "h1" : "h2";

  return (
    <section id="experiences" className="py-20 lg:py-28 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-widest text-[#c9a832] uppercase block mb-2">
            Explore Uttarakhand
          </span>
          <HeadingTag className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B3322]">
            {title}
          </HeadingTag>
          <div className="w-16 h-[2px] bg-[#c9a832] mx-auto mt-4 mb-6" />
          <p className="text-sm sm:text-base text-[#2C3531]/80 font-sans leading-relaxed">
            If you are searching for the best <strong>things to do in Ramgarh</strong>, our location serves as a spectacular 
            central node. From historic mountain shrines and hidden waterfall treks to some of the most scenic 
            <strong>places to visit near Ramgarh Uttarakhand</strong>, your highland excursion begins here.
          </p>
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {LOCAL_EXPERIENCES.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-sm overflow-hidden border border-[#2C3531]/5 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full group"
            >
              {/* Image Column */}
              <div className="relative h-48 overflow-hidden shrink-0">
                <LazyImage
                  src={item.image}
                  alt={`Scenic local attractions: ${item.title} near Whispering Pines Cottage Mukteshwar`}
                  className="absolute inset-0 group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Distance Badge over Image */}
                <div className="absolute bottom-3 left-3 bg-[#FAF9F6] text-[#1B3322] px-2.5 py-1 rounded-sm text-[10px] font-mono font-bold tracking-wider uppercase flex items-center shadow-md">
                  <MapPin className="w-3 h-3 text-[#c9a832] mr-1" />
                  {item.distance}
                </div>
              </div>

              {/* Text Area */}
              <div className="p-5 flex flex-col justify-between flex-grow space-y-4">
                <div className="space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#c9a832] font-bold">
                    {item.tag}
                  </span>
                  <h3 className="font-display text-lg font-bold text-[#1B3322] leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#2C3531]/80 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#2C3531]/5">
                  <span className="text-[10px] font-mono text-[#2C3531]/50 uppercase tracking-wider flex items-center">
                    <Compass className="w-3.5 h-3.5 text-[#c9a832] mr-1.5" />
                    Trip consulting offered
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {!hideLink && (
          <div className="mt-16 text-center">
            <a
              href="/things-to-do-near-mukteshwar"
              className="inline-flex items-center justify-center px-8 py-3 sm:px-10 sm:py-4 bg-transparent border border-[#c9a832] text-[#1B3322] hover:bg-[#c9a832] hover:text-[#FAF9F6] font-mono text-[11px] sm:text-xs font-semibold uppercase tracking-widest transition-colors duration-300 rounded-sm group"
            >
              View All Excursions
              <ArrowRight className="w-4 h-4 ml-3 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
