import { WalletCards } from "lucide-react";
import { budget } from "@/data/budget";

const totalJPY = budget.categories.reduce(
  (sum, category) => sum + category.estimatedJPY,
  0
);

const rate = budget.currency.approximateRate.jpyToSek;
const totalSEK = Math.round(totalJPY * rate);

export default function BudgetOverview() {
  return (
    <section className="rounded-3xl border bg-card p-6 shadow-sm">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-muted-foreground">Presupuesto</p>
          <h3 className="text-2xl font-semibold">Estimación inicial</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            {budget.currency.approximateRate.note}
          </p>
        </div>

        <div className="rounded-2xl border bg-background px-4 py-3 text-right">
          <p className="text-sm text-muted-foreground">Total estimado</p>
          <p className="text-xl font-semibold">
            {totalJPY.toLocaleString("ja-JP")} ¥
          </p>
          <p className="text-sm text-muted-foreground">
            ≈ {totalSEK.toLocaleString("sv-SE")} kr
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {budget.categories.map((category) => {
          const estimatedSEK = Math.round(category.estimatedJPY * rate);

          return (
            <article
              key={category.id}
              className="rounded-2xl border bg-background p-5"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-muted">
                <WalletCards className="h-5 w-5" />
              </div>

              <p className="text-sm text-muted-foreground">{category.name}</p>
              <h4 className="mt-1 text-xl font-semibold">
                {category.estimatedJPY.toLocaleString("ja-JP")} ¥
              </h4>
              <p className="text-sm text-muted-foreground">
                ≈ {estimatedSEK.toLocaleString("sv-SE")} kr
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                {category.notes}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
