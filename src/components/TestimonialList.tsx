import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "../data";

const avatarColors = [
  "bg-[#4285F4]", "bg-[#DB4437]", "bg-[#F4B400]", "bg-[#0F9D58]", 
  "bg-[#673AB7]", "bg-[#009688]", "bg-[#795548]", "bg-[#E91E63]"
];

const getAvatarColor = (name: string) => {
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
  return avatarColors[Math.abs(hash) % avatarColors.length];
};

export default function TestimonialList() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { clientWidth } = scrollContainerRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth : clientWidth;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="reviews" className="py-20 lg:py-28 bg-[#1B3322] border-t border-[#1B3322] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-mono tracking-widest text-[#c9a832] uppercase block mb-2">
            Shared Memories
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#FAF9F6]">
            What Our Guests Cherish
          </h2>
          <div className="w-16 h-[2px] bg-[#c9a832] mx-auto mt-4 mb-6" />
          <p className="text-sm text-[#FAF9F6]/80 font-sans leading-relaxed">
            Read certified check-in journals from actual families and remote professionals who made 
            Malla Ramgarh's Whispering Pines their home.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 z-10 hidden sm:block">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`p-2 rounded-full bg-[#FAF9F6] text-[#1B3322] shadow-lg transition-all ${
                !canScrollLeft ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#c9a832] hover:text-[#FAF9F6] hover:scale-110'
              }`}
              aria-label="Previous review"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 z-10 hidden sm:block">
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`p-2 rounded-full bg-[#FAF9F6] text-[#1B3322] shadow-lg transition-all ${
                !canScrollRight ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#c9a832] hover:text-[#FAF9F6] hover:scale-110'
              }`}
              aria-label="Next review"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Reviews Scroll Track */}
          <div 
            ref={scrollContainerRef}
            onScroll={checkScroll}
            className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-6 pb-8 -mx-4 px-4 sm:mx-0 sm:px-0"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {TESTIMONIALS.map((review, idx) => (
              <div
                key={idx}
                className="w-[85vw] sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] shrink-0 snap-center bg-white border border-[#e8eaed] p-5 sm:p-6 rounded-xl shadow-sm flex flex-col justify-start"
              >
                {/* Google My Business Review Header */}
                <div className="flex items-center space-x-3 mb-3">
                  <div className={`w-10 h-10 rounded-full ${getAvatarColor(review.name)} flex items-center justify-center text-white font-bold font-sans text-lg`}>
                    {review.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#202124] font-sans">
                      {review.name}
                    </h4>
                    <span className="text-xs text-[#70757a] font-sans block">
                      {review.date}
                    </span>
                  </div>
                  {/* Google G Logo Badge */}
                  <div className="ml-auto flex items-start self-start pt-1">
                    <svg viewBox="0 0 24 24" className="w-4 h-4">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                    </svg>
                  </div>
                </div>

                {/* Stars bar */}
                <div className="flex space-x-[2px] mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-[#fbbc04] fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                
                {/* Comment Text */}
                <p className="text-[13px] sm:text-sm text-[#3c4043] font-sans leading-relaxed">
                  {review.comment}
                </p>
              </div>
            ))}
          </div>
          
          {/* Mobile Swipe Indicator */}
          <div className="flex justify-center mt-6 sm:hidden space-x-1.5 flex-wrap px-4 gap-y-2">
            {TESTIMONIALS.map((_, i) => (
              <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === 0 ? 'w-6 bg-[#4285F4]' : 'w-1.5 bg-[#e8eaed]'}`} />
            ))}
          </div>
        </div>

        {/* Third-Party Review Widget Placeholder */}
        {/* To inject a live Google My Business review widget (e.g., from Elfsight, EmbedSocial, etc.), 
            you can paste their provided embed code inside a div here using dangerouslySetInnerHTML, 
            or embed an iframe. 
            Example: 
            <div dangerouslySetInnerHTML={{ __html: '<script src="..."></script><div class="..."></div>' }} />
        */}
        
        {/* Google My Business Action Button */}
        <div className="mt-12 text-center">
          <a
            href="https://maps.google.com/?cid=8386667112972057918" // This is the gmapsLink from data.ts
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-white px-6 py-3 rounded-sm text-sm font-semibold text-[#1B3322] hover:bg-[#f1f1f1] transition-colors shadow-lg"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#4285F4] fill-current">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            <span>See our reviews on Google</span>
          </a>
        </div>
      </div>
    </section>
  );
}
