import React, { useState } from 'react';
import { 
  Car, 
  Plane, 
  Train, 
  Bus, 
  Navigation, 
  Clock, 
  MapPin, 
  Compass, 
  ArrowUpRight, 
  ExternalLink,
  MessageSquareQuote,
  ShieldCheck,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { TRANSIT_ROUTES, type TransitRoute } from '../data/transitMatrix';
import { RESORT_CONTACT, generateWhatsAppLink } from '../data';

interface DistanceTransitMatrixProps {
  initialCategory?: "all" | "transit_hubs" | "local_sights";
  title?: string;
  subtitle?: string;
  className?: string;
  hideHeader?: boolean;
}

export default function DistanceTransitMatrix({
  initialCategory = "all",
  title = "Distance & Transit Matrix — Connectivity & Travel Times",
  subtitle = "Accurate driving distances, estimated durations, and verified Google Maps turn-by-turn routes to Whispering Pines Resort in Malla Ramgarh.",
  className = "",
  hideHeader = false
}: DistanceTransitMatrixProps) {
  const [activeTab, setActiveTab] = useState<"all" | "transit_hubs" | "local_sights">(initialCategory);

  const filteredRoutes = activeTab === "all" 
    ? TRANSIT_ROUTES 
    : TRANSIT_ROUTES.filter(route => route.category === activeTab);

  const renderIcon = (iconType: TransitRoute['iconType']) => {
    switch (iconType) {
      case 'plane':
        return <Plane className="w-4 h-4 text-[#c9a832]" />;
      case 'train':
        return <Train className="w-4 h-4 text-[#c9a832]" />;
      case 'bus':
        return <Bus className="w-4 h-4 text-[#c9a832]" />;
      case 'temple':
        return <Sparkles className="w-4 h-4 text-[#c9a832]" />;
      case 'lake':
        return <Compass className="w-4 h-4 text-[#c9a832]" />;
      case 'mountain':
        return <MapPin className="w-4 h-4 text-[#c9a832]" />;
      case 'car':
      default:
        return <Car className="w-4 h-4 text-[#c9a832]" />;
    }
  };

  return (
    <section className={`w-full py-12 ${className}`} id="distance-matrix">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        {!hideHeader && (
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1B3322]/5 border border-[#1B3322]/15 text-[#1B3322] font-mono text-xs uppercase tracking-wider mb-3">
              <Compass className="w-3.5 h-3.5 text-[#c9a832]" />
              <span>Travel Time & Route Planner</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1B3322] tracking-tight">
              {title}
            </h2>
            <div className="w-16 h-[2px] bg-[#c9a832] mx-auto my-3.5"></div>
            <p className="text-sm sm:text-base text-gray-600 font-sans leading-relaxed">
              {subtitle}
            </p>
          </div>
        )}

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
          <button
            type="button"
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2 rounded-full text-xs font-mono font-semibold transition-all flex items-center gap-2 shadow-sm ${
              activeTab === "all"
                ? "bg-[#1B3322] text-[#FAF9F6] ring-2 ring-[#c9a832]"
                : "bg-white text-gray-700 hover:bg-[#FAF9F6] border border-[#EAE8E3]"
            }`}
          >
            <span>All 9 Routes</span>
            <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
              activeTab === "all" ? "bg-[#c9a832] text-[#1B3322] font-bold" : "bg-gray-100 text-gray-600"
            }`}>
              9
            </span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("transit_hubs")}
            className={`px-4 py-2 rounded-full text-xs font-mono font-semibold transition-all flex items-center gap-2 shadow-sm ${
              activeTab === "transit_hubs"
                ? "bg-[#1B3322] text-[#FAF9F6] ring-2 ring-[#c9a832]"
                : "bg-white text-gray-700 hover:bg-[#FAF9F6] border border-[#EAE8E3]"
            }`}
          >
            <Plane className="w-3.5 h-3.5 text-[#c9a832]" />
            <span>Transit Hubs & Metros</span>
            <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
              activeTab === "transit_hubs" ? "bg-[#c9a832] text-[#1B3322] font-bold" : "bg-gray-100 text-gray-600"
            }`}>
              5
            </span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("local_sights")}
            className={`px-4 py-2 rounded-full text-xs font-mono font-semibold transition-all flex items-center gap-2 shadow-sm ${
              activeTab === "local_sights"
                ? "bg-[#1B3322] text-[#FAF9F6] ring-2 ring-[#c9a832]"
                : "bg-white text-gray-700 hover:bg-[#FAF9F6] border border-[#EAE8E3]"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#c9a832]" />
            <span>Sightseeing & Temples</span>
            <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
              activeTab === "local_sights" ? "bg-[#c9a832] text-[#1B3322] font-bold" : "bg-gray-100 text-gray-600"
            }`}>
              4
            </span>
          </button>
        </div>

        {/* Desktop Table View (Hidden on Mobile) */}
        <div className="hidden lg:block bg-white rounded-2xl border border-[#EAE8E3] shadow-md overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#1B3322] text-[#FAF9F6] font-mono text-xs uppercase tracking-wider border-b border-[#c9a832]/30">
                <th className="py-4 px-5">Origin Point</th>
                <th className="py-4 px-4">Transport Mode</th>
                <th className="py-4 px-4 text-center">Distance</th>
                <th className="py-4 px-4 text-center">Duration</th>
                <th className="py-4 px-5">Recommended Highway Route</th>
                <th className="py-4 px-5 text-right">Google Maps</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-xs sm:text-sm font-sans">
              {filteredRoutes.map((route, idx) => (
                <tr 
                  key={route.id} 
                  className={`hover:bg-[#FAF9F6] transition-colors ${
                    idx % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                  }`}
                >
                  {/* Origin */}
                  <td className="py-4 px-5">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#1B3322]/5 flex items-center justify-center shrink-0 mt-0.5 border border-[#1B3322]/10">
                        {renderIcon(route.iconType)}
                      </div>
                      <div>
                        <div className="font-bold text-[#1B3322] text-sm">
                          {route.origin}
                        </div>
                        {route.badge && (
                          <span className="inline-block mt-1 text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-[#c9a832]/15 text-[#1B3322] font-semibold border border-[#c9a832]/30">
                            {route.badge}
                          </span>
                        )}
                      </div>
                    </div>
                  </td>

                  {/* Mode */}
                  <td className="py-4 px-4 text-gray-600 font-medium">
                    {route.mode}
                  </td>

                  {/* Distance */}
                  <td className="py-4 px-4 text-center">
                    <span className="font-mono font-bold text-sm text-[#1B3322] bg-[#FAF9F6] px-2.5 py-1 rounded border border-[#EAE8E3]">
                      {route.distanceKm}
                    </span>
                  </td>

                  {/* Duration */}
                  <td className="py-4 px-4 text-center">
                    <span className="inline-flex items-center gap-1 font-mono text-xs font-semibold text-[#1B3322] bg-[#c9a832]/20 px-2.5 py-1 rounded-full border border-[#c9a832]/40 whitespace-nowrap">
                      <Clock className="w-3 h-3 text-[#1B3322]" />
                      {route.duration}
                    </span>
                  </td>

                  {/* Route & Path */}
                  <td className="py-4 px-5 text-xs text-gray-600 max-w-xs">
                    <div className="font-semibold text-[#1B3322] mb-0.5">
                      {route.recommendedRouteName}
                    </div>
                    <div className="text-[11px] text-gray-500 line-clamp-2">
                      {route.routeDescription}
                    </div>
                  </td>

                  {/* Navigation CTA */}
                  <td className="py-4 px-5 text-right">
                    <a
                      href={route.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-[#1B3322] hover:bg-[#c9a832] text-[#FAF9F6] hover:text-[#1B3322] px-3.5 py-2 rounded-lg font-mono text-xs font-semibold transition-all shadow-sm group whitespace-nowrap"
                      title={`Open driving directions from ${route.origin} on Google Maps`}
                    >
                      <Navigation className="w-3.5 h-3.5 group-hover:rotate-45 transition-transform" />
                      <span>Directions</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile & Tablet Card View (Visible below lg) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:hidden gap-4">
          {filteredRoutes.map((route) => (
            <div 
              key={route.id}
              className="bg-white p-5 rounded-xl border border-[#EAE8E3] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-4"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-2.5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-[#1B3322]/5 flex items-center justify-center shrink-0 border border-[#1B3322]/10">
                      {renderIcon(route.iconType)}
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1B3322] text-sm leading-snug">
                        {route.origin}
                      </h3>
                      <span className="text-xs text-gray-500 font-medium">
                        {route.mode}
                      </span>
                    </div>
                  </div>

                  {route.badge && (
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-[#c9a832]/15 text-[#1B3322] font-semibold border border-[#c9a832]/30 shrink-0">
                      {route.badge}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2 py-2 border-y border-gray-100 my-3">
                  <div className="flex-1 bg-[#FAF9F6] p-2 rounded text-center border border-[#EAE8E3]">
                    <span className="text-[10px] font-mono text-gray-500 block uppercase">Distance</span>
                    <span className="font-mono font-bold text-sm text-[#1B3322]">{route.distanceKm}</span>
                  </div>
                  <div className="flex-1 bg-[#c9a832]/15 p-2 rounded text-center border border-[#c9a832]/30">
                    <span className="text-[10px] font-mono text-gray-600 block uppercase">Travel Time</span>
                    <span className="font-mono font-bold text-xs sm:text-sm text-[#1B3322]">{route.duration}</span>
                  </div>
                </div>

                <div className="text-xs text-gray-600 space-y-1">
                  <p className="font-semibold text-[#1B3322]">
                    {route.recommendedRouteName}
                  </p>
                  <p className="text-[11px] text-gray-500 leading-relaxed">
                    {route.routeDescription}
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={route.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#1B3322] hover:bg-[#c9a832] text-[#FAF9F6] hover:text-[#1B3322] py-2.5 px-4 rounded-lg font-mono text-xs font-semibold transition-all shadow-sm group"
                >
                  <Navigation className="w-3.5 h-3.5 group-hover:rotate-45 transition-transform" />
                  <span>Open in Google Maps Navigation</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Airport & Railway Station Cab Concierge Banner */}
        <div className="mt-8 bg-gradient-to-r from-[#1B3322] to-[#24432C] text-[#FAF9F6] p-6 sm:p-8 rounded-2xl shadow-lg border border-[#c9a832]/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#c9a832] uppercase tracking-wider font-semibold">
              <ShieldCheck className="w-4 h-4 text-[#c9a832]" />
              <span>Resort Transfer & Taxi Service</span>
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-[#FAF9F6]">
              Need a Pick-Up from Kathgodam, Pantnagar or Delhi?
            </h3>
            <p className="text-xs sm:text-sm text-[#FAF9F6]/80 max-w-2xl">
              Whispering Pines Resort arranges trusted mountain drivers with clean commercial vehicles (Innova Crysta, Ertiga, Swift Dzire) directly to our gates in Malla Ramgarh.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row items-center gap-3">
            <a
              href="https://wa.me/917505029696?text=Hi!%20I'm%20planning%20my%20trip%20to%20Whispering%20Pines%20Resort%20and%20would%20like%20to%20arrange%20a%20cab%20pick-up."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-mono text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-lg shadow-md transition-all transform hover:-translate-y-0.5"
            >
              <span>Arrange Cab on WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href={`tel:${RESORT_CONTACT.phoneTel || '+917505029696'}`}
              className="inline-flex items-center gap-2 bg-[#FAF9F6]/10 hover:bg-[#FAF9F6]/20 text-[#FAF9F6] border border-[#FAF9F6]/20 font-mono text-xs font-semibold uppercase tracking-wider px-5 py-3.5 rounded-lg transition-all"
            >
              <span>Call 075050 29696</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
