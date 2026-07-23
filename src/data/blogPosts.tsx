import React from "react";

export type BlogPostData = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  imageUrl: string;
  content?: React.ReactNode;
};

export const BLOG_POSTS: BlogPostData[] = [
  {
    id: 1,
    slug: "clarks-exotica-transition",
    title: "A New Era of Himalayan Luxury: Clarks Exotica Transitions to Whispering Pines Resort Mukteshwar",
    excerpt: "The breathtaking Malla Ramgarh sanctuary you previously knew as Clarks Exotica near Mukteshwar has officially evolved. We are proud to announce our comprehensive rebranding and property upgrade to Whispering Pines Resort, now operating exclusively under the premium hospitality management of Casa De Bello (https://casadebello.com/).",
    date: "June 27, 2026",
    readTime: "4 min read",
    imageUrl: "https://images.unsplash.com/photo-1626714485846-99eb94b5ee3a?q=80&w=800&auto=format&fit=crop",
    content: (
      <>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          The breathtaking Malla Ramgarh sanctuary you previously knew as Clarks Exotica near Mukteshwar has officially evolved. We are proud to announce our comprehensive rebranding and property upgrade to Whispering Pines Resort, now operating exclusively under the premium hospitality management of <a href="https://casadebello.com/" target="_blank" rel="noreferrer" className="text-[#c9a832] hover:underline transition-all">Casa De Bello</a>.
        </p>

        <h2 className="text-2xl font-bold text-[#1B3322] mt-10 mb-4">What This Transition Means for Our Guests</h2>
        <p className="text-gray-600 mb-4">
          While the pristine pine forests, Himalayan valley views, and exact geographic coordinates (Malla Ramgarh, 263137) remain unchanged, the property itself has been meticulously upgraded. We have replaced the rigid structures of legacy hotel chains with bespoke, high-touch hospitality.
        </p>
        <p className="text-gray-600 mb-4">
          Under Casa De Bello's management, the Whispering Pines experience now features:
        </p>
        <ul className="list-disc pl-6 mb-8 text-gray-600 space-y-2">
          <li><strong>Frictionless Service:</strong> A direct-to-guest operational model ensuring rapid response times and personalized itinerary planning.</li>
          <li><strong>Enhanced Corporate Offsite Capabilities:</strong> Upgraded Wi-Fi infrastructure and dedicated event spaces for seamless B2B retreats.</li>
        </ul>

        <h2 className="text-2xl font-bold text-[#1B3322] mt-10 mb-4">Honoring Our Legacy: A Promise to Past Clarks Exotica Guests</h2>
        <p className="text-gray-600 mb-4">
          To the thousands of families, couples, and corporate groups who built memories with us under the Clarks Exotica banner: your trust remains our core asset.
        </p>
        <ul className="list-disc pl-6 mb-8 text-gray-600 space-y-2">
          <li><strong>Security of Existing Bookings:</strong> All prior reservations made under the legacy brand are 100% secure and automatically transferred to our new system.</li>
          <li><strong>The Legacy Guest Tariff:</strong> We are aggressively cutting out third-party OTA (Online Travel Agency) commissions and passing those margins directly to you. Past guests are immediately eligible for exclusive retention pricing.</li>
        </ul>

        <h3 className="text-xl font-bold text-[#1B3322] mt-8 mb-4">Skip the Booking Engines. Secure Your Direct Upgrade.</h3>
        <p className="text-gray-600 mb-8">
          Do not navigate back to aggregator platforms to book your return stay. We have engineered a VIP direct-booking channel specifically for our returning clientele.
        </p>
      </>
    )
  },
  {
    id: 2,
    slug: "ramgarh-fruit-bowl-of-kumaon",
    title: "Why Ramgarh is the Fruit Bowl of Kumaon",
    excerpt: "Explore the lush orchards of Ramgarh, where fresh Himalayan fruits are grown naturally amidst breathtaking valleys.",
    date: "June 18, 2026",
    readTime: "4 min read",
    imageUrl: "https://images.unsplash.com/photo-1542302353-8395edb7d30d?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    slug: "winter-in-the-himalayas",
    title: "Winter in the Himalayas: What to Expect",
    excerpt: "From crisp snowy mornings to cozy bonfires, here's everything you need to know about visiting during the winter months.",
    date: "January 10, 2026",
    readTime: "6 min read",
    imageUrl: "https://images.unsplash.com/photo-1517594422361-5e18a412072f?q=80&w=800&auto=format&fit=crop"
  }
];
