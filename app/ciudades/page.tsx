import AppLayout from "@/components/app/AppLayout";
import CityDetailPage from "@/components/app/CityDetailPage";
import { tokyo } from "@/data/cities/tokyo/overview";

export default function TokyoPage() {
  return (
    <AppLayout>
      <CityDetailPage city={tokyo} />
    </AppLayout>
  );
}