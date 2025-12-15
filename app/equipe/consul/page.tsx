// app/equipe/consul/page.tsx

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consul honoraire – Ambassade du Gabon au Rwanda",
  description:
    "Présentation du Consul honoraire lié à l'Ambassade du Gabon au Rwanda.",
};

export default function ConsulPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gabon-green/10 via-slate-50 to-gabon-blue/15">
      <div className="mx-auto max-w-4xl px-4 py-10 md:py-12">
        {/* Fil d'Ariane */}
        <p className="text-[11px] text-slate-500 md:text-xs">
          <a href="/" className="hover:text-gabon-green">
            Accueil
          </a>{" "}
          / L'équipe / Consul honoraire
        </p>

        <h1 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
          Consul honoraire
        </h1>

        <p className="mt-2 max-w-2xl text-sm text-slate-600 md:text-base">
          Cette page présente, dans le cadre du prototype, la structure de la
          fiche officielle du Consul honoraire lié à l'Ambassade du Gabon
          au Rwanda.
        </p>

        <section className="mt-8 rounded-3xl border border-slate-200 bg-white/95 p-5 shadow-sm md:p-8">
          <div className="grid gap-6 md:grid-cols-[1fr,1.4fr]">
            {/* Photo du consul */}
            <div className="flex flex-col items-center">
              <div className="h-64 w-full overflow-hidden rounded-2xl bg-slate-100 shadow-sm md:h-72">
                <img
                  src="/images/consul.jpeg"
                  alt="Portrait du Consul honoraire"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-4 text-center text-sm text-slate-700">
                <p className="font-semibold">[Nom du Consul honoraire]</p>
                <p className="text-xs text-slate-500 md:text-sm">
                  Consul honoraire, appui de proximité à la communauté
                  gabonaise.
                </p>
              </div>
            </div>

            {/* Texte explicatif */}
            <div className="space-y-4 text-sm text-slate-700 md:text-base">
              <section>
                <h2 className="text-sm font-semibold uppercase tracking-wide text-gabon-blue md:text-base">
                  Rôle et missions
                </h2>
                <p className="mt-1 text-sm text-slate-600 md:text-[15px]">
                  Le Consul honoraire constitue un relais local de l'
                  ambassade. Il contribue à l'assistance consulaire de
                  proximité, à la promotion de l'image du Gabon et au
                  renforcement des liens avec les autorités locales.
                </p>
              </section>

              <section>
                <h2 className="text-sm font-semibold uppercase tracking-wide text-gabon-blue md:text-base">
                  Appui à la communauté
                </h2>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm md:text-[15px]">
                  <li>
                    Orientation des ressortissants gabonais dans leurs démarches
                    locales (administratives, pratiques, etc.).
                  </li>
                  <li>
                    Transmission d'informations à l'ambassade sur les
                    besoins et difficultés de la communauté.
                  </li>
                  <li>
                    Participation à l'organisation d'évènements
                    communautaires, culturels ou économiques.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-sm font-semibold uppercase tracking-wide text-gabon-blue md:text-base">
                  Coordination avec l'Ambassade
                </h2>
                <p className="mt-1 text-sm text-slate-600 md:text-[15px]">
                  Le Consul honoraire travaille en étroite coordination avec
                  l'Ambassade du Gabon au Rwanda, dans le respect des
                  instructions du Ministère des Affaires étrangères et des
                  normes internationales.
                </p>
              </section>
            </div>
          </div>
        </section>

        {/* Bouton retour */}
        <div className="mt-8">
          <a
            href="/#equipe"
            className="inline-flex items-center rounded-full border border-slate-300 bg-white/80 px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm hover:bg-slate-50 md:text-sm"
          >
            ← Retour à la présentation de l'équipe
          </a>
        </div>
      </div>
    </main>
  );
}
