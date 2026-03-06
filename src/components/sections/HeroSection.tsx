export function HeroSection() {
  return (
    <header className="hero">
      <div className="hero-grid">
        <div>
          <p className="hero-tag">International Conference 2026</p>
          <h1>Workshop on Intelligent Computing and Cybernetics (WICC26)</h1>
          <p className="hero-copy">
            November 18-20, 2026 | University Conference Center, Djelfa, Algeria
          </p>

          <div className="hero-cta-row">
            <button type="button" className="hero-btn hero-btn-primary">
              Submit Abstract
            </button>
            <button type="button" className="hero-btn hero-btn-ghost">
              Registration
            </button>
          </div>

          <div className="hero-metrics" aria-label="Conference highlights">
            <span>40+ Papers</span>
            <span>8 Keynotes</span>
            <span>3 Days</span>
          </div>
        </div>

        <div className="hero-gif-wrap" aria-hidden="true">
          <div className="hero-date-card">
            <p>Paper Deadline</p>
            <h3>July 30, 2026</h3>
          </div>
          <div className="hero-date-card">
            <p>Acceptance</p>
            <h3>September 05, 2026</h3>
          </div>
          <div className="hero-date-card">
            <p>Conference</p>
            <h3>Nov 18-20, 2026</h3>
          </div>
        </div>
      </div>
    </header>
  );
}
