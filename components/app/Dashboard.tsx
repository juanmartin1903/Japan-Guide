import {
  CalendarDays,
  CheckCircle2,
  Hotel,
  MapPin,
  Plane,
  WalletCards,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const cards = [
  {
    title: "Cuenta atrás",
    value: "35 días",
    description: "Salida desde Estocolmo el 3 de agosto de 2026",
    icon: CalendarDays,
  },
  {
    title: "Próximo vuelo",
    value: "ARN → PEK → KIX",
    description: "Air China · llegada a Osaka Kansai",
    icon: Plane,
  },
  {
    title: "Primera ciudad",
    value: "Osaka",
    description: "4–8 agosto · primera base del viaje",
    icon: MapPin,
  },
  {
    title: "Alojamiento",
    value: "Osaka Airbnb",
    description: "Check-in después de la llegada a KIX",
    icon: Hotel,
  },
  {
    title: "Presupuesto",
    value: "Pendiente",
    description: "Próximamente: JPY, SEK y categorías",
    icon: WalletCards,
  },
  {
    title: "Checklist",
    value: "Preparación",
    description: "Pasaporte, seguro, dinero, adaptadores y medicinas",
    icon: CheckCircle2,
  },
];

export default function Dashboard() {
  return (
    <div className="mx-auto max-w-7xl space-y-8">
      <section className="overflow-hidden rounded-3xl border bg-gradient-to-br from-background via-background to-muted p-8 shadow-sm">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-medium text-muted-foreground">
            Guía interactiva personalizada
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
    </div>
  );
}
