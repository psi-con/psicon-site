import { Header } from "./Header";
import { HeroVisual } from "./HeroVisual";
import { Reveal } from "./Reveal";
import { Features } from "./Features";
import { Comparison } from "./Comparison";
import { Pricing } from "./Pricing";
import { Showcase } from "./Showcase";
import { Testimonials } from "./Testimonials";
import { FloatingContact } from "./FloatingContact";

import { Flow } from "./Flow";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import principalAsset from "@/assets/principal.png.asset.json";
import logoAsset from "@/assets/psicon-logo-full.png.asset.json";


const stats = [
  { value: "70%", label: "menos faltas" },
  { value: "5h+", label: "economizadas por semana" },
  { value: "1 plataforma", label: "no lugar de cinco aplicativos" },
];

export function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <FloatingContact />
      <Header />

      {/* HERO — split: copy left, tilted product image right */}
      <section className="relative pt-36 pb-24 md:pt-44 md:pb-32 px-6">
        <HeroVisual />
        <div className="relative mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-primary"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Feito exclusivamente para psicólogos
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-6 font-display text-5xl md:text-6xl xl:text-7xl leading-[1.02] text-primary-dark"
            >
              Você cuida das pessoas.
              <br />
              <span className="italic text-primary">O PsiCon cuida do resto.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="mt-7 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Agenda, prontuários, gestão financeira e documentos automáticos em uma plataforma só.
              Atenda mais, se preocupe menos — e tenha controle total da sua clínica.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10 flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              <a
                href="#planos"
                className="group h-13 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-primary-foreground font-medium hover:bg-primary-dark transition"
              >
                Começar Agora
                <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
              </a>
              <a
                href="#vantagens"
                className="h-13 inline-flex items-center rounded-full border border-border bg-background/60 backdrop-blur px-7 py-3.5 text-primary-dark font-medium hover:border-primary transition"
              >
                Ver como funciona
              </a>
            </motion.div>

          </div>


          {/* Tilted product image */}
          <motion.div
            initial={{ opacity: 0, x: 60, rotateY: -25, rotateZ: 6 }}
            animate={{ opacity: 1, x: 0, rotateY: -14, rotateZ: 3 }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformPerspective: 1400 }}
            className="relative mx-auto w-full max-w-2xl lg:max-w-none"
          >
            <div className="absolute -inset-8 rounded-[2.5rem] bg-gradient-to-br from-primary/30 via-primary/10 to-transparent blur-3xl" />
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative rounded-2xl overflow-hidden border border-border bg-card shadow-[0_50px_120px_-40px_rgba(77,125,132,0.55)]"
            >
              <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-border bg-secondary/50">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                <span className="ml-3 text-[10px] text-muted-foreground tracking-wide">
                  app.psicon.com.br
                </span>
              </div>
              <img
                src={principalAsset.url}
                alt="Painel principal do PsiCon"
                className="block w-full h-auto"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* STATS — full-width strip */}
      <section className="px-6 pb-8 md:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-7xl rounded-2xl bg-card/80 backdrop-blur border border-border px-6 md:px-10 py-6 md:py-8 shadow-sm grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border"
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center py-3 md:py-0 px-2">
              <p className="font-display text-3xl md:text-4xl text-primary-dark">{s.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </section>


      {/* PAIN — short, sharp transition */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <h2 className="font-display text-3xl md:text-5xl text-primary-dark leading-tight">
              Você se formou para cuidar de pessoas,
              <br />
              <span className="text-muted-foreground">
                não para apagar incêndio administrativo todo dia.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
              Paciente que falta sem avisar, cobrança que fica pra depois, documentos que somem,
              agenda no celular, prontuário no caderno, financeiro em outro app...{" "}
              <span className="text-primary-dark font-medium">Existe um jeito melhor!</span>
            </p>
          </Reveal>
        </div>
      </section>

      <Showcase />
      <Flow />
      <Features />
      <Comparison />
      <Testimonials />
      <Pricing />


      {/* FINAL CTA */}
      <section className="px-6 py-28">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] bg-primary-dark text-primary-foreground px-8 py-20 md:px-16 md:py-28 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-primary blur-3xl" />
            <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-primary blur-3xl" />
          </div>
          {/* concentric rings echo */}
          <div className="absolute inset-0 grid place-items-center opacity-20 pointer-events-none">
            {[1, 2, 3, 4].map((i) => (
              <span
                key={i}
                className="absolute rounded-full border border-primary-foreground/30"
                style={{ width: `${i * 220}px`, height: `${i * 220}px` }}
              />
            ))}
          </div>
          <Reveal className="relative">
            <h2 className="font-display text-4xl md:text-6xl leading-tight">
              Pronto para ter o consultório
              <br />
              <span className="italic">que você sempre imaginou?</span>
            </h2>
            <p className="mt-6 text-lg opacity-80 max-w-2xl mx-auto">
              Comece hoje. É rápido, é simples — e você vai perguntar por que não fez isso antes.
            </p>
            <a
              href="#planos"
              className="mt-10 inline-flex h-14 items-center gap-2 rounded-full bg-primary-foreground px-9 text-primary-dark font-medium text-lg hover:opacity-90 transition"
            >
              Começar Agora <ArrowRight size={18} />
            </a>
            <p className="mt-5 text-sm opacity-70">
              Feito exclusivamente para psicólogos. Sem complicação.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-14 border-t border-border">
        <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-8 items-start">
          <div>
            <div className="flex items-center">
              <img
                src={logoAsset.url}
                alt="PsiCon"
                className="h-12 w-auto object-contain"
              />
            </div>


            <p className="mt-3 text-sm text-muted-foreground max-w-xs">
              O consultório online completo, feito por quem entende de psicologia.
            </p>
          </div>
          <div className="flex md:justify-end gap-6 text-sm text-muted-foreground">
            <a href="/politica-de-privacidade" className="hover:text-primary-dark transition">Política de Privacidade</a>
            <a href="/termos-de-uso" className="hover:text-primary-dark transition">Termos de Uso</a>
          </div>
        </div>
        <p className="mt-10 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} PsiCon. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}
