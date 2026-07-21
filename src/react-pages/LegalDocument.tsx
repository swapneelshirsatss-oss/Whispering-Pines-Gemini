import React from "react";

interface LegalDocumentProps {
  title: string;
  lastUpdated: string;
  contentHtml: string;
}

export default function LegalDocument({ title, lastUpdated, contentHtml }: LegalDocumentProps) {
  return (
    <div className="pt-24 pb-20 bg-[#FAF9F6] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12 border-b border-[#2C3531]/10 pb-8">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-[#1B3322] mb-4">
            {title}
          </h1>
          <p className="text-sm text-[#2C3531]/60 font-mono uppercase tracking-wider">
            Last Updated: {lastUpdated}
          </p>
        </div>

        {/* Content Body */}
        <div 
          className="prose prose-lg prose-stone max-w-none 
                     prose-headings:font-display prose-headings:text-[#1B3322] prose-headings:font-bold
                     prose-p:font-sans prose-p:text-[#2C3531]/90 prose-p:leading-relaxed
                     prose-a:text-[#c9a832] prose-a:no-underline hover:prose-a:underline
                     prose-li:text-[#2C3531]/90"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
        
      </div>
    </div>
  );
}
