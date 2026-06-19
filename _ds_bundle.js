/* @ds-bundle: {"format":3,"namespace":"KrisnaBouPortfolioDesignSystem_e77008","components":[{"name":"DatePill","sourcePath":"components/content/DatePill.jsx"},{"name":"ExperienceCard","sourcePath":"components/content/ExperienceCard.jsx"},{"name":"ProjectCard","sourcePath":"components/content/ProjectCard.jsx"},{"name":"TimelineRow","sourcePath":"components/content/TimelineRow.jsx"},{"name":"VolunteerCard","sourcePath":"components/content/VolunteerCard.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"SectionStem","sourcePath":"components/core/SectionStem.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"}],"sourceHashes":{"components/content/DatePill.jsx":"c461cc081eb7","components/content/ExperienceCard.jsx":"50c1d4e81727","components/content/ProjectCard.jsx":"10b500536003","components/content/TimelineRow.jsx":"7e5e240ded0f","components/content/VolunteerCard.jsx":"8c4d0dc1ac84","components/core/Button.jsx":"9c9a22bb38a2","components/core/SectionStem.jsx":"6f4650bc5361","components/core/Tag.jsx":"07a674dc7296","components/forms/Field.jsx":"e4c2a4d5a48a","components/navigation/NavBar.jsx":"5ff8d6ada963","fixed-site/js/main.js":"c0250c0607d4","ui_kits/portfolio/app.jsx":"881c7de6769e","ui_kits/portfolio/data.js":"488bda1bfaac","ui_kits/portfolio/sections.jsx":"d78d47c295fa"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.KrisnaBouPortfolioDesignSystem_e77008 = window.KrisnaBouPortfolioDesignSystem_e77008 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/DatePill.jsx
try { (() => {
/**
 * DatePill — a navy rounded label holding a date range and duration,
 * sitting opposite an ExperienceCard across the timeline.
 */
