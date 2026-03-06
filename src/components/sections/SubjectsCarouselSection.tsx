type SubjectsCarouselSectionProps = {
  subjects: string[];
};

export function SubjectsCarouselSection({ subjects }: SubjectsCarouselSectionProps) {
  return (
    <section className="section-block">
      <div className="section-head">
        <h2>Conference Subject Titles</h2>
      </div>
      <div className="carousel-shell" aria-label="Conference subjects">
        <div className="carousel-track">
          {[...subjects, ...subjects].map((subject, index) => (
            <span key={`${subject}-${index}`} className="carousel-item">
              {subject}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
