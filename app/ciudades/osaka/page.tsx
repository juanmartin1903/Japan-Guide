import AppLayout from "@/components/app/AppLayout";
import CityDetailPage from "@/components/app/CityDetailPage";
import { osaka } from "@/data/cities/osaka/overview";

export default function OsakaPage() {
  return (
    <AppLayout>
      <CityDetailPage city={osaka} />
    </AppLayout>
  );
}