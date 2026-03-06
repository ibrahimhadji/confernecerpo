type SubjectsCarouselSectionProps = {
  subjects: string[];
};

export function SubjectsCarouselSection({ subjects }: SubjectsCarouselSectionProps) {
  return (
    <section className="section-block">
      <div className="section-head">
        <h2>Conference Tracks</h2>
      </div>
      <div className="track-grid" aria-label="Conference subjects">
        {subjects.map((subject) => (
          <article key={subject} className="track-card">
            <h3>{subject}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}
