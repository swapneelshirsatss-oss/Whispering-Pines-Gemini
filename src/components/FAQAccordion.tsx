import React, { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import type { FAQItem } from "../types";
import { CONTACT_FAQS } from "../data";

export default function FAQAccordion({ 
  faqs = CONTACT_FAQS, 
  title = "Stay Details & Frequently Asked Questions", 
  description = "Everything you need to know about direct booking discounts, 180° Himalayan views, fresh food dining, pet policies, driving directions from Delhi, and our seamless WhatsApp booking concierge." 
}: { 
  faqs?: FAQItem[],
  title?: string,
  description?: string
}) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  // Extract distinct categories from FAQ items
  const categories = Array.from(
    new Set(faqs.map((f) => f.category).filter(Boolean))
  ) as string[];

  const filteredFaqs = activeCategory === "all"
    ? faqs
    : faqs.filter((f) => f.category === activeCategory);

  const toggleFAQ = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#FAF9F6] border-t border-[#2C3531]/10 cv-auto">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono tracking-widest text-[#c9a832] uppercase block mb-2 font-semibold">
            Answering Your Questions
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1B3322]">
            {title}
          </h2>
          <div className="w-16 h-[2px] bg-[#c9a832] mx-auto mt-4 mb-6" />
          <p className="text-sm text-[#2C3531]/80 font-sans leading-relaxed">
            {description}
          </p>
        </div>

        {/* Dynamic Category Filter Tabs */}
        {categories.length > 1 && (
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            <button
              type="button"
              onClick={() => {
                setActiveCategory("all");
                setOpenIdx(null);
              }}
              className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
                activeCategory === "all"
                  ? "bg-[#1B3322] text-[#FAF9F6] shadow-sm font-bold"
                  : "bg-white text-[#2C3531]/75 border border-[#2C3531]/15 hover:border-[#1B3322] hover:text-[#1B3322]"
              }`}
            >
              All Questions ({faqs.length})
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setActiveCategory(cat);
                  setOpenIdx(null);
                }}
                className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-[#1B3322] text-[#FAF9F6] shadow-sm font-bold"
                    : "bg-white text-[#2C3531]/75 border border-[#2C3531]/15 hover:border-[#1B3322] hover:text-[#1B3322]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* FAQ list */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <article
                key={idx}
                className="bg-white border rounded-sm border-[#2C3531]/10 overflow-hidden transition-all duration-300 hover:border-[#c9a832]/40 shadow-xs"
              >
                {/* FAQ Header Click Trigger Button */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-sans focus:outline-none focus:bg-[#1B3322]/5"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-bold text-[#1B3322] text-base sm:text-lg flex items-center">
                    <HelpCircle className="w-5 h-5 text-[#c9a832] mr-3 shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <span className="text-[#c9a832] shrink-0">
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </span>
                </button>

                {/* Collapsible Content Area */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-[1000px] border-t border-[#2C3531]/5 p-5 sm:p-6 bg-[#FAF9F6]/40" : "max-h-0"
                  }`}
                >
                  <p className="speakable-faq-answer text-xs sm:text-sm text-[#2C3531]/95 font-sans leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
