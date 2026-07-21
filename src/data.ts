import type { RoomOption, LocalExperience, FAQItem, Testimonial } from "./types";
import villaSuiteBedroomImg from "./assets/images/villa_in_nanital.avif?url";
import cedarSuiteBedroomImg from "./assets/images/Delux_room_Whispering_pines_mukteshwar.avif?url";
import oakSuiteBedroomImg from "./assets/images/resort_dining_hall_1782030904946.avif?url";
import familyTwinRoomImg from "./assets/images/Group_booking_nainital_resort.avif?url";
import orchardRoomImg from "./assets/images/Family_Twin Room_Near_nainital.avif?url";

export const RESORT_CONTACT = {
  name: "Whispering Pines Resort by Casa De Bello",
  legalName: "Casa De Bello - Whistling Pines",
  phone: "+91-7505029696",
  whatsapp: "https://wa.me/917505029696",
  email: "booking@whisperingpinesresort.in",
  domain: "https://whisperingpinesresort.in/",
  location: "Malla Ramgarh, House no. 23 - 13/4, Ramgarh, Uttarakhand 263137",
  address: "Malla Ramgarh, Bhowali-Ramgarh-Mukteshwar Rd, Uttarakhand 263137",
  geoCoordinates: "29.4264111 79.5505355",
  gmapsLink: "https://maps.app.goo.gl/pfPTYmMpZAAi3jao7",
  gmapsCid: "https://maps.google.com/?cid=8386667112972057918",
  socials: {
    facebook: "https://facebook.com/whisperingpinesbycasadebello",
    instagram: "https://www.instagram.com/whisperingpines.casa",
    twitter: "https://x.com/WhiperingPines",
    tripadvisor: "https://www.tripadvisor.in/Hotel_Review-g1049689-d34470070-Reviews-Whispering_Pines_Resort_Mukteshwar-Ramgarh_Nainital_District_Uttarakhand.html",
    youtube: "https://www.youtube.com/channel/UC7WARaMtVTj9QS57zMX3yZw"
  },
  description: "Whispering Pines Resort by Casa de bello is a 4 Star heritage mountain resort located on the Bhowali-Ramgarh-Mukteshwar Road in Malla Ramgarh. Surrounded by dense pine canopies and private apple, peach, and plum orchards, the property features offers clean comfortavle rooms with luxury facilties.\n\nDesigned for families, remote professionals, and travelers seeking a quiet Himalayan retreat, the resort offers 180° panoramic views of the Nanda Devi and Trishul peaks. As an upgraded continuation of the Clarks Exotica legacy, we prioritize direct guest relationships.\n\nContact our front desk directly at +91-7505029696 or via WhatsApp to secure exclusive past-guest retention rates and direct-booking benefits."
};

export const BOOKING_ENGINE_URL = "https://whisperingpinesresort.bookingjini.in/";

/**
 * Highly conversion-optimized custom WhatsApp link generator
 */
export const generateWhatsAppLink = (roomName: string, checkIn = "", checkOut = "", guests = "2") => {
  let baseMsg = `Hi! I'm interested in booking a stay at Whispering Pines Resort Mukteshwar (Casa De Bello).`;
  
  if (roomName) baseMsg += `\n\nRoom Type: *${roomName}*`;
  if (checkIn) baseMsg += `\nCheck-In Date: *${checkIn}*`;
  if (checkOut) baseMsg += `\nCheck-Out Date: *${checkOut}*`;
  if (guests) baseMsg += `\nNumber of Guests: *${guests}*`;
  
  baseMsg += `\n\nPlease let me know if these dates are available and share the reservation details!`;
  
  return `https://wa.me/917505029696?text=${encodeURIComponent(baseMsg)}`;
};

/**
 * Authentic Room Inventory extracted from Casa de bello configurations
 */
