import { ChairsSection } from "@/components/sections/ChairsSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { SpeakersSection } from "@/components/sections/SpeakersSection";
import { SponsorsSection } from "@/components/sections/SponsorsSection";
import { SubjectsCarouselSection } from "@/components/sections/SubjectsCarouselSection";
import { chairs, speakers, sponsors, subjects } from "@/data/conference";

export default function Home() {
  return (
    <div className="wicc-page">
      <HeroSection />

      <main className="content-wrap">
        <SpeakersSection speakers={speakers} />
        <SubjectsCarouselSection subjects={subjects} />
        <ChairsSection chairs={chairs} />
        <SponsorsSection sponsors={sponsors} />
      </main>
    </div>
  );
}
