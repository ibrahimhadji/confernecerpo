import type { Chair } from "@/data/conference";

type ChairsSectionProps = {
  chairs: Chair[];
};

export function ChairsSection({ chairs }: ChairsSectionProps) {
  return (
    <section className="section-block">
      <div className="section-head">
        <h2>Conference Chairs</h2>
      </div>
      <div className="chair-actions">
        {chairs.map((chair) => (
          <button key={chair.role} type="button">
            {chair.role}: {chair.name} ({chair.university})
          </button>
        ))}
      </div>
    </section>
  );
}
