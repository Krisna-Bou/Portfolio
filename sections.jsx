// Portfolio sections — composed from the design-system bundle components.
const DS = window.KrisnaBouPortfolioDesignSystem_e77008;
const { NavBar, SectionStem, TimelineRow, ProjectCard, VolunteerCard, Tag, Field, Button } = DS;
const DATA = window.PORTFOLIO_DATA;

const ASSET = 'assets';

// Tracks whether the viewport is at/below a breakpoint (live, per-window).
function useIsMobile(bp = 760) {
  const query = `(max-width:${bp}px)`;
  const read = () => (typeof window !== 'undefined' ? window.matchMedia(query).matches : false);
  const [mobile, setMobile] = React.useState(read);
  React.useEffect(() => {
    const mq = window.matchMedia(query);
    const fn = () => setMobile(mq.matches);
    fn();
    mq.addEventListener('change', fn);
    return () => mq.removeEventListener('change', fn);
  }, [query]);
  return mobile;
}

// ---- Hero ---------------------------------------------------------------
function Hero() {
  return (
    <header id="vanta-hero" style={{ position: 'relative', minHeight: '100vh', background: 'var(--bg-network)', display: 'flex', flexDirection: 'column', justifyContent: 'center', overflow: 'hidden' }}>
      <div style={{ position: 'relative', zIndex: 2, padding: '0 8vw', textAlign: 'left' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 'var(--fw-bold)', color: '#fff', fontSize: 'clamp(48px, 9vw, 80px)', margin: 0, lineHeight: 1 }}>
          Hi, I'm <span style={{ color: 'var(--accent-bright)' }}>Krisna.</span>
        </h1>
        <h2 style={{ fontFamily: 'var(--font-sans)', fontWeight: 'var(--fw-light)', color: '#fff', fontSize: 'clamp(18px, 3vw, 26px)', marginTop: 8 }}>
          Tech enthusiast, and avid learner.
        </h2>
      </div>
      <a href="#about" aria-label="Scroll down" style={{ position: 'absolute', bottom: 36, left: '50%', transform: 'translateX(-50%)', zIndex: 2 }}>
        <span className="scroll-arrow" />
      </a>
    </header>
  );
}

// ---- About --------------------------------------------------------------
function About() {
  return (
    <section id="about" style={{ background: 'var(--bg-page)', padding: '90px 8vw 40px' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 28 }}>
        <SectionStem height={180} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <h1 style={{ fontFamily: 'var(--font-display)', color: 'var(--text-heading)', fontSize: 'clamp(36px,6vw,60px)', fontWeight: 'var(--fw-bold)', margin: '0 0 16px', textAlign: 'left' }}>Who am I?</h1>
      <p style={{ fontFamily: 'var(--font-sans)', color: 'var(--text-body)', fontWeight: 'var(--fw-light)', fontSize: '1.15rem', lineHeight: 'var(--lh-body)', maxWidth: 760, textAlign: 'left', margin: 0 }}>
        Hi, I'm <b style={{ color: 'var(--accent)', fontWeight: 700 }}>Krisna Bou</b>, a skilled software developer with experience across many languages, frameworks and technologies. I'm a recent graduate of <b style={{ color: 'var(--accent)', fontWeight: 700 }}>the University of Queensland</b>, focused on opportunities to apply my passion for <b style={{ color: 'var(--accent)', fontWeight: 700 }}>backend systems</b>, <b style={{ color: 'var(--accent)', fontWeight: 700 }}>cloud services</b>, and <b style={{ color: 'var(--accent)', fontWeight: 700 }}>full-stack development</b>.
        <br /><br />
        I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems.
      </p>
        </div>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '3vw', marginTop: 56 }}>
        {DATA.tech.map((t) => (
          <img key={t} className="tech-icon" src={`${ASSET}/tech/${t}.png`} alt={t} style={{ width: 'clamp(42px,5vw,68px)', height: 'clamp(42px,5vw,68px)', objectFit: 'contain' }} />
        ))}
      </div>
    </section>
  );
}

