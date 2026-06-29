export const transport = [
  {
    id: "kix-to-osaka",
    title: "KIX → Osaka",
    type: "Aeropuerto",
    priority: "Alta",
    notes:
      "Primer traslado al llegar a Japón. Debe ser simple, nocturno y con margen por cansancio.",
  },
  {
    id: "osaka-to-kyoto",
    title: "Osaka → Kyoto",
    type: "Traslado entre ciudades",
    priority: "Alta",
    notes:
      "Trayecto corto y frecuente. Ideal para hacer con calma el día del cambio de alojamiento.",
  },
  {
    id: "kyoto-to-kanazawa",
    title: "Kyoto → Kanazawa",
    type: "Tren",
    priority: "Alta",
    notes:
      "Traslado importante del itinerario. Conviene revisar horarios y reservar si aplica.",
  },
  {
    id: "kanazawa-to-tokyo",
    title: "Kanazawa → Tokyo",
    type: "Tren / bus nocturno",
    priority: "Alta",
    notes:
      "Tramo largo. Se puede optimizar con tren o noche de traslado según presupuesto y comodidad.",
  },
  {
    id: "tokyo-to-nagoya",
    title: "Tokyo → Nagoya",
    type: "Shinkansen / tren",
    priority: "Alta",
    notes:
      "Conexión principal hacia la etapa intermedia del viaje.",
  },
  {
    id: "nagoya-to-osaka",
    title: "Nagoya → Osaka",
    type: "Tren",
    priority: "Alta",
    notes:
      "Regreso a Osaka para la última base antes del vuelo de salida.",
  },
  {
    id: "osaka-to-kix",
    title: "Osaka → KIX",
    type: "Aeropuerto",
    priority: "Crítica",
    notes:
      "Traslado final para el vuelo de regreso. Debe planificarse con margen amplio.",
  },
] as const;
