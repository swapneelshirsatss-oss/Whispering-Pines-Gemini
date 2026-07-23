import React from "react";
import Navbar from "../components/Navbar";
import FooterSection from "../components/FooterSection";
import WhatsAppButton from "../components/WhatsAppButton";
import type { BlogPostData } from "../data/blogPosts";

interface BlogPostProps {
  post: BlogPostData;
}

export default function BlogPost({ post }: BlogPostProps) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": post.imageUrl,
    "datePublished": new Date(post.date).toISOString(),
    "description": post.excerpt,
    "url": `https://whisperingpinesresort.in/blog/${post.slug}/`,
    "author": {
      "@type": "Organization",
      "name": "Whispering Pines Resort"
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

      <main className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-sm border border-[#EAE8E3]">
          <a 
            href="/blog/"
            className="text-[#c9a832] font-semibold text-sm hover:text-[#1B3322] transition-colors flex items-center mb-8 w-fit"
          >
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Journal
          </a>
          
          <div className="mb-8">
            <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
              <span>{post.date}</span>
              <span>{post.readTime}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-[#1B3322] mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="w-full h-[300px] sm:h-[450px] overflow-hidden rounded-xl mb-10">
              <img 
                src={post.imageUrl} 
                alt={post.title} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none text-[#2C3531]">
            {post.content || <p className="text-gray-600 leading-relaxed">{post.excerpt}</p>}
          </div>
        </div>
      </main>

      <FooterSection />
      <WhatsAppButton />
    </div>
  );
}
