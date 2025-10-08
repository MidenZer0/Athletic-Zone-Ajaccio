import ButtonV3 from '@/app/components/ui/ButtonV3';

export default function ContactPage() {
  return (
    <footer
      id="contact"
      className="relative flex h-svh w-full items-center justify-center p-5"
    >
      <div className="flex flex-col items-center justify-center">
        <h2 className="font-anton text-4xl">CONTACT</h2>
        <ButtonV3 href="/auth/login" icon="arrow">
          Réserver
        </ButtonV3>
      </div>
    </footer>
  );
}
