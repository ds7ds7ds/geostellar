import './App.css'

const services = [
  {
    id: '01',
    title: 'Drilling Licenses & Permits',
    tagline: 'Keep projects legal across 6 NE states',
    bullets: [
      'Qualified Supervisor — MA, RI, CT, ME, NJ, NY',
      'Permit applications & agency coordination',
      'Well completion reports & state filing',
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="4" width="13" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M7 9h6M7 13h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M14 2v4M10 2v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="18" cy="17" r="4" fill="var(--accent-bg)" stroke="var(--accent)" strokeWidth="1.5"/>
        <path d="M16.5 17l1 1 2-2" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: '02',
    title: 'Site Supervision & Optimization',
    tagline: 'More bores per week, lower NPT',
    bullets: [
      'Rig performance benchmarking & AutoDriller tuning',
      'NPT root-cause analysis & prevention',
      'Grout QC — mix, placement, thermal performance',
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 10v2l1.5 1.5" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: '03',
    title: 'Surveying, TRT & Fiber Monitoring',
    tagline: 'Verified subsurface data, not estimates',
    bullets: [
      'Bore trajectory surveys inside 1.5" HDPE quad-loop',
      'Thermal Response Test — conductivity & bore resistance',
      'Fiber DTS + long-term aquifer thermal profiling',
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 4v16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2"/>
        <circle cx="12" cy="9" r="2.5" stroke="var(--accent)" strokeWidth="1.5"/>
        <path d="M7 9h2M15 9h2" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M5 18c0-3.866 3.134-7 7-7s7 3.134 7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: '04',
    title: 'Geothermal System Design',
    tagline: 'Engineering from geology to loop commissioning',
    bullets: [
      'Borefield sizing, spacing & thermal interference model',
      'Loop design — pipe, header, flow, pressure',
      'Design-assist for GCs, MEP engineers, HVAC contractors',
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="14" width="4" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="10" y="9" width="4" height="12" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="17" y="4" width="4" height="17" rx="1" stroke="var(--accent)" strokeWidth="1.5"/>
        <path d="M5 14V8l7-5 9 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
    ),
  },
  {
    id: '05',
    title: 'Inclined & Collocated Drilling',
    tagline: 'Sites vertical drilling cannot reach',
    bullets: [
      'True directional control — not mast tilt',
      'Multi-bore from single surface entry point',
      'Rig conversion engineering, anti-collision compliance',
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M6 4v16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M12 4l4 16" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round"/>
        <path d="M18 4l-2 16" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 2"/>
        <path d="M4 20h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.4"/>
        <circle cx="12" cy="4" r="2" fill="var(--accent-bg)" stroke="var(--accent)" strokeWidth="1.5"/>
      </svg>
    ),
    featured: true,
  },
  {
    id: '06',
    title: 'HVAC Sales & ROI Support',
    tagline: 'Turn objections into signed contracts',
    bullets: [
      'Site feasibility study — loads, oeology, bore count',
      '20-year NPV model with IRA incentive stack',
      'Proposal narrative & technical responses to AHJ/lenders',
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M4 17l4-4 3 3 5-6 4-3" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
]

const credentials = [
  { value: 'MA · RI · CT · ME · NJ · NY', label: 'Licensed Driller' },
  { value: '20+ yrs', label: 'Drilling engineering' },
  { value: '32,000 ft', label: 'Max ERD well (Qatar)' },
  { value: '42%', label: 'Bore reduction — inclined design' },
  { value: 'IGSHPA', label: 'Accredited Installer' },
  { value: 'AEE GSD', label: 'Geothermal specialist' },
]

export default function App() {
  return (
    <div className="site">

      {/* NAV */}
      <nav className="nav">
        <div className="nav-brand">
          <span className="nav-logo">GeoStellar</span>
          <span className="nav-entity">Engineering LLC</span>
        </div>
        <div className="nav-contact">
          <a href="mailto:dmitry@geostellar.io">dmitry@geostellar.io</a>
          <span className="nav-sep">·</span>
          <a href="tel:+17814281982">+1 781 428 1982</a>
        </div>
      </nav>

      {/* HERO */}
      <header className="hero">
        <div className="hero-inner">
          <p className="hero-eyebrow">Geothermal & Drilling Engineering</p>
          <h1 className="hero-title">
            Petroleum-grade precision.<br />
            <span className="hero-accent">Applied to geothermal.</span>
          </h1>
          <p className="hero-sub">
            We design, supervise, and engineer geothermal ground systems — vertical, inclined, and collocated — for drilling companies, general contractors, and developers across the Northeast.
          </p>
          <div className="hero-cta">
            <a href="mailto:dmitry@geostellar.io" className="btn-primary">Start a conversation</a>
            <span className="hero-note">Licensed driller · 6 states · Based in MA</span>
          </div>
        </div>
        <div className="hero-drill">
          <svg width="120" height="320" viewBox="0 0 120 320" fill="none" aria-hidden="true">
            <rect x="52" y="10" width="16" height="180" rx="3" fill="#1e2a1e" stroke="#2e5c3a" strokeWidth="1"/>
            <polygon points="60,2 46,14 74,14" fill="#2e5c3a"/>
            <line x1="60" y1="190" x2="60" y2="310" stroke="#3dba6f" strokeWidth="2" strokeDasharray="6 4" className="drill-string"/>
            <rect x="36" y="186" width="48" height="8" rx="2" fill="#2e5c3a"/>
            <line x1="68" y1="220" x2="76" y2="220" stroke="#2e5c3a" strokeWidth="1"/>
            <line x1="68" y1="255" x2="76" y2="255" stroke="#2e5c3a" strokeWidth="1"/>
            <line x1="68" y1="290" x2="76" y2="290" stroke="#3dba6f" strokeWidth="1"/>
            <text x="79" y="224" fontSize="9" fill="#4a7a52" fontFamily="monospace">150m</text>
            <text x="79" y="259" fontSize="9" fill="#4a7a52" fontFamily="monospace">300m</text>
            <text x="79" y="294" fontSize="9" fill="#3dba6f" fontFamily="monospace">TRT ✓</text>
            <polygon points="55,310 65,310 60,320" fill="#3dba6f"/>
            <path d="M60 210 Q75 240 88 310" stroke="#3dba6f" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.5"/>
            <polygon points="85,307 91,314 90,305" fill="#3dba6f" opacity="0.5"/>
          </svg>
        </div>
      </header>

      <section className="services">
        <div className="section-header">
          <span className="section-label">What we do</span>
          <span className="section-count">6 service lines</span>
        </div>
        <div className="services-grid">
          {services.map(s => (
            <div key={s.id} className={`svc-card${s.featured ? ' svc-card--featured' : ''}`}>
              <div className="svc-top">
                <div className="svc-icon">{s.icon}</div>
                <span className="svc-id">{s.id}</span>
              </div>
              <h3 className="svc-title">{s.title}</h3>
              <p className="svc-tagline">{s.tagline}</p>
              <ul className="svc-bullets">
                {s.bullets.map((b, i) => (
                  <li key={i}>{b=,�b                  ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="creds">
        <div className="section-header">
          <span className="section-label">Credentials</span>
        </div>
        <div className="creds-grid">
          {credentials.map((c, i) => (
            <div key={i} className="cred-item">
              <div className="cred-value">{c.value}</div>
              <div className="cred-label">{c.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <p className="cta-text">Ready to add GeoStellar to your project team?</p>
        <div className="cta-links">
          <a href="mailto:dmitry@geostellar.io" className="btn-primary">dmitry@geostellar.io</a>
          <a href="tel:+17814281982" className="btn-ghost">+1 781 428 1982</a>
        </div>
      </section>

      <footer className="footer">
        <span>GeoStellar Engineering LLC · Stoughton, MA · EIN 41-4724463</span>
        <span>GeoStellar Engineering LLC (est. 2026, MA) is not affiliated with the former Geostellar Inc. of West Virginia.</span>
      </footer>

    </div>
  )
}
