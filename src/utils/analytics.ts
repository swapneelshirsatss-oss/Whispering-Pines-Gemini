/**
 * Google Ads & GTM conversion tracking for the React islands.
 *
 * The dispatcher itself lives in public/js/conversions.js, loaded once from Layout.astro, so a
 * click handled here and the same click seen by its delegated tel:/WhatsApp listener count once.
 * Google Ads account: AW-18455442099. Conversion labels are configured in that file.
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

export type ConversionKind = 'call' | 'form' | 'whatsapp' | 'booking';

export const GOOGLE_ADS_ID = 'AW-18455442099';

/** Fires one Google Ads conversion for a completed user action. */
export const fireConversion = (kind: ConversionKind, extra?: ConversionExtraParams) => {
  if (typeof window === 'undefined') return;
  (window as any).wprFireConversion?.(kind, extra);
};

/** Call only after an enquiry/booking form has submitted successfully. */
export const trackFormConversion = (label: string, extra?: ConversionExtraParams) =>
  fireConversion('form', { event_category: 'lead', event_label: label, ...extra });

/**
 * Legacy (action, category, label, extra) signature kept for the existing call sites; it maps the
 * action onto a conversion kind, or sends a plain GA4 event when the action is not a conversion.
 */
export const trackAdsConversion = (
  action: string,
  category: string = 'booking',
  label?: string,
  extra?: ConversionExtraParams
) => {
  if (typeof window === 'undefined') return;
  (window as any).trackBookingConversion?.(action, category, label, extra);
};