function DatePill({
  children,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-block',
      background: 'var(--blue-700)',
      color: 'var(--text-on-dark)',
      borderRadius: 'var(--radius-card)',
      padding: '0 20px 0 15px',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontWeight: 'var(--fw-medium)',
      fontSize: 'var(--fs-h3)'
    }
  }, children));
}
Object.assign(__ds_scope, { DatePill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/DatePill.jsx", error: String((e && e.message) || e) }); }

// components/content/ExperienceCard.jsx
try { (() => {
/**
 * ExperienceCard — a light panel describing one role: title, organisation and
 * achievement bullets. Lifts with a soft glow on hover. An accent side border
 * (left or right) ties it to the timeline spine.
 */
function ExperienceCard({
  role,
  org,
  bullets = [],
  side = 'left',
  style = {}
}) {
  const [hover, setHover] = React.useState(false);
  const borderSide = side === 'left' ? 'borderRight' : 'borderLeft';
  const radius = side === 'left' ? '15px 0 0 15px' : '0 15px 15px 0';
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: 'var(--surface-card)',
      color: 'var(--text-body)',
      textAlign: 'left',
      padding: '4px 20px 4px 15px',
      borderRadius: radius,
      [borderSide]: '3px solid var(--border-accent)',
      boxShadow: hover ? 'var(--shadow-glow)' : 'none',
      transition: 'var(--ease-card)',
      fontFamily: 'var(--font-sans)',
      lineHeight: 'var(--lh-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--fs-h2)',
      fontWeight: 'var(--fw-bold)',
      margin: '12px 0 0'
    }
  }, role), /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: 'var(--fs-h3)',
      fontWeight: 'var(--fw-light)',
      color: 'var(--text-body)',
      margin: '0 0 10px'
    }
  }, org), /*#__PURE__*/React.createElement("ul", {
    style: {
      paddingLeft: '40px',
      margin: 0,
      listStyleType: 'disc'
    }
  }, bullets.map((b, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      marginBottom: '4px'
    }
  }, b))));
}
Object.assign(__ds_scope, { ExperienceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ExperienceCard.jsx", error: String((e && e.message) || e) }); }

// components/content/TimelineRow.jsx
try { (() => {
/** Tracks whether the (component's own) viewport is at/below a breakpoint. */
function useIsMobile(bp = 760) {
  const query = `(max-width:${bp}px)`;
  const read = () => typeof window !== 'undefined' ? window.matchMedia(query).matches : false;
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

/**
 * TimelineRow — one row of the experience timeline: an ExperienceCard on one
 * side, a DatePill on the other, with the central spine dot between them.
 * Alternate `side` down the list for the classic zig-zag. On phones the row
 * collapses to a single full-width column: date pill above its card.
 */
function TimelineRow({
  role,
  org,
  bullets = [],
  date,
  side = 'left'
}) {
  const isMobile = useIsMobile(760);
  if (isMobile) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 10,
        marginBottom: 24,
        fontFamily: 'var(--font-sans)'
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.DatePill, null, date), /*#__PURE__*/React.createElement(__ds_scope.ExperienceCard, {
      role: role,
      org: org,
      bullets: bullets,
      side: "right",
      style: {
        width: '100%',
        borderRadius: 14
      }
    }));
  }
  const card = /*#__PURE__*/React.createElement("div", {
    style: {
      width: '70%',
      display: 'flex',
      justifyContent: side === 'left' ? 'flex-end' : 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      maxWidth: 520,
      margin: side === 'left' ? '0 50px 0 0' : '0 0 0 50px'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.ExperienceCard, {
    role: role,
    org: org,
    bullets: bullets,
    side: side
  })));
  const dateCol = /*#__PURE__*/React.createElement("div", {
    style: {
      width: '70%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: side === 'left' ? 'flex-start' : 'flex-end',
      paddingTop: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      margin: side === 'left' ? '0 0 0 50px' : '0 50px 0 0'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.DatePill, null, date)));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 50,
      fontFamily: 'var(--font-sans)'
    }
  }, side === 'left' ? card : dateCol, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '5%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 25,
      height: 25,
      borderRadius: '50%',
      background: 'var(--stem)'
    }
  })), side === 'left' ? dateCol : card);
}
Object.assign(__ds_scope, { TimelineRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/TimelineRow.jsx", error: String((e && e.message) || e) }); }

// components/content/VolunteerCard.jsx
try { (() => {
/**
 * VolunteerCard — a light panel for a community organisation: name + logo,
 * one or more role/date rows, and contribution bullets. Hover glow to match
 * the experience cards.
 */
function VolunteerCard({
  org,
  logo,
  roles = [],
  bullets = [],
  style = {}
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: 'var(--surface-card)',
      color: 'var(--text-body)',
      borderRadius: 'var(--radius-panel)',
      padding: '4px 28px 20px',
      textAlign: 'left',
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--fw-light)',
      boxShadow: hover ? 'var(--shadow-glow)' : 'none',
      transition: 'var(--ease-card)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--fs-h2)',
      fontWeight: 'var(--fw-bold)',
      margin: '14px 0'
    }
  }, org), logo && /*#__PURE__*/React.createElement("img", {
    src: logo,
    alt: org,
    style: {
      width: 56,
      height: 56,
      objectFit: 'contain'
    }
  })), roles.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 18
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontWeight: 'var(--fw-light)',
      margin: '0 0 6px'
    }
  }, r.title), /*#__PURE__*/React.createElement("h4", {
    style: {
      fontWeight: 'var(--fw-light)',
      margin: '0 0 6px'
    }
  }, r.date))), /*#__PURE__*/React.createElement("ul", {
    style: {
      paddingLeft: 20,
      margin: '8px 0 0',
      lineHeight: 'var(--lh-snug)'
    }
  }, bullets.map((b, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      marginBottom: 4
    }
  }, b))));
}
Object.assign(__ds_scope, { VolunteerCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/VolunteerCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — primary call-to-action used on the contact form and links.
 * Solid steel-blue fill, bold label, soft drop shadow; darkens on hover.
 */
function Button({
  children,
  variant = 'primary',
  type = 'button',
  href,
  onClick,
  disabled = false,
  style = {}
}) {
  const [hover, setHover] = React.useState(false);
  const palette = {
    primary: {
      bg: 'var(--blue-550)',
      bgHover: 'var(--blue-850)',
      fg: '#fff'
    },
    ghost: {
      bg: 'transparent',
      bgHover: 'rgba(255,255,255,0.08)',
      fg: 'var(--text-on-dark)'
    }
  }[variant] || {};
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontFamily: 'var(--font-sans)',
    fontWeight: 'var(--fw-bold)',
    fontSize: '1rem',
    padding: '0.75rem 2rem',
    border: variant === 'ghost' ? '2px solid rgba(255,255,255,0.4)' : 'none',
    borderRadius: 'var(--radius-input)',
    background: hover && !disabled ? palette.bgHover : palette.bg,
    color: palette.fg,
    boxShadow: variant === 'primary' ? 'var(--shadow-drop)' : 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: `background-color var(--ease-press)`,
    textDecoration: 'none',
    ...style
  };
  const Tag = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({}, href ? {
    href
  } : {
    type
  }, {
    onClick: onClick,
    disabled: href ? undefined : disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: base
  }), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionStem.jsx
try { (() => {
/**
 * SectionStem — the signature decorative anchor that opens each section:
 * a steel-blue dot atop a vertical line that fades to transparent.
 */
function SectionStem({
  height = 200,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      ...style
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '15px',
      height: '15px',
      borderRadius: '50%',
      background: 'var(--stem)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '3px',
      height: typeof height === 'number' ? `${height}px` : height,
      background: 'var(--stem-line)'
    }
  }));
}
Object.assign(__ds_scope, { SectionStem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionStem.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
/**
 * Tag — a small pill labelling a skill, language or tool. Color is keyed to
 * its category: language (sky), software (ocean), framework (slate).
 */
function Tag({
  children,
  category = 'language',
  style = {}
}) {
  const bg = {
    language: 'var(--tag-language)',
    software: 'var(--tag-software)',
    framework: 'var(--tag-framework)'
  }[category] || 'var(--tag-language)';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      padding: '4px 14px',
      borderRadius: 'var(--radius-tag)',
      background: bg,
      color: '#fff',
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--fw-light)',
      fontSize: 'var(--fs-small)',
      lineHeight: 1.4,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/content/ProjectCard.jsx
try { (() => {
/** Tracks whether the (component's own) viewport is at/below a breakpoint. */
function useIsMobile(bp = 760) {
  const query = `(max-width:${bp}px)`;
  const read = () => typeof window !== 'undefined' ? window.matchMedia(query).matches : false;
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

/**
 * ProjectCard — a project showcase pairing a framed screenshot with a title,
 * description and a cluster of skill tags. Set `reverse` to flip image/text.
 */
function ProjectCard({
  title,
  href,
  description,
  image,
  imageAlt = '',
  tags = [],
  github,
  reverse = false,
  framed = true
}) {
  const [zoom, setZoom] = React.useState(false);
  const isMobile = useIsMobile(760);

  // Normalize github: accept a string URL or { url, img }.
  const gh = github ? typeof github === 'string' ? {
    url: github
  } : github : null;
  const Info = /*#__PURE__*/React.createElement("div", {
    style: {
      width: isMobile ? '100%' : '40%',
      minWidth: isMobile ? 0 : 280,
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      color: 'var(--text-body)',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--fs-h3)',
      fontWeight: 'var(--fw-bold)',
      margin: '0 0 1rem'
    }
  }, title)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '1rem',
      fontWeight: 'var(--fw-regular)',
      lineHeight: 'var(--lh-body)',
      margin: '0 0 12px'
    }
  }, description), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, tags.map((t, i) => /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: i,
    category: t.category
  }, t.label))), gh && gh.img && /*#__PURE__*/React.createElement("a", {
    href: gh.url,
    style: {
      display: 'inline-block',
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: gh.img,
    alt: "GitHub",
    style: {
      width: 28
    }
  })));
  const Media = image && /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      width: isMobile ? '100%' : '40%',
      minWidth: isMobile ? 0 : 280
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: imageAlt,
    onMouseEnter: () => setZoom(true),
    onMouseLeave: () => setZoom(false),
    style: {
      width: '100%',
      borderRadius: framed ? 'var(--radius-image)' : 0,
      border: framed ? '2px solid var(--border-accent)' : 'none',
      transform: zoom ? 'scale(var(--scale-image))' : 'none',
      transition: 'var(--ease-lift)'
    }
  }));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      gap: isMobile ? 22 : 40,
      color: 'var(--text-body)',
      fontFamily: 'var(--font-sans)'
    }
  }, isMobile ? /*#__PURE__*/React.createElement(React.Fragment, null, Media, Info) : reverse ? /*#__PURE__*/React.createElement(React.Fragment, null, Info, Media) : /*#__PURE__*/React.createElement(React.Fragment, null, Media, Info));
}
Object.assign(__ds_scope, { ProjectCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ProjectCard.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
/**
 * Field — a labelled text input or textarea styled for the dark contact panel.
 * Deep-blue fill, rounded, white text, light placeholder.
 */
function Field({
  label,
  name,
  type = 'text',
  placeholder,
  multiline = false,
  required = false,
  value,
  onChange,
  rows = 4,
  style = {}
}) {
  const controlStyle = {
    background: 'var(--surface-input)',
    border: 'none',
    borderRadius: 'var(--radius-input)',
    color: 'var(--text-on-dark)',
    fontFamily: 'var(--font-sans)',
    fontWeight: 'var(--fw-medium)',
    fontSize: '1rem',
    padding: '1rem 1.5rem',
    outline: '2px solid transparent',
    width: '100%',
    boxSizing: 'border-box',
    resize: 'none'
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-on-dark)',
      fontWeight: 'var(--fw-medium)'
    }
  }, label), multiline ? /*#__PURE__*/React.createElement("textarea", {
    name: name,
    placeholder: placeholder,
    required: required,
    value: value,
    onChange: onChange,
    rows: rows,
    style: controlStyle
  }) : /*#__PURE__*/React.createElement("input", {
    type: type,
    name: name,
    placeholder: placeholder,
    required: required,
    value: value,
    onChange: onChange,
    style: controlStyle
  }));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
