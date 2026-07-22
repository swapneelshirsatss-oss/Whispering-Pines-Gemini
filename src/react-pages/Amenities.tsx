import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Breadcrumbs from "../components/Breadcrumbs";
import AmenitiesList from "../components/AmenitiesList";
import FooterSection from "../components/FooterSection";
import WhatsAppButton from "../components/WhatsAppButton";
import RecentBookingNotification from "../components/RecentBookingNotification";

export default function Amenities() {
  return (
    <div className="relative min-h-screen bg-[#FAF9F6] text-[#2C3531] overflow-x-hidden pb-20 md:pb-0 selection:bg-[#c9a832] selection:text-[#1B3322]">
      <Navbar />
      <Breadcrumbs />
      <main className="pt-24 bg-[#1B3322]">
        <AmenitiesList 
          hideLink={true} 
          title="Best Resort Near Mukteshwar — Amenities Built for a True Mountain Escape"
          isH1={true}
        />
      </main>
      <FooterSection />
      <WhatsAppButton />
      <RecentBookingNotification />
    </div>
  );
}
