import { ContactHero } from "@/components/contact-hero";
import { ContactInfo } from "@/components/contact-info";
import { ContactForm } from "@/components/contact-form";
import { LocationMap } from "@/components/location-map";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <LocationMap />
    </div>
  );
}
