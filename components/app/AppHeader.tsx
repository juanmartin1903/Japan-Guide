import { Search, Moon, UserCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AppHeader() {
  return (
    <header className="sticky top-0 z-30 border-b bg-background/80 backdrop-blur">
      <div className="flex h-16 items-center justify-between px-6 lg:px-8">
        <div>
          <p className="text-sm text-muted-foreground">Luna de Miel 2026</p>
          <h1 className="text-xl font-semibold">Japan Guide</h1>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" aria-label="Buscar">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Modo oscuro">
            <Moon className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Perfil">
            <UserCircle className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
