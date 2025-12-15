"use client"; // fichier client-side

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// ================ Mini étapes (simple bandeau) =========
const steps = [
  { title: "1. Informations personnelles" },
  { title: "2. Situation au Rwanda" },
  { title: "3. Contact d'urgence & consentement" },
];

// ================ Schéma de validation Zod ================
// On définit les champs attendus + messages d'erreur
const immatriculationSchema = z.object({
  nomComplet: z.string().min(1, "Le nom complet est requis."),
  email: z
    .string()
    .email("L'adresse e-mail n'est pas valide.")
    .min(1, "L'adresse e-mail est requise."),
  telephone: z.string().min(1, "Le numéro de téléphone est requis."),
  whatsapp: z.string().optional(),

  // Naissance
  dateNaissance: z.string().min(1, "La date de naissance est requise."),
  lieuNaissance: z.string().min(1, "Le lieu de naissance est requis."),
  nationalite: z.string().min(1, "La nationalité est requise."),

  // Passeport
  passeportNumero: z.string().min(1, "Le numéro de passeport est requis."),
  passeportDateDelivrance: z
    .string()
    .min(1, "La date de délivrance est requise."),
  passeportDateExpiration: z
    .string()
    .min(1, "La date d'expiration est requise."),

  // Situation au Rwanda
  adresse: z.string().min(1, "L'adresse au Rwanda est requise."),
  statut: z.string().min(1, "Veuillez sélectionner un statut"),

  // Contact d'urgence
  contactUrgenceNom: z
    .string()
    .min(1, "Le nom du contact d'urgence est requis."),
  contactUrgenceTelephone: z
    .string()
    .min(1, "Le téléphone du contact d'urgence est requis."),

  // Consentement
  consentement: z
    .boolean()
    .refine((val) => val === true, {
      message: "Vous devez accepter le consentement pour continuer.",
    }),
});

// Type TypeScript généré à partir du schéma Zod
type ImmatriculationFormData = z.infer<typeof immatriculationSchema>;

