import React, { useState, useEffect } from "react";
import { Phone, Menu, X, ArrowUpRight } from 'lucide-react';
import { RESORT_CONTACT, BOOKING_ENGINE_URL } from "../data";
import Logo from "./Logo";
import { trackAdsConversion } from "../utils/analytics";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
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

  const navLinks = [
    { name: "The Resort", href: "/#about" },
    { name: "Cottages & Suites", href: "/#rooms" },
    { name: "Amenities", href: "/#amenities" },
    { name: "Experiences", href: "/#experiences" },
    { name: "Gallery", href: "/gallery" },
    { name: "Reviews", href: "/reviews" },
  ];

  const handleNavBookingClick = () => {
    trackAdsConversion("generate_lead", "booking", "nav_whatsapp_booking");
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#1B3322]/95 backdrop-blur-md shadow-lg border-b border-[#FAF9F6]/10 py-3"
          : "bg-gradient-to-b from-[#1B3322]/80 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Identity with Dynamic Golden Emblem */}
          <a href="/" className="flex items-center gap-2 lg:gap-3 group z-50">
            <Logo />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
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
                }}
                className="text-[#FAF9F6]/90 hover:text-[#c9a832] text-sm font-medium tracking-wide transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="/blog"
              className="text-[#FAF9F6]/90 hover:text-[#c9a832] text-sm font-medium tracking-wide transition-colors duration-200"
            >
              Journal
            </a>
          </div>

          {/* Contact CTAs */}
          <div className="hidden lg:flex items-center space-x-6">
            <a
              href={`tel:${RESORT_CONTACT.phone}`}
              className="flex items-center text-[11px] font-mono tracking-widest text-[#FAF9F6]/85 hover:text-[#FAF9F6] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 mr-1.5 opacity-70" />
              {RESORT_CONTACT.phone}
            </a>
            <a
              href={BOOKING_ENGINE_URL}
              target="_blank"
              rel="noreferrer"
              onClick={handleNavBookingClick}
              className="bg-[#c9a832] hover:bg-[#FAF9F6] text-[#1B3322] hover:text-[#1B3322] text-[10px] font-mono font-semibold uppercase tracking-[0.15em] px-6 py-2.5 rounded-sm flex items-center transition-all duration-300 shadow-md"
            >
              Book Stay
              <ArrowUpRight className="w-3.5 h-3.5 ml-2 opacity-80" />
            </a>
          </div>

          {/* Mobile Actions: Book Now & Menu Toggle */}
          <div className="flex items-center gap-3 md:hidden">
            <a
              href={BOOKING_ENGINE_URL}
              target="_blank"
              rel="noreferrer"
              onClick={handleNavBookingClick}
              className="bg-[#c9a832] text-[#1B3322] text-[10px] font-mono font-semibold uppercase tracking-wider px-4 py-2 rounded-sm flex items-center shadow-md active:scale-95 transition-transform"
            >
              Book Stay
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#FAF9F6] hover:text-[#c9a832] p-2 focus:outline-none -mr-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-[#1B3322] border-b border-[#FAF9F6]/10 shadow-2xl transition-all duration-300 ease-in-out z-40 ${
          isOpen ? "opacity-100 max-h-screen py-5" : "opacity-0 max-h-0 overflow-hidden"
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
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
              className="block px-4 py-3.5 text-lg font-medium text-[#FAF9F6]/95 hover:text-[#c9a832] hover:bg-[#FAF9F6]/5 rounded-sm transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          <div className="border-t border-[#FAF9F6]/10 pt-6 px-4 space-y-5">
            <a
              href={`tel:${RESORT_CONTACT.phone}`}
              className="flex items-center text-base font-mono text-[#FAF9F6]/85 p-2 -ml-2"
            >
              <Phone className="w-5 h-5 mr-3 text-[#c9a832]" />
              {RESORT_CONTACT.phone}
            </a>
            
            <a
              href={BOOKING_ENGINE_URL}
              target="_blank"
              rel="noreferrer"
              onClick={() => {
                setIsOpen(false);
                handleNavBookingClick();
              }}
              className="w-full text-center bg-[#c9a832] text-[#1B3322] font-bold uppercase tracking-wider py-4 rounded-sm flex items-center justify-center transition-colors shadow-md active:scale-95"
            >
              Instant Booking (WhatsApp)
              <ArrowUpRight className="w-5 h-5 ml-1.5" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
