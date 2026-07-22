import React from 'react';
import { CheckCircle2, ShieldCheck, History, MapPin, Hammer, Star, HeartHandshake } from 'lucide-react';

const SEO_ABOUT_CONTENT = [
  {
    id: "legacy",
    sectionTitle: "Casa De Bello Legacy & Brand Story",
    h2: "Continuing the Legacy of Clarks Exotica Near Mukteshwar",
    icon: <History className="w-6 h-6 text-[#c9a832] mb-4" />,
    h3s: [
      "From Clarks Exotica to Casa De Bello — Upgraded, Not Changed",
      "Same Hospitality, New Identity on Bhowali-Ramgarh-Mukteshwar Road",
      "Loyal Guests, Familiar Faces — Now with Premium Enhancements"
    ],
    eeat: "Casa De Bello is a boutique hill-station retreat and resort located in Bhowali (near Nainital), Uttarakhand. It is a popular, upscale basecamp for travelers exploring the Kumaon region, sitting approximately 30 minutes from the famous Kainchi Dham ashram."
  },
  {
    id: "location",
    sectionTitle: "Location & Setting",
    h2: "Perched at 1,780 Metres in the Heart of Kumaon, Uttarakhand",
    icon: <MapPin className="w-6 h-6 text-[#c9a832] mb-4" />,
    h3s: [
      "Malla Ramgarh — Ramgarh's Most Scenic Ridge Address",
      "6–8 Hours from Delhi, A World Away from City Noise",
      "Basecamp for Mukteshwar, Kainchi Dham & Kumaon Trails"
    ],
    eeat: "Our exact geographic positioning on the Malla Ramgarh ridge at 1,780 meters altitude uniquely shields the property from highway noise while providing immediate access to major arterial routes linking Nainital and Mukteshwar."
  },
  {
    id: "philosophy",
    sectionTitle: "Property Philosophy",
    h2: "Where Artisanal Mountain Architecture Meets Modern Comfort",
    icon: <Hammer className="w-6 h-6 text-[#c9a832] mb-4" />,
    h3s: [
      "Hand-Crafted Stone Walls by Native Kumaoni Craftsmen",
      "Cedar Pine Interiors That Breathe Mountain Character",
      "Private Fruit Orchards of Peach, Plum, Apple & Apricot"
    ],
    eeat: "We deliberately employed indigenous Kumaoni artisans during construction. The exposed stone archways and authentic cedar wood finishes are structurally authentic to the region, maintaining the ecological and cultural heritage of Uttarakhand."
  },
  {
    id: "whyus",
    sectionTitle: "Why Choose Us",
    h2: "What Makes Us Uttarakhand's Most Loved Mountain Resort",
    icon: <HeartHandshake className="w-6 h-6 text-[#c9a832] mb-4" />,
    h3s: [
      "180° Unobstructed Views of Nanda Devi & Trishul Peaks",
      "Pet-Friendly Resort with Enclosed Garden Trails",
      "150 Mbps Fiber Wi-Fi for Workcation & Remote Work Stays"
    ],
    eeat: "By installing enterprise-grade 150 Mbps fiber optics deep in the Himalayas and ensuring completely enclosed, safe trails for pets, we bridge the gap between absolute remote wilderness and modern luxury necessities."
  },
  {
    id: "trust",
    sectionTitle: "Trust & Recognition",
    h2: "Rated 4.9 by 350+ Guests — India's Top Boutique Stay",
    icon: <Star className="w-6 h-6 text-[#c9a832] mb-4" />,
    h3s: [
      "Featured on MakeMyTrip, Goibibo & Booking.com",
      "Verified Reviews from Families, Couples & Digital Nomads",
      "Direct WhatsApp Booking — Best Price Guarantee, Always"
    ],
    eeat: "Our 4.9 rating isn't an accident. We manage every guest interaction personally. Booking directly via our official WhatsApp ensures you bypass aggregator fees while directly speaking with the team that will host you on the mountain."
  }
];

export default function SEOAboutContent() {
  return (
    <section className="py-16 lg:py-24 bg-white border-t border-[#2C3531]/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-widest text-[#c9a832] uppercase block mb-2">
            The Resort
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1B3322]">
            Discover the Whispering Pines Story
          </h2>
          <div className="w-16 h-[2px] bg-[#c9a832] mx-auto mt-4 mb-6" />
        </div>

        <div className="space-y-20">
          {SEO_ABOUT_CONTENT.map((section, index) => (
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
