import { ChefHat, ChevronLeft, ChevronRight, Leaf } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { OrderButton } from "@/components/site/OrderButton";
import { formatPrice, menuDetailsNotice, type MenuItem } from "@/data/menu";

export function MenuCard({ item }: { item: MenuItem }) {
  const [slide, setSlide] = useState(0);
  const image = item.images[slide]!;

  useEffect(() => {
    if (item.images.length < 2) return;
    const timer = window.setInterval(() => {
      setSlide((current) => (current + 1) % item.images.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [item.images.length]);

  const showPrevious = () =>
    setSlide((current) => (current - 1 + item.images.length) % item.images.length);
  const showNext = () => setSlide((current) => (current + 1) % item.images.length);

  return (
    <article className="group relative overflow-hidden rounded-2xl bg-card shadow-card transition-transform duration-300 hover:-translate-y-1">
      <Dialog>
        <div className="relative">
          <DialogTrigger asChild>
            <Button
              variant="ghost"
              aria-label={`View details: ${item.name}`}
              className="block h-auto w-full overflow-hidden whitespace-normal rounded-none p-0 text-left font-normal hover:bg-card hover:text-card-foreground"
            >
              <div className="aspect-4/3 overflow-hidden">
                <img
                  src={image}
                  alt={item.name}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4 sm:p-6">
                <span className="text-xs font-semibold uppercase tracking-wide text-accent">
                  {item.category}
                </span>
                <h3 className="mt-2 text-lg leading-tight sm:text-2xl">{item.name}</h3>
                {item.description && (
                  <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                )}
              </div>
            </Button>
          </DialogTrigger>
          {item.images.length > 1 && (
            <>
              <div
                role="group"
                aria-label={`${item.name} photos`}
                className="pointer-events-none absolute inset-x-0 top-[40%] flex -translate-y-1/2 justify-between px-3"
              >
                <button
                  type="button"
                  aria-label={`Previous photo of ${item.name}`}
                  onClick={showPrevious}
                  className="pointer-events-auto inline-flex size-10 items-center justify-center rounded-full bg-ink/70 text-on-ink transition-colors hover:bg-ink"
                >
                  <ChevronLeft className="size-5" aria-hidden />
                </button>
                <button
                  type="button"
                  aria-label={`Next photo of ${item.name}`}
                  onClick={showNext}
                  className="pointer-events-auto inline-flex size-10 items-center justify-center rounded-full bg-ink/70 text-on-ink transition-colors hover:bg-ink"
                >
                  <ChevronRight className="size-5" aria-hidden />
                </button>
              </div>
            </>
          )}
        </div>

        <div className="flex items-center justify-center pt-2 gap-3 border-t pb-4">
          <OrderButton item={item} />
        </div>

        <DialogContent className="max-h-[90svh] w-[calc(100%-2rem)] max-w-2xl gap-0 overflow-y-auto rounded-lg p-0">
          <img src={image} alt={item.name} className="aspect-16/10 w-full object-cover" />
          <div className="p-6 sm:p-8">
            {/* <p className="text-xs font-bold uppercase text-accent">{item.category}</p> */}
            <DialogTitle className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">
              {item.name}
            </DialogTitle>
            <DialogDescription className="mt-4 text-base leading-relaxed">
              {item.description || "Details and pricing coming soon."}
            </DialogDescription>
            <p className="mt-2 text-xs text-muted-foreground">{menuDetailsNotice}</p>

            {item.ingredients.length > 0 && (
              <section className="mt-7" aria-labelledby={`ingredients-${item.id}`}>
                <h3
                  id={`ingredients-${item.id}`}
                  className="flex items-center gap-2 text-xs font-bold uppercase text-accent"
                >
                  <Leaf className="size-4" aria-hidden />
                  Suggested ingredients
                </h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {item.ingredients.map((ingredient) => (
                    <li
                      key={ingredient}
                      className="rounded-full border border-border bg-secondary px-3 py-1 text-sm text-secondary-foreground"
                    >
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {item.recipe.length > 0 && (
              <section className="mt-7" aria-labelledby={`recipe-${item.id}`}>
                <h3
                  id={`recipe-${item.id}`}
                  className="flex items-center gap-2 text-xs font-bold uppercase text-accent"
                >
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
            )}

            <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t pt-5">
              <span className="text-xl font-bold text-primary">{formatPrice(item)}</span>
              <OrderButton item={item} />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </article>
  );
}
