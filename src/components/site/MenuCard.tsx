import { ArrowUpRight, ChefHat, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { formatPrice, type MenuItem } from "@/data/menu";

export function MenuCard({ item }: { item: MenuItem }) {
  return (
    <Dialog>
      <article className="group overflow-hidden rounded-lg bg-card shadow-card transition-transform duration-300 hover:-translate-y-1">
        <DialogTrigger asChild>
          <Button variant="ghost" aria-label={`View details: ${item.name}`} className="block h-auto w-full overflow-hidden whitespace-normal rounded-none p-0 text-left font-normal hover:bg-card hover:text-card-foreground">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={item.image} alt={item.name} loading="lazy" width={1024} height={1024} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="p-6">
              <span className="text-xs font-semibold uppercase text-accent">{item.category}</span>
              <div className="mt-2 flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-2xl">{item.name}</h3>
                <span className="whitespace-nowrap font-bold">{formatPrice(item)}</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              <div className="mt-4 flex items-center justify-between gap-3">
                <p className="text-[11px] uppercase text-muted-foreground">Sample item · price to be confirmed</p>
                <ArrowUpRight className="shrink-0 text-primary" aria-hidden />
              </div>
            </div>
          </Button>
        </DialogTrigger>
      </article>
      <DialogContent className="max-h-[90svh] w-[calc(100%-2rem)] max-w-2xl gap-0 overflow-y-auto rounded-lg p-0">
        <img src={item.image} alt={item.name} className="aspect-[16/10] w-full object-cover" />
        <div className="p-6 sm:p-8">
          <p className="text-xs font-bold uppercase text-accent">{item.category}</p>
          <DialogTitle className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">{item.name}</DialogTitle>
          <DialogDescription className="mt-4 text-base leading-relaxed">{item.description}</DialogDescription>

          <section className="mt-7" aria-labelledby={`ingredients-${item.id}`}>
            <h3 id={`ingredients-${item.id}`} className="flex items-center gap-2 text-xs font-bold uppercase text-accent">
              <Leaf className="size-4" aria-hidden />
              Ingredients
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {item.ingredients.map((ingredient) => (
                <li key={ingredient} className="rounded-full border border-border bg-secondary px-3 py-1 text-sm text-secondary-foreground">
                  {ingredient}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-7" aria-labelledby={`recipe-${item.id}`}>
            <h3 id={`recipe-${item.id}`} className="flex items-center gap-2 text-xs font-bold uppercase text-accent">
              <ChefHat className="size-4" aria-hidden />
              Recipe
            </h3>
            <ol className="mt-3 space-y-3">
              {item.recipe.map((step, index) => (
                <li key={step} className="flex gap-3">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    {index + 1}
                  </span>
                  <span className="text-sm leading-relaxed text-muted-foreground">{step}</span>
                </li>
              ))}
            </ol>
          </section>

          <div className="mt-7 flex items-center justify-between gap-4 border-t pt-5">
            <span className="text-xl font-bold text-primary">{formatPrice(item)}</span>
            <p className="text-right text-xs text-muted-foreground">Sample item<br />Price & recipe to be confirmed</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
