// ── Burger nav ───────────────────────────────────────────────────────
const burgerBtn = document.getElementById('burger-btn');
const mobileMenu = document.getElementById('mobile-menu');

burgerBtn.addEventListener('click', () => {
  const willOpen = mobileMenu.hidden;
  mobileMenu.hidden = !willOpen;
  burgerBtn.setAttribute('aria-expanded', String(willOpen));
  burgerBtn.classList.toggle('open', willOpen);
});

mobileMenu.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    mobileMenu.hidden = true;
    burgerBtn.setAttribute('aria-expanded', 'false');
    burgerBtn.classList.remove('open');
  });
});

window.matchMedia('(min-width: 761px)').addEventListener('change', e => {
  if (e.matches) {
    mobileMenu.hidden = true;
    burgerBtn.setAttribute('aria-expanded', 'false');
    burgerBtn.classList.remove('open');
  }
});

// ── Vanta particle network ───────────────────────────────────────────
const VANTA_SELECTORS = ['#vanta-hero', '#vanta-contact'];
const vantaInstances = [];

function resizeVanta() {
  vantaInstances.forEach(v => { if (v && v.resize) v.resize(); });
}

function initVanta() {
  if (!window.VANTA || !window.VANTA.NET) { setTimeout(initVanta, 120); return; }
  const cfg = el => ({
    el,
    mouseControls: false, touchControls: false, gyroControls: false,
    minHeight: 200, minWidth: 200, scale: 1, scaleMobile: 1,
    color: 0x3a7ca5, backgroundColor: 0x16425b, points: 10, spacing: 20,
  });
  VANTA_SELECTORS.forEach(sel => {
    const el = document.querySelector(sel);
    if (el && !el.__vanta) {
      el.__vanta = window.VANTA.NET(cfg(el));
      vantaInstances.push(el.__vanta);
    }
  });
  [150, 400, 800, 1500, 2500].forEach(t => setTimeout(resizeVanta, t));
}

setTimeout(initVanta, 300);

let resizeRaf;
window.addEventListener('resize', () => {
  cancelAnimationFrame(resizeRaf);
  resizeRaf = requestAnimationFrame(resizeVanta);
});
window.addEventListener('load', () => setTimeout(resizeVanta, 100));

// ── Contact form (Formspree) ─────────────────────────────────────────
const contactForm = document.getElementById('contact-form');
const formStatus  = document.getElementById('form-status');

if (contactForm) {
  contactForm.addEventListener('submit', async e => {
    e.preventDefault();
    try {
      const res = await fetch('https://formspree.io/f/xkgnbkkr', {
        method: 'POST',
        body: new FormData(contactForm),
        headers: { Accept: 'application/json' },
      });
      formStatus.textContent = res.ok ? 'Message sent!' : 'Oops! Something went wrong.';
      if (res.ok) contactForm.reset();
    } catch {
      formStatus.textContent = 'Error submitting the form.';
    }
  });
}
