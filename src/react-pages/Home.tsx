import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Breadcrumbs from "../components/Breadcrumbs";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import RoomInventoryList from "../components/RoomInventoryList";
import AmenitiesList from "../components/AmenitiesList";
import ServicesSection from "../components/ServicesSection";
import LocalExperiencesList from "../components/LocalExperiencesList";
import BookingInteractiveForm from "../components/BookingInteractiveForm";
import OTABadges from "../components/OTABadges";
import TestimonialList from "../components/TestimonialList";
import FAQAccordion from "../components/FAQAccordion";
import FooterSection from "../components/FooterSection";
import WhatsAppButton from "../components/WhatsAppButton";
import RecentBookingNotification from "../components/RecentBookingNotification";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#FAF9F6] text-[#2C3531] overflow-x-hidden pb-20 md:pb-0 selection:bg-[#c9a832] selection:text-[#1B3322]">
      {/* 1. Header Navigation Bar */}
      <Navbar />

      {/* Breadcrumb Navigation */}
      <Breadcrumbs />

      {/* 2. Hero Presentation Block */}
      <Hero />

      <main>
        {/* 3. About Sanctuary Story Section */}
        <AboutSection />

        {/* 4. Complete Room, Suite & Cottage Inventory Cards */}
        <RoomInventoryList />

        {/* 5. Bento Grid styled General Conveniors / Amenities */}
        <AmenitiesList />

        {/* 5.5 Premium Resort Services */}
        <ServicesSection />

        <OTABadges />

        {/* 6. Sightseeing Local Destinations near Ramgarh/Mukteshwar */}
        <LocalExperiencesList />

        {/* 7. Interactive Date Booking Form with Pre-filled WhatsApp message draft */}
        <BookingInteractiveForm />

        {/* 8. Verifiable Guest Reviews (Trustproof) */}
        <TestimonialList />

        {/* 9. Collapsible FAQ Accordion panel */}
        <FAQAccordion />
      </main>

      {/* 10. Gated drive maps, addresses & deployment guides */}
      <FooterSection />

      {/* Floating WhatsApp Button for Conversions */}
      <WhatsAppButton />

      {/* Social Proof Conversion Popup */}
      <RecentBookingNotification />
    </div>
  );
}
