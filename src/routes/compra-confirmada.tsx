import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/compra-confirmada")({
  head: () => ({
    meta: [{ title: "Compra confirmada — PsiCon" }],
  }),
  component: CompraConfirmada,
});

function CompraConfirmada() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-background">
      <div className="max-w-lg w-full text-center">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-primary"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        </div>

        <h1 className="font-display text-3xl md:text-4xl text-primary-dark mb-4">
          Pagamento confirmado!
        </h1>

        <p className="text-muted-foreground text-lg mb-6">
          Obrigado por assinar o PsiCon. Em instantes você receberá um e-mail
          com o link para criar seu acesso à plataforma.
        </p>

        <div className="bg-muted rounded-2xl p-6 text-left text-sm text-muted-foreground space-y-2">
          <p>
            📧 <strong>Verifique sua caixa de entrada</strong> — incluindo a
            pasta de spam.
          </p>
          <p>
            🔗 O e-mail contém um link para você definir sua senha e acessar a
            plataforma.
          </p>
          <p>
            ❓ Não recebeu após 5 minutos? Entre em contato pelo suporte.
          </p>
        </div>

        <a
          href="https://psicon-six.vercel.app"
          className="mt-8 inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition"
        >
          Ir para o PsiCon
        </a>
      </div>
    </div>
  );
}
