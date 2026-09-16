import type { RoomOption, LocalExperience, FAQItem, Testimonial } from "./types";
import villaSuiteBedroomImg from "./assets/images/villa_in_nanital.avif?url";
import cedarSuiteBedroomImg from "./assets/images/Delux_room_Whispering_pines_mukteshwar.avif?url";
import oakSuiteBedroomImg from "./assets/images/Private-Dining-Area-resort-near-mukteshwar.avif?url";
import familyTwinRoomImg from "./assets/images/Group_booking_nainital_resort.avif?url";
import orchardRoomImg from "./assets/images/Family_Twin_Room_Near_nainital.avif?url";

export const RESORT_CONTACT = {
  gbpName: "Whispering Pines Resort by Casa De Bello",
  name: "Whispering Pines Resort by Casa De Bello - Near Mukteshwar",
  legalName: "Casa De Bello - Whispering Pines",
  phone: "075050 29696",
  phoneDisplay: "075050 29696",
  phoneGbp: "075050 29696",
  phoneIntl: "+91-7505029696",
  phoneIntlDisplay: "+91 75050 29696",
  phoneRaw: "07505029696",
  phoneTel: "+917505029696",
  whatsapp: "https://wa.me/917505029696",
  email: "booking@whisperingpinesresort.in",
  domain: "https://whisperingpinesresort.in/",
  streetAddress: "Malla Ramgarh, Bhowali-Ramgarh-Mukteshwar Rd",
  addressLocality: "Mukteshwar",
  addressRegion: "Nainital, Uttarakhand",
  postalCode: "263137",
  addressCountry: "IN",
  location: "Malla Ramgarh, Bhowali-Ramgarh-Mukteshwar Rd, Mukteshwar, Nainital, Uttarakhand 263137",
  address: "Malla Ramgarh, Bhowali-Ramgarh-Mukteshwar Rd, Mukteshwar, Nainital, Uttarakhand 263137",
  geoCoordinates: "29.4262052, 79.5506314",
  latitude: 29.4262052,
  longitude: 79.5506314,
  elevation: "1,780m",
  gmapsLink: "https://maps.google.com/?cid=8386667112972057918",
  gmapsCid: "https://maps.google.com/?cid=8386667112972057918",
  googleTravel: "https://www.google.com/travel/hotels/entity/ChgIvvqZseCp27F0GgwvZy8xaGR6ejNrcDcQAQ",
  rating: {
    value: "4.6",
    reviewCount: "400+",
    source: "Google Reviews"
  },
  socials: {
    facebook: "https://facebook.com/whisperingpinesbycasadebello",
    instagram: "https://www.instagram.com/whisperingpines.casa",
    twitter: "https://x.com/WhiperingPines",
    tripadvisor: "https://www.tripadvisor.in/Hotel_Review-g1049689-d34470070-Reviews-Whispering_Pines_Resort_Mukteshwar-Ramgarh_Nainital_District_Uttarakhand.html",
    youtube: "https://www.youtube.com/channel/UC7WARaMtVTj9QS57zMX3yZw",
    googleTravel: "https://www.google.com/travel/hotels/entity/ChgIvvqZseCp27F0GgwvZy8xaGR6ejNrcDcQAQ"
  },
  description: "Whispering Pines Resort by Casa de bello is a 4 Star heritage mountain resort located on the Bhowali-Ramgarh-Mukteshwar Road in Malla Ramgarh. Surrounded by dense pine canopies and private apple, peach, and plum orchards, the property offers clean comfortable rooms with luxury facilities.\n\nDesigned for families, remote professionals, and travelers seeking a quiet Himalayan retreat, the resort offers 180° panoramic views of the Nanda Devi and Trishul peaks. As an upgraded continuation of the Clarks Exotica legacy, we prioritize direct guest relationships.\n\nContact our front desk directly at 075050 29696 (+91-7505029696) or via WhatsApp to secure exclusive past-guest retention rates and direct-booking benefits."
};

