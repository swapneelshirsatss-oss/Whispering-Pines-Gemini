export interface TransitRoute {
  id: string;
  origin: string;
  category: "transit_hubs" | "local_sights";
  mode: string;
  distanceKm: string;
  duration: string;
  routeDescription: string;
  googleMapsUrl: string;
  iconType: "car" | "plane" | "train" | "bus" | "temple" | "lake" | "mountain";
  badge?: string;
  recommendedRouteName: string;
}

export const TRANSIT_ROUTES: TransitRoute[] = [
  {
    id: "new-delhi",
    origin: "New Delhi (City Center / Connaught Place)",
    category: "transit_hubs",
    mode: "Self-Drive / Private Cab",
    distanceKm: "~340 km",
    duration: "6.5 – 7.5 hrs",
    recommendedRouteName: "Delhi to Ramgarh via NH 9 & Bhowali Rd",
    routeDescription: "New Delhi ➔ Ghaziabad ➔ Moradabad Bypass ➔ Rampur ➔ Bilaspur ➔ Rudrapur ➔ Haldwani ➔ Kathgodam ➔ Bhowali ➔ Malla Ramgarh",
    googleMapsUrl: "https://www.google.com/maps/dir/?api=1&origin=New+Delhi,+Delhi,+India&destination=Whispering+Pines+Resort+by+Casa+De+Bello&destination_place_id=ChIJqZUcXyijoDkRPn0mBk5tY3Q&travelmode=driving",
    iconType: "car",
    badge: "Direct Highway"
  },
  {
    id: "igi-airport-delhi",
    origin: "IGI Airport, Delhi (DEL)",
    category: "transit_hubs",
    mode: "Private Cab / Taxi",
    distanceKm: "~350 km",
    duration: "7.0 – 8.0 hrs",
    recommendedRouteName: "IGI Airport via Delhi-Meerut Exp & NH 9",
    routeDescription: "IGI Terminal 3 ➔ Delhi-Meerut Expressway ➔ Hapur ➔ Moradabad ➔ Rampur ➔ Kathgodam ➔ Bhowali ➔ Malla Ramgarh",
    googleMapsUrl: "https://www.google.com/maps/dir/?api=1&origin=Indira+Gandhi+Int'l+Airport,+New+Delhi,+Delhi+110037,+India&destination=Whispering+Pines+Resort+by+Casa+De+Bello&destination_place_id=ChIJqZUcXyijoDkRPn0mBk5tY3Q&travelmode=driving",
    iconType: "plane",
    badge: "Air Terminal"
  },
  {
    id: "pantnagar-airport",
    origin: "Pantnagar Airport (PGH)",
    category: "transit_hubs",
    mode: "Airport Taxi / Cab",
    distanceKm: "~76 km",
    duration: "2.5 – 3.0 hrs",
    recommendedRouteName: "Pantnagar via NH 109 & Bhowali Rd",
    routeDescription: "Pantnagar Airport ➔ Rudrapur ➔ Haldwani ➔ Kathgodam ➔ Jeolikote ➔ Bhowali ➔ Malla Ramgarh",
    googleMapsUrl: "https://www.google.com/maps/dir/?api=1&origin=Pantnagar+Airport,+Pantnagar,+Uttarakhand+263145,+India&destination=Whispering+Pines+Resort+by+Casa+De+Bello&destination_place_id=ChIJqZUcXyijoDkRPn0mBk5tY3Q&travelmode=driving",
    iconType: "plane",
    badge: "Closest Airport"
  },
  {
    id: "kathgodam-railway",
    origin: "Kathgodam Railway Station (KGM)",
    category: "transit_hubs",
    mode: "Mountain Taxi / Cab",
    distanceKm: "~43 km",
    duration: "1.5 – 2.0 hrs",
    recommendedRouteName: "Kathgodam via Bhowali-Ramgarh Rd",
    routeDescription: "Kathgodam Station ➔ HMT Ranibagh ➔ Bhumiadhar ➔ Bhowali Sanatorium ➔ Ramgarh Road ➔ Malla Ramgarh",
    googleMapsUrl: "https://www.google.com/maps/dir/?api=1&origin=Kathgodam+Railway+Station,+7G8W%2BPM6,+Railway+Colony+Rd,+Kathgodam,+Haldwani,+Uttarakhand+263126,+India&destination=Whispering+Pines+Resort+by+Casa+De+Bello&destination_place_id=ChIJqZUcXyijoDkRPn0mBk5tY3Q&travelmode=driving",
    iconType: "train",
    badge: "Closest Railhead"
  },
  {
    id: "haldwani-town",
    origin: "Haldwani Bus Station / Foothills Hub",
    category: "transit_hubs",
    mode: "Taxi / State Bus + Cab",
    distanceKm: "~50 km",
    duration: "2.0 – 2.2 hrs",
    recommendedRouteName: "Haldwani ➔ Kathgodam ➔ Bhowali ➔ Ramgarh",
    routeDescription: "Haldwani Bus Terminal ➔ Kathgodam ➔ Jeolikote By-pass ➔ Bhowali ➔ Malla Ramgarh",
    googleMapsUrl: "https://www.google.com/maps/dir/?api=1&origin=Haldwani,+Uttarakhand,+India&destination=Whispering+Pines+Resort+by+Casa+De+Bello&destination_place_id=ChIJqZUcXyijoDkRPn0mBk5tY3Q&travelmode=driving",
    iconType: "bus",
    badge: "Foothill Gateway"
  },
  {
    id: "kainchi-dham",
    origin: "Kainchi Dham (Neem Karoli Baba Ashram)",
    category: "local_sights",
    mode: "Local Taxi / Self-Drive",
    distanceKm: "22 km",
    duration: "~45 mins",
    recommendedRouteName: "Kainchi Dham via NH 109 & Ramgarh Rd",
    routeDescription: "Kainchi Dham Ashram ➔ Bhowali Junction ➔ Malla Ramgarh Ridge (Scenic valley drive)",
    googleMapsUrl: "https://www.google.com/maps/dir/?api=1&origin=Shree+Kainchi+Dham+-+Param+Pujya+Baba+Shri+Neem+Karori+Maharaj,+Chaukhuta,+Uttarakhand+263132,+India&destination=Whispering+Pines+Resort+by+Casa+De+Bello&destination_place_id=ChIJqZUcXyijoDkRPn0mBk5tY3Q&travelmode=driving",
    iconType: "temple",
    badge: "Spiritual Pilgrimage"
  },
  {
    id: "nainital-mall-road",
    origin: "Nainital (Mall Road / Naini Lake)",
    category: "local_sights",
    mode: "Local Taxi / Self-Drive",
    distanceKm: "26 km",
    duration: "~55 mins",
    recommendedRouteName: "Nainital via Bhowali & Ramgarh Rd",
    routeDescription: "Naini Lake ➔ Tallital ➔ Bhowali Pine Forest ➔ Gagar Viewpoint ➔ Malla Ramgarh",
    googleMapsUrl: "https://www.google.com/maps/dir/?api=1&origin=Nainital,+Uttarakhand,+India&destination=Whispering+Pines+Resort+by+Casa+De+Bello&destination_place_id=ChIJqZUcXyijoDkRPn0mBk5tY3Q&travelmode=driving",
    iconType: "lake",
    badge: "Hill Station Hub"
  },
  {
    id: "mukteshwar-dham",
    origin: "Mukteshwar Dham Temple & Chauli Ki Jali",
    category: "local_sights",
    mode: "Local Taxi / Self-Drive",
    distanceKm: "25 km",
    duration: "45 – 50 mins",
    recommendedRouteName: "Mukteshwar via Bhowali-Ramgarh Rd",
    routeDescription: "Malla Ramgarh ➔ Talla Ramgarh ➔ Bhatelia Junction ➔ Mukteshwar Temple & Cliff Ridge",
    googleMapsUrl: "https://www.google.com/maps/dir/?api=1&origin=Mukteshwar+Dham+Temple,+Dham+Temple,+Mukteshwar,+Uttarakhand+263138,+India&destination=Whispering+Pines+Resort+by+Casa+De+Bello&destination_place_id=ChIJqZUcXyijoDkRPn0mBk5tY3Q&travelmode=driving",
    iconType: "mountain",
    badge: "180° Snow View Point"
  },
  {
    id: "bhimtal-lake",
    origin: "Bhimtal Lake & Island Aquarium",
    category: "local_sights",
    mode: "Local Taxi / Self-Drive",
    distanceKm: "26 km",
    duration: "~50 mins",
    recommendedRouteName: "Bhimtal via Bhowali-Bhimtal Rd",
    routeDescription: "Bhimtal Dam ➔ Bhowali ➔ Ramgarh Orchards ➔ Malla Ramgarh",
    googleMapsUrl: "https://www.google.com/maps/dir/?api=1&origin=Bhimtal,+Uttarakhand,+India&destination=Whispering+Pines+Resort+by+Casa+De+Bello&destination_place_id=ChIJqZUcXyijoDkRPn0mBk5tY3Q&travelmode=driving",
    iconType: "lake",
    badge: "Boating & Water Sports"
  }
];
