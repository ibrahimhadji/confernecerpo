type SponsorsSectionProps = {
  sponsors: string[];
};

export function SponsorsSection({ sponsors }: SponsorsSectionProps) {
  return (
    <section className="section-block">
      <div className="section-head">
        <h2>Sponsors</h2>
      </div>
      <div className="sponsor-grid">
        {sponsors.map((sponsor) => (
          <div key={sponsor} className="sponsor-card">
            {sponsor}
          </div>
        ))}
      </div>
    </section>
  );
}
