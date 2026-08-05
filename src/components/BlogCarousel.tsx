import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight, Clock, Calendar } from "lucide-react";
import { BLOG_POSTS, type BlogPostData } from "../data/blogPosts";

export default function BlogCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.clientWidth * 0.85;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-20 bg-[#FAF9F6] border-t border-[#EAE8E3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono text-[#c9a832] uppercase tracking-[0.25em] font-semibold block">
              Himalayan Journal & Travel Guides
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#1B3322]">
              Latest Stories, Itineraries & Local Insights
            </h2>
            <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
              Explore expert travel guides for Mukteshwar, Kainchi Dham Ashram, Ramgarh fruit orchards, and Kumaon Himalayan retreats.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/blog/"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#1B3322] hover:text-[#c9a832] transition-colors group px-4 py-2.5 rounded-full border border-[#EAE8E3] bg-white shadow-sm mr-2"
            >
              View All Articles
              <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
            </a>

            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                aria-label="Previous Articles"
                className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 ${
                  canScrollLeft
                    ? "bg-white border-[#EAE8E3] text-[#1B3322] hover:bg-[#1B3322] hover:text-[#c9a832] hover:border-[#1B3322] shadow-sm cursor-pointer"
                    : "bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed opacity-50"
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                aria-label="Next Articles"
                className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 ${
                  canScrollRight
                    ? "bg-white border-[#EAE8E3] text-[#1B3322] hover:bg-[#1B3322] hover:text-[#c9a832] hover:border-[#1B3322] shadow-sm cursor-pointer"
                    : "bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed opacity-50"
                }`}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Carousel Container */}
        <div
          ref={scrollContainerRef}
          onScroll={checkScroll}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-6 pt-2 -mx-4 px-4 sm:mx-0 sm:px-0"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {BLOG_POSTS.map((post: BlogPostData) => {
            const articleUrl = post.customUrl || `/blog/${post.slug}/`;
            return (
              <div
                key={post.id}
                className="w-[85vw] sm:w-[380px] lg:w-[400px] shrink-0 snap-start"
              >
                <article className="bg-white rounded-2xl border border-[#EAE8E3] overflow-hidden hover:shadow-xl hover:border-[#c9a832]/40 transition-all duration-300 flex flex-col h-full group">
                  <a
                    href={articleUrl}
                    className="h-52 w-full overflow-hidden block relative shrink-0"
                  >
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-[#1B3322] text-[#c9a832] text-[10px] font-bold uppercase px-3 py-1 rounded-full shadow-md">
                      Guide
                    </div>
                  </a>

                  <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-xs text-gray-500 font-medium">
                        <span className="inline-flex items-center gap-1 text-[#1B3322]">
                          <Calendar className="w-3.5 h-3.5 text-[#c9a832]" />
                          {post.date}
                        </span>
                        <span>•</span>
                        <span className="inline-flex items-center gap-1 text-gray-500">
                          <Clock className="w-3.5 h-3.5 text-[#c9a832]" />
                          {post.readTime}
                        </span>
                      </div>

                      <a href={articleUrl} className="block group/title">
                        <h3 className="text-lg font-bold font-display text-[#1B3322] leading-snug group-hover/title:text-[#c9a832] transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                      </a>

                      <p className="text-xs text-gray-600 font-light leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-[#1B3322] text-[#c9a832] flex items-center justify-center font-bold text-[10px] border border-[#c9a832]">
                          GP
                        </div>
                        <span className="text-xs font-semibold text-[#1B3322]">Gaurav Pandey</span>
                      </div>

                      <a
                        href={articleUrl}
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#1B3322] group-hover:text-[#c9a832] transition-colors"
                      >
                        Read Guide
                        <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
