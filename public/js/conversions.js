// Single source of truth for Google Ads conversions. Loaded once site-wide from Layout.astro.
// Fires at most one conversion per action (2s window), so a React onClick and the delegated
// listeners below cannot both count the same click. Exposes window.wprFireConversion(kind, extra),
// window.wprTrackEvent(action, payload) and the legacy window.trackBookingConversion alias.
(function () {
  'use strict';

  var ADS_ID = 'AW-18455442099';
  var PHONE = '7505029696';

  // send_to targets, one per Google Ads conversion action. A label still containing "__" is an
  // unfilled placeholder: the GA4 event is sent but the conversion is skipped, because sending to
  // a conversion action that does not exist is what made the old numbers untrustworthy.
  // Fill from Google Ads > Goals > Conversions > <action> > Tag setup > the AW-.../LABEL value.
  var SEND_TO = {
    call: ADS_ID + '/Vc_dCNLMo_UcEN7JhfND',
    form: ADS_ID + '/__FORM_CONVERSION_LABEL__',
    whatsapp: ADS_ID + '/__WHATSAPP_CONVERSION_LABEL__',
    booking: ADS_ID + '/__BOOKING_CONVERSION_LABEL__'
  };

  var GA4_EVENT = {
    call: 'phone_call_click',
    form: 'generate_lead',
    whatsapp: 'generate_lead',
    booking: 'begin_checkout'
  };

  var DEDUPE_MS = 2000;
  var lastFired = {};

  function storedAttribution() {
    try {
      var raw = sessionStorage.getItem('wpr_ads_attribution');
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      return {};
    }
  }

  function pushEvent(action, payload) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(payload);
    if (typeof window.gtag === 'function') window.gtag('event', action, payload);
  }

  // kind: 'call' | 'form' | 'whatsapp' | 'booking'. Returns false when deduped.
  function fireConversion(kind, extra) {
    var sendTo = SEND_TO[kind];
    if (!sendTo) return false;

    var now = Date.now();
    if (lastFired[kind] && now - lastFired[kind] < DEDUPE_MS) return false;
    lastFired[kind] = now;

    extra = extra || {};
    var action = GA4_EVENT[kind];
    var payload = { event: action, event_category: 'booking', event_label: kind };
    for (var k in extra) {
      if (Object.prototype.hasOwnProperty.call(extra, k)) payload[k] = extra[k];
    }
    payload.conversion_type = kind;

    var attr = storedAttribution();
    // Layout.astro stores gclid/gbraid/wbraid separately; any of the three identifies the click.
    var clickId = attr.gclid || attr.gbraid || attr.wbraid;
    if (clickId && !payload.gclid) payload.gclid = clickId;
    if (attr.utm_source && !payload.utm_source) payload.utm_source = attr.utm_source;
    if (attr.utm_campaign && !payload.utm_campaign) payload.utm_campaign = attr.utm_campaign;

    pushEvent(action, payload);

    if (typeof window.gtag !== 'function' || sendTo.indexOf('__') !== -1) return true;

    var conversion = { send_to: sendTo };
    if (typeof extra.value === 'number') {
      conversion.value = extra.value;
      conversion.currency = extra.currency || 'INR';
    }
    if (kind === 'call') {
      conversion.phone_conversion_number = extra.phone_number || PHONE;
    } else {
      // Lets Google Ads discard a replay of the same lead.
      conversion.transaction_id = kind + '_' + now + '_' + Math.random().toString(36).slice(2, 7);
    }
    window.gtag('event', 'conversion', conversion);
    return true;
  }

  // GA4-only event for actions that are not conversions (quote calculator, nav clicks, ...).
  function trackEvent(action, payload) {
    if (!action) return;
    pushEvent(action, Object.assign({ event: action }, payload || {}));
  }

  // Maps the legacy trackBookingConversion(action, category, label, extra) call signature used by
  // data-track-fn attributes and the React islands onto the dispatcher above.
  function legacyTrack(action, category, label, extra) {
    extra = extra || {};
    var detail = {};
    for (var k in extra) {
      if (Object.prototype.hasOwnProperty.call(extra, k)) detail[k] = extra[k];
    }
    detail.event_category = category || 'booking';
    detail.event_label = label || 'direct_booking';

    var kind = null;
    if (action === 'phone_call_click' || extra.conversion_type === 'phone') kind = 'call';
    else if (action === 'begin_checkout' || extra.conversion_type === 'bookingjini') kind = 'booking';
    else if (extra.method === 'proposal_form') kind = 'form';
    else if (action === 'generate_lead') kind = 'whatsapp';

    if (kind) return fireConversion(kind, detail);
    trackEvent(action, detail);
    return true;
  }

  function labelFor(link, fallback) {
    var explicit = link.getAttribute('data-conversion-label');
    if (explicit) return explicit;
    try {
      var dl = link.getAttribute('data-track-dl');
      if (dl) {
        var parsed = JSON.parse(dl);
        if (parsed && parsed.event_label) return parsed.event_label;
      }
      var args = link.getAttribute('data-track-args');
      if (args) {
        var parsedArgs = JSON.parse(args);
        if (parsedArgs && parsedArgs[2]) return parsedArgs[2];
      }
    } catch (e) {}
    return fallback;
  }

  // Covers every tel: and WhatsApp link site-wide, including the ones carrying no handler of their
  // own. Bubble phase, so a React onClick with a more specific label runs first and this is deduped.
  document.addEventListener('click', function (e) {
    var link = e.target && e.target.closest ? e.target.closest('a[href]') : null;
    if (!link) return;
    var href = link.getAttribute('href') || '';
    if (href.indexOf('tel:') === 0) {
      fireConversion('call', {
        event_category: 'engagement',
        event_label: labelFor(link, 'tel_link_click'),
        phone_number: href.replace(/[^0-9]/g, '').replace(/^91/, '')
      });
    } else if (/wa\.me|whatsapp\.com/.test(href)) {
      fireConversion('whatsapp', { event_label: labelFor(link, 'whatsapp_link_click') });
    }
  });

  window.wprFireConversion = fireConversion;
  window.wprTrackEvent = trackEvent;
  window.trackBookingConversion = legacyTrack;
  window.trackAdsConversion = legacyTrack;
})();
