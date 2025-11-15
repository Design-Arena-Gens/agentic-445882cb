export default function Home() {
  return (
    <main className="ad-shell">
      <div className="scene scene-1">
        <div className="scene-layer film-grain" />
        <div className="scene-content">
          <h1>Every move tells an emotional story.</h1>
          <p>
            The Kumar family faces the stress of relocation, surrounded by memories packed in boxes,
            longing for a smoother journey.
          </p>
        </div>
      </div>

      <div className="scene scene-2">
        <div className="scene-layer light-flare" />
        <div className="scene-content">
          <h2>Professional Movers. Precision in Every Lift.</h2>
          <p>
            Our expertly trained crew loads every cherished piece with care, backed by decades of
            trusted service.
          </p>
        </div>
      </div>

      <div className="scene scene-3">
        <div className="scene-content">
          <h2>India-wide Coverage</h2>
          <p>
            From Delhi to Coimbatore, our fleet connects every major route with real-time tracking
            and 24×7 support.
          </p>
          <div className="india-map">
            <div className="map-surface">
              <svg viewBox="0 0 300 360" className="map-outline" aria-hidden>
                <path
                  d="M158 10l17 20-7 28 18 9 21-5 18-12 26 28-12 24 12 28-15 15 10 36-32 12-5 22 16 22-16 39-32 26-27-12-23 12-11 28-31-14-6-21-36-17-12-26 19-26-14-21 21-29-14-21 6-23 26-7 6-21 18-13-8-32 17-18 19-8-8-17z"
                />
              </svg>
              <div className="route route-north">
                <span className="truck" aria-hidden>
                  ▶
                </span>
              </div>
              <div className="route route-west">
                <span className="truck" aria-hidden>
                  ▶
                </span>
              </div>
              <div className="route route-south">
                <span className="truck" aria-hidden>
                  ▶
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="scene scene-4">
        <div className="scene-content">
          <div className="logo-lockup">
            <span className="logo-mark">K</span>
            <div>
              <p className="brand-name">Kumar Packers &amp; Movers</p>
              <p className="tagline">Moving emotions, not just boxes.</p>
            </div>
          </div>
          <div className="contact-board">
            <p className="cta-text">Call now for a stress-free move</p>
            <p className="phone">9618849713</p>
            <p className="phone">8498868686</p>
          </div>
        </div>
      </div>

      <div className="timeline">
        <div className="progress" />
      </div>
    </main>
  );
}
