import Link from "next/link";
import {
  CalendarDays,
  CheckSquare,
  FileText,
  Heart,
  Home,
  Hotel,
  Map,
  Plane,
  Settings,
  ShoppingBag,
  Siren,
  Soup,
  Star,
  TrainFront,
  WalletCards,
} from "lucide-react";

const navItems = [
  { name: "Inicio", href: "/", icon: Home },
  { name: "Itinerario", href: "/itinerario", icon: CalendarDays },
  { name: "Vuelos", href: "/vuelos", icon: Plane },
  { name: "Transporte", href: "/transporte", icon: TrainFront },
  { name: "Alojamientos", href: "/alojamientos", icon: Hotel },
  { name: "Ciudades", href: "/ciudades", icon: Map },
  { name: "Restaurantes", href: "/restaurantes", icon: Soup },
  { name: "Compras", href: "/compras", icon: ShoppingBag },
  { name: "Presupuesto", href: "/presupuesto", icon: WalletCards },
  { name: "Checklist", href: "/checklist", icon: CheckSquare },
  { name: "Documentos", href: "/documentos", icon: FileText },
  { name: "Emergencias", href: "/emergencias", icon: Siren },
  { name: "Favoritos", href: "/favoritos", icon: Star },
  { name: "Recuerdos", href: "/recuerdos", icon: Heart },
  { name: "Configuración", href: "/configuracion", icon: Settings },
];

export default function AppSidebar() {
  return (
    <aside className="hidden w-72 shrink-0 border-r bg-muted/30 p-5 lg:block">
      <div className="mb-8 rounded-2xl border bg-background p-4 shadow-sm">
        <div className="text-3xl">🇯🇵</div>
        <h2 className="mt-3 text-lg font-semibold">Japan Guide</h2>
        <p className="text-sm text-muted-foreground">Honeymoon Edition</p>
      </div>

      <nav className="space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-muted-foreground transition hover:bg-background hover:text-foreground"
            >
              <Icon className="h-4 w-4" />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
