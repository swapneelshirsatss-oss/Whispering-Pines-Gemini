import { RoomOption, LocalExperience, FAQItem, Testimonial } from "./types";
import villaSuiteBedroomImg from "./assets/images/villa_suite_bedroom_1782032168947.jpg";
import cedarSuiteBedroomImg from "./assets/images/cedar_suite_bedroom_1782032342021.jpg";

import familyTwinRoomImg from "./assets/images/booking_groups_room_1782034429854.jpg";
import orchardRoomImg from "./assets/images/family_twin_room_1782035034454.jpg";

export const RESORT_CONTACT = {
  name: "Whispering Pines Resort Mukteshwar",
  legalName: "Casa De Bello - Whistling Pines",
  phone: "+91 7505029696",
  altPhone: "+91 7088107777",
  email: "booking@whisperingpinesresort.in",
  domain: "https://whisperingpinesresort.in/",
  location: "Malla Ramgarh, Bhowali-Ramgarh-Mukteshwar Rd, Uttarakhand 263137",
  gmapsLink: "https://maps.google.com/?cid=8386667112972057918",
  socials: {
    facebook: "https://www.facebook.com/profile.php?id=61590982499102",
    instagram: "https://www.instagram.com/whisperingpines.casa",
    twitter: "https://x.com/WhiperingPines"
  }
};

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
    name: "Premium Villa (Entire Suite)",
    subtitle: "Complete Alpine Luxury with Private Orchard & Fireplace",
    capacity: "Up to 9-10 Adults",
    bedType: "3 Grand King Bedrooms + Premium Loft",
    pricePerNight: 15999,
    featured: true,
    image: villaSuiteBedroomImg,
    amenities: [
      "3 Private En-Suite Baths",
      "Private Orchard Yard",
      "Himalayan View Balcony",
      "Homestyle Kitchen"
    ],
    description: "Rent the entire wood-and-stone alpine estate for absolute privacy. Nestled inside a manicured orchard field of apples and plums, this heritage villa boasts massive double-height wooden trusses, warm timber floorings, glass-pane windows viewing the majestic snow peaks, and personalized hospitality."
  },
  {
    id: "delux-room",
    name: "Delux Room",
    subtitle: "Cozy Wood-Paneled Skylight Hideaway",
    capacity: "2-3 Adults",
    bedType: "1 Grand Bed + Cozy Daybed",
    pricePerNight: 6499,
    featured: false,
    image: cedarSuiteBedroomImg,
    amenities: [
      "Glass Skylight Ceilings",
      "Rain-Shower Bath",
      "Private Mountain Balcony",
      "Radiator Heaters",
      "Tea/Coffee Station",
      "Plush Seating Lounge"
    ],
    description: "Located on the pristine top floor under cathedral wooden panels, this iconic Attic suite features beautiful skylights for star-gazing at night. Walk out to your private wooden deck of cedar pine and look over the Bhowali-Ramgarh valleys under fresh Himalayan mist."
  },
  {
    id: "orchard-room",
    name: "Family Twin Room",
    subtitle: "Ground Floor Serenity Overlooking Fruits & Blooms",
    capacity: "2 Adults",
    bedType: "1 Premium Double Bed",
    pricePerNight: 4999,
    featured: false,
    image: orchardRoomImg,
    amenities: [
      "Direct Lawn Access",
      "Stone Masonry Accent",
      "Modern Bath",
      "Plush Bedding",
      "Flat Screen TV",
      "Garden Seating"
    ],
    description: "Open your doors directly onto green grass lawns and heavy-laden peach and apple trees. With exposed old-stone brick archways, state-of-the-art geo-heaters for absolute winter warmth, and cozy interiors, it represents mountain leisure at its highest order."
  },
  {
    id: "cedar-room",
    name: "Booking for Groups",
    subtitle: "Premium Comfort Infused with Pine Aromatics",
    capacity: "2 Adults",
    bedType: "1 Premium Double Bed",
    pricePerNight: 3999,
    featured: false,
    image: familyTwinRoomImg,
    amenities: [
      "Mountain Valley Windows",
      "Elegant Bath",
      "Pine-Wood Finishes",
      "High-Capacity Heaters",
      "Tea Kettle",
      "Housekeeping"
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
    title: "Pine Forest Trails",
    icon: "Trees",
    description: "Direct walk access to serene paths of deodar, pine, and oak trees that range through Malla Ramgarh’s quiet peak areas."
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
