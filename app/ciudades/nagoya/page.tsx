import AppLayout from "@/components/app/AppLayout";
import CityDetailPage from "@/components/app/CityDetailPage";
import { nagoya } from "@/data/cities/nagoya/overview";

export default function NagoyaPage() {
  return (
    <AppLayout>
      <CityDetailPage city={nagoya} />
    </AppLayout>
  );
}