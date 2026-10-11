import { useEffect, useState } from 'react'
import heroPhoto from './assets/WhatsApp Image 2026-10-11 at 4.23.21 PM.jpeg'
import strengthPhoto from './assets/WhatsApp Image 2026-10-11 at 4.26.38 PM.jpeg'
import movementPhoto from './assets/WhatsApp Image 2026-10-11 at 4.23.21 PM (1).jpeg'
import focusPhoto from './assets/WhatsApp Image 2026-10-11 at 4.20.46 PM.jpeg'
import casualPhoto from './assets/WhatsApp Image 2026-10-11 at 3.36.19 PM.jpeg'
import shirtlessPhoto from './assets/WhatsApp Image 2026-10-11 at 3.57.24 PM.jpeg'
import gymMirrorPhoto from './assets/WhatsApp Image 2026-10-11 at 3.57.24 PM (1).jpeg'
import workoutVideo from './assets/WhatsApp Video 2026-10-11 at 4.26.55 PM.mp4'
import './App.css'

const photos = {
  hero: heroPhoto,
  strength: strengthPhoto,
  movement: movementPhoto,
  focus: focusPhoto,
  about: casualPhoto,
  shirtless: shirtlessPhoto,
  gymMirror: gymMirrorPhoto,
}

function ArrowIcon({ diagonal = false }) {
  return diagonal ? (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M5 15 15 5M6 5h9v9" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ) : (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M3.5 10h12m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

function App() {
  const [introOpen, setIntroOpen] = useState(() => {
    if (typeof window === 'undefined') return false
    try {
      return window.localStorage.getItem('sumedh-site-entered') !== 'true'
    } catch {
      return true
    }
  })
  const [menuOpen, setMenuOpen] = useState(false)
  const [autoplayAllowed, setAutoplayAllowed] = useState(() =>
    typeof window !== 'undefined' && !window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updateAutoplay = () => setAutoplayAllowed(!motionPreference.matches)

    updateAutoplay()
    motionPreference.addEventListener('change', updateAutoplay)
    return () => motionPreference.removeEventListener('change', updateAutoplay)
  }, [])

  const enterSite = () => {
    try {
      window.localStorage.setItem('sumedh-site-entered', 'true')
    } catch {
      // The welcome screen can still be dismissed when storage is unavailable.
    }
    setIntroOpen(false)
  }

  if (introOpen) {
    return (
      <section className="welcome-screen" aria-label="Welcome to Sumedh Sood's website">
        <div className="welcome-copy">
          <a className="wordmark welcome-wordmark" href="#welcome" aria-label="Sumedh Sood">
            <span className="wordmark-mark">S</span>
            <span className="wordmark-name">SUMEDH SOOD<span>FITNESS &amp; PERFORMANCE</span></span>
          </a>
          <div className="welcome-message" id="welcome">
            <p className="eyebrow"><span className="eyebrow-line" /> A LITTLE SOMETHING FOR YOU</p>
            <h1>For you,<br /><span>Sumedh.</span></h1>
            <p className="welcome-note">This website is a gift from your brother, Umesh. Your fitness journey inspires me, and I made this page to celebrate your hard work.</p>
            <p className="welcome-signoff">With love, <span>Umesh</span></p>
            <button className="button button-lime welcome-enter" type="button" onClick={enterSite}>
              Enter Sumedh's website <ArrowIcon />
            </button>
          </div>
          <span className="welcome-footnote">MADE FOR THE JOURNEY AHEAD <span>✳</span></span>
        </div>
        <div className="welcome-visual">
          <img src={photos.hero} alt="Sumedh at the gym" />
          <div className="welcome-image-shade" />
          <span className="welcome-image-label">SUMEDH SOOD <span>/ 01</span></span>
          <span className="welcome-image-mark" aria-hidden="true">S</span>
        </div>
      </section>
    )
  }

  return (
    <main>
      <div className="announcement">
        <span className="announcement-dot" />
        MOVE WITH PURPOSE <span className="announcement-divider">—</span> PROGRESS BUILT FOR REAL LIFE
      </div>

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Sumedh Sood home" onClick={closeMenu}>
          <span className="wordmark-mark">S</span>
          <span className="wordmark-name">SUMEDH SOOD<span>FITNESS &amp; PERFORMANCE</span></span>
        </a>

        <button
          className={`menu-toggle${menuOpen ? ' is-open' : ''}`}
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>

        <nav className={menuOpen ? 'navigation is-open' : 'navigation'} aria-label="Main navigation">
          <a href="#approach" onClick={closeMenu}>The approach</a>
          <a href="#training" onClick={closeMenu}>Training</a>
          <a href="#video" onClick={closeMenu}>Video</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let’s work <ArrowIcon diagonal /></a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> FITNESS CREATOR &amp; ATHLETE</p>
          <h1>Build strength.<br /><span>Become</span> your own<br />standard.</h1>
          <p className="hero-intro">Training, healthy habits, and small wins. A little inspiration to help you show up for yourself.</p>
          <div className="hero-actions">
            <a className="button button-lime" href="#training">Explore the training <ArrowIcon /></a>
            <a className="text-link" href="#about">Meet Sumedh <ArrowIcon /></a>
          </div>
          <div className="hero-footnote"><span className="scroll-mark">↓</span> SCROLL TO EXPLORE</div>
        </div>

        <div className="hero-visual">
          <img src={photos.hero} alt="Sumedh taking a mirror photo at the gym" />
          <div className="hero-image-shade" />
          <div className="hero-stamp" aria-hidden="true"><span>SHOW UP</span><b>✳</b><span>GET STRONG</span><b>✳</b></div>
          <div className="hero-caption"><span>01 / 04</span><span>THE WORK IS YOURS</span></div>
          <div className="hero-side-label">CONSISTENCY OVER EVERYTHING</div>
        </div>
        <div className="hero-index" aria-hidden="true">01</div>
      </section>

      <section className="ticker" aria-label="Training values">
        <div className="ticker-track">
          {Array.from({ length: 2 }).map((_, index) => (
            <div className="ticker-group" key={index} aria-hidden={index === 1}>
              <span>MOVE WITH INTENTION</span><b>✳</b><span>GET A LITTLE STRONGER</span><b>✳</b><span>MAKE IT A LIFESTYLE</span><b>✳</b>
            </div>
          ))}
        </div>
      </section>

      <section className="approach section-pad" id="approach">
        <div className="section-kicker"><span>01</span><span>THE APPROACH</span></div>
        <div className="approach-content">
          <h2>Less all-or-nothing.<br /><span>More you, showing up.</span></h2>
          <div className="approach-note">
            <p>Good training isn’t a punishment or a quick fix. It’s a practice you can come back to—built around your goals, your schedule, and the person you want to become.</p>
            <a className="text-link dark-link" href="#training">Explore the method <ArrowIcon /></a>
          </div>
        </div>
        <div className="values-row">
          <article className="value-card"><span className="value-number">01</span><h3>Train for life</h3><p>Build useful strength, better movement, and confidence that follows you outside the gym.</p></article>
          <article className="value-card"><span className="value-number">02</span><h3>Keep it real</h3><p>Simple guidance and honest progress. No magic plans, impossible rules, or shortcuts.</p></article>
          <article className="value-card"><span className="value-number">03</span><h3>Stay consistent</h3><p>Small sessions add up. Find a rhythm you can keep, then make it your own.</p></article>
        </div>
      </section>

      <section className="training section-pad" id="training">
        <div className="training-heading">
          <div>
            <div className="section-kicker light-kicker"><span>02</span><span>TRAINING &amp; LIFESTYLE</span></div>
            <h2>Make progress<br /><span>your own.</span></h2>
          </div>
          <p>Training ideas, movement, and habits for showing up a little more often.</p>
        </div>
        <div className="training-grid">
          <a className="training-card training-card-large" href="#social">
            <img src={photos.strength} alt="Sumedh showing his back and shoulder definition at the gym" loading="lazy" />
            <span className="training-card-shade" />
            <span className="card-topline"><span>01 — FOUNDATION</span><ArrowIcon diagonal /></span>
            <span className="training-card-copy"><span className="card-tag">GET STRONGER</span><strong>Strength<br />training</strong><span className="card-description">Build a base that lasts.</span></span>
          </a>
          <a className="training-card" href="#social">
            <img src={photos.movement} alt="Sumedh out for a run on a tree-lined road" loading="lazy" />
            <span className="training-card-shade" />
            <span className="card-topline"><span>02 — EVERYDAY</span><ArrowIcon diagonal /></span>
            <span className="training-card-copy"><span className="card-tag">MOVE BETTER</span><strong>Everyday<br />movement</strong><span className="card-description">Feel good in your body.</span></span>
          </a>
          <a className="training-card" href="#social">
            <img src={photos.focus} alt="Sumedh standing beside gym equipment" loading="lazy" />
            <span className="training-card-shade" />
            <span className="card-topline"><span>03 — YOUR PACE</span><ArrowIcon diagonal /></span>
            <span className="training-card-copy"><span className="card-tag">STAY THE COURSE</span><strong>Mindset<br />&amp; habits</strong><span className="card-description">Build a rhythm that sticks.</span></span>
          </a>
        </div>
        <p className="training-note">A few ideas to take into your own routine.</p>
      </section>

      <section className="video-feature section-pad" id="video">
        <div className="video-copy">
          <div className="section-kicker"><span>03</span><span>SUMEDH / IN MOTION</span></div>
          <h2>Strength<br /><span>in motion.</span></h2>
          <p>A closer look at Sumedh in the gym—real training, one session at a time.</p>
        </div>
        <div className="video-frame">
          <video
            aria-label="Workout video featuring Sumedh"
            autoPlay={autoplayAllowed}
            muted
            loop
            controls
            playsInline
            preload="auto"
            poster={photos.strength}
          >
            <source src={workoutVideo} type="video/mp4" />
            Your browser does not support video playback.
          </video>
          <span className="video-badge"><span className="video-badge-dot" /> SUMEDH / TRAINING CUT</span>
        </div>
      </section>

      <section className="quote-section" aria-label="Training philosophy">
        <div className="quote-mark">“</div>
        <p>You don’t have to be extreme.<br />You just have to <span>begin again.</span></p>
        <span className="quote-credit">A REMINDER FOR THE DAYS YOU NEED IT</span>
        <span className="quote-cross">✳</span>
      </section>

      <section className="about section-pad" id="about">
        <div className="about-photo">
          <img src={photos.about} alt="Sumedh smiling in a casual portrait" loading="lazy" />
          <span className="photo-label">IN THE WORK, EVERY DAY.</span>
          <span className="photo-scribble" aria-hidden="true">S<span>.</span></span>
        </div>
        <div className="about-copy">
          <div className="section-kicker"><span>04</span><span>A LITTLE ABOUT ME</span></div>
          <h2>Hey, I’m<br /><span>Sumedh.</span></h2>
          <p className="about-lead">I’m Sumedh—a fitness creator sharing the training, routines, and mindset that help me keep showing up.</p>
          <p className="about-body">For me, fitness is about feeling good, getting a little stronger, and staying curious about what I can do. Here you’ll find training ideas and honest moments from the journey.</p>
          <a className="button button-dark" href="https://www.instagram.com/sumedhsood/" target="_blank" rel="noreferrer">Follow my journey <ArrowIcon diagonal /></a>
        </div>
      </section>

      <section className="social section-pad" id="social">
        <div className="social-heading">
          <div><div className="section-kicker"><span>05</span><span>FOLLOW ALONG</span></div><h2>Progress in<br /><span>practice.</span></h2></div>
          <a className="social-handle" href="https://www.instagram.com/sumedhsood/" target="_blank" rel="noreferrer">@SUMEDHSOOD <ArrowIcon diagonal /></a>
        </div>
        <div className="social-grid">
          <a href="https://www.instagram.com/sumedhsood/" target="_blank" rel="noreferrer" aria-label="Visit Sumedh's Instagram"><img src={photos.focus} alt="Sumedh in a gym, looking ahead" loading="lazy" /><span>STRENGTH <ArrowIcon diagonal /></span></a>
          <a href="https://www.instagram.com/sumedhsood/" target="_blank" rel="noreferrer" aria-label="Visit Sumedh's Instagram"><img src={photos.shirtless} alt="Sumedh taking a gym mirror selfie" loading="lazy" /><span>PROGRESS <ArrowIcon diagonal /></span></a>
          <a href="https://www.instagram.com/sumedhsood/" target="_blank" rel="noreferrer" aria-label="Visit Sumedh's Instagram"><img src={photos.gymMirror} alt="Sumedh standing in front of a gym mirror" loading="lazy" /><span>SHOW UP <ArrowIcon diagonal /></span></a>
        </div>
      </section>

      <section className="contact section-pad" id="contact">
        <div className="contact-orbit" aria-hidden="true">✳</div>
        <div className="section-kicker light-kicker"><span>06</span><span>GET IN TOUCH</span></div>
        <h2>Let’s make<br />something <span>good.</span></h2>
        <p>For brand partnerships, creative projects, or just to say hello, send a message.</p>
        <a className="button button-lime" href="https://www.instagram.com/sumedhsood/" target="_blank" rel="noreferrer">DM Sumedh on Instagram <ArrowIcon diagonal /></a>
        <span className="contact-signoff">OPEN TO GOOD PARTNERSHIPS.</span>
      </section>

      <footer className="site-footer">
        <a className="wordmark footer-wordmark" href="#top"><span className="wordmark-mark">S</span><span className="wordmark-name">SUMEDH SOOD<span>FITNESS &amp; PERFORMANCE</span></span></a>
        <span className="footer-copy">© {new Date().getFullYear()} SUMEDH SOOD. KEEP SHOWING UP.</span>
        <a className="footer-top" href="#top">BACK TO TOP ↑</a>
      </footer>
    </main>
  )
}

export default App
