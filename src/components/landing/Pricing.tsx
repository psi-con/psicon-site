import { Check } from "lucide-react";
import { Reveal } from "./Reveal";

const perks = [
  "Agenda + Google Calendar",
  "Prontuários digitais ilimitados",
  "Cobranças automáticas",
  "Documentos com sua marca",
  "Sessões online com Google Meet",
  "Suporte humano",
];

export function Pricing() {
  return (
    <section id="planos" className="py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl mb-14 text-center mx-auto">
          <span className="text-sm uppercase tracking-widest text-primary">Planos</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-primary-dark">
            Um preço justo. Sem surpresas.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Reveal>
            <div className="h-full rounded-3xl border border-border bg-card p-8 flex flex-col">
              <p className="font-display text-2xl text-primary-dark">Mensal</p>
              <p className="mt-4 flex items-baseline gap-1">
                <span className="font-display text-5xl text-primary-dark">R$ 89</span>
                <span className="text-muted-foreground text-sm">/mês</span>
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                Sem contrato, cancele quando quiser.
              </p>
              <ul className="mt-8 space-y-3 text-sm">
                {perks.map((p) => (
                  <li key={p} className="flex gap-2">
                    <Check size={16} className="text-primary mt-0.5 shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=74261f8448ff4014a20c1c8ca3dc38e9"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 h-12 inline-flex items-center justify-center rounded-full border border-primary text-primary font-medium hover:bg-primary hover:text-primary-foreground transition"
              >
                Assinar agora
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative h-full rounded-3xl bg-primary-dark text-primary-foreground p-8 flex flex-col shadow-[0_30px_80px_-20px_rgba(77,125,132,0.5)]">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs px-4 py-1.5 rounded-full font-medium tracking-wide">
                Mais escolhido
              </span>
              <p className="font-display text-2xl">Anual</p>
              <p className="mt-4 flex items-baseline gap-1">
                <span className="font-display text-5xl">R$ 69</span>
                <span className="opacity-70 text-sm">/mês</span>
              </p>
              <p className="mt-3 text-sm text-primary-foreground/80">
                Economize mais de 20% pagando por ano. O melhor custo-benefício para crescer com consistência.
              </p>
              <ul className="mt-8 space-y-3 text-sm">
                {perks.map((p) => (
                  <li key={p} className="flex gap-2">
                    <Check size={16} className="text-primary-foreground/90 mt-0.5 shrink-0" />
                    <span className="text-primary-foreground/90">{p}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=8a234647592a48a7a0fe9e0d9cd2c5d6"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 h-12 inline-flex items-center justify-center rounded-full bg-primary-foreground text-primary-dark font-medium hover:opacity-90 transition"
              >
                Assinar agora
              </a>
            </div>
          </Reveal>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          Todos os planos incluem todas as funcionalidades. Sem cobrança por paciente, sem surpresa na fatura.
        </p>
      </div>
    </section>
  );
}
