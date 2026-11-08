import { useEffect, useState } from "react";
import {
  ArrowUp, ChefHat, Clock, Heart, Leaf, Mail, MapPin, MessageCircle, Phone, Quote, Sofa, Sparkles, Users, X,
  Instagram, Facebook, Twitter, Navigation,
} from "lucide-react";
import hero from "@/assets/hero.jpg";
import interior from "@/assets/interior.jpg";
import chef from "@/assets/chef.jpg";
import grill from "@/assets/grill.jpg";
import local from "@/assets/local.jpg";
import snacks from "@/assets/snacks.jpg";
import drinks from "@/assets/drinks.jpg";
import dessert from "@/assets/dessert.jpg";
import { categories, menu, type Category } from "@/data/menu";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import { MenuCard } from "./MenuCard";
import { restaurant, TBC, telHref, type Location } from "@/data/restaurant";
import { navLinks } from "./Navbar";

function SectionHead({ eyebrow, title, light, children }: { eyebrow: string; title: string; light?: boolean; children?: React.ReactNode }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className={`mt-3 text-4xl md:text-5xl ${light ? "text-on-ink" : "text-foreground"}`}>{title}</h2>
      {children && <p className={`mt-4 ${light ? "text-on-ink-muted" : "text-muted-foreground"}`}>{children}</p>}
    </div>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink">
      <img src={hero} alt="Grilled meats, rice and vegetables served by candlelight" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="relative mx-auto w-full max-w-7xl px-5 pt-24 pb-16 lg:px-8">
        <p className="eyebrow animate-in fade-in slide-in-from-bottom-2 duration-700">Kigali · Rwanda</p>
        <h1 className="mt-4 max-w-4xl text-5xl leading-[1.02] text-on-ink sm:text-6xl lg:text-8xl animate-in fade-in slide-in-from-bottom-4 duration-700">
          Welcome to <em className="text-gold">Keretii</em> Restaurant
        </h1>
        <p className="mt-6 max-w-xl text-lg text-on-ink-muted md:text-xl">
          {restaurant.tagline} A table set for friends, family and every good moment in between.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a href="#menu" className="btn-gold">Explore Our Menu</a>
          <a href="#contact" className="btn-outline-light">Contact Us</a>
        </div>
      </div>
    </section>
  );
}