export default function ImmatriculationPage() {
  // Permet d'afficher un message de succès après la soumission
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Initialisation de react-hook-form avec zodResolver pour la validation
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ImmatriculationFormData>({
    resolver: zodResolver(immatriculationSchema),
    defaultValues: {
      nomComplet: "",
      email: "",
      telephone: "",
      whatsapp: "",
      dateNaissance: "",
      lieuNaissance: "",
      nationalite: "",
      passeportNumero: "",
      passeportDateDelivrance: "",
      passeportDateExpiration: "",
      adresse: "",
      statut: "",
      contactUrgenceNom: "",
      contactUrgenceTelephone: "",
      consentement: false,
    },
  });

  // Soumission du formulaire (appel API Next.js)
  const onSubmit = async (data: ImmatriculationFormData) => {
    try {
      console.log("🟢 onSubmit déclenché avec :", data);

      const response = await fetch("/api/immatriculation", {
        // ⚠️ bien aligné avec app/api/immatriculation/route.ts
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`Erreur réseau: ${response.status}`);
      }

      const result = await response.json();
      console.log("✅ Réponse API immatriculation :", result);

      setIsSubmitted(true);
      reset();
    } catch (error) {
      console.error(
        "Échec de l'envoi du formulaire d'immatriculation:",
        error
      );
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gabon-green/5 via-white to-gabon-blue/5">
      {/* ==== En-tête simple de la page ==== */}
      <header className="border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-xl font-bold text-slate-900 md:text-2xl">
              Immatriculation consulaire
            </h1>

            <p className="text-xs text-slate-600 md:text-sm">
              Enregistrer un ressortissant gabonais vivant au Rwanda dans le
              registre consulaire de l'ambassade. (Prototype)
            </p>
          </div>
          <span className="inline-flex w-fit rounded-full bg-gabon-green/10 px-3 py-1 text-[11px] font-semibold text-gabon-green">
            Prototype – formulaire en cours de conception
          </span>
        </div>
      </header>

      {/* ======= Contenu principal ======= */}
      <div className="mx-auto max-w-5xl px-4 py-6 md:py-8">
        {/* Bandeau des étapes */}
        <div className="mb-5 flex flex-wrap gap-2 rounded-2xl bg-white/80 p-3 text-[11px] text-slate-700 shadow-sm md:text-xs">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gabon-green/10 text-[10px] font-semibold text-gabon-green">
                {index + 1}
              </span>
              <span>{step.title}</span>
            </div>
          ))}
        </div>

        {/* Formulaire d'immatriculation */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur"
        >
          {/* Titre bloc du formulaire */}
          <div className="flex items-baseline justify-between gap-2">
            <div>
              <h2 className="text-base font-semibold text-slate-900 md:text-lg">
                Formulaire d'immatriculation
              </h2>
              <p className="text-[11px] text-slate-600 md:text-xs">
                Merci de renseigner des informations exactes pour faciliter la
                prise en charge par le service consulaire.
              </p>
            </div>
          </div>

          {/* Message de succès après envoi */}
          {isSubmitted && (
            <div className="mt-4 rounded-xl border border-gabon-green/60 bg-gabon-green/10 px-3 py-2 text-[11px] text-gabon-green md:text-xs">
              Votre formulaire d'immatriculation a été envoyé (prototype).
              Dans la version finale, il sera enregistré et consultable par le
              service consulaire de l'ambassade.
            </div>
          )}

          {/* === Bloc 1 : Identité & contact === */}
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {/* Nom complet */}
            <div className="space-y-1">
              <label
                className="text-xs font-semibold text-slate-700"
                htmlFor="nomComplet"
              >
                Nom complet
              </label>
              <input
                id="nomComplet"
                type="text"
                placeholder="MABICKA Marie Jeanne"
                className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-gabon-green/60 focus:outline-none focus:ring-2 focus:ring-gabon-green/30"
                {...register("nomComplet")}
              />
              {errors.nomComplet && (
                <p className="text-[11px] text-red-500">
                  {errors.nomComplet.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-1">
              <label
                className="text-xs font-semibold text-slate-700"
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="nom@example.com"
                className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-gabon-green/60 focus:outline-none focus:ring-2 focus:ring-gabon-green/30"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-[11px] text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Téléphone principal */}
            <div className="space-y-1">
              <label
                className="text-xs font-semibold text-slate-700"
                htmlFor="telephone"
              >
                Téléphone principal
              </label>
              <input
                id="telephone"
                type="tel"
                placeholder="+250 7XX XX XX"
                className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-gabon-green/60 focus:outline-none focus:ring-2 focus:ring-gabon-green/30"
                {...register("telephone")}
              />
              {errors.telephone && (
                <p className="text-[11px] text-red-500">
                  {errors.telephone.message}
                </p>
              )}
            </div>

            {/* WhatsApp (optionnel) */}
            <div className="space-y-1">
              <label
                className="text-xs font-semibold text-slate-700"
                htmlFor="whatsapp"
              >
                WhatsApp (optionnel)
              </label>
              <input
                id="whatsapp"
                type="tel"
                placeholder="+241 6X XX XX XX"
                className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-gabon-green/60 focus:outline-none focus:ring-2 focus:ring-gabon-green/30"
                {...register("whatsapp")}
              />
            </div>
          </div>

          {/* === Bloc 2 : Naissance & passeport === */}
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {/* Date de naissance */}
            <div className="space-y-1">
              <label
                className="text-xs font-semibold text-slate-700"
                htmlFor="dateNaissance"
              >
                Date de naissance
              </label>
              <input
                id="dateNaissance"
                type="date"
                className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-gabon-green/60 focus:outline-none focus:ring-2 focus:ring-gabon-green/30"
                {...register("dateNaissance")}
              />
              {errors.dateNaissance && (
                <p className="text-[11px] text-red-500">
                  {errors.dateNaissance.message}
                </p>
              )}
            </div>

            {/* Lieu de naissance */}
            <div className="space-y-1">
              <label
                className="text-xs font-semibold text-slate-700"
                htmlFor="lieuNaissance"
              >
                Lieu de naissance
              </label>
              <input
                id="lieuNaissance"
                type="text"
                placeholder="Libreville, Gabon"
                className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-gabon-green/60 focus:outline-none focus:ring-2 focus:ring-gabon-green/30"
                {...register("lieuNaissance")}
              />
              {errors.lieuNaissance && (
                <p className="text-[11px] text-red-500">
                  {errors.lieuNaissance.message}
                </p>
              )}
            </div>

            {/* Nationalité */}
            <div className="space-y-1">
              <label
                className="text-xs font-semibold text-slate-700"
                htmlFor="nationalite"
              >
                Nationalité
              </label>
              <input
                id="nationalite"
                type="text"
                placeholder="Gabonaise"
                className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-gabon-green/60 focus:outline-none focus:ring-2 focus:ring-gabon-green/30"
                {...register("nationalite")}
              />
              {errors.nationalite && (
                <p className="text-[11px] text-red-500">
                  {errors.nationalite.message}
                </p>
              )}
            </div>

            {/* Date de délivrance du passeport */}
            <div className="space-y-1">
              <label
                className="text-xs font-semibold text-slate-700"
                htmlFor="passeportDateDelivrance"
              >
                Date de délivrance du passeport
              </label>
              <input
                id="passeportDateDelivrance"
                type="date"
                className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-gabon-green/60 focus:outline-none focus:ring-2 focus:ring-gabon-green/30"
                {...register("passeportDateDelivrance")}
              />
              {errors.passeportDateDelivrance && (
                <p className="text-[11px] text-red-500">
                  {errors.passeportDateDelivrance.message}
                </p>
              )}
            </div>

            {/* Numéro de passeport */}
            <div className="space-y-1">
              <label
                className="text-xs font-semibold text-slate-700"
                htmlFor="passeportNumero"
              >
                Numéro de passeport
              </label>
              <input
                id="passeportNumero"
                type="text"
                placeholder="PP1234567"
                className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-gabon-green/60 focus:outline-none focus:ring-2 focus:ring-gabon-green/30"
                {...register("passeportNumero")}
              />
              {errors.passeportNumero && (
                <p className="text-[11px] text-red-500">
                  {errors.passeportNumero.message}
                </p>
              )}
            </div>

            {/* Expiration passeport */}
            <div className="space-y-1">
              <label
                className="text-xs font-semibold text-slate-700"
                htmlFor="passeportDateExpiration"
              >
                Expiration du passeport
              </label>
              <input
                id="passeportDateExpiration"
                type="date"
                className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-gabon-green/60 focus:outline-none focus:ring-2 focus:ring-gabon-green/30"
                {...register("passeportDateExpiration")}
              />
              {errors.passeportDateExpiration && (
                <p className="text-[11px] text-red-500">
                  {errors.passeportDateExpiration.message}
                </p>
              )}
            </div>
          </div>

          {/* === Bloc 3 : Situation au Rwanda === */}
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {/* Adresse au Rwanda */}
            <div className="space-y-1 md:col-span-1">
              <label
                className="text-xs font-semibold text-slate-700"
                htmlFor="adresse"
              >
                Adresse complète au Rwanda
              </label>
              <textarea
                id="adresse"
                rows={3}
                placeholder="Quartier, rue, immeuble, district"
                className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-gabon-green/60 focus:outline-none focus:ring-2 focus:ring-gabon-green/30"
                {...register("adresse")}
              />
              {errors.adresse && (
                <p className="text-[11px] text-red-500">
                  {errors.adresse.message}
                </p>
              )}
            </div>

            {/* Statut */}
            <div className="space-y-1">
              <label
                className="text-xs font-semibold text-slate-700"
                htmlFor="statut"
              >
                Statut au Rwanda
              </label>
              <select
                id="statut"
                className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-gabon-green/60 focus:outline-none focus:ring-2 focus:ring-gabon-green/30"
                {...register("statut")}
              >
                <option value="">Choisir</option>
                <option>Étudiant</option>
                <option>Travailleur</option>
                <option>Stage / volontariat</option>
                <option>Résident sans emploi</option>
                <option>Autre situation</option>
              </select>
              {errors.statut && (
                <p className="text-[11px] text-red-500">
                  {errors.statut.message}
                </p>
              )}
            </div>
          </div>

          {/* === Bloc 4 : Contact d'urgence === */}
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {/* Nom contact urgence */}
            <div className="space-y-1">
              <label
                className="text-xs font-semibold text-slate-700"
                htmlFor="contactUrgenceNom"
              >
                Personne à contacter en urgence
              </label>
              <input
                id="contactUrgenceNom"
                type="text"
                placeholder="Nom et lien (parent, ami...)"
                className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-gabon-green/60 focus:outline-none focus:ring-2 focus:ring-gabon-green/30"
                {...register("contactUrgenceNom")}
              />
              {errors.contactUrgenceNom && (
                <p className="text-[11px] text-red-500">
                  {errors.contactUrgenceNom.message}
                </p>
              )}
            </div>

            {/* Téléphone d'urgence */}
            <div className="space-y-1">
              <label
                className="text-xs font-semibold text-slate-700"
                htmlFor="contactUrgenceTelephone"
              >
                Téléphone d&apos;urgence
              </label>
              <input
                id="contactUrgenceTelephone"
                type="tel"
                placeholder="+241 / +250 ..."
                className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-gabon-green/60 focus:outline-none focus:ring-2 focus:ring-gabon-green/30"
                {...register("contactUrgenceTelephone")}
              />
              {errors.contactUrgenceTelephone && (
                <p className="text-[11px] text-red-500">
                  {errors.contactUrgenceTelephone.message}
                </p>
              )}
            </div>
          </div>

          {/* === Bloc 5 : Consentement & actions === */}
          <div className="mt-6 space-y-4 rounded-2xl bg-slate-50 px-3 py-3">
            {/* Case à cocher de consentement */}
            <label className="flex items-start gap-2 text-xs text-slate-700">
              <input
                type="checkbox"
                className="mt-0.5 h-4 w-4 rounded border-slate-300 text-gabon-green focus:ring-gabon-green/60"
                {...register("consentement")}
              />
              <span>
                Je certifie l'exactitude des informations fournies et
                j'autorise l'Ambassade du Gabon au Rwanda à me
                contacter dans le cadre de cette demande d'immatriculation.
              </span>
            </label>
            {errors.consentement && (
              <p className="text-[11px] text-red-500">
                {errors.consentement.message}
              </p>
            )}

            {/* Boutons d'action */}
            <div className="flex flex-wrap gap-3 pt-1">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center rounded-full bg-gabon-green px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gabon-green/90 focus:outline-none focus:ring-2 focus:ring-gabon-green/50 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting
                  ? "Envoi en cours..."
                  : "Envoyer ma demande (prototype)"}
              </button>

              <button
                type="button"
                onClick={() => {
                  reset();
                  setIsSubmitted(false);
                }}
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                Effacer le formulaire
              </button>
            </div>

            <p className="text-[11px] text-slate-500 md:text-xs">
              Dans la version finale, ce formulaire sera relié à une base de
              données sécurisée (Prisma + PostgreSQL) et au tableau de bord
              administratif pour le suivi des immatriculations.
            </p>
          </div>
        </form>
      </div>
    </main>
  );
}
