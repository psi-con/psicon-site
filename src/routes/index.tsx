import { createFileRoute } from "@tanstack/react-router";
import { Landing } from "@/components/landing/Landing";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PsiCon — O consultório online completo para psicólogos" },
      {
        name: "description",
        content:
          "Agenda, prontuários, cobranças e documentos em uma plataforma única, feita exclusivamente para psicólogos. Atenda mais, se preocupe menos.",
      },
      { property: "og:title", content: "PsiCon — O consultório online completo para psicólogos" },
      {
        property: "og:description",
        content:
          "A plataforma feita exclusivamente para psicólogos. Tenha controle total da sua clínica em um só lugar.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Manrope:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  component: Landing,
});
