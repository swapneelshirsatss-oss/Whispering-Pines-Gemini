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
    googleMapsUrl: "https://www.google.com/maps/dir/New+Delhi,+Delhi,+India/Malla+Ramgarh,+13%2F4,+Ramgarh,+Uttarakhand+263137,+India/data=!4m14!4m13!1m5!1m1!19sChIJLbZ-NFv9DDkRzk0gTkm3wlI!2m2!1d77.2088282!2d28.613929799999998!1m5!1m1!19sChIJK8jRXyijoDkRA3lwD-NkUtk!2m2!1d79.5506314!2d29.4262052!3e0",
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
    googleMapsUrl: "https://www.google.com/maps/dir/Indira+Gandhi+Int'l+Airport,+New+Delhi,+Delhi+110037,+India/Malla+Ramgarh,+13%2F4,+Ramgarh,+Uttarakhand+263137,+India/data=!4m14!4m13!1m5!1m1!19sChIJiS0q_IUbDTkRne1DLBh2874!2m2!1d77.0999623!2d28.5561437!1m5!1m1!19sChIJK8jRXyijoDkRA3lwD-NkUtk!2m2!1d79.5506314!2d29.4262052!3e0",
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
    googleMapsUrl: "https://www.google.com/maps/dir/Pantnagar+Airport,+Pantnagar,+Uttarakhand+263145,+India/Malla+Ramgarh,+13%2F4,+Ramgarh,+Uttarakhand+263137,+India/data=!4m14!4m13!1m5!1m1!19sChIJ87HLZTOHoDkRqPbMBjFb2OI!2m2!1d79.4689842!2d29.033527!1m5!1m1!19sChIJK8jRXyijoDkRA3lwD-NkUtk!2m2!1d79.5506314!2d29.4262052!3e0",
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
    googleMapsUrl: "https://www.google.com/maps/dir/Kathgodam+Railway+Station,+7G8W%2BPM6,+Railway+Colony+Rd,+Kathgodam,+Haldwani,+Uttarakhand+263126,+India/Malla+Ramgarh,+13%2F4,+Ramgarh,+Uttarakhand+263137,+India/data=!4m14!4m13!1m5!1m1!19sChIJqXhOMHmboDkRG90cWfyDZZo!2m2!1d79.546652299999991!2d29.2667824!1m5!1m1!19sChIJK8jRXyijoDkRA3lwD-NkUtk!2m2!1d79.5506314!2d29.4262052!3e0",
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
    googleMapsUrl: "https://www.google.com/maps/dir/Haldwani,+Uttarakhand,+India/Malla+Ramgarh,+13%2F4,+Ramgarh,+Uttarakhand+263137,+India/data=!4m14!4m13!1m5!1m1!19sChIJQ-d1q3WboDkR4VqC7tT-WbU!2m2!1d79.528628!2d29.2182644!1m5!1m1!19sChIJK8jRXyijoDkRA3lwD-NkUtk!2m2!1d79.5506314!2d29.4262052!3e0",
    iconType: "bus",
    badge: "Foothill Gateway"
  },
  {
    id: "kainchi-dham",
    origin: "Kainchi Dham (Neem Karoli Baba Ashram)",
    category: "local_sights",
    mode: "Local Taxi / Self-Drive",
    distanceKm: "~22 km",
    duration: "50 – 60 mins",
    recommendedRouteName: "Kainchi Dham via NH 109 & Ramgarh Rd",
    routeDescription: "Kainchi Dham Ashram ➔ Bhowali Junction ➔ Malla Ramgarh Ridge (Scenic valley drive)",
    googleMapsUrl: "https://www.google.com/maps/dir/Shree+Kainchi+Dham+-+Param+Pujya+Baba+Shri+Neem+Karori+Maharaj,+Chaukhuta,+Uttarakhand+263132,+India/Malla+Ramgarh,+13%2F4,+Ramgarh,+Uttarakhand+263137,+India/data=!4m14!4m13!1m5!1m1!19sChIJ2cWOG6ujoDkR0H3tJvqGd-o!2m2!1d79.5124091!2d29.422562499999998!1m5!1m1!19sChIJK8jRXyijoDkRA3lwD-NkUtk!2m2!1d79.5506314!2d29.4262052!3e0",
    iconType: "temple",
    badge: "Spiritual Pilgrimage"
  },
  {
    id: "nainital-mall-road",
    origin: "Nainital (Mall Road / Naini Lake)",
    category: "local_sights",
    mode: "Local Taxi / Self-Drive",
    distanceKm: "~27 km",
    duration: "1.2 – 1.5 hrs",
    recommendedRouteName: "Nainital via Bhowali & Ramgarh Rd",
    routeDescription: "Naini Lake ➔ Tallital ➔ Bhowali Pine Forest ➔ Gagar Viewpoint ➔ Malla Ramgarh",
    googleMapsUrl: "https://www.google.com/maps/dir/Nainital,+Uttarakhand,+India/Malla+Ramgarh,+13%2F4,+Ramgarh,+Uttarakhand+263137,+India/data=!4m14!4m13!1m5!1m1!19sChIJYZ39KLyhoDkRs32YFql7rnw!2m2!1d79.4533773!2d29.392413899999998!1m5!1m1!19sChIJK8jRXyijoDkRA3lwD-NkUtk!2m2!1d79.5506314!2d29.4262052!3e0",
    iconType: "lake",
    badge: "Hill Station Hub"
  },
  {
    id: "mukteshwar-dham",
    origin: "Mukteshwar Dham Temple & Chauli Ki Jali",
    category: "local_sights",
    mode: "Local Taxi / Self-Drive",
    distanceKm: "~26 km",
    duration: "1.0 – 1.2 hrs",
    recommendedRouteName: "Mukteshwar via Bhowali-Ramgarh Rd",
    routeDescription: "Malla Ramgarh ➔ Talla Ramgarh ➔ Bhatelia Junction ➔ Mukteshwar Temple & Cliff Ridge",
    googleMapsUrl: "https://www.google.com/maps/dir/Mukteshwar+Dham+Temple,+Dham+Temple,+Mukteshwar,+Uttarakhand+263138,+India/Malla+Ramgarh,+13%2F4,+Ramgarh,+Uttarakhand+263137,+India/data=!4m14!4m13!1m5!1m1!19sChIJyaxvawe8oDkR_46CWjbNK2Y!2m2!1d79.6447621!2d29.474845499999997!1m5!1m1!19sChIJK8jRXyijoDkRA3lwD-NkUtk!2m2!1d79.5506314!2d29.4262052!3e0",
    iconType: "mountain",
    badge: "180° Snow View Point"
  },
  {
    id: "bhimtal-lake",
    origin: "Bhimtal Lake & Island Aquarium",
    category: "local_sights",
    mode: "Local Taxi / Self-Drive",
    distanceKm: "~25 km",
    duration: "1.0 – 1.2 hrs",
    recommendedRouteName: "Bhimtal via Bhowali-Bhimtal Rd",
    routeDescription: "Bhimtal Dam ➔ Bhowali ➔ Ramgarh Orchards ➔ Malla Ramgarh",
    googleMapsUrl: "https://www.google.com/maps/dir/Bhimtal,+Uttarakhand,+India/Malla+Ramgarh,+13%2F4,+Ramgarh,+Uttarakhand+263137,+India/data=!4m14!4m13!1m5!1m1!19sChIJDf-QRiGYoDkR3EGXQkQy3Do!2m2!1d79.5519144!2d29.346082!1m5!1m1!19sChIJK8jRXyijoDkRA3lwD-NkUtk!2m2!1d79.5506314!2d29.4262052!3e0",
    iconType: "lake",
    badge: "Boating & Water Sports"
  }
];
