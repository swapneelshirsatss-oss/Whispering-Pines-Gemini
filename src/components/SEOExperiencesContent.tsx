import React from 'react';
import { CheckCircle2, ShieldCheck, Map, Mountain, Leaf, Compass, Calendar } from 'lucide-react';

const SEO_CONTENT = [
  {
    id: "spiritual",
    sectionTitle: "Spiritual & Temple Experiences",
    h2: "Mukteshwar Dham Temple — The Most Sacred Thing to Do Near Mukteshwar",
    icon: <Mountain className="w-6 h-6 text-[#c9a832] mb-4" />,
    h3s: [
      "A 350-Year-Old Shiva Temple Perched at 2,286 Metres Above Sea Level",
      "Panoramic Views of Nanda Devi & Trishul Peaks from the Temple Summit",
      "25 km from Whispering Pines — 45-Minute Scenic Drive on Mukteshwar Road",
      "Kainchi Dham Visit from Ramgarh — Neem Karoli Baba Ashram Day Trip",
      "Best Time to Visit Kainchi Dham — Early Morning Darshan from the Resort",
      "Trip Consulting & Cab Arrangement Available Directly from Our Travel Desk"
    ],
    eeat: "Our travel desk has coordinated over 500 temple excursions for guests — we know the quietest arrival windows, the best local dhabas on the route, and which days to avoid crowds at both Mukteshwar Dham and Kainchi Dham."
  },
  {
    id: "adventure",
    sectionTitle: "Adventure & Cliff Experiences",
    h2: "Chauli Ki Jali Rocks — Paragliding, Rock Climbing & Sunset Views Near Mukteshwar",
    icon: <Compass className="w-6 h-6 text-[#c9a832] mb-4" />,
    h3s: [
      "A Dramatic Cliff Formation Adjacent to Mukteshwar Dham Temple",
      "Paragliding Launch Site with Unobstructed Himalayan Valley Views",
      "Rock Climbing Routes for Beginners & Experienced Climbers — Guided Sessions",
      "Best Sunset Viewpoint Near Mukteshwar — Golden Hour Over the Kumaon Ranges",
      "25 km Drive from Ramgarh — Combine with Mukteshwar Temple for a Full Day Out",
      "Adventure Activity Bookings Arranged via Our In-House Travel Desk"
    ],
    eeat: "Chauli Ki Jali sits at the edge of a dramatic escarpment — our guides brief guests on safe approach routes, paragliding operator credentials, and the optimal time of day for the clearest ridge views. Not something a travel aggregator can offer."
  },
  {
    id: "nature",
    sectionTitle: "Nature Trekking Experiences",
    h2: "Bhalu Gaad Waterfall Trek — Best Nature Trek Near Nainital & Ramgarh",
    icon: <Map className="w-6 h-6 text-[#c9a832] mb-4" />,
    h3s: [
      "A Hidden 2km Pine Canopy Trek to a Natural Waterfall & Plunge Pool",
      "12 km from Whispering Pines — 20-Minute Drive Then a Gentle Forest Walk",
      "Suitable for Families, Children & First-Time Trekkers Near Nainital",
      "Himalayan Bird Watching Along the Bhalu Gaad Stream Trail",
      "Spot Kalij Pheasants, Himalayan Bulbuls & Forest Eagles on the Route",
      "Guided Trek Arrangements & Forest Trail Maps from Our Travel Desk"
    ],
    eeat: "The Bhalu Gaad trail passes through three distinct forest zones — deodar, oak scrub, and riparian pine. Our guides identify bird species along the stream corridor for guests interested in Himalayan bird watching — a detail no OTA listing will ever tell you."
  },
  {
    id: "orchard",
    sectionTitle: "Orchard & Village Experiences",
    h2: "Malla Ramgarh Fruit Orchards — Uttarakhand's Most Immersive Local Experience",
    icon: <Leaf className="w-6 h-6 text-[#c9a832] mb-4" />,
    h3s: [
      "Ramgarh — The Fruit Bowl of Kumaon, Right Outside Your Resort",
      "Walk Through Peach, Plum, Apple & Apricot Orchards in Full Blossom",
      "0.5 km from Whispering Pines — A Direct Walking Trail from the Property Gate",
      "Fruit Orchard Stay Ramgarh — Harvest Chemical-Free Seasonal Hill Fruits",
      "Best Season for Orchard Walks — March to May (Blossom) & August to October (Harvest)",
      "A Slow, Sensory Experience Unlike Anything in Commercial Nainital Tourism"
    ],
    eeat: "Ramgarh's orchards have been cultivated since the British colonial era — our property sits within an active working orchard of peach, plum, apple, and apricot trees. Guests on extended stays can participate in supervised fruit picking during harvest season with our orchard caretaker."
  },
  {
    id: "weekend",
    sectionTitle: "Weekend Itinerary Planning",
    h2: "Places to Visit Near Ramgarh — Your Complete Uttarakhand Weekend Itinerary",
    icon: <Calendar className="w-6 h-6 text-[#c9a832] mb-4" />,
    h3s: [
      "Day 1 — Check In, Orchard Walk & Bonfire Evening at Whispering Pines",
      "Day 2 — Morning Trek to Bhalu Gaad Falls & Afternoon at Chauli Ki Jali",
      "Day 3 — Mukteshwar Dham Temple & Kainchi Dham Visit Before Check-Out",
      "Weekend Itinerary for Families — Paced for Children & Senior Guests",
      "Honeymoon Weekend Plan — Sunset Cliff Views, Orchard Evenings & In-Room Dining",
      "Corporate Offsite Itinerary — Mukteshwar Day Excursion + Resort Team Activities"
    ],
    eeat: "Our itineraries are built on actual guest feedback. We pace our recommendations so you never feel rushed, taking into account mountain driving speeds and local sunset times to ensure you experience Uttarakhand at its best."
  }
];

export default function SEOExperiencesContent() {
  return (
    <section className="py-16 lg:py-24 bg-white border-t border-[#2C3531]/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-widest text-[#c9a832] uppercase block mb-2">
            Detailed Guide
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1B3322]">
            Deep Dive: Your Mukteshwar & Ramgarh Itinerary
          </h2>
          <div className="w-16 h-[2px] bg-[#c9a832] mx-auto mt-4 mb-6" />
        </div>

        <div className="space-y-20">
          {SEO_CONTENT.map((section, index) => (
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
