import { CheckCircle2, Circle } from "lucide-react";
import { checklist } from "@/data/checklist";

export default function ChecklistOverview() {
  return (
    <section className="rounded-3xl border bg-card p-6 shadow-sm">
      <div className="mb-6">
        <p className="text-sm text-muted-foreground">Preparativos</p>
        <h3 className="text-2xl font-semibold">Checklist esencial</h3>
      </div>

      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {checklist.map((item) => {
          const Icon = item.done ? CheckCircle2 : Circle;

          return (
            <article
              key={item.id}
              className="flex gap-3 rounded-2xl border bg-background p-4"
            >
              <Icon className="mt-0.5 h-5 w-5 text-muted-foreground" />
              <div>
                <h4 className="font-medium">{item.title}</h4>
                <p className="mt-1 text-sm text-muted-foreground">
                  {item.category} · Prioridad {item.priority}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
