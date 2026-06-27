import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Breadcrumbs from "../components/Breadcrumbs";
import FooterSection from "../components/FooterSection";
import WhatsAppButton from "../components/WhatsAppButton";

const BLOG_POSTS = [
  {
    id: 1,
    title: "A New Era of Himalayan Luxury: Clarks Exotica Transitions to Whispering Pines Resort Mukteshwar",
    excerpt: "The breathtaking Malla Ramgarh sanctuary you previously knew as Clarks Exotica near Mukteshwar has officially evolved. We are proud to announce our comprehensive rebranding and property upgrade to Whispering Pines Resort, now operating exclusively under the premium hospitality management of Casa De Bello.",
    date: "June 27, 2026",
    readTime: "4 min read",
    imageUrl: "https://images.unsplash.com/photo-1626714485846-99eb94b5ee3a?q=80&w=800&auto=format&fit=crop",
    content: (
      <>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          The breathtaking Malla Ramgarh sanctuary you previously knew as Clarks Exotica near Mukteshwar has officially evolved. We are proud to announce our comprehensive rebranding and property upgrade to Whispering Pines Resort, now operating exclusively under the premium hospitality management of Casa De Bello.
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
    title: "Why Ramgarh is the Fruit Bowl of Kumaon",
    excerpt: "Explore the lush orchards of Ramgarh, where fresh Himalayan fruits are grown naturally amidst breathtaking valleys.",
    date: "June 18, 2026",
    readTime: "4 min read",
    imageUrl: "https://images.unsplash.com/photo-1542302353-8395edb7d30d?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Winter in the Himalayas: What to Expect",
    excerpt: "From crisp snowy mornings to cozy bonfires, here's everything you need to know about visiting during the winter months.",
    date: "January 10, 2026",
    readTime: "6 min read",
    imageUrl: "https://images.unsplash.com/photo-1517594422361-5e18a412072f?q=80&w=800&auto=format&fit=crop"
  }
];

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<number | null>(null);

  const activePost = BLOG_POSTS.find((p) => p.id === selectedPost);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Whispering Pines Resort Journal",
    "description": "Discover updates, travel tips, and stories from the heart of the Himalayas.",
    "url": "https://whisperingpinesresort.in/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Whispering Pines Resort",
      "logo": {
        "@type": "ImageObject",
        "url": "https://whisperingpinesresort.in/logo.png"
      }
    },
    "blogPost": BLOG_POSTS.map((post) => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "image": post.imageUrl,
      "datePublished": new Date(post.date).toISOString(),
      "description": post.excerpt,
      "url": `https://whisperingpinesresort.in/blog#post-${post.id}`,
      "author": {
        "@type": "Organization",
        "name": "Whispering Pines Resort"
      }
    }))
  };

  useEffect(() => {
    document.title = "Blog & Journal | Whispering Pines Resort Mukteshwar";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Discover updates, travel tips, and stories from the heart of the Himalayas at Whispering Pines Resort.");
    }
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://whisperingpinesresort.in/blog');
  }, []);

  return (
    <div className="relative min-h-screen bg-[#FAF9F6] text-[#2C3531] overflow-x-hidden selection:bg-[#c9a832] selection:text-[#1B3322]">
      {/* JSON-LD Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      
      <Navbar />
      <Breadcrumbs />

      <main className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1B3322] mb-4">
            Our Journal
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover updates, travel tips, and stories from the heart of the Himalayas. 
            Stay informed about local experiences and our resort updates.
          </p>
        </div>

        {activePost ? (
          <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-sm border border-[#EAE8E3]">
            <button 
              onClick={() => setSelectedPost(null)}
              className="text-[#c9a832] font-semibold text-sm hover:text-[#1B3322] transition-colors flex items-center mb-8"
            >
              <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Journal
            </button>
            
            <div className="mb-8">
              <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                <span>{activePost.date}</span>
                <span>{activePost.readTime}</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-[#1B3322] mb-6 leading-tight">
                {activePost.title}
              </h1>
              <div className="w-full h-[300px] sm:h-[450px] overflow-hidden rounded-xl mb-10">
                <img 
                  src={activePost.imageUrl} 
                  alt={activePost.title} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none text-[#2C3531]">
              {activePost.content || <p className="text-gray-600 leading-relaxed">{activePost.excerpt}</p>}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-sm border border-[#EAE8E3] overflow-hidden hover:shadow-md transition-shadow flex flex-col">
                <div className="h-48 w-full overflow-hidden cursor-pointer" onClick={() => setSelectedPost(post.id)}>
                  <img 
                    src={post.imageUrl} 
                    alt={post.title} 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center text-xs text-gray-500 mb-3 space-x-4">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 
                    onClick={() => setSelectedPost(post.id)}
                    className="text-xl font-bold text-[#1B3322] mb-3 leading-tight hover:text-[#c9a832] cursor-pointer transition-colors"
                  >
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>
                  <button 
                    onClick={() => setSelectedPost(post.id)}
                    className="text-[#c9a832] font-semibold text-sm hover:text-[#1B3322] transition-colors flex items-center mt-auto"
                  >
                    Read More
                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>

      <FooterSection />
      <WhatsAppButton />
    </div>
  );
}