export const BOOKING_ENGINE_URL = "https://casadebello-book.whisperingpinesresort.in/";

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
      "180° Himalayan Snow Views from All Bedrooms & Balconies",
      "Sleeps Up to 10 — 3 King Bedrooms + Premium Loft",
      "Exclusive Private Orchard Yard & Fireplace Living Room",
      "Ideal for Multi-Generational Family Holidays & Reunions"
    ],
    description: "Rent the entire wood-and-stone alpine estate for absolute privacy. Perfect for family resort Nainital getaways, this three-bedroom heritage alpine villa set within 2 acres of terraced fruit orchards features massive double-height wooden trusses, glass-pane windows viewing the majestic snow peaks, and direct Ramgarh resort booking perks."
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
      "180° Himalayan Peak & Valley Panoramas from Private Deck",
      "Glass Skylight Ceilings for Night-Time Star Gazing",
      "Rain Shower Bath & Radiator Heating for Cozy Winter Stays"
    ],
    description: "Located on the pristine top floor under cathedral wooden panels, this iconic Attic suite features beautiful skylights for star-gazing at night. Ideal for couples seeking a premium Ramgarh resort booking, walk out to your private wooden deck of cedar pine and look over the Bhowali-Ramgarh valleys at this tranquil family resort near Nainital."
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
      "180° Himalayan Ridge Views & Direct Orchard Lawn Access",
      "Exposed Old-Stone Brick Archways & Geo-Heater Warmth",
      "Safe, Quiet Open Space for Children & Relaxed Family Stays"
    ],
    description: "Open your doors directly onto green lawns and private peach and apple trees. Featuring exposed old-stone brick archways, state-of-the-art geo-heaters for absolute winter warmth, and cozy interiors, it represents the finest choice for a family resort Nainital experience, with simple direct Ramgarh resort booking parameters."
  },
  {
    id: "cedar-room",
    name: "Group Cottage Booking — Ramgarh's Best Rate for Large Families",
    subtitle: "Premium Comfort Infused with Pine Aromatics",
    capacity: "2 Adults",
    bedType: "1 Premium Double Bed",
    pricePerNight: 3999,
    featured: false,
    image: familyTwinRoomImg,
    amenities: [
      "180° Himalayan Snow Peak Views from Private Windows",
      "Cedar Wood Pine Finish Rooms Infused with Forest Aromatics",
      "High-Capacity Heaters & Homestyle Mountain Comfort"
    ],
    description: "An incredibly cozy room accented with authentic cedar wood finishes that release subtle earthy forest oils, calming the senses. Offering pristine vistas of the forested Bhowali hills, this room is perfect for group travel, with direct Ramgarh resort booking steps for a memorable family resort Nainital vacation."
  }
];

