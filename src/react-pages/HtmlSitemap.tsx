import React from "react";
import { Link } from "lucide-react";

export default function HtmlSitemap() {
  const sitemapLinks = [
    {
      category: "Main Pages",
      links: [
        { name: "Home", url: "/" },
        { name: "About Us", url: "/about-whispering-pines-resort-ramgarh" },
        { name: "Suites & Cottages", url: "/suites-cottages-ramgarh-resort" },
        { name: "Premium Villas", url: "/private-villas-near-nainital" },
        { name: "Amenities", url: "/resort-amenities-mukteshwar" },
        { name: "Services", url: "/resort-services-ramgarh" },
        { name: "Local Experiences", url: "/things-to-do-near-mukteshwar" },
        { name: "Journal & Blog", url: "/blog" },
      ]
    },
    {
      category: "Explore",
      links: [
        { name: "Photo Gallery", url: "/gallery" },
        { name: "Guest Reviews", url: "/reviews" },
      ]
    },
    {
      category: "Legal & Policies",
      links: [
        { name: "Privacy Policy", url: "/privacy-policy" },
        { name: "Terms & Conditions", url: "/terms" },
      ]
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-[#FAF9F6] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center mb-16 border-b border-[#2C3531]/10 pb-12">
          <span className="text-xs font-mono tracking-widest text-[#c9a832] uppercase flex items-center justify-center mb-3">
            <Link className="w-4 h-4 mr-2" />
            Website Directory
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-[#1B3322] mb-6">
            Sitemap
          </h1>
          <p className="text-[17px] sm:text-lg text-[#2C3531]/80 font-sans leading-relaxed max-w-2xl mx-auto">
            Find everything you need across the Whispering Pines Resort website.
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {sitemapLinks.map((section, idx) => (
            <div key={idx}>
              <h2 className="font-display text-2xl font-bold text-[#1B3322] mb-6 flex items-center">
                <div className="w-6 h-[2px] bg-[#c9a832] mr-3" />
                {section.category}
              </h2>
              <ul className="space-y-4">
                {section.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <a 
                      href={link.url}
                      className="text-[#2C3531]/80 font-sans hover:text-[#c9a832] transition-colors flex items-center group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c9a832]/30 group-hover:bg-[#c9a832] mr-3 transition-colors" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
