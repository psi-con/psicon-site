import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import {
  CalendarDays,
  CreditCard,
  FileText,
  FileSignature,
  Globe,
  Check,
  NotebookPen,
} from "lucide-react";
import type { ReactNode } from "react";
import agendaAsset from "@/assets/agenda-v2.png.asset.json";
import prontuarioAsset from "@/assets/prontuario.png.asset.json";
import faturamentoAsset from "@/assets/faturamento.png.asset.json";
import graficoAsset from "@/assets/grafico.png.asset.json";
import landingPageAsset from "@/assets/landing-page.png.asset.json";

/* ---------- Browser-chrome frame wrapping a real screenshot ---------- */

function BrowserFrame({
  src,
  alt,
  children,
}: {
  src: string;
  alt: string;
  children?: ReactNode;
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-card border border-border shadow-[0_30px_80px_-30px_rgba(77,125,132,0.35)]">
      <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-border bg-secondary/50">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-[10px] text-muted-foreground tracking-wide">
          app.psicon.com.br
        </span>
      </div>
      <div className="relative">
        <img src={src} alt={alt} className="block w-full h-auto" loading="lazy" />
        {children}
      </div>
    </div>
  );
}

function ImageMock({
  src,
  alt,
  children,
}: {
  src: string;
  alt: string;
  children?: ReactNode;
}) {
  return (
    <div className="relative">
      <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-primary/20 via-primary/5 to-transparent blur-2xl" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative"
      >
        <BrowserFrame src={src} alt={alt}>
          {children}
        </BrowserFrame>
      </motion.div>
    </div>
  );
}

function AgendaMock() {
  return <ImageMock src={agendaAsset.url} alt="Agenda semanal do PsiCon" />;
}

function ProntuarioImageMock() {
  return <ImageMock src={prontuarioAsset.url} alt="Prontuário do paciente no PsiCon" />;
}

function MarketingMock() {
  return <ImageMock src={landingPageAsset.url} alt="Landing page do psicólogo no PsiCon" />;
}

/* ---------- Financeiro: stack the two finance screenshots ---------- */

function FinanceMock() {
  return (
    <div className="relative">
      <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-primary/20 via-primary/5 to-transparent blur-2xl" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative space-y-4"
      >
        <div className="relative rounded-2xl overflow-hidden border border-border bg-card shadow-[0_20px_60px_-30px_rgba(77,125,132,0.4)]">
          <img
            src={graficoAsset.url}
            alt="Gráfico de lucro líquido mensal"
            className="block w-full h-auto"
            loading="lazy"
          />
        </div>
        <BrowserFrame src={faturamentoAsset.url} alt="Faturamento e lançamentos no PsiCon" />
      </motion.div>
    </div>
  );
}

/* ---------- Stylized mock for "Emissão de Documentos" ---------- */

function DocumentosMock() {
  const docs = [
    { title: "Declaração de comparecimento", tag: "Emitido" },
    { title: "Atestado psicológico", tag: "Pronto" },
    { title: "Relatório de evolução", tag: "Em revisão" },
  ];
  return (
    <div className="relative">
      <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-primary/20 via-primary/5 to-transparent blur-2xl" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative rounded-3xl bg-card border border-border shadow-[0_30px_80px_-30px_rgba(77,125,132,0.35)] p-6"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
              Documentos do paciente
            </p>
            <p className="font-display text-lg text-primary-dark mt-0.5">
              Fernanda O. Santos
            </p>
          </div>
          <button className="inline-flex items-center gap-1.5 rounded-full bg-primary text-primary-foreground text-xs px-3 py-2">
            <FileSignature size={12} /> Emitir novo
          </button>
        </div>

        <div className="mt-5 space-y-3">
          {docs.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 + i * 0.1, duration: 0.5 }}
              className="flex items-center gap-3 rounded-xl border border-border p-3"
            >
              <span className="h-10 w-10 rounded-lg bg-primary/10 text-primary grid place-items-center">
                <FileText size={16} />
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-primary-dark truncate">{d.title}</p>
                <p className="text-[11px] text-muted-foreground">
                  Modelo automático • assinado digitalmente
                </p>
              </div>
              <span className="text-[10px] px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                {d.tag}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-5 flex items-center justify-between text-[11px] text-muted-foreground"
        >
          <span className="inline-flex items-center gap-1 text-success">
            <Check size={12} /> Gerado em segundos
          </span>
          <span>PDF • CFP-compatível</span>
        </motion.div>
      </motion.div>
    </div>
  );
}

/* ---------- Showcase blocks ---------- */

type Block = {
  eyebrow: string;
  title: string;
  body: string;
  bullets: string[];
  icon: typeof CalendarDays;
  mock: ReactNode;
};

