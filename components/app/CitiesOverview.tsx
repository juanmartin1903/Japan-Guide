import { MapPin, Sparkles } from "lucide-react";
import { cities } from "@/data/cities";

export default function CitiesOverview() {
  return (
    <section className="rounded-3xl border bg-card p-6 shadow-sm">
      <div className="mb-6">
        <p className="text-sm text-muted-foreground">Módulo de ciudades</p>
        <h3 className="text-2xl font-semibold">Ruta por Japón</h3>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {cities.map((city) => (
          <article
            key={city.id}
            className="rounded-2xl border bg-background p-5 transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="mb-4 flex items-center justify-between gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-muted">
                <MapPin className="h-5 w-5" />
              </div>
              <span className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
                {city.stay}
              </span>
            </div>

            <h4 className="text-xl font-semibold">{city.name}</h4>
            <p className="mt-1 text-sm font-medium text-muted-foreground">
              {city.theme}
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              {city.summary}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {city.highlights.map((highlight) => (
                <span
                  key={highlight}
                  className="inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs text-muted-foreground"
                >
                  <Sparkles className="h-3 w-3" />
                  {highlight}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
