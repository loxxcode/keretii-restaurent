import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#menu", label: "Menu" },
  { href: "#gallery", label: "Gallery" },
  { href: "#locations", label: "Locations" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${scrolled || open ? "bg-ink/95 backdrop-blur" : "bg-transparent"}`}
    >
      <nav aria-label="Main" className="mx-auto flex h-22 max-w-7xl items-center justify-between px-5 py-2 lg:px-8">
        <a href="#home" aria-label="Keretii Restaurant home">
          <Logo />
        </a>
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm font-medium text-on-ink-muted transition-colors hover:text-gold">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#menu" className="btn-gold hidden lg:inline-flex">Explore Menu</a>
        <Button variant="ghost"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-on-ink lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </nav>
      {open && (
        <ul id="mobile-nav" className="space-y-1 border-t border-on-ink/10 px-5 pb-6 pt-2 lg:hidden">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="block py-3 text-lg text-on-ink hover:text-gold">
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-3">
            <a href="#menu" onClick={() => setOpen(false)} className="btn-gold w-full">Explore Menu</a>
          </li>
        </ul>
      )}
    </header>
  );
}
