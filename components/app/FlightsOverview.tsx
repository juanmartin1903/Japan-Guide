import { Plane, Clock } from "lucide-react";
import { trip } from "@/data/trip";

export default function FlightsOverview() {
  return (
    <section className="rounded-3xl border bg-card p-6 shadow-sm">
      <div className="mb-6">
        <p className="text-sm text-muted-foreground">Vuelos</p>
        <h3 className="text-2xl font-semibold">Ruta aérea principal</h3>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {trip.flights.map((flight) => (
          <article
            key={flight.id}
            className="rounded-2xl border bg-background p-5"
          >
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-muted">
              <Plane className="h-5 w-5" />
            </div>

            <p className="text-sm text-muted-foreground">
              {flight.airline} · {flight.flightNumber}
            </p>
            <h4 className="mt-1 text-xl font-semibold">
              {flight.from} → {flight.to}
            </h4>

            <div className="mt-4 space-y-2 text-sm text-muted-foreground">
              <p className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Salida: {flight.departure}
              </p>
              <p className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Llegada: {flight.arrival}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