const blocks: Block[] = [
  {
    eyebrow: "Agenda inteligente",
    title: "Sua semana inteira, organizada antes do café.",
    body:
      "Sincroniza com o Google Calendar e mostra todas as sessões — presenciais e online — em um só lugar. Sem dupla marcação, sem WhatsApp confuso.",
    bullets: [
      "Sincronização com Google Calendar",
      "Link do Meet criado automaticamente",
      "Visualização por dia, semana ou mês",
    ],
    icon: CalendarDays,
    mock: <AgendaMock />,
  },
  {
    eyebrow: "Prontuário digital",
    title: "Toda a evolução do paciente, sempre à mão.",
    body:
      "Prontuários estruturados e acessíveis de qualquer lugar. Chegue na sessão com contexto e não com a sensação de que está esquecendo alguma coisa.",
    bullets: [
      "Acesso seguro de qualquer dispositivo",
      "Informações sempre atualizadas",
      "Registro de sessões",
    ],
    icon: NotebookPen,
    mock: <ProntuarioImageMock />,
  },
  {
    eyebrow: "Emissão de documentos",
    title: "Declarações, atestados e relatórios em segundos.",
    body:
      "Emita documentos profissionais direto da plataforma, com modelos prontos e dados do paciente preenchidos automaticamente. Sem Word, sem retrabalho, sem dor de cabeça.",
    bullets: [
      "Declarações de comparecimento automáticas",
      "Atestados e relatórios com modelos prontos",
      "PDF gerado com seus dados profissionais",
    ],
    icon: FileSignature,
    mock: <DocumentosMock />,
  },
  {
    eyebrow: "Financeiro em tempo real",
    title: "Você atende, o PsiCon registra.",
    body:
      "Registro de atendimentos e gestão financeira do seu consultório em tempo real. Painel com receitas, despesas, visibilidade total sobre quem já pagou e quem ainda não. Adeus planilha, adeus inadimplência invisível!",
    bullets: [
      "Painel de receita, despesa e a receber",
      "Lançamentos por paciente e por status",
      "Relatórios prontos para o contador",
    ],
    icon: CreditCard,
    mock: <FinanceMock />,
  },
  {
    eyebrow: "Marketing digital",
    title: "Sua presença online, já embutida na plataforma.",
    body:
      "Todo cliente PsiCon ganha uma landing page profissional para divulgação e contato — com seu perfil, especialidades e formulário para o paciente solicitar uma sessão. Marketing pronto, sem precisar contratar ninguém.",
    bullets: [
      "Landing page personalizada por psicólogo",
      "Formulário de contato integrado à agenda",
      "Pronta para compartilhar nas redes sociais",
    ],
    icon: Globe,
    mock: <MarketingMock />,
  },
];

export function Showcase() {
  return (
    <section id="vantagens" className="px-6 py-28 space-y-32">
      <Reveal className="mx-auto max-w-3xl text-center">
        <span className="text-sm uppercase tracking-widest text-primary">
          Como o PsiCon trabalha por você
        </span>
        <h2 className="mt-3 font-display text-4xl md:text-5xl text-primary-dark">
          Cinco frentes resolvidas. Uma plataforma só.
        </h2>
        <p className="mt-5 text-muted-foreground text-lg">
          O que antes era planilha, papel e três apps diferentes — agora acontece em poucos cliques.
        </p>
      </Reveal>

      <div className="mx-auto max-w-7xl space-y-32">
        {blocks.map((b, i) => {
          const reversed = i % 2 === 1;
          const Icon = b.icon;
          return (
            <div
              key={b.title}
              className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center"
            >
              <Reveal className={reversed ? "lg:order-2" : ""}>
                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-primary">
                  <span className="h-8 w-8 rounded-lg bg-primary/10 grid place-items-center">
                    <Icon size={14} />
                  </span>
                  {b.eyebrow}
                </div>
                <h3 className="mt-4 font-display text-3xl md:text-4xl text-primary-dark leading-tight">
                  {b.title}
                </h3>
                <p className="mt-5 text-muted-foreground text-base leading-relaxed">
                  {b.body}
                </p>
                <ul className="mt-7 space-y-3">
                  {b.bullets.map((bl) => (
                    <li key={bl} className="flex items-start gap-3 text-sm">
                      <span className="mt-1 h-5 w-5 shrink-0 rounded-full bg-primary/15 text-primary grid place-items-center">
                        <Check size={12} strokeWidth={2.5} />
                      </span>
                      <span className="text-foreground">{bl}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              <div className={reversed ? "lg:order-1" : ""}>{b.mock}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
