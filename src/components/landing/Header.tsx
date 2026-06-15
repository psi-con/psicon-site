import { useEffect, useState } from "react";
import logoAsset from "@/assets/psicon-logo-full.png.asset.json";


const links = [
  { href: "#funcionalidades", label: "Funcionalidades" },
  { href: "#comparativo", label: "Comparativo" },
  { href: "#planos", label: "Planos" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <img
            src={logoAsset.url}
            alt="PsiCon"
            className="h-12 w-auto object-contain"
          />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-primary-dark transition"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#planos"
            className="hidden sm:inline-flex h-10 items-center rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground hover:bg-primary-dark transition"
          >
            Começar agora
          </a>
          <button
            className="md:hidden h-10 w-10 grid place-items-center rounded-lg border border-border"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <span className="block w-5 h-px bg-foreground relative before:content-[''] before:absolute before:w-5 before:h-px before:bg-foreground before:-top-1.5 after:content-[''] after:absolute after:w-5 after:h-px after:bg-foreground after:top-1.5" />
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-6 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm text-muted-foreground"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
