import React from "react";
import { Star, ShieldCheck } from "lucide-react";
import { TESTIMONIALS } from "../data";

export default function TestimonialList() {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-[#1B3322]/5 border-t border-[#2C3531]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-widest text-[#c9a832] uppercase block mb-2">
            Shared Memories
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1B3322]">
            What Our Guests Cherish
          </h2>
          <div className="w-16 h-[2px] bg-[#c9a832] mx-auto mt-4 mb-6" />
          <p className="text-sm text-[#2C3531]/80 font-sans leading-relaxed">
            Read certified check-in journals from actual families and remote professionals who made 
            Malla Ramgarh's Whispering Pines their home.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((review, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#2C3531]/10 p-6 sm:p-8 rounded-sm shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Stars bar */}
                <div className="flex space-x-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#c9a832] text-[#c9a832]" />
                  ))}
                </div>
                
                {/* Comment Text */}
                <p className="text-xs sm:text-sm text-[#2C3531]/90 font-sans italic leading-relaxed italic">
                  "{review.comment}"
                </p>
              </div>

              {/* Reviewer Meta Footer Column */}
              <div className="mt-6 pt-4 border-t border-[#2C3531]/5 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#1B3322] font-sans">
                    {review.name}
                  </h4>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#2C3531]/50 block">
                    Stayed: {review.date}
                  </span>
                </div>
                
                {/* Platform Badge */}
                <p className="bg-[#1B3322]/10 text-[#1B3322] border border-[#1B3322]/15 rounded-sm px-2.5 py-1 text-[9px] font-mono tracking-wider flex items-center shrink-0">
                  <ShieldCheck className="w-3 h-3 text-[#c9a832] mr-1" />
                  {review.source}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
