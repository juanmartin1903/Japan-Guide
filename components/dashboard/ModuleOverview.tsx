"use client";

import Link from "next/link";
import {
Plane,
TrainFront,
Landmark,
UtensilsCrossed,
ShoppingBag,
Wallet
} from "lucide-react";

const modules = [

{
title:"Vuelos",
icon:Plane,
href:"/vuelos",
summary:"3 vuelos registrados"
},

{
title:"Transporte",
icon:TrainFront,
href:"/transporte",
summary:"6 trayectos"
},

{
title:"Ciudades",
icon:Landmark,
href:"/ciudades",
summary:"5 ciudades"
},

{
title:"Restaurantes",
icon:UtensilsCrossed,
href:"/restaurantes",
summary:"18 favoritos"
},

{
title:"Compras",
icon:ShoppingBag,
href:"/compras",
summary:"12 lugares"
},

{
title:"Presupuesto",
icon:Wallet,
href:"/presupuesto",
summary:"740.000 ¥"
}

];

export default function ModuleOverview(){

return(

<section className="space-y-4">

<h2 className="text-2xl font-semibold">

Accesos rápidos

</h2>

<div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">

{modules.map((module)=>{

const Icon=module.icon;

return(

<Link

key={module.title}

href={module.href}

className="rounded-2xl border bg-card p-5 transition hover:shadow-lg hover:-translate-y-1"

>

<div className="flex items-center gap-3">

<Icon className="h-6 w-6"/>

<div>

<h3 className="font-semibold">

{module.title}

</h3>

<p className="text-sm text-muted-foreground">

{module.summary}

</p>

</div>

</div>

</Link>

);

})}

</div>

</section>

);

}
