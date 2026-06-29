import { Soup } from "lucide-react";
import { restaurants } from "@/data/restaurants";

export default function RestaurantsOverview() {
  return (
    <section className="rounded-3xl border bg-card p-6 shadow-sm">
      <div className="mb-6">
        <p className="text-sm text-muted-foreground">Comida</p>
        <h3 className="text-2xl font-semibold">Restaurantes y opciones útiles</h3>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {restaurants.map((restaurant) => (
          <article
            key={restaurant.id}
            className="rounded-2xl border bg-background p-5"
          >
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-muted">
              <Soup className="h-5 w-5" />
            </div>

            <p className="text-sm text-muted-foreground">
              {restaurant.type} · {restaurant.budget}
            </p>
            <h4 className="mt-1 text-xl font-semibold">{restaurant.name}</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              {restaurant.city} · Prioridad {restaurant.priority}
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              {restaurant.notes}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
