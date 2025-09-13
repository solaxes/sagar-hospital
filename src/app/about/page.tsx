import { AboutHero } from "@/components/about-hero";
import { MissionVision } from "@/components/mission-vision";
import { HospitalHistory } from "@/components/hospital-history";
import { LeadershipTeam } from "@/components/leadership-team";
import { FacilitiesSection } from "@/components/facilities-section";
import { ValuesSection } from "@/components/values-section";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <MissionVision />
      <HospitalHistory />
      <LeadershipTeam />
      <FacilitiesSection />
      <ValuesSection />
    </div>
  );
}
