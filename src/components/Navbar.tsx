import React, { useState, useEffect } from "react";
import { Phone, Menu, X, ArrowUpRight, ChevronDown } from 'lucide-react';
import { trackAdsConversion } from "../utils/analytics";

const PHONE_DISPLAY = "075050 29696";
const PHONE_TEL = "+917505029696";
const BOOKING_ENGINE_URL = "https://whisperingpinesresort.bookingjini.in/";
const WHATSAPP_BOOKING_URL = "https://wa.me/917505029696";

interface NavbarProps {
  children?: React.ReactNode;
}

interface NavSubItem {
  name: string;
  desc: string;
  href: string;
  badge?: string;
}

interface NavLink {
  name: string;
  href: string;
  highlight?: boolean;
  dropdown?: NavSubItem[];
}

export default function Navbar({ children }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const desktopNavLinks: NavLink[] = [
    { name: "Stay & Villas", href: "/suites-cottages-ramgarh-resort/" },
    {
      name: "Services",
      href: "/resort-services-ramgarh/",
      dropdown: [
        {
          name: "Weddings",
          desc: "Himalayan lawns & private buyout celebrations",
          href: "/destination-wedding-uttarakhand/",
          badge: "Up to 100 Pax"
        },
        {
          name: "Conferences",
          desc: "Executive retreats, offsites & MICE facilities",
          href: "/corporate-offsite-resort-mukteshwar/",
          badge: "AV & Wi-Fi"
        },
        {
          name: "All Resort Services",
          desc: "Dining, bonfires, guided tours & transit",
          href: "/resort-services-ramgarh/",
        }
      ]
    },
    { name: "Amenities", href: "/resort-amenities-mukteshwar/" },
    { name: "Gallery", href: "/gallery/" },
    { name: "VIP Privileges", href: "/book-now/", highlight: true },
    { name: "Contact", href: "/contact-whispering-pines-resort-mukteshwar/" },
  ];

  const mobileNavLinks = [
    { name: "Stay & Villas", href: "/suites-cottages-ramgarh-resort/" },
    {
      name: "Services",
      href: "/resort-services-ramgarh/",
      dropdown: [
        { name: "Weddings & Celebrations", href: "/destination-wedding-uttarakhand/" },
        { name: "Conferences & Offsites", href: "/corporate-offsite-resort-mukteshwar/" },
        { name: "All Resort Services", href: "/resort-services-ramgarh/" },
      ]
    },
    { name: "Amenities", href: "/resort-amenities-mukteshwar/" },
    { name: "Gallery", href: "/gallery/" },
    { name: "About Us", href: "/about-whispering-pines-resort-ramgarh/" },
    { name: "Reviews", href: "/reviews/" },
    { name: "Contact", href: "/contact-whispering-pines-resort-mukteshwar/" },
  ];

  const handleNavBookingClick = () => {
    trackAdsConversion("generate_lead", "booking", "nav_whatsapp_booking");
  };

  return (
    <nav
      className="sticky top-0 left-0 w-full z-50 bg-[#0E2C21] border-b border-[#FAF9F6]/10 py-3.5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Identity with Dynamic Golden Emblem */}
          <a href="/" className="flex items-center gap-2 lg:gap-3 group z-50">
            {children}
          </a>

          {/* Desktop Navigation Links with Services Dropdown */}
          <div className="hidden md:flex items-center space-x-3.5 lg:space-x-6">
            {desktopNavLinks.map((link) => {
              if (link.dropdown) {
                return (
                  <div key={link.name} className="relative group">
                    <a
                      href={link.href}
                      data-astro-prefetch="hover"
                      className="text-xs lg:text-sm font-medium tracking-wide transition-all duration-200 text-[#FAF9F6]/90 group-hover:text-[#B0966D] flex items-center gap-1 py-1"
                    >
                      {link.name}
                      <ChevronDown className="w-3.5 h-3.5 text-[#B0966D]/80 group-hover:rotate-180 transition-transform duration-200" />
                    </a>
                    {/* Dropdown Menu */}
                    <div className="absolute top-full -left-3 pt-2 w-72 opacity-0 translate-y-1 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-200 z-50">
                      <div className="bg-[#0A2118] border border-[#FAF9F6]/15 rounded-sm shadow-md p-2 backdrop-blur-xl divide-y divide-white/5">
                        {link.dropdown.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            data-astro-prefetch="hover"
                            className="block px-3.5 py-2.5 rounded-sm hover:bg-white/10 transition-colors group/item"
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-semibold text-white group-hover/item:text-[#C4A77D] transition-colors">
                                {subItem.name}
                              </span>
                              {subItem.badge && (
                                <span className="text-[10px] font-sans font-medium px-2 py-0.5 rounded-sm bg-[#B0966D]/20 text-[#C4A77D] border border-[#8A6F4A]/30">
                                  {subItem.badge}
                                </span>
                              )}
                            </div>
                            <p className="text-[11px] text-[#FAF9F6]/65 mt-0.5 font-light leading-snug">
                              {subItem.desc}
                            </p>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <a
                  key={link.name}
                  href={link.href}
                  data-astro-prefetch="hover"
                  onClick={(e) => {
                    if (link.href === '/book-now/') {
                      trackAdsConversion("generate_lead", "booking", "nav_vip_privileges");
                    }
                    if (link.href.startsWith('/#') && window.location.pathname === '/') {
                      e.preventDefault();
                      const id = link.href.replace('/#', '');
                      const element = document.getElementById(id);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                        window.history.pushState(null, '', link.href);
                      }
                    }
                  }}
                  className={`text-xs lg:text-sm font-medium tracking-wide transition-all duration-200 ${
                    link.highlight
                      ? "text-[#C4A77D] font-semibold hover:text-[#FAF9F6]"
                      : "text-[#FAF9F6]/90 hover:text-[#C4A77D]"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Contact CTAs */}
          <div className="hidden lg:flex items-center space-x-5">
            <a
              href={`tel:${PHONE_TEL}`}
              onClick={() => trackAdsConversion("phone_call_click", "engagement", "header_phone_call")}
              className="flex items-center text-[11px] font-sans text-[#FAF9F6]/85 hover:text-[#C4A77D] transition-colors"
              title="Call Whispering Pines Direct Front Desk: 075050 29696"
            >
              <Phone className="w-3.5 h-3.5 mr-1.5 text-[#C4A77D]" />
              {PHONE_DISPLAY}
            </a>
            <a
              href={BOOKING_ENGINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleNavBookingClick}
              className="bg-[#B0966D] hover:bg-[#FAF9F6] text-[#0E2C21] hover:text-[#0E2C21] text-[10px] font-sans font-bold uppercase tracking-[0.1em] px-5 py-2.5 rounded-sm flex items-center transition-all duration-300 shadow-sm"
            >
              <span>Book Stay</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 opacity-80" />
            </a>
          </div>

          {/* Mobile Actions: Book Now & Menu Toggle */}
          <div className="flex items-center gap-2.5 md:hidden">
            <a
              href={BOOKING_ENGINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleNavBookingClick}
              className="bg-[#B0966D] text-[#0E2C21] text-[10px] font-sans font-bold uppercase tracking-wider px-3.5 py-2 rounded-sm flex items-center shadow-md active:scale-95 transition-transform"
            >
              Book Stay
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#FAF9F6] hover:text-[#C4A77D] p-2 focus:outline-none -mr-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-[#0E2C21]/98 backdrop-blur-xl border-b border-[#FAF9F6]/10 shadow-md transition-all duration-300 ease-in-out z-40 ${isOpen ? "opacity-100 max-h-screen py-5" : "opacity-0 max-h-0 overflow-hidden"
          }`}
      >
        <div className="px-4 pt-1 pb-4 space-y-2">
          {/* Direct Booking VIP Banner */}
          <a
            href="/book-now/"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-between p-3 rounded-sm bg-[#B0966D]/15 border border-[#8A6F4A]/40 text-[#C4A77D] font-sans text-xs tracking-wider uppercase font-bold mb-3 hover:bg-[#B0966D] hover:text-[#0E2C21] transition-colors"
          >
            <span>Direct Booking VIP Privileges</span>
            <span className="text-[10px] font-normal lowercase bg-[#B0966D]/20 px-2 py-0.5 rounded-sm">save 25%</span>
          </a>
          {mobileNavLinks.map((link) => {
            if (link.dropdown) {
              return (
                <div key={link.name} className="border-b border-[#FAF9F6]/10 pb-1">
                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-[#FAF9F6]/95 hover:text-[#C4A77D] hover:bg-[#FAF9F6]/5 rounded-sm transition-colors text-left"
                  >
                    <span>{link.name}</span>
                    <ChevronDown className={`w-4 h-4 text-[#C4A77D] transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`} />
                  </button>
                  {mobileServicesOpen && (
                    <div className="pl-4 pr-2 pb-2 space-y-1 bg-black/20 rounded-sm">
                      {link.dropdown.map((sub) => (
                        <a
                          key={sub.name}
                          href={sub.href}
                          data-astro-prefetch="hover"
                          onClick={() => setIsOpen(false)}
                          className="block px-3 py-2 text-sm text-[#FAF9F6]/90 hover:text-[#C4A77D] rounded-sm transition-colors"
                        >
                          {sub.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <a
                key={link.name}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                data-astro-prefetch={link.external ? undefined : "hover"}
                onClick={(e) => {
                  if (link.href.startsWith('/#') && window.location.pathname === '/') {
                    e.preventDefault();
                    const id = link.href.replace('/#', '');
                    const element = document.getElementById(id);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                      window.history.pushState(null, '', link.href);
                    }
                  }
                  setIsOpen(false);
                }}
                className={`block px-4 py-3 text-base font-medium rounded-sm transition-colors ${link.external
                    ? "text-[#C4A77D] font-semibold hover:bg-[#FAF9F6]/5"
                    : "text-[#FAF9F6]/95 hover:text-[#C4A77D] hover:bg-[#FAF9F6]/5"
                  }`}
              >
                {link.name}
              </a>
            );
          })}

          {/* Quick Persona Chips */}
          <div className="pt-3 pb-1 border-t border-[#FAF9F6]/10">
            <span className="text-[10px] font-sans uppercase tracking-[0.1em] text-[#B0966D] block px-4 mb-2 font-semibold">
              Stays &amp; Celebrations
            </span>
            <div className="grid grid-cols-2 gap-2 px-4 text-xs font-sans">
              <a
                href="/destination-wedding-uttarakhand/"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center min-h-[44px] px-3 py-2.5 rounded-sm bg-[#FAF9F6]/5 text-[#FAF9F6] hover:bg-[#B0966D] hover:text-[#0E2C21] transition-colors text-center leading-snug"
              >
                Weddings (100 Pax)
              </a>
              <a
                href="/corporate-offsite-resort-mukteshwar/"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center min-h-[44px] px-3 py-2.5 rounded-sm bg-[#FAF9F6]/5 text-[#FAF9F6] hover:bg-[#B0966D] hover:text-[#0E2C21] transition-colors text-center leading-snug"
              >
                Conferences &amp; MICE
              </a>
              <a
                href="/private-villas-near-nainital/"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center min-h-[44px] px-3 py-2.5 rounded-sm bg-[#FAF9F6]/5 text-[#FAF9F6] hover:bg-[#B0966D] hover:text-[#0E2C21] transition-colors text-center leading-snug"
              >
                3-BHK Villa (10 Pax)
              </a>
              <a
                href="/clarks-exotica-resort-ramgarh-mukteshwar/"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center min-h-[44px] px-3 py-2.5 rounded-sm bg-[#FAF9F6]/5 text-[#FAF9F6] hover:bg-[#B0966D] hover:text-[#0E2C21] transition-colors text-center leading-snug"
              >
                Clarks Exotica Guests
              </a>
            </div>
          </div>

          <div className="border-t border-[#FAF9F6]/10 pt-4 px-4 space-y-4">
            <a
              href={`tel:${PHONE_TEL}`}
              onClick={() => trackAdsConversion("phone_call_click", "engagement", "mobile_phone_call")}
              className="flex items-center text-base font-sans text-[#FAF9F6]/85 p-2 -ml-2"
            >
              <Phone className="w-5 h-5 mr-3 text-[#C4A77D]" />
              {PHONE_DISPLAY} <span className="text-xs text-[#FAF9F6]/50 ml-2">(+91 75050 29696)</span>
            </a>

            <a
              href={WHATSAPP_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                setIsOpen(false);
                handleNavBookingClick();
              }}
              className="w-full text-center bg-[#0E2C21] hover:bg-[#193F30] text-white border border-[#FAF9F6]/30 font-bold uppercase tracking-wider py-3.5 rounded-sm flex items-center justify-center gap-2 transition-colors shadow-sm active:scale-95"
            >
              <svg className="w-4 h-4 shrink-0 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.116.554 4.1 1.523 5.823L0 24l6.344-1.498A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.792 9.792 0 01-5.002-1.374l-.359-.213-3.765.889.953-3.676-.234-.376A9.794 9.794 0 012.182 12C2.182 6.574 6.574 2.182 12 2.182S21.818 6.574 21.818 12 17.426 21.818 12 21.818z"/></svg>
              <span>WhatsApp</span>
            </a>

            {/* Google Preferred Source Button in Mobile Menu */}
            <div className="pt-2 flex flex-col items-center">
              <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#C4A77D] block mb-2 font-semibold text-center">
                Google Preferred Source
              </span>
              <div
                className="g-preferred-source inline-block min-h-[36px]"
                {...{ "google-add-preferred-source-btn": "" }}
                data-domain="whisperingpinesresort.in"
                data-theme="dark"
                data-lang="en"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
