export default function ChecklistPreview(){

const items=[

"Pasaporte",

"Seguro",

"Yenes",

"eSIM"

];

return(

<section className="space-y-4">

<h2 className="text-2xl font-semibold">

Checklist rápido

</h2>

<div className="rounded-2xl border bg-card p-6">

<div className="space-y-3">

{items.map(item=>(

<div

key={item}

className="flex items-center gap-3"

>

<div className="h-3 w-3 rounded-full border"/>

<span>{item}</span>

</div>

))}

</div>

</div>

</section>

);

}
