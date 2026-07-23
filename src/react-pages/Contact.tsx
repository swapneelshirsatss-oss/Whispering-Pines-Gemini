import React from "react";
import { MapPin, Phone, Mail, MessageCircle, Clock } from "lucide-react";
import { RESORT_CONTACT } from "../data";
import FAQAccordion from "../components/FAQAccordion";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="pt-24 bg-[#FAF9F6] min-h-screen">
      
      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-[#1B3322] border-b border-[#c9a832]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-xs font-mono tracking-widest text-[#c9a832] uppercase block mb-3">
              Reach Out To Us
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-[#FAF9F6] mb-6">
              Contact Whispering Pines
            </h1>
            <div className="w-16 h-[2px] bg-[#c9a832] mx-auto mb-6" />
            <p className="text-[#FAF9F6]/80 text-lg max-w-2xl mx-auto font-sans">
              Looking for a direct booking quote, have questions about our pet policy, or need directions? Our front desk team is ready to assist you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Information */}
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-display font-bold text-[#1B3322] mb-8">Get In Touch</h2>
                
                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-[#1B3322]/5 rounded-full flex items-center justify-center shrink-0 mr-4">
                      <Phone className="w-5 h-5 text-[#1B3322]" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#1B3322] uppercase tracking-wider mb-1">Call Us (24/7 Front Desk)</h3>
                      <a href={`tel:${RESORT_CONTACT.phone.replace(/[^0-9+]/g, '')}`} className="text-lg text-[#2C3531] hover:text-[#c9a832] transition-colors font-medium">
                        {RESORT_CONTACT.phone}
                      </a>
                    </div>
                  </div>
                  
                  {/* WhatsApp */}
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-[#25D366]/10 rounded-full flex items-center justify-center shrink-0 mr-4">
                      <MessageCircle className="w-5 h-5 text-[#25D366]" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#1B3322] uppercase tracking-wider mb-1">WhatsApp Direct</h3>
                      <a href={RESORT_CONTACT.whatsapp} target="_blank" rel="noreferrer" className="text-lg text-[#2C3531] hover:text-[#25D366] transition-colors font-medium">
                        Message Reservations
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-[#1B3322]/5 rounded-full flex items-center justify-center shrink-0 mr-4">
                      <Mail className="w-5 h-5 text-[#1B3322]" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#1B3322] uppercase tracking-wider mb-1">Email</h3>
                      <a href={`mailto:${RESORT_CONTACT.email}`} className="text-lg text-[#2C3531] hover:text-[#c9a832] transition-colors font-medium">
                        {RESORT_CONTACT.email}
                      </a>
                    </div>
                  </div>
                  
                  {/* Address */}
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-[#1B3322]/5 rounded-full flex items-center justify-center shrink-0 mr-4">
                      <MapPin className="w-5 h-5 text-[#1B3322]" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#1B3322] uppercase tracking-wider mb-1">Resort Address</h3>
                      <p className="text-lg text-[#2C3531] leading-relaxed">
                        {RESORT_CONTACT.address}
                      </p>
                    </div>
                  </div>

                  {/* Timings */}
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-[#1B3322]/5 rounded-full flex items-center justify-center shrink-0 mr-4">
                      <Clock className="w-5 h-5 text-[#1B3322]" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#1B3322] uppercase tracking-wider mb-1">Check-In / Check-Out</h3>
                      <p className="text-lg text-[#2C3531]">
                        Check-in: 1:00 PM <br/> Check-out: 11:00 AM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Column */}
            <div>
              <h2 className="text-2xl font-display font-bold text-[#1B3322] mb-8">Locate Us in Ramgarh</h2>
              <div className="w-full h-[400px] bg-gray-200 rounded-sm shadow-inner border border-gray-300 overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111246.51860656094!2d79.4673896561148!3d29.41843949826359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a099ca1965bb29%3A0x74601fc3965b9abe!2sWhispering%20Pines%20Resort%20Mukteshwar!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Whispering Pines Resort Google Maps Location"
                ></iframe>
              </div>
              <div className="mt-4 text-right">
                <a 
                  href={RESORT_CONTACT.gmapsLink} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center text-sm font-bold text-[#1B3322] hover:text-[#c9a832] transition-colors"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Open in Google Maps App
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section included here */}
      <FAQAccordion />

    </div>
  );
}