export const ROOMS_INVENTORY: RoomOption[] = [
  {
    id: "entire-cottage",
    name: "Private Villa — The Ultimate Family Resort Experience Near Nainital",
    subtitle: "Complete Alpine Luxury with Private Orchard & Fireplace",
    capacity: "Up to 9-10 Adults",
    bedType: "3 Grand King Bedrooms + Premium Loft",
    pricePerNight: 15999,
    featured: true,
    image: villaSuiteBedroomImg,
    amenities: [
      "Sleeps Up to 10 — 3 King Bedrooms + Premium Loft",
      "3 Private En-Suite Baths with Himalayan Peak Views",
      "Exclusive Private Orchard Yard & Fireplace Living Room",
      "Ideal for Multi-Generational Family Holidays Near Nainital"
    ],
    description: "Rent the entire wood-and-stone alpine estate for absolute privacy. Nestled inside a manicured orchard field of apples and plums, this heritage villa boasts massive double-height wooden trusses, warm timber floorings, glass-pane windows viewing the majestic snow peaks, and personalized hospitality."
  },
  {
    id: "delux-room",
    name: "Deluxe Skylight Suite — Solo Travellers & Couples' Retreat",
    subtitle: "Cozy Wood-Paneled Skylight Hideaway",
    capacity: "2-3 Adults",
    bedType: "1 Grand Bed + Cozy Daybed",
    pricePerNight: 6499,
    featured: false,
    image: cedarSuiteBedroomImg,
    amenities: [
      "Glass Skylight Ceilings for Night-Time Star Gazing",
      "Cedar Pine Deck Overlooking Bhowali-Ramgarh Valley",
      "Rain Shower Bath & Radiator Heating for Winter Stays"
    ],
    description: "Located on the pristine top floor under cathedral wooden panels, this iconic Attic suite features beautiful skylights for star-gazing at night. Walk out to your private wooden deck of cedar pine and look over the Bhowali-Ramgarh valleys under fresh Himalayan mist."
  },
  {
    id: "orchard-room",
    name: "Family Twin Room — Ground Floor Orchard Access for Kids & Parents",
    subtitle: "Ground Floor Serenity Overlooking Fruits & Blooms",
    capacity: "2 Adults",
    bedType: "1 Premium Double Bed",
    pricePerNight: 4999,
    featured: false,
    image: orchardRoomImg,
    amenities: [
      "Direct Lawn Access — Safe Open Space for Children",
      "Exposed Old-Stone Brick Archways & Geo-Heater Warmth",
      "Best Value Family Room at Our Ramgarh Resort"
    ],
    description: "Open your doors directly onto green grass lawns and heavy-laden peach and apple trees. With exposed old-stone brick archways, state-of-the-art geo-heaters for absolute winter warmth, and cozy interiors, it represents mountain leisure at its highest order."
  },
  {
    id: "cedar-room",
    name: "Group Cottage Booking - Ramgarh's Best Rate for Large Families",
    subtitle: "Premium Comfort Infused with Pine Aromatics",
    capacity: "2 Adults",
    bedType: "1 Premium Double Bed",
    pricePerNight: 3999,
    featured: false,
    image: familyTwinRoomImg,
    amenities: [
      "Cedar Wood Pine Finish Rooms with Mountain Valley Windows",
      "High-Capacity Heaters for Winter Group Travel",
      "Best Group Rates — Book Directly for Maximum Savings"
    ],
    description: "Incredibly cozy room accented with authentic cedar wood finishes that release subtle earthy forest oils, calming the senses. Offering pristine vistas of the forested Bhowali hills and comfortable, deep bedding for restful sleep."
  }
];

export const GENERAL_AMENITIES = [
  {
    title: "Panoramic Vistas",
    icon: "Compass",
    description: "Breathtaking 180-degree unobstructed panoramas of the snow-crested Nanda Devi range directly from your balconies and lawns."
  },
  {
    title: "Wood-Fired Hearth",
    icon: "Flame",
    description: "A gorgeous luxury stone fireplace in the main lodge living room where we light comforting cedar logs every winter evening."
  },
  {
    title: "High-Speed Fiber",
    icon: "Wifi",
    description: "Robust, enterprise-grade high speed fiber optical Wi-Fi connection covering the entire villa area and terraces for remote work."
  },
  {
    title: "Eco Mountain Kitchen",
    icon: "UtensilsCrossed",
    description: "Homestyle cook cooks delicious organic farm-to-table meals locally, combining mountain Kumaon styles with custom international menus."
  },
  {
    title: "Pet Paradise",
    icon: "Heart",
    description: "We are deeply pet friendly! Acres of safe, enclosed garden lanes and open pine trails surrounding the property for dogs to romp."
  },
  {
    title: "Tarmac Parking",
    icon: "Car",
    description: "Uniquely flat, secure private gated tarmac driveway on-site that comfortably fits 3 to 4 traveller SUVs or private sedans."
  },
  {
    title: "Sunset Bonfire grounds",
    icon: "Sparkles",
    description: "Gather around our brick firepits for warm open bonfires, slow acoustic guitars, and customized luxury charcoal BBQ grills."
  },
  {
    title: "Orchard Trails",
    icon: "Trees",
    description: "Pluck your own fruits! Stroll peacefully under the natural shade of plum and apple fruit orchards within our gates."
  }
];