const aboutPoints = [
  { icon: Leaf, title: "Quality ingredients", text: "Fresh produce chosen with care." },
  { icon: Heart, title: "Welcoming hospitality", text: "Service that makes you feel at home." },
  { icon: Sparkles, title: "Memorable dining", text: "Food and moments worth sharing." },
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
        <div className="relative">
          <img src={interior} alt="Warmly lit restaurant dining room with wooden tables" loading="lazy" width={1024} height={1024} className="aspect-[4/5] w-full rounded-2xl object-cover shadow-card" />
          <img src={chef} alt="Chef finishing a plated dish" loading="lazy" width={1024} height={1280} className="absolute -bottom-8 -right-4 hidden w-44 rounded-xl border-4 border-background object-cover shadow-card sm:block md:w-56" />
        </div>
        <div>
          <p className="eyebrow">Our Story</p>
          <h2 className="mt-3 text-4xl md:text-6xl">Good Food. Great Moments.</h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Keretii Restaurant is a place to slow down, gather around the table and enjoy food prepared with care.
            Whether it's a quick lunch, a family dinner or a celebration, we want every visit to feel warm and unhurried.
          </p>
          <ul className="mt-10 grid gap-6 sm:grid-cols-3">
            {aboutPoints.map(({ icon: Icon, title, text }) => (
              <li key={title}>
                <Icon className="h-7 w-7 text-accent" aria-hidden />
                <h3 className="mt-3 font-sans text-base font-bold">{title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function MenuSection() {
  const [active, setActive] = useState<Category | "All">("All");
  const items = active === "All" ? menu : menu.filter((m) => m.category === active);
  return (
    <section id="menu" className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHead eyebrow="The Menu" title="A Taste of Keretii">
          A sample selection to show the style of the menu. Real dishes and prices coming soon.
        </SectionHead>
        <div role="group" aria-label="Filter menu by category" className="mb-12 flex flex-wrap justify-center gap-2">
          {(["All", ...categories] as const).map((c) => (
            <Button
              key={c}
              onClick={() => setActive(c)}
              aria-pressed={active === c}
              className={`min-h-11 rounded-full px-5 text-sm font-semibold transition-colors ${active === c ? "bg-ink text-on-ink" : "bg-card text-foreground hover:bg-border"}`}
            >
              {c}
            </Button>
          ))}
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((i) => <MenuCard key={i.id} item={i} />)}
        </div>
      </div>
    </section>
  );
}

const highlights = [
  { icon: ChefHat, title: "Freshly prepared", text: "Meals cooked to order in our kitchen." },
  { icon: Sofa, title: "Comfortable atmosphere", text: "A relaxed space to sit back and stay a while." },
  { icon: Users, title: "Friendly service", text: "A team happy to help you choose." },
  { icon: Heart, title: "Memorable moments", text: "Room for birthdays, dates and gatherings." },
];

export function Highlights() {
  return (
    <section className="bg-ink py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHead eyebrow="Why Keretii" title="Made for Good Company" light />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-on-ink/10 bg-ink-soft p-8 transition-colors hover:border-gold/50">
              <Icon className="h-8 w-8 text-gold" aria-hidden />
              <h3 className="mt-5 text-2xl text-on-ink">{title}</h3>
              <p className="mt-2 text-sm text-on-ink-muted">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const gallery = [
  { src: hero, alt: "Mixed grill plate by candlelight", span: "md:col-span-2 md:row-span-2" },
  { src: chef, alt: "Chef plating food in the kitchen", span: "md:row-span-2" },
  { src: grill, alt: "Beef skewers with grilled plantain", span: "" },
  { src: interior, alt: "Restaurant interior at night", span: "" },
  { src: local, alt: "Bowl of greens stew with plantain and beans", span: "" },
  { src: drinks, alt: "Passion fruit juice and ginger tea", span: "" },
  { src: snacks, alt: "Golden samosas with chili dip", span: "md:col-span-2" },
  { src: dessert, alt: "Chocolate dessert with berries", span: "" },
];

export function Gallery() {
  const [idx, setIdx] = useState<number | null>(null);
  useEffect(() => {
    if (idx === null) return;
    const on = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIdx(null);
      if (e.key === "ArrowRight") setIdx((i) => (i! + 1) % gallery.length);
      if (e.key === "ArrowLeft") setIdx((i) => (i! - 1 + gallery.length) % gallery.length);
    };
    window.addEventListener("keydown", on);
    return () => window.removeEventListener("keydown", on);
  }, [idx]);

  return (
    <section id="gallery" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHead eyebrow="Gallery" title="From Our Kitchen to Your Table" />
        <div className="grid auto-rows-[180px] grid-cols-2 gap-3 md:auto-rows-[220px] md:grid-cols-4 md:gap-4">
          {gallery.map((g, i) => (
            <button key={i} onClick={() => setIdx(i)} aria-label={`Open image: ${g.alt}`} className={`group overflow-hidden rounded-xl ${g.span}`}>
              <img src={g.src} alt={g.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </button>
          ))}
        </div>
      </div>
      {idx !== null && (
        <div role="dialog" aria-modal="true" aria-label={gallery[idx]!.alt} className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/95 p-4" onClick={() => setIdx(null)}>
          <button autoFocus aria-label="Close" className="absolute right-4 top-4 inline-flex h-12 w-12 items-center justify-center rounded-full text-on-ink hover:bg-on-ink/10" onClick={() => setIdx(null)}>
            <X />
          </button>
          <img src={gallery[idx]!.src} alt={gallery[idx]!.alt} className="max-h-[85vh] max-w-full rounded-xl object-contain" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </section>
  );
}

const testimonials = [
  { text: "The kind of place you come back to with friends. Warm service and a relaxed atmosphere.", name: "Sample Guest A" },
  { text: "Beautifully presented food and a calm, welcoming space for a family dinner.", name: "Sample Guest B" },
  { text: "A lovely spot for an evening out. Everything felt thoughtful and unhurried.", name: "Sample Guest C" },
];

export function Testimonials() {
  return (
    <section className="bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHead eyebrow="Guest Words" title="What a Visit Feels Like">
          Demonstration reviews only — to be replaced with real guest feedback.
        </SectionHead>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-2xl bg-card p-8 shadow-card">
              <Quote className="h-7 w-7 text-gold" aria-hidden />
              <blockquote className="mt-4 font-serif text-2xl leading-snug">{t.text}</blockquote>
              <figcaption className="mt-6 text-sm text-muted-foreground">— {t.name} (demo)</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function LocationActions({ loc }: { loc: Location }) {
  return (
    <div className="mt-6 flex flex-wrap gap-3">
      <a href={loc.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn-gold">
        <Navigation className="h-4 w-4" /> Get Directions
      </a>
      {loc.phone ? (
        <a href={telHref(loc.phone)} className="btn-outline-dark"><Phone className="h-4 w-4" /> Call Us</a>
      ) : (
        <span className="inline-flex min-h-11 items-center gap-2 rounded-full border border-dashed border-border px-5 text-sm text-muted-foreground">
          <Phone className="h-4 w-4" /> Phone to be confirmed
        </span>
      )}
    </div>
  );
}

function Detail({ icon: Icon, label, value }: { icon: typeof MapPin; label: string; value: string | null }) {
  return (
    <div className="flex gap-3">
      <Icon className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden />
      <div>
        <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{label}</p>
        <p className={value ? "" : "italic text-muted-foreground"}>{value ?? TBC}</p>
      </div>
    </div>
  );
}

export function Locations() {
  const locs = restaurant.locations;
  const [sel, setSel] = useState(locs[0]!.id);
  const current = locs.find((l) => l.id === sel)!;
  const images = [interior, grill];
  return (
    <section id="locations" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHead eyebrow="Our Locations" title="Find Us in Kigali">
          Proposed branch areas. Exact addresses and hours will be added once confirmed.
        </SectionHead>
        <div className="grid gap-8 md:grid-cols-2">
          {locs.map((l, i) => (
            <article key={l.id} className="overflow-hidden rounded-2xl bg-card shadow-card">
              <img src={images[i % images.length]} alt={`Keretii ${l.name}`} loading="lazy" className="aspect-[16/9] w-full object-cover" />
              <div className="p-7">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-3xl">{l.name}</h3>
                  {!l.confirmed && <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold">Proposed</span>}
                </div>
                <p className="text-sm text-muted-foreground">{l.district} · {l.area}</p>
                <div className="mt-6 grid gap-4">
                  <Detail icon={MapPin} label="Address" value={l.address} />
                  <Detail icon={Clock} label="Opening hours" value={l.hours} />
                </div>
                <LocationActions loc={l} />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 rounded-3xl bg-ink p-8 text-on-ink md:p-12">
          <p className="eyebrow">Find Your Nearest Keretii</p>
          <h3 className="mt-3 text-3xl md:text-4xl">Choose a branch</h3>
          {locs.length > 1 && (
            <div role="tablist" aria-label="Branches" className="mt-6 flex flex-wrap gap-2">
              {locs.map((l) => (
                <button
                  key={l.id}
                  role="tab"
                  aria-selected={sel === l.id}
                  onClick={() => setSel(l.id)}
                  className={`min-h-11 rounded-full px-5 text-sm font-semibold transition-colors ${sel === l.id ? "bg-gold text-ink" : "border border-on-ink/30 hover:bg-on-ink/10"}`}
                >
                  {l.name}
                </button>
              ))}
            </div>
          )}
          <div role="tabpanel" className="mt-8 grid gap-8 md:grid-cols-2">
            <div className="space-y-3 text-on-ink-muted">
              <p className="text-2xl font-serif text-on-ink">{current.name}, {current.district}</p>
              <p><MapPin className="mr-2 inline h-4 w-4 text-gold" />{current.address ?? `${current.area} — exact address ${TBC.toLowerCase()}`}</p>
              <p><Clock className="mr-2 inline h-4 w-4 text-gold" />{current.hours ?? `Hours ${TBC.toLowerCase()}`}</p>
              <p><Phone className="mr-2 inline h-4 w-4 text-gold" />{current.phone ?? `Phone ${TBC.toLowerCase()}`}</p>
              <div className="flex flex-wrap gap-3 pt-4">
                <a href={current.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn-gold"><Navigation className="h-4 w-4" /> Get Directions</a>
                {current.phone && <a href={telHref(current.phone)} className="btn-outline-light"><Phone className="h-4 w-4" /> Call Us</a>}
              </div>
            </div>
            <iframe
              title={`Map of ${current.name} area`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(`${current.name}, ${current.area}`)}&output=embed`}
              loading="lazy"
              className="h-64 w-full rounded-xl border-0 md:h-full md:min-h-64"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const socialIcons = { Instagram, Facebook, X: Twitter };

export function Contact() {
  const r = restaurant;
  return (
    <section id="contact" className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <SectionHead eyebrow="Visit & Contact" title="We'd Love to Host You">
          Contact details will appear here as soon as they're confirmed.
        </SectionHead>
        <div className="grid gap-8 rounded-3xl bg-card p-8 shadow-card md:grid-cols-2 md:p-12">
          <div className="grid gap-5">
            <Detail icon={MapPin} label="Address" value={r.locations.find((l) => l.address)?.address ?? null} />
            <div className="flex gap-3">
              <Phone className="mt-0.5 h-5 w-5 text-accent" aria-hidden />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Telephone</p>
                {r.phone ? <a className="hover:text-accent" href={telHref(r.phone)}>{r.phone}</a> : <p className="italic text-muted-foreground">{TBC}</p>}
              </div>
            </div>
            <div className="flex gap-3">
              <Mail className="mt-0.5 h-5 w-5 text-accent" aria-hidden />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Email</p>
                {r.email ? <a className="hover:text-accent" href={`mailto:${r.email}`}>{r.email}</a> : <p className="italic text-muted-foreground">{TBC}</p>}
              </div>
            </div>
            <Detail icon={Clock} label="Opening hours" value={r.hours} />
          </div>
          <div className="flex flex-col justify-between gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Follow us</p>
              <SocialLinks />
            </div>
            <div className="flex flex-col gap-3">
              <a href={r.locations[0]!.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn-gold"><Navigation className="h-4 w-4" /> Get Directions</a>
              {r.whatsapp && (
                <a href={`https://wa.me/${r.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn-outline-dark"><MessageCircle className="h-4 w-4" /> Chat on WhatsApp</a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialLinks({ light }: { light?: boolean }) {
  const live = restaurant.social.filter((s) => s.url);
  if (!live.length) return <p className={`mt-2 text-sm italic ${light ? "text-on-ink-muted" : "text-muted-foreground"}`}>Social profiles {TBC.toLowerCase()}</p>;
  return (
    <div className="mt-3 flex gap-3">
      {live.map((s) => {
        const Icon = socialIcons[s.label];
        return (
          <a key={s.label} href={s.url!} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="inline-flex h-11 w-11 items-center justify-center rounded-full border hover:border-gold hover:text-gold">
            <Icon className="h-5 w-5" />
          </a>
        );
      })}
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink pt-16 pb-8 text-on-ink-muted">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-3 lg:px-8">
        <div>
          <a href="#home" aria-label="Keretii Restaurant home" className="inline-block"><Logo /></a>
          <p className="mt-3 max-w-xs text-sm">{restaurant.description}</p>
        </div>
        <nav aria-label="Footer">
          <p className="eyebrow">Explore</p>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {navLinks.map((l) => <li key={l.href}><a href={l.href} className="hover:text-gold">{l.label}</a></li>)}
          </ul>
        </nav>
        <div>
          <p className="eyebrow">Contact</p>
          <ul className="mt-4 space-y-2 text-sm">
            {restaurant.locations.map((l) => <li key={l.id}>{l.name}, {l.district}</li>)}
            <li>{restaurant.phone ?? `Phone ${TBC.toLowerCase()}`}</li>
            <li>{restaurant.email ?? `Email ${TBC.toLowerCase()}`}</li>
          </ul>
          <SocialLinks light />
        </div>
      </div>
      <p className="mx-auto mt-12 max-w-7xl border-t border-on-ink/10 px-5 pt-6 text-xs lg:px-8">
        © {new Date().getFullYear()} Keretii Restaurant. All rights reserved.
      </p>
    </footer>
  );
}

export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  if (!show) return null;
  return (
    <a href="#home" aria-label="Back to top" className="fixed bottom-6 right-6 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold text-ink shadow-card hover:brightness-110">
      <ArrowUp className="h-5 w-5" />
    </a>
  );
}