/** Tracks whether the (component's own) viewport is at/below a breakpoint. */
function useIsMobile(bp = 760) {
  const query = `(max-width:${bp}px)`;
  const read = () => typeof window !== 'undefined' ? window.matchMedia(query).matches : false;
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

/**
 * NavBar — the fixed top bar: wordmark on the left, section anchors in the
 * middle, social icons on the right. Dark navy, animated underline on hover.
 * On phones it collapses to a wordmark + burger button that opens a dropdown.
 */
function NavBar({
  brand = 'Krisna Bou | Portfolio',
  links = [{
    label: 'About',
    href: '#about'
  }, {
    label: 'Experience',
    href: '#experience'
  }, {
    label: 'Projects',
    href: '#projects'
  }, {
    label: 'Contact',
    href: '#contact'
  }],
  socials = [],
  style = {}
}) {
  const isMobile = useIsMobile(760);
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    if (!isMobile) setOpen(false);
  }, [isMobile]);
  const bar = {
    position: 'relative',
    height: 'var(--nav-height)',
    background: 'var(--blue-900)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: isMobile ? '0 18px' : '0 24px',
    fontFamily: 'var(--font-sans)',
    ...style
  };
  if (isMobile) {
    const burgerLine = {
      display: 'block',
      height: 2,
      width: 24,
      background: 'var(--text-on-dark)',
      borderRadius: 2,
      transition: 'transform .25s ease, opacity .2s ease'
    };
    return /*#__PURE__*/React.createElement("nav", {
      style: bar
    }, /*#__PURE__*/React.createElement("a", {
      href: "#",
      style: {
        color: 'var(--text-on-dark)',
        fontWeight: 'var(--fw-medium)',
        fontSize: 16,
        textDecoration: 'none'
      }
    }, brand), /*#__PURE__*/React.createElement("button", {
      "aria-label": "Toggle menu",
      "aria-expanded": open,
      onClick: () => setOpen(o => !o),
      style: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 5,
        width: 40,
        height: 40,
        padding: 8,
        background: 'transparent',
        border: 'none',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        ...burgerLine,
        transform: open ? 'translateY(7px) rotate(45deg)' : 'none'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        ...burgerLine,
        opacity: open ? 0 : 1
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        ...burgerLine,
        transform: open ? 'translateY(-7px) rotate(-45deg)' : 'none'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: '100%',
        left: 0,
        width: '100%',
        background: 'var(--blue-900)',
        display: open ? 'block' : 'none',
        boxShadow: '0 14px 28px rgba(0,0,0,.28)',
        borderTop: '1px solid rgba(255,255,255,.08)'
      }
    }, /*#__PURE__*/React.createElement("ul", {
      style: {
        listStyle: 'none',
        margin: 0,
        padding: '6px 0'
      }
    }, links.map(l => /*#__PURE__*/React.createElement("li", {
      key: l.href
    }, /*#__PURE__*/React.createElement("a", {
      href: l.href,
      onClick: () => setOpen(false),
      style: {
        display: 'block',
        color: 'var(--text-on-dark)',
        textDecoration: 'none',
        padding: '13px 22px',
        fontSize: 16
      }
    }, l.label)))), socials.length > 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 20,
        alignItems: 'center',
        padding: '12px 22px 18px',
        borderTop: '1px solid rgba(255,255,255,.08)'
      }
    }, socials.map((s, i) => /*#__PURE__*/React.createElement("a", {
      key: i,
      href: s.href,
      style: {
        display: 'flex'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: s.icon,
      alt: s.label || '',
      style: {
        width: 24,
        height: 24
      }
    }))))));
  }
  return /*#__PURE__*/React.createElement("nav", {
    style: bar
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'var(--text-on-dark)',
      fontWeight: 'var(--fw-medium)',
      fontSize: 18,
      textDecoration: 'none'
    }
  }, brand), /*#__PURE__*/React.createElement("ul", {
    style: {
      display: 'flex',
      gap: 20,
      listStyle: 'none',
      margin: 0,
      padding: 0
    }
  }, links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l.href
  }, /*#__PURE__*/React.createElement(NavLink, l)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'center'
    }
  }, socials.map((s, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: s.href,
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: s.icon,
    alt: s.label || '',
    style: {
      width: 22,
      height: 22
    }
  })))));
}
function NavLink({
  label,
  href
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      color: 'var(--text-on-dark)',
      textDecoration: 'none',
      position: 'relative',
      paddingBottom: 4
    }
  }, label, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: hover ? 0 : '50%',
      bottom: 0,
      height: 2,
      width: hover ? '100%' : 0,
      background: '#b0b0b0',
      transition: 'var(--ease-underline)'
    }
  }));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// fixed-site/js/main.js
