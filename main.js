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
    var w = window.innerWidth;
    var dense = w < 600
      ? { points: 6.0, spacing: 18.0, maxDistance: 18.0 }
      : w < 1000
      ? { points: 8.0, spacing: 18.0, maxDistance: 20.0 }
      : { points: 10.0, spacing: 20.0, maxDistance: 23.0 };
    ['#vanta-canvas', '#contact-canvas'].forEach(function (sel) {
      var node = document.querySelector(sel);
      if (!node || node.__vanta) return;
      var opts = Object.assign({ el: sel }, VANTA_OPTS, dense);
      node.__vanta = window.VANTA.NET(opts);
      instances.push(node);
    });
    // Re-measure as fonts/images settle and the layout grows, so each canvas
    // always fills its section. This is what removes the white gap that showed
    // at the bottom of Contact on large monitors.
    [150, 400, 900, 1600, 2600].forEach(function (t) {
      setTimeout(resizeVanta, t);
    });
    // Warm the offscreen Contact net so it's spread out (not clustered) the
    // moment it scrolls into view. Motion is NOT stopped — both nets keep drifting.
    setTimeout(warmVanta, 2700);
  }

  function warmVanta() {
    instances.forEach(function (node) {
      var v = node.__vanta;
      if (!v) return;
      // Vanta pauses instances while they're offscreen, so a net that was never
      // scrolled into view (e.g. Contact) still has its points at their initial
      // clustered spawn — invisible. Advance the simulation manually so the dots
      // spread into their settled, visible arrangement regardless of viewport…
      var proto = Object.getPrototypeOf(v);
      var update = (typeof v.onUpdate === 'function') ? v.onUpdate : proto.onUpdate;
      if (typeof update === 'function') {
        for (var i = 0; i < 220; i++) {
          try { update.call(v); } catch (e) { break; }
        }
      }
      // …paint that warmed-up frame once. The animation loop keeps running, so
      // the net stays in motion on both hero and contact.
      if (v.renderer && v.scene && v.camera) {
        try { v.renderer.render(v.scene, v.camera); } catch (e) {}
      }
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

  // ---- Smooth in-page navigation ----
  // The page scrolls on the ROOT (document.scrollingElement === <html>). We
  // animate it ourselves so we can offset by the fixed header height. Fall back
  // to whichever element is actually the scroll container.
  function scroller() {
    var se = document.scrollingElement || document.documentElement;
    if (se && se.scrollHeight > se.clientHeight + 2) return se;
    var b = document.body;
    if (b && b.scrollHeight > b.clientHeight + 2) return b;
    return se || b;
  }

  function headerOffset() {
    var m = document.getElementById('masthead');
    return (m ? m.offsetHeight : 60) + 18;
  }

  function prefersReduced() {
    return window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  function scrollToTarget(el) {
    var sc = scroller();
    // Live destination: recomputed each frame so late layout shifts (images
    // loading, Vanta resizes) can't make the nav over- or undershoot.
    function destTop() {
      if (el === 'top') return 0;
      var anchor = (el.closest && el.closest('.contact-centre, .contact-item')) || el;
      var rect = anchor.getBoundingClientRect();
      var absTop = rect.top + sc.scrollTop;
      var raw;
      if (anchor !== el) {
        // Framed card: vertically center it in the area below the fixed header,
        // falling back to a small top gap when it's taller than that area.
        var headH = headerOffset() - 18;
        var gap = Math.max(16, (sc.clientHeight - headH - rect.height) / 2);
        raw = absTop - headH - gap;
      } else {
        raw = absTop - headerOffset();
      }
      var max = sc.scrollHeight - sc.clientHeight;
      return Math.max(0, Math.min(raw, max));
    }
    var dest = destTop();
    if (prefersReduced()) { sc.scrollTop = dest; return; }
    var start = sc.scrollTop;
    if (Math.abs(dest - start) < 1) return;
    var dur = Math.min(900, Math.max(350, Math.abs(dest - start) * 0.5));
    var t0 = null;
    function ease(p) { return p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2; }
    function step(ts) {
      if (t0 === null) t0 = ts;
      var p = Math.min(1, (ts - t0) / dur);
      sc.scrollTop = start + (destTop() - start) * ease(p);
      if (p < 1) { requestAnimationFrame(step); }
      else { sc.scrollTop = destTop(); } // exact final landing
    }
    requestAnimationFrame(step);
  }

  function wireSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener('click', function (e) {
        var href = link.getAttribute('href');
        if (!href || href === '#') {
          e.preventDefault();
          scrollToTarget('top');
          return;
        }
        var target = document.getElementById(href.slice(1));
        if (!target) return;
        e.preventDefault();
        scrollToTarget(target);
        if (history.replaceState) history.replaceState(null, '', href);
      });
    });
    // Scroll-down arrow on the hero jumps to About.
    var arrow = document.getElementById('scroll-down');
    if (arrow) {
      arrow.style.cursor = 'pointer';
      arrow.addEventListener('click', function () {
        var about = document.getElementById('about');
        if (about) scrollToTarget(about);
      });
    }
  }

  // ---- Scroll progress bar ----
  function wireScrollProgress() {
    var bar = document.createElement('div');
    bar.id = 'scroll-progress';
    document.body.appendChild(bar);
    function update() {
      var sc = scroller();
      var max = sc.scrollHeight - sc.clientHeight;
      var pct = max > 0 ? (sc.scrollTop / max) * 100 : 0;
      bar.style.width = pct + '%';
    }
    // Root-element scrolling dispatches its scroll event on window/document,
    // not on the <html> node, so listen on window.
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
  }

  // ---- Scroll-reveal animations ----
  function wireReveal() {
    document.documentElement.classList.add('js-anim');
    var groups = [
      ['.cover-heading', 0],
      ['.section-label', 0],
      ['.lead', 80],
      ['#about.inner', 0],
      ['.stat', 90],
      ['.tech-group', 120],
      ['.education-card', 0],
      ['.timeline-item', 0],
      ['.volunteering', 0],
      ['.project', 0],
      ['.border', 0],
      ['.project-actions', 0],
      ['.contact-centre', 0],
      ['.contact-image', 120]
    ];
    var targets = [];
    groups.forEach(function (g) {
      var sel = g[0], step = g[1];
      document.querySelectorAll(sel).forEach(function (el, i) {
        el.classList.add('reveal');
        if (step) el.style.transitionDelay = (i * step) + 'ms';
        targets.push(el);
      });
    });
    if (!('IntersectionObserver' in window) || prefersReduced()) {
      targets.forEach(function (el) { el.classList.add('reveal-in'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    targets.forEach(function (el) { io.observe(el); });
  }

  // ---- Active section highlight in the nav ----
  function wireActiveNav() {
    if (!('IntersectionObserver' in window)) return;
    var map = {};
    document.querySelectorAll('.masthead-nav a[href^="#"]').forEach(function (a) {
      var id = a.getAttribute('href').slice(1);
      if (id) map[id] = a;
    });
    var sections = Object.keys(map)
      .map(function (id) { return document.getElementById(id); })
      .filter(Boolean);
    if (!sections.length) return;
    var visible = {};
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        visible[entry.target.id] = entry.isIntersecting
          ? entry.intersectionRatio : 0;
      });
      var best = null, bestRatio = 0;
      Object.keys(visible).forEach(function (id) {
        if (visible[id] > bestRatio) { bestRatio = visible[id]; best = id; }
      });
      Object.keys(map).forEach(function (id) {
        map[id].classList.toggle('active', id === best);
      });
    }, { threshold: [0.15, 0.4, 0.7], rootMargin: '-20% 0px -55% 0px' });
    sections.forEach(function (s) { io.observe(s); });
  }

  function start() {
    initVanta();
    wireForm();
    wireSmoothScroll();
    wireScrollProgress();
    wireReveal();
    wireActiveNav();
    wireHeroTerminal();
    wireCountUp();
    wireTilt();
  }

  // ---- Hero terminal: type whoami, then cycle roles ----
  function typeText(el, text, speed, done) {
    if (!el) { if (done) done(); return; }
    if (prefersReduced()) { el.textContent = text; if (done) done(); return; }
    var i = 0;
    (function tick() {
      el.textContent = text.slice(0, i);
      if (i < text.length) { i++; setTimeout(tick, speed); }
      else if (done) done();
    })();
  }

  function wireHeroTerminal() {
    var who = document.getElementById('term-whoami');
    var role = document.getElementById('term-role');
    if (!who && !role) return;
    var roles = [
      'Backend Engineer',
      'Full-stack Developer',
      'Cloud & DevOps Enthusiast',
      'UQ Software Engineering Graduate'
    ];
    if (prefersReduced()) {
      if (who) who.textContent = 'Software Engineer';
      if (role) role.textContent = roles[0];
      return;
    }
    var ri = 0;
    function cycle() {
      typeText(role, roles[ri % roles.length], 55, function () {
        setTimeout(erase, 1700);
      });
    }
    function erase() {
      var cur = role.textContent;
      if (!cur.length) { ri++; return cycle(); }
      role.textContent = cur.slice(0, -1);
      setTimeout(erase, 26);
    }
    setTimeout(function () {
      typeText(who, 'Software Engineer', 55, function () {
        setTimeout(cycle, 550);
      });
    }, 450);
  }

  // ---- Count-up stat band ----
  function wireCountUp() {
    var nums = document.querySelectorAll('.stat-num[data-target]');
    if (!nums.length) return;
    function render(el, val) {
      var suffix = el.getAttribute('data-suffix') || '';
      el.innerHTML = val + (suffix ? '<span class="stat-suffix">' + suffix + '</span>' : '');
    }
    function run(el) {
      var target = parseFloat(el.getAttribute('data-target')) || 0;
      if (prefersReduced()) { render(el, target); return; }
      var dur = 1400, t0 = null;
      function step(ts) {
        if (t0 === null) t0 = ts;
        var p = Math.min(1, (ts - t0) / dur);
        render(el, Math.round(target * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }
    if (!('IntersectionObserver' in window)) { nums.forEach(run); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { run(e.target); io.unobserve(e.target); }
      });
    }, { threshold: 0.5 });
    nums.forEach(function (n) { io.observe(n); });
  }

  // ---- Subtle 3D tilt on project imagery ----
  function wireTilt() {
    if (prefersReduced()) return;
    if (window.matchMedia && window.matchMedia('(hover: none)').matches) return;
    document.querySelectorAll('.project-link').forEach(function (wrap) {
      var img = wrap.querySelector('img');
      if (!img) return;
      wrap.addEventListener('mousemove', function (e) {
        var r = wrap.getBoundingClientRect();
        var px = (e.clientX - r.left) / r.width - 0.5;
        var py = (e.clientY - r.top) / r.height - 0.5;
        img.style.transform = 'rotateY(' + (px * 9) + 'deg) rotateX(' + (-py * 9) + 'deg) scale(1.03)';
      });
      wrap.addEventListener('mouseleave', function () {
        img.style.transform = '';
      });
    });
  }

  if (document.readyState !== 'loading') {
    start();
  } else {
    document.addEventListener('DOMContentLoaded', start);
  }
})();
