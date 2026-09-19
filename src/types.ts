/**
 * TypeScript definitions for Whispering Pines Resort Mukteshwar
 */

export interface RoomOption {
  id: string;
  name: string;
  subtitle: string;
  capacity: string;
  bedType: string;
  pricePerNight: number;
  featured: boolean;
  image: string;
  amenities: string[];
  description: string;
  // Enhanced Direct-Booking CRO & Schema properties
  otaPricePerNight?: number;
  directSavings?: string;
  directPerks?: string[];
  maxOccupancy?: number;
  minOccupancy?: number;
  bedrooms?: number;
  bathrooms?: number;
  sizeSqFt?: number;
  viewType?: string;
}

export interface AmenityCategory {
  title: string;
  icon: string;
  description: string;
  features?: string[];
}

export interface ResortService {
  title: string;
  icon: string;
  description: string;
  features?: string[];
}

export interface LocalExperience {
  id: string;
  title: string;
  distance: string;
  description: string;
  tag: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: "Booking & Pricing" | "Rooms & Villa" | "Dining & Food" | "Location & Transit" | "Policies & Amenities" | string;
}

export interface Testimonial {
  name: string;
  rating: number;
  source: string;
  date: string;
  comment: string;
  location?: string;
}

export interface WhatsAppLinkOptions {
  roomName?: string;
  checkIn?: string;
  checkOut?: string;
  guests?: string;
  source?: string;
  utmCampaign?: string;
  gclid?: string;
}
