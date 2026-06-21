/**
 * TypeScript definitions for Whispering Pines Resort Mukteshwar
 */

export interface RoomOption {
  id: string;
  name: string;
  subtitle: string;
  capacity: string;
  bedType: string;
  size: string;
  pricePerNight: number;
  featured: boolean;
  image: string;
  amenities: string[];
  description: string;
}

export interface AmenityCategory {
  title: string;
  icon: string;
  description: string;
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
}

export interface Testimonial {
  name: string;
  rating: number;
  source: string;
  date: string;
  comment: string;
}
