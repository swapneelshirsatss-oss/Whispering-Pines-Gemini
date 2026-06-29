import React, { useState, useEffect } from "react";
import { Phone, Menu, X, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { RESORT_CONTACT, generateWhatsAppLink } from "../data";
import Logo from "./Logo";

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
    { name: "Blog", href: "/blog" },
  ];

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
          <Link to="/" className="flex items-center">
            <Logo />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-[#FAF9F6]/90 hover:text-[#c9a832] text-sm font-medium tracking-wide transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Contact CTAs */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href={`tel:${RESORT_CONTACT.phone}`}
              className="flex items-center text-xs font-mono text-[#FAF9F6]/85 hover:text-[#c9a832] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 mr-1 text-[#c9a832]" />
              {RESORT_CONTACT.phone}
            </a>
            <a
              href={generateWhatsAppLink("Entire Cottage")}
              target="_blank"
              rel="noreferrer"
              className="bg-[#c9a832] hover:bg-[#A6875D] text-[#1B3322] hover:text-[#FAF9F6] text-xs font-semibold uppercase tracking-wider px-4 py-2.5 rounded-sm flex items-center transition-all duration-200"
            >
              Book Stay
              <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#FAF9F6] hover:text-[#c9a832] p-1 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-base font-medium text-[#FAF9F6]/95 hover:text-[#c9a832] hover:bg-[#FAF9F6]/5 rounded-sm transition-colors"
            >
              {link.name}
            </Link>
          ))}
          
          <div className="border-t border-[#FAF9F6]/10 pt-4 px-3 space-y-4">
            <a
              href={`tel:${RESORT_CONTACT.phone}`}
              className="flex items-center text-sm font-mono text-[#FAF9F6]/85"
            >
              <Phone className="w-4 h-4 mr-2 text-[#c9a832]" />
              {RESORT_CONTACT.phone}
            </a>
            
            <a
              href={generateWhatsAppLink("Entire Cottage")}
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsOpen(false)}
              className="w-full text-center bg-[#c9a832] text-[#1B3322] font-semibold uppercase tracking-wider py-3 rounded-sm flex items-center justify-center transition-colors"
            >
              Instant Booking (WhatsApp)
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
