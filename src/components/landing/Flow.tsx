import { Reveal } from "./Reveal";
import { motion } from "framer-motion";

const steps = [
  { n: "01", title: "Paciente agenda", desc: "Você ou o paciente marcam a sessão na agenda integrada." },
  { n: "02", title: "Você se prepara", desc: "Planeje a sessão com calma: acesse o prontuário, revise a evolução e chegue pronto para acolher." },
  { n: "03", title: "Sessão acontece", desc: "Presencial ou no Meet integrado, com prontuário aberto e pronto." },
  { n: "04", title: "Tudo se atualiza", desc: "Prontuário salvo, sessão registrada, cobrança atualizada e financeiro recalculado." },
];

export function Flow() {
  return (
    <section className="px-6 py-28 bg-secondary/40">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-3xl mx-auto text-center">
          <span className="text-sm uppercase tracking-widest text-primary">
            Do agendamento ao pagamento
          </span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-primary-dark">
            Um fluxo. Quatro passos. Zero esforço administrativo.
          </h2>
        </Reveal>

        <div className="relative mt-20 grid md:grid-cols-4 gap-8">
          {/* connecting dashed line */}
          <div className="hidden md:block absolute top-7 left-[12%] right-[12%] h-px border-t-2 border-dashed border-primary/30" />
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.1} className="relative text-center">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 mx-auto h-14 w-14 rounded-full bg-primary text-primary-foreground grid place-items-center font-display text-lg shadow-[0_10px_30px_-10px_rgba(77,125,132,0.6)]"
              >
                {s.n}
              </motion.div>
              <h3 className="mt-5 font-display text-lg text-primary-dark">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-[220px] mx-auto">
                {s.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
