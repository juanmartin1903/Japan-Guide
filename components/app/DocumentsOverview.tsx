import { FileText } from "lucide-react";
import { documents } from "@/data/documents";

export default function DocumentsOverview() {
  return (
    <section className="rounded-3xl border bg-card p-6 shadow-sm">
      <div className="mb-6">
        <p className="text-sm text-muted-foreground">Documentos</p>
        <h3 className="text-2xl font-semibold">Información importante</h3>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {documents.map((document) => (
          <article
            key={document.id}
            className="rounded-2xl border bg-background p-5"
          >
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-muted">
              <FileText className="h-5 w-5" />
            </div>

            <p className="text-sm text-muted-foreground">
              {document.category} · Prioridad {document.priority}
            </p>
            <h4 className="mt-1 text-xl font-semibold">{document.name}</h4>
            <p className="mt-3 text-sm text-muted-foreground">
              {document.notes}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
