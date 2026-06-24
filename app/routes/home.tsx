import type { Route } from "./+types/home";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "Zenithustra — Build Real. Grow Real. Scale Real." },
    {
      name: "description",
      content:
        "Zenithustra Private Limited builds agritech management systems, gym platforms, mobile apps, and physical infrastructure. A NexLogos ACCRNOVA Group company.",
    },
    { property: "og:title", content: "Zenithustra — Build Real. Grow Real. Scale Real." },
    {
      property: "og:description",
      content:
        "Zenithustra Private Limited delivers physical infrastructure projects, technical and software platforms, and manages Agritech, Gym Management, and App Development verticals from Bangalore.",
    },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ];
}

// ─── SVG ICONS ────────────────────────────────────────────────────────────────

function IconLeaf() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#4CAF63" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/>
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
    </svg>
  );
}

function IconDumbbell() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#60A5FA" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6.5 6.5h11M6.5 17.5h11M3 9v6M21 9v6M7 6h-.5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1H7M17 6h.5a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H17"/>
      <line x1="6.5" y1="12" x2="17.5" y2="12"/>
    </svg>
  );
}

function IconPhone() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
      <line x1="12" y1="18" x2="12.01" y2="18"/>
    </svg>
  );
}

function IconBuilding() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#FCD34D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="15" rx="1"/>
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
      <line x1="12" y1="12" x2="12" y2="12"/>
      <path d="M8 12v.01M12 12v.01M16 12v.01M8 16v.01M12 16v.01M16 16v.01"/>
      <rect x="9" y="19" width="6" height="3"/>
    </svg>
  );
}

function IconShield() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2DD4BF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <polyline points="9 12 11 14 15 10"/>
    </svg>
  );
}

function IconArrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 7h10M7 2l5 5-5 5"/>
    </svg>
  );
}

// ─── PARTICLES ────────────────────────────────────────────────────────────────

const particles = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  left: `${(i * 37 + 5) % 100}%`,
  top: `${(i * 29 + 10) % 90}%`,
  duration: `${6 + (i % 6) * 1.5}s`,
  delay: `${(i * 0.4) % 5}s`,
  drift: `${(i % 2 === 0 ? 1 : -1) * (10 + (i % 5) * 10)}px`,
  size: i % 4 === 0 ? 4 : 2,
}));

// ─── VERTICAL CARD ────────────────────────────────────────────────────────────

interface VerticalCardProps {
  icon: React.ReactNode;
  name: string;
  headline: string;
  body: string;
  features: string[];
  ctaLabel: string;
  accentColor: string;
}

