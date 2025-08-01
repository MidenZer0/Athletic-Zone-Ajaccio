export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background">
      <div className="max-w-md w-full mx-auto p-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-sofia text-primary mb-4">Connexion</h1>
          <p className="text-tertiary">
            Connectez-vous pour réserver vos séances
          </p>
        </div>
        
        <div className="bg-secondary p-6 rounded-lg shadow-lg">
          <p className="text-primary text-center mb-6">
            🚧 Système d'authentification en cours de développement
          </p>
          
          <div className="text-center">
            <a 
              href="/" 
              className="inline-block bg-highlight text-secondary px-6 py-3 rounded-lg hover:scale-105 transition-transform duration-300"
            >
              Retour à l'accueil
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}