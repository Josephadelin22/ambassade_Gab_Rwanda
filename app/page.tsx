"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Locale = "fr" | "en";

type Slide = {
  src: string;
  legendFr: string;
  legendEn: string;
};

const slides: Slide[] = [
  {
    src: "/images/presidence.jpeg",
    legendFr: "Rencontre bilatérale entre les autorités gabonaises et rwandaises.",
    legendEn: "Bilateral meeting between Gabonese and Rwandan authorities.",
  },
  {
    src: "/images/rencontre.jpeg",
    legendFr: "Coopération renforcée entre le Gabon et le Rwanda.",
    legendEn: "Strengthened cooperation between Gabon and Rwanda.",
  },
  {
    src: "/images/diaspora-1.jpeg",
    legendFr: "La communauté gabonaise rassemblée à Kigali.",
    legendEn: "The Gabonese community gathered in Kigali.",
  },
];

export default function HomePage() {
  const [locale, setLocale] = useState<Locale>("fr");
  const [activeSlide, setActiveSlide] = useState(0);

  // Auto-défilement du carrousel
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const currentSlide = slides[activeSlide];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gabon-green/8 via-slate-50 to-gabon-blue/10 text-slate-900">
      {/* ===================== HEADER ===================== */}
      <header className="border-b border-slate-200 bg-white/95 backdrop-blur">
        {/* Ligne principale : logo + titre + langue */}
        <div className="mx-auto flex max-w-6xl items-center gap-5 px-4 py-6 md:py-7">
          {/* Logo */}
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-sm md:h-16 md:w-16">
            <img
              src="/images/ecusson.png"
              alt="Armoiries de la République Gabonaise"
              className="h-11 w-11 md:h-12 md:w-12"
            />
          </div>

          {/* Bloc titre */}
          <div className="flex-1">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gabon-green md:text-[12px]">
              République Gabonaise
            </p>
            <h1 className="text-base font-bold leading-snug text-slate-900 md:text-lg lg:text-xl">
              Haut-Commissariat de la republique Gabonaise près la République du Rwanda
            </h1>
            <p className="mt-1 text-[11px] text-slate-600 md:text-xs">
              Portail officiel – Diaspora – Services aux Gabonais – Investisseurs – Rwanda
            </p>
          </div>

          {/* Sélecteur de langue */}
          <div className="hidden items-center gap-2 text-xs font-semibold text-slate-700 md:flex">
            <button
              type="button"
              onClick={() => setLocale("fr")}
              className={`rounded-full px-3 py-1 ${
                locale === "fr"
                  ? "bg-gabon-green text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              FR
            </button>
            <button
              type="button"
              onClick={() => setLocale("en")}
              className={`rounded-full px-3 py-1 ${
                locale === "en"
                  ? "bg-gabon-blue text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              EN
            </button>
          </div>
        </div>

        {/* Ligne navigation */}
        <div className="border-t border-gabon-green/40 bg-gradient-to-r from-gabon-green/5 via-white to-gabon-blue/5">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
            <nav className="flex flex-wrap items-center gap-6 text-[13px] font-medium text-slate-700 md:gap-8 md:text-[14px]">
              <a href="#hero" className="hover:text-gabon-green">
                {locale === "fr" ? "Portail officiel" : "Home"}
              </a>
              <a href="#Haut-commissariat" className="hover:text-gabon-green">
                {locale === "fr" ? "Ambassade" : "Embassy"}
              </a>
              <a href="#diaspora" className="hover:text-gabon-green">
                {locale === "fr" ? "Diaspora" : "Diaspora"}
              </a>
              <Link href="/services" className="hover:text-gabon-green">
                {locale === "fr" ? "Services aux Gabonais" : "Services"}
              </Link>
              <a href="#investir" className="hover:text-gabon-green">
                {locale === "fr" ? "Investisseurs" : "Investors"}
              </a>
              <a href="#gabon" className="hover:text-gabon-green">
                {locale === "fr" ? "Le Gabon" : "Gabon"}
              </a>
              <a href="#rwanda" className="hover:text-gabon-green">
                Rwanda
              </a>
              <a href="#actualites" className="hover:text-gabon-green">
                {locale === "fr" ? "Actualités" : "News"}
              </a>
              <Link href="/urgences" className="hover:text-gabon-green">
                {locale === "fr" ? "Urgences" : "Emergencies"}
              </Link>
              <a href="#contact" className="hover:text-gabon-green">
                {locale === "fr" ? "Contact" : "Contact"}
              </a>
            </nav>

            {/* Langues – version mobile */}
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 md:hidden">
              <button
                type="button"
                onClick={() => setLocale("fr")}
                className={`rounded-full px-2 py-1 ${
                  locale === "fr"
                    ? "bg-gabon-green text-white"
                    : "bg-slate-100 text-slate-700"
                }`}
              >
                FR
              </button>
              <button
                type="button"
                onClick={() => setLocale("en")}
                className={`rounded-full px-2 py-1 ${
                  locale === "en"
                    ? "bg-gabon-blue text-white"
                    : "bg-slate-100 text-slate-700"
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ===================== HERO + SLIDER ===================== */}
      <section
        id="hero"
        className="relative z-10 mx-auto mt-6 w-full max-w-6xl px-4 md:px-0"
      >
        <div className="grid gap-6 md:grid-cols-[3fr,2fr]">
          {/* Carrousel */}
          <div className="relative overflow-hidden rounded-3xl border border-white/60 bg-slate-900/90 shadow-lg">
            <div className="relative h-[230px] w-full md:h-[320px] lg:h-[360px]">
              <img
                src={currentSlide.src}
                alt="Actualité du Haut-Commissariat"
                className="h-full w-full object-cover opacity-90"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-3">
                <p className="max-w-xl text-sm font-medium text-white md:text-base">
                  {locale === "fr"
                    ? currentSlide.legendFr
                    : currentSlide.legendEn}
                </p>
                {/* Puces */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {slides.map((_, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => setActiveSlide(index)}
                        className={`h-2 w-2 rounded-full ${
                          activeSlide === index
                            ? "bg-white"
                            : "bg-white/40 hover:bg-white/70"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bloc texte à côté du slider */}
          <div className="flex flex-col justify-between rounded-3xl border border-white/60 bg-white/95 p-5 shadow-lg">
            <div>
              <h2 className="text-lg font-bold text-slate-900 md:text-xl">
                {locale === "fr"
                  ? "Portail du Haut-Commissariat du Gabon à Kigali"
                  : "Portal of the Gabon High Commission in Kigali"}
              </h2>
              <p className="mt-2 text-sm text-slate-700 md:text-[15px]">
                {locale === "fr"
                  ? "Ce site est un prototype destiné à la diaspora gabonaise au Rwanda, aux investisseurs et aux partenaires institutionnels. Il centralise les informations officielles, les services consulaires et les opportunités de coopération."
                  : "This website is a prototype dedicated to the Gabonese community in Rwanda, investors and institutional partners. It centralises official information, consular services and cooperation opportunities."}
              </p>
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/immatriculation"
                className="inline-flex items-center justify-center rounded-full bg-gabon-green px-5 py-2 text-xs font-semibold text-white shadow-sm hover:bg-gabon-green/90 md:text-sm"
              >
                {locale === "fr"
                  ? "Immatriculation consulaire"
                  : "Consular registration"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== HAUT-COMMISSARIAT ===================== */}
      <section
        id="haut-commissariat"
        className="mx-auto mt-10 w-full max-w-6xl px-4 md:px-0"
      >
        <div className="rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm md:p-8">
          <h2 className="text-lg font-bold text-slate-900 md:text-xl">
            {locale === "fr"
              ? "Le Haut-Commissariat et ses représentants"
              : "The High Commission and its representatives"}
          </h2>
          <p className="mt-2 text-sm text-slate-700 md:text-[15px]">
            {locale === "fr"
              ? "Le Haut-Commissariat du Gabon près la République du Rwanda représente les autorités gabonaises, accompagne la communauté gabonaise et facilite le dialogue avec les autorités rwandaises."
              : "The Gabon High Commission to the Republic of Rwanda represents the Gabonese authorities, supports the Gabonese community and facilitates dialogue with Rwandan institutions."}
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {/* Haut-Commissaire */}
            <article className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50/70 p-4 shadow-sm">
              <div className="mb-3 h-36 w-full overflow-hidden rounded-xl bg-slate-100">
                <img
                  src="/images/ambassadeur.jpeg"
                  alt="Haut-Commissaire du Gabon à Kigali"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="text-sm font-semibold text-slate-900 md:text-base">
                {locale === "fr"
                  ? "Haut-Commissaire"
                  : "High Commissioner"}
              </h3>
              <p className="mt-1 text-xs font-semibold text-gabon-blue">
                Son Excellence Docteur MINKO MI NSEME Sylver Aboubakar
              </p>
              <p className="mt-2 text-xs text-slate-600 md:text-[13px]">
                {locale === "fr"
                  ? "Ambassadeur Extraordinaire et Plénipotentiaire, Haut Représentant de la République Gabonaise près la République du Rwanda."
                  : "Extraordinary and Plenipotentiary Ambassador, High Representative of the Gabonese Republic to the Republic of Rwanda."}
              </p>
              <Link
                href="/equipe/ambassadeur"
                className="mt-3 text-xs font-semibold text-gabon-green hover:underline"
              >
                {locale === "fr"
                  ? "En savoir plus sur le Haut-Commissaire"
                  : "Learn more about the High Commissioner"}
              </Link>
            </article>

            {/* Consul honoraire */}
            <article className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50/70 p-4 shadow-sm">
              <div className="mb-3 h-36 w-full overflow-hidden rounded-xl bg-slate-100">
                <img
                  src="/images/consul.jpeg"
                  alt="Consul honoraire du Gabon au Rwanda"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="text-sm font-semibold text-slate-900 md:text-base">
                {locale === "fr" ? "Consul honoraire" : "Honorary Consul"}
              </h3>
              <p className="mt-1 text-xs font-semibold text-gabon-blue">
                Michel Christophe MBADINGA
              </p>
              <p className="mt-2 text-xs text-slate-600 md:text-[13px]">
                {locale === "fr"
                  ? "Inspecteur principal des Postes et Télécommunications, Conseiller à la Primature, Consul honoraire du Gabon au Rwanda et homme d’affaires."
                  : "Senior inspector of Posts and Telecommunications, Adviser to the Prime Minister’s office and Honorary Consul of Gabon in Rwanda."}
              </p>
              <Link
                href="/equipe/consul"
                className="mt-3 text-xs font-semibold text-gabon-green hover:underline"
              >
                {locale === "fr"
                  ? "En savoir plus sur le Consul"
                  : "Learn more about the Consul"}
              </Link>
            </article>

            {/* Équipe consulaire */}
            <article className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50/70 p-4 shadow-sm">
              <div className="mb-3 h-36 w-full overflow-hidden rounded-xl bg-slate-100">
                <img
                  src="/images/equipe.jpg"
                  alt="Équipe consulaire et administrative"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="text-sm font-semibold text-slate-900 md:text-base">
                {locale === "fr"
                  ? "Équipe consulaire et administrative"
                  : "Consular and administrative team"}
              </h3>
              <p className="mt-2 text-xs text-slate-600 md:text-[13px]">
                {locale === "fr"
                  ? "L’équipe du Haut-Commissariat assure la gestion des affaires consulaires, de la diaspora, de la communication et du suivi des projets."
                  : "The High Commission team manages consular affairs, diaspora relations, communication and project follow-up."}
              </p>
              <Link
                href="/equipe"
                className="mt-3 text-xs font-semibold text-gabon-green hover:underline"
              >
                {locale === "fr"
                  ? "Voir l’organisation du poste"
                  : "View the team organisation"}
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* ===================== DIASPORA & SERVICES ===================== */}
      <section
        id="diaspora"
        className="mx-auto mt-10 w-full max-w-6xl px-4 md:px-0"
      >
        <div className="grid gap-6 md:grid-cols-2">
          {/* Diaspora */}
          <div className="rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm md:p-7">
            <h2 className="text-lg font-bold text-slate-900 md:text-xl">
              {locale === "fr"
                ? "Diaspora gabonaise au Rwanda"
                : "Gabonese diaspora in Rwanda"}
            </h2>
            <p className="mt-2 text-sm text-slate-700 md:text-[15px]">
              {locale === "fr"
                ? "Le Haut-Commissariat tient à jour un registre consulaire des Gabonais établis au Rwanda et met en place des actions d’information, d’accompagnement et de protection."
                : "The High Commission maintains a consular register of Gabonese nationals living in Rwanda and provides information, support and protection measures."}
            </p>
            <ul className="mt-3 space-y-1 text-xs text-slate-700 md:text-[13px]">
              <li>• {locale === "fr" ? "Immatriculation consulaire" : "Consular registration"}</li>
              <li>• {locale === "fr" ? "Étudiants et bourses" : "Students and scholarships"}</li>
              <li>• {locale === "fr" ? "Vie quotidienne et intégration" : "Daily life and integration"}</li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/immatriculation"
                className="rounded-full bg-gabon-green px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-gabon-green/90"
              >
                {locale === "fr"
                  ? "M’inscrire au registre consulaire"
                  : "Register in the consular roll"}
              </Link>
              <Link
                href="/etudiants"
                className="rounded-full border border-slate-300 px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
              >
                {locale === "fr" ? "Espace étudiants" : "Students’ corner"}
              </Link>
            </div>
          </div>

          {/* Services aux Gabonais */}
          <div className="rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm md:p-7">
            <h2 className="text-lg font-bold text-slate-900 md:text-xl">
              {locale === "fr"
                ? "Services aux Gabonais"
                : "Services to Gabonese nationals"}
            </h2>
            <p className="mt-2 text-sm text-slate-700 md:text-[15px]">
              {locale === "fr"
                ? "Les procédures détaillées (passeports, état civil, légalisations, attestations, etc.) sont regroupées dans une rubrique dédiée."
                : "Detailed procedures (passports, civil status, legalisation, certificates, etc.) are grouped in a dedicated services section."}
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/services"
                className="rounded-full bg-gabon-blue px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-gabon-blue/90"
              >
                {locale === "fr"
                  ? "Consulter les services"
                  : "View consular services"}
              </Link>
              <Link
                href="/urgences"
                className="rounded-full border border-red-300 bg-red-50/60 px-4 py-2 text-xs font-semibold text-red-700 hover:bg-red-100"
              >
                {locale === "fr"
                  ? "Urgences & avertisseur"
                  : "Emergencies & alerts"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== INVESTIR AU GABON ===================== */}
      <section
        id="investir"
        className="mx-auto mt-10 w-full max-w-6xl px-4 md:px-0"
      >
        <div className="rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm md:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-lg font-bold text-slate-900 md:text-xl">
                {locale === "fr"
                  ? "Investir au Gabon"
                  : "Investing in Gabon"}
              </h2>
              <p className="mt-2 text-sm text-slate-700 md:text-[15px]">
                {locale === "fr"
                  ? "Le Haut-Commissariat joue un rôle de relais pour les projets d’investissement entre le Gabon, le Rwanda et la diaspora. Il travaille en lien avec l’Agence Nationale de la Promotion des Investissements (ANPI-Gabon) et d’autres plateformes économiques."
                  : "The High Commission acts as a bridge for investment projects between Gabon, Rwanda and the diaspora, in coordination with the National Investment Promotion Agency (ANPI-Gabon) and other economic platforms."}
              </p>
              <ul className="mt-3 space-y-1 text-xs text-slate-700 md:text-[13px]">
                <li>• {locale === "fr" ? "Accompagnement de projets portés par la diaspora" : "Support for projects led by the diaspora"}</li>
                <li>• {locale === "fr" ? "Mise en relation avec l’ANPI-Gabon et les institutions" : "Connections with ANPI-Gabon and institutions"}</li>
                <li>• {locale === "fr" ? "Identification des secteurs porteurs" : "Identification of key sectors"}</li>
              </ul>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link
                  href="/investisseurs"
                  className="rounded-full bg-gabon-green px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-gabon-green/90"
                >
                  {locale === "fr"
                    ? "Espace investisseurs"
                    : "Investors’ area"}
                </Link>
                <a
                  href="https://www.investingabon.ga"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-slate-300 px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                >
                  {locale === "fr"
                    ? "ANPI-Gabon (référence)"
                    : "ANPI-Gabon (reference)"}
                </a>
              </div>
            </div>
            <div className="mt-2 w-full md:mt-0 md:max-w-xs">
              <div className="rounded-2xl bg-gradient-to-br from-gabon-green/10 via-gabon-yellow/10 to-gabon-blue/10 p-4 text-sm text-slate-800 shadow-inner">
                <p className="text-xs font-semibold uppercase tracking-wide text-gabon-blue">
                  {locale === "fr"
                    ? "Pourquoi investir au Gabon ?"
                    : "Why invest in Gabon?"}
                </p>
                <ul className="mt-2 space-y-1 text-xs md:text-[13px]">
                  <li>• {locale === "fr" ? "Ressources naturelles importantes" : "Significant natural resources"}</li>
                  <li>• {locale === "fr" ? "Position géographique stratégique" : "Strategic geographic position"}</li>
                  <li>• {locale === "fr" ? "Marché sous-régional dynamique" : "Dynamic sub-regional market"}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== LE GABON & RWANDA ===================== */}
      <section
        id="gabon"
        className="mx-auto mt-10 w-full max-w-6xl px-4 md:px-0"
      >
        <div className="grid gap-6 md:grid-cols-2">
          {/* Le Gabon */}
          <div className="rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm md:p-7">
            <h2 className="text-lg font-bold text-slate-900 md:text-xl">
              {locale === "fr" ? "Le Gabon" : "Gabon"}
            </h2>
            <p className="mt-2 text-sm text-slate-700 md:text-[15px]">
              {locale === "fr"
                ? "Pays d’Afrique centrale bordé par l’océan Atlantique, le Gabon dispose d’un fort potentiel forestier, minier, énergétique et touristique."
                : "Located in Central Africa on the Atlantic coast, Gabon has strong forestry, mining, energy and tourism potential."}
            </p>
            <Link
              href="/infos-pratiques"
              className="mt-4 inline-flex rounded-full border border-slate-300 px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
            >
              {locale === "fr"
                ? "Informations pratiques sur le Gabon"
                : "Practical information on Gabon"}
            </Link>
          </div>

          {/* Rwanda */}
          <div
            id="rwanda"
            className="rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm md:p-7"
          >
            <h2 className="text-lg font-bold text-slate-900 md:text-xl">
              Rwanda
            </h2>
            <p className="mt-2 text-sm text-slate-700 md:text-[15px]">
              {locale === "fr"
                ? "Pays d’accueil du Haut-Commissariat, le Rwanda est reconnu pour sa modernisation rapide, sa sécurité et son environnement des affaires attractif."
                : "Host country of the High Commission, Rwanda is known for its rapid modernisation, security and attractive business environment."}
            </p>
            <p className="mt-2 text-xs text-slate-600 md:text-[13px]">
              KG 617 St, KG 617 St N° 6, Kigali – Rwanda.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== ACTUALITÉS ===================== */}
      <section
        id="actualites"
        className="mx-auto mt-10 w-full max-w-6xl px-4 md:px-0"
      >
        <div className="rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm md:p-8">
          <h2 className="text-lg font-bold text-slate-900 md:text-xl">
            {locale === "fr"
              ? "Actualités & informations récentes"
              : "Latest news & updates"}
          </h2>
          <p className="mt-2 text-sm text-slate-700 md:text-[15px]">
            {locale === "fr"
              ? "Cette section présentera les communiqués officiels, les annonces pour la diaspora et les temps forts de la coopération bilatérale."
              : "This section will present official communiqués, announcements for the diaspora and highlights of the bilateral cooperation."}
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <article className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 text-sm text-slate-800 shadow-sm">
              <p className="text-[11px] uppercase tracking-wide text-slate-500">
                {locale === "fr" ? "Annonce" : "Announcement"}
              </p>
              <h3 className="mt-1 text-sm font-semibold text-slate-900">
                {locale === "fr"
                  ? "Mise en place du registre consulaire (prototype)"
                  : "Set-up of the consular register (prototype)"}
              </h3>
              <p className="mt-2 text-xs text-slate-700">
                {locale === "fr"
                  ? "Les informations collectées servent de base à un registre plus complet dans la version finale."
                  : "The information collected will serve as a basis for a more complete register in the final version."}
              </p>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 text-sm text-slate-800 shadow-sm">
              <p className="text-[11px] uppercase tracking-wide text-slate-500">
                Info
              </p>
              <h3 className="mt-1 text-sm font-semibold text-slate-900">
                {locale === "fr"
                  ? "Contacts d’urgence centralisés"
                  : "Centralised emergency contacts"}
              </h3>
              <p className="mt-2 text-xs text-slate-700">
                {locale === "fr"
                  ? "Les numéros d’urgence et l’outil d’avertisseur seront accessibles depuis la rubrique Urgences."
                  : "Emergency numbers and the alert tool will be available in the Emergencies section."}
              </p>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 text-sm text-slate-800 shadow-sm">
              <p className="text-[11px] uppercase tracking-wide text-slate-500">
                Diaspora
              </p>
              <h3 className="mt-1 text-sm font-semibold text-slate-900">
                {locale === "fr"
                  ? "Projets de la diaspora et investisseurs"
                  : "Diaspora and investors’ projects"}
              </h3>
              <p className="mt-2 text-xs text-slate-700">
                {locale === "fr"
                  ? "Une phase ultérieure permettra d’accompagner davantage les projets portés par la diaspora gabonaise."
                  : "A later phase will provide more structured support for projects carried by the Gabonese diaspora."}
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ===================== CONTACT ===================== */}
      <section
        id="contact"
        className="mx-auto mt-10 mb-10 w-full max-w-6xl px-4 md:px-0"
      >
        <div className="grid gap-6 md:grid-cols-[2fr,3fr]">
          {/* Coordonnées + Horaires + Services + Google Map */}
          <div className="rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm md:p-7">
            <h2 className="text-lg font-bold text-slate-900 md:text-xl">
              {locale === "fr"
                ? "Coordonnées du Haut-Commissariat"
                : "High Commission contact details"}
            </h2>

            {/* Adresse */}
            <p className="mt-2 text-sm text-slate-700 md:text-[15px]">
              {locale === "fr"
                ? "L’Ambassade de la République Gabonaise en République du Rwanda vous accueille à l’adresse suivante :"
                : "The Embassy of the Gabonese Republic in the Republic of Rwanda welcomes you at the following address:"}
            </p>
            <p className="mt-1 text-sm font-semibold text-slate-900 md:text-[15px]">
              KG 617 St N°6, Kigali – Rwanda
            </p>
            <p className="mt-1 text-xs text-slate-700 md:text-[13px]">
              📍{" "}
              <a
                href="https://maps.app.goo.gl/rM6UP71cYsxi2o4K9"
                target="_blank"
                rel="noreferrer"
                className="text-gabon-blue hover:underline"
              >
                {locale === "fr"
                  ? "Voir sur Google Maps"
                  : "View on Google Maps"}
              </a>
            </p>

            {/* Téléphone & Email */}
            <p className="mt-3 text-sm text-slate-700 md:text-[15px]">
              📞{" "}
              <span className="font-semibold">+250 796699240</span>
            </p>
            <p className="mt-1 text-sm text-slate-700 md:text-[15px]">
              📧{" "}
              <span className="font-semibold">
                <a
                  href="mailto:ambagabonrwanda@gmail.com"
                  className="text-gabon-blue hover:underline"
                >
                  ambagabonrwanda@gmail.com
                </a>
              </span>
            </p>

            {/* Horaires d’ouverture */}
            <div className="mt-4 rounded-2xl bg-slate-50 p-3 border border-slate-200">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                {locale === "fr"
                  ? "Horaires d’ouverture"
                  : "Opening hours"}
              </p>
              <p className="mt-1 text-sm text-slate-800 md:text-[15px]">
                {locale === "fr"
                  ? "Du lundi au vendredi de 9h à 16h."
                  : "Monday to Friday, from 9 a.m. to 4 p.m."}
              </p>
            </div>

            {/* Services disponibles */}
                      {/* Services disponibles */}
            <div className="mt-4 rounded-2xl bg-slate-50 p-3 border border-slate-200">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                {locale === "fr"
                  ? "Services consulaires disponibles"
                  : "Available consular services"}
              </p>
              <ul className="mt-2 space-y-1 text-xs text-slate-800 md:text-[13px]">
                {locale === "fr" ? (
                  <>
                    <li>
                      •{" "}
                      <Link
                        href="/services/legalisations"
                        className="text-gabon-green hover:underline"
                      >
                        Authentification & légalisation de documents
                      </Link>
                    </li>
                    <li>
                      •{" "}
                      <Link
                        href="/services/etat-civil"
                        className="text-gabon-green hover:underline"
                      >
                        Actes : naissance, mariage (transcription), décès
                      </Link>
                    </li>
                    <li>
                      •{" "}
                      <Link
                        href="/services/passeports"
                        className="text-gabon-green hover:underline"
                      >
                        Laissez-passer & documents de voyage
                      </Link>
                    </li>
                    <li>
                      •{" "}
                      <Link
                        href="/services/attestations"
                        className="text-gabon-green hover:underline"
                      >
                        Attestations : nationalité, célibat, vie/existence, etc.
                      </Link>
                    </li>
                    <li>
                      •{" "}
                      <Link
                        href="/immatriculation"
                        className="text-gabon-green hover:underline"
                      >
                        Enregistrement et carte consulaire
                      </Link>
                    </li>
                    <li>
                      •{" "}
                      <Link
                        href="/services/passeports"
                        className="text-gabon-green hover:underline"
                      >
                        Délivrance de visas (entrée unique ou multiple)
                      </Link>{" "}
                      <span className="text-[11px] text-slate-500">
                        (prototype)
                      </span>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      •{" "}
                      <Link
                        href="/services/legalisations"
                        className="text-gabon-green hover:underline"
                      >
                        Authentication & legalisation of documents
                      </Link>
                    </li>
                    <li>
                      •{" "}
                      <Link
                        href="/services/etat-civil"
                        className="text-gabon-green hover:underline"
                      >
                        Civil status acts: birth, marriage (transcription), death
                      </Link>
                    </li>
                    <li>
                      •{" "}
                      <Link
                        href="/services/passeports"
                        className="text-gabon-green hover:underline"
                      >
                        Laissez-passer & travel documents
                      </Link>
                    </li>
                    <li>
                      •{" "}
                      <Link
                        href="/services/attestations"
                        className="text-gabon-green hover:underline"
                      >
                        Certificates: nationality, single status, life/existence, etc.
                      </Link>
                    </li>
                    <li>
                      •{" "}
                      <Link
                        href="/immatriculation"
                        className="text-gabon-green hover:underline"
                      >
                        Registration and consular card
                      </Link>
                    </li>
                    <li>
                      •{" "}
                      <Link
                        href="/services/passeports"
                        className="text-gabon-green hover:underline"
                      >
                        Visa issuance (single or multiple entry)
                      </Link>{" "}
                      <span className="text-[11px] text-slate-500">
                        (prototype)
                      </span>
                    </li>
                  </>
                )}
              </ul>
            </div>


            <p className="mt-3 text-xs text-slate-500 md:text-[13px]">
              {locale === "fr"
                ? "Ces informations sont fournies dans le cadre de ce prototype et pourront être adaptées lors de la mise en production."
                : "This information is provided as part of this prototype and may be adjusted for the production website."}
            </p>

            {/* Google Map intégrée */}
            <div className="mt-5 h-56 w-full overflow-hidden rounded-2xl border border-slate-200 shadow-sm md:h-64">
              <iframe
                title="Localisation du Haut-Commissariat du Gabon à Kigali"
                src="https://www.google.com/maps?q=KG%20617%20St%20Kigali%20Rwanda&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Formulaire de contact (prototype) */}
          <div className="rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm md:p-7">
            <h3 className="text-sm font-semibold text-slate-900 md:text-base">
              {locale === "fr"
                ? "Formulaire de contact (prototype)"
                : "Contact form (prototype)"}
            </h3>
            <p className="mt-1 text-xs text-slate-600 md:text-[13px]">
              {locale === "fr"
                ? "Dans la version finale, ce formulaire enverra un message vers les services compétents du Haut-Commissariat."
                : "In the final version, this form will send a message to the relevant services of the High Commission."}
            </p>
            <form className="mt-4 space-y-3 text-sm">
              <div>
                <label
                  htmlFor="nom"
                  className="text-xs font-semibold text-slate-700"
                >
                  {locale === "fr" ? "Nom complet" : "Full name"}
                </label>
                <input
                  id="nom"
                  type="text"
                  className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm shadow-sm focus:border-gabon-green/70 focus:outline-none focus:ring-2 focus:ring-gabon-green/30"
                />
              </div>
              <div>
                <label
                  htmlFor="email-contact"
                  className="text-xs font-semibold text-slate-700"
                >
                  Email
                </label>
                <input
                  id="email-contact"
                  type="email"
                  className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm shadow-sm focus:border-gabon-green/70 focus:outline-none focus:ring-2 focus:ring-gabon-green/30"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="text-xs font-semibold text-slate-700"
                >
                  {locale === "fr" ? "Message" : "Message"}
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm shadow-sm focus:border-gabon-green/70 focus:outline-none focus:ring-2 focus:ring-gabon-green/30"
                />
              </div>
              <button
                type="button"
                className="mt-1 inline-flex items-center justify-center rounded-full bg-gabon-green px-6 py-2 text-xs font-semibold text-white shadow-sm hover:bg-gabon-green/90"
              >
                {locale === "fr" ? "Envoyer (démo)" : "Send (demo)"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ===================== FOOTER ===================== */}
      <footer className="border-t border-slate-200 bg-white/95 py-4 text-center text-[11px] text-slate-500 md:text-xs">
        {locale === "fr" ? (
          <>
            Prototype du Portail du Haut-Commissariat du Gabon près la
            République du Rwanda Version de démonstration 2025. Fait par Inov E-Tech L
          </>
        ) : (
          <>
            Prototype of the Portal of the Gabon High Commission to the
            Republic of Rwanda – Demonstration version 2025. Made by INOV E-TECH. L
          </>
        )}
      </footer>
    </main>
  );
}
