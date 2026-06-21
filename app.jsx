// Portfolio app — assembles sections, NavBar, and initializes the Vanta network.
const DSx = window.KrisnaBouPortfolioDesignSystem_e77008;
const { NavBar: NavBarC } = DSx;

function App() {
  return (
    <div>
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 100 }}>
        <NavBarC
          links={[
            { label: 'About',      href: '#about' },
            { label: 'Experience', href: '#experience' },
            { label: 'Projects',   href: '#projects' },
            { label: 'Contact',    href: '#vanta-contact' },
          ]}
          socials={[
            { icon: 'assets/icons/linkedin.png', href: 'https://www.linkedin.com/in/krisna-bou/', label: 'LinkedIn' },
            { icon: 'assets/icons/github.png', href: 'https://github.com/Krisna-Bou', label: 'GitHub' },
          ]}
        />
      </div>
      <Hero />
      <About />
      <Experience />
      <Volunteering />
      <Projects />
      <Contact />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

// Initialize the animated particle network on hero + contact once painted.
const VANTA_SELECTORS = ['#vanta-hero', '#vanta-contact'];

function resizeVanta() {
  VANTA_SELECTORS.forEach((sel) => {
    const el = document.querySelector(sel);
    if (el && el.__vanta && el.__vanta.resize) el.__vanta.resize();
  });
}

function initVanta() {
  if (!window.VANTA || !window.VANTA.NET) { setTimeout(initVanta, 120); return; }
  const cfg = (el) => ({
    el, mouseControls: false, touchControls: false, gyroControls: false,
    minHeight: 200, minWidth: 200, scale: 1, scaleMobile: 1,
    color: 0x3a7ca5, backgroundColor: 0x16425b, points: 10, spacing: 20,
  });
  VANTA_SELECTORS.forEach((sel) => {
    const el = document.querySelector(sel);
    if (el && !el.__vanta) { el.__vanta = window.VANTA.NET(cfg(el)); }
  });
  // Re-measure as fonts/images settle and the layout grows, so the canvas
  // always fills its section (fixes the white gap on large monitors).
  [150, 400, 800, 1500, 2500].forEach((t) => setTimeout(resizeVanta, t));
}

setTimeout(initVanta, 300);

// Keep the canvases matched to their sections on viewport changes.
let resizeRaf;
window.addEventListener('resize', () => {
  cancelAnimationFrame(resizeRaf);
  resizeRaf = requestAnimationFrame(resizeVanta);
});
window.addEventListener('load', () => setTimeout(resizeVanta, 100));
