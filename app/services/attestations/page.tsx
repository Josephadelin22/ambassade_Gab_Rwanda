// app/services/attestations/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Attestations & certificats",
  description:
    "Maquette pour les attestations de résidence, vie, nationalité, etc.",
};

export default function AttestationsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gabon-green/10 via-slate-50 to-gabon-blue/15">
      <div className="mx-auto max-w-4xl px-4 py-10 md:py-12">
        <p className="text-[11px] text-slate-500 md:text-xs">
          <a href="/" className="hover:text-gabon-green">
            Accueil
          </a>{" "}
          / Services consulaires / Attestations & certificats
        </p>

        <h1 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
          Attestations & certificats
        </h1>

        <p className="mt-2 text-sm text-slate-600 md:text-base">
          Cette page présentera les différentes attestations délivrées par
          l'ambassade : résidence, situation de famille, vie,
          nationalité…
        </p>

        <section className="mt-8 rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-gabon-blue md:text-base">
            Contenu prévu
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700 md:text-[15px]">
            <li>Liste des attestations disponibles.</li>
            <li>Conditions de délivrance et pièces justificatives.</li>
            <li>Formulaire simplifié de demande (phase suivante du projet).</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
