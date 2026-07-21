import React from "react";

export default function OTABadges() {
  return (
    <section className="py-10 bg-[#efde64] border-y border-[#2C3531]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
          <p className="text-center md:text-left text-xs font-bold font-mono tracking-widest text-[#2C3531]/60 uppercase">
            We Are Listed On
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 opacity-80 hover:opacity-100 transition-opacity">
            <a 
              href="https://www.makemytrip.com/hotels/whispering_pines_resort_mukteshwar-details-bhowali.html" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-[#1B3322] hover:text-[#c9a832] transition-colors"
            >
              <img src="https://promos.makemytrip.com/Growth/Images/1x/mmt_dt_top_icon.png" alt="MakeMyTrip" className="h-6 object-contain" />
              <span className="font-bold text-sm tracking-wide">MakeMyTrip</span>
            </a>
            <a 
              href="https://www.goibibo.com/hotels/whispering-pines-resort-mukteshwar-hotel-in-bhowali-5090504030524027434/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-[#1B3322] hover:text-[#c9a832] transition-colors"
            >
              <div className="w-6 h-6 bg-[#2274E0] rounded-full flex items-center justify-center text-white font-bold text-[12px] tracking-tighter">
                go
              </div>
              <span className="font-bold text-sm tracking-wide">Goibibo</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