export const RESORT_SERVICES = [
  {
    title: "In-Room Dining",
    icon: "Utensils",
    description: "Enjoy hot, freshly prepared Kumaoni or continental meals served right in the comfort of your room or private balcony."
  },
  {
    title: "Bonfire & BBQ",
    icon: "Flame",
    description: "Gather around a warm, crackling bonfire under the starry Himalayan sky, complete with a customized live BBQ setup."
  },
  {
    title: "Travel Desk & Cabs",
    icon: "Car",
    description: "Hassle-free cab arrangements for local sightseeing, station drops, and guided tours around Nainital and Mukteshwar."
  },
  {
    title: "Daily Housekeeping",
    icon: "Sparkles",
    description: "Impeccable daily room cleaning and laundry services ensuring your alpine sanctuary remains pristine throughout your stay."
  }
];

export const LOCAL_EXPERIENCES: LocalExperience[] = [
  {
    id: "mukteshwar-temple",
    title: "Mukteshwar Dham temple",
    distance: "25 km (45-min Drive)",
    description: "A 350-year-old historic Shiva temple perched atop a grand rocky hill, providing deep peace and views of the Trishul and Nanda Devi peaks.",
    tag: "Spiritual & Majestic",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "chauli-ki-jali",
    title: "Chauli Ki Jali Rocks",
    distance: "25 km (45-min Drive)",
    description: "A massive cliff formation next to Mukteshwar temple. Incredible spot for paragliding, rock climbing, and watching dramatic orange sunsets.",
    tag: "Adventure & Vistas",
    image: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "bhalu-gaad-falls",
    title: "Bhalu Gaad stream Falls",
    distance: "12 km (20-min Drive)",
    description: "A scenic natural waterfall. A spectacular 2km trek through shallow pine canopies and wild shrubs brings you to a gorgeous hidden pool.",
    tag: "Nature Trekking",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "orchard-walks",
    title: "Malla Ramgarh Fruit Orchards",
    distance: "0.5 km (Walk)",
    description: "Ramgarh is the 'Fruit Bowl of Kumaon'. Stroll through pathways filled with plums, peaches, apples, and apricots in full blossom.",
    tag: "Bespoke Leisure",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=800"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Dr. Vikram Sethi",
    rating: 5,
    source: "Google Local Guide",
    date: "May 2026",
    comment: "An absolute masterpiece of a premium villa! The panoramic Nanda Devi peaks look otherworldly from the Attic suite in the morning. The chef's Kumaoni local chicken curry and warm mandua rotis were stellar. High-speed Wi-Fi let me consult cases seamlessly. Will return!"
  },
  {
    name: "Priya & Rohan Sen",
    rating: 5,
    source: "Airbnb Superguest",
    date: "April 2026",
    comment: "Words cannot describe the tranquility of Malla Ramgarh. Whispering Pines is surrounded by massive peach trees and silent pinewood hills. The kids loved the fireplace evenings and our Golden Retriever was in absolute heaven running in the safe garden lawns. Gated parking was very convenient."
  },
  {
    name: "Aman Rastogi",
    rating: 5,
    source: "Booking.com Review",
    date: "June 2026",
    comment: "Exceptional remote working setup. Constant 150 Mbps speed on fiber, hot showers, cozy timber wood bed, and serene fresh air. Highly recommend booking the Entire Villa if travelling with extended family — the living room wood hearth is magnificent!"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Is there dedicated, secure private parking available on site?",
    answer: "Absolutely! The property features a secure, flat gated private gravel driveway that comfortably accommodates 3 to 4 tourist SUVs/sedans right in front of the villa. No tricky cliff-edge parking required."
  },
  {
    question: "Do you have high-speed internet suited for remote working?",
    answer: "Yes, we have high-speed dedicated fiber-optic internet connection (150 Mbps) supporting active work sessions, video calls, and streaming seamlessly throughout the villa and front outdoor gardens."
  },
  {
    question: "How do meals and dining work? Can we order customized food?",
    answer: "We offer delicious customized homestyle dining on-site. Our resident cook prepares fresh multi-cuisine meals and authentic local Kumaoni delicacies using locally-sourced organic vegetables. Guest can choose breakfast/lunch/dinner packages or order on-demand."
  },
  {
    question: "Are pets allowed inside the villa and gardens?",
    answer: "Absolutely! We love pets and are completely dog-friendly. The villa has large, secure, enclosed front lawns and direct access to wilderness pine forest paths where your dogs can explore safely."
  },
  {
    question: "How does the WhatsApp booking process work?",
    answer: "To book, simply click select your room, guest count, and dates, then hit 'Instantly Book on WhatsApp'. It loads a formatted ticket draft onto your phone. Our customer service representative will respond in minutes, verify your block, and share secure UPI/Credit Card payment invoices."
  },
  {
    question: "Are fireplace logs and bonfire wood provided?",
    answer: "Yes, we arrange authentic wood logs for both the high-quality indoor living room fireplace and the outdoor bonfire grill. A complimentary setup is offered on arrival, and further wood logs can be refilled at a nominal charge."
  }
];
