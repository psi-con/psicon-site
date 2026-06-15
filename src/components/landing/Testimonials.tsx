import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "PsiCon é exatamente o que eu precisava: direto, simples e sem complicação. Em poucos minutos eu já estava usando tudo, sem precisar de tutorial.",
    author: "Camila R.",
    role: "Psicóloga clínica · São Paulo",
  },
  {
    quote:
      "Eu tinha agenda no Google, prontuário no caderno e financeiro numa planilha. Hoje está tudo num lugar só — e eu finalmente sei quanto faturei no mês sem precisar fazer conta.",
    author: "Rafael M.",
    role: "Psicólogo · Belo Horizonte",
  },
  {
    quote:
      "A emissão de documentos é o que mais me surpreendeu. Declaração de comparecimento em dois cliques, com meus dados e CRP já preenchidos.",
    author: "Juliana S.",
    role: "Psicóloga clínica · Curitiba",
  },
  {
    quote:
      "Atendo online e presencial. O PsiCon entende essa rotina de psicólogo, não é genérico como outros sistemas que eu testei.",
    author: "Bruno A.",
    role: "Psicólogo · Porto Alegre",
  },
  {
    quote:
      "O prontuário é simples, seguro e do jeito que eu preciso. Não tenho mais medo de perder uma anotação importante.",
    author: "Marina P.",
    role: "Psicóloga · Florianópolis",
  },
  {
    quote:
      "Inadimplência caiu absurdamente. Hoje eu sei exatamente quem pagou e quem ainda está pendente, sem precisar abrir extrato bancário.",
    author: "Eduardo L.",
    role: "Psicólogo clínico · Recife",
  },
];

export function Testimonials() {
  return (
    <section className="px-6 py-24 md:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Quem já usa, recomenda
          </span>
          <h2 className="mt-5 font-display text-4xl md:text-5xl text-primary-dark leading-tight">
            Psicólogos que trocaram o caos
            <br />
            <span className="italic text-primary">por uma rotina mais leve.</span>
          </h2>
        </motion.div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.author}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              className="group relative flex flex-col rounded-2xl bg-card border border-border p-7 shadow-sm hover:shadow-lg hover:border-primary/40 hover:-translate-y-1 transition-all duration-300"
            >
              <Quote
                size={28}
                className="text-primary/30 group-hover:text-primary/60 transition"
                aria-hidden
              />
              <blockquote className="mt-4 text-[15px] leading-relaxed text-foreground">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-border">
                <div className="flex items-center gap-1 mb-2 text-primary">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} size={14} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <p className="font-medium text-primary-dark text-sm">{t.author}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{t.role}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
