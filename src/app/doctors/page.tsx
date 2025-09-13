import { DoctorsHero } from "@/components/doctors-hero";
import { DoctorsList } from "@/components/doctors-list";
import { DoctorTestimonials } from "@/components/doctor-testimonials";

export default function DoctorsPage() {
  return (
    <div className="min-h-screen">
      <DoctorsHero />
      <DoctorsList />
      <DoctorTestimonials />
    </div>
  );
}
