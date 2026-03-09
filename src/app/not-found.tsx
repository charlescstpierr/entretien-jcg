import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="min-h-[60vh] flex items-center">
      <Container>
        <div className="text-center py-20">
          <h1 className="text-6xl font-extrabold text-emerald-primary mb-4">
            404
          </h1>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Page introuvable
          </h2>
          <p className="text-slate-600 mb-8 max-w-md mx-auto">
            La page que vous recherchez n&apos;existe pas ou a été déplacée.
          </p>
          <div className="flex gap-4 justify-center">
            <Button variant="secondary" href="/">
              Retour à l&apos;accueil
            </Button>
            <Button variant="primary" href="/contactez-nous">
              Contactez-nous
            </Button>
          </div>
        </div>
      </Container>
    </main>
  );
}
