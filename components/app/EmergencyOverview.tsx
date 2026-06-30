import { Siren } from "lucide-react";
import { emergency } from "@/data/emergency";

export default function EmergencyOverview() {
  return (
    <section className="rounded-3xl border bg-card p-6 shadow-sm">
      <div className="mb-6">
        <p className="text-sm text-muted-foreground">Seguridad</p>
        <h3 className="text-2xl font-semibold">Emergencias y salud</h3>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {emergency.map((item) => (
          <article
            key={item.id}
            className="rounded-2xl border bg-background p-5"
          >
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-muted">
              <Siren className="h-5 w-5" />
            </div>

            <p className="text-sm text-muted-foreground">{item.category}</p>
            <h4 className="mt-1 text-xl font-semibold">{item.title}</h4>
            <p className="mt-2 text-lg font-semibold">{item.number}</p>
            <p className="mt-3 text-sm text-muted-foreground">{item.notes}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