function VerticalCard({ icon, name, headline, body, features, ctaLabel, accentColor }: VerticalCardProps) {
  return (
    <div className="z-vertical-card" style={{ "--accent-color": accentColor } as React.CSSProperties}>
      <div className="z-vertical-card-header">
        <div className="z-vertical-icon">{icon}</div>
        <span className="z-vertical-badge">Active</span>
      </div>
      <p className="z-vertical-name">{name}</p>
      <h3 className="z-vertical-headline">{headline}</h3>
      <p className="z-vertical-body">{body}</p>
      <ul className="z-vertical-features">
        {features.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
      <a href="#contact" className="z-vertical-cta">
        {ctaLabel} <IconArrow />
      </a>
    </div>
  );
}

// ─── BUILDING VISUAL ─────────────────────────────────────────────────────────

function BuildingVisual() {
  return (
    <div className="z-building-visual">
      <div className="z-building-sketch">
        <svg viewBox="0 0 480 380" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
          {/* Sky gradient */}
          <defs>
            <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0D110C"/>
              <stop offset="100%" stopColor="#131A11"/>
            </linearGradient>
            <linearGradient id="accentGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#2D7A3E" stopOpacity="0.4"/>
              <stop offset="100%" stopColor="#4CAF63" stopOpacity="0.1"/>
            </linearGradient>
          </defs>
          <rect width="480" height="380" fill="url(#skyGrad)"/>

          {/* Ground */}
          <rect x="0" y="320" width="480" height="60" fill="#0D110C"/>
          <line x1="0" y1="320" x2="480" y2="320" stroke="#2D7A3E" strokeWidth="1.5" strokeOpacity="0.6"/>

          {/* Main building body */}
          <rect x="80" y="120" width="200" height="200" fill="none" stroke="#2D7A3E" strokeWidth="1.5" strokeOpacity="0.8"/>
          <rect x="81" y="121" width="198" height="198" fill="url(#accentGrad)"/>

          {/* Roof / top structure */}
          <polygon points="80,120 180,60 280,120" fill="none" stroke="#4CAF63" strokeWidth="1.5" strokeOpacity="0.7"/>
          <line x1="180" y1="60" x2="180" y2="120" stroke="#4CAF63" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="4,3"/>

          {/* Windows grid */}
          {[0,1,2,3].map(row => (
            [0,1,2].map(col => (
              <rect
                key={`w-${row}-${col}`}
                x={105 + col * 55}
                y={140 + row * 40}
                width={28}
                height={22}
                rx="2"
                fill={row * col % 3 === 0 ? "rgba(76,175,99,0.15)" : "rgba(255,255,255,0.04)"}
                stroke="#2D7A3E"
                strokeWidth="0.8"
                strokeOpacity="0.5"
              />
            ))
          ))}

          {/* Door */}
          <rect x="160" y="270" width="40" height="50" rx="2" fill="rgba(76,175,99,0.1)" stroke="#4CAF63" strokeWidth="1" strokeOpacity="0.6"/>
          <circle cx="193" cy="295" r="2" fill="#4CAF63" fillOpacity="0.6"/>

          {/* Side building */}
          <rect x="300" y="180" width="100" height="140" fill="none" stroke="#2D7A3E" strokeWidth="1" strokeOpacity="0.5"/>
          <rect x="301" y="181" width="98" height="138" fill="rgba(45,122,62,0.05)"/>
          {[0,1,2].map(row => (
            [0,1].map(col => (
              <rect
                key={`sw-${row}-${col}`}
                x={315 + col * 38}
                y={196 + row * 36}
                width={20}
                height={18}
                rx="1"
                fill="rgba(76,175,99,0.08)"
                stroke="#2D7A3E"
                strokeWidth="0.7"
                strokeOpacity="0.4"
              />
            ))
          ))}

          {/* Crane silhouette */}
          <line x1="340" y1="80" x2="340" y2="180" stroke="#D97706" strokeWidth="1.5" strokeOpacity="0.6"/>
          <line x1="310" y1="90" x2="395" y2="90" stroke="#D97706" strokeWidth="1.5" strokeOpacity="0.6"/>
          <line x1="395" y1="90" x2="395" y2="120" stroke="#D97706" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="3,3"/>
          <line x1="340" y1="80" x2="320" y2="95" stroke="#D97706" strokeWidth="1" strokeOpacity="0.3"/>

          {/* Measurement lines */}
          <line x1="40" y1="120" x2="40" y2="320" stroke="#4CAF63" strokeWidth="0.8" strokeOpacity="0.3" strokeDasharray="3,4"/>
          <line x1="35" y1="120" x2="45" y2="120" stroke="#4CAF63" strokeWidth="0.8" strokeOpacity="0.4"/>
          <line x1="35" y1="320" x2="45" y2="320" stroke="#4CAF63" strokeWidth="0.8" strokeOpacity="0.4"/>
          <text x="28" y="225" fontSize="9" fill="#4CAF63" fillOpacity="0.5" transform="rotate(-90, 28, 225)">200m</text>

          {/* Grid overlay */}
          {[1,2,3,4,5].map(n => (
            <line key={`hg-${n}`} x1="0" y1={n * 64} x2="480" y2={n * 64} stroke="#2D7A3E" strokeWidth="0.3" strokeOpacity="0.15"/>
          ))}
          {[1,2,3,4,5,6,7].map(n => (
            <line key={`vg-${n}`} x1={n * 68} y1="0" x2={n * 68} y2="380" stroke="#2D7A3E" strokeWidth="0.3" strokeOpacity="0.15"/>
          ))}

          {/* Corner marks */}
          <path d="M460 16 L460 8 L452 8" fill="none" stroke="#4CAF63" strokeWidth="1" strokeOpacity="0.4"/>
          <path d="M20 16 L20 8 L28 8" fill="none" stroke="#4CAF63" strokeWidth="1" strokeOpacity="0.4"/>

          {/* Label */}
          <text x="24" y="356" fontSize="9" fill="#7A8A75" fontFamily="monospace" letterSpacing="2">ZENITHUSTRA · PHYSICAL PROJECTS</text>
        </svg>
      </div>
    </div>
  );
}

// ─── CONTACT FORM ─────────────────────────────────────────────────────────────

function ContactForm() {
  return (
    <form className="z-form" onSubmit={(e) => e.preventDefault()}>
      <div className="z-form-row">
        <div className="z-form-group">
          <label className="z-form-label">Name</label>
          <input className="z-form-input" type="text" placeholder="Your full name" />
        </div>
        <div className="z-form-group">
          <label className="z-form-label">Email</label>
          <input className="z-form-input" type="email" placeholder="you@company.com" />
        </div>
      </div>
      <div className="z-form-group">
        <label className="z-form-label">Project Type</label>
        <select className="z-form-select">
          <option value="">Select a vertical...</option>
          <option value="agritech">Agritech Management System</option>
          <option value="gym">Gym / Fitness Platform</option>
          <option value="app">App Development</option>
          <option value="physical">Physical Construction</option>
        </select>
      </div>
      <div className="z-form-group">
        <label className="z-form-label">Project Description</label>
        <textarea
          className="z-form-textarea"
          placeholder="Briefly describe your project, timeline, and goals..."
        />
      </div>
      <button type="submit" className="z-form-submit">
        Submit Project Brief →
      </button>
    </form>
  );
}

// ─── HOME PAGE ────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div style={{ fontFamily: "var(--font-body)", background: "var(--z-black)" }}>

      {/* ── NAVBAR */}
      <nav className="z-navbar">
        <a href="#" className="z-navbar-brand">
          <div className="z-lettermark"><span>Z</span></div>
          <div className="z-brand-text">
            <span className="z-brand-name">Zenithustra</span>
            <span className="z-brand-sub">Private Limited</span>
          </div>
        </a>
        <div className="z-nav-links">
          <a href="#about" className="z-nav-link">About</a>
          <a href="#verticals" className="z-nav-link">Verticals</a>
          <a href="#projects" className="z-nav-link">Projects</a>
          <a href="#contact" className="z-nav-link">Contact</a>
          <a href="#contact" className="z-nav-cta">Start a Project →</a>
        </div>
      </nav>

      {/* ── HERO */}
      <section className="z-hero">
        <div className="z-hero-particles" aria-hidden="true">
          {particles.map((p) => (
            <div
              key={p.id}
              className="z-particle"
              style={{
                left: p.left,
                top: p.top,
                width: p.size,
                height: p.size,
                "--duration": p.duration,
                "--delay": p.delay,
                "--drift": p.drift,
              } as React.CSSProperties}
            />
          ))}
        </div>

        <div className="z-hero-inner">
          <div className="z-eyebrow">
            <div className="z-eyebrow-line" />
            <span className="z-eyebrow-text">Zenithustra Private Limited</span>
            <div className="z-eyebrow-line" />
          </div>

          <h1 className="z-hero-h1">
            <span className="line-white">Build Real.</span>
            <span className="line-green">Grow Real.</span>
            <span className="line-white">Scale Real.</span>
          </h1>

          <p className="z-hero-sub">
            Zenithustra delivers physical infrastructure, technology platforms, and managed systems
            across agritech, fitness, and digital product development — from Bangalore to the world.
          </p>

          <div className="z-hero-ctas">
            <a href="#verticals" className="z-btn-primary">Explore Our Verticals →</a>
            <a href="#projects" className="z-btn-ghost">View Projects</a>
          </div>
        </div>
      </section>

      {/* ── STATS BAR */}
      <div className="z-stats-bar">
        {[
          { value: "4", label: "Active Verticals" },
          { value: "₹Cr+", label: "Project Value Under Management" },
          { value: "Bangalore", label: "Headquarters" },
          { value: "Physical + Digital", label: "Delivery Modes" },
        ].map((s) => (
          <div key={s.label} className="z-stat-item">
            <span className="z-stat-value">{s.value}</span>
            <span className="z-stat-label">{s.label}</span>
          </div>
        ))}
      </div>

      {/* ── VERTICALS */}
      <section className="z-verticals" id="verticals">
        <div className="z-verticals-inner">
          <h2 className="z-section-title">Four Pillars.</h2>
          <p className="z-section-sub">
            Every vertical we manage is run with the same operational standard.
          </p>

          <div className="z-vertical-cards">
            <VerticalCard
              icon={<IconLeaf />}
              name="Agritech Infrastructure"
              headline="Managing the intelligence layer of modern agriculture."
              body="Zenithustra builds and operates farm management systems, precision agriculture data platforms, crop lifecycle tracking tools, and agri-supply chain coordination software for Indian farmers and agribusinesses."
              features={[
                "Farm Management Systems (FMS)",
                "Precision agriculture data dashboards",
                "Crop lifecycle & yield tracking",
                "Agri-supply chain coordination",
                "IoT sensor integration & monitoring",
                "Market price intelligence feeds",
              ]}
              ctaLabel="Explore Agritech"
              accentColor="#4CAF63"
            />

            <VerticalCard
              icon={<IconDumbbell />}
              name="Fitness Platform Management"
              headline="End-to-end management systems for fitness businesses."
              body="From single-location gyms to multi-city fitness chains, Zenithustra builds and manages member management platforms, class booking systems, trainer scheduling, equipment tracking, and performance analytics."
              features={[
                "Member lifecycle management",
                "Class & session booking engine",
                "Trainer scheduling and payroll",
                "Equipment inventory & maintenance",
                "Revenue & retention analytics",
                "Mobile app for members",
              ]}
              ctaLabel="Explore Gym Management"
              accentColor="#60A5FA"
            />

            <VerticalCard
              icon={<IconPhone />}
              name="App Development"
              headline="Custom apps. Delivered fast. Built to last."
              body="Zenithustra designs and delivers mobile and web applications for startups, enterprises, and internal ACCRNOVA Group entities. Full-stack React Native, Flutter, and web application development."
              features={[
                "iOS & Android native app development",
                "Progressive Web Apps (PWA)",
                "React Native & Flutter delivery",
                "Backend API & Durable Object architecture",
                "App store submission & maintenance",
                "White-label product licensing",
              ]}
              ctaLabel="View App Portfolio"
              accentColor="#A78BFA"
            />

            <VerticalCard
              icon={<IconBuilding />}
              name="Physical Infrastructure"
              headline="From blueprint to occupation. We build."
              body="Commercial construction, modern agricultural infrastructure, premium hospitality fit-outs, and industrial facilities. Zenithustra manages the full project lifecycle from design approval to handover."
              features={[
                "Commercial construction management",
                "Agricultural infrastructure development",
                "Hospitality & interior fit-outs",
                "Industrial facility development",
                "Project lifecycle management (plan to handover)",
                "Sustainable construction standards",
              ]}
              ctaLabel="View Projects"
              accentColor="#FCD34D"
            />
          </div>
        </div>
      </section>

      {/* ── TECHNOLOGY */}
      <section className="z-technology" id="technology">
        <div className="z-technology-inner">
          <h2 className="z-tech-title">Powered by Intelligence.</h2>
          <p className="z-tech-sub">Every Zenithustra platform is governed by Axiom AI.</p>

          <div className="z-tech-boxes">
            {/* Box 1 — Axiom */}
            <div className="z-tech-box">
              <span className="z-tech-badge teal">Axiom Integration</span>
              <h3 className="z-tech-box-title">AI-Governed Operations</h3>
              <p className="z-tech-box-body">
                Every AI system deployed across Zenithustra's platforms — from crop yield predictions
                to gym attendance forecasting — runs through the Axiom Circuit Breaker, ensuring
                compliance, accuracy, and audit-readiness.
              </p>
              <a href="https://axiom-landing-d1wced.camelai.app" className="z-tech-link teal" target="_blank" rel="noopener noreferrer">
                Learn about Axiom <IconArrow />
              </a>
            </div>

            {/* Box 2 — Infrastructure */}
            <div className="z-tech-box">
              <span className="z-tech-badge blue">Infrastructure</span>
              <h3 className="z-tech-box-title">Cloud-Native Architecture</h3>
              <p className="z-tech-box-body">
                Zenithustra platforms are built on Cloudflare Workers and Durable Objects — globally
                distributed, zero-cold-start, infinitely scalable infrastructure. Your data never
                leaves the right jurisdiction.
              </p>
              <a href="#contact" className="z-tech-link blue">
                Technical Architecture <IconArrow />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── ACTIVE FOCUS AREAS */}
      <section className="z-projects" id="projects">
        <div className="z-projects-inner">
          <h2 className="z-section-title">Active Focus Areas.</h2>
          <p className="z-section-sub">Where Zenithustra is building, researching, and operating right now.</p>

          <div className="z-project-grid">
            {/* Fitness & Gym */}
            <div className="z-project-card" style={{ "--project-accent": "#2563EB" } as React.CSSProperties}>
              <div className="z-project-header">
                <span className="z-project-vertical" style={{ color: "#60A5FA" }}>Fitness & Wellness</span>
                <span className="z-project-status live">Active</span>
              </div>
              <h3 className="z-project-name">Gym & Fitness Operations</h3>
              <p className="z-project-desc">
                Zenithustra operates and manages fitness facilities, bringing modern management systems,
                membership infrastructure, and technology-backed operations to the wellness sector.
                Currently active in the Delhi NCR region.
              </p>
              <div className="z-project-tags">
                {["Fitness", "NCR Region", "Operations"].map((t) => (
                  <span key={t} className="z-project-tag">{t}</span>
                ))}
              </div>
            </div>

            {/* Agriculture */}
            <div className="z-project-card" style={{ "--project-accent": "#4CAF63" } as React.CSSProperties}>
              <div className="z-project-header">
                <span className="z-project-vertical" style={{ color: "#4CAF63" }}>Agriculture</span>
                <span className="z-project-status in-dev">Research Phase</span>
              </div>
              <h3 className="z-project-name">Agricultural Research — Haryana & NCR</h3>
              <p className="z-project-desc">
                Active agricultural research and land-use projects across Haryana and the National
                Capital Region. Focused on modern farming infrastructure, agritech integration,
                and sustainable land management for the region's agricultural communities.
              </p>
              <div className="z-project-tags">
                {["Agriculture", "Haryana", "NCR", "Research"].map((t) => (
                  <span key={t} className="z-project-tag">{t}</span>
                ))}
              </div>
            </div>

            {/* Construction */}
            <div className="z-project-card" style={{ "--project-accent": "#D97706" } as React.CSSProperties}>
              <div className="z-project-header">
                <span className="z-project-vertical" style={{ color: "#FCD34D" }}>Construction</span>
                <span className="z-project-status in-dev">Research Phase</span>
              </div>
              <h3 className="z-project-name">Construction Research — Haryana & NCR</h3>
              <p className="z-project-desc">
                Zenithustra is conducting construction feasibility and infrastructure research
                across Haryana and Greater NCR — evaluating commercial, residential, and
                agri-industrial development opportunities in high-growth corridors of the region.
              </p>
              <div className="z-project-tags">
                {["Construction", "Haryana", "NCR", "Infrastructure"].map((t) => (
                  <span key={t} className="z-project-tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PHYSICAL PROJECT HIGHLIGHTS */}
      <section id="about" style={{ background: "var(--z-black)" }}>
        <div className="z-physical">
          <div className="z-physical-grid">
            <BuildingVisual />
            <div>
              <h2 className="z-physical-title">We Build What Others Plan.</h2>
              <p className="z-physical-body">
                Zenithustra is actively engaged in construction and infrastructure research across Haryana and the National Capital Region — one of India's fastest-growing development corridors. From site evaluation to project planning, we bring rigorous, technology-backed processes to every engagement.
              </p>
              <div className="z-physical-stats">
                <div className="z-physical-stat">
                  <span className="z-physical-stat-num">Haryana</span>
                  <span className="z-physical-stat-label">Primary research corridor</span>
                </div>
                <div className="z-physical-stat">
                  <span className="z-physical-stat-num">NCR</span>
                  <span className="z-physical-stat-label">Active operations region</span>
                </div>
                <div className="z-physical-stat">
                  <span className="z-physical-stat-num">Bangalore</span>
                  <span className="z-physical-stat-label">Technology & HQ base</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── AXIOM AI GOVERNANCE BADGE */}
      <div className="z-axiom">
        <div className="z-axiom-inner">
          <div className="z-axiom-icon">
            <IconShield />
          </div>
          <div className="z-axiom-text">
            <span className="z-eyebrow-text" style={{ color: "#2DD4BF", letterSpacing: "0.18em" }}>
              AI GOVERNANCE
            </span>
            <h3 className="z-axiom-headline">Axiom AI Governance</h3>
            <p className="z-axiom-body">
              All digital platforms operated by Zenithustra are governed by Axiom's compliance
              infrastructure — part of our commitment to deterministic, auditable technology.
              Every model inference is traceable, every decision is reversible.
            </p>
          </div>
          <a href="https://accrnova.com" className="z-axiom-link" target="_blank" rel="noopener noreferrer">
            ACCRNOVA Group →
          </a>
        </div>
      </div>

      {/* ── CONTACT */}
      <section className="z-contact" id="contact">
        <div className="z-contact-inner">
          <div>
            <h2 className="z-contact-title">Start a Project.</h2>
            <p className="z-contact-sub">
              Whether you need a farm management system, a gym platform, a mobile app, or a physical
              facility — we engage with a discovery call and a clear proposal within 5 business days.
            </p>
            <div className="z-contact-details">
              <div className="z-contact-item">
                <div className="z-contact-icon">📍</div>
                <span className="z-contact-info">Bangalore, Karnataka, India</span>
              </div>
              <div className="z-contact-item">
                <div className="z-contact-icon">📞</div>
                <span className="z-contact-info">
                  <a href="tel:+918826164299">+91 8826164299</a>
                </span>
              </div>
              <div className="z-contact-item">
                <div className="z-contact-icon">📧</div>
                <span className="z-contact-info">
                  <a href="mailto:himanshu.s.sorout@gmail.com">himanshu.s.sorout@gmail.com</a>
                </span>
              </div>
              <div className="z-contact-item">
                <div className="z-contact-icon">🏢</div>
                <span className="z-contact-info">Part of ACCRNOVA Group</span>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* ── FOOTER */}
      <footer className="z-footer">
        <div className="z-footer-inner">
          <div className="z-footer-brand">
            <span className="z-footer-wordmark">ZENITHUSTRA</span>
            <span className="z-footer-group">A NexLogos · ACCRNOVA Group Company</span>
          </div>
          <div className="z-footer-links">
            <a href="#verticals" className="z-footer-link">Verticals</a>
            <a href="#projects" className="z-footer-link">Projects</a>
            <a href="https://accrnova.com" className="z-footer-link" target="_blank" rel="noopener noreferrer">ACCRNOVA Group</a>
            <a href="#" className="z-footer-link">AryaSolon</a>
            <a href="https://axiom-landing-d1wced.camelai.app" className="z-footer-link" target="_blank" rel="noopener noreferrer">Axiom</a>
          </div>
          <p className="z-footer-copy">© 2026 Zenithustra Private Limited. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}
