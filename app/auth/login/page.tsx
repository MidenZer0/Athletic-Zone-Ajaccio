import Link from 'next/link';

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background">
      <div className="mx-auto w-full max-w-md p-8">
        <div className="mb-8 text-center">
          <h1 className="mb-4 font-sofia text-4xl text-primary">Connexion</h1>
          <p className="text-tertiary">
            Connectez-vous pour réserver vos séances
          </p>
        </div>

        <div className="rounded-lg bg-secondary p-6 shadow-lg">
          <p className="mb-6 text-center text-primary">
            🚧 Système d&apos;authentification en cours de développement
          </p>

          <div className="text-center">
            <Link
              href="/"
              className="inline-block rounded-lg bg-highlight px-6 py-3 text-secondary transition-transform duration-300 hover:scale-105"
            >
              Retour à l&apos;accueil
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