// ---- Experience ---------------------------------------------------------
function Experience() {
  return (
    <section id="experience" style={{ background: 'var(--bg-page)', padding: '60px 4vw 40px' }}>
      <div style={{ padding: '0 4vw' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', color: 'var(--text-heading)', fontSize: 'clamp(36px,6vw,60px)', fontWeight: 'var(--fw-bold)', margin: 0, textAlign: 'left' }}>Experience.</h1>
      </div>
      <div style={{ position: 'relative', marginTop: 48 }}>
        <div className="timeline-spine" />
        <span className="timeline-dot" aria-hidden="true" />
        {DATA.experiences.map((e, i) => (
          <TimelineRow key={i} side={i % 2 === 0 ? 'left' : 'right'} role={e.role} org={e.org} date={e.date} bullets={e.bullets} />
        ))}
      </div>
    </section>
  );
}

// ---- Volunteering -------------------------------------------------------
function Volunteering() {
  return (
    <section style={{ background: 'var(--bg-page)', padding: '60px 8vw' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 28 }}>
        <SectionStem height={130} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <h1 style={{ fontFamily: 'var(--font-display)', color: 'var(--text-heading)', fontSize: 'clamp(36px,6vw,60px)', fontWeight: 'var(--fw-bold)', margin: '0 0 12px', textAlign: 'left' }}>Volunteering.</h1>
      <p style={{ fontFamily: 'var(--font-sans)', color: 'var(--text-body)', fontWeight: 'var(--fw-light)', fontSize: '1.1rem', lineHeight: 'var(--lh-body)', maxWidth: 700, textAlign: 'left', margin: '0 0 40px' }}>
        Beyond my technical experience, I'm committed to giving back to my communities through active engagement and volunteer work.
      </p>
        </div>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, justifyContent: 'space-evenly' }}>
        {DATA.volunteering.map((v, i) => (
          <div key={i} style={{ flex: '0 1 520px', maxWidth: 620 }}>
            <VolunteerCard org={v.org} logo={v.logo} roles={v.roles} bullets={v.bullets} />
          </div>
        ))}
      </div>
    </section>
  );
}

// ---- Projects -----------------------------------------------------------
function GithubLink({ href }) {
  if (!href) return null;
  return (
    <a href={href} style={{ display: 'inline-block', marginTop: 14 }}>
      <img src={`${ASSET}/icons/github-dark.png`} alt="GitHub" style={{ width: 30 }} />
    </a>
  );
}

function MiniProject({ p }) {
  return (
    <div style={{ flex: '0 1 440px', maxWidth: 460, textAlign: 'left' }}>
      <a href={p.github} style={{ color: 'var(--text-body)', textDecoration: 'none' }}>
        <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-h3)', fontWeight: 'var(--fw-bold)', margin: '0 0 1rem', color: 'var(--text-body)' }}>{p.title}</h3>
      </a>
      <p style={{ fontFamily: 'var(--font-sans)', color: 'var(--text-body)', fontSize: '1rem', lineHeight: 'var(--lh-body)', margin: '0 0 12px' }}>{p.description}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {p.tags.map((t, i) => <Tag key={i} category={t.category}>{t.label}</Tag>)}
      </div>
      <GithubLink href={p.github} />
    </div>
  );
}

