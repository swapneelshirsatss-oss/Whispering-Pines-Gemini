/**
 * GTM event dispatcher. Google Ads conversions (AW-18455442099) are fired by
 * GTM-PL8FVLPX tags: WhatsApp IVsxCI2DxaIdELPlnuBE, Call 6IIeCM_Hw7EdELPlnuBE.
 */

export interface ConversionExtraParams {
  value?: number;
  currency?: string;
  room?: string;
  hotel?: string;
  nights?: number;
  phone_number?: string;
  method?: string;
  conversion_type?: 'whatsapp' | 'phone' | 'bookingjini' | 'calculator';
  gclid?: string;
  utm_campaign?: string;
  [key: string]: any;
}

export const trackAdsConversion = (
  action: string,
  category: string = 'booking',
  label?: string,
  extra?: ConversionExtraParams
) => {
  if (typeof window === 'undefined') return;

  const win = window as any;
  const payload: Record<string, any> = {
    event: action,
    event_category: category,
    event_label: label || 'direct_booking',
    ...extra,
  };

  // 1. Push to Google Tag Manager dataLayer
  win.dataLayer = win.dataLayer || [];
  win.dataLayer.push(payload);

  // 2. Dispatch to Google Tag (gtag.js)
  if (typeof win.gtag === 'function') {
    // Standard GA4 / Google Tag event
    win.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: extra?.value,
      currency: extra?.currency || (extra?.value ? 'INR' : undefined),
      ...extra,
    });
    // Google Ads conversions are fired by GTM-PL8FVLPX tags (labelled), not from here.
  }
};

// Global browser window attachment for inline HTML/Astro onclick handlers
if (typeof window !== 'undefined') {
  (window as any).trackAdsConversion = trackAdsConversion;
  (window as any).trackBookingConversion = trackAdsConversion;
}


