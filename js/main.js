/* Krisna Bou — Portfolio
 * Particle-network backgrounds (Vanta.NET) + contact form.
 * Replaces the old js/main.js (three.js demo) and js/script.js (thpace),
 * which were unused ES-module stubs that threw on load.
 */
(function () {
  var instances = [];

  var VANTA_OPTS = {
    mouseControls: false,
    touchControls: false,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0,
    scaleMobile: 1.0,
    color: 0x3a7ca5,
    backgroundColor: 0x16425b,
    points: 10.0,
    spacing: 20.0
  };

  function initVanta() {
    if (!window.VANTA || !window.VANTA.NET) {
      return setTimeout(initVanta, 100);
    }
    ['#vanta-canvas', '#contact-canvas'].forEach(function (sel) {
      var node = document.querySelector(sel);
      if (!node || node.__vanta) return;
      var opts = Object.assign({ el: sel }, VANTA_OPTS);
      node.__vanta = window.VANTA.NET(opts);
      instances.push(node);
    });
    // Re-measure as fonts/images settle and the layout grows, so each canvas
    // always fills its section. This is what removes the white gap that showed
    // at the bottom of Contact on large monitors.
    [150, 400, 900, 1600, 2600].forEach(function (t) {
      setTimeout(resizeVanta, t);
    });
  }

  function resizeVanta() {
    instances.forEach(function (node) {
      if (node.__vanta && typeof node.__vanta.resize === 'function') {
        node.__vanta.resize();
      }
    });
  }

  var raf;
  window.addEventListener('resize', function () {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(resizeVanta);
  });
  window.addEventListener('load', function () {
    setTimeout(resizeVanta, 100);
  });

  // ---- Contact form (Formspree) ----
  function wireForm() {
    var form = document.getElementById('contact-form');
    if (!form) return;
    form.addEventListener('submit', async function (event) {
      event.preventDefault();
      var status = document.getElementById('form-status');
      try {
        var response = await fetch('https://formspree.io/f/xkgnbkkr', {
          method: 'POST',
          body: new FormData(form),
          headers: { Accept: 'application/json' }
        });
        if (response.ok) {
          if (status) status.innerHTML = 'Message sent!';
          form.reset();
        } else if (status) {
          status.innerHTML = 'Oops! Something went wrong.';
        }
      } catch (e) {
        if (status) status.innerHTML = 'Error submitting the form.';
      }
    });
  }

  function start() {
    initVanta();
    wireForm();
  }

  if (document.readyState !== 'loading') {
    start();
  } else {
    document.addEventListener('DOMContentLoaded', start);
  }
})();
