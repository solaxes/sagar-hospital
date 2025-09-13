import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { DepartmentsSection } from "@/components/departments-section";
import { DoctorsSection } from "@/components/doctors-section";
import { StatsSection } from "@/components/stats-section";
import { TestimonialsSection } from "@/components/testimonials-section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <DepartmentsSection />
      <DoctorsSection />
      <TestimonialsSection />
    </div>
  );
}
