import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
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
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${open ? "bg-white lg:dark:bg-green-950" : scrolled ? "bg-white backdrop-blur" : "bg-transparent"}`}
    >
      <nav aria-label="Main" className="mx-auto flex h-22 max-w-7xl items-center justify-between px-5 py-2 lg:px-8">
        <a href="#home" aria-label="Keretii Restaurant home">
          <Logo />
        </a>
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className={`text-sm font-bold transition-colors ${scrolled || open ? "text-green-950 dark:text-green-950" : "text-white"} hover:text-gold dark:hover:text-gold`}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
        <ThemeToggle scrolled={scrolled || open} />
        <a href="#menu" className="btn-gold hidden lg:inline-flex">Explore Menu</a>
        <Button variant="ghost"
          className={`inline-flex h-11 w-11 items-center justify-center rounded-full ${open ? "text-green-950" : scrolled ? "text-green-950 dark:text-green-950" : "text-white dark:text-white"} hover:text-gold dark:hover:text-gold lg:hidden`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </Button>
        </div>
      </nav>
      {open && (
        <ul id="mobile-nav" className="fixed inset-x-0 bottom-0 top-22 flex flex-col justify-center overflow-y-auto space-y-1 border-t border-green-950/10 bg-white px-5 pb-6 pt-2 text-green-950 dark:border-white/10 dark:bg-green-950 dark:text-white lg:hidden">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="block py-3 text-lg text-green-950 hover:text-gold dark:text-white dark:hover:text-gold">
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

function ThemeToggle({ scrolled }: { scrolled: boolean }) {
  const [dark, setDark] = useState(false);
  useEffect(() => setDark(document.documentElement.classList.contains("dark")), []);
  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try { localStorage.setItem("theme", next ? "dark" : "light"); } catch {}
  };
  return (
    <Button variant="ghost" onClick={toggle} aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className={`inline-flex h-11 w-11 items-center justify-center ${scrolled ? "text-green-950" : "text-white dark:text-white"} font-bold rounded-full hover:bg-on-ink/10 hover:text-gold dark:hover:text-gold`}>
      {dark ? <Sun /> : <Moon />}
    </Button>
  );
}
