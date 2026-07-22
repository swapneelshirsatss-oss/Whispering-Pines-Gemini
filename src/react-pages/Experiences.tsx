import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Breadcrumbs from "../components/Breadcrumbs";
import LocalExperiencesList from "../components/LocalExperiencesList";
import SEOExperiencesContent from "../components/SEOExperiencesContent";
import FooterSection from "../components/FooterSection";
import WhatsAppButton from "../components/WhatsAppButton";
import RecentBookingNotification from "../components/RecentBookingNotification";

export default function Experiences() {
  return (
    <div className="relative min-h-screen bg-[#FAF9F6] text-[#2C3531] overflow-x-hidden pb-20 md:pb-0 selection:bg-[#c9a832] selection:text-[#1B3322]">
      <Navbar />
      <Breadcrumbs />
      <main className="pt-24 bg-[#FAF9F6]">
        <LocalExperiencesList 
          hideLink={true} 
          asH1={true}
          title="Things to Do Near Mukteshwar — Local Sights & Highland Experiences from Ramgarh Uttarkhand kumaon region"
        />
        <SEOExperiencesContent />
      </main>
      <FooterSection />
      <WhatsAppButton />
      <RecentBookingNotification />
    </div>
  );
}
