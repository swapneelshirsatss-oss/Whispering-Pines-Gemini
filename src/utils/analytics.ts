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

  // GTM-PL8FVLPX forwards this to Google Ads and GA4. No gtag() copy: it would fire the tags twice.
  win.dataLayer = win.dataLayer || [];
  win.dataLayer.push(payload);
};

// Global browser window attachment for inline HTML/Astro onclick handlers
if (typeof window !== 'undefined') {
  (window as any).trackAdsConversion = trackAdsConversion;
  (window as any).trackBookingConversion = trackAdsConversion;
}


