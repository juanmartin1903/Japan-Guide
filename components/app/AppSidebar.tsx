import {
  CalendarDays,
  CheckSquare,
  Heart,
  Home,
  Hotel,
  Map,
  Plane,
  Settings,
  ShoppingBag,
  Soup,
  Star,
  WalletCards,
} from "lucide-react";

const navItems = [
  { name: "Inicio", icon: Home },
  { name: "Itinerario", icon: CalendarDays },
  { name: "Vuelos", icon: Plane },
  { name: "Alojamientos", icon: Hotel },
  { name: "Ciudades", icon: Map },
  { name: "Restaurantes", icon: Soup },
  { name: "Compras", icon: ShoppingBag },
  { name: "Presupuesto", icon: WalletCards },
  { name: "Favoritos", icon: Star },
  { name: "Checklist", icon: CheckSquare },
  { name: "Recuerdos", icon: Heart },
  { name: "Configuración", icon: Settings },
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
            <button
              key={item.name}
              className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-muted-foreground transition hover:bg-background hover:text-foreground"
            >
              <Icon className="h-4 w-4" />
              {item.name}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
