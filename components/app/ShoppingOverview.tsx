import { ShoppingBag } from "lucide-react";
import { shopping } from "@/data/shopping";

export default function ShoppingOverview() {
  return (
    <section className="rounded-3xl border bg-card p-6 shadow-sm">
      <div className="mb-6">
        <p className="text-sm text-muted-foreground">Compras</p>
        <h3 className="text-2xl font-semibold">Lugares prioritarios</h3>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {shopping.map((shop) => (
          <article
            key={shop.id}
            className="rounded-2xl border bg-background p-5"
          >
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-muted">
              <ShoppingBag className="h-5 w-5" />
            </div>

            <p className="text-sm text-muted-foreground">{shop.category}</p>
            <h4 className="mt-1 text-xl font-semibold">{shop.name}</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Prioridad {shop.priority}
            </p>
            <p className="mt-3 text-sm text-muted-foreground">{shop.notes}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {shop.cities.map((city) => (
                <span
                  key={city}
                  className="rounded-full border px-2.5 py-1 text-xs text-muted-foreground"
                >
                  {city}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
