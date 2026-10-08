// Delegated click tracking. Replaces inline onclick handlers so the CSP can drop 'unsafe-inline' for scripts.
// data-track-fn="trackBookingConversion" data-track-args='["event","category","label",{...}]' calls window[fn](...args) if defined.
// data-track-dl='{"event":"phone_call_click",...}' pushes the object to window.dataLayer.
document.addEventListener('click', function (e) {
  var el = e.target && e.target.closest && e.target.closest('[data-track-fn],[data-track-dl]');
  if (!el) return;
  try {
    var fn = el.getAttribute('data-track-fn');
    if (fn) {
      if (typeof window[fn] === 'function') {
        window[fn].apply(window, JSON.parse(el.getAttribute('data-track-args') || '[]'));
      }
    } else if (/^tel:|wa\.me|whatsapp\.com/.test(el.getAttribute('href') || '')) {
      // conversions.js already pushes this event for tel:/WhatsApp links; pushing it here too
      // would put two identical events in the dataLayer for one click.
    } else {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push(JSON.parse(el.getAttribute('data-track-dl')));
    }
  } catch (err) {}
});
