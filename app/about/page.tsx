import BurgerMenu from "@/app/components/ui/BurgerMenu";

export default function AboutPage() {
  return (
    <main
      id="about"
      className="h-screen bg-gray-900 text-secondary flex items-center justify-center"
    >
      <div className="flex flex-col text-center">
        <h1 className="text-4xl font-sofia mb-4">À propos</h1>
        <p className="text-tertiary">
          Section À propos en cours de développement
        </p>
      </div>
    </main>
  );
}
