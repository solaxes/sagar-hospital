import { GalleryHero } from "@/components/gallery-hero";
import { GalleryGrid } from "@/components/gallery-grid";
import { VirtualTour } from "@/components/virtual-tour";

export default function GalleryPage() {
  return (
    <div className="min-h-screen">
      <GalleryHero />
      <GalleryGrid />
      <VirtualTour />
    </div>
  );
}