function Divider() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '40px 0' }}>
      <span style={{ height: 1, width: '35%', background: 'var(--border-hairline)' }} />
      <span style={{ color: 'rgba(0,0,0,.2)', fontSize: '1.5rem', margin: '0 10px', lineHeight: 0 }}>&bull;</span>
      <span style={{ height: 1, width: '35%', background: 'var(--border-hairline)' }} />
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" style={{ background: 'var(--bg-page)', padding: '60px 8vw 40px' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 28 }}>
        <SectionStem height={160} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <h1 style={{ fontFamily: 'var(--font-display)', color: 'var(--text-heading)', fontSize: 'clamp(36px,6vw,60px)', fontWeight: 'var(--fw-bold)', margin: '0 0 12px', textAlign: 'left' }}>Projects.</h1>
      <p style={{ fontFamily: 'var(--font-sans)', color: 'var(--text-body)', fontWeight: 'var(--fw-light)', fontSize: '1.1rem', lineHeight: 'var(--lh-body)', maxWidth: 700, textAlign: 'left', margin: '0 0 48px' }}>
        In my spare time I work on coding projects to sharpen my skills — from personal passion projects to real-world applications — exploring new technologies and building practical solutions.
      </p>
        </div>
      </div>
      {DATA.projects.map((p, i) => (
        <React.Fragment key={i}>
          <ProjectCard {...p} reverse={i % 2 === 1} framed={!p.laptop} github={p.github ? { url: p.github, img: `${ASSET}/icons/github-dark.png` } : null} />
          {i < DATA.projects.length - 1 && <Divider />}
        </React.Fragment>
      ))}
      <Divider />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 48, justifyContent: 'space-between', maxWidth: 1000, margin: '0 auto' }}>
        {DATA.miniProjects.map((p, i) => <MiniProject key={i} p={p} />)}
      </div>
    </section>
  );
}

// ---- Contact ------------------------------------------------------------
function Contact() {
  const [status, setStatus] = React.useState('');
  const stack = useIsMobile(900);
  function submit(e) {
    e.preventDefault();
    setStatus('Message sent!');
    e.target.reset();
  }
  return (
    <section id="vanta-contact" style={{ position: 'relative', background: 'var(--bg-network)', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '100px 0 80px', overflow: 'hidden' }}>
      <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexWrap: stack ? 'wrap' : 'nowrap', gap: 72, alignItems: 'center', justifyContent: 'center', width: '100%', maxWidth: 1340, margin: '0 auto', padding: '0 32px' }}>
        <div style={{ flex: '1 1 440px', maxWidth: 680, background: 'var(--surface-contact)', borderRadius: 'var(--radius-contact)', padding: '8px 36px 36px', boxShadow: 'var(--shadow-glow-light)' }}>
          <h1 style={{ fontFamily: 'var(--font-display)', color: '#fff', fontSize: 36, fontWeight: 'var(--fw-bold)', textAlign: 'left' }}>Contact.</h1>
          <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <Field label="Your Name" name="name" placeholder="What's your name?" required />
            <Field label="Your Email" name="email" type="email" placeholder="How do I contact you?" required />
            <Field label="Your Message" name="message" placeholder="Send me a message!" multiline rows={6} required />
            <Button variant="primary" type="submit" style={{ alignSelf: 'flex-start' }}>Submit</Button>
            <div style={{ color: 'var(--accent-bright)', fontWeight: 500, minHeight: 20 }}>{status}</div>
          </form>
          <div style={{ display: 'flex', gap: 28, justifyContent: 'center', paddingTop: 8 }}>
            <a href="https://www.linkedin.com/in/krisna-bou/"><img src={`${ASSET}/icons/linkedin.png`} alt="LinkedIn" style={{ width: 38 }} /></a>
            <a href="https://github.com/Krisna-Bou"><img src={`${ASSET}/icons/github.png`} alt="GitHub" style={{ width: 38 }} /></a>
            <a href="mailto:krisna.bou@outlook.com"><img src={`${ASSET}/icons/mail.png`} alt="Email" style={{ width: 38 }} /></a>
          </div>
        </div>
        <div style={{ flex: '0 0 auto' }}>
          <img className="float-photo" src={`${ASSET}/photo/Krisna.jpg`} alt="Krisna Bou" style={{ width: 'clamp(180px,22vw,300px)', borderRadius: '50%' }} />
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Hero, About, Experience, Volunteering, Projects, Contact });
