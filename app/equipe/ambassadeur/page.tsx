// app/equipe/ambassadeur/page.tsx

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ambassadeur – Ambassade du Gabon au Rwanda",
  description:
    "Présentation de l'Ambassadeur de la République Gabonaise auprès de la République du Rwanda.",
};

export default function AmbassadeurPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gabon-green/10 via-slate-50 to-gabon-blue/15">
      <div className="mx-auto max-w-4xl px-4 py-10 md:py-12">
        {/* Fil d'Ariane simple */}
        <p className="text-[11px] text-slate-500 md:text-xs">
          <a href="/" className="hover:text-gabon-green">
            Accueil
          </a>{" "}
          / L'équipe / Ambassadeur
        </p>

        {/* Titre principal */}
        <h1 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
          Son Excellence l'Ambassadeur du Gabon au Rwanda
        </h1>

        <p className="mt-2 max-w-2xl text-sm text-slate-600 md:text-base">
          Cette page présente, à titre de maquette, la structure de la
          biographie officielle de l'Ambassadeur de la République
          Gabonaise auprès de la République du Rwanda.
        </p>

        {/* Carte principale, dans l'esprit du site Maroc / US */}
        <section className="mt-8 rounded-3xl border border-slate-200 bg-white/95 p-5 shadow-sm md:p-8">
          <div className="grid gap-6 md:grid-cols-[1fr,1.4fr]">
            {/* Photo ambassadeur */}
            <div className="flex flex-col items-center">
              <div className="h-64 w-full overflow-hidden rounded-2xl bg-slate-100 shadow-sm md:h-72">
                <img
                  src="/images/ambassadeur.jpeg"
                  alt="Portrait officiel de l'Ambassadeur du Gabon au Rwanda"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-4 text-center text-sm text-slate-700">
                <p className="font-semibold">
                  Son Excellence [Nom de l'Ambassadeur]
                </p>
                <p className="text-xs text-slate-500 md:text-sm">
                  Ambassadeur Extraordinaire et Plénipotentiaire de la
                  République Gabonaise auprès de la République du Rwanda
                </p>
              </div>
            </div>

            {/* Texte biographique */}
            <div className="space-y-4 text-sm text-slate-700 md:text-base">
              <section>
                <h2 className="text-sm font-semibold uppercase tracking-wide text-gabon-blue md:text-base">
                  Biographie
                </h2>
                <p className="mt-1 text-sm text-slate-600 md:text-[15px]">
                  Né à [ville], le [date], Son Excellence [Nom] est un diplomate
                  de carrière ayant servi la République Gabonaise dans
                  différentes fonctions au Gabon et à l'étranger. Cette
                  section décrira son parcours personnel et professionnel de
                  manière détaillée.
                </p>
              </section>

              <section>
                <h2 className="text-sm font-semibold uppercase tracking-wide text-gabon-blue md:text-base">
                  Études & formation
                </h2>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm md:text-[15px]">
                  <li>
                    Diplômes universitaires en droit, relations internationales
                    ou sciences politiques (exemple de structure).
                  </li>
                  <li>
                    Formations spécialisées en diplomatie, négociation et
                    coopération internationale.
                  </li>
                  <li>
                    Participation à des séminaires et programmes de haut niveau
                    sur les enjeux africains et internationaux.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-sm font-semibold uppercase tracking-wide text-gabon-blue md:text-base">
                  Expérience diplomatique
                </h2>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm md:text-[15px]">
                  <li>
                    Fonctions précédentes au sein du Ministère des Affaires
                    étrangères du Gabon.
                  </li>
                  <li>
                    Postes occupés dans d'autres ambassades ou missions
                    permanentes.
                  </li>
                  <li>
                    Contribution aux relations bilatérales entre le Gabon, le
                    Rwanda et d'autres partenaires.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-sm font-semibold uppercase tracking-wide text-gabon-blue md:text-base">
                  Mission au Rwanda
                </h2>
                <p className="mt-1 text-sm text-slate-600 md:text-[15px]">
                  En tant qu'Ambassadeur du Gabon au Rwanda, Son Excellence
                  [Nom] a pour mission de renforcer les liens politiques,
                  économiques, culturels et humains entre les deux pays, tout en
                  veillant à la protection et à l'accompagnement de la
                  communauté gabonaise résidant au Rwanda.
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
