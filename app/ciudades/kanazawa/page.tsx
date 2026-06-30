import AppLayout from "@/components/app/AppLayout";
import CityDetailPage from "@/components/app/CityDetailPage";
import { kanazawa } from "@/data/cities/kanazawa/overview";

export default function KanazawaPage() {
  return (
    <AppLayout>
      <CityDetailPage city={kanazawa} />
    </AppLayout>
  );
}