try { (() => {
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
      var opts = Object.assign({
        el: sel
      }, VANTA_OPTS);
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
          headers: {
            Accept: 'application/json'
          }
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
})(); } catch (e) { __ds_ns.__errors.push({ path: "fixed-site/js/main.js", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/app.jsx
try { (() => {
// Portfolio app — assembles sections, NavBar, and initializes the Vanta network.
const DSx = window.KrisnaBouPortfolioDesignSystem_e77008;
const {
  NavBar: NavBarC
} = DSx;
function App() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 100
    }
  }, /*#__PURE__*/React.createElement(NavBarC, {
    socials: [{
      icon: '../../assets/icons/linkedin.png',
      href: 'https://www.linkedin.com/in/krisna-bou/',
      label: 'LinkedIn'
    }, {
      icon: '../../assets/icons/github.png',
      href: 'https://github.com/Krisna-Bou',
      label: 'GitHub'
    }]
  })), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(About, null), /*#__PURE__*/React.createElement(Experience, null), /*#__PURE__*/React.createElement(Volunteering, null), /*#__PURE__*/React.createElement(Projects, null), /*#__PURE__*/React.createElement(Contact, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));

// Initialize the animated particle network on hero + contact once painted.
const VANTA_SELECTORS = ['#vanta-hero', '#vanta-contact'];
function resizeVanta() {
  VANTA_SELECTORS.forEach(sel => {
    const el = document.querySelector(sel);
    if (el && el.__vanta && el.__vanta.resize) el.__vanta.resize();
  });
}
function initVanta() {
  if (!window.VANTA || !window.VANTA.NET) {
    setTimeout(initVanta, 120);
    return;
  }
  const cfg = el => ({
    el,
    mouseControls: false,
    touchControls: false,
    gyroControls: false,
    minHeight: 200,
    minWidth: 200,
    scale: 1,
    scaleMobile: 1,
    color: 0x3a7ca5,
    backgroundColor: 0x16425b,
    points: 10,
    spacing: 20
  });
  VANTA_SELECTORS.forEach(sel => {
    const el = document.querySelector(sel);
    if (el && !el.__vanta) {
      el.__vanta = window.VANTA.NET(cfg(el));
    }
  });
  // Re-measure as fonts/images settle and the layout grows, so the canvas
  // always fills its section (fixes the white gap on large monitors).
  [150, 400, 800, 1500, 2500].forEach(t => setTimeout(resizeVanta, t));
}
setTimeout(initVanta, 300);

// Keep the canvases matched to their sections on viewport changes.
let resizeRaf;
window.addEventListener('resize', () => {
  cancelAnimationFrame(resizeRaf);
  resizeRaf = requestAnimationFrame(resizeVanta);
});
window.addEventListener('load', () => setTimeout(resizeVanta, 100));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/data.js
try { (() => {
// Krisna Bou Portfolio — content data (sourced from resume + LinkedIn + live site)
window.PORTFOLIO_DATA = {
  experiences: [{
    role: 'Technology Intern (Test Coordinator)',
    org: 'Quorum Software',
    date: 'Jul 2025 – Present \u00b7 9 mos',
    bullets: ['Contributed to projects delivering Energy Components (EC) as a service for major oil and gas clients.', 'Assisted in customizing EC screens and functions to meet client-specific requirements.', 'Performed system testing and validation of new configurations to ensure quality and compliance.', 'Executed and reviewed SQL database changes to support customization and maintain data integrity.']
  }, {
    role: 'Database Developer',
    org: 'UQ Pro Bono Centre',
    date: 'Apr 2024 – Mar 2026 \u00b7 2 yrs',
    bullets: ['Designed and developed a web-based database system for QAI and UQ Pro Bono members to manage case records.', 'Enabled public access to summarized NDIS Appeals cases for analysis of national trends and jurisdictional comparisons.', 'Conducted user elicitation to determine needs and requirements for designed features.']
  }, {
    role: 'Student Fellow',
    org: 'Startmate',
    date: 'Nov 2024 – Dec 2024 \u00b7 2 mos',
    bullets: ["Selected as a Startmate Student Fellow in Australia's leading startup accelerator ecosystem.", 'Engaged with founders and operators to build skills in innovation, product thinking, and venture development.']
  }, {
    role: 'Technology Intern',
    org: 'NFQ Asia',
    date: 'Nov 2023 – Dec 2023 \u00b7 2 mos',
    bullets: ['Implemented Google Apps Script and interfaced with APIs to automate a weekly cross-branch survey (Vietnam, Thailand, Singapore).', 'Reduced processing times by 50% in the automation of raw survey results and reporting.', 'Modularized the project to divide tasks among peers, smoothing the learning process.']
  }, {
    role: 'Student Staff Partner',
    org: 'The University of Queensland',
    date: 'Jun 2023 – Dec 2023 \u00b7 6 mos',
    bullets: ["Researched faculty students' experiences through interviews, focus groups, and surveys.", 'Investigated ways to improve student belongingness within the EAIT student experience.', 'Presented an action plan for staff to act upon, including event redesign and advertising.']
  }, {
    role: 'Get Set Mentor',
    org: 'The University of Queensland',
    date: 'Jun 2023 – Dec 2023 \u00b7 6 mos',
    bullets: ['Conducted weekly meetings for new students seeking advice on navigating university life.', 'Orchestrated campus events to help students adjust and connect with new peers.']
  }, {
    role: 'Retail Team Member',
    org: 'Coles',
    date: '2021 – 2024 \u00b7 3 yrs',
    bullets: ['Completed daily tasks by assessing priorities and efficiently allocating store resources.', 'Cultivated team-building, quick problem-solving, and communication skills among coworkers.']
  }],
  volunteering: [{
    org: 'Street Groove Dance Society',
    logo: '../../assets/orgs/StreetGroove.png',
    roles: [{
      title: 'Marketing Executive',
      date: 'Nov 2024 – Nov 2025'
    }, {
      title: 'Class Manager',
      date: 'Jul 2023 – Nov 2024'
    }],
    bullets: ['Developed schedules, selected dance styles, and handled overall class management for members.', 'Managed contracts for teachers and studios, ensuring smooth day-to-day operations.', 'Planned and executed special events to enhance member engagement and community building.']
  }, {
    org: 'Brisbane-Asian Student Association',
    logo: '../../assets/orgs/BSA.png',
    roles: [{
      title: 'Events Committee Member',
      date: 'Jan 2024 – Nov 2024'
    }],
    bullets: ['Oversaw event management: logistics, scheduling, and coordination with vendors and participants.', 'Focused on memorable experiences that fostered community engagement and member satisfaction.']
  }],
  projects: [{
    title: 'NDIS Appeals Database',
    href: 'https://ndis.project.uq.edu.au/',
    image: '../../assets/projects/laptop.png',
    laptop: true,
    description: 'A pro bono project for Queensland Advocacy for Inclusion, collecting NDIS Appeals case data from 2014 to today. Enables comprehensive analysis of appeal outcomes to the Administrative Review Tribunal.',
    tags: [{
      label: 'CodeIgniter',
      category: 'framework'
    }, {
      label: 'Front-End Development',
      category: 'software'
    }, {
      label: 'UX/UI Design',
      category: 'software'
    }, {
      label: 'PHP',
      category: 'language'
    }, {
      label: 'HTML',
      category: 'language'
    }, {
      label: 'CSS',
      category: 'language'
    }]
  }, {
    title: 'Sleepless Violin',
    href: 'https://www.sleeplessviolin.com/',
    github: 'https://github.com/Krisna-Bou/Sleepless-Violin',
    image: '../../assets/projects/SleeplessViolin.png',
    description: "An online portfolio for a classical musician to showcase performances and experience. Polished, minimalist aesthetic aligned with the client's vision and a seamless user experience.",
    tags: [{
      label: 'CSS',
      category: 'language'
    }, {
      label: 'Front-End Development',
      category: 'software'
    }, {
      label: 'Freelance',
      category: 'framework'
    }, {
      label: 'HTML',
      category: 'language'
    }]
  }, {
    title: 'Project Display System',
    href: 'https://reit4841-krisna-bou.uqcloud.net/Project-Display/',
    github: 'https://github.com/Krisna-Bou/Project-Display-System',
    image: '../../assets/projects/Project-Display.png',
    description: 'Honours thesis project: a project display and resource management system for UQ, deployed to UQCloud to display projects within the School of Electrical Engineering and Computer Science.',
    tags: [{
      label: 'PHP',
      category: 'language'
    }, {
      label: 'Front-End Development',
      category: 'software'
    }, {
      label: 'UX/UI Design',
      category: 'software'
    }, {
      label: 'CSS',
      category: 'language'
    }, {
      label: 'CodeIgniter',
      category: 'framework'
    }, {
      label: 'Thesis Project',
      category: 'framework'
    }]
  }, {
    title: 'Baiae Imperiali',
    href: 'https://krisna-bou.github.io/Baiae_Imperiali/',
    github: 'https://github.com/Krisna-Bou/Baiae_Imperiali',
    image: '../../assets/projects/Baiae.png',
    description: 'A web application centred on an ancient Roman resort, offering a booking system for restaurants and hotels alongside informative content on Roman history and culture.',
    tags: [{
      label: 'CSS',
      category: 'language'
    }, {
      label: 'Front-End Development',
      category: 'software'
    }, {
      label: 'HTML',
      category: 'language'
    }]
  }],
  miniProjects: [{
    title: 'Pigeon E2EE Messenger',
    github: 'https://github.com/Krisna-Bou/Pigeon-E2EE-Messenger',
    description: 'A secure end-to-end encrypted instant messaging application with client and server subsystems (pigeon-client / pigeon-server).',
    tags: [{
      label: 'Python',
      category: 'language'
    }, {
      label: 'Software Architecture',
      category: 'software'
    }, {
      label: 'AWS',
      category: 'software'
    }, {
      label: 'HTTP',
      category: 'framework'
    }, {
      label: 'Docker',
      category: 'framework'
    }]
  }, {
    title: 'Spam Overflow',
    github: 'https://github.com/Krisna-Bou/SpamOverflow',
    description: 'An AWS-hosted application for detecting spam emails within a system, assessing AWS metrics to determine anomalies and unusual behavior.',
    tags: [{
      label: 'Terraform',
      category: 'software'
    }, {
      label: 'REST APIs',
      category: 'framework'
    }, {
      label: 'AWS',
      category: 'software'
    }, {
      label: 'ECS',
      category: 'language'
    }, {
      label: 'Docker',
      category: 'framework'
    }]
  }],
  tech: ['python', 'java', 'mysql', 'javascript', 'html', 'css', 'docker', 'git', 'web']
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/data.js", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/sections.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Portfolio sections — composed from the design-system bundle components.
const DS = window.KrisnaBouPortfolioDesignSystem_e77008;
const {
  NavBar,
  SectionStem,
  TimelineRow,
  ProjectCard,
  VolunteerCard,
  Tag,
  Field,
  Button
} = DS;
const DATA = window.PORTFOLIO_DATA;
const ASSET = '../../assets';

// Tracks whether the viewport is at/below a breakpoint (live, per-window).
function useIsMobile(bp = 760) {
  const query = `(max-width:${bp}px)`;
  const read = () => typeof window !== 'undefined' ? window.matchMedia(query).matches : false;
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
  return /*#__PURE__*/React.createElement("header", {
    id: "vanta-hero",
    style: {
      position: 'relative',
      minHeight: '100vh',
      background: 'var(--bg-network)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 2,
      padding: '0 8vw',
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-bold)',
      color: '#fff',
      fontSize: 'clamp(48px, 9vw, 80px)',
      margin: 0,
      lineHeight: 1
    }
  }, "Hi, I'm ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent-bright)'
    }
  }, "Krisna.")), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--fw-light)',
      color: '#fff',
      fontSize: 'clamp(18px, 3vw, 26px)',
      marginTop: 8
    }
  }, "Tech enthusiast, and avid learner.")), /*#__PURE__*/React.createElement("a", {
    href: "#about",
    "aria-label": "Scroll down",
    style: {
      position: 'absolute',
      bottom: 36,
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "scroll-arrow"
  })));
}

