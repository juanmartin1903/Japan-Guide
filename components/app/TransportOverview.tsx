import { TrainFront } from "lucide-react";
import { transport } from "@/data/transport";

export default function TransportOverview() {
  return (
    <section className="rounded-3xl border bg-card p-6 shadow-sm">
      <div className="mb-6">
        <p className="text-sm text-muted-foreground">Transporte</p>
        <h3 className="text-2xl font-semibold">Traslados principales</h3>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {transport.map((item) => (
          <article
            key={item.id}
            className="rounded-2xl border bg-background p-5"
          >
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-muted">
              <TrainFront className="h-5 w-5" />
            </div>

            <p className="text-sm text-muted-foreground">
              {item.type} · Prioridad {item.priority}
            </p>
            <h4 className="mt-1 text-xl font-semibold">{item.title}</h4>
            <p className="mt-3 text-sm text-muted-foreground">{item.notes}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
