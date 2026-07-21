import React from "react";
import { Trees, Compass, Home, ArrowRight } from "lucide-react";
import { RESORT_CONTACT } from "../data";
import resortDiningHallImg from "../assets/images/resort_dining_hall_1782030904946.avif?url";
import balconyViewImg from "../assets/images/Whispering-pines-balcony-view-nanital.webp?url";
import LazyImage from "./LazyImage";
import { motion } from "motion/react";

interface AboutSectionProps {
  hideLink?: boolean;
}

export default function AboutSection({ hideLink = false }: AboutSectionProps = {}) {
  const USPList = [
    {
      title: "Alpine Heritage Design",
      icon: Home,
      desc: "Artisanal hand-crafted stone walls and solid pine wood beams built by native local craftsman, bringing Kumaoni architecture into seamless harmony with modern comfort.",
    },
    {
      title: "Ramgarh Fruit Hub",
      icon: Trees,
      desc: "Our cottage is situated within sweet orchards of peach, plum, apricot and apple trees. Enjoy harvesting juicy, ripe chemical-free seasonal hill fruits.",
    },
    {
      title: "180° Himalayan Peaks",
      icon: Compass,
      desc: "Gaze at the massive Nanda Devi range, Trishul, and Panchachuli snowy crowns. The clear ridge heights of Malla Ramgarh provide unmatched morning view quality.",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          {/* Narrative - Left */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono tracking-widest text-[#c9a832] uppercase block">
              Escape to the Heights
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1B3322]">
              A Cozy Sanctuary Amidst Fruit Orchards & Whispering Pines
            </h2>
            <div className="w-16 h-[2px] bg-[#c9a832] my-4" />
            
            <p className="text-[17px] sm:text-lg text-[#2C3531]/90 font-sans leading-relaxed">
              Tucked away on the scenic Bhowali-Ramgarh-Mukteshwar Road in Malla Ramgarh, 
              <strong> Whispering Pines by Casa De Bello</strong> (formerly known as <strong>Clarks Exotica</strong> and locally revered as <a href="https://casadebello.com/" target="_blank" rel="noreferrer" className="italic hover:text-[#c9a832] underline decoration-[#c9a832]/30 underline-offset-2 transition-colors">Casa De Bello - Whistling Pines</a>) 
              is widely recognized as the best resort in Ramgarh. Continuing the legacy of the Clarks Exotica brand, we ensure our loyal customers and new guests experience the ultimate mountain resort near Nainital and Mukteshwar. Perched at an altitude of 1,780 meters, this 
              premium sanctuary offers private fruit orchards and absolute solace, away from the humdrum of city traffic.
            </p>
            <p className="text-[17px] sm:text-lg text-[#2C3531]/90 font-sans leading-relaxed">
              Every detail of the cottage has been designed to maximize panoramic visual contact with nature. 
              Mornings feature fresh Himalayan breezes filtering through pine canopies, warm tea under the sunlit fruit 
              orchards, and spectacular views of snowy peaks. Cozy pine-paneled rooms and our resident fireplace 
              complete this picture-perfect alpine haven.
            </p>

            <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6">
              {USPList.map((item, idx) => (
                <div key={idx} className="space-y-3 sm:space-y-2 border-l-2 sm:border-l border-[#c9a832]/40 pl-5 sm:pl-4 py-1">
                  <div className="flex items-center space-x-3 sm:space-x-2">
                    <item.icon className="w-6 h-6 sm:w-5 sm:h-5 text-[#c9a832]" />
                    <h4 className="font-bold text-base sm:text-sm text-[#1B3322] font-sans">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-sm sm:text-xs text-[#2C3531]/80 leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Graphics - Right */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-sm overflow-hidden shadow-2xl">
              {/* Main Photo */}
              <LazyImage
                src={balconyViewImg}
                alt="Beautiful and elegant wood-crafted bedroom inside Whispering Pines Resort"
                className="group w-full aspect-[4/3] sm:aspect-auto sm:h-[480px] lg:h-[520px]"
                imgClassName="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
                priority={true}
              />
              {/* Highlight Overlay */}
              <div className="absolute inset-0 bg-[#1B3322]/5 mix-blend-multiply" />
            </div>

            {/* Float Badge */}
            <div className="absolute -bottom-6 -left-6 bg-[#1B3322] text-[#FAF9F6] p-6 rounded-sm shadow-xl max-w-xs border border-[#c9a832]/30 hidden sm:block">
              <span className="font-display italic text-2xl text-[#c9a832] block mb-1">
                "Pure Serenity..."
              </span>
              <p className="text-xs font-sans text-white/80 leading-relaxed">
                "The quiet apple orchards, deep wood ceilings, and high-speed Wi-Fi turned our mountain stay into an unforgettable dream."
              </p>
              <span className="text-[10px] uppercase font-mono text-[#c9a832] mt-3 block">
                — Airbnb Guest Priya S.
              </span>
            </div>
            
            {/* Background Decorative Frame */}
            <div className="absolute -top-4 -right-4 h-full w-full border border-[#c9a832]/50 -z-10 rounded-sm" />
          </div>
        </motion.div>

        {!hideLink && (
          <div className="mt-16 text-center">
            <a
              href="/about"
              className="inline-flex items-center justify-center px-8 py-3 sm:px-10 sm:py-4 bg-transparent border border-[#c9a832] text-[#1B3322] hover:bg-[#c9a832] hover:text-[#FAF9F6] font-mono text-[11px] sm:text-xs font-semibold uppercase tracking-widest transition-colors duration-300 rounded-sm group"
            >
              Discover More About Us
              <ArrowRight className="w-4 h-4 ml-3 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