// ---- About --------------------------------------------------------------
function About() {
  return /*#__PURE__*/React.createElement("section", {
    id: "about",
    style: {
      background: 'var(--bg-page)',
      padding: '90px 8vw 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement(SectionStem, {
    height: 180
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      color: 'var(--text-heading)',
      fontSize: 'clamp(36px,6vw,60px)',
      fontWeight: 'var(--fw-bold)',
      margin: '0 0 16px',
      textAlign: 'left'
    }
  }, "Who am I?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      color: 'var(--text-body)',
      fontWeight: 'var(--fw-light)',
      fontSize: '1.15rem',
      lineHeight: 'var(--lh-body)',
      maxWidth: 760,
      textAlign: 'left',
      margin: 0
    }
  }, "Hi, I'm ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--accent)',
      fontWeight: 700
    }
  }, "Krisna Bou"), ", a skilled software developer with experience across many languages, frameworks and technologies. I'm a recent graduate of ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--accent)',
      fontWeight: 700
    }
  }, "the University of Queensland"), ", focused on opportunities to apply my passion for ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--accent)',
      fontWeight: 700
    }
  }, "backend systems"), ", ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--accent)',
      fontWeight: 700
    }
  }, "cloud services"), ", and ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--accent)',
      fontWeight: 700
    }
  }, "full-stack development"), ".", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), "I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '3vw',
      marginTop: 56
    }
  }, DATA.tech.map(t => /*#__PURE__*/React.createElement("img", {
    key: t,
    className: "tech-icon",
    src: `${ASSET}/tech/${t}.png`,
    alt: t,
    style: {
      width: 'clamp(42px,5vw,68px)',
      height: 'clamp(42px,5vw,68px)',
      objectFit: 'contain'
    }
  }))));
}

