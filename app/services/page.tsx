"use client";

import Link from "next/link";

export default function ServicesHome() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gabon-green/8 via-slate-50 to-gabon-blue/10 text-slate-900">
      <section className="mx-auto mt-10 mb-16 w-full max-w-6xl px-4 md:px-0">
        <div className="rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm md:p-8">
          <h1 className="text-xl font-bold text-slate-900 md:text-2xl">
            Services aux Gabonais
          </h1>
          <p className="mt-2 text-sm text-slate-700 md:text-[15px]">
            Retrouvez ici les principaux services consulaires proposés par
            l’Ambassade / Haut-Commissariat du Gabon au Rwanda. Chaque rubrique
            renvoie vers une page dédiée avec les formulaires et informations
            pratiques.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {/* Passeports */}
            <Link
              href="/services/passeports"
              className="group flex flex-col rounded-2xl border border-slate-200 bg-slate-50/80 p-4 shadow-sm hover:border-gabon-green/60 hover:bg-white"
            >
              <h2 className="text-sm font-semibold text-slate-900 md:text-base">
                Passeports & documents de voyage
              </h2>
              <p className="mt-2 text-xs text-slate-700 md:text-[13px]">
                Renouvellement, laissez-passer, autres documents de voyage.
              </p>
              <span className="mt-3 text-xs font-semibold text-gabon-green group-hover:underline">
                Accéder à la rubrique passeports
              </span>
            </Link>

            {/* État civil */}
            <Link
              href="/services/etat-civil"
              className="group flex flex-col rounded-2xl border border-slate-200 bg-slate-50/80 p-4 shadow-sm hover:border-gabon-green/60 hover:bg-white"
            >
              <h2 className="text-sm font-semibold text-slate-900 md:text-base">
                État civil (naissance, mariage, décès)
              </h2>
              <p className="mt-2 text-xs text-slate-700 md:text-[13px]">
                Transcription d’actes, déclarations et autres démarches
                d’état civil.
              </p>
              <span className="mt-3 text-xs font-semibold text-gabon-green group-hover:underline">
                Accéder à la rubrique état civil
              </span>
            </Link>

            {/* Légalisations */}
            <Link
              href="/services/legalisations"
              className="group flex flex-col rounded-2xl border border-slate-200 bg-slate-50/80 p-4 shadow-sm hover:border-gabon-green/60 hover:bg-white"
            >
              <h2 className="text-sm font-semibold text-slate-900 md:text-base">
                Légalisations & authentifications
              </h2>
              <p className="mt-2 text-xs text-slate-700 md:text-[13px]">
                Légalisation de signatures, authentification de documents,
                copies certifiées conformes.
              </p>
              <span className="mt-3 text-xs font-semibold text-gabon-green group-hover:underline">
                Accéder à la rubrique légalisations
              </span>
            </Link>

            {/* Attestations */}
            <Link
              href="/services/attestations"
              className="group flex flex-col rounded-2xl border border-slate-200 bg-slate-50/80 p-4 shadow-sm hover:border-gabon-green/60 hover:bg-white"
            >
              <h2 className="text-sm font-semibold text-slate-900 md:text-base">
                Attestations & certificats
              </h2>
              <p className="mt-2 text-xs text-slate-700 md:text-[13px]">
                Nationalité, célibat, vie/existence, résidence, et autres
                attestations consulaires.
              </p>
              <span className="mt-3 text-xs font-semibold text-gabon-green group-hover:underline">
                Accéder à la rubrique attestations
              </span>
            </Link>
          </div>

          <p className="mt-6 text-[11px] text-slate-500 md:text-xs">
            Remarque : ce site est un prototype. Les formulaires et procédures
            sont présentés à titre indicatif et pourront être ajustés lors de la
            mise en production.
          </p>
        </div>
      </section>
    </main>
  );
}
