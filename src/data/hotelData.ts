/**
 * Whispering Pines Resort by Casa De Bello - Centralized Hotel & Property Data Hub
 * 
 * Source of truth for property identity, room inventory, operational policies,
 * contact channels, amenities, and transit networks.
 * Adheres strictly to AGENTS.md rules & hospitality-direct-booking-cro standards.
 */

import {
  RESORT_CONTACT,
  BOOKING_ENGINE_URL,
  generateWhatsAppLink,
  ROOMS_INVENTORY,
  GENERAL_AMENITIES,
  RESORT_SERVICES,
  LOCAL_EXPERIENCES,
  TESTIMONIALS,
  FAQS,
  CONTACT_FAQS
} from "../data";
import { TRANSIT_ROUTES } from "./transitMatrix";
import type { 
  RoomOption, 
  AmenityCategory, 
  LocalExperience, 
  FAQItem, 
  Testimonial,
  ResortService,
  WhatsAppLinkOptions
} from "../types";
import type { TransitRoute } from "./transitMatrix";

// 1. Re-export existing constants for seamless 100% backward compatibility
export {
  RESORT_CONTACT,
  BOOKING_ENGINE_URL,
  generateWhatsAppLink,
  ROOMS_INVENTORY,
  GENERAL_AMENITIES,
  RESORT_SERVICES,
  LOCAL_EXPERIENCES,
  TESTIMONIALS,
  FAQS,
  CONTACT_FAQS,
  TRANSIT_ROUTES
};

export type {
  RoomOption,
  AmenityCategory,
  LocalExperience,
  FAQItem,
  Testimonial,
  ResortService,
  WhatsAppLinkOptions,
  TransitRoute
};

// 2. Standardized Property Details (cross-property consistency)
export const propertyDetails = {
  officialName: "Whispering Pines Resort by Casa De Bello",
  serpTitle: "Whispering Pines Resort by Casa De Bello - Near Mukteshwar",
  alternateNames: [
    "Whispering Pines Resort by Casa De Bello",
    "Whispering Pines Resort Mukteshwar",
    "Whispering Pines Resort near Mukteshwar",
    "Whispering Pines by Casa De Bello",
    "Casa De Bello Mukteshwar - ramgarh",
    "Casa De Bello Mukteshwar - Ramgarh"
  ],
  legacyBrand: "Clarks Exotica Resort Ramgarh Mukteshwar",
  tagline: "180° Panoramic Himalayan Views from Every Room | Boutique Luxury Mountain Resort",
  description:
    "Whispering Pines Resort by Casa De Bello is a 4-star boutique heritage mountain resort situated on the Bhowali-Ramgarh-Mukteshwar Road in Malla Ramgarh, Uttarakhand (1,780m elevation). Set amidst pine canopies and fruit orchards (peaches, plums, apples, apricots), every single room and private balcony commands direct, unobstructed 180° views of the Nanda Devi and Trishul Himalayan snow peaks. Features a standalone 3-BHK private alpine villa (sleeping 10), heated quarters, swimming pool, diverse multi-cuisine dining, safe pet-friendly lawns, and nightly bonfires.",
  starRating: 4,
  elevation: "1,780m (5,840 ft)",
  totalRooms: 25,
  hasVilla: true,
  villaCapacity: "Up to 9-10 Adults",
  address: {
    formatted: "Malla Ramgarh, Bhowali-Ramgarh-Mukteshwar Rd, Mukteshwar, Nainital, Uttarakhand 263137",
    streetAddress: "Malla Ramgarh, Bhowali-Ramgarh-Mukteshwar Rd",
    locality: "Mukteshwar",
    region: "Nainital, Uttarakhand",
    postalCode: "263137",
    country: "IN"
  },
  geo: {
    latitude: 29.4262052,
    longitude: 79.5506314,
    coordinates: "29.4262052, 79.5506314"
  },
  contact: {
    phoneDisplay: "075050 29696",
    phoneIntl: "+91 75050 29696",
    phoneTel: "+917505029696",
    whatsappNumber: "917505029696",
    whatsappLink: "https://wa.me/917505029696",
    email: "booking@whisperingpinesresort.in",
    website: "https://whisperingpinesresort.in/",
    bookingEngine: "https://casadebello-book.whisperingpinesresort.in/"
  },
  verificationLinks: {
    gmapsCid: "https://maps.google.com/?cid=8386667112972057918",
    googleTravel: "https://www.google.com/travel/hotels/entity/ChgIvvqZseCp27F0GgwvZy8xaGR6ejNrcDcQAQ"
  },
  rating: RESORT_CONTACT.rating,
  otaDisparityCallout: RESORT_CONTACT.otaDisparityCallout,
  directPerks: RESORT_CONTACT.directPerks,
  transitHighlights: RESORT_CONTACT.transitHighlights,
  operations: {
    checkInTime: "13:00 PM",
    checkOutTime: "11:00 AM",
    dining: "Multi-Cuisine, Kumaoni Specialties, In-Room Dining & Live Charcoal BBQ",
    petPolicy: "100% Pet Friendly (Enclosed lawns & direct forest trails; no extra pet charges)",
    wifi: "High-speed optical fiber Wi-Fi throughout all rooms & grounds",
    parking: "Secure flat gated tarmac parking for 3-4 SUVs on-site"
  },
  socials: RESORT_CONTACT.socials
};

// 3. Convenience Aliases matching cross-project patterns
export const rooms: RoomOption[] = ROOMS_INVENTORY;
export const amenities: AmenityCategory[] = GENERAL_AMENITIES;
export const services: ResortService[] = RESORT_SERVICES;
export const attractions: LocalExperience[] = LOCAL_EXPERIENCES;
export const testimonials: Testimonial[] = TESTIMONIALS;
export const faqs: FAQItem[] = FAQS;
export const contactFaqs: FAQItem[] = CONTACT_FAQS;
export const transitRoutes: TransitRoute[] = TRANSIT_ROUTES;
export const directPerks: string[] = RESORT_CONTACT.directPerks;
export const transitHighlights = RESORT_CONTACT.transitHighlights;

// 4. Helper utilities
export const getFeaturedRooms = (): RoomOption[] => ROOMS_INVENTORY.filter(r => r.featured);
export const getFaqsByCategory = (category: string): FAQItem[] => CONTACT_FAQS.filter(f => f.category === category);

// 5. Default aggregated export object
export const hotelData = {
  property: propertyDetails,
  contact: RESORT_CONTACT,
  bookingEngineUrl: BOOKING_ENGINE_URL,
  rooms: ROOMS_INVENTORY,
  amenities: GENERAL_AMENITIES,
  services: RESORT_SERVICES,
  attractions: LOCAL_EXPERIENCES,
  testimonials: TESTIMONIALS,
  faqs: FAQS,
  contactFaqs: CONTACT_FAQS,
  transitRoutes: TRANSIT_ROUTES,
  directPerks: RESORT_CONTACT.directPerks,
  transitHighlights: RESORT_CONTACT.transitHighlights,
  generateWhatsAppLink,
  getFeaturedRooms,
  getFaqsByCategory
};

export default hotelData;