// ---- Experience ---------------------------------------------------------
function Experience() {
  return /*#__PURE__*/React.createElement("section", {
    id: "experience",
    style: {
      background: 'var(--bg-page)',
      padding: '60px 4vw 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 4vw'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      color: 'var(--text-heading)',
      fontSize: 'clamp(36px,6vw,60px)',
      fontWeight: 'var(--fw-bold)',
      margin: 0,
      textAlign: 'left'
    }
  }, "Experience.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "timeline-spine"
  }), /*#__PURE__*/React.createElement("span", {
    className: "timeline-dot",
    "aria-hidden": "true"
  }), DATA.experiences.map((e, i) => /*#__PURE__*/React.createElement(TimelineRow, {
    key: i,
    side: i % 2 === 0 ? 'left' : 'right',
    role: e.role,
    org: e.org,
    date: e.date,
    bullets: e.bullets
  }))));
}

// ---- Volunteering -------------------------------------------------------
function Volunteering() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--bg-page)',
      padding: '60px 8vw'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement(SectionStem, {
    height: 130
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      color: 'var(--text-heading)',
      fontSize: 'clamp(36px,6vw,60px)',
      fontWeight: 'var(--fw-bold)',
      margin: '0 0 12px',
      textAlign: 'left'
    }
  }, "Volunteering."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      color: 'var(--text-body)',
      fontWeight: 'var(--fw-light)',
      fontSize: '1.1rem',
      lineHeight: 'var(--lh-body)',
      maxWidth: 700,
      textAlign: 'left',
      margin: '0 0 40px'
    }
  }, "Beyond my technical experience, I'm committed to giving back to my communities through active engagement and volunteer work."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 32,
      justifyContent: 'space-evenly'
    }
  }, DATA.volunteering.map((v, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: '0 1 520px',
      maxWidth: 620
    }
  }, /*#__PURE__*/React.createElement(VolunteerCard, {
    org: v.org,
    logo: v.logo,
    roles: v.roles,
    bullets: v.bullets
  })))));
}

