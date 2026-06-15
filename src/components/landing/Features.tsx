import {
  Zap,
  CreditCard,
  BellRing,
  LineChart,
  FolderLock,
  LayoutGrid,
  FileSignature,
  Wallet,
  CalendarSync,
  Video,
  Sparkles,
  Heart,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "./Reveal";

const features: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Zap, title: "Mais produtividade", desc: "Automatize tarefas repetitivas e recupere horas preciosas da sua semana." },
  { icon: CreditCard, title: "Menos inadimplência", desc: "Você sabe quem pagou ou quem está com valores pendente." },
  { icon: BellRing, title: "Menos faltas", desc: "Você pode enviar lembretes para os seus pacientes. Eles lembram, você atende." },
  { icon: LineChart, title: "Acompanhamento dos pacientes", desc: "Histórico completo e evolução de sessões. Chegue preparado sempre." },
  { icon: FolderLock, title: "Informações organizadas", desc: "Prontuários digitais seguros, acessíveis a qualquer hora, em qualquer lugar." },
  { icon: LayoutGrid, title: "Um só app para tudo", desc: "Agenda, prontuários, finanças e documentos em uma plataforma única." },
  { icon: FileSignature, title: "Documentos com sua marca", desc: "Declarações e relatórios gerados automaticamente com seu CRP e identidade visual." },
  { icon: Wallet, title: "Financeiro em tempo real", desc: "Veja receitas, despesas e inadimplência sem planilha e sem achismo." },
  { icon: CalendarSync, title: "Google Calendar integrado", desc: "Agenda sincronizada em todos os seus dispositivos, sem dupla marcação." },
  { icon: Video, title: "Google Meet integrado", desc: "Link de videochamada gerado automaticamente para cada sessão online." },
  { icon: Sparkles, title: "Simples desde o primeiro dia", desc: "Interface intuitiva, sem documentação complicada. Você começa hoje e já sente a diferença." },
  { icon: Heart, title: "Suporte humano", desc: "Pessoas reais que entendem a realidade do seu consultório. Sempre que precisar." },
];

export function Features() {
  return (
    <section id="funcionalidades" className="py-28 px-6">
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-2xl mb-16">
          <span className="text-sm uppercase tracking-widest text-primary">Funcionalidades</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-primary-dark">
            Tudo o que o seu consultório precisa. Nada do que ele não precisa.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 0.08}>
              <div className="group h-full rounded-2xl bg-card border border-border p-6 hover:border-primary/40 hover:shadow-[0_20px_50px_-25px_rgba(77,125,132,0.4)] transition-all">
                <div className="h-11 w-11 rounded-xl bg-primary/10 text-primary grid place-items-center group-hover:bg-primary group-hover:text-primary-foreground transition">
                  <f.icon size={20} strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 font-display text-lg text-primary-dark">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
