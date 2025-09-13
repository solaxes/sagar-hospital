import { DepartmentsHero } from "@/components/departments-hero";
import { DepartmentsList } from "@/components/departments-list";
import { EmergencyServices } from "@/components/emergency-services";

export default function DepartmentsPage() {
  return (
    <div className="min-h-screen">
      <DepartmentsHero />
      <DepartmentsList />
      <EmergencyServices />
    </div>
  );
}
