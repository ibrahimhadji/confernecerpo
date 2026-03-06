export function HeroSection() {
  return (
    <header className="hero">
      <div className="hero-grid">
        <div>
          <p className="hero-tag">WICC26 • 2026 Edition</p>
          <h1>Workshop on Intelligent Computing and Cybernetics</h1>
          <p className="hero-copy">
            A focused scientific event connecting researchers and professionals in
            intelligent systems, cybernetics, and practical AI applications.
          </p>
        </div>
        <div className="hero-gif-wrap" aria-hidden="true">
          <video
            className="hero-gif"
            src="https://cdnl.iconscout.com/lottie/premium/thumb/ai-system-configuration-animation-gif-download-14231546.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>
    </header>
  );
}
