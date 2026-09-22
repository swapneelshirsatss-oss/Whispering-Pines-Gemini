/**
 * Google Ads & GTM Conversion Tracking Utility
 * Google Ads Account: AW-18455442099
 * Phone Call Conversion: AW-18455442099/Vc_dCNLMo_UcEN7JhfND
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

export const GOOGLE_ADS_ID = 'AW-18455442099';
export const GOOGLE_ADS_PHONE_CONVERSION = 'AW-18455442099/Vc_dCNLMo_UcEN7JhfND';

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

    // Dedicated Google Ads Conversion Action Mapping
    if (action === 'generate_lead') {
      win.gtag('event', 'conversion', {
        send_to: GOOGLE_ADS_ID,
        value: extra?.value,
        currency: extra?.currency || 'INR',
        transaction_id: 'lead_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
      });
    } else if (action === 'phone_call_click') {
      win.gtag('event', 'conversion', {
        send_to: GOOGLE_ADS_PHONE_CONVERSION,
        phone_conversion_number: extra?.phone_number || '7505029696',
      });
    } else if (action === 'begin_checkout') {
      win.gtag('event', 'conversion', {
        send_to: GOOGLE_ADS_ID,
        value: extra?.value,
        currency: extra?.currency || 'INR',
      });
    }
  }
};

// Global browser window attachment for inline HTML/Astro onclick handlers
if (typeof window !== 'undefined') {
  (window as any).trackAdsConversion = trackAdsConversion;
  (window as any).trackBookingConversion = trackAdsConversion;
}


