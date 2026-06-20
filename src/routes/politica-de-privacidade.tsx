import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade — PsiCon" },
      { name: "description", content: "Saiba como o PsiCon coleta, usa e protege seus dados." },
    ],
  }),
  component: PoliticaDePrivacidade,
});

function PoliticaDePrivacidade() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <Link to="/" className="text-sm text-primary hover:underline">← Voltar para o início</Link>

        <h1 className="mt-8 font-display text-4xl text-primary-dark">Política de Privacidade</h1>
        <p className="mt-2 text-sm text-muted-foreground">Última atualização: junho de 2026</p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground [&_h2]:font-semibold [&_h2]:text-base [&_h2]:text-primary-dark [&_h2]:mt-8">

          <p>
            O <strong>PsiCon</strong> ("nós") é uma plataforma SaaS de gestão de consultório destinada a
            psicólogos registrados no CFP. Esta Política descreve como coletamos, usamos, armazenamos e
            protegemos dados pessoais em conformidade com a <strong>Lei Geral de Proteção de Dados
            (LGPD — Lei nº 13.709/2018)</strong>.
          </p>

          <div>
            <h2>1. Dados coletados</h2>
            <p className="mt-2">Coletamos as seguintes categorias de dados:</p>
            <ul className="mt-3 list-disc pl-5 space-y-1">
              <li><strong>Psicólogos (usuários da plataforma):</strong> nome, e-mail, CRP, telefone e dados de perfil profissional.</li>
              <li><strong>Pacientes (cadastrados pelos psicólogos):</strong> nome, CPF, data de nascimento, endereço, contato, histórico clínico, prontuários, diagnósticos, prescrições e documentos terapêuticos.</li>
              <li><strong>Dados de uso:</strong> agendamentos, registros financeiros, anotações de sessão e documentos gerados na plataforma.</li>
              <li><strong>Dados técnicos:</strong> endereço IP, tipo de navegador e logs de acesso para fins de segurança.</li>
            </ul>
          </div>

          <div>
            <h2>2. Base legal e finalidade do tratamento</h2>
            <p className="mt-2">
              O tratamento de dados pessoais é realizado com base nas seguintes hipóteses legais (LGPD, art. 7º e art. 11):
            </p>
            <ul className="mt-3 list-disc pl-5 space-y-1">
              <li><strong>Execução de contrato</strong> — para fornecer os serviços contratados pelo psicólogo.</li>
              <li><strong>Consentimento</strong> — obtido pelo psicólogo junto ao paciente antes do cadastro na plataforma.</li>
              <li><strong>Legítimo interesse</strong> — para segurança, prevenção de fraudes e melhoria da plataforma.</li>
              <li><strong>Obrigação legal</strong> — retenção de prontuários conforme Resolução CFP nº 001/2009 (mínimo 5 anos).</li>
            </ul>
          </div>

          <div>
            <h2>3. Compartilhamento de dados</h2>
            <p className="mt-2">
              Não vendemos nem compartilhamos dados pessoais com terceiros para fins comerciais. Os dados
              são processados pelos seguintes fornecedores de infraestrutura, vinculados por contratos de
              proteção de dados:
            </p>
            <ul className="mt-3 list-disc pl-5 space-y-1">
              <li><strong>Supabase Inc.</strong> — banco de dados e autenticação (servidores localizados nos EUA, com garantias adequadas).</li>
              <li><strong>Google LLC</strong> — autenticação via Google OAuth e integração com Google Calendar e Google Meet.</li>
              <li><strong>Mercado Pago S.A.</strong> — processamento de pagamentos (dados de cobrança, não dados clínicos).</li>
            </ul>
          </div>

          <div>
            <h2>4. Segurança</h2>
            <p className="mt-2">
              Adotamos medidas técnicas e organizacionais para proteger os dados, incluindo:
            </p>
            <ul className="mt-3 list-disc pl-5 space-y-1">
              <li>Controle de acesso por Row Level Security (RLS) no banco de dados — cada psicólogo acessa apenas seus próprios registros.</li>
              <li>Autenticação com JWT validado server-side.</li>
              <li>Transmissão exclusivamente via HTTPS/TLS.</li>
              <li>Isolamento de dados por usuário na camada de aplicação.</li>
            </ul>
          </div>

          <div>
            <h2>5. Retenção de dados</h2>
            <p className="mt-2">
              Prontuários e registros clínicos são retidos pelo prazo mínimo de <strong>5 anos</strong> após
              o encerramento do tratamento, conforme exigência do CFP. Dados de conta são excluídos em até
              30 dias após solicitação, respeitado o prazo legal obrigatório de retenção de prontuários.
            </p>
          </div>

          <div>
            <h2>6. Direitos do titular</h2>
            <p className="mt-2">
              Nos termos da LGPD (art. 18), você tem direito a:
            </p>
            <ul className="mt-3 list-disc pl-5 space-y-1">
              <li>Confirmar a existência de tratamento e acessar seus dados.</li>
              <li>Solicitar correção de dados incompletos, inexatos ou desatualizados.</li>
              <li>Solicitar anonimização, bloqueio ou eliminação de dados desnecessários.</li>
              <li>Revogar o consentimento a qualquer momento.</li>
              <li>Solicitar portabilidade dos dados.</li>
            </ul>
            <p className="mt-3">
              Para exercer esses direitos, envie um e-mail para{" "}
              <a href="mailto:psicon.contato@gmail.com" className="text-primary hover:underline">
                psicon.contato@gmail.com
              </a>.
            </p>
          </div>

          <div>
            <h2>7. Cookies</h2>
            <p className="mt-2">
              Utilizamos apenas cookies estritamente necessários para autenticação e funcionamento da
              plataforma. Não utilizamos cookies de rastreamento ou publicidade de terceiros.
            </p>
          </div>

          <div>
            <h2>8. Alterações nesta política</h2>
            <p className="mt-2">
              Podemos atualizar esta política periodicamente. Alterações relevantes serão comunicadas
              por e-mail aos usuários cadastrados com antecedência mínima de 15 dias.
            </p>
          </div>

          <div>
            <h2>9. Contato</h2>
            <p className="mt-2">
              Para dúvidas sobre esta política ou sobre o tratamento de seus dados:
              <br />
              <a href="mailto:psicon.contato@gmail.com" className="text-primary hover:underline">
                psicon.contato@gmail.com
              </a>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
