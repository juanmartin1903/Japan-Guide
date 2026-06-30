export const documents = [
  {
    id: "passport",
    name: "Pasaportes",
    category: "Identidad",
    priority: "Crítica",
    notes: "Comprobar vigencia, copia digital y copia offline.",
  },
  {
    id: "flight-booking",
    name: "Reserva de vuelos",
    category: "Vuelos",
    priority: "Crítica",
    notes: "Localizador PDEYJD y billetes Air China.",
  },
  {
    id: "stays",
    name: "Reservas de alojamientos",
    category: "Alojamientos",
    priority: "Alta",
    notes: "Airbnb de Osaka, Kyoto, Kanazawa, Tokyo, Nagoya y Osaka final.",
  },
  {
    id: "insurance",
    name: "Seguro de viaje",
    category: "Salud",
    priority: "Alta",
    notes: "Guardar póliza, teléfonos de emergencia y condiciones.",
  },
  {
    id: "payment-cards",
    name: "Tarjetas y banco",
    category: "Dinero",
    priority: "Alta",
    notes: "Handelsbanken Mastercard, PayPal y plan de efectivo.",
  },
  {
    id: "offline-guide",
    name: "Guía offline",
    category: "Aplicación",
    priority: "Alta",
    notes: "Versión instalable y accesible sin conexión cuando esté lista.",
  },
] as const;
