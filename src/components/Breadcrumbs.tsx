import React from 'react';

export default function Breadcrumbs() {
  return (
    <>
      {/* Structured Google SEO Breadcrumbs */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://whisperingpinesresort.in/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Uttarakhand Resorts",
              "item": "https://whisperingpinesresort.in/#destinations"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Whispering Pines Mukteshwar",
              "item": "https://whisperingpinesresort.in/#about"
            }
          ]
        })
      }} />
    </>
  );
}
