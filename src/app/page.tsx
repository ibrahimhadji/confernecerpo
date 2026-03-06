import { ChairsSection } from "@/components/sections/ChairsSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { SpeakersSection } from "@/components/sections/SpeakersSection";
import { SponsorsSection } from "@/components/sections/SponsorsSection";
import { SubjectsCarouselSection } from "@/components/sections/SubjectsCarouselSection";
import {
  chairs,
  importantDates,
  speakers,
  sponsors,
  subjects,
} from "@/data/conference";

export default function Home() {
  return (
    <div className="wicc-page">
      <nav className="site-nav">
        <p className="site-brand">WICC26</p>
        <div className="site-links">
          <a href="#about">About</a>
          <a href="#tracks">Tracks</a>
          <a href="#speakers">Speakers</a>
          <a href="#dates">Important Dates</a>
          <a href="#committee">Committee</a>
          <a href="#sponsors">Sponsors</a>
        </div>
      </nav>

      <HeroSection />

      <main className="content-wrap">
        <section id="about" className="section-block">
          <div className="section-head">
            <h2>About The Conference</h2>
          </div>
          <p className="about-copy">
            The Workshop on Intelligent Computing and Cybernetics (WICC26) brings
            together researchers, engineers, and practitioners to discuss recent
            advances in AI, cybernetic systems, secure infrastructures, and
            real-world industrial applications.
          </p>
        </section>

        <section id="tracks">
          <SubjectsCarouselSection subjects={subjects} />
        </section>

        <section id="speakers">
          <SpeakersSection speakers={speakers} />
        </section>

        <section id="dates" className="section-block">
          <div className="section-head">
            <h2>Important Dates</h2>
          </div>
          <div className="dates-table-wrap">
            <table className="dates-table">
              <tbody>
                {importantDates.map((item) => (
                  <tr key={item.event}>
                    <th scope="row">{item.event}</th>
                    <td>{item.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="committee">
          <ChairsSection chairs={chairs} />
        </section>

        <section id="sponsors">
          <SponsorsSection sponsors={sponsors} />
        </section>
      </main>
    </div>
  );
}
