import { Check, X } from "lucide-react";
import { Reveal } from "./Reveal";

const rows = [
  ["Agenda", "Espalhada entre papel, WhatsApp e apps sem sincronia", "Integrada ao Google Calendar, acessível em qualquer dispositivo"],
  ["Faltas", "Paciente esquece, você perde a sessão e a receita", "Você pode enviar lembretes direto do Whatsapp*"],
  ["Cobranças", "Você não sabe quais valores foram pagos e quais ainda estão pendentes", "Registros organizados de consultas recebidas e valores à receber"],
  ["Prontuários", "Anotações no papel, arquivos soltos, risco de perder tudo", "Digitais, seguros, organizados e acessíveis sempre"],
  ["Documentos", "Feitos manualmente, um a um, sem padronização", "Gerados automaticamente com sua marca em segundos"],
  ["Sessões online", "Link criado na mão, enviado pelo WhatsApp", "Link gerado automaticamente para cada sessão"],
  ["Financeiro", "Planilhas manuais e inadimplência invisível", "Painel completo com tudo em tempo real"],
  ["Ferramentas", "5+ apps diferentes, cada um com um custo", "Tudo em um só lugar, uma só mensalidade"],
  ["Tempo administrativo", "Horas por semana perdidas com burocracia", "Automação libera seu tempo para os pacientes"],
  ["Controle", "O consultório te controla", "Você está no comando"],
];

export function Comparison() {
  return (
    <section id="comparativo" className="py-28 px-6 bg-secondary/40">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl mb-14">
          <span className="text-sm uppercase tracking-widest text-primary">Comparativo</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-primary-dark">
            O dia a dia muda. De verdade.
          </h2>
        </Reveal>

        <Reveal>
          <div className="rounded-3xl overflow-hidden border border-border bg-card shadow-sm">
            <div className="grid grid-cols-12 bg-primary-dark text-primary-foreground text-sm font-medium">
              <div className="col-span-4 md:col-span-3 px-6 py-5">Situação</div>
              <div className="col-span-4 md:col-span-4 lg:col-span-4 px-6 py-5">Sem o PsiCon</div>
              <div className="col-span-4 md:col-span-5 lg:col-span-5 px-6 py-5">Com o PsiCon</div>
            </div>
            {rows.map(([label, bad, good], i) => (
              <div
                key={label}
                className={`grid grid-cols-12 text-sm border-t border-border ${
                  i % 2 === 1 ? "bg-secondary/40" : ""
                }`}
              >
                <div className="col-span-12 md:col-span-3 px-6 py-5 font-medium text-primary-dark">
                  {label}
                </div>
                <div className="col-span-12 md:col-span-4 px-6 py-5 flex gap-3 text-muted-foreground border-t md:border-t-0 md:border-l border-border">
                  <X size={18} className="text-destructive shrink-0 mt-0.5" />
                  <span>{bad}</span>
                </div>
                <div className="col-span-12 md:col-span-5 px-6 py-5 flex gap-3 text-foreground border-t md:border-t-0 md:border-l border-border">
                  <Check size={18} className="text-success shrink-0 mt-0.5" />
                  <span>{good}</span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
