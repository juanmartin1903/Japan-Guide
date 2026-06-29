import {
  CalendarDays,
  CheckCircle2,
  Hotel,
  MapPin,
  Plane,
  WalletCards,
} from "lucide-react";
import { differenceInCalendarDays } from "date-fns";
import { Button } from "@/components/ui/button";
import { trip } from "@/data/trip";

const today = new Date();
const tripStart = new Date(`${trip.dates.start}T00:00:00`);
const daysUntilTrip = Math.max(
  0,
  differenceInCalendarDays(tripStart, today)
);

const firstFlight = trip.flights[0];
const firstCity = trip.cities[0];

const cards = [
  {
    title: "Cuenta atrás",
    value: `${daysUntilTrip} días`,
    description: "Hasta la salida desde Estocolmo",
    icon: CalendarDays,
  },
  {
    title: "Próximo vuelo",
    value: `${firstFlight.from} → ${firstFlight.to}`,
    description: `${firstFlight.airline} · ${firstFlight.flightNumber}`,
    icon: Plane,
  },
  {
    title: "Primera ciudad",
    value: firstCity.name,
    description: `${firstCity.dates} · ${firstCity.role}`,
    icon: MapPin,
  },
  {
    title: "Alojamiento",
    value: "Osaka Airbnb",
    description: "Primera estancia confirmada",
    icon: Hotel,
  },
  {
    title: "Presupuesto",
    value: "Pendiente",
    description: "JPY, SEK y categorías en próximo módulo",
    icon: WalletCards,
  },
  {
    title: "Checklist",
    value: `${trip.checklist.length} básicos`,
    description: "Preparación esencial antes del viaje",
    icon: CheckCircle2,
  },
];

export default function Dashboard() {
  return (
    <div className="mx-auto max-w-7xl space-y-8">
      <section className="overflow-hidden rounded-3xl border bg-gradient-to-br from-background via-background to-muted p-8 shadow-sm">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-medium text-muted-foreground">
            {trip.subtitle}
          </p>
          <h2 className="text-4xl font-bold tracking-tight lg:text-6xl">
            Japón 2026
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Centro de control para vuestra luna de miel: vuelos, ciudades,
            alojamientos, itinerario, presupuesto, compras y recuerdos.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg">Comenzar el día</Button>
            <Button size="lg" variant="outline">
              Ver itinerario
            </Button>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <article
              key={card.title}
              className="rounded-2xl border bg-card p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-muted">
                <Icon className="h-5 w-5" />
              </div>
              <p className="text-sm text-muted-foreground">{card.title}</p>
              <h3 className="mt-1 text-2xl font-semibold">{card.value}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {card.description}
              </p>
            </article>
          );
        })}
      </section>

      <section className="rounded-3xl border bg-card p-6 shadow-sm">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Ruta principal</p>
            <h3 className="text-2xl font-semibold">Ciudades del viaje</h3>
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {trip.cities.map((city) => (
            <div
              key={city.id}
              className="rounded-2xl border bg-background p-4"
            >
              <p className="text-sm text-muted-foreground">{city.dates}</p>
              <h4 className="mt-1 text-lg font-semibold">{city.name}</h4>
              <p className="mt-2 text-sm text-muted-foreground">
                {city.role}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
