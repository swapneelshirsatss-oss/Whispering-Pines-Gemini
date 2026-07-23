import React from "react";
import Navbar from "../components/Navbar";
import Breadcrumbs from "../components/Breadcrumbs";
import FooterSection from "../components/FooterSection";
import WhatsAppButton from "../components/WhatsAppButton";
import { BlogPostData } from "../data/blogPosts";

interface BlogListProps {
  posts: BlogPostData[];
}

export default function BlogList({ posts }: BlogListProps) {
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
    }
  };

  return (
    <div className="relative min-h-screen bg-[#FAF9F6] text-[#2C3531] overflow-x-hidden pb-20 md:pb-0 selection:bg-[#c9a832] selection:text-[#1B3322]">
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
          {posts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-sm border border-[#EAE8E3] overflow-hidden hover:shadow-md transition-shadow flex flex-col">
              <a href={`/blog/${post.slug}/`} className="h-48 w-full overflow-hidden block">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </a>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center text-xs text-gray-500 mb-3 space-x-4">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <a href={`/blog/${post.slug}/`} className="group block">
                  <h2 
                    className="text-xl font-bold text-[#1B3322] mb-3 leading-tight group-hover:text-[#c9a832] transition-colors"
                  >
                    {post.title}
                  </h2>
                </a>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3 flex-1">
                  {post.excerpt}
                </p>
                <a 
                  href={`/blog/${post.slug}/`}
                  className="text-[#c9a832] font-semibold text-sm hover:text-[#1B3322] transition-colors flex items-center mt-auto w-fit"
                >
                  Read More
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
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
