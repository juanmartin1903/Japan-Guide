import { Home } from "lucide-react";
import { stays } from "@/data/stays";

export default function StaysOverview() {
  return (
    <section className="rounded-3xl border bg-card p-6 shadow-sm">
      <div className="mb-6">
        <p className="text-sm text-muted-foreground">Alojamientos</p>
        <h3 className="text-2xl font-semibold">Estancias confirmadas</h3>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {stays.map((stay) => (
          <article
            key={stay.id}
            className="rounded-2xl border bg-background p-5"
          >
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-muted">
              <Home className="h-5 w-5" />
            </div>

            <p className="text-sm text-muted-foreground">{stay.dates}</p>
            <h4 className="mt-1 text-xl font-semibold">{stay.city}</h4>
            <p className="mt-1 text-sm font-medium text-muted-foreground">
              {stay.type} · {stay.status}
            </p>
            <p className="mt-3 text-sm text-muted-foreground">{stay.notes}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
