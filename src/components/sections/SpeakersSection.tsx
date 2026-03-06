import Image from "next/image";
import type { Speaker } from "@/data/conference";

type SpeakersSectionProps = {
  speakers: Speaker[];
};

export function SpeakersSection({ speakers }: SpeakersSectionProps) {
  return (
    <section className="section-block">
      <div className="section-head">
        <h2>Featured Speakers</h2>
      </div>
      <div className="speaker-grid">
        {speakers.map((speaker) => (
          <article key={speaker.name} className="speaker-card">
            <Image src={speaker.image} alt={speaker.name} width={400} height={300} />
            <div>
              <h3>{speaker.name}</h3>
              <p>{speaker.university}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
