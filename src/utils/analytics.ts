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
  // Layout.astro defines the real helper (adds gclid/gbraid/wbraid/UTM + page_path); use it when present.
  if (typeof win.trackBookingConversion === 'function') return win.trackBookingConversion(action, category, label, extra);

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
// Not attached to window: that used to overwrite Layout's enriched window.trackBookingConversion.


