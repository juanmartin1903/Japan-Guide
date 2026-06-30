import AppLayout from "@/components/app/AppLayout";
import CityDetailPage from "@/components/app/CityDetailPage";
import { kyoto } from "@/data/cities/kyoto/overview";

export default function KyotoPage() {
  return (
    <AppLayout>
      <CityDetailPage city={kyoto} />
    </AppLayout>
  );
}