export const GENERAL_AMENITIES = [
  {
    title: "180° Himalayan Panoramas — Snow Peaks From ALL Rooms & Balconies",
    icon: "Compass",
    description: "Breathtaking 180-degree unobstructed panoramas of the snow-crested Nanda Devi range directly from all rooms, private balconies, and lawns.",
    features: [
      "180° Unobstructed Ridge Views of Nanda Devi & Trishul from Every Room",
      "Snow-Crested Peaks Visible Right from Your Bed & Private Balcony",
      "Spectacular Golden Sunrise & Sunset Mountain Vistas Year-Round"
    ]
  },
  {
    title: "Multi-Cuisine Dining & Wide Food Variety — Kumaoni Specialties & Live BBQ",
    icon: "UtensilsCrossed",
    description: "Delight in an extensive variety of fresh food prepared on-site, blending authentic regional Kumaoni dishes with North Indian favorites and custom continental menus.",
    features: [
      "Authentic Local Kumaoni Delicacies & Rich Multi-Cuisine Menus",
      "Farm-to-Table Fresh Organic Mountain Ingredients Locally Sourced",
      "Evening Bonfires with Live Charcoal BBQ & Mountain Snacks"
    ]
  },
  {
    title: "Pure Mountain Relaxation & Leisure — Quiet Pine Solitude & Fresh Air",
    icon: "Heart",
    description: "Designed for restorative rest, slow mountain living, and peaceful relaxation away from city noise, with ambient Wi-Fi available for your peace of mind.",
    features: [
      "Peaceful Orchard Lawns & Relaxation Nooks in the Pine Canopy",
      "Restorative Slow Living Built for Complete Mental Rejuvenation",
      "Seamless Ambient Wi-Fi for Effortless Connectivity When Needed"
    ]
  },
  {
    title: "Wood-Fired Stone Fireplace — Cozy Heart of Our Mountain Resort",
    icon: "Flame",
    description: "A gorgeous luxury stone fireplace in the main lodge living room of the best resort near Mukteshwar, where we light comforting cedar logs every winter evening.",
    features: [
      "Cedar Log Fireplace in the Main Lodge Living Room",
      "Fireplace Setup on Every Winter Arrival for Cozy Comfort",
      "Outdoor Bonfire & Charcoal BBQ Grill on Private Grounds"
    ]
  },
  {
    title: "Pet-Friendly Resort Near Mukteshwar — Safe Lawns & Open Trails",
    icon: "Heart",
    description: "We are deeply pet friendly! Acres of safe, enclosed garden lanes and open pine trails at the best resort near Mukteshwar ensure a pet paradise for dogs and cats.",
    features: [
      "Fully Enclosed Safe Garden Lawns for Dogs to Roam",
      "Direct Wilderness Pine Trail Access for Pet Walks",
      "No Extra Pet Charges — Bring Your Dog or Cat"
    ]
  },
  {
    title: "Secure Parking, Backup Power & Flat Tarmac Driveway",
    icon: "Car",
    description: "Uniquely flat, secure private gated tarmac driveway, silent generators, and pump channels at the best resort near Mukteshwar.",
    features: [
      "Flat Gated Tarmac Parking for 3–4 SUVs On-Site",
      "High-Capacity Silent Generators — No Power Outage Risk",
      "Double Water Pumping Channels for Uninterrupted Supply"
    ]
  },
  {
    title: "Bonfire Pits, Pine Forest Trails & Fruit Orchards",
    icon: "Trees",
    description: "Gather around brick firepits for warm open bonfires and pluck fresh organic apples and plums at the best resort near Mukteshwar.",
    features: [
      "Private Peach, Plum, Apple & Apricot Orchard Walks",
      "Deodar, Pine & Oak Forest Trails from the Property Gate",
      "Brick Firepit Bonfire Evenings with Acoustic Guitar Sessions"
    ]
  },
  {
    title: "Expansive Scenic Event Lawn & Viewpoint Deck",
    icon: "Sparkles",
    description: "Beautifully manicured wide green lawns overlooking mountain peaks, offering event and relaxation capabilities unmatched by any other resort near Mukteshwar.",
    features: [
      "Expansive Gated Green Lawns for Family Relaxation & Gatherings",
      "Unobstructed Valley & Himalayan Mountain Backdrops",
      "Custom Mountain Dining & Leisure Setups for Private Gatherings"
    ]
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
  },
  {
    title: "In-House Restaurant & Private Sitting",
    icon: "Coffee",
    description: "Experience our exclusive in-house multi-cuisine restaurant featuring elegant private sitting areas perfect for intimate family dinners and quiet romantic evenings."
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
  },
  {
    id: "stargazing-whispering-pines",
    title: "Stargazing under Himalayan Skies",
    distance: "On-site (Terrace)",
    description: "The clear mountain air at Whispering Pines Resort offers pristine views of the night sky. Enjoy a guided stargazing session right from our terrace.",
    tag: "Night Sky",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "nature-trail-mountain-walk",
    title: "Nature Trail & Mountain Walk",
    distance: "On-site Access",
    description: "Explore the beautiful pine and oak forests surrounding Whispering Pines. Take a guided walk through the Ramgarh village to experience local Kumaoni life and discover hidden nature trails.",
    tag: "Nature Walk",
    image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "guided-treks-nature-retreats",
    title: "Guided Treks & Nature Retreats",
    distance: "Nearby Trails",
    description: "Embark on curated nature retreats and guided trekking experiences through scenic Himalayan trails near Mukteshwar, designed for both beginners and seasoned adventurers. Personally hosted and guided by Harsh & Priyanka.",
    tag: "Adventure",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "curated-bonfire-bbq",
    title: "Curated Experiences: Bonfires, BBQ & Stargazing",
    distance: "On-site",
    description: "Experience clear-sky stargazing and curated outdoor bonfires & barbeque at Whispering Pines Resort. Book direct for complimentary winter camping access and hot local Kumaoni snacks.",
    tag: "Evening Leisure",
    image: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "group-yoga-sessions",
    title: "Special Yoga Sessions For Groups",
    distance: "On-site",
    description: "Rejuvenate your mind and body with our guided group yoga sessions amidst the serene mountain environment of Whispering Pines Ramgarh.",
    tag: "Wellness",
    image: "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?auto=format&fit=crop&q=80&w=800"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Digital Swapneel",
    rating: 5,
    source: "Google Reviews",
    date: "June 2026",
    comment: "Absolutely stunning upgrade! Whispering Pines Resort Mukteshwar has completely transformed the old Clarks Exotica property. Same beautiful location, but much better luxury amenities. Book direct on their site for the best rates. 10/10 mountain escape."
  },
  {
    name: "Anurag Arya",
    rating: 5,
    source: "Google Reviews",
    date: "July 2026",
    comment: "Really nice place for a peaceful getaway. The rooms were clean, staff was very friendly and the food was tasty. Loved the view and the calm atmosphere. Would definitely visit again. Highly recommended!"
  },
  {
    name: "Himanshu Saxena",
    rating: 5,
    source: "Google Reviews",
    date: "April 2026",
    comment: "It was a pleasant stay with awesome staff, food and serenity. Location easy to reach, staff very supportive and cooperative, property quite scenic."
  },
  {
    name: "Mayank Tyagi",
    rating: 5,
    source: "Google Reviews",
    date: "March 2025",
    comment: "First of all it is a great property, well maintained neat and clean and since it's Ramgarh near Mukteshwar so away from crowd and quiet place where you just enjoy the beauty of the nature. Me and my friends planned a visit to Baba Neeb Karori ashram with Family and booked a stay..."
  },
  {
    name: "Khushi Joshi",
    rating: 5,
    source: "Google Reviews",
    date: "June 2025",
    comment: "The view was amazing, the staff and the owner were very sweet with their service. I would recommend everyone who are planning to visit Ramgarh to give it a try for sure!"
  },
  {
    name: "Ashok Gupta",
    rating: 5,
    source: "Google Reviews",
    date: "June 2025",
    comment: "We 20 peoples stayed for two days, It was awesome experience. Very nice views, food quality was very good, service staff very cooperative. All rooms well maintained and clean."
  },
  {
    name: "Manasvi Vats",
    rating: 5,
    source: "Google Reviews",
    date: "June 2025",
    comment: "It is really good hotel. View from hotel is beautiful and the services are really nice. Staff is very polite and humble. Great experience. Must visit if anyone is coming to Nainital."
  },
  {
    name: "Simran Kashyap",
    rating: 5,
    source: "Google Reviews",
    date: "February 2025",
    comment: "Our stay was very good, we visited with our family in January it was surely a good choice, they have a gaming area as well. Will visit again definitely."
  },
  {
    name: "Amit Tripathi",
    rating: 5,
    source: "Google Reviews",
    date: "December 2025",
    comment: "Had a good stay for 2 days in the double room, spacious clean. Excellent service and good food served with homely warmth."
  },
  {
    name: "Priyanka Gupta",
    rating: 5,
    source: "Google Reviews",
    date: "June 2025",
    comment: "Our stay during last 3 days was awesome... Food was really good. Staff was very cooperative. The view from the room was breathtaking.. we would definitely like to come back.."
  },
  {
    name: "Krish Bisht",
    rating: 5,
    source: "Google Reviews",
    date: "February 2025",
    comment: "We had an amazing stay, helpful staff good food, very good views from the property. Would definitely visit again."
  },
  {
    name: "Neeraj Sharma",
    rating: 5,
    source: "Google Reviews",
    date: "December 2024",
    comment: "Nice place. nice staff. very good service. we have pleasant stay. staff is very cordial... will come again."
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Is there dedicated, secure private parking available on site?",
    answer: "Absolutely! The property features a secure, flat gated private gravel driveway that comfortably accommodates 3 to 4 tourist SUVs/sedans right in front of the villa. No tricky cliff-edge parking required."
  },
  {
    question: "Is Wi-Fi available at the resort if I need to connect?",
    answer: "Yes, reliable high-speed fiber-optic Wi-Fi is available across all rooms, private balconies, and outdoor gardens. While our guests primarily visit for peaceful relaxation, unwinding in nature, and enjoying the 180° Himalayan views, seamless connectivity is always available whenever you need it."
  },
  {
    question: "How do meals and dining work? Can we order customized food?",
    answer: "We offer delicious customized homestyle dining on-site with an extensive variety of food. Our resident cook prepares fresh multi-cuisine meals, North Indian comfort food, and authentic local Kumaoni delicacies using locally-sourced organic vegetables. Guests can choose breakfast/lunch/dinner packages or order on-demand."
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

export const CONTACT_FAQS: FAQItem[] = [
  {
    question: "What is the best resort in Ramgarh for a family vacation?",
    answer: "Whispering Pines Resort by Casa De Bello is widely rated the best resort in Ramgarh for families. The property offers 25 premium rooms and a private villa sleeping up to 10 guests, a swimming pool, multi-cuisine restaurant with rich food variety, safe enclosed garden lawns, orchard walks and 180 degree panoramic views of the Nanda Devi and Trishul Himalayan peaks from every room. Unlike standard commercial hotels in the Nainital district, the resort combines boutique mountain character with the full capacity needed for multi-generational family groups."
  },
  {
    question: "Which resort near Nainital has a swimming pool and mountain views?",
    answer: "Whispering Pines Resort in Malla Ramgarh is one of the very few resorts near Nainital to offer both a swimming pool and unobstructed 180 degree Himalayan views from the same property. The pool is surrounded by pine forest and private fruit orchards at 1,780 metres altitude, with Nanda Devi and Trishul snow peaks visible year-round from the poolside and all room balconies."
  },
  {
    question: "How far is Whispering Pines Resort from Delhi and how do I reach it?",
    answer: "Whispering Pines Resort is approximately 6 to 8 hours drive from Delhi, Gurugram and Noida via NH9 and NH309. The nearest railhead is Kathgodam, approximately 40 minutes from the resort. The nearest airport is Pantnagar, approximately 55 minutes away. The resort is located on the Bhowali-Ramgarh-Mukteshwar Road in Malla Ramgarh, Uttarakhand 263137. The reservations team at +91-7505029696 can coordinate airport and station pickup on request."
  },
  {
    question: "What is the best resort near Mukteshwar for a 2 to 3 night stay?",
    answer: "Whispering Pines Resort by Casa De Bello on the Bhowali-Ramgarh-Mukteshwar Road is consistently rated the best resort near Mukteshwar for short 2 to 3 night stays. The property is 25 km from Mukteshwar Dham temple and offers 180° Himalayan views from all rooms, cozy fireplace rooms, orchard walks, swimming pool, diverse multi-cuisine dining, and bonfire evenings — making it the premier choice for pure relaxation, family bonding, and leisure escapes."
  },
  {
    question: "Can I book Whispering Pines Resort directly without MakeMyTrip or Booking.com?",
    answer: "Yes. Direct booking via WhatsApp at +91-7505029696 is the best way to reserve at Whispering Pines Resort and guarantees the lowest available rate — saving up to 20 percent compared to OTA platforms like MakeMyTrip, Goibibo and Booking.com. Direct guests also receive priority room upgrades, flexible check-in timing and exclusive retention discounts on return stays. Payment is accepted via secure UPI, Credit Card and Net Banking."
  },
  {
    question: "Is Whispering Pines Resort better than other resorts in Ramgarh?",
    answer: "Whispering Pines Resort stands apart from other resorts in Ramgarh through a rare combination of amenities no single competitor offers together — unobstructed 180° Himalayan views from every single room, a diverse variety of fresh homestyle and Kumaoni food, an outdoor swimming pool, a private villa sleeping 10, active apple and peach orchards, stone and cedar wood heritage architecture, and pet-friendly enclosed gardens. It is the only property on the Bhowali-Ramgarh-Mukteshwar Road to combine 4-star boutique hospitality with the full capacity of a 25-room resort."
  },
  {
    question: "Which resort near Nainital is best for a large family group of 10 or more?",
    answer: "Whispering Pines Resort is the ideal choice for large family groups of 10 or more near Nainital. The private villa alone accommodates up to 10 guests across 3 king bedrooms, a premium loft and a private orchard yard with fireplace living room. Combined with the 25-room resort building, the property can comfortably host multi-generational family reunions, large group bookings and corporate retreats. Group booking rates and customised meal plans are available via WhatsApp at +91-7505029696."
  },
  {
    question: "What is the difference between the Private Villa and the Deluxe Suites at Whispering Pines?",
    answer: "The Private Villa at Whispering Pines is an entire standalone stone and cedar estate sleeping up to 10 guests across 3 king bedrooms, a premium loft, 3 en-suite bathrooms, a private fireplace living room and an exclusive orchard yard with outdoor BBQ — ideal for large families and groups who want complete privacy. The Deluxe Skylight Suite is a top-floor attic suite for 2 to 3 guests featuring glass skylight ceilings for star-gazing, a cedar pine valley-view deck and rain shower bathroom — ideal for couples and honeymooners seeking an intimate mountain escape."
  },
  {
    question: "Does Whispering Pines Resort offer better rates than MakeMyTrip or Goibibo?",
    answer: "Yes. Whispering Pines Resort guarantees the best available rate on direct WhatsApp bookings at +91-7505029696 — saving guests up to 20 percent versus rates listed on MakeMyTrip, Goibibo and Booking.com. OTA platforms charge the resort a commission of 15 to 25 percent which is passed on to the guest in the listed price. Direct bookings eliminate this markup entirely and additionally include priority room upgrade eligibility, flexible check-in and exclusive past-guest retention rates on return visits."
  },
  {
    question: "What makes Whispering Pines different from other resorts on the Mukteshwar Road?",
    answer: "Whispering Pines Resort by Casa De Bello is the only property on the Bhowali-Ramgarh-Mukteshwar Road offering all of the following together — 180 degree Nanda Devi Himalayan views from all rooms, an expansive variety of delicious homestyle and Kumaoni dining, an outdoor swimming pool, a standalone private villa sleeping 10, active peach and apple orchards, pet-friendly enclosed lawns, nightly bonfire and BBQ service, and pure mountain tranquility. Most competing properties offer one or two of these features. Whispering Pines offers all of them within a single boutique 4-star heritage property."
  },
  {
    question: "What is the best time to visit Ramgarh and Mukteshwar?",
    answer: "Ramgarh and Mukteshwar can be visited year-round. March to June is ideal for orchard blossoms, clear Himalayan views and pleasant 15 to 25 degree temperatures — perfect for families and outdoor activities. July to September brings lush green monsoon landscapes and misty pine forests, best suited for nature lovers and photographers. October to February offers crisp winter skies, snowfall on the Nanda Devi peaks, and the unique experience of cozy fireplace evenings and bonfire nights at Whispering Pines Resort — the most popular season for couples and honeymooners."
  },
  {
    question: "Is Ramgarh a good destination for a winter trip from Delhi?",
    answer: "Yes. Ramgarh is one of the best winter mountain destinations within a 6 to 8 hour drive from Delhi. Temperatures drop to 2 to 8 degrees Celsius between December and February, offering crisp cold air, snowfall on surrounding Himalayan peaks and a completely different landscape from the summer season. Whispering Pines Resort is specifically designed for winter stays — all rooms feature stone fireplace heating, in-room radiators and cedar wood insulation. The outdoor bonfire and BBQ on snow-dusted orchard grounds is a signature winter experience unique to the property."
  },
  {
    question: "What are the best things to do near Mukteshwar for families?",
    answer: "The best things to do near Mukteshwar for families include visiting the 350-year-old Mukteshwar Dham Shiva temple with panoramic Himalayan views, trekking to Bhalu Gaad waterfalls through 2 km of pine and deodar forest, exploring Chauli Ki Jali cliff formations for paragliding and sunset views, walking through Ramgarh's famous apple and peach orchards, and visiting Kainchi Dham, the Neem Karoli Baba Ashram, 45 minutes from the resort. Whispering Pines Resort arranges cab bookings and guided day excursions to all these destinations directly from the in-house travel desk."
  },
  {
    question: "Is Kainchi Dham worth visiting and how far is it from Ramgarh?",
    answer: "Yes. Kainchi Dham, the Neem Karoli Baba Ashram, is one of the most spiritually significant and visited temples in Uttarakhand and is absolutely worth visiting. It is located approximately 45 minutes from Whispering Pines Resort in Ramgarh. The ashram is set along the Kosi riverbanks in a tranquil valley and receives thousands of devotees and tourists daily. Whispering Pines Resort serves as an ideal base for Kainchi Dham visits — the in-house travel desk coordinates morning cab departures to ensure arrival before peak temple hours."
  },
  {
    question: "Can guests stay for extended relaxation and creative retreats?",
    answer: "Yes. While Whispering Pines Resort is primarily a sanctuary for relaxation, slow mountain living, and family holidays, we also welcome guests seeking extended wellness stays, creative retreats, or tranquil work-from-mountain weeks. Reliable high-speed fiber Wi-Fi is available throughout the estate, paired with 180° snow peak views from your desk, fresh orchard air, and customized daily meal plans on direct WhatsApp booking at +91-7505029696."
  },
  {
    question: "Is Whispering Pines Resort pet friendly and can I bring my dog?",
    answer: "Yes. Whispering Pines Resort is a fully pet-friendly resort near Nainital. The property has large secure enclosed garden lawns where dogs can roam freely and direct access to pine and deodar wilderness trails for off-leash walks. Both dogs and cats are welcome with no additional pet charges. The resort team can provide water bowls, extra towels and pet-friendly room arrangements on prior request via WhatsApp at +91-7505029696."
  },
  {
    question: "Does Whispering Pines Resort have a restaurant or do guests need to go out for food?",
    answer: "Whispering Pines Resort has a full on-site multi-cuisine restaurant and 24-hour in-room dining service — guests never need to leave the property for meals. The resident mountain chef prepares a rich variety of fresh food: authentic Kumaoni regional dishes, North Indian comfort foods, Continental classics, and custom meal options using locally sourced organic vegetables and farm-fresh ingredients. Guests can pre-book daily meal packages or order on demand directly to their room, private balcony, or orchard lawn."
  },
  {
    question: "What room type at Whispering Pines is best for a honeymoon couple?",
    answer: "The Deluxe Skylight Suite is the most popular room choice for honeymooning couples at Whispering Pines Resort. It features glass skylight ceilings for intimate star-gazing nights, a private cedar pine deck overlooking the Bhowali-Ramgarh valley, a rain shower bathroom and direct orchard garden views. For couples seeking maximum privacy, the Private Villa with its standalone stone fireplace living room, private orchard yard and BBQ terrace offers a completely secluded honeymoon experience with 180 degree Nanda Devi Himalayan panoramas."
  },
  {
    question: "How many rooms does Whispering Pines Resort have and can it accommodate a corporate group?",
    answer: "Whispering Pines Resort has 25 premium rooms plus a standalone private villa sleeping up to 10 additional guests — giving a total group accommodation capacity of 35 or more guests. The property is well-suited for executive offsites and leadership retreats with a dedicated conference and banquet hall accommodating up to 30 delegates, ambient Wi-Fi, projector and whiteboard setup, and fully customisable corporate catering menus. Group booking and corporate retreat packages are available on direct inquiry via WhatsApp at +91-7505029696."
  },
  {
    question: "What happened to Clarks Exotica Mukteshwar and is it still open?",
    answer: "Clarks Exotica Mukteshwar has been upgraded and relaunched as Whispering Pines Resort by Casa De Bello. The property continues to operate at the same iconic Bhowali-Ramgarh-Mukteshwar Road address in Malla Ramgarh, Uttarakhand under new Casa De Bello management. The resort is fully open and has been significantly upgraded with a new private villa, enhanced stone cottage architecture, swimming pool, diverse multi-cuisine dining, and personalised boutique hospitality. Past Clarks Exotica guests receive exclusive returning-guest rates on direct WhatsApp booking at +91-7505029696."
  }
];
