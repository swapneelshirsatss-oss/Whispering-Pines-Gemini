import React from "react";
import Navbar from "../components/Navbar";
import Breadcrumbs from "../components/Breadcrumbs";
import FooterSection from "../components/FooterSection";
import WhatsAppButton from "../components/WhatsAppButton";

const BLOG_POSTS = [
  {
    id: 1,
    title: "The Ultimate Guide to Mukteshwar",
    excerpt: "Discover the hidden gems, serene viewpoints, and local secrets of Mukteshwar for your next getaway.",
    date: "June 25, 2026",
    readTime: "5 min read",
    imageUrl: "https://images.unsplash.com/photo-1626714485846-99eb94b5ee3a?q=80&w=800&auto=format&fit=crop"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-sm border border-[#EAE8E3] overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-48 w-full overflow-hidden">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-xs text-gray-500 mb-3 space-x-4">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-xl font-bold text-[#1B3322] mb-3 leading-tight hover:text-[#c9a832] cursor-pointer transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <button className="text-[#c9a832] font-semibold text-sm hover:text-[#1B3322] transition-colors flex items-center">
                  Read More
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>
      </main>

      <FooterSection />
      <WhatsAppButton />
    </div>
  );
}