// ---- Projects -----------------------------------------------------------
function GithubLink({
  href
}) {
  if (!href) return null;
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      display: 'inline-block',
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${ASSET}/icons/github-dark.png`,
    alt: "GitHub",
    style: {
      width: 30
    }
  }));
}
function MiniProject({
  p
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '0 1 440px',
      maxWidth: 460,
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: p.github,
    style: {
      color: 'var(--text-body)',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-h3)',
      fontWeight: 'var(--fw-bold)',
      margin: '0 0 1rem',
      color: 'var(--text-body)'
    }
  }, p.title)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      color: 'var(--text-body)',
      fontSize: '1rem',
      lineHeight: 'var(--lh-body)',
      margin: '0 0 12px'
    }
  }, p.description), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, p.tags.map((t, i) => /*#__PURE__*/React.createElement(Tag, {
    key: i,
    category: t.category
  }, t.label))), /*#__PURE__*/React.createElement(GithubLink, {
    href: p.github
  }));
}
function Divider() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '40px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      height: 1,
      width: '35%',
      background: 'var(--border-hairline)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'rgba(0,0,0,.2)',
      fontSize: '1.5rem',
      margin: '0 10px',
      lineHeight: 0
    }
  }, "\u2022"), /*#__PURE__*/React.createElement("span", {
    style: {
      height: 1,
      width: '35%',
      background: 'var(--border-hairline)'
    }
  }));
}
function Projects() {
  return /*#__PURE__*/React.createElement("section", {
    id: "projects",
    style: {
      background: 'var(--bg-page)',
      padding: '60px 8vw 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement(SectionStem, {
    height: 160
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      color: 'var(--text-heading)',
      fontSize: 'clamp(36px,6vw,60px)',
      fontWeight: 'var(--fw-bold)',
      margin: '0 0 12px',
      textAlign: 'left'
    }
  }, "Projects."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      color: 'var(--text-body)',
      fontWeight: 'var(--fw-light)',
      fontSize: '1.1rem',
      lineHeight: 'var(--lh-body)',
      maxWidth: 700,
      textAlign: 'left',
      margin: '0 0 48px'
    }
  }, "In my spare time I work on coding projects to sharpen my skills \u2014 from personal passion projects to real-world applications \u2014 exploring new technologies and building practical solutions."))), DATA.projects.map((p, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, /*#__PURE__*/React.createElement(ProjectCard, _extends({}, p, {
    reverse: i % 2 === 1,
    framed: !p.laptop,
    github: p.github ? {
      url: p.github,
      img: `${ASSET}/icons/github-dark.png`
    } : null
  })), i < DATA.projects.length - 1 && /*#__PURE__*/React.createElement(Divider, null))), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 48,
      justifyContent: 'space-between',
      maxWidth: 1000,
      margin: '0 auto'
    }
  }, DATA.miniProjects.map((p, i) => /*#__PURE__*/React.createElement(MiniProject, {
    key: i,
    p: p
  }))));
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
  return /*#__PURE__*/React.createElement("section", {
    id: "vanta-contact",
    style: {
      position: 'relative',
      background: 'var(--bg-network)',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '100px 0 80px',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 2,
      display: 'flex',
      flexWrap: stack ? 'wrap' : 'nowrap',
      gap: 72,
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      maxWidth: 1340,
      margin: '0 auto',
      padding: '0 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 440px',
      maxWidth: 680,
      background: 'var(--surface-contact)',
      borderRadius: 'var(--radius-contact)',
      padding: '8px 36px 36px',
      boxShadow: 'var(--shadow-glow-light)'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      color: '#fff',
      fontSize: 36,
      fontWeight: 'var(--fw-bold)',
      textAlign: 'left'
    }
  }, "Contact."), /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Your Name",
    name: "name",
    placeholder: "What's your name?",
    required: true
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Your Email",
    name: "email",
    type: "email",
    placeholder: "How do I contact you?",
    required: true
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Your Message",
    name: "message",
    placeholder: "Send me a message!",
    multiline: true,
    rows: 6,
    required: true
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    type: "submit",
    style: {
      alignSelf: 'flex-start'
    }
  }, "Submit"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--accent-bright)',
      fontWeight: 500,
      minHeight: 20
    }
  }, status)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 28,
      justifyContent: 'center',
      paddingTop: 8
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://www.linkedin.com/in/krisna-bou/"
  }, /*#__PURE__*/React.createElement("img", {
    src: `${ASSET}/icons/linkedin.png`,
    alt: "LinkedIn",
    style: {
      width: 38
    }
  })), /*#__PURE__*/React.createElement("a", {
    href: "https://github.com/Krisna-Bou"
  }, /*#__PURE__*/React.createElement("img", {
    src: `${ASSET}/icons/github.png`,
    alt: "GitHub",
    style: {
      width: 38
    }
  })), /*#__PURE__*/React.createElement("a", {
    href: "mailto:krisna.bou@outlook.com"
  }, /*#__PURE__*/React.createElement("img", {
    src: `${ASSET}/icons/mail.png`,
    alt: "Email",
    style: {
      width: 38
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement("img", {
    className: "float-photo",
    src: `${ASSET}/photo/Krisna.jpg`,
    alt: "Krisna Bou",
    style: {
      width: 'clamp(180px,22vw,300px)',
      borderRadius: '50%'
    }
  }))));
}
Object.assign(window, {
  Hero,
  About,
  Experience,
  Volunteering,
  Projects,
  Contact
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/sections.jsx", error: String((e && e.message) || e) }); }

__ds_ns.DatePill = __ds_scope.DatePill;

__ds_ns.ExperienceCard = __ds_scope.ExperienceCard;

__ds_ns.ProjectCard = __ds_scope.ProjectCard;

__ds_ns.TimelineRow = __ds_scope.TimelineRow;

__ds_ns.VolunteerCard = __ds_scope.VolunteerCard;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.SectionStem = __ds_scope.SectionStem;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.NavBar = __ds_scope.NavBar;

})();
