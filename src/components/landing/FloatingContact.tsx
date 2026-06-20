import { Mail } from "lucide-react";
import { useState } from "react";

export function FloatingContact() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="fixed right-5 top-1/2 -translate-y-1/2 z-50 flex items-center gap-3">
      <div
        className={`
          bg-primary-dark text-primary-foreground text-xs font-medium px-3 py-1.5 rounded-full
          whitespace-nowrap shadow-lg pointer-events-none transition-all duration-200
          ${hovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-3"}
        `}
      >
        psicon.contato@gmail.com
      </div>

      <a
        href="mailto:psicon.contato@gmail.com"
        aria-label="Entrar em contato"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="h-12 w-12 rounded-full bg-primary text-primary-foreground shadow-[0_4px_24px_rgba(77,125,132,0.45)] flex items-center justify-center transition-transform duration-150 hover:scale-110 active:scale-95"
      >
        <Mail size={20} />
      </a>
    </div>
  );
}
