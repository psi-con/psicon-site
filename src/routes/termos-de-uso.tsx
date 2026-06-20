import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/termos-de-uso")({
  head: () => ({
    meta: [
      { title: "Termos de Uso — PsiCon" },
      { name: "description", content: "Termos e condições de uso da plataforma PsiCon." },
    ],
  }),
  component: TermosDeUso,
});

function TermosDeUso() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <Link to="/" className="text-sm text-primary hover:underline">← Voltar para o início</Link>

        <h1 className="mt-8 font-display text-4xl text-primary-dark">Termos de Uso</h1>
        <p className="mt-2 text-sm text-muted-foreground">Última atualização: junho de 2026</p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground [&_h2]:font-semibold [&_h2]:text-base [&_h2]:text-primary-dark [&_h2]:mt-8">

          <p>
            Ao utilizar o <strong>PsiCon</strong>, você concorda com os presentes Termos de Uso. Leia
            com atenção antes de acessar a plataforma.
          </p>

          <div>
            <h2>1. Sobre a plataforma</h2>
            <p className="mt-2">
              O PsiCon é uma plataforma SaaS de gestão de consultório destinada exclusivamente a
              <strong> psicólogos regularmente inscritos no Conselho Federal de Psicologia (CFP)</strong>.
              O acesso por profissionais não habilitados é vedado.
            </p>
          </div>

          <div>
            <h2>2. Cadastro e conta</h2>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Você é responsável por manter a confidencialidade de suas credenciais de acesso.</li>
              <li>As informações fornecidas no cadastro devem ser verdadeiras e atualizadas.</li>
              <li>É proibido compartilhar sua conta com terceiros.</li>
              <li>Uma assinatura dá acesso a um único psicólogo. Para uso em equipe, cada profissional deve ter sua própria conta.</li>
            </ul>
          </div>

          <div>
            <h2>3. Responsabilidades do usuário</h2>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>O psicólogo é o responsável pelo conteúdo dos prontuários, documentos e informações inseridas na plataforma.</li>
              <li>Cabe ao psicólogo obter o consentimento do paciente para o uso de ferramentas digitais no acompanhamento terapêutico, conforme Resolução CFP nº 11/2018.</li>
              <li>O PsiCon não substitui o julgamento clínico do profissional.</li>
              <li>É proibido utilizar a plataforma para fins ilícitos, discriminatórios ou que violem a ética profissional do CFP.</li>
            </ul>
          </div>

          <div>
            <h2>4. Planos e pagamentos</h2>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Os planos são cobrados antecipadamente (mensal ou anual) via Mercado Pago.</li>
              <li>O cancelamento pode ser feito a qualquer momento. Após o cancelamento, o acesso permanece ativo até o fim do período já pago.</li>
              <li>Não há reembolso proporcional por período não utilizado, exceto nos casos previstos no Código de Defesa do Consumidor (CDC).</li>
              <li>Os preços podem ser alterados com aviso prévio de 30 dias.</li>
            </ul>
          </div>

          <div>
            <h2>5. Disponibilidade do serviço</h2>
            <p className="mt-2">
              Nos comprometemos a manter a plataforma disponível com uptime de 99,5% mensais. Manutenções
              programadas serão comunicadas com antecedência. Não nos responsabilizamos por interrupções
              causadas por terceiros (provedores de internet, Google, Mercado Pago).
            </p>
          </div>

          <div>
            <h2>6. Propriedade intelectual</h2>
            <p className="mt-2">
              O código-fonte, design, marca e funcionalidades do PsiCon são propriedade exclusiva dos
              seus desenvolvedores. O usuário recebe uma licença de uso limitada, não exclusiva e
              intransferível enquanto a assinatura estiver ativa.
            </p>
          </div>

          <div>
            <h2>7. Dados e privacidade</h2>
            <p className="mt-2">
              O tratamento de dados pessoais é regido pela nossa{" "}
              <Link to="/politica-de-privacidade" className="text-primary hover:underline">
                Política de Privacidade
              </Link>
              , que integra estes Termos.
            </p>
          </div>

          <div>
            <h2>8. Limitação de responsabilidade</h2>
            <p className="mt-2">
              O PsiCon não se responsabiliza por danos decorrentes do uso inadequado da plataforma,
              decisões clínicas tomadas com base nas informações registradas, ou perda de dados causada
              por ações do próprio usuário.
            </p>
          </div>

          <div>
            <h2>9. Rescisão</h2>
            <p className="mt-2">
              Reservamo-nos o direito de suspender ou encerrar contas que violem estes Termos, mediante
              comunicação prévia sempre que possível, exceto em casos de violação grave ou ilegalidade.
            </p>
          </div>

          <div>
            <h2>10. Lei aplicável e foro</h2>
            <p className="mt-2">
              Estes Termos são regidos pelas leis brasileiras. Fica eleito o foro da comarca de São Paulo/SP
              para dirimir quaisquer litígios, com renúncia a qualquer outro, por mais privilegiado que seja.
            </p>
          </div>

          <div>
            <h2>11. Contato</h2>
            <p className="mt-2">
              Dúvidas sobre estes Termos:{" "}
              <a href="mailto:contato@psicon.com.br" className="text-primary hover:underline">
                contato@psicon.com.br
              </a>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
