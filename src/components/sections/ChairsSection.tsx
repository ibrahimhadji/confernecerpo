import type { Chair } from "@/data/conference";

type ChairsSectionProps = {
  chairs: Chair[];
};

export function ChairsSection({ chairs }: ChairsSectionProps) {
  return (
    <section className="section-block">
      <div className="section-head">
        <h2>Conference Committee</h2>
      </div>
      <div className="chair-actions">
        {chairs.map((chair) => (
          <article key={chair.role} className="chair-card">
            <p>{chair.role}</p>
            <h3>{chair.name}</h3>
            <span>{chair.university}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
