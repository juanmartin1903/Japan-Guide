# Japan Guide Architecture

## Objetivo

Crear una aplicación premium para organizar una luna de miel en Japón y reutilizarla posteriormente como álbum de recuerdos.

---

# Arquitectura

app/
components/
data/
hooks/
services/
types/
utils/

---

# Componentes

layout/

dashboard/

city/

shared/

ui/

---

# Datos

Cada ciudad tendrá sus propios datos.

Ejemplo:

data/cities/osaka/

overview.ts

restaurants.ts

shopping.ts

budget.ts

transport.ts

itinerary.ts

notes.ts

---

# Services

Toda la lógica irá aquí.

Ejemplos:

CurrencyService

WeatherService

JRPassService

PhotoService

GoogleMapsService

---

# Hooks

useCountdown

useBudget

useWeather

useOffline

useCity

---

# Objetivo

Los componentes deben mostrar información.

Nunca contener lógica compleja.

Toda la lógica irá en Services.

Todos los tipos irán en Types.

Todos los datos irán en Data.

---

Última actualización:

Sprint 6
