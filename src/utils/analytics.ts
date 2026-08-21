export const trackAdsConversion = (action: string, category: string, label?: string) => {
  if (typeof window !== "undefined") {
    // Push event to Google Tag Manager dataLayer
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({
      event: action,
      event_category: category,
      event_label: label,
    });

    // Also call gtag if present
    if (typeof (window as any).gtag === "function") {
      (window as any).gtag("event", action, {
        event_category: category,
        event_label: label,
      });
    }
  }
};

