export const budget = {
  currency: {
    primary: "JPY",
    secondary: "SEK",
    approximateRate: {
      jpyToSek: 0.06,
      note: "Referencia aproximada: 100 ¥ ≈ 6 kr. Revisar antes del viaje.",
    },
  },
  categories: [
    {
      id: "food",
      name: "Comida",
      estimatedJPY: 180000,
      notes: "Desayunos, almuerzos, cenas, snacks y cafés.",
    },
    {
      id: "transport",
      name: "Transporte",
      estimatedJPY: 120000,
      notes: "Metro, trenes, buses, traslados y posibles reservas.",
    },
    {
      id: "activities",
      name: "Atracciones",
      estimatedJPY: 90000,
      notes: "Entradas, templos, experiencias y actividades especiales.",
    },
    {
      id: "shopping",
      name: "Compras",
      estimatedJPY: 250000,
      notes: "Souvenirs, electrónica, ropa, anime, juegos y regalos.",
    },
    {
      id: "emergency",
      name: "Margen de seguridad",
      estimatedJPY: 100000,
      notes: "Imprevistos, taxis, cambios de plan y emergencias.",
    },
  ],
} as const;
