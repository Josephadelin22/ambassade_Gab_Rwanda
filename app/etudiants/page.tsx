"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const etudiantSchema = z.object({
    nomComplet: z.string().min(1, "Le nom complet est requis."),
    email: z.string().email("Adresse e-mail invalide.").min(1, "L'adresse e-mail est requise."),
    telephone: z.string().min(1, "Le numéro de téléphone est requis."),
    universite: z.string().min(1, "Le nom de l'université est requis."),
    filiere: z.string().min(1, "La filière est requise."),
    niveau: z.string().min(1, "Le niveau d'étude est requis."),
    typeProgramme: z.string().min(1, "Le type de programme est requis."),
    dateArrivee: z.string().min(1, "La date d'arrivée est requise."),
    besoinsParticuliers: z.string().optional(),
});

type EtudiantFormData = z.infer<typeof etudiantSchema>;

export default function EtudiantsPage() {
    const [isSubmitted, setIsSubmitted] = useState(false);
const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
} = useForm<EtudiantFormData>({
    resolver: zodResolver(etudiantSchema),
    defaultValues: {
        nomComplet: "",
        email: "",
        telephone: "",
        universite: "",
        filiere: "",
        niveau: "",
        typeProgramme: "",
        dateArrivee: "",
        besoinsParticuliers: "",
    },
});

const onSubmit = (data: EtudiantFormData) => {
    console.log("Données du formulaire soumises :", data);
    setIsSubmitted(true);
};

return (
    <main className="min-h-screen bg-gradient-to-b from-gabon-green/5 via-white to-gabon-blue/5">
      <header className="border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-xl font-bold text-slate-900 md:text-2xl">
              Étudiants gabonais au Rwanda
            </h1>
            <p className="section-subtitle">
              Recensement des étudiants gabonais pour un meilleur suivi académique et
              consulaire.
            </p>
          </div>
          <span className="inline-flex w-fit rounded-full bg-gabon-blue/10 px-3 py-1 text-[11px] font-semibold text-gabon-blue">
            Espace diaspora – Étudiants
          </span>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-4 py-6 md:py-8">
        {isSubmitted && (
          <div className="mb-4 rounded-xl border border-gabon-green/60 bg-gabon-green/10 px-3 py-2 text-[11px] text-gabon-green md:text-xs">
            Votre fiche étudiant a été envoyée (prototype).
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="section-card">
          <h2 className="section-header">1. Identité et contact</h2>
          <div className="mt-3 grid gap-4 md:grid-cols-2">
            <div className="space-y-1">
              <label htmlFor="nomComplet" className="text-xs font-semibold text-slate-700">
                Nom complet
              </label>
              <input
                id="nomComplet"
                type="text"
                placeholder="NGUEMA Léa-Christelle"
                className="input-field"
                {...register("nomComplet")}
              />
              {errors.nomComplet && <p className="error-text">{errors.nomComplet.message}</p>}
            </div>

            <div className="space-y-1">
              <label htmlFor="email" className="text-xs font-semibold text-slate-700">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="nom@example.com"
                className="input-field"
                {...register("email")}
              />
              {errors.email && <p className="error-text">{errors.email.message}</p>}
            </div>

            <div className="space-y-1">
              <label htmlFor="telephone" className="text-xs font-semibold text-slate-700">
                Téléphone
              </label>
              <input
                id="telephone"
                type="tel"
                placeholder="+250 / +241"
                className="input-field"
                {...register("telephone")}
              />
              {errors.telephone && <p className="error-text">{errors.telephone.message}</p>}
            </div>
          </div>

          <h2 className="mt-6 section-header">2. Informations académiques</h2>
          <div className="mt-3 grid gap-4 md:grid-cols-2">
            <div className="space-y-1">
              <label htmlFor="universite" className="text-xs font-semibold text-slate-700">
                Université / Établissement
              </label>
              <input
                id="universite"
                type="text"
                placeholder="Université du Rwanda, ALU..."
                className="input-field"
                {...register("universite")}
              />
              {errors.universite && <p className="error-text">{errors.universite.message}</p>}
            </div>

            <div className="space-y-1">
              <label htmlFor="filiere" className="text-xs font-semibold text-slate-700">
                Filière / spécialité
              </label>
              <input
                id="filiere"
                type="text"
                placeholder="Informatique, médecine..."
                className="input-field"
                {...register("filiere")}
              />
              {errors.filiere && <p className="error-text">{errors.filiere.message}</p>}
            </div>

            <div className="space-y-1">
              <label htmlFor="niveau" className="text-xs font-semibold text-slate-700">
                Niveau d&apos;étude
              </label>
              <select id="niveau" className="select-field" {...register("niveau")}>
                <option value="">Choisir</option>
                <option>Licence 1</option>
                <option>Licence 2</option>
                <option>Licence 3</option>
                <option>Master 1</option>
                <option>Master 2</option>
                <option>Doctorat</option>
                <option>Autre formation</option>
              </select>
              {errors.niveau && <p className="error-text">{errors.niveau.message}</p>}
            </div>

            <div className="space-y-1">
              <label htmlFor="typeProgramme" className="text-xs font-semibold text-slate-700">
                Type de programme
              </label>
              <select
                id="typeProgramme"
                className="select-field"
                {...register("typeProgramme")}
              >
                <option value="">Choisir</option>
                <option>Étudiant boursier</option>
                <option>Étudiant non boursier</option>
                <option>Programme d'échange</option>
                <option>Autre situation</option>
              </select>
              {errors.typeProgramme && (
                <p className="error-text">{errors.typeProgramme.message}</p>
              )}
            </div>
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="space-y-1">
              <label htmlFor="dateArrivee" className="text-xs font-semibold text-slate-700">
                Date d'arrivée au Rwanda
              </label>
              <input
                id="dateArrivee"
                type="date"
                className="input-field"
                {...register("dateArrivee")}
              />
              {errors.dateArrivee && (
                <p className="error-text">{errors.dateArrivee.message}</p>
              )}
            </div>

            <div className="space-y-1">
              <label
                htmlFor="besoinsParticuliers"
                className="text-xs font-semibold text-slate-700"
              >
                Besoins particuliers (optionnel)
              </label>
              <textarea
                id="besoinsParticuliers"
                rows={3}
                placeholder="Problèmes administratifs, logement, santé..."
                className="textarea-field"
                {...register("besoinsParticuliers")}
              />
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <button type="submit" disabled={isSubmitting} className="btn-primary">
              {isSubmitting ? "Envoi..." : "Envoyer ma fiche (prototype)"}
            </button>
            <button
              type="button"
              onClick={() => {
                reset();
                setIsSubmitted(false);
              }}
              className="btn-secondary"
            >
              Effacer le formulaire
            </button>
          </div>

          <p className="mt-2 text-[11px] text-slate-500 md:text-xs">
            Ces informations permettront à l'ambassade d'organiser l'accompagnement
            des étudiants gabonais au Rwanda.
          </p>
        </form>
      </div>
    </main>
  );
}
