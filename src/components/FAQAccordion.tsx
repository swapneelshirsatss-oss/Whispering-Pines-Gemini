import React, { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import type { FAQItem } from "../types";

const FALLBACK_FAQS: FAQItem[] = [
  {
    question: "Is there dedicated, secure private parking available on site?",
    answer: "Absolutely! The property features a secure, flat gated private gravel driveway that comfortably accommodates 3 to 4 tourist SUVs/sedans right in front of the villa. No tricky cliff-edge parking required."
  },
  {
    question: "Do you have high-speed internet suited for remote working?",
    answer: "Yes, we have high-speed dedicated fiber-optic internet connection (150 Mbps) supporting active work sessions, video calls, and streaming seamlessly throughout the villa and front outdoor gardens."
  },
  {
    question: "How do meals and dining work? Can we order customized food?",
    answer: "We offer delicious customized homestyle dining on-site. Our resident cook prepares fresh multi-cuisine meals and authentic local Kumaoni delicacies using locally-sourced organic vegetables."
  },
  {
    question: "Are pets allowed inside the villa and gardens?",
    answer: "Absolutely! We love pets and are completely dog-friendly. The villa has large, secure, enclosed front lawns and direct access to wilderness pine forest paths where your dogs can explore safely."
  },
  {
    question: "How does the WhatsApp booking process work?",
    answer: "To book, simply click select your room, guest count, and dates, then hit 'Instantly Book on WhatsApp'. Our customer service representative will respond in minutes and share secure UPI/Credit Card payment invoices."
  }
];

export default function FAQAccordion({ 
  faqs = FALLBACK_FAQS, 
  title = "Stay Details & F.A.Q.", 
  description = "Everything you need to know about parking, high-speed fiber internet, food cooking, pet friendly rules, and our simple secure WhatsApp reservation process." 
}: { 
  faqs?: FAQItem[],
  title?: string,
  description?: string
}) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggleFAQ = (idx: number) => {
    if (openIdx === idx) {
      setOpenIdx(null);
    } else {
      setOpenIdx(idx);
    }
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#FAF9F6] border-t border-[#2C3531]/10 cv-auto">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-widest text-[#c9a832] uppercase block mb-2">
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

        {/* FAQ list */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <article
                key={idx}
                className="bg-white border rounded-sm border-[#2C3531]/10 overflow-hidden transition-all duration-300"
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
                    {faq.question}
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
