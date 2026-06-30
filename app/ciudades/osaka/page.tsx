import AppLayout from "@/components/app/AppLayout";
import { osaka } from "@/data/cities/osaka/overview";
import { MapPin, Home, Utensils, ShoppingBag, Star } from "lucide-react";

export default function OsakaPage() {
  return (
    <AppLayout>
      <div className="mx-auto max-w-7xl space-y-8">
        <section className="rounded-3xl border bg-gradient-to-br from-background via-background to-muted p-8 shadow-sm">
          <p className="text-sm text-muted-foreground">{osaka.dates}</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight lg:text-6xl">
            {osaka.name}
          </h1>
          <p className="mt-3 text-lg font-medium text-muted-foreground">
            {osaka.role}
          </p>
          <p className="mt-5 max-w-3xl text-muted-foreground">
            {osaka.summary}
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <article className="rounded-2xl border bg-card p-5 shadow-sm">
            <Home className="mb-4 h-5 w-5" />
            <p className="text-sm text-muted-foreground">Alojamiento</p>
            <h2 className="mt-1 text-xl font-semibold">{osaka.stay.type}</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              {osaka.stay.notes}
            </p>
          </article>

          <article className="rounded-2xl border bg-card p-5 shadow-sm">
            <MapPin className="mb-4 h-5 w-5" />
            <p className="text-sm text-muted-foreground">Prioridad</p>
            <h2 className="mt-1 text-xl font-semibold">Llegada tranquila</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Primeros días para adaptarse, comer bien y ubicarse.
            </p>
          </article>

          <article className="rounded-2xl border bg-card p-5 shadow-sm">
            <Utensils className="mb-4 h-5 w-5" />
            <p className="text-sm text-muted-foreground">Comida</p>
            <h2 className="mt-1 text-xl font-semibold">Takoyaki y okonomiyaki</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Osaka es una de las mejores ciudades para empezar comiendo.
            </p>
          </article>

          <article className="rounded-2xl border bg-card p-5 shadow-sm">
            <ShoppingBag className="mb-4 h-5 w-5" />
            <p className="text-sm text-muted-foreground">Compras</p>
            <h2 className="mt-1 text-xl font-semibold">Namba / Umeda</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Buen inicio para tiendas, regalos y compras prácticas.
            </p>
          </article>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold">Lugares destacados</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {osaka.highlights.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1.5 text-sm text-muted-foreground"
                >
                  <Star className="h-3.5 w-3.5" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold">Prioridades</h2>
            <ul className="mt-5 space-y-3">
              {osaka.priorities.map((item) => (
                <li key={item} className="rounded-2xl border bg-background p-4 text-sm text-muted-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold">Comida a probar</h2>
            <div className="mt-5 grid gap-3">
              {osaka.food.map((item) => (
                <div key={item} className="rounded-2xl border bg-background p-4 text-sm text-muted-foreground">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold">Compras útiles</h2>
            <div className="mt-5 grid gap-3">
              {osaka.shopping.map((item) => (
                <div key={item} className="rounded-2xl border bg-background p-4 text-sm text-muted-foreground">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </AppLayout>
  );
}
