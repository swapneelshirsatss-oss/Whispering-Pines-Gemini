import React, { useState } from "react";
import { Mail, Phone, MapPin, ExternalLink, Globe, HelpCircle, ChevronDown, ChevronUp, Facebook, Instagram, Twitter } from "lucide-react";
import { RESORT_CONTACT } from "../data";
import Logo from "./Logo";

export default function FooterSection() {
  const [showDeployGuide, setShowDeployGuide] = useState(false);

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1B3322] text-[#FAF9F6] pt-16 pb-12 border-t border-[#c9a832]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid blocks */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-[#FAF9F6]/10">
          
          {/* Column 1: Brand & Bio */}
          <div className="md:col-span-5 space-y-4">
            <Logo />
            <div className="pt-1">
              <span className="text-xs font-mono text-[#c9a832] uppercase tracking-widest block">
                Casa De Bello - Whistling Pines
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#FAF9F6]/80 font-sans leading-relaxed max-w-sm">
              Premium luxury villas offered by Whispering Pines by Casa De Bello in the scenic heights of Malla Ramgarh. Wake up to 
              organic orchards, warm custom fireplaces, and 180-degree panoramas of the historic Nanda Devi snow range.
            </p>
            {RESORT_CONTACT.socials && (
              <div className="flex items-center gap-4 pt-2">
                {RESORT_CONTACT.socials.facebook && (
                  <a href={RESORT_CONTACT.socials.facebook} target="_blank" rel="noreferrer" className="text-[#FAF9F6]/60 hover:text-[#c9a832] transition-colors">
                    <Facebook className="w-5 h-5" />
                  </a>
                )}
                {RESORT_CONTACT.socials.instagram && (
                  <a href={RESORT_CONTACT.socials.instagram} target="_blank" rel="noreferrer" className="text-[#FAF9F6]/60 hover:text-[#c9a832] transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                )}
                {RESORT_CONTACT.socials.twitter && (
                  <a href={RESORT_CONTACT.socials.twitter} target="_blank" rel="noreferrer" className="text-[#FAF9F6]/60 hover:text-[#c9a832] transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Column 2: Location and Contact parameters */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#c9a832] font-bold">
              Estate Location & Contact
            </h4>
            <div className="space-y-3.5 text-xs sm:text-sm font-sans text-[#FAF9F6]/85">
              <a
                href={RESORT_CONTACT.gmapsLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-start hover:text-[#c9a832] transition-colors"
              >
                <MapPin className="w-4 h-4 text-[#c9a832] mr-2 shrink-0 mt-0.5" />
                <span>{RESORT_CONTACT.location}</span>
              </a>
              <a
                href={`tel:${RESORT_CONTACT.phone}`}
                className="flex items-center hover:text-[#c9a832] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#c9a832] mr-2 shrink-0" />
                <span>{RESORT_CONTACT.phone}</span>
              </a>
              <a
                href={`mailto:${RESORT_CONTACT.email}`}
                className="flex items-center hover:text-[#c9a832] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#c9a832] mr-2 shrink-0" />
                <span>{RESORT_CONTACT.email}</span>
              </a>
            </div>
          </div>

          {/* Column 3: Navigation quick links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#c9a832] font-bold">
              Explore Pages
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm font-sans text-[#FAF9F6]/80">
              <a href="#" className="hover:text-[#c9a832] transition-colors">Home Top</a>
              <a href="#about" className="hover:text-[#c9a832] transition-colors">About Homestay</a>
              <a href="#rooms" className="hover:text-[#c9a832] transition-colors">Room Prices</a>
              <a href="#amenities" className="hover:text-[#c9a832] transition-colors">Resort Amenities</a>
              <a href="#experiences" className="hover:text-[#c9a832] transition-colors">Experiences</a>
              <a href="#reviews" className="hover:text-[#c9a832] transition-colors">Guest Reviews</a>
              <a href="#faq" className="hover:text-[#c9a832] transition-colors">Read FAQ</a>
              <a href="#book-form" className="hover:text-[#c9a832] transition-colors">Book Now</a>
            </div>
          </div>

        </div>

        {/* Map Full Width Row */}
        <div className="pt-8 pb-8 border-b border-[#FAF9F6]/10">
          <h4 className="text-xs font-mono uppercase tracking-widest text-[#c9a832] font-bold mb-4">
              Find Us on the Map
          </h4>
          <div className="w-full h-64 md:h-80 rounded overflow-hidden shadow-lg border border-[#FAF9F6]/10">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3475.0889621951014!2d79.5506321!3d29.4261962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a0a3285f1c95a9%3A0x74636d4e06267d3e!2sWhispering%20Pines!5e0!3m2!1sen!2sin!4v1782035643721!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>

        {/* Deployment Toggle Block for Developers / Users */}
        <div className="mt-8 border-b border-[#FAF9F6]/10 pb-8 text-center sm:text-left">
          <button
            type="button"
            onClick={() => setShowDeployGuide(!showDeployGuide)}
            className="inline-flex items-center space-x-2 text-xs font-mono text-[#c9a832] hover:text-[#FAF9F6] transition-colors uppercase tracking-widest focus:outline-none"
          >
            <Globe className="w-4 h-4" />
            <span>Show Tech Deployment & Domain Mapping Guide</span>
            {showDeployGuide ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>

          {showDeployGuide && (
            <div className="mt-6 bg-[#FAF9F6]/5 border border-[#FAF9F6]/10 rounded-sm p-5 sm:p-6 text-left space-y-6 text-xs sm:text-sm font-sans leading-relaxed">
              <h4 className="font-display font-medium text-base text-[#FAF9F6] border-b border-[#FAF9F6]/15 pb-2">
                Static Hosting & Domain Mapping (GitHub Pages + Hostinger)
              </h4>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                
                {/* Step 1: GitHub Pages */}
                <div className="space-y-2">
                  <h5 className="font-bold text-[#c9a832] uppercase tracking-wider">Step 1: Deploying to GitHub Pages</h5>
                  <ol className="list-decimal pl-4 space-y-1 text-white/80">
                    <li>Initialize repository: <code className="bg-black/30 px-1 py-0.5 rounded font-mono">git init</code> inside root.</li>
                    <li>Commit codebase changes: <code className="bg-black/30 px-1 py-0.5 rounded font-mono">git commit -am "First release"</code></li>
                    <li>Add your remote link: <code className="bg-black/30 px-1 py-0.5 rounded font-mono">git remote add origin https://github.com/[your-user]/[repo-name]</code></li>
                    <li>Generate the static build locally using <code className="bg-black/30 px-1 py-0.5 rounded font-mono">npm run build</code>. This generates a folder called <code className="bg-black/30 px-1 py-0.5 rounded font-mono">/dist</code>.</li>
                    <li>Configure custom domain inside distributor: Create a raw file in <code className="bg-black/30 px-1 py-0.5 rounded font-mono">public/CNAME</code> and write <code className="font-mono text-[#c9a832]">whisperingpinesresort.in</code> on line 1. (This tells GitHub to bypass standard *.github.io maps).</li>
                    <li>Deploy built folder to <code className="bg-black/30 px-1 py-0.5 rounded font-mono">gh-pages</code> branch easily using the <code className="bg-black/30 px-1 py-0.5 rounded font-mono">gh-pages</code> NPM installer, or push the repo and toggle Settings → Pages → Deploy from branch.</li>
                  </ol>
                </div>

                {/* Step 2: Hostinger DNS */}
                <div className="space-y-4">
                  <div>
                    <h5 className="font-bold text-[#c9a832] uppercase tracking-wider">Step 2: DNS Records inside Hostinger Panel</h5>
                    <p className="text-white/85 mb-2">Logs into Hostinger hPanel → Select Domain <b>whisperingpinesresort.in</b> → Manage DNS Zones, and configure these exact values:</p>
                    
                    <div className="bg-black/20 p-3 rounded font-mono text-[11px] text-white/95 space-y-1">
                      <div><strong className="text-[#c9a832]">A Record:</strong> @ Points to <strong className="text-white">185.199.108.153</strong></div>
                      <div><strong className="text-[#c9a832]">A Record:</strong> @ Points to <strong className="text-white">185.199.109.153</strong></div>
                      <div><strong className="text-[#c9a832]">A Record:</strong> @ Points to <strong className="text-white">185.199.110.153</strong></div>
                      <div><strong className="text-[#c9a832]">A Record:</strong> @ Points to <strong className="text-white">185.199.111.153</strong></div>
                      <div><strong className="text-[#c9a832]">CNAME Record:</strong> www Points to <strong className="text-white">[your-user].github.io.</strong></div>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-bold text-[#c9a832] uppercase tracking-wider">Step 3: Enable SSL Encrypted Security</h5>
                    <p className="text-white/80">
                      Go to GitHub repository → Settings → Pages. Put <code className="bg-black/30 px-1 py-0.5 rounded font-mono">whisperingpinesresort.in</code> in custom domain input, and check **"Enforce HTTPS"** as soon as Hostinger's DNS records propagate (typically takes 5 to 15 minutes).
                    </p>
                  </div>
                </div>

              </div>
            </div>
          )}
        </div>

        {/* Footer bottom legal copyrights panel */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-[#FAF9F6]/60 text-center sm:text-left">
          <div>
            <p>© {currentYear} Whispering Pines Resort Mukteshwar. All Rights Reserved.</p>
            <p className="text-[10px] mt-1 text-white/40">Constructed as Casa De Bello - Whistling Pines. Malla Ramgarh Rural Estate.</p>
          </div>
          <div>
            <p className="font-mono text-[#c9a832]">
              Domain Direct: <a href={RESORT_CONTACT.domain} className="hover:underline">{RESORT_CONTACT.domain.replace("https://", "")}</a>
            </p>
            <p className="text-[9px] mt-1 text-white/30">Managed entirely with secure conversion-optimized WhatsApp click-to-chat links.</p>
          </div>
        </div>

      </div>
    </footer>
  );
